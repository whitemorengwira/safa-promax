import { promises as fs } from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { addMediaAsset, getContentStore } from "@/lib/admin/content-store";
import type { GalleryAsset, GalleryResponse } from "@/lib/admin/media-gallery";
import { canEdit } from "@/lib/admin/permissions";
import type { CmsMediaAsset } from "@/lib/admin/types";

const mediaBucket = "safa-cms-media";
const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const publicImagesDir = path.join(publicDir, "images");
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const usageRoots = [
  path.join(projectRoot, "src"),
  path.join(projectRoot, "content"),
  path.join(projectRoot, "data"),
];

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

function titleFromUrl(url: string) {
  const filename = decodeURIComponent((url.split("?")[0].split("#")[0].split("/").pop() || "Image").trim());
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function assetIdFromUrl(url: string) {
  return `public-${url.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 96)}`;
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
  return path.extname(normalizeUrlKey(url)).replace(".", "").toLowerCase();
}

function readUInt24LE(buffer: Buffer, offset: number) {
  return buffer[offset] + (buffer[offset + 1] << 8) + (buffer[offset + 2] << 16);
}

function svgDimensions(buffer: Buffer) {
  const source = buffer.toString("utf8", 0, Math.min(buffer.length, 4096));
  const width = source.match(/\bwidth=["']?([\d.]+)/i);
  const height = source.match(/\bheight=["']?([\d.]+)/i);
  if (width && height) return { width: Math.round(Number(width[1])), height: Math.round(Number(height[1])) };

  const viewBox = source.match(/\bviewBox=["']\s*-?[\d.]+\s+-?[\d.]+\s+([\d.]+)\s+([\d.]+)["']/i);
  if (viewBox) return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };

  return { width: 0, height: 0 };
}

function imageDimensions(buffer: Buffer, extension: string) {
  try {
    if (extension === "png" && buffer.length >= 24 && buffer.toString("ascii", 1, 4) === "PNG") {
      return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
    }

    if ((extension === "jpg" || extension === "jpeg") && buffer[0] === 0xff && buffer[1] === 0xd8) {
      let offset = 2;
      while (offset + 9 < buffer.length) {
        if (buffer[offset] !== 0xff) {
          offset += 1;
          continue;
        }
        const marker = buffer[offset + 1];
        const length = buffer.readUInt16BE(offset + 2);
        if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
          return { width: buffer.readUInt16BE(offset + 7), height: buffer.readUInt16BE(offset + 5) };
        }
        offset += 2 + length;
      }
    }

    if (extension === "gif" && buffer.length >= 10 && buffer.toString("ascii", 0, 3) === "GIF") {
      return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
    }

    if (extension === "webp" && buffer.length >= 30 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
      const chunk = buffer.toString("ascii", 12, 16);
      if (chunk === "VP8X") {
        return { width: readUInt24LE(buffer, 24) + 1, height: readUInt24LE(buffer, 27) + 1 };
      }
      if (chunk === "VP8L" && buffer.length >= 25) {
        const b0 = buffer[21];
        const b1 = buffer[22];
        const b2 = buffer[23];
        const b3 = buffer[24];
        return {
          width: 1 + (((b1 & 0x3f) << 8) | b0),
          height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
        };
      }
      const startCode = buffer.indexOf(Buffer.from([0x9d, 0x01, 0x2a]));
      if (startCode >= 0 && startCode + 7 < buffer.length) {
        return {
          width: buffer.readUInt16LE(startCode + 3) & 0x3fff,
          height: buffer.readUInt16LE(startCode + 5) & 0x3fff,
        };
      }
    }

    if (extension === "svg") return svgDimensions(buffer);
  } catch {
    return { width: 0, height: 0 };
  }

  return { width: 0, height: 0 };
}

async function walkFiles(root: string, predicate: (file: string) => boolean) {
  const files: string[] = [];

  async function walk(directory: string) {
    const entries = await fs.readdir(directory, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && predicate(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  await walk(root);
  return files;
}

function usageLabel(file: string) {
  const relative = path.relative(projectRoot, file).replace(/\\/g, "/");
  if (relative === "src/app/page.tsx") return "/";
  const pageMatch = relative.match(/^src\/app\/(.+)\/page\.(tsx|ts|jsx|js)$/);
  if (pageMatch) {
    return `/${pageMatch[1].replace(/\/\([^)]+\)/g, "").replace(/\/page$/, "")}`.replace(/\/+/g, "/");
  }
  return relative;
}

async function usageMap() {
  const map = new Map<string, Set<string>>();
  const textExtensions = new Set([".css", ".json", ".md", ".mdx", ".ts", ".tsx", ".js", ".jsx"]);

  for (const root of usageRoots) {
    const files = await walkFiles(root, (file) => textExtensions.has(path.extname(file).toLowerCase()));
    for (const file of files) {
      const content = await fs.readFile(file, "utf8").catch(() => "");
      const matches = content.match(/\/images\/[A-Za-z0-9/_@.\-]+/g) ?? [];
      for (const match of matches) {
        const key = normalizeUrlKey(match);
        if (!map.has(key)) map.set(key, new Set());
        map.get(key)?.add(usageLabel(file));
      }
    }
  }

  return map;
}

async function publicImageAssets(cmsByUrl: Map<string, CmsMediaAsset>, usedByUrl: Map<string, Set<string>>) {
  const files = await walkFiles(publicImagesDir, (file) => imageExtensions.has(path.extname(file).toLowerCase()));

  return Promise.all(
    files.map(async (file): Promise<GalleryAsset> => {
      const relative = path.relative(publicDir, file).replace(/\\/g, "/");
      const url = `/${relative}`;
      const key = normalizeUrlKey(url);
      const extension = extensionFor(url);
      const stat = await fs.stat(file);
      const buffer = await fs.readFile(file);
      const dimensions = imageDimensions(buffer, extension);
      const cmsAsset = cmsByUrl.get(key);
      const usedOn = Array.from(usedByUrl.get(key) ?? []).sort();
      const tags = new Set<string>([
        "public",
        usedOn.length ? "used" : "unused",
        url.includes("/ai/") ? "generated" : "static",
        ...(cmsAsset?.tags ?? []),
      ]);

      return {
        id: cmsAsset?.id ?? assetIdFromUrl(url),
        cmsId: cmsAsset?.id,
        url,
        title: cmsAsset?.title ?? titleFromUrl(url),
        source: cmsAsset?.source ?? "SAFA public image library",
        tags: Array.from(tags),
        locked: cmsAsset?.locked ?? true,
        width: dimensions.width,
        height: dimensions.height,
        size: stat.size,
        extension,
        usedOn,
        origin: cmsAsset ? "merged" : "public",
        type: cmsAsset?.type ?? "image",
      };
    }),
  );
}

function cmsOnlyAsset(asset: CmsMediaAsset, usedByUrl: Map<string, Set<string>>): GalleryAsset {
  const key = normalizeUrlKey(asset.url);
  const usedOn = Array.from(usedByUrl.get(key) ?? []).sort();
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
  const usedByUrl = await usageMap();
  const publicAssets = await publicImageAssets(cmsByUrl, usedByUrl);
  const publicKeys = new Set(publicAssets.map((asset) => normalizeUrlKey(asset.url)));
  const cmsAssets = store.media
    .filter((asset) => !publicKeys.has(normalizeUrlKey(asset.url)))
    .map((asset) => cmsOnlyAsset(asset, usedByUrl));

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
