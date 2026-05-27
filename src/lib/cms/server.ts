import "server-only";

import { promises as fs } from "fs";
import path from "path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { commitCmsFiles, type GithubCommitResult } from "./github";
import type {
  CmsAnnouncement,
  CmsBlogPost,
  CmsMediaItem,
  CmsModuleName,
  CmsNavigationItem,
  CmsPageDocument,
  CmsProductionCredit,
  CmsSession,
  CmsSettings,
  CmsSnapshot,
  CmsVersion,
} from "./types";

const cmsRoot = path.join(process.cwd(), "content", "cms");
const pageSlugs = [
  "home",
  "foundation",
  "organisation",
  "ecosystem",
  "visibility",
  "calendar",
  "growth-engine",
  "agentic-ai",
  "delivery",
  "implementation",
  "smart-tools",
  "contact",
  "strategy-index",
];
const mediaBucket = "safa-cms-media";
const legacySupabaseTable = "safa_cms_store";
const legacySupabaseId = "wix-cms-rebuild";

let supabaseClient: SupabaseClient | null = null;

function now() {
  return new Date().toISOString();
}

function maybeUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
    ? value
    : null;
}

function isMissingCmsSchema(error: { message?: string; code?: string } | null | undefined) {
  const message = error?.message ?? "";
  return (
    error?.code === "PGRST205" ||
    message.includes("Could not find the table") ||
    message.includes("schema cache")
  );
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

async function readJson<T>(file: string): Promise<T> {
  return JSON.parse(await fs.readFile(path.join(cmsRoot, file), "utf8")) as T;
}

async function writeJson(file: string, value: unknown) {
  if (process.env.VERCEL) return;
  await fs.mkdir(cmsRoot, { recursive: true });
  await fs.writeFile(path.join(cmsRoot, file), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function loadJsonSnapshot(): Promise<CmsSnapshot> {
  const pages = await Promise.all(pageSlugs.map((slug) => readJson<CmsPageDocument>(`${slug}.json`)));
  const navigation = await readJson<{ items: CmsNavigationItem[] }>("navigation.json");
  const blogPosts = await readJson<{ items: CmsBlogPost[] }>("blog-posts.json");
  const media = await readJson<{ items: CmsMediaItem[] }>("media.json");
  const announcements = await readJson<{ items: CmsAnnouncement[] }>("announcements.json");
  const productions = await readJson<{ items: CmsProductionCredit[] }>("productions.json");
  const settings = await readJson<CmsSettings>("settings.json");

  return {
    pages,
    versions: [],
    navigation: navigation.items,
    blogPosts: blogPosts.items,
    media: media.items,
    announcements: announcements.items,
    productions: productions.items,
    settings,
    source: "json",
  };
}

function withSupabaseSource(snapshot: CmsSnapshot): CmsSnapshot {
  return { ...snapshot, source: "supabase" };
}

async function saveLegacySupabaseSnapshot(client: SupabaseClient, snapshot: CmsSnapshot) {
  const { error } = await client
    .from(legacySupabaseTable)
    .upsert(
      {
        id: legacySupabaseId,
        data: withSupabaseSource(snapshot),
        updated_at: now(),
      },
      { onConflict: "id" },
    );

  if (error) throw new Error(error.message);
  return withSupabaseSource(snapshot);
}

async function loadLegacySupabaseSnapshot(client: SupabaseClient, includeDrafts = true): Promise<CmsSnapshot | null> {
  const { data, error } = await client
    .from(legacySupabaseTable)
    .select("data")
    .eq("id", legacySupabaseId)
    .maybeSingle();

  if (error) return null;

  const candidate = data?.data as Partial<CmsSnapshot> | undefined;
  if (candidate?.pages && candidate?.navigation && candidate?.media && candidate?.settings) {
    const snapshot = withSupabaseSource(candidate as CmsSnapshot);
    if (!includeDrafts || !snapshot.drafts) return snapshot;
    return {
      ...snapshot,
      pages: snapshot.pages.map((page) => snapshot.drafts?.[page.slug] ?? page),
    };
  }

  const seeded = withSupabaseSource(await loadJsonSnapshot());
  await saveLegacySupabaseSnapshot(client, seeded);
  return seeded;
}

async function seedSupabase(client: SupabaseClient) {
  const snapshot = await loadJsonSnapshot();

  await client.from("cms_pages").upsert(
    snapshot.pages.map((page) => ({
      slug: page.slug,
      title: page.title,
      draft_content: page,
      published_content: page,
      updated_at: page.updatedAt,
    })),
    { onConflict: "slug" },
  );

  await client.from("cms_navigation").upsert(
    snapshot.navigation.map((item) => ({
      id: item.id,
      label: item.label,
      href: item.href,
      parent_id: item.parentId,
      sort_order: item.sortOrder,
      is_visible: item.isVisible,
    })),
    { onConflict: "id" },
  );

  await client.from("cms_blog_posts").upsert(
    snapshot.blogPosts.map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      body: post.body,
      cover_image_url: post.coverImageUrl,
      author: post.author,
      tags: post.tags,
      status: post.status,
      published_at: post.publishedAt,
      created_at: post.createdAt,
      updated_at: post.updatedAt,
    })),
    { onConflict: "slug" },
  );

  await client.from("cms_media").upsert(
    snapshot.media.map((item) => ({
      id: item.id,
      filename: item.filename,
      url: item.url,
      mime_type: item.mimeType,
      size_bytes: item.sizeBytes,
      uploaded_at: item.uploadedAt,
    })),
    { onConflict: "id" },
  );

  await client.from("cms_settings").upsert(
    [
      { key: "settings", value: snapshot.settings, updated_at: now() },
      { key: "announcements", value: { items: snapshot.announcements }, updated_at: now() },
      { key: "productions", value: { items: snapshot.productions }, updated_at: now() },
    ],
    { onConflict: "key" },
  );
}

async function loadSupabaseSnapshot(client: SupabaseClient): Promise<CmsSnapshot | null> {
  const pagesResult = await client
    .from("cms_pages")
    .select("id, slug, title, draft_content, published_content, updated_at")
    .order("updated_at", { ascending: true });

  if (pagesResult.error) {
    if (isMissingCmsSchema(pagesResult.error)) return loadLegacySupabaseSnapshot(client);
    return null;
  }
  if (!pagesResult.data?.length) {
    await seedSupabase(client);
    return loadSupabaseSnapshot(client);
  }

  const pagesById = new Map<string, { slug: string }>();
  const pages = pagesResult.data.map((row) => {
    pagesById.set(String(row.id), { slug: String(row.slug) });
    const published = row.published_content as CmsPageDocument;
    const draft = row.draft_content as CmsPageDocument;
    const hasDraft = JSON.stringify(draft) !== JSON.stringify(published);
    const content = hasDraft ? draft : published;
    return {
      ...content,
      title: String(row.title || content.title),
      status: hasDraft ? "draft" : "published",
      updatedAt: String(row.updated_at || content.updatedAt),
    } satisfies CmsPageDocument;
  });

  const [versionsResult, navigationResult, postsResult, mediaResult, settingsResult] = await Promise.all([
    client.from("cms_versions").select("id, page_id, content, published_at, published_by, label").order("published_at", { ascending: false }),
    client.from("cms_navigation").select("id, label, href, parent_id, sort_order, is_visible").order("sort_order", { ascending: true }),
    client.from("cms_blog_posts").select("*").order("updated_at", { ascending: false }),
    client.from("cms_media").select("*").order("uploaded_at", { ascending: false }),
    client.from("cms_settings").select("key, value"),
  ]);

  if (versionsResult.error || navigationResult.error || postsResult.error || mediaResult.error || settingsResult.error) {
    return loadLegacySupabaseSnapshot(client);
  }

  const settingsMap = new Map((settingsResult.data ?? []).map((row) => [String(row.key), row.value]));
  const versions: CmsVersion[] = (versionsResult.data ?? []).map((row) => {
    const pageId = String(row.page_id);
    const page = pagesById.get(pageId);
    return {
      id: String(row.id),
      pageId,
      slug: page?.slug ?? "",
      label: String(row.label),
      content: row.content as CmsPageDocument,
      publishedAt: String(row.published_at),
      publishedBy: String(row.published_by ?? "unknown"),
    };
  });

  return {
    pages,
    versions,
    navigation: (navigationResult.data ?? []).map((row) => ({
      id: String(row.id),
      label: String(row.label),
      href: String(row.href),
      parentId: row.parent_id ? String(row.parent_id) : null,
      sortOrder: Number(row.sort_order ?? 0),
      isVisible: Boolean(row.is_visible),
    })),
    blogPosts: (postsResult.data ?? []).map((row) => ({
      id: String(row.id),
      title: String(row.title),
      slug: String(row.slug),
      excerpt: String(row.excerpt ?? ""),
      body: String(row.body ?? ""),
      coverImageUrl: String(row.cover_image_url ?? ""),
      author: String(row.author ?? ""),
      tags: Array.isArray(row.tags) ? row.tags : [],
      status: row.status === "published" ? "published" : "draft",
      publishedAt: row.published_at ? String(row.published_at) : null,
      createdAt: String(row.created_at),
      updatedAt: String(row.updated_at),
    })),
    media: (mediaResult.data ?? []).map((row) => ({
      id: String(row.id),
      filename: String(row.filename),
      url: String(row.url),
      mimeType: String(row.mime_type),
      sizeBytes: Number(row.size_bytes ?? 0),
      uploadedBy: row.uploaded_by ? String(row.uploaded_by) : undefined,
      uploadedAt: String(row.uploaded_at),
    })),
    announcements: ((settingsMap.get("announcements") as { items?: CmsAnnouncement[] } | undefined)?.items ?? []),
    productions: ((settingsMap.get("productions") as { items?: CmsProductionCredit[] } | undefined)?.items ?? []),
    settings: (settingsMap.get("settings") as CmsSettings | undefined) ?? (await readJson<CmsSettings>("settings.json")),
    source: "supabase",
  };
}

export async function loadCmsSnapshot(): Promise<CmsSnapshot> {
  const client = getSupabaseAdmin();
  if (client) {
    const snapshot = await loadSupabaseSnapshot(client).catch(() => null);
    if (snapshot) return snapshot;
  }

  return loadJsonSnapshot();
}

export async function getCmsPageByRoute(route: string, preferDraft = false) {
  const client = getSupabaseAdmin();
  if (client) {
    const column = preferDraft ? "draft_content" : "published_content";
    const { data, error } = await client.from("cms_pages").select(`slug, ${column}`);

    if (!error && data) {
      const row = data.find((item) => {
        const content = item[column as keyof typeof item] as CmsPageDocument | null;
        return content?.route === route || (route === "/" && item.slug === "home");
      });
      return row ? ((row[column as keyof typeof row] as CmsPageDocument | null) ?? null) : null;
    }

    if (isMissingCmsSchema(error)) {
      const legacy = await loadLegacySupabaseSnapshot(client, preferDraft);
      const legacyPage = legacy?.pages.find((item) => item.route === route || (route === "/" && item.slug === "home"));
      if (legacyPage) return legacyPage;
    }
  }

  const snapshot = await loadJsonSnapshot();
  return snapshot.pages.find((item) => item.route === route || (route === "/" && item.slug === "home")) ?? null;
}

export async function saveCmsDraft(slug: string, content: CmsPageDocument, session: CmsSession) {
  const next = { ...content, status: "draft" as const, updatedAt: now() };
  const client = getSupabaseAdmin();

  if (client) {
    const { error } = await client
      .from("cms_pages")
      .upsert(
        {
          slug,
          title: next.title,
          draft_content: next,
          updated_at: next.updatedAt,
          updated_by: maybeUuid(session.id),
        },
        { onConflict: "slug" },
      );

    if (error) {
      if (isMissingCmsSchema(error)) {
        const snapshot = await loadLegacySupabaseSnapshot(client, false) ?? withSupabaseSource(await loadJsonSnapshot());
        await saveLegacySupabaseSnapshot(client, {
          ...snapshot,
          drafts: {
            ...(snapshot.drafts ?? {}),
            [slug]: next,
          },
        });
        return next;
      }
      throw new Error(error.message);
    }
  } else {
    await writeJson(`.${slug}.draft.json`, next);
  }

  return next;
}

export async function publishCmsPage(slug: string, content: CmsPageDocument, session: CmsSession) {
  const published = { ...content, status: "published" as const, updatedAt: now() };
  const client = getSupabaseAdmin();

  if (client) {
    const { data: pageRow, error: readError } = await client
      .from("cms_pages")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();
    if (readError) {
      if (isMissingCmsSchema(readError)) {
        const snapshot = await loadLegacySupabaseSnapshot(client, false) ?? withSupabaseSource(await loadJsonSnapshot());
        const version: CmsVersion = {
          id: `version-${Date.now()}`,
          pageId: slug,
          slug,
          label: `Published ${published.title}`,
          content: published,
          publishedAt: published.updatedAt,
          publishedBy: session.email,
        };
        await saveLegacySupabaseSnapshot(client, {
          ...snapshot,
          pages: snapshot.pages.map((page) => (page.slug === slug ? published : page)),
          drafts: Object.fromEntries(Object.entries(snapshot.drafts ?? {}).filter(([draftSlug]) => draftSlug !== slug)),
          versions: [version, ...snapshot.versions],
        });
      } else {
        throw new Error(readError.message);
      }
    }

    if (!readError) {
      const { data: upserted, error } = await client
        .from("cms_pages")
        .upsert(
          {
            slug,
            title: published.title,
            draft_content: published,
            published_content: published,
            updated_at: published.updatedAt,
            updated_by: maybeUuid(session.id),
          },
          { onConflict: "slug" },
        )
        .select("id")
        .single();
      if (error) throw new Error(error.message);

      const pageId = String(pageRow?.id ?? upserted.id);
      const { error: versionError } = await client.from("cms_versions").insert({
        page_id: pageId,
        content: published,
        published_by: maybeUuid(session.id),
        label: `Published ${published.title}`,
      });
      if (versionError) throw new Error(versionError.message);
    }
  }

  await writeJson(`${slug}.json`, published);
  const commit = await commitCmsFiles(
    [{ path: `content/cms/${slug}.json`, content: published }],
    `cms: publish ${slug} — ${published.updatedAt}`,
  );

  return { page: published, commit };
}

export async function restoreCmsVersion(versionId: string, session: CmsSession) {
  const client = getSupabaseAdmin();
  if (!client) throw new Error("Version restore requires Supabase CMS tables.");

  const { data: version, error } = await client
    .from("cms_versions")
    .select("id, page_id, content, label")
    .eq("id", versionId)
    .single();
  if (error) {
    if (isMissingCmsSchema(error)) {
      const snapshot = await loadLegacySupabaseSnapshot(client, false);
      const legacyVersion = snapshot?.versions.find((item) => item.id === versionId);
      if (!snapshot || !legacyVersion) throw new Error("Version snapshot could not be found.");
      const restored = { ...legacyVersion.content, status: "published" as const, updatedAt: now() };
      const nextVersion: CmsVersion = {
        id: `version-${Date.now()}`,
        pageId: restored.slug,
        slug: restored.slug,
        label: `Restored ${legacyVersion.label}`,
        content: restored,
        publishedAt: restored.updatedAt,
        publishedBy: session.email,
      };
      await saveLegacySupabaseSnapshot(client, {
        ...snapshot,
        pages: snapshot.pages.map((page) => (page.slug === restored.slug ? restored : page)),
        drafts: Object.fromEntries(Object.entries(snapshot.drafts ?? {}).filter(([draftSlug]) => draftSlug !== restored.slug)),
        versions: [nextVersion, ...snapshot.versions],
      });
      await writeJson(`${restored.slug}.json`, restored);
      const commit = await commitCmsFiles(
        [{ path: `content/cms/${restored.slug}.json`, content: restored }],
        `cms: publish ${restored.slug} — ${restored.updatedAt}`,
      );
      return { page: restored, commit };
    }
    throw new Error(error.message);
  }

  const restored = {
    ...(version.content as CmsPageDocument),
    status: "published" as const,
    updatedAt: now(),
  };

  const { data: page, error: pageError } = await client
    .from("cms_pages")
    .update({
      draft_content: restored,
      published_content: restored,
      updated_at: restored.updatedAt,
      updated_by: maybeUuid(session.id),
    })
    .eq("id", version.page_id)
    .select("slug")
    .single();
  if (pageError) throw new Error(pageError.message);

  const { error: versionError } = await client.from("cms_versions").insert({
    page_id: version.page_id,
    content: restored,
    published_by: maybeUuid(session.id),
    label: `Restored ${version.label}`,
  });
  if (versionError) throw new Error(versionError.message);

  await writeJson(`${restored.slug}.json`, restored);
  const commit = await commitCmsFiles(
    [{ path: `content/cms/${restored.slug}.json`, content: restored }],
    `cms: publish ${String(page.slug)} — ${restored.updatedAt}`,
  );

  return { page: restored, commit };
}

export async function saveCmsNavigation(items: CmsNavigationItem[]) {
  const client = getSupabaseAdmin();
  if (client) {
    const { error } = await client.from("cms_navigation").upsert(
      items.map((item) => ({
        id: item.id,
        label: item.label,
        href: item.href,
        parent_id: item.parentId,
        sort_order: item.sortOrder,
        is_visible: item.isVisible,
      })),
      { onConflict: "id" },
    );
    if (error) {
      if (isMissingCmsSchema(error)) {
        const snapshot = await loadLegacySupabaseSnapshot(client) ?? withSupabaseSource(await loadJsonSnapshot());
        await saveLegacySupabaseSnapshot(client, { ...snapshot, navigation: items });
      } else {
        throw new Error(error.message);
      }
    }
  }

  await writeJson("navigation.json", { items });
  return items;
}

export async function saveCmsModule(
  module: Exclude<CmsModuleName, "pages" | "navigation" | "media">,
  payload: unknown,
) {
  const client = getSupabaseAdmin();

  if (client) {
    if (module === "blog-posts") {
      const posts = payload as CmsBlogPost[];
      const { error } = await client.from("cms_blog_posts").upsert(
        posts.map((post) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          body: post.body,
          cover_image_url: post.coverImageUrl,
          author: post.author,
          tags: post.tags,
          status: post.status,
          published_at: post.publishedAt,
          created_at: post.createdAt,
          updated_at: post.updatedAt,
        })),
        { onConflict: "slug" },
      );
      if (error) {
        if (isMissingCmsSchema(error)) {
          const snapshot = await loadLegacySupabaseSnapshot(client) ?? withSupabaseSource(await loadJsonSnapshot());
          await saveLegacySupabaseSnapshot(client, { ...snapshot, blogPosts: posts });
        } else {
          throw new Error(error.message);
        }
      }
    } else {
      const key = module === "settings" ? "settings" : module;
      const value = module === "settings" ? payload : { items: payload };
      const { error } = await client.from("cms_settings").upsert(
        { key, value, updated_at: now() },
        { onConflict: "key" },
      );
      if (error) {
        if (isMissingCmsSchema(error)) {
          const snapshot = await loadLegacySupabaseSnapshot(client) ?? withSupabaseSource(await loadJsonSnapshot());
          const next =
            module === "settings"
              ? { ...snapshot, settings: payload as CmsSettings }
              : module === "announcements"
                ? { ...snapshot, announcements: payload as CmsAnnouncement[] }
                : { ...snapshot, productions: payload as CmsProductionCredit[] };
          await saveLegacySupabaseSnapshot(client, next);
        } else {
          throw new Error(error.message);
        }
      }
    }
  }

  await writeJson(module === "settings" ? "settings.json" : `${module}.json`, module === "settings" ? payload : { items: payload });
  return payload;
}

export async function saveCmsMediaItems(items: CmsMediaItem[]) {
  const client = getSupabaseAdmin();
  if (client) {
    const snapshot = await loadCmsSnapshot();
    const nextIds = new Set(items.map((item) => item.id));
    const removable = snapshot.media.filter((item) => !nextIds.has(item.id)).map((item) => item.id);
    if (removable.length) {
      const { error: deleteError } = await client.from("cms_media").delete().in("id", removable);
      if (deleteError) {
        if (isMissingCmsSchema(deleteError)) {
          await saveLegacySupabaseSnapshot(client, { ...snapshot, media: items });
          await writeJson("media.json", { items });
          return items;
        }
        throw new Error(deleteError.message);
      }
    }

    if (items.length) {
      const { error } = await client.from("cms_media").upsert(
        items.map((item) => ({
          id: item.id,
          filename: item.filename,
          url: item.url,
          mime_type: item.mimeType,
          size_bytes: item.sizeBytes,
          uploaded_at: item.uploadedAt,
          uploaded_by: item.uploadedBy ? maybeUuid(item.uploadedBy) : null,
        })),
        { onConflict: "id" },
      );
      if (error) {
        if (isMissingCmsSchema(error)) {
          await saveLegacySupabaseSnapshot(client, { ...snapshot, media: items });
        } else {
          throw new Error(error.message);
        }
      }
    }
  }

  await writeJson("media.json", { items });
  return items;
}

export async function publishCmsModule(
  module: Exclude<CmsModuleName, "pages" | "media">,
  payload: unknown,
): Promise<{ commit: GithubCommitResult }> {
  const file = module === "settings" ? "settings.json" : `${module}.json`;
  const content = module === "settings" ? payload : { items: payload };
  await writeJson(file, content);

  const timestamp = now();
  const commit = await commitCmsFiles(
    [{ path: `content/cms/${file}`, content }],
    `cms: publish ${module} — ${timestamp}`,
  );
  return { commit };
}

export async function addCmsMedia(file: File, input: { altText?: string }, session: CmsSession) {
  const client = getSupabaseAdmin();
  if (!client) throw new Error("Supabase Storage is required for media uploads.");

  const filename = file.name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
  const storagePath = `cms/${Date.now()}-${filename || "asset"}`;

  const { data: bucket } = await client.storage.getBucket(mediaBucket);
  if (!bucket) {
    await client.storage.createBucket(mediaBucket, {
      public: true,
      fileSizeLimit: "12MB",
      allowedMimeTypes: ["image/png", "image/jpeg", "image/webp", "image/gif", "application/pdf"],
    });
  }

  const { error: uploadError } = await client.storage.from(mediaBucket).upload(storagePath, file, {
    contentType: file.type || "application/octet-stream",
    upsert: false,
  });
  if (uploadError) throw new Error(uploadError.message);

  const { data } = client.storage.from(mediaBucket).getPublicUrl(storagePath);
  const item: CmsMediaItem = {
    id: `media-${Date.now()}`,
    filename: file.name,
    url: data.publicUrl,
    mimeType: file.type || "application/octet-stream",
    sizeBytes: file.size,
    altText: input.altText,
    uploadedBy: session.email,
    uploadedAt: now(),
  };

  const { error } = await client.from("cms_media").insert({
    id: item.id,
    filename: item.filename,
    url: item.url,
    mime_type: item.mimeType,
    size_bytes: item.sizeBytes,
    uploaded_by: maybeUuid(session.id),
    uploaded_at: item.uploadedAt,
  });

  const snapshot = await loadCmsSnapshot();
  if (error) {
    if (!isMissingCmsSchema(error)) throw new Error(error.message);
    await saveLegacySupabaseSnapshot(client, { ...snapshot, media: [item, ...snapshot.media] });
  }
  await writeJson("media.json", { items: [item, ...snapshot.media] });

  return item;
}
