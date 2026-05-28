import "server-only";

import crypto from "crypto";
import type { CmsPageDocument } from "./types";

const maxPreviewAgeMs = 1000 * 60 * 30;

function secret() {
  const material =
    process.env.CMS_PREVIEW_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXTAUTH_SECRET ||
    "local-preview-secret";

  return crypto.createHash("sha256").update(`safa-cms-preview:${material}`).digest("hex");
}

function sign(payload: string) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function createPreviewToken(page: CmsPageDocument) {
  const payload = Buffer.from(
    JSON.stringify({
      slug: page.slug,
      route: page.route,
      issuedAt: Date.now(),
    }),
    "utf8",
  ).toString("base64url");

  return `${payload}.${sign(payload)}`;
}

export function createSiteOverridePreviewToken(route: string) {
  const payload = Buffer.from(
    JSON.stringify({
      type: "site-overrides",
      route,
      issuedAt: Date.now(),
    }),
    "utf8",
  ).toString("base64url");

  return `${payload}.${sign(payload)}`;
}

export function verifyPreviewToken(token: string, route: string) {
  const [payload, signature] = token.split(".");
  if (!payload || !signature || signature !== sign(payload)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      slug: string;
      route: string;
      issuedAt: number;
    };

    if (Date.now() - parsed.issuedAt > maxPreviewAgeMs) return null;
    if (parsed.route !== route) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function verifySiteOverridePreviewToken(token: string, route: string) {
  const [payload, signature] = token.split(".");
  if (!payload || !signature || signature !== sign(payload)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      type?: string;
      route: string;
      issuedAt: number;
    };

    if (parsed.type !== "site-overrides") return null;
    if (Date.now() - parsed.issuedAt > maxPreviewAgeMs) return null;
    if (parsed.route !== route) return null;

    return parsed;
  } catch {
    return null;
  }
}
