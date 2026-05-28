import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authenticateSiteAccess } from "./store";
import { decodeSiteAccessSession, encodeSiteAccessSession, SITE_ACCESS_COOKIE } from "./session";
import type { SiteAccessSession } from "./types";

export async function signInSiteAccess(email: string, password: string) {
  return authenticateSiteAccess(email, password);
}

export async function getSiteAccessSession() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SITE_ACCESS_COOKIE)?.value;
  return raw ? decodeSiteAccessSession(raw) : null;
}

export async function requireSiteAccessSession() {
  const session = await getSiteAccessSession();
  if (!session) redirect("/access/login");
  return session;
}

export async function setSiteAccessSession(session: SiteAccessSession) {
  const cookieStore = await cookies();
  cookieStore.set(SITE_ACCESS_COOKIE, encodeSiteAccessSession(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSiteAccessSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SITE_ACCESS_COOKIE);
}
