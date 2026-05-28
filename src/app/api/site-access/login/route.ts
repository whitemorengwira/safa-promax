import { NextResponse } from "next/server";
import { setSiteAccessSession, signInSiteAccess } from "@/lib/site-access/auth";
import { recordCmsActivity, trackSiteSession } from "@/lib/cms/safety";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = String(body?.email ?? "").trim();
  const password = String(body?.password ?? "");

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const session = await signInSiteAccess(email, password);
  if (!session) {
    return NextResponse.json(
      { error: "Access has not been approved for those details yet." },
      { status: 401 },
    );
  }

  await setSiteAccessSession(session);
  await trackSiteSession(session, request);
  await recordCmsActivity({
    action: "site_access_login",
    actor: session.email,
    actorRole: session.role,
    summary: `${session.email} signed in to the protected presentation.`,
  });
  return NextResponse.json({ ok: true, role: session.role });
}
