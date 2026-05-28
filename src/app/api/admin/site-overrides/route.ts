import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { getSiteOverridePayload, normaliseSiteRoute } from "@/lib/cms/site-overrides";

export async function GET(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  const route = normaliseSiteRoute(request.nextUrl.searchParams.get("route") || "/");
  const payload = await getSiteOverridePayload(route);
  return NextResponse.json(payload);
}
