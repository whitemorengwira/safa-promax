import "server-only";

import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  siteAccessRoles,
  siteAccessStatuses,
  type SafeSiteAccessUser,
  type SiteAccessAuditEntry,
  type SiteAccessRole,
  type SiteAccessSession,
  type SiteAccessState,
  type SiteAccessStatus,
  type SiteAccessUser,
} from "./types";

const usersTable = "site_access_users";
const auditTable = "site_access_audit_log";
const legacyTableName = "safa_cms_store";
const legacyStoreId = "site-access";
const writableStorePath = process.env.VERCEL
  ? path.join("/tmp", "safa-site-access-store.json")
  : path.join(process.cwd(), "data", "site-access", "store.json");

let supabaseClient: SupabaseClient | null = null;

function now() {
  return new Date().toISOString();
}

function emptyState(): SiteAccessState {
  return { updatedAt: now(), users: [], auditLog: [] };
}

function normaliseEmail(email: string) {
  return email.toLowerCase().trim();
}

function supabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
  return { url, key, configured: Boolean(url && key) };
}

function getSupabaseAdmin() {
  const { url, key, configured } = supabaseConfig();
  if (!configured || !url || !key) return null;

  supabaseClient ??= createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseClient;
}

function isMissingSchema(error: { code?: string; message?: string } | null | undefined) {
  const message = error?.message ?? "";
  return (
    error?.code === "PGRST205" ||
    message.includes("Could not find the table") ||
    message.includes("schema cache")
  );
}

function normaliseRole(value: unknown): SiteAccessRole {
  const role = String(value ?? "viewer").trim().toLowerCase().replace(/-/g, "_") as SiteAccessRole;
  return siteAccessRoles.includes(role) ? role : "viewer";
}

function normaliseStatus(value: unknown): SiteAccessStatus {
  const status = String(value ?? "pending").trim().toLowerCase() as SiteAccessStatus;
  return siteAccessStatuses.includes(status) ? status : "pending";
}

function safeUser(user: SiteAccessUser): SafeSiteAccessUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    organisation: user.organisation,
    role: user.role,
    status: user.status,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    approvedAt: user.approvedAt,
    revokedAt: user.revokedAt,
    approvedBy: user.approvedBy,
  };
}

function audit(action: string, actor: string, summary: string): SiteAccessAuditEntry {
  return {
    id: `${action}-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`,
    action,
    actor,
    summary,
    createdAt: now(),
  };
}

export function hashSiteAccessPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, hash: string) {
  const [salt, key] = hash.split(":");
  if (!salt || !key) return false;

  const derived = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(key, "hex");
  return expected.length === derived.length && crypto.timingSafeEqual(expected, derived);
}

function normaliseState(state: SiteAccessState): SiteAccessState {
  return {
    updatedAt: state.updatedAt ?? now(),
    users: (state.users ?? []).map((user) => ({
      ...user,
      email: normaliseEmail(user.email),
      organisation: user.organisation ?? "",
      role: normaliseRole(user.role),
      status: normaliseStatus(user.status),
      updatedAt: user.updatedAt ?? user.createdAt ?? state.updatedAt ?? now(),
      createdAt: user.createdAt ?? state.updatedAt ?? now(),
    })),
    auditLog: state.auditLog ?? [],
  };
}

async function readFileStore(): Promise<SiteAccessState> {
  try {
    const file = await fs.readFile(writableStorePath, "utf8");
    return normaliseState(JSON.parse(file) as SiteAccessState);
  } catch {
    return emptyState();
  }
}

async function writeFileStore(state: SiteAccessState) {
  const next = normaliseState({ ...state, updatedAt: now() });
  await fs.mkdir(path.dirname(writableStorePath), { recursive: true });
  await fs.writeFile(writableStorePath, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  return next;
}

async function loadLegacyState(client: SupabaseClient): Promise<SiteAccessState | null> {
  const { data, error } = await client
    .from(legacyTableName)
    .select("data")
    .eq("id", legacyStoreId)
    .maybeSingle();

  if (error) return null;
  const candidate = data?.data as SiteAccessState | undefined;
  return candidate?.users && candidate?.auditLog ? normaliseState(candidate) : null;
}

async function saveLegacyState(client: SupabaseClient, state: SiteAccessState) {
  const next = normaliseState({ ...state, updatedAt: now() });
  const { error } = await client
    .from(legacyTableName)
    .upsert(
      {
        id: legacyStoreId,
        data: next,
        updated_at: next.updatedAt,
      },
      { onConflict: "id" },
    );

  if (error) throw new Error(error.message);
  return next;
}

async function loadTableState(client: SupabaseClient): Promise<SiteAccessState | null> {
  const { data: users, error: userError } = await client
    .from(usersTable)
    .select("*")
    .order("created_at", { ascending: false });

  if (userError) {
    if (isMissingSchema(userError)) return null;
    throw new Error(userError.message);
  }

  const { data: auditRows, error: auditError } = await client
    .from(auditTable)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(250);

  if (auditError) {
    if (isMissingSchema(auditError)) return null;
    throw new Error(auditError.message);
  }

  return normaliseState({
    updatedAt: now(),
    users: (users ?? []).map((row) => ({
      id: row.id,
      email: row.email,
      name: row.name,
      organisation: row.organisation ?? "",
      role: normaliseRole(row.role),
      status: normaliseStatus(row.status),
      passwordHash: row.password_hash ?? "",
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      approvedAt: row.approved_at ?? undefined,
      revokedAt: row.revoked_at ?? undefined,
      approvedBy: row.approved_by ?? undefined,
    })),
    auditLog: (auditRows ?? []).map((row) => ({
      id: row.id,
      action: row.action,
      actor: row.actor,
      summary: row.summary,
      createdAt: row.created_at,
    })),
  });
}

async function saveTableState(client: SupabaseClient, state: SiteAccessState) {
  const next = normaliseState({ ...state, updatedAt: now() });

  if (next.users.length) {
    const { error } = await client
      .from(usersTable)
      .upsert(
        next.users.map((user) => ({
          id: user.id,
          email: user.email,
          name: user.name,
          organisation: user.organisation,
          role: user.role,
          status: user.status,
          password_hash: user.passwordHash,
          created_at: user.createdAt,
          updated_at: user.updatedAt,
          approved_at: user.approvedAt ?? null,
          revoked_at: user.revokedAt ?? null,
          approved_by: user.approvedBy ?? null,
        })),
        { onConflict: "id" },
      );
    if (error) {
      if (isMissingSchema(error)) return null;
      throw new Error(error.message);
    }
  }

  if (next.auditLog.length) {
    const { error } = await client
      .from(auditTable)
      .upsert(
        next.auditLog.slice(0, 250).map((entry) => ({
          id: entry.id,
          action: entry.action,
          actor: entry.actor,
          summary: entry.summary,
          created_at: entry.createdAt,
        })),
        { onConflict: "id" },
      );
    if (error) {
      if (isMissingSchema(error)) return null;
      throw new Error(error.message);
    }
  }

  return next;
}

export async function getSiteAccessState(): Promise<SiteAccessState> {
  const client = getSupabaseAdmin();
  if (client) {
    const tableState = await loadTableState(client);
    if (tableState) return tableState;

    const legacyState = await loadLegacyState(client);
    if (legacyState) return legacyState;
  }

  return readFileStore();
}

async function saveSiteAccessState(state: SiteAccessState) {
  const client = getSupabaseAdmin();
  if (client) {
    const tableState = await saveTableState(client, state);
    if (tableState) return tableState;

    try {
      return await saveLegacyState(client, state);
    } catch {
      return writeFileStore(state);
    }
  }

  return writeFileStore(state);
}

async function mutateState<T>(mutator: (state: SiteAccessState) => T | Promise<T>) {
  const state = await getSiteAccessState();
  const result = await mutator(state);
  await saveSiteAccessState(state);
  return result;
}

export async function listSafeSiteAccessUsers() {
  const state = await getSiteAccessState();
  return {
    users: state.users.map(safeUser),
    auditLog: state.auditLog,
  };
}

export async function requestSiteAccess(input: {
  name: string;
  email: string;
  organisation?: string;
  password: string;
}) {
  const email = normaliseEmail(input.email);
  return mutateState((state) => {
    const existing = state.users.find((user) => user.email === email);
    if (existing) throw new Error("An access request already exists for this email address.");

    const timestamp = now();
    const user: SiteAccessUser = {
      id: `site-user-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`,
      email,
      name: input.name.trim(),
      organisation: input.organisation?.trim() ?? "",
      role: "viewer",
      status: "pending",
      passwordHash: hashSiteAccessPassword(input.password),
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    state.users.unshift(user);
    state.auditLog.unshift(audit("site_access_requested", email, `${user.name} requested presentation access.`));
    state.updatedAt = timestamp;
    return safeUser(user);
  });
}

export async function authenticateSiteAccess(emailInput: string, password: string): Promise<SiteAccessSession | null> {
  const email = normaliseEmail(emailInput);
  const state = await getSiteAccessState();
  const user = state.users.find((item) => item.email === email);

  if (!user || user.status !== "active" || !user.passwordHash) return null;
  if (!verifyPassword(password, user.passwordHash)) return null;

  state.auditLog.unshift(audit("site_access_login", email, `${user.name} signed in to the presentation site.`));
  state.updatedAt = now();
  await saveSiteAccessState(state);

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    organisation: user.organisation,
    role: user.role,
    status: "active",
    issuedAt: Date.now(),
  };
}

export async function createSiteAccessUser(
  input: {
    name: string;
    email: string;
    organisation?: string;
    password: string;
    role: SiteAccessRole;
    status: SiteAccessStatus;
  },
  actor: string,
) {
  const email = normaliseEmail(input.email);
  return mutateState((state) => {
    const existing = state.users.find((user) => user.email === email);
    if (existing) throw new Error("A site-access user with this email already exists.");

    const timestamp = now();
    const status = normaliseStatus(input.status);
    const user: SiteAccessUser = {
      id: `site-user-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`,
      email,
      name: input.name.trim(),
      organisation: input.organisation?.trim() ?? "",
      role: normaliseRole(input.role),
      status,
      passwordHash: hashSiteAccessPassword(input.password),
      createdAt: timestamp,
      updatedAt: timestamp,
      approvedAt: status === "active" ? timestamp : undefined,
      approvedBy: status === "active" ? actor : undefined,
    };
    state.users.unshift(user);
    state.auditLog.unshift(audit("site_access_user_created", actor, `Created ${user.role} site access for ${email}.`));
    state.updatedAt = timestamp;
    return safeUser(user);
  });
}

export async function updateSiteAccessUser(
  id: string,
  updates: {
    role?: SiteAccessRole;
    status?: SiteAccessStatus;
  },
  actor: string,
) {
  return mutateState((state) => {
    const user = state.users.find((item) => item.id === id);
    if (!user) throw new Error("Site-access user not found.");

    const timestamp = now();
    const nextStatus = updates.status ? normaliseStatus(updates.status) : user.status;
    user.role = updates.role ? normaliseRole(updates.role) : user.role;
    user.status = nextStatus;
    user.updatedAt = timestamp;
    if (nextStatus === "active" && !user.approvedAt) {
      user.approvedAt = timestamp;
      user.approvedBy = actor;
    }
    if (nextStatus === "revoked") user.revokedAt = timestamp;

    state.auditLog.unshift(audit("site_access_user_updated", actor, `Updated ${user.email} to ${user.role} / ${user.status}.`));
    state.updatedAt = timestamp;
    return safeUser(user);
  });
}
