import crypto from "crypto";
import type { SiteAccessSession } from "./types";

export const SITE_ACCESS_COOKIE = "safa_site_session";

function secret() {
  const material =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXTAUTH_SECRET ||
    process.env.SAFA_ADMIN_PASSWORD_HASH ||
    process.env.SAFA_ADMIN_PASSWORD ||
    "local-development-only-site-access-secret";

  return crypto
    .createHash("sha256")
    .update(`safa-promax-site-access-session:${material}`)
    .digest("hex");
}

function sign(payload: string) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function encodeSiteAccessSession(session: SiteAccessSession) {
  const payload = Buffer.from(JSON.stringify(session), "utf8").toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function decodeSiteAccessSession(value: string): SiteAccessSession | null {
  const [payload, signature] = value.split(".");
  if (!payload || !signature || sign(payload) !== signature) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as SiteAccessSession;
    return session.status === "active" ? session : null;
  } catch {
    return null;
  }
}
