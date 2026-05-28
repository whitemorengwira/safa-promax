import { NextResponse } from "next/server";
import { authenticateAdmin, setAdminSession } from "@/lib/admin/auth";
import { recordCmsActivity, trackAdminSession } from "@/lib/cms/safety";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = String(body?.email ?? "");
  const password = String(body?.password ?? "");

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  try {
    const session = await authenticateAdmin(email, password);
    if (!session) {
      return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
    }

    await setAdminSession(session);
    await trackAdminSession(session, request);
    await recordCmsActivity({
      action: "admin_login",
      actor: session.email,
      actorRole: session.role,
      summary: `${session.email} signed in to the CMS.`,
    });
    return NextResponse.json({ ok: true, role: session.role });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Admin sign-in failed." },
      { status: 500 },
    );
  }
}
