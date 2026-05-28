import { NextRequest, NextResponse } from "next/server";
import { decodeSiteAccessSession, SITE_ACCESS_COOKIE } from "@/lib/site-access/session";
import { verifySiteAccessSession } from "@/lib/site-access/proxy-verify";

const ADMIN_COOKIE = "safa_admin_session";

function isSignedPreview(searchParams: URLSearchParams) {
  return searchParams.get("preview") === "true" && searchParams.get("token");
}

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const adminCookie = request.cookies.get(ADMIN_COOKIE)?.value;
  const siteCookie = request.cookies.get(SITE_ACCESS_COOKIE)?.value;
  const siteSession = siteCookie ? decodeSiteAccessSession(siteCookie) : null;
  const hasAdminSession = Boolean(adminCookie);
  const hasSiteSession = Boolean(siteSession && await verifySiteAccessSession(siteSession));

  if (isSignedPreview(searchParams)) {
    const url = request.nextUrl.clone();
    url.pathname = "/cms-preview";
    url.searchParams.set("route", pathname);
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") && !hasAdminSession) {
    const login = new URL("/admin/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }

  if (pathname.startsWith("/access")) {
    if (hasSiteSession && pathname.startsWith("/access/login")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (!hasSiteSession && !hasAdminSession) {
    const login = new URL("/access/login", request.url);
    login.searchParams.set("next", `${pathname}${request.nextUrl.search}`);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/access/:path*", "/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
