import { NextRequest, NextResponse } from "next/server";
import { verifySiteOverridePreviewToken } from "@/lib/cms/preview-token";
import { getPublishedSiteOverrides, getSiteOverridePayload, normaliseSiteRoute } from "@/lib/cms/site-overrides";

export async function GET(request: NextRequest) {
  const route = normaliseSiteRoute(request.nextUrl.searchParams.get("route") || "/");
  const token = request.nextUrl.searchParams.get("token") || "";
  const wantsPreview = request.nextUrl.searchParams.get("preview") === "true";

  if (wantsPreview && token && verifySiteOverridePreviewToken(token, route)) {
    const payload = await getSiteOverridePayload(route);
    return NextResponse.json({
      route,
      mode: "preview",
      overrides: payload.draft.length ? payload.draft : payload.published,
    });
  }

  const overrides = await getPublishedSiteOverrides(route);
  return NextResponse.json({ route, mode: "published", overrides });
}
