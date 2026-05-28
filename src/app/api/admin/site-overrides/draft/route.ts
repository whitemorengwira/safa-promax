import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canEdit } from "@/lib/admin/permissions";
import { recordCmsActivity } from "@/lib/cms/safety";
import { saveSiteOverrideDraft } from "@/lib/cms/site-overrides";
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
  const route = String(body?.route ?? "/");
  const overrides = Array.isArray(body?.overrides) ? (body.overrides as SiteOverrideRecord[]) : [];
  const result = await saveSiteOverrideDraft(route, overrides, asCmsSession(session));
  await recordCmsActivity({
    action: "cms_save_draft",
    actor: session.email,
    actorRole: session.role,
    route: result.route,
    summary: `Saved draft for ${result.route} with ${result.draft.length} override${result.draft.length === 1 ? "" : "s"}.`,
    details: { overrideCount: result.draft.length },
  });
  return NextResponse.json(result);
}
