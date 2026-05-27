import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE = "safa_admin_session";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (searchParams.get("preview") === "true" && searchParams.get("token")) {
    const url = request.nextUrl.clone();
    url.pathname = "/cms-preview";
    url.searchParams.set("route", pathname);
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/admin/login")) {
    if (request.cookies.get(ADMIN_COOKIE)?.value) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") && !request.cookies.get(ADMIN_COOKIE)?.value) {
    const login = new URL("/admin/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
