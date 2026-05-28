import { NextResponse } from "next/server";
import { getSiteAccessSession } from "@/lib/site-access/auth";
import { trackSiteSession } from "@/lib/cms/safety";

export async function GET(request: Request) {
  const session = await getSiteAccessSession();
  if (!session) return NextResponse.json({ session: null });

  await trackSiteSession(session, request);
  return NextResponse.json({ session });
}

export async function POST(request: Request) {
  const session = await getSiteAccessSession();
  if (!session) return NextResponse.json({ error: "Site access is required." }, { status: 401 });

  const body = await request.json().catch(() => null);
  await trackSiteSession(session, request, String(body?.route ?? ""));
  return NextResponse.json({ ok: true });
}
