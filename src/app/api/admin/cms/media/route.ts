import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canEdit } from "@/lib/admin/permissions";
import { addCmsMedia } from "@/lib/cms/server";
import type { CmsSession } from "@/lib/cms/types";

function asCmsSession(session: NonNullable<Awaited<ReturnType<typeof getAdminSession>>>): CmsSession {
  return {
    id: session.id,
    email: session.email,
    name: session.name,
    role: session.role === "super_admin" || session.role === "editor" ? session.role : "editor",
    status: "active",
    issuedAt: session.issuedAt,
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
    provider: session.provider === "supabase" ? "supabase" : "local",
  };
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }
  if (!canEdit(session.role)) {
    return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "A media file is required." }, { status: 400 });
    }

    const media = await addCmsMedia(file, { altText: String(form.get("altText") || "") }, asCmsSession(session));
    return NextResponse.json({ media }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Media upload failed." },
      { status: 500 },
    );
  }
}
