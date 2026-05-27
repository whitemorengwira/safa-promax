import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { addMediaAsset } from "@/lib/admin/content-store";
import { canEdit } from "@/lib/admin/permissions";

const mediaBucket = "safa-cms-media";

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

async function ensureBucket(client: NonNullable<ReturnType<typeof supabaseAdmin>>) {
  const { data } = await client.storage.getBucket(mediaBucket);
  if (data) return;

  await client.storage.createBucket(mediaBucket, {
    public: true,
    fileSizeLimit: "12MB",
    allowedMimeTypes: ["image/png", "image/jpeg", "image/webp", "image/gif", "application/pdf"],
  });
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
