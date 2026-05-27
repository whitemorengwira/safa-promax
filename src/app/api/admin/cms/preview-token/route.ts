import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { createPreviewToken } from "@/lib/cms/preview-token";
import { saveCmsDraft } from "@/lib/cms/server";
import type { CmsPageDocument, CmsSession } from "@/lib/cms/types";

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

  const body = await request.json().catch(() => null);
  const content = body?.content as CmsPageDocument | undefined;
  if (!content?.slug) {
    return NextResponse.json({ error: "A page draft is required for preview." }, { status: 400 });
  }

  await saveCmsDraft(content.slug, content, asCmsSession(session));
  const token = createPreviewToken(content);
  const publicUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://safa-promax.vercel.app";
  const url = `${publicUrl}${content.route}?preview=true&token=${encodeURIComponent(token)}`;

  return NextResponse.json({ token, url });
}
