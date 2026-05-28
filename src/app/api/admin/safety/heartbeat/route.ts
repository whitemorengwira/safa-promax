import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { trackAdminSession } from "@/lib/cms/safety";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  await trackAdminSession(session, request, String(body?.route ?? ""));
  return NextResponse.json({ ok: true });
}
