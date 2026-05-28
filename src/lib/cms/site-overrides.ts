import "server-only";

import { promises as fs } from "fs";
import path from "path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { commitCmsFiles } from "./github";
import type { CmsSession } from "./types";
import type {
  SiteOverridePayload,
  SiteOverrideRecord,
  SiteOverrideSnapshot,
  SiteOverrideVersion,
} from "./site-overrides-types";

const cmsRoot = path.join(process.cwd(), "content", "cms");
const overridesFile = "site-overrides.json";
const tableName = "cms_site_overrides";
const legacyTableName = "safa_cms_store";
const legacyStoreId = "live-site-overrides";

let supabaseClient: SupabaseClient | null = null;

function now() {
  return new Date().toISOString();
}

export function normaliseSiteRoute(route: string) {
  const clean = String(route || "/").split("?")[0].split("#")[0].trim() || "/";
  const withSlash = clean.startsWith("/") ? clean : `/${clean}`;
  return withSlash.length > 1 ? withSlash.replace(/\/+$/, "") : "/";
}

function emptySnapshot(): SiteOverrideSnapshot {
  return { version: 1, updatedAt: now(), routes: {} };
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

async function readJsonSnapshot() {
  try {
    return JSON.parse(await fs.readFile(path.join(cmsRoot, overridesFile), "utf8")) as SiteOverrideSnapshot;
  } catch {
    return emptySnapshot();
  }
}

async function writeJsonSnapshot(snapshot: SiteOverrideSnapshot) {
  if (process.env.VERCEL) return;
  await fs.mkdir(cmsRoot, { recursive: true });
  await fs.writeFile(path.join(cmsRoot, overridesFile), `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
}

function withoutDrafts(snapshot: SiteOverrideSnapshot): SiteOverrideSnapshot {
  return {
    version: 1,
    updatedAt: snapshot.updatedAt,
    routes: Object.fromEntries(
      Object.entries(snapshot.routes).map(([route, state]) => [
        route,
        {
          published: state.published ?? [],
          versions: state.versions ?? [],
          updatedAt: state.updatedAt,
          updatedBy: state.updatedBy,
        },
      ]),
    ),
  };
}

function normaliseRecords(route: string, overrides: SiteOverrideRecord[], session?: CmsSession) {
  const timestamp = now();
  return overrides.map((override) => ({
    ...override,
    id: override.id || `${route}:${override.elementType}:${override.selector}`,
    route,
    deleted: Boolean(override.deleted),
    updatedAt: override.updatedAt || timestamp,
    updatedBy: session?.email ?? override.updatedBy,
  }));
}

async function loadLegacySnapshot(client: SupabaseClient): Promise<SiteOverrideSnapshot | null> {
  const { data, error } = await client
    .from(legacyTableName)
    .select("data")
    .eq("id", legacyStoreId)
    .maybeSingle();

  if (error) return null;
  const candidate = data?.data as SiteOverrideSnapshot | undefined;
  return candidate?.version === 1 && candidate?.routes ? candidate : null;
}

async function saveLegacySnapshot(client: SupabaseClient, snapshot: SiteOverrideSnapshot) {
  const { error } = await client
    .from(legacyTableName)
    .upsert(
      {
        id: legacyStoreId,
        data: snapshot,
        updated_at: snapshot.updatedAt,
      },
      { onConflict: "id" },
    );

  if (error) throw new Error(error.message);
}

async function loadTableSnapshot(client: SupabaseClient): Promise<SiteOverrideSnapshot | null> {
  const { data, error } = await client
    .from(tableName)
    .select("route, draft_overrides, published_overrides, versions, updated_at, updated_by")
    .order("route", { ascending: true });

  if (error) {
    if (isMissingSchema(error)) return null;
    throw new Error(error.message);
  }

  const snapshot = emptySnapshot();
  for (const row of data ?? []) {
    snapshot.routes[normaliseSiteRoute(row.route)] = {
      draft: (row.draft_overrides as SiteOverrideRecord[] | null) ?? [],
      published: (row.published_overrides as SiteOverrideRecord[] | null) ?? [],
      versions: (row.versions as SiteOverrideVersion[] | null) ?? [],
      updatedAt: row.updated_at ?? undefined,
      updatedBy: row.updated_by ?? undefined,
    };
  }
  snapshot.updatedAt = now();
  return snapshot;
}

async function saveTableRoute(
  client: SupabaseClient,
  route: string,
  state: {
    draft?: SiteOverrideRecord[];
    published?: SiteOverrideRecord[];
    versions?: SiteOverrideVersion[];
    updatedBy?: string;
  },
) {
  const { error } = await client
    .from(tableName)
    .upsert(
      {
        route,
        draft_overrides: state.draft ?? [],
        published_overrides: state.published ?? [],
        versions: state.versions ?? [],
        updated_at: now(),
        updated_by: state.updatedBy ?? null,
      },
      { onConflict: "route" },
    );

  if (error) {
    if (isMissingSchema(error)) return false;
    throw new Error(error.message);
  }

  return true;
}

export async function loadSiteOverrideSnapshot(): Promise<SiteOverrideSnapshot> {
  const client = getSupabaseAdmin();
  if (client) {
    const tableSnapshot = await loadTableSnapshot(client);
    if (tableSnapshot) return tableSnapshot;

    const legacySnapshot = await loadLegacySnapshot(client);
    if (legacySnapshot) return legacySnapshot;
  }

  return readJsonSnapshot();
}

async function persistSnapshot(snapshot: SiteOverrideSnapshot) {
  const client = getSupabaseAdmin();
  if (client) await saveLegacySnapshot(client, snapshot);
  await writeJsonSnapshot(snapshot);
}

export async function getSiteOverridePayload(route: string): Promise<SiteOverridePayload> {
  const normalisedRoute = normaliseSiteRoute(route);
  const snapshot = await loadSiteOverrideSnapshot();
  const state = snapshot.routes[normalisedRoute] ?? { published: [], draft: [], versions: [] };

  return {
    route: normalisedRoute,
    draft: state.draft ?? [],
    published: state.published ?? [],
    versions: state.versions ?? [],
  };
}

export async function getPublishedSiteOverrides(route: string) {
  const normalisedRoute = normaliseSiteRoute(route);
  const snapshot = await loadSiteOverrideSnapshot();
  return snapshot.routes[normalisedRoute]?.published ?? [];
}

export async function saveSiteOverrideDraft(route: string, overrides: SiteOverrideRecord[], session: CmsSession) {
  const normalisedRoute = normaliseSiteRoute(route);
  const draft = normaliseRecords(normalisedRoute, overrides, session);
  const snapshot = await loadSiteOverrideSnapshot();
  const current = snapshot.routes[normalisedRoute] ?? { published: [], versions: [] };
  const nextState = {
    ...current,
    draft,
    updatedAt: now(),
    updatedBy: session.email,
  };

  const client = getSupabaseAdmin();
  if (client) {
    const savedToTable = await saveTableRoute(client, normalisedRoute, {
      draft,
      published: current.published ?? [],
      versions: current.versions ?? [],
      updatedBy: session.email,
    });
    if (!savedToTable) {
      await saveLegacySnapshot(client, {
        ...snapshot,
        updatedAt: nextState.updatedAt,
        routes: { ...snapshot.routes, [normalisedRoute]: nextState },
      });
    }
  } else {
    await writeJsonSnapshot({
      ...snapshot,
      updatedAt: nextState.updatedAt,
      routes: { ...snapshot.routes, [normalisedRoute]: nextState },
    });
  }

  return { route: normalisedRoute, draft };
}

export async function publishSiteOverrides(route: string, overrides: SiteOverrideRecord[], session: CmsSession) {
  const normalisedRoute = normaliseSiteRoute(route);
  const published = normaliseRecords(normalisedRoute, overrides, session);
  const snapshot = await loadSiteOverrideSnapshot();
  const current = snapshot.routes[normalisedRoute] ?? { published: [], versions: [] };
  const publishedAt = now();
  const version: SiteOverrideVersion = {
    id: `site-version-${Date.now()}`,
    route: normalisedRoute,
    label: `Published ${normalisedRoute}`,
    overrides: published,
    publishedAt,
    publishedBy: session.email,
  };
  const nextState = {
    published,
    draft: [],
    versions: [version, ...(current.versions ?? [])],
    updatedAt: publishedAt,
    updatedBy: session.email,
  };
  const nextSnapshot: SiteOverrideSnapshot = {
    ...snapshot,
    updatedAt: publishedAt,
    routes: { ...snapshot.routes, [normalisedRoute]: nextState },
  };

  const client = getSupabaseAdmin();
  if (client) {
    const savedToTable = await saveTableRoute(client, normalisedRoute, {
      draft: [],
      published,
      versions: nextState.versions,
      updatedBy: session.email,
    });
    if (!savedToTable) await saveLegacySnapshot(client, nextSnapshot);
  } else {
    await persistSnapshot(nextSnapshot);
  }

  const committedSnapshot = withoutDrafts(nextSnapshot);
  await writeJsonSnapshot(committedSnapshot);
  const commit = await commitCmsFiles(
    [{ path: "content/cms/site-overrides.json", content: committedSnapshot }],
    `cms: publish site-overrides — ${publishedAt}`,
  );

  return { route: normalisedRoute, published, version, commit };
}

export async function restoreSiteOverrideVersion(route: string, versionId: string, session: CmsSession) {
  const normalisedRoute = normaliseSiteRoute(route);
  const snapshot = await loadSiteOverrideSnapshot();
  const current = snapshot.routes[normalisedRoute];
  const version = current?.versions?.find((item) => item.id === versionId);
  if (!current || !version) throw new Error("Version snapshot could not be found.");

  const restoredAt = now();
  const restoredVersion: SiteOverrideVersion = {
    id: `site-version-${Date.now()}`,
    route: normalisedRoute,
    label: `Restored ${version.label}`,
    overrides: version.overrides,
    publishedAt: restoredAt,
    publishedBy: session.email,
  };
  const nextState = {
    published: normaliseRecords(normalisedRoute, version.overrides, session),
    draft: [],
    versions: [restoredVersion, ...(current.versions ?? [])],
    updatedAt: restoredAt,
    updatedBy: session.email,
  };
  const nextSnapshot: SiteOverrideSnapshot = {
    ...snapshot,
    updatedAt: restoredAt,
    routes: { ...snapshot.routes, [normalisedRoute]: nextState },
  };

  const client = getSupabaseAdmin();
  if (client) {
    const savedToTable = await saveTableRoute(client, normalisedRoute, {
      draft: [],
      published: nextState.published,
      versions: nextState.versions,
      updatedBy: session.email,
    });
    if (!savedToTable) await saveLegacySnapshot(client, nextSnapshot);
  } else {
    await persistSnapshot(nextSnapshot);
  }

  const committedSnapshot = withoutDrafts(nextSnapshot);
  await writeJsonSnapshot(committedSnapshot);
  const commit = await commitCmsFiles(
    [{ path: "content/cms/site-overrides.json", content: committedSnapshot }],
    `cms: publish site-overrides — ${restoredAt}`,
  );

  return { route: normalisedRoute, published: nextState.published, version: restoredVersion, commit };
}
