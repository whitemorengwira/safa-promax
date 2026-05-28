import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canEdit } from "@/lib/admin/permissions";
import { createSiteOverridePreviewToken } from "@/lib/cms/preview-token";
import { normaliseSiteRoute, saveSiteOverrideDraft } from "@/lib/cms/site-overrides";
import type { SiteOverrideRecord } from "@/lib/cms/site-overrides-types";
import type { CmsSession } from "@/lib/cms/types";

function asCmsSession(session: NonNullable<Awaited<ReturnType<typeof getAdminSession>>>): CmsSession {
  return {
    id: session.id,
    email: session.email,
    name: session.name,
    role: session.role === "super_admin" || session.role === "super-admin" || session.role === "admin" ? "super_admin" : "editor",
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

  const body = await request.json().catch(() => null);
  const route = normaliseSiteRoute(String(body?.route ?? "/"));
  const overrides = Array.isArray(body?.overrides) ? (body.overrides as SiteOverrideRecord[]) : [];
  await saveSiteOverrideDraft(route, overrides, asCmsSession(session));

  const publicUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://safa-promax.vercel.app").replace(/\/$/, "");
  const token = createSiteOverridePreviewToken(route);
  const url = `${publicUrl}${route}?cms-preview=true&cms-token=${encodeURIComponent(token)}`;

  return NextResponse.json({ token, url });
}
