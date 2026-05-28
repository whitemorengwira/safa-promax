import { NextResponse } from "next/server";
import { clearAdminSession, getAdminSession } from "@/lib/admin/auth";
import { endTrackedSession, recordCmsActivity } from "@/lib/cms/safety";

export async function POST() {
  const session = await getAdminSession();
  if (session) {
    await endTrackedSession("admin", session.id);
    await recordCmsActivity({
      action: "admin_logout",
      actor: session.email,
      actorRole: session.role,
      summary: `${session.email} signed out of the CMS.`,
    });
  }
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}
