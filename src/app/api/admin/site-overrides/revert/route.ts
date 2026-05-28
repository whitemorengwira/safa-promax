import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canPublish } from "@/lib/admin/permissions";
import { recordCmsActivity } from "@/lib/cms/safety";
import { revertAllSiteOverrides, revertSiteOverrideRoute } from "@/lib/cms/site-overrides";
import type { CmsSession } from "@/lib/cms/types";

function asCmsSession(session: NonNullable<Awaited<ReturnType<typeof getAdminSession>>>): CmsSession {
  return {
    id: session.id,
    email: session.email,
    name: session.name,
    role: "super_admin",
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
    return NextResponse.json({ error: "Super admin access is required for restore original." }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  const scope = String(body?.scope ?? "route");
  const route = String(body?.route ?? "/");
  const result = scope === "site"
    ? await revertAllSiteOverrides(asCmsSession(session))
    : await revertSiteOverrideRoute(route, asCmsSession(session));

  if (scope === "site" && "routes" in result) {
    for (const item of result.routes) revalidatePath(item);
  } else {
    revalidatePath(route);
  }

  await recordCmsActivity({
    action: scope === "site" ? "cms_restore_original_site" : "cms_restore_original_route",
    actor: session.email,
    actorRole: session.role,
    route: scope === "site" ? undefined : route,
    summary: scope === "site" ? "Restored the full site to source-original content." : `Restored ${route} to source-original content.`,
  });

  return NextResponse.json(result);
}
