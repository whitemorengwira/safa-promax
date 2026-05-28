import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canPublish } from "@/lib/admin/permissions";
import { recordCmsActivity } from "@/lib/cms/safety";
import { restoreSiteOverrideVersion } from "@/lib/cms/site-overrides";
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
  if (!canPublish(session.role)) {
    return NextResponse.json({ error: "Publish access is required." }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  const route = String(body?.route ?? "/");
  const versionId = String(body?.versionId ?? "");
  if (!versionId) {
    return NextResponse.json({ error: "Version id is required." }, { status: 400 });
  }

  const result = await restoreSiteOverrideVersion(route, versionId, asCmsSession(session));
  await recordCmsActivity({
    action: "cms_restore_version",
    actor: session.email,
    actorRole: session.role,
    route: result.route,
    summary: `Restored version ${versionId} for ${result.route}.`,
    details: { versionId, commit: result.commit },
  });
  revalidatePath(result.route);
  return NextResponse.json(result);
}
