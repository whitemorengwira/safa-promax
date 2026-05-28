import { NextResponse } from "next/server";
import { clearSiteAccessSession, getSiteAccessSession } from "@/lib/site-access/auth";
import { endTrackedSession, recordCmsActivity } from "@/lib/cms/safety";

export async function POST() {
  const session = await getSiteAccessSession();
  if (session) {
    await endTrackedSession("site", session.id);
    await recordCmsActivity({
      action: "site_access_logout",
      actor: session.email,
      actorRole: session.role,
      summary: `${session.email} signed out of the protected presentation.`,
    });
  }
  await clearSiteAccessSession();
  return NextResponse.json({ ok: true });
}
