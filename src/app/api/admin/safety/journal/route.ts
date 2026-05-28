import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canEdit } from "@/lib/admin/permissions";
import { recordCmsActivity, recordCmsEditJournal } from "@/lib/cms/safety";
import type { SiteOverrideRecord } from "@/lib/cms/site-overrides-types";

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
  const action = String(body?.action ?? "cms_edit");
  const beforeOverrides = Array.isArray(body?.beforeOverrides) ? (body.beforeOverrides as SiteOverrideRecord[]) : [];
  const afterOverrides = Array.isArray(body?.afterOverrides) ? (body.afterOverrides as SiteOverrideRecord[]) : [];
  const summary = String(body?.summary ?? `Edited ${route}`);

  await recordCmsEditJournal({
    route,
    actor: session.email,
    action,
    beforeOverrides,
    afterOverrides,
    summary,
  });
  await recordCmsActivity({
    action,
    actor: session.email,
    actorRole: session.role,
    route,
    summary,
    details: { beforeCount: beforeOverrides.length, afterCount: afterOverrides.length },
  });

  return NextResponse.json({ ok: true });
}
