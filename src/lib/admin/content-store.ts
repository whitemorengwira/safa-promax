import { promises as fs } from "fs";
import path from "path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type {
  AdminSession,
  CmsAuditLogEntry,
  CmsMediaAsset,
  CmsPage,
  CmsPageWorkingCopy,
  ContentStore,
} from "./types";

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

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function pageTemplate(page: CmsPage): CmsPage["template"] {
  if (page.route === "/") return "landing";
  if (page.route.startsWith("/smart-tools")) return "tool";
  if (page.route.startsWith("/pages/")) return "cms";
  return "standard";
}

function normalizePage(page: CmsPage, index: number): CmsPage {
  return {
    ...page,
    navLabel: page.navLabel ?? page.title,
    visibleInNavigation: page.visibleInNavigation ?? true,
    sortOrder: page.sortOrder ?? index + 1,
    template: page.template ?? pageTemplate(page),
    workingCopy: page.workingCopy
      ? {
          ...page.workingCopy,
          updatedAt: page.workingCopy.updatedAt ?? page.updatedAt,
        }
      : undefined,
  };
}

function normalizeStore(store: ContentStore): ContentStore {
  return {
    ...store,
    siteSettings: {
      ...store.siteSettings,
      requiresApproval: false,
    },
    pages: store.pages.map(normalizePage),
    media: store.media.map((asset) => ({
      ...asset,
      createdAt: asset.createdAt ?? store.updatedAt,
      updatedAt: asset.updatedAt ?? store.updatedAt,
    })),
  };
}

async function readFileStore(): Promise<ContentStore> {
  const target = await fs
    .access(writableStorePath)
    .then(() => writableStorePath)
    .catch(() => sourceStorePath);
  const file = await fs.readFile(target, "utf8");
  return normalizeStore(JSON.parse(file) as ContentStore);
}

async function writeFileStore(store: ContentStore) {
  store = normalizeStore(store);
  store.updatedAt = now();
  await fs.mkdir(path.dirname(writableStorePath), { recursive: true });
  await fs.writeFile(writableStorePath, `${JSON.stringify(store, null, 2)}\n`, "utf8");
  return store;
}

async function saveSupabaseStore(store: ContentStore) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;
  store = normalizeStore(store);

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
    return normalizeStore(data.data);
  }

  const seedStore = normalizeStore(await readFileStore());
  seedStore.siteSettings.cmsMode = "supabase";
  await saveSupabaseStore(seedStore);
  return seedStore;
}

export async function saveContentStore(store: ContentStore) {
  store = normalizeStore(store);
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

function sanitizePageUpdates(current: CmsPage, updates: Partial<CmsPageWorkingCopy>): CmsPageWorkingCopy {
  const route = current.route.startsWith("/pages/") ? updates.route : current.route;
  const next: CmsPageWorkingCopy = {
    title: updates.title,
    navLabel: updates.navLabel,
    route,
    category: updates.category,
    visibleInNavigation: updates.visibleInNavigation,
    sortOrder: typeof updates.sortOrder === "number" ? updates.sortOrder : undefined,
    template: updates.template,
    heroTitle: updates.heroTitle,
    heroSubtitle: updates.heroSubtitle,
    summary: updates.summary,
    seoTitle: updates.seoTitle,
    seoDescription: updates.seoDescription,
    image: current.lockedImage ? current.image : updates.image,
    updatedAt: now(),
  };

  return Object.fromEntries(
    Object.entries(next).filter(([, value]) => value !== undefined),
  ) as CmsPageWorkingCopy;
}

export async function savePageDraft(slug: string, updates: Partial<CmsPageWorkingCopy>, actor: AdminSession) {
  const store = await getContentStore();
  const index = store.pages.findIndex((page) => page.slug === slug);

  if (index < 0) {
    throw new Error(`Unknown page: ${slug}`);
  }

  const current = store.pages[index];
  const safeUpdates = sanitizePageUpdates(current, updates);

  store.pages[index] = {
    ...current,
    status: "draft",
    workingCopy: {
      ...(current.workingCopy ?? {}),
      ...safeUpdates,
    },
    updatedAt: now(),
  };

  store.auditLog.unshift(audit("working_copy_saved", actor.email, `Saved editor working copy for ${current.title}`));

  await saveContentStore(store);
  return store.pages[index];
}

export async function publishPage(slug: string, actor: AdminSession, updates?: Partial<CmsPageWorkingCopy>) {
  const store = await getContentStore();
  const index = store.pages.findIndex((page) => page.slug === slug);

  if (index < 0) {
    throw new Error(`Unknown page: ${slug}`);
  }

  const current = store.pages[index];
  const safeUpdates = updates ? sanitizePageUpdates(current, updates) : {};
  const next = {
    ...current,
    ...(current.draft ?? {}),
    ...(current.workingCopy ?? {}),
    ...safeUpdates,
    status: "published" as const,
    workingCopy: undefined,
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

export async function createCmsPage(
  input: {
    title: string;
    slug?: string;
    category?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    summary?: string;
    image?: string;
    seoTitle?: string;
    seoDescription?: string;
  },
  actor: AdminSession,
) {
  const store = await getContentStore();
  const slug = slugify(input.slug || input.title);

  if (!slug) {
    throw new Error("A valid page title or slug is required.");
  }

  if (store.pages.some((page) => page.slug === slug)) {
    throw new Error(`A page with slug "${slug}" already exists.`);
  }

  const page: CmsPage = normalizePage(
    {
      slug,
      title: input.title,
      navLabel: input.title,
      route: `/pages/${slug}`,
      category: input.category || "Custom",
      status: "published",
      lockedImage: false,
      visibleInNavigation: true,
      sortOrder: store.pages.length + 1,
      template: "cms",
      heroTitle: input.heroTitle || input.title,
      heroSubtitle: input.heroSubtitle || "SA Film Academy CMS page",
      summary: input.summary || "New CMS-managed page.",
      image: input.image || "/images/ai/home/hero-crew-night-set.webp",
      seoTitle: input.seoTitle || `${input.title} · SA Film Academy`,
      seoDescription: input.seoDescription || input.summary || "New CMS-managed page.",
      updatedAt: now(),
      publishedAt: now(),
    },
    store.pages.length,
  );

  store.pages.push(page);
  store.auditLog.unshift(audit("page_created", actor.email, `Created CMS page ${page.title}`));
  await saveContentStore(store);
  return page;
}

export async function updateCmsPageMetadata(slug: string, updates: Partial<CmsPageWorkingCopy>, actor: AdminSession) {
  const store = await getContentStore();
  const index = store.pages.findIndex((page) => page.slug === slug);

  if (index < 0) {
    throw new Error(`Unknown page: ${slug}`);
  }

  const current = store.pages[index];
  const route = current.route.startsWith("/pages/") && updates.route ? updates.route : current.route;
  const next = normalizePage(
    {
      ...current,
      title: updates.title ?? current.title,
      navLabel: updates.navLabel ?? current.navLabel ?? current.title,
      category: updates.category ?? current.category,
      visibleInNavigation: updates.visibleInNavigation ?? current.visibleInNavigation,
      sortOrder: updates.sortOrder ?? current.sortOrder,
      template: updates.template ?? current.template,
      route,
      updatedAt: now(),
    },
    index,
  );

  store.pages[index] = next;
  store.auditLog.unshift(audit("page_metadata_updated", actor.email, `Updated metadata for ${next.title}`));
  await saveContentStore(store);
  return next;
}

export async function addMediaAsset(asset: Omit<CmsMediaAsset, "id" | "createdAt" | "updatedAt">, actor: AdminSession) {
  const store = await getContentStore();
  const id = `media-${slugify(asset.title) || "asset"}-${Date.now()}`;
  const next: CmsMediaAsset = {
    ...asset,
    id,
    createdAt: now(),
    updatedAt: now(),
  };

  store.media.unshift(next);
  store.auditLog.unshift(audit("media_created", actor.email, `Added media asset ${next.title}`));
  await saveContentStore(store);
  return next;
}

export async function updateMediaAsset(
  id: string,
  updates: Partial<Pick<CmsMediaAsset, "title" | "source" | "tags" | "locked">>,
  actor: AdminSession,
) {
  const store = await getContentStore();
  const index = store.media.findIndex((asset) => asset.id === id);

  if (index < 0) {
    throw new Error(`Unknown media asset: ${id}`);
  }

  store.media[index] = {
    ...store.media[index],
    ...updates,
    updatedAt: now(),
  };
  store.auditLog.unshift(audit("media_updated", actor.email, `Updated media asset ${store.media[index].title}`));
  await saveContentStore(store);
  return store.media[index];
}
