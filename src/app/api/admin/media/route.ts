import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import mediaManifest from "@/generated/media-gallery-manifest.json";
import { getAdminSession } from "@/lib/admin/auth";
import { addMediaAsset, getContentStore } from "@/lib/admin/content-store";
import type { GalleryAsset, GalleryResponse } from "@/lib/admin/media-gallery";
import { canEdit } from "@/lib/admin/permissions";
import type { CmsMediaAsset } from "@/lib/admin/types";

const mediaBucket = "safa-cms-media";

interface StaticMediaManifestAsset {
  id: string;
  url: string;
  title: string;
  source: string;
  tags: string[];
  locked: boolean;
  width: number;
  height: number;
  size: number;
  extension: string;
  usedOn: string[];
  origin: "public";
  type: "image";
}

interface MediaGalleryManifest {
  version: number;
  assets: StaticMediaManifestAsset[];
  usageByUrl: Record<string, string[]>;
}

const staticMediaManifest = mediaManifest as MediaGalleryManifest;

function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function safeFilename(name: string) {
  const [base, ...rest] = name.split(".");
  const ext = rest.length ? `.${rest.pop()}` : "";
  return `${base || "asset"}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64)
    .concat(ext.toLowerCase());
}

function normalizeUrlKey(url: string) {
  if (!url) return "";
  try {
    const parsed = new URL(url, "https://safa.local");
    return parsed.pathname;
  } catch {
    return url.split("?")[0].split("#")[0];
  }
}

function extensionFor(url: string) {
  const filename = normalizeUrlKey(url).split("/").pop() || "";
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex >= 0 ? filename.slice(dotIndex + 1).toLowerCase() : "";
}

function usedOnFor(url: string) {
  return [...(staticMediaManifest.usageByUrl[normalizeUrlKey(url)] ?? [])].sort();
}

function publicManifestAssets(cmsByUrl: Map<string, CmsMediaAsset>): GalleryAsset[] {
  return staticMediaManifest.assets.map((asset) => {
    const cmsAsset = cmsByUrl.get(normalizeUrlKey(asset.url));
    const tags = new Set<string>([...asset.tags, ...(cmsAsset?.tags ?? [])]);

    return {
      id: cmsAsset?.id ?? asset.id,
      cmsId: cmsAsset?.id,
      url: asset.url,
      title: cmsAsset?.title ?? asset.title,
      source: cmsAsset?.source ?? asset.source,
      tags: Array.from(tags),
      locked: cmsAsset?.locked ?? asset.locked,
      width: asset.width,
      height: asset.height,
      size: cmsAsset?.size ?? asset.size,
      extension: asset.extension,
      usedOn: asset.usedOn,
      origin: cmsAsset ? "merged" : "public",
      type: cmsAsset?.type ?? asset.type,
    };
  });
}

function cmsOnlyAsset(asset: CmsMediaAsset): GalleryAsset {
  const usedOn = usedOnFor(asset.url);
  const tags = new Set<string>([
    "cms",
    asset.storagePath ? "uploaded" : "linked",
    usedOn.length ? "used" : "unused",
    ...asset.tags,
  ]);

  return {
    id: asset.id,
    cmsId: asset.id,
    url: asset.url,
    title: asset.title,
    source: asset.source,
    tags: Array.from(tags),
    locked: asset.locked,
    width: 0,
    height: 0,
    size: asset.size ?? 0,
    extension: extensionFor(asset.url),
    usedOn,
    origin: "cms",
    type: asset.type,
  };
}

async function ensureBucket(client: NonNullable<ReturnType<typeof supabaseAdmin>>) {
  const { data } = await client.storage.getBucket(mediaBucket);
  if (data) return;

  await client.storage.createBucket(mediaBucket, {
    public: true,
    fileSizeLimit: "12MB",
    allowedMimeTypes: ["image/png", "image/jpeg", "image/webp", "image/gif", "application/pdf"],
  });
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  const store = await getContentStore();
  const cmsByUrl = new Map(store.media.map((asset) => [normalizeUrlKey(asset.url), asset]));
  const publicAssets = publicManifestAssets(cmsByUrl);
  const publicKeys = new Set(publicAssets.map((asset) => normalizeUrlKey(asset.url)));
  const cmsAssets = store.media
    .filter((asset) => !publicKeys.has(normalizeUrlKey(asset.url)))
    .map((asset) => cmsOnlyAsset(asset));

  const response: GalleryResponse = {
    assets: [...publicAssets, ...cmsAssets].sort((a, b) => {
      if (b.usedOn.length !== a.usedOn.length) return b.usedOn.length - a.usedOn.length;
      return a.title.localeCompare(b.title);
    }),
    generatedAt: new Date().toISOString(),
  };

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  if (!canEdit(session.role)) {
    return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") || "";

  try {
    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const file = form.get("file");
      if (!(file instanceof File)) {
        return NextResponse.json({ error: "A media file is required." }, { status: 400 });
      }

      const client = supabaseAdmin();
      if (!client) {
        return NextResponse.json({ error: "Supabase media storage is not configured." }, { status: 500 });
      }

      await ensureBucket(client);
      const storagePath = `admin/${Date.now()}-${safeFilename(file.name)}`;
      const { error: uploadError } = await client.storage.from(mediaBucket).upload(storagePath, file, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      const { data } = client.storage.from(mediaBucket).getPublicUrl(storagePath);
      const asset = await addMediaAsset(
        {
          title: String(form.get("title") || file.name),
          type: file.type.startsWith("image/") ? "image" : "document",
          url: data.publicUrl,
          source: String(form.get("source") || "SAFA CMS upload"),
          locked: false,
          tags: String(form.get("tags") || "cms,upload")
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          storagePath,
          mimeType: file.type,
          size: file.size,
        },
        session,
      );

      return NextResponse.json({ asset }, { status: 201 });
    }

    const input = await request.json();
    const asset = await addMediaAsset(
      {
        title: String(input.title || "CMS media asset"),
        type: input.type || "image",
        url: String(input.url || ""),
        source: String(input.source || "SAFA CMS"),
        locked: Boolean(input.locked),
        tags: Array.isArray(input.tags) ? input.tags : [],
      },
      session,
    );

    return NextResponse.json({ asset }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Media could not be uploaded." },
      { status: 400 },
    );
  }
}
