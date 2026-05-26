import "server-only";

import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { AdminRole, AdminSession, AdminStatus } from "./types";
import { getContentStore, saveContentStore } from "./content-store";

export const ADMIN_COOKIE = "safa_admin_session";

function secret() {
  const material =
    process.env.NEXTAUTH_SECRET ||
    process.env.SAFA_ADMIN_PASSWORD_HASH ||
    process.env.SAFA_ADMIN_PASSWORD ||
    "local-development-only-session-secret";

  return crypto
    .createHash("sha256")
    .update(`safa-promax-admin-session:${material}`)
    .digest("hex");
}

function sign(payload: string) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("hex");
}

function encodeSession(session: AdminSession) {
  const payload = Buffer.from(JSON.stringify(session), "utf8").toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function decodeSession(value: string): AdminSession | null {
  const [payload, signature] = value.split(".");
  if (!payload || !signature || sign(payload) !== signature) return null;

  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AdminSession;
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!raw) return null;

  const session = decodeSession(raw);
  if (!session || session.status !== "active") return null;
  return session;
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}

export async function setAdminSession(session: AdminSession) {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, encodeSession(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
}

export function hashAdminPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");

  return `${salt}:${hash}`;
}

function verifyPasswordHash(password: string, hash: string) {
  const [salt, key] = hash.split(":");
  if (!salt || !key) return false;

  const derived = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(key, "hex");

  return expected.length === derived.length && crypto.timingSafeEqual(expected, derived);
}

function verifyPlainPassword(password: string, expectedPassword: string) {
  const actual = crypto.createHash("sha256").update(password).digest();
  const expected = crypto.createHash("sha256").update(expectedPassword).digest();

  return crypto.timingSafeEqual(actual, expected);
}

function verifyConfiguredPassword(password: string, hash?: string, plainPassword?: string) {
  if (hash) return verifyPasswordHash(password, hash);
  if (plainPassword) return verifyPlainPassword(password, plainPassword);

  return false;
}

function normalizeEmail(email: string) {
  return email.toLowerCase().trim();
}

function assertAdminConfigured(adminEmail?: string, passwordHash?: string, plainPassword?: string) {
  if (!adminEmail || (!passwordHash && !plainPassword)) {
    throw new Error("Admin sign-in is not configured. Set SAFA_ADMIN_EMAIL and SAFA_ADMIN_PASSWORD.");
  }
}

function sessionFromUser(user: {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  status: AdminStatus;
}) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    status: user.status,
    issuedAt: Date.now(),
  } satisfies AdminSession;
}

function buildBootstrapAdmin(adminEmail: string) {
  return {
    id: `user-${Date.now()}`,
    email: adminEmail,
    name: process.env.SAFA_ADMIN_NAME || "SAFA Admin",
    role: "super-admin" as AdminRole,
    status: "active" as AdminStatus,
    createdAt: new Date().toISOString(),
    approvedAt: new Date().toISOString(),
  };
}

async function authenticateEnvironmentAdmin(email: string, password: string) {
  const adminEmail = process.env.SAFA_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
  const passwordHash = process.env.SAFA_ADMIN_PASSWORD_HASH;
  const plainPassword = process.env.SAFA_ADMIN_PASSWORD;

  if (!adminEmail) return null;

  if (normalizeEmail(email) !== normalizeEmail(adminEmail)) {
    return null;
  }

  assertAdminConfigured(adminEmail, passwordHash, plainPassword);

  if (!verifyConfiguredPassword(password, passwordHash, plainPassword)) {
    return null;
  }

  const store = await getContentStore();
  const existing = store.users.find((user) => normalizeEmail(user.email) === normalizeEmail(adminEmail));
  const user = existing ?? buildBootstrapAdmin(adminEmail);

  if (!existing) {
    store.users.push(user);
    store.auditLog.unshift({
      id: `admin-bootstrap-${Date.now()}`,
      action: "admin_bootstrap",
      actor: adminEmail,
      summary: "Environment admin user created and approved.",
      createdAt: new Date().toISOString(),
    });
    await saveContentStore(store);
  }

  return sessionFromUser(user);
}

async function authenticateStoredAdmin(email: string, password: string) {
  const store = await getContentStore();
  const user = store.users.find((item) => normalizeEmail(item.email) === normalizeEmail(email));

  if (!user || user.status !== "active" || !user.passwordHash) {
    return null;
  }

  if (!verifyPasswordHash(password, user.passwordHash)) {
    return null;
  }

  return sessionFromUser(user);
}

export async function authenticateAdmin(email: string, password: string) {
  const environmentSession = await authenticateEnvironmentAdmin(email, password);
  if (environmentSession) return environmentSession;

  return authenticateStoredAdmin(email, password);
}
