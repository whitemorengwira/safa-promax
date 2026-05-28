import "server-only";

import crypto from "crypto";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { AdminSession } from "@/lib/admin/types";
import type { SiteAccessSession } from "@/lib/site-access/types";
import type { SiteOverrideRecord } from "./site-overrides-types";

export interface CmsActivityEntry {
  id: string;
  action: string;
  actor: string;
  actorRole?: string;
  route?: string;
  summary: string;
  details?: Record<string, unknown>;
  createdAt: string;
}

export interface CmsEditJournalEntry {
  id: string;
  route: string;
  actor: string;
  action: string;
  beforeOverrides: SiteOverrideRecord[];
  afterOverrides: SiteOverrideRecord[];
  summary: string;
  createdAt: string;
}

export interface CmsTrackedSession {
  id: string;
  email: string;
  name: string;
  role: string;
  type: "admin" | "site";
  status: "active" | "ended";
  route?: string;
  ipAddress?: string;
  userAgent?: string;
  issuedAt: string;
  lastSeenAt: string;
  endedAt?: string;
}

interface CmsSafetyState {
  updatedAt: string;
  activityLog: CmsActivityEntry[];
  editJournal: CmsEditJournalEntry[];
  adminSessions: CmsTrackedSession[];
  siteSessions: CmsTrackedSession[];
}

const legacyTableName = "safa_cms_store";
const legacyStoreId = "cms-safety";
const maxEntries = 1000;

let supabaseClient: SupabaseClient | null = null;

function now() {
  return new Date().toISOString();
}

function id(prefix: string) {
  return `${prefix}-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;
}

function emptyState(): CmsSafetyState {
  return { updatedAt: now(), activityLog: [], editJournal: [], adminSessions: [], siteSessions: [] };
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

function trimState(state: CmsSafetyState): CmsSafetyState {
  return {
    updatedAt: state.updatedAt || now(),
    activityLog: (state.activityLog ?? []).slice(0, maxEntries),
    editJournal: (state.editJournal ?? []).slice(0, maxEntries),
    adminSessions: state.adminSessions ?? [],
    siteSessions: state.siteSessions ?? [],
  };
}

async function loadLegacyState(client: SupabaseClient): Promise<CmsSafetyState> {
  const { data, error } = await client
    .from(legacyTableName)
    .select("data")
    .eq("id", legacyStoreId)
    .maybeSingle();

  if (error) return emptyState();
  const candidate = data?.data as Partial<CmsSafetyState> | undefined;
  return trimState({ ...emptyState(), ...candidate });
}

async function saveLegacyState(client: SupabaseClient, state: CmsSafetyState) {
  const next = trimState({ ...state, updatedAt: now() });
  const { error } = await client
    .from(legacyTableName)
    .upsert({ id: legacyStoreId, data: next, updated_at: next.updatedAt }, { onConflict: "id" });
  if (error) throw new Error(error.message);
  return next;
}

async function mutateLegacy(mutator: (state: CmsSafetyState) => void | Promise<void>) {
  const client = getSupabaseAdmin();
  if (!client) return;
  const state = await loadLegacyState(client);
  await mutator(state);
  await saveLegacyState(client, state);
}

function requestMeta(request?: Request) {
  const forwardedFor = request?.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return {
    ipAddress: forwardedFor || request?.headers.get("x-real-ip") || undefined,
    userAgent: request?.headers.get("user-agent")?.slice(0, 240) || undefined,
  };
}

async function insertActivityToTable(client: SupabaseClient, entry: CmsActivityEntry) {
  const { error } = await client.from("cms_activity_log").insert({
    id: entry.id,
    action: entry.action,
    actor: entry.actor,
    actor_role: entry.actorRole ?? null,
    route: entry.route ?? null,
    summary: entry.summary,
    details: entry.details ?? {},
    created_at: entry.createdAt,
  });
  if (error) return isMissingSchema(error) ? false : Promise.reject(new Error(error.message));
  return true;
}

async function insertJournalToTable(client: SupabaseClient, entry: CmsEditJournalEntry) {
  const { error } = await client.from("cms_edit_journal").insert({
    id: entry.id,
    route: entry.route,
    actor: entry.actor,
    action: entry.action,
    before_overrides: entry.beforeOverrides,
    after_overrides: entry.afterOverrides,
    summary: entry.summary,
    created_at: entry.createdAt,
  });
  if (error) return isMissingSchema(error) ? false : Promise.reject(new Error(error.message));
  return true;
}

async function upsertSessionToTable(client: SupabaseClient, table: string, session: CmsTrackedSession) {
  const { error } = await client.from(table).upsert(
    {
      id: session.id,
      email: session.email,
      name: session.name,
      role: session.role,
      status: session.status,
      route: session.route ?? null,
      ip_address: session.ipAddress ?? null,
      user_agent: session.userAgent ?? null,
      issued_at: session.issuedAt,
      last_seen_at: session.lastSeenAt,
      ended_at: session.endedAt ?? null,
    },
    { onConflict: "id" },
  );
  if (error) return isMissingSchema(error) ? false : Promise.reject(new Error(error.message));
  return true;
}

export async function recordCmsActivity(input: {
  action: string;
  actor: string;
  actorRole?: string;
  route?: string;
  summary: string;
  details?: Record<string, unknown>;
}) {
  const entry: CmsActivityEntry = {
    id: id("activity"),
    action: input.action,
    actor: input.actor,
    actorRole: input.actorRole,
    route: input.route,
    summary: input.summary,
    details: input.details,
    createdAt: now(),
  };

  const client = getSupabaseAdmin();
  if (client && await insertActivityToTable(client, entry).catch(() => false)) return entry;

  await mutateLegacy((state) => {
    state.activityLog.unshift(entry);
  });
  return entry;
}

export async function recordCmsEditJournal(input: {
  route: string;
  actor: string;
  action: string;
  beforeOverrides: SiteOverrideRecord[];
  afterOverrides: SiteOverrideRecord[];
  summary: string;
}) {
  const entry: CmsEditJournalEntry = {
    id: id("journal"),
    route: input.route,
    actor: input.actor,
    action: input.action,
    beforeOverrides: input.beforeOverrides,
    afterOverrides: input.afterOverrides,
    summary: input.summary,
    createdAt: now(),
  };

  const client = getSupabaseAdmin();
  if (client && await insertJournalToTable(client, entry).catch(() => false)) return entry;

  await mutateLegacy((state) => {
    state.editJournal.unshift(entry);
  });
  return entry;
}

export async function trackAdminSession(session: AdminSession, request?: Request, route?: string) {
  const timestamp = now();
  const meta = requestMeta(request);
  const tracked: CmsTrackedSession = {
    id: session.id,
    email: session.email,
    name: session.name,
    role: session.role,
    type: "admin",
    status: "active",
    route,
    ipAddress: meta.ipAddress,
    userAgent: meta.userAgent,
    issuedAt: new Date(session.issuedAt).toISOString(),
    lastSeenAt: timestamp,
  };

  const client = getSupabaseAdmin();
  if (client && await upsertSessionToTable(client, "cms_admin_sessions", tracked).catch(() => false)) return tracked;

  await mutateLegacy((state) => {
    const current = state.adminSessions.filter((item) => item.id !== tracked.id);
    state.adminSessions = [tracked, ...current];
  });
  return tracked;
}

export async function trackSiteSession(session: SiteAccessSession, request?: Request, route?: string) {
  const timestamp = now();
  const meta = requestMeta(request);
  const tracked: CmsTrackedSession = {
    id: session.id,
    email: session.email,
    name: session.name,
    role: session.role,
    type: "site",
    status: "active",
    route,
    ipAddress: meta.ipAddress,
    userAgent: meta.userAgent,
    issuedAt: new Date(session.issuedAt).toISOString(),
    lastSeenAt: timestamp,
  };

  const client = getSupabaseAdmin();
  if (client && await upsertSessionToTable(client, "site_access_sessions", tracked).catch(() => false)) return tracked;

  await mutateLegacy((state) => {
    const current = state.siteSessions.filter((item) => item.id !== tracked.id);
    state.siteSessions = [tracked, ...current];
  });
  return tracked;
}

export async function endTrackedSession(type: "admin" | "site", idOrEmail: string) {
  const timestamp = now();
  const client = getSupabaseAdmin();
  const table = type === "admin" ? "cms_admin_sessions" : "site_access_sessions";
  if (client) {
    const byId = await client
      .from(table)
      .update({ status: "ended", ended_at: timestamp, last_seen_at: timestamp })
      .eq("id", idOrEmail);
    if (byId.error && !isMissingSchema(byId.error)) throw new Error(byId.error.message);
    const byEmail = await client
      .from(table)
      .update({ status: "ended", ended_at: timestamp, last_seen_at: timestamp })
      .eq("email", idOrEmail);
    if (byEmail.error && !isMissingSchema(byEmail.error)) throw new Error(byEmail.error.message);
  }

  await mutateLegacy((state) => {
    const sessions = type === "admin" ? state.adminSessions : state.siteSessions;
    for (const session of sessions) {
      if (session.id === idOrEmail || session.email === idOrEmail) {
        session.status = "ended";
        session.endedAt = timestamp;
        session.lastSeenAt = timestamp;
      }
    }
  });
}

async function readTableOverview(client: SupabaseClient) {
  const [activity, journal, adminSessions, siteSessions] = await Promise.all([
    client.from("cms_activity_log").select("*").order("created_at", { ascending: false }).limit(250),
    client.from("cms_edit_journal").select("*").order("created_at", { ascending: false }).limit(250),
    client.from("cms_admin_sessions").select("*").order("last_seen_at", { ascending: false }).limit(100),
    client.from("site_access_sessions").select("*").order("last_seen_at", { ascending: false }).limit(100),
  ]);

  const errors = [activity.error, journal.error, adminSessions.error, siteSessions.error].filter(Boolean);
  if (errors.some(isMissingSchema)) return null;
  if (errors.length) throw new Error(errors[0]?.message || "CMS safety overview could not be loaded.");

  return {
    activityLog: (activity.data ?? []).map((row) => ({
      id: row.id,
      action: row.action,
      actor: row.actor,
      actorRole: row.actor_role ?? undefined,
      route: row.route ?? undefined,
      summary: row.summary,
      details: row.details ?? {},
      createdAt: row.created_at,
    })) as CmsActivityEntry[],
    editJournal: (journal.data ?? []).map((row) => ({
      id: row.id,
      route: row.route,
      actor: row.actor,
      action: row.action,
      beforeOverrides: (row.before_overrides ?? []) as SiteOverrideRecord[],
      afterOverrides: (row.after_overrides ?? []) as SiteOverrideRecord[],
      summary: row.summary,
      createdAt: row.created_at,
    })) as CmsEditJournalEntry[],
    adminSessions: (adminSessions.data ?? []).map((row) => tableSession(row, "admin")),
    siteSessions: (siteSessions.data ?? []).map((row) => tableSession(row, "site")),
  };
}

function tableSession(row: Record<string, string | null>, type: "admin" | "site"): CmsTrackedSession {
  return {
    id: String(row.id),
    email: String(row.email),
    name: String(row.name),
    role: String(row.role),
    type,
    status: row.status === "ended" ? "ended" : "active",
    route: row.route ?? undefined,
    ipAddress: row.ip_address ?? undefined,
    userAgent: row.user_agent ?? undefined,
    issuedAt: String(row.issued_at),
    lastSeenAt: String(row.last_seen_at),
    endedAt: row.ended_at ?? undefined,
  };
}

export async function getCmsSafetyOverview() {
  const client = getSupabaseAdmin();
  if (client) {
    const tableOverview = await readTableOverview(client);
    if (tableOverview) return tableOverview;
    const legacy = await loadLegacyState(client);
    return legacy;
  }
  return emptyState();
}
