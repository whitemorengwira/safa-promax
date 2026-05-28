import "server-only";

import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getContentStore, saveContentStore } from "./content-store";
import type { AdminRole, AdminSession, AdminUser } from "./types";

export const ADMIN_COOKIE = "safa_admin_session";

function secret() {
  const material =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
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
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
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

function normalizeRole(role: unknown, email: string): AdminRole | null {
  const value = String(role ?? "").trim().toLowerCase().replace(/-/g, "_");
  if (value === "super_admin") return "super_admin";
  if (value === "super-admin") return "super-admin";
  if (value === "editor" || value === "admin" || value === "approver" || value === "viewer") {
    return value as AdminRole;
  }

  const bootstrapEmail = process.env.SAFA_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
  if (bootstrapEmail && email.toLowerCase() === bootstrapEmail.toLowerCase()) {
    return "super_admin";
  }

  return null;
}

function supabaseBrowserAuthClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function supabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function sessionFromSupabase(input: {
  id: string;
  email: string;
  name?: string | null;
  role: AdminRole;
  accessToken: string;
  refreshToken: string;
}): AdminSession {
  return {
    id: input.id,
    email: input.email,
    name: input.name || input.email,
    role: input.role,
    status: "active",
    issuedAt: Date.now(),
    accessToken: input.accessToken,
    refreshToken: input.refreshToken,
    provider: "supabase",
  };
}

function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest();
}

function verifyPlainPassword(password: string, expectedPassword: string) {
  const actual = hashPassword(password);
  const expected = hashPassword(expectedPassword);
  return crypto.timingSafeEqual(actual, expected);
}

function verifyPasswordHash(password: string, hash: string) {
  const [salt, key] = hash.split(":");
  if (!salt || !key) return false;

  const derived = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(key, "hex");

  return expected.length === derived.length && crypto.timingSafeEqual(expected, derived);
}

function localSession(email: string): AdminSession {
  return {
    id: `local-${crypto.createHash("sha1").update(email).digest("hex").slice(0, 16)}`,
    email,
    name: process.env.SAFA_ADMIN_NAME || "SAFA Admin",
    role: "super_admin",
    status: "active",
    issuedAt: Date.now(),
    provider: "local",
  };
}

function normalizeEmail(email: string) {
  return email.toLowerCase().trim();
}

function sessionFromStoredUser(user: Pick<AdminUser, "id" | "email" | "name" | "role" | "status">): AdminSession {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    status: user.status,
    issuedAt: Date.now(),
    provider: "local",
  };
}

function buildBootstrapAdmin(adminEmail: string): AdminUser {
  const now = new Date().toISOString();
  return {
    id: `user-${Date.now()}`,
    email: adminEmail,
    name: process.env.SAFA_ADMIN_NAME || "SAFA Admin",
    role: "super-admin",
    status: "active",
    createdAt: now,
    approvedAt: now,
  };
}

async function authenticateSupabaseAdmin(email: string, password: string) {
  const client = supabaseBrowserAuthClient();
  if (!client) return null;

  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error || !data.user || !data.session) return null;

  const userRole = normalizeRole(
    data.user.app_metadata?.role ?? data.user.user_metadata?.role,
    data.user.email ?? email,
  );
  if (!userRole) return null;

  return sessionFromSupabase({
    id: data.user.id,
    email: data.user.email ?? email,
    name: String(data.user.user_metadata?.name || data.user.user_metadata?.full_name || ""),
    role: userRole,
    accessToken: data.session.access_token,
    refreshToken: data.session.refresh_token,
  });
}

async function authenticateLocalBootstrap(email: string, password: string) {
  const adminEmail = process.env.SAFA_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
  const passwordHash = process.env.SAFA_ADMIN_PASSWORD_HASH;
  const plainPassword = process.env.SAFA_ADMIN_PASSWORD;

  if (!adminEmail || normalizeEmail(email) !== normalizeEmail(adminEmail)) return null;
  const passwordMatches =
    Boolean(passwordHash && verifyPasswordHash(password, passwordHash)) ||
    Boolean(plainPassword && verifyPlainPassword(password, plainPassword));
  if (!passwordMatches) return null;

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

  return sessionFromStoredUser(user);
}

async function authenticateStoredAdmin(email: string, password: string) {
  const store = await getContentStore();
  const user = store.users.find((item) => normalizeEmail(item.email) === normalizeEmail(email));

  if (!user || user.status !== "active" || !user.passwordHash) return null;
  if (!verifyPasswordHash(password, user.passwordHash)) return null;

  return sessionFromStoredUser(user);
}

async function authenticateLegacyLocalBootstrap(email: string, password: string) {
  const adminEmail = process.env.SAFA_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
  const passwordHash = process.env.SAFA_ADMIN_PASSWORD_HASH;
  const plainPassword = process.env.SAFA_ADMIN_PASSWORD;

  if (!adminEmail || normalizeEmail(email) !== normalizeEmail(adminEmail)) return null;
  if (passwordHash && verifyPasswordHash(password, passwordHash)) return localSession(adminEmail);
  if (plainPassword && verifyPlainPassword(password, plainPassword)) return localSession(adminEmail);
  return null;
}

export async function authenticateAdmin(email: string, password: string) {
  const supabaseSession = await authenticateSupabaseAdmin(email, password);
  if (supabaseSession) return supabaseSession;

  const environmentSession = await authenticateLocalBootstrap(email, password);
  if (environmentSession) return environmentSession;

  const storedSession = await authenticateStoredAdmin(email, password);
  if (storedSession) return storedSession;

  return authenticateLegacyLocalBootstrap(email, password);
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!raw) return null;

  const session = decodeSession(raw);
  if (!session || session.status !== "active") return null;

  if (session.provider === "supabase" && session.accessToken) {
    const admin = supabaseAdminClient();
    const { data, error } = admin ? await admin.auth.getUser(session.accessToken) : { data: null, error: null };
    if (!error && data?.user) {
      const role = normalizeRole(data.user.app_metadata?.role ?? data.user.user_metadata?.role ?? session.role, data.user.email ?? session.email);
      if (!role) return null;
      return {
        ...session,
        id: data.user.id,
        email: data.user.email ?? session.email,
        role,
      };
    }
  }

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
    maxAge: 60 * 60 * 24 * 7,
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
