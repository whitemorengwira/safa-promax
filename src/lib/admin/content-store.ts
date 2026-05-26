import { promises as fs } from "fs";
import path from "path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { AdminSession, CmsAuditLogEntry, CmsPage, ContentStore } from "./types";

const sourceStorePath = path.join(process.cwd(), "data", "cms", "content-store.json");
const writableStorePath = process.env.VERCEL
  ? path.join("/tmp", "safa-promax-content-store.json")
  : sourceStorePath;
const supabaseTable = "safa_cms_store";
const supabaseStoreId = "default";

let supabaseClient: SupabaseClient | null = null;

function now() {
  return new Date().toISOString();
}

function audit(action: string, actor: string, summary: string): CmsAuditLogEntry {
  return {
    id: `${action}-${Date.now()}`,
    action,
    actor,
    summary,
    createdAt: now(),
  };
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

function isContentStore(value: unknown): value is ContentStore {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<ContentStore>;
  return (
    Boolean(candidate.siteSettings) &&
    Array.isArray(candidate.pages) &&
    Array.isArray(candidate.media) &&
    Array.isArray(candidate.users) &&
    Array.isArray(candidate.approvals) &&
    Array.isArray(candidate.auditLog)
  );
}

async function readFileStore(): Promise<ContentStore> {
  const target = await fs
    .access(writableStorePath)
    .then(() => writableStorePath)
    .catch(() => sourceStorePath);
  const file = await fs.readFile(target, "utf8");
  return JSON.parse(file) as ContentStore;
}

async function writeFileStore(store: ContentStore) {
  store.updatedAt = now();
  await fs.mkdir(path.dirname(writableStorePath), { recursive: true });
  await fs.writeFile(writableStorePath, `${JSON.stringify(store, null, 2)}\n`, "utf8");
  return store;
}

async function saveSupabaseStore(store: ContentStore) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const { error } = await supabase
    .from(supabaseTable)
    .upsert(
      {
        id: supabaseStoreId,
        data: store,
        updated_at: store.updatedAt,
      },
      { onConflict: "id" },
    );

  if (error) {
    throw new Error(`Supabase CMS save failed: ${error.message}`);
  }

  return store;
}

export async function getContentStore(): Promise<ContentStore> {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return readFileStore();
  }

  const { data, error } = await supabase
    .from(supabaseTable)
    .select("data")
    .eq("id", supabaseStoreId)
    .maybeSingle();

  if (error) {
    throw new Error(`Supabase CMS read failed: ${error.message}`);
  }

  if (isContentStore(data?.data)) {
    return data.data;
  }

  const seedStore = await readFileStore();
  seedStore.siteSettings.cmsMode = "supabase";
  await saveSupabaseStore(seedStore);
  return seedStore;
}

export async function saveContentStore(store: ContentStore) {
  store.updatedAt = now();

  if (getSupabaseAdmin()) {
    store.siteSettings.cmsMode = "supabase";
    return saveSupabaseStore(store);
  }

  return writeFileStore(store);
}

export async function getCmsPage(slug: string) {
  const store = await getContentStore();
  return store.pages.find((page) => page.slug === slug) ?? null;
}

export async function savePageDraft(slug: string, updates: Partial<CmsPage>, actor: AdminSession) {
  const store = await getContentStore();
  const index = store.pages.findIndex((page) => page.slug === slug);

  if (index < 0) {
    throw new Error(`Unknown page: ${slug}`);
  }

  const current = store.pages[index];
  const safeUpdates = {
    title: updates.title,
    heroTitle: updates.heroTitle,
    heroSubtitle: updates.heroSubtitle,
    summary: updates.summary,
    seoTitle: updates.seoTitle,
    seoDescription: updates.seoDescription,
    image: current.lockedImage ? current.image : updates.image,
  };

  store.pages[index] = {
    ...current,
    status: "review",
    draft: {
      ...current,
      ...safeUpdates,
      status: "review",
      updatedAt: now(),
    },
    updatedAt: now(),
  };

  store.approvals.unshift({
    id: `approval-${Date.now()}`,
    pageSlug: slug,
    requester: actor.email,
    status: "pending",
    summary: `Draft changes requested for ${current.title}`,
    createdAt: now(),
  });

  store.auditLog.unshift(audit("draft_saved", actor.email, `Saved draft changes for ${current.title}`));

  await saveContentStore(store);
  return store.pages[index];
}

export async function publishPage(slug: string, actor: AdminSession) {
  const store = await getContentStore();
  const index = store.pages.findIndex((page) => page.slug === slug);

  if (index < 0) {
    throw new Error(`Unknown page: ${slug}`);
  }

  const current = store.pages[index];
  const next = {
    ...current,
    ...(current.draft ?? {}),
    status: "published" as const,
    draft: undefined,
    updatedAt: now(),
    publishedAt: now(),
  };

  store.pages[index] = next;

  const approval = store.approvals.find((item) => item.pageSlug === slug && item.status === "pending");
  if (approval) {
    approval.status = "approved";
    approval.reviewer = actor.email;
    approval.reviewedAt = now();
  }

  store.auditLog.unshift(audit("page_published", actor.email, `Published ${current.title}`));

  await saveContentStore(store);
  return next;
}
