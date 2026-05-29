"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  BookOpenText,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Copy,
  Eye,
  FileText,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Loader2,
  LogOut,
  Megaphone,
  PanelLeft,
  Plus,
  RotateCcw,
  Save,
  Settings,
  Sparkles,
  Trash2,
  Redo2,
  Undo2,
  Underline,
  Upload,
} from "lucide-react";
import type {
  CmsAnnouncement,
  CmsBlogPost,
  CmsField,
  CmsMediaItem,
  CmsMetric,
  CmsNavigationItem,
  CmsPageDocument,
  CmsProductionCredit,
  CmsSection,
  CmsSettings,
  CmsSnapshot,
} from "@/lib/cms/types";

type ModuleId = "pages" | "media" | "navigation" | "blog-posts" | "announcements" | "productions" | "settings";

interface ToastMessage {
  id: number;
  tone: "success" | "error" | "info";
  text: string;
}

const moduleItems: Array<{ id: ModuleId; label: string; icon: typeof FileText }> = [
  { id: "pages", label: "Pages", icon: FileText },
  { id: "media", label: "Media Library", icon: ImageIcon },
  { id: "navigation", label: "Navigation Manager", icon: PanelLeft },
  { id: "blog-posts", label: "Blog Posts", icon: BookOpenText },
  { id: "announcements", label: "Announcements", icon: Megaphone },
  { id: "productions", label: "Productions", icon: Sparkles },
  { id: "settings", label: "Settings", icon: Settings },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function buildTree(items: CmsNavigationItem[]) {
  const byParent = new Map<string | null, CmsNavigationItem[]>();
  for (const item of items) {
    const list = byParent.get(item.parentId) ?? [];
    list.push(item);
    byParent.set(item.parentId, list);
  }

  for (const list of byParent.values()) {
    list.sort((a, b) => a.sortOrder - b.sortOrder || a.label.localeCompare(b.label));
  }

  return byParent;
}

function statusStyles(status: CmsPageDocument["status"], dirty: boolean) {
  if (dirty) return "border-amber-300 bg-amber-50 text-amber-800";
  if (status === "draft") return "border-blue-200 bg-blue-50 text-blue-700";
  return "border-emerald-200 bg-emerald-50 text-emerald-700";
}

export function WixCmsEditor() {
  const [snapshot, setSnapshot] = useState<CmsSnapshot | null>(null);
  const [activeModule, setActiveModule] = useState<ModuleId>("pages");
  const [activePageSlug, setActivePageSlug] = useState("home");
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(() => new Set(["foundation", "visibility", "growth-engine", "delivery"]));
  const [draggedNavId, setDraggedNavId] = useState<string | null>(null);
  const [dirty, setDirty] = useState(false);
  const [saving, startSaving] = useTransition();
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [undoStack, setUndoStack] = useState<CmsSnapshot[]>([]);
  const [redoStack, setRedoStack] = useState<CmsSnapshot[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const activePage = snapshot?.pages.find((page) => page.slug === activePageSlug) ?? snapshot?.pages[0] ?? null;
  const tree = useMemo(() => buildTree(snapshot?.navigation ?? []), [snapshot?.navigation]);
  const pageVersions = useMemo(
    () => (snapshot?.versions ?? []).filter((version) => version.slug === activePage?.slug),
    [snapshot?.versions, activePage?.slug],
  );

  useEffect(() => {
    let active = true;
    fetch("/api/admin/cms")
      .then((response) => response.json())
      .then((payload) => {
        if (!active) return;
        setSnapshot(payload.snapshot);
        setActivePageSlug(payload.snapshot?.pages?.[0]?.slug ?? "home");
      })
      .catch(() => pushToast("error", "CMS content could not be loaded."))
      .finally(() => active && setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!dirty || activeModule !== "pages" || !activePage) return;
    const timer = window.setInterval(() => {
      void saveDraft(false);
    }, 60000);

    return () => window.clearInterval(timer);
  }, [dirty, activeModule, activePageSlug, activePage]);

  function pushToast(tone: ToastMessage["tone"], text: string) {
    const id = Date.now();
    setToasts((current) => [...current, { id, tone, text }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 4200);
  }

  function replaceSnapshot(next: CmsSnapshot) {
    if (snapshot) pushUndo(snapshot);
    setRedoStack([]);
    setSnapshot(next);
  }

  function runSaving(task: () => Promise<void>) {
    startSaving(() => {
      void task();
    });
  }

  function cloneSnapshot(input: CmsSnapshot) {
    return JSON.parse(JSON.stringify(input)) as CmsSnapshot;
  }

  function pushUndo(input: CmsSnapshot) {
    setUndoStack((current) => [...current.slice(-29), cloneSnapshot(input)]);
  }

  function undo() {
    if (!undoStack.length || !snapshot) return;
    const previous = undoStack[undoStack.length - 1];
    setRedoStack((current) => [...current.slice(-29), cloneSnapshot(snapshot)]);
    setUndoStack((current) => current.slice(0, -1));
    setSnapshot(previous);
    setDirty(true);
  }

  function redo() {
    if (!redoStack.length || !snapshot) return;
    const next = redoStack[redoStack.length - 1];
    setUndoStack((current) => [...current.slice(-29), cloneSnapshot(snapshot)]);
    setRedoStack((current) => current.slice(0, -1));
    setSnapshot(next);
    setDirty(true);
  }

  function updatePage(updater: (page: CmsPageDocument) => CmsPageDocument) {
    if (snapshot) pushUndo(snapshot);
    setRedoStack([]);
    setSnapshot((current) => {
      if (!current) return current;
      return {
        ...current,
        pages: current.pages.map((page) => (page.slug === activePageSlug ? updater(page) : page)),
      };
    });
    setDirty(true);
  }

  async function cmsAction<T>(body: Record<string, unknown>) {
    const response = await fetch("/api/admin/cms", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(payload?.error || "CMS action failed.");
    }
    return payload as T;
  }

  async function saveDraft(showToast = true) {
    if (!activePage) return;
    runSaving(async () => {
      try {
        const payload = await cmsAction<{ page: CmsPageDocument }>({
          action: "save_page_draft",
          slug: activePage.slug,
          content: activePage,
        });
        setSnapshot((current) =>
          current
            ? {
                ...current,
                pages: current.pages.map((page) => (page.slug === payload.page.slug ? payload.page : page)),
              }
            : current,
        );
        setDirty(false);
        if (showToast) pushToast("success", "Draft saved to Supabase.");
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Draft could not be saved.");
      }
    });
  }

  function publishPage() {
    if (!activePage) return;
    runSaving(async () => {
      try {
        const payload = await cmsAction<{ page: CmsPageDocument; commit?: { skipped?: boolean; reason?: string; commitUrl?: string } }>({
          action: "publish_page",
          slug: activePage.slug,
          content: activePage,
        });
        setSnapshot((current) =>
          current
            ? {
                ...current,
                pages: current.pages.map((page) => (page.slug === payload.page.slug ? payload.page : page)),
              }
            : current,
        );
        setDirty(false);
        pushToast(payload.commit?.skipped ? "info" : "success", payload.commit?.skipped ? payload.commit.reason || "Published without deployment commit." : "Published and committed to GitHub.");
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Publishing failed.");
      }
    });
  }

  function previewPage() {
    if (!activePage) return;
    runSaving(async () => {
      try {
        const response = await fetch("/api/admin/cms/preview-token", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ content: activePage }),
        });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload?.error || "Preview could not be prepared.");
        window.open(payload.url, "_blank", "noopener,noreferrer");
        setDirty(false);
        pushToast("success", "Preview opened with draft content.");
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Preview failed.");
      }
    });
  }

  function restoreVersion(versionId: string) {
    runSaving(async () => {
      try {
        const payload = await cmsAction<{ page: CmsPageDocument }>({ action: "restore_version", versionId });
        setSnapshot((current) =>
          current
            ? {
                ...current,
                pages: current.pages.map((page) => (page.slug === payload.page.slug ? payload.page : page)),
              }
            : current,
        );
        setDirty(false);
        pushToast("success", "Version restored and republished.");
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Version could not be restored.");
      }
    });
  }

  function logout() {
    void fetch("/api/admin/logout", { method: "POST" }).finally(() => {
      window.location.href = "/admin/login";
    });
  }

  function toggleNode(id: string) {
    setExpandedNodes((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectNavPage(item: CmsNavigationItem) {
    const page = snapshot?.pages.find((candidate) => candidate.route === item.href || candidate.slug === item.id);
    if (page) {
      setActivePageSlug(page.slug);
      setActiveSectionId(page.sections[0]?.id ?? null);
      setActiveModule("pages");
      setDirty(false);
    }
  }

  function updateNavigation(items: CmsNavigationItem[]) {
    if (snapshot) pushUndo(snapshot);
    setRedoStack([]);
    setSnapshot((current) => (current ? { ...current, navigation: items } : current));
    setDirty(true);
  }

  function moveNavigationItem(targetId: string) {
    if (!snapshot || !draggedNavId || draggedNavId === targetId) return;
    const dragged = snapshot.navigation.find((item) => item.id === draggedNavId);
    const target = snapshot.navigation.find((item) => item.id === targetId);
    if (!dragged || !target || dragged.parentId !== target.parentId) return;

    const siblings = snapshot.navigation
      .filter((item) => item.parentId === dragged.parentId && item.id !== dragged.id)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    const targetIndex = siblings.findIndex((item) => item.id === target.id);
    siblings.splice(targetIndex, 0, dragged);
    const reordered = siblings.map((item, index) => ({ ...item, sortOrder: index + 1 }));
    updateNavigation(snapshot.navigation.map((item) => reordered.find((next) => next.id === item.id) ?? item));
    setDraggedNavId(null);
  }

  function saveNavigation(publish: boolean) {
    if (!snapshot) return;
    runSaving(async () => {
      try {
        await cmsAction({
          action: publish ? "publish_navigation" : "save_navigation",
          items: snapshot.navigation,
        });
        pushToast("success", publish ? "Navigation published." : "Navigation saved.");
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Navigation could not be saved.");
      }
    });
  }

  function saveModule(module: Exclude<ModuleId, "pages" | "navigation" | "media">, payload: unknown, publish = false) {
    runSaving(async () => {
      try {
        await cmsAction({
          action: publish ? "publish_module" : "save_module",
          module,
          payload,
        });
        pushToast("success", publish ? "Module published." : "Module saved.");
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Module could not be saved.");
      }
    });
  }

  function saveMedia(items: CmsMediaItem[]) {
    if (snapshot) pushUndo(snapshot);
    setRedoStack([]);
    setSnapshot((current) => (current ? { ...current, media: items } : current));
    runSaving(async () => {
      try {
        await cmsAction({ action: "save_media", items });
        pushToast("success", "Media library saved.");
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Media library could not be saved.");
      }
    });
  }

  async function uploadFile(file: File, altText = "") {
    const form = new FormData();
    form.set("file", file);
    form.set("altText", altText);
    const response = await fetch("/api/admin/cms/media", { method: "POST", body: form });
    const payload = await response.json().catch(() => null);
    if (!response.ok) throw new Error(payload?.error || "Upload failed.");
    setSnapshot((current) => (current ? { ...current, media: [payload.media, ...current.media] } : current));
    pushToast("success", "Media uploaded to Supabase Storage.");
    return payload.media as CmsMediaItem;
  }

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (!(event.ctrlKey || event.metaKey)) return;
      if (event.key.toLowerCase() === "z" && !event.shiftKey) {
        event.preventDefault();
        undo();
      }
      if (event.key.toLowerCase() === "y" || (event.key.toLowerCase() === "z" && event.shiftKey)) {
        event.preventDefault();
        redo();
      }
    }

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [snapshot, undoStack, redoStack]);

  if (loading) {
    return <EditorSkeleton />;
  }

  if (!snapshot || !activePage) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#f4f5f7] text-[#111827]">
        <div className="border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-2xl font-semibold text-[#111827]">CMS content unavailable</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-5 bg-[#1769ff] px-5 py-3 text-sm font-semibold text-white">
            Reload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-[#eef0f3] text-[#111827]">
      <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="grid h-9 w-9 place-items-center bg-[#111827] text-sm font-bold text-white">SA</div>
          <div>
            <p className="text-sm font-semibold leading-tight">SAFA CMS Editor</p>
            <p className="text-xs leading-tight text-slate-500">Site / {moduleItems.find((item) => item.id === activeModule)?.label} / {activePage.title}</p>
          </div>
          <span className={`ml-2 rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles(activePage.status, dirty)}`}>
            {dirty ? "Unsaved changes" : activePage.status === "draft" ? "Draft" : "Published"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={undo} disabled={!undoStack.length || saving} className="grid h-9 w-9 place-items-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-35" title="Undo" aria-label="Undo">
            <Undo2 className="h-4 w-4" />
          </button>
          <button type="button" onClick={redo} disabled={!redoStack.length || saving} className="grid h-9 w-9 place-items-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-35" title="Redo" aria-label="Redo">
            <Redo2 className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => void saveDraft()} disabled={saving} className="inline-flex h-9 items-center gap-2 border border-slate-200 bg-white px-4 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50">
            <Save className="h-4 w-4" />
            Save Draft
          </button>
          <button type="button" onClick={previewPage} disabled={saving} className="inline-flex h-9 items-center gap-2 border border-slate-200 bg-white px-4 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50">
            <Eye className="h-4 w-4" />
            Preview
          </button>
          <button type="button" onClick={publishPage} disabled={saving} className="inline-flex h-9 items-center gap-2 bg-[#1769ff] px-5 text-sm font-semibold text-white hover:bg-[#0d56d9] disabled:opacity-50">
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
            Publish
          </button>
          <button type="button" onClick={logout} className="grid h-9 w-9 place-items-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50" title="Log out" aria-label="Log out">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-56px)] min-h-0">
        <aside className="flex w-[68px] shrink-0 flex-col items-center gap-2 bg-[#151922] py-4 text-white">
          {moduleItems.map((item) => {
            const Icon = item.icon;
            const active = activeModule === item.id;
            return (
              <button
                key={item.id}
                type="button"
                title={item.label}
                aria-label={item.label}
                onClick={() => setActiveModule(item.id)}
                className={`grid h-11 w-11 place-items-center transition ${active ? "bg-white text-[#151922]" : "text-white/72 hover:bg-white/10 hover:text-white"}`}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
        </aside>

        <aside className="w-[350px] shrink-0 overflow-y-auto border-r border-slate-200 bg-white">
          <div className="sticky top-0 z-10 border-b border-slate-200 bg-white px-5 py-4">
            <p className="text-sm font-semibold">{moduleItems.find((item) => item.id === activeModule)?.label}</p>
            <p className="mt-1 text-xs text-slate-500">Source: {snapshot.source}</p>
          </div>
          {activeModule === "pages" && (
            <SiteTree
              tree={tree}
              activePage={activePage}
              expandedNodes={expandedNodes}
              onToggle={toggleNode}
              onSelect={selectNavPage}
            />
          )}
          {activeModule === "media" && <MediaSidebar media={snapshot.media} onUploadClick={() => fileInputRef.current?.click()} />}
          {activeModule === "navigation" && (
            <NavigationSidebar
              items={snapshot.navigation}
              tree={tree}
              expandedNodes={expandedNodes}
              draggedId={draggedNavId}
              onToggle={toggleNode}
              onDragStart={setDraggedNavId}
              onDrop={moveNavigationItem}
              onChange={updateNavigation}
            />
          )}
          {activeModule === "blog-posts" && (
            <BlogSidebar
              posts={snapshot.blogPosts}
              selectedId={selectedBlogId}
              onSelect={setSelectedBlogId}
              onCreate={() => {
                const id = `post-${Date.now()}`;
                const post: CmsBlogPost = {
                  id,
                  title: "",
                  slug: "",
                  excerpt: "",
                  body: "",
                  coverImageUrl: "",
                  author: "SA Film Academy",
                  tags: [],
                  status: "draft",
                  publishedAt: null,
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                };
                replaceSnapshot({ ...snapshot, blogPosts: [post, ...snapshot.blogPosts] });
                setSelectedBlogId(id);
              }}
            />
          )}
          {activeModule === "announcements" && <SimpleListSidebar title="Hero Banners" items={snapshot.announcements.map((item) => item.headline || item.id)} />}
          {activeModule === "productions" && <SimpleListSidebar title="Credits Carousel" items={snapshot.productions.map((item) => item.title)} />}
          {activeModule === "settings" && <SimpleListSidebar title="Site Settings" items={["Identity", "Search metadata", "Social links", "Footer", "Contact"]} />}
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto bg-[#eef0f3]">
          {activeModule === "pages" && (
            <PageCanvas
              page={activePage}
              media={snapshot.media}
              versions={pageVersions}
              activeSectionId={activeSectionId}
              onSectionSelect={setActiveSectionId}
              onPageChange={updatePage}
              onUpload={uploadFile}
              onRestore={restoreVersion}
            />
          )}
          {activeModule === "media" && (
            <MediaLibrary
              media={snapshot.media}
              fileInputRef={fileInputRef}
              onUpload={uploadFile}
              onSave={saveMedia}
            />
          )}
          {activeModule === "navigation" && (
            <NavigationManager
              items={snapshot.navigation}
              onChange={updateNavigation}
              onSave={() => saveNavigation(false)}
              onPublish={() => saveNavigation(true)}
            />
          )}
          {activeModule === "blog-posts" && (
            <BlogManager
              posts={snapshot.blogPosts}
              selectedId={selectedBlogId}
              media={snapshot.media}
              onSelect={setSelectedBlogId}
              onChange={(posts) => replaceSnapshot({ ...snapshot, blogPosts: posts })}
              onUpload={uploadFile}
              onSave={(publish) => saveModule("blog-posts", snapshot.blogPosts, publish)}
            />
          )}
          {activeModule === "announcements" && (
            <AnnouncementsManager
              items={snapshot.announcements}
              media={snapshot.media}
              onChange={(announcements) => replaceSnapshot({ ...snapshot, announcements })}
              onUpload={uploadFile}
              onSave={(publish) => saveModule("announcements", snapshot.announcements, publish)}
            />
          )}
          {activeModule === "productions" && (
            <ProductionsManager
              items={snapshot.productions}
              media={snapshot.media}
              onChange={(productions) => replaceSnapshot({ ...snapshot, productions })}
              onUpload={uploadFile}
              onSave={(publish) => saveModule("productions", snapshot.productions, publish)}
            />
          )}
          {activeModule === "settings" && (
            <SettingsManager
              settings={snapshot.settings}
              onChange={(settings) => replaceSnapshot({ ...snapshot, settings })}
              onSave={(publish) => saveModule("settings", snapshot.settings, publish)}
            />
          )}
        </main>
      </div>

      <div className="fixed bottom-5 right-5 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`min-w-72 border px-4 py-3 text-sm shadow-lg ${
              toast.tone === "success"
                ? "border-emerald-200 bg-white text-emerald-700"
                : toast.tone === "error"
                  ? "border-red-200 bg-white text-red-700"
                  : "border-blue-200 bg-white text-blue-700"
            }`}
          >
            {toast.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorSkeleton() {
  return (
    <div className="h-screen bg-[#eef0f3]">
      <div className="h-14 border-b border-slate-200 bg-white" />
      <div className="flex h-[calc(100vh-56px)]">
        <div className="w-[68px] bg-[#151922]" />
        <div className="w-[350px] border-r border-slate-200 bg-white p-5">
          <div className="h-5 w-40 animate-pulse bg-slate-200" />
          <div className="mt-8 space-y-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-11 animate-pulse bg-slate-100" />
            ))}
          </div>
        </div>
        <div className="flex-1 p-8">
          <div className="mx-auto h-[680px] max-w-6xl animate-pulse bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}

function SiteTree({
  tree,
  activePage,
  expandedNodes,
  onToggle,
  onSelect,
}: {
  tree: Map<string | null, CmsNavigationItem[]>;
  activePage: CmsPageDocument;
  expandedNodes: Set<string>;
  onToggle: (id: string) => void;
  onSelect: (item: CmsNavigationItem) => void;
}) {
  const renderItems = (parentId: string | null, depth = 0) =>
    (tree.get(parentId) ?? []).map((item) => {
      const children = tree.get(item.id) ?? [];
      const active = activePage.route === item.href || activePage.slug === item.id;
      const expanded = expandedNodes.has(item.id);
      return (
        <div key={item.id}>
          <div className={`group flex items-center gap-2 border-b border-slate-100 px-4 py-2 ${active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"}`} style={{ paddingLeft: 16 + depth * 18 }}>
            <GripVertical className="h-4 w-4 text-slate-300" />
            {children.length ? (
              <button type="button" onClick={() => onToggle(item.id)} className="grid h-6 w-6 place-items-center text-slate-500">
                {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            ) : (
              <span className="h-6 w-6" />
            )}
            <button type="button" onClick={() => onSelect(item)} className="min-w-0 flex-1 truncate text-left text-sm font-medium">
              {item.label}
            </button>
            {!item.isVisible && <Eye className="h-4 w-4 text-slate-300" />}
          </div>
          {expanded && renderItems(item.id, depth + 1)}
        </div>
      );
    });

  return <div className="py-2">{renderItems(null)}</div>;
}

function PageCanvas({
  page,
  media,
  versions,
  activeSectionId,
  onSectionSelect,
  onPageChange,
  onUpload,
  onRestore,
}: {
  page: CmsPageDocument;
  media: CmsMediaItem[];
  versions: { id: string; label: string; publishedAt: string; publishedBy: string }[];
  activeSectionId: string | null;
  onSectionSelect: (id: string) => void;
  onPageChange: (updater: (page: CmsPageDocument) => CmsPageDocument) => void;
  onUpload: (file: File, altText?: string) => Promise<CmsMediaItem>;
  onRestore: (versionId: string) => void;
}) {
  function updateHero<K extends keyof CmsPageDocument["hero"]>(key: K, value: CmsPageDocument["hero"][K]) {
    onPageChange((current) => ({ ...current, hero: { ...current.hero, [key]: value } }));
  }

  function updateSeo<K extends keyof CmsPageDocument["seo"]>(key: K, value: CmsPageDocument["seo"][K]) {
    onPageChange((current) => ({ ...current, seo: { ...current.seo, [key]: value } }));
  }

  function updateSection(sectionId: string, updater: (section: CmsSection) => CmsSection) {
    onPageChange((current) => ({
      ...current,
      sections: current.sections.map((section) => (section.id === sectionId ? updater(section) : section)),
    }));
  }

  function addSection() {
    const id = `section-${Date.now()}`;
    onPageChange((current) => ({
      ...current,
      sections: [
        ...current.sections,
        {
          id,
          label: "New Content Section",
          type: "rich_text",
          collapsed: false,
          fields: [
            {
              id: "body",
              label: "Body copy",
              type: "rich_text",
              value: "",
            },
          ],
        },
      ],
    }));
    onSectionSelect(id);
  }

  return (
    <div className="mx-auto grid max-w-[1360px] grid-cols-[minmax(0,1fr)_340px] gap-6 p-6">
      <section className="min-w-0 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-4">
          <p className="text-xs font-semibold text-blue-700">Editing / {page.title}</p>
          <input value={page.title} onChange={(event) => onPageChange((current) => ({ ...current, title: event.target.value }))} className="mt-2 w-full text-3xl font-semibold outline-none" />
          <p className="mt-1 text-sm text-slate-500">{page.route}</p>
        </div>

        <section className="relative min-h-[420px] overflow-hidden bg-[#111827]">
          <img src={page.hero.backgroundImage} alt={page.hero.altText} className="absolute inset-0 h-full w-full object-contain opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/20" />
          <div className="relative z-10 max-w-4xl px-8 py-20 text-white">
            <RichTextEditor label="Hero headline" value={page.hero.headline} onChange={(value) => updateHero("headline", value)} heading />
            <RichTextEditor label="Hero subheadline" value={page.hero.subheadline} onChange={(value) => updateHero("subheadline", value)} />
            <div className="mt-8 inline-flex items-center gap-3 bg-[#c9a84c] px-6 py-3 text-sm font-bold text-[#111827]">
              <input value={page.hero.ctaLabel} onChange={(event) => updateHero("ctaLabel", event.target.value)} className="w-48 bg-transparent outline-none" />
              <span className="text-[#111827]/40">/</span>
              <input value={page.hero.ctaUrl} onChange={(event) => updateHero("ctaUrl", event.target.value)} className="w-56 bg-transparent outline-none" />
            </div>
          </div>
        </section>

        <div className="space-y-4 p-6">
          <ImageField
            label="Hero background image"
            url={page.hero.backgroundImage}
            altText={page.hero.altText}
            media={media}
            onUpload={onUpload}
            onChange={(url, altText) =>
              onPageChange((current) => ({
                ...current,
                hero: { ...current.hero, backgroundImage: url, altText },
              }))
            }
          />

          {page.sections.map((section) => (
            <SectionEditor
              key={section.id}
              section={section}
              media={media}
              active={activeSectionId === section.id}
              onSelect={() => onSectionSelect(section.id)}
              onChange={(updater) => updateSection(section.id, updater)}
              onUpload={onUpload}
            />
          ))}

          <button type="button" onClick={addSection} className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-slate-50">
            <Plus className="h-4 w-4" />
            Add Section
          </button>
        </div>
      </section>

      <aside className="space-y-5">
        <Panel title="Page Settings">
          <Field label="Route">
            <input value={page.route} onChange={(event) => onPageChange((current) => ({ ...current, route: event.target.value }))} className="cms-input" />
          </Field>
          <Field label="SEO title">
            <input value={page.seo.title} onChange={(event) => updateSeo("title", event.target.value)} className="cms-input" />
          </Field>
          <Field label="Meta description">
            <textarea value={page.seo.description} onChange={(event) => updateSeo("description", event.target.value)} className="cms-input min-h-28 resize-none" />
          </Field>
        </Panel>

        <Panel title="Version History">
          <div className="space-y-2">
            {versions.length === 0 && <p className="text-sm text-slate-500">No published snapshots have been recorded yet.</p>}
            {versions.map((version) => (
              <div key={version.id} className="border border-slate-200 p-3">
                <div className="flex items-start gap-2">
                  <Clock3 className="mt-0.5 h-4 w-4 text-slate-400" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{version.label}</p>
                    <p className="text-xs text-slate-500">{new Date(version.publishedAt).toLocaleString("en-ZA")}</p>
                  </div>
                </div>
                <button type="button" onClick={() => onRestore(version.id)} className="mt-3 inline-flex items-center gap-2 border border-slate-200 px-3 py-2 text-xs font-semibold hover:bg-slate-50">
                  <RotateCcw className="h-3.5 w-3.5" />
                  Restore
                </button>
              </div>
            ))}
          </div>
        </Panel>
      </aside>
    </div>
  );
}

function SectionEditor({
  section,
  media,
  active,
  onSelect,
  onChange,
  onUpload,
}: {
  section: CmsSection;
  media: CmsMediaItem[];
  active: boolean;
  onSelect: () => void;
  onChange: (updater: (section: CmsSection) => CmsSection) => void;
  onUpload: (file: File, altText?: string) => Promise<CmsMediaItem>;
}) {
  function updateField(field: CmsField, value: string) {
    onChange((current) => ({
      ...current,
      fields: (current.fields ?? []).map((item) => (item.id === field.id ? { ...item, value } : item)),
    }));
  }

  function updateMetric(metric: CmsMetric, key: keyof CmsMetric, value: string) {
    onChange((current) => ({
      ...current,
      metrics: (current.metrics ?? []).map((item) => (item.id === metric.id ? { ...item, [key]: value } : item)),
    }));
  }

  return (
    <section className={`border ${active ? "border-blue-400 shadow-[0_0_0_3px_rgba(23,105,255,0.12)]" : "border-slate-200"} bg-white`}>
      <button type="button" onClick={onSelect} className="flex w-full items-center justify-between border-b border-slate-200 px-4 py-3 text-left">
        <span className="font-semibold">{section.label}</span>
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </button>
      {!section.collapsed && (
        <div className="space-y-5 p-4">
          <Field label="Section label">
            <input value={section.label} onChange={(event) => onChange((current) => ({ ...current, label: event.target.value }))} className="cms-input" />
          </Field>
          {(section.fields ?? []).map((field) => (
            <div key={field.id}>
              {field.type === "image" ? (
                <ImageField label={field.label} url={field.value} altText={field.altText ?? ""} media={media} onUpload={onUpload} onChange={(url, altText) => onChange((current) => ({ ...current, fields: (current.fields ?? []).map((item) => (item.id === field.id ? { ...item, value: url, altText } : item)) }))} />
              ) : (
                <RichTextEditor label={field.label} value={field.value} onChange={(value) => updateField(field, value)} />
              )}
            </div>
          ))}
          {(section.metrics ?? []).map((metric) => (
            <div key={metric.id} className="grid grid-cols-[120px_minmax(0,1fr)] gap-3 border border-slate-200 p-3">
              <input value={metric.number} onChange={(event) => updateMetric(metric, "number", event.target.value)} className="cms-input text-xl font-semibold" />
              <div className="space-y-2">
                <input value={metric.label} onChange={(event) => updateMetric(metric, "label", event.target.value)} className="cms-input" />
                <textarea value={metric.description} onChange={(event) => updateMetric(metric, "description", event.target.value)} className="cms-input min-h-20 resize-none" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function RichTextEditor({
  label,
  value,
  onChange,
  heading = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  heading?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && document.activeElement !== ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value;
    }
  }, [value]);

  function command(name: string, argument?: string) {
    document.execCommand(name, false, argument);
    if (ref.current) onChange(ref.current.innerHTML);
  }

  return (
    <div className="relative">
      <span className="mb-2 block text-xs font-semibold text-slate-500">{label}</span>
      {focused && (
        <div className="absolute -top-11 left-0 z-20 flex items-center gap-1 border border-slate-200 bg-white p-1 shadow-lg">
          <ToolbarButton label="Bold" onClick={() => command("bold")} icon={Bold} />
          <ToolbarButton label="Italic" onClick={() => command("italic")} icon={Italic} />
          <ToolbarButton label="Underline" onClick={() => command("underline")} icon={Underline} />
          <ToolbarButton label="Heading 1" onClick={() => command("formatBlock", "h1")} icon={Heading1} />
          <ToolbarButton label="Heading 2" onClick={() => command("formatBlock", "h2")} icon={Heading2} />
          <ToolbarButton label="Heading 3" onClick={() => command("formatBlock", "h3")} icon={Heading3} />
          <ToolbarButton label="Heading 4" onClick={() => command("formatBlock", "h4")} icon={Heading4} />
          <ToolbarButton label="Bullet list" onClick={() => command("insertUnorderedList")} icon={List} />
          <ToolbarButton label="Numbered list" onClick={() => command("insertOrderedList")} icon={ListOrdered} />
          <ToolbarButton label="Link" onClick={() => {
            const url = window.prompt("Link URL");
            if (url) command("createLink", url);
          }} icon={Link2} />
          <ToolbarButton label="Align left" onClick={() => command("justifyLeft")} icon={AlignLeft} />
          <ToolbarButton label="Align centre" onClick={() => command("justifyCenter")} icon={AlignCenter} />
          <ToolbarButton label="Align right" onClick={() => command("justifyRight")} icon={AlignRight} />
        </div>
      )}
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onFocus={() => setFocused(true)}
        onBlur={() => window.setTimeout(() => setFocused(false), 150)}
        onInput={(event) => onChange(event.currentTarget.innerHTML)}
        className={`min-h-14 border border-slate-200 bg-white px-3 py-3 leading-relaxed text-[#111827] outline-none focus:border-blue-400 ${heading ? "text-4xl font-semibold" : "text-base"}`}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}

function ToolbarButton({ label, icon: Icon, onClick }: { label: string; icon: typeof Bold; onClick: () => void }) {
  return (
    <button type="button" title={label} aria-label={label} onMouseDown={(event) => event.preventDefault()} onClick={onClick} className="grid h-8 w-8 place-items-center text-slate-600 hover:bg-slate-100 hover:text-slate-950">
      <Icon className="h-4 w-4" />
    </button>
  );
}

function ImageField({
  label,
  url,
  altText,
  media,
  onChange,
  onUpload,
}: {
  label: string;
  url: string;
  altText: string;
  media: CmsMediaItem[];
  onChange: (url: string, altText: string) => void;
  onUpload: (file: File, altText?: string) => Promise<CmsMediaItem>;
}) {
  const [uploading, setUploading] = useState(false);

  async function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const item = await onUpload(file, altText);
      onChange(item.url, item.altText ?? altText);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <span className="block text-xs font-semibold text-slate-500">{label}</span>
      <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-100">
          {url ? <img src={url} alt={altText} className="h-full w-full object-contain" /> : <div className="grid h-full place-items-center text-sm text-slate-400">No image selected</div>}
        </div>
        <div
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            void handleFiles(event.dataTransfer.files);
          }}
          className="space-y-3 border border-dashed border-slate-300 bg-slate-50 p-4"
        >
          <input value={url} onChange={(event) => onChange(event.target.value, altText)} className="cms-input" placeholder="Image URL" />
          <input value={altText} onChange={(event) => onChange(url, event.target.value)} className="cms-input" placeholder="Alt text" />
          <label className="inline-flex cursor-pointer items-center gap-2 border border-slate-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-slate-50">
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            Upload or drop image
            <input type="file" accept="image/*" className="sr-only" onChange={(event) => void handleFiles(event.target.files)} />
          </label>
          <div className="grid grid-cols-4 gap-2">
            {media.slice(0, 8).map((item) => (
              <button key={item.id} type="button" onClick={() => onChange(item.url, item.altText ?? altText)} className="aspect-square overflow-hidden border border-slate-200 bg-white">
                <img src={item.url} alt={item.altText ?? item.filename} className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaSidebar({ media, onUploadClick }: { media: CmsMediaItem[]; onUploadClick: () => void }) {
  return (
    <div className="p-4">
      <button type="button" onClick={onUploadClick} className="mb-4 inline-flex w-full items-center justify-center gap-2 bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">
        <Upload className="h-4 w-4" />
        Upload Asset
      </button>
      <div className="space-y-2">
        {media.map((item) => (
          <div key={item.id} className="flex items-center gap-3 border border-slate-200 p-2">
            <img src={item.url} alt={item.altText ?? item.filename} className="h-12 w-12 object-contain" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{item.filename}</p>
              <p className="text-xs text-slate-500">{item.mimeType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MediaLibrary({
  media,
  fileInputRef,
  onUpload,
  onSave,
}: {
  media: CmsMediaItem[];
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onUpload: (file: File, altText?: string) => Promise<CmsMediaItem>;
  onSave: (items: CmsMediaItem[]) => void;
}) {
  const [items, setItems] = useState(media);

  useEffect(() => setItems(media), [media]);

  async function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    const item = await onUpload(file);
    setItems((current) => [item, ...current]);
  }

  return (
    <div className="p-6">
      <input ref={fileInputRef} type="file" accept="image/*,.pdf" className="sr-only" onChange={(event) => void handleFiles(event.target.files)} />
      <div className="mb-5 flex items-center justify-between">
        <p className="text-2xl font-semibold">Media Library</p>
        <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center gap-2 bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">
          <Upload className="h-4 w-4" />
          Upload
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-sm">
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img src={item.url} alt={item.altText ?? item.filename} className="h-full w-full object-contain" />
            </div>
            <div className="space-y-2 p-3">
              <input value={item.filename} onChange={(event) => setItems((current) => current.map((candidate) => candidate.id === item.id ? { ...candidate, filename: event.target.value } : candidate))} className="cms-input" />
              <input value={item.altText ?? ""} onChange={(event) => setItems((current) => current.map((candidate) => candidate.id === item.id ? { ...candidate, altText: event.target.value } : candidate))} className="cms-input" placeholder="Alt text" />
              <div className="flex gap-2">
                <button type="button" onClick={() => void navigator.clipboard.writeText(item.url)} className="grid h-9 w-9 place-items-center border border-slate-200" title="Copy URL" aria-label="Copy URL">
                  <Copy className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => setItems((current) => current.filter((candidate) => candidate.id !== item.id))} className="grid h-9 w-9 place-items-center border border-red-200 text-red-600" title="Delete" aria-label="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => onSave(items)} className="mt-6 bg-[#1769ff] px-5 py-3 text-sm font-semibold text-white">
        Save Media Library
      </button>
    </div>
  );
}

function NavigationSidebar({
  items,
  tree,
  expandedNodes,
  draggedId,
  onToggle,
  onDragStart,
  onDrop,
  onChange,
}: {
  items: CmsNavigationItem[];
  tree: Map<string | null, CmsNavigationItem[]>;
  expandedNodes: Set<string>;
  draggedId: string | null;
  onToggle: (id: string) => void;
  onDragStart: (id: string | null) => void;
  onDrop: (id: string) => void;
  onChange: (items: CmsNavigationItem[]) => void;
}) {
  function render(parentId: string | null, depth = 0) {
    return (tree.get(parentId) ?? []).map((item) => {
      const children = tree.get(item.id) ?? [];
      const expanded = expandedNodes.has(item.id);
      return (
        <div key={item.id}>
          <div
            draggable
            onDragStart={() => onDragStart(item.id)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => onDrop(item.id)}
            className={`flex items-center gap-2 border-b border-slate-100 px-4 py-2 ${draggedId === item.id ? "bg-blue-50" : "hover:bg-slate-50"}`}
            style={{ paddingLeft: 16 + depth * 18 }}
          >
            <GripVertical className="h-4 w-4 text-slate-400" />
            {children.length ? (
              <button type="button" onClick={() => onToggle(item.id)}>{expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}</button>
            ) : (
              <span className="h-4 w-4" />
            )}
            <input value={item.label} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, label: event.target.value } : candidate))} className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
          </div>
          {expanded && render(item.id, depth + 1)}
        </div>
      );
    });
  }

  return <div className="py-2">{render(null)}</div>;
}

function NavigationManager({
  items,
  onChange,
  onSave,
  onPublish,
}: {
  items: CmsNavigationItem[];
  onChange: (items: CmsNavigationItem[]) => void;
  onSave: () => void;
  onPublish: () => void;
}) {
  function addPage() {
    const id = `page-${Date.now()}`;
    onChange([
      ...items,
      {
        id,
        label: "New Page",
        href: `/pages/${id}`,
        parentId: null,
        sortOrder: items.filter((item) => item.parentId === null).length + 1,
        isVisible: true,
      },
    ]);
  }

  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-2xl font-semibold">Navigation Manager</p>
        <div className="flex gap-2">
          <button type="button" onClick={addPage} className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-3 text-sm font-semibold">
            <Plus className="h-4 w-4" />
            Add Page
          </button>
          <button type="button" onClick={onSave} className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold">Save</button>
          <button type="button" onClick={onPublish} className="bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">Publish</button>
        </div>
      </div>
      <div className="bg-white shadow-sm">
        {[...items].sort((a, b) => (a.parentId ?? "").localeCompare(b.parentId ?? "") || a.sortOrder - b.sortOrder).map((item) => (
          <div key={item.id} className="grid grid-cols-[1.2fr_1.4fr_1fr_120px_80px] gap-3 border-b border-slate-100 p-3">
            <input value={item.label} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, label: event.target.value } : candidate))} className="cms-input" />
            <input value={item.href} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, href: event.target.value } : candidate))} className="cms-input" />
            <select value={item.parentId ?? ""} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, parentId: event.target.value || null } : candidate))} className="cms-input">
              <option value="">Top level</option>
              {items.filter((candidate) => candidate.id !== item.id && candidate.parentId === null).map((candidate) => (
                <option key={candidate.id} value={candidate.id}>{candidate.label}</option>
              ))}
            </select>
            <input type="number" value={item.sortOrder} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, sortOrder: Number(event.target.value) } : candidate))} className="cms-input" />
            <input type="checkbox" checked={item.isVisible} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, isVisible: event.target.checked } : candidate))} className="h-5 w-5 self-center" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogSidebar({ posts, selectedId, onSelect, onCreate }: { posts: CmsBlogPost[]; selectedId: string | null; onSelect: (id: string) => void; onCreate: () => void }) {
  return (
    <div className="p-4">
      <button type="button" onClick={onCreate} className="mb-4 inline-flex w-full items-center justify-center gap-2 bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">
        <Plus className="h-4 w-4" />
        New Post
      </button>
      <div className="space-y-2">
        {posts.map((post) => (
          <button key={post.id} type="button" onClick={() => onSelect(post.id)} className={`w-full border px-3 py-3 text-left ${selectedId === post.id ? "border-blue-300 bg-blue-50" : "border-slate-200 bg-white"}`}>
            <span className="block truncate text-sm font-semibold">{post.title || "Untitled post"}</span>
            <span className="text-xs text-slate-500">{post.status}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function BlogManager({
  posts,
  selectedId,
  media,
  onSelect,
  onChange,
  onUpload,
  onSave,
}: {
  posts: CmsBlogPost[];
  selectedId: string | null;
  media: CmsMediaItem[];
  onSelect: (id: string | null) => void;
  onChange: (posts: CmsBlogPost[]) => void;
  onUpload: (file: File, altText?: string) => Promise<CmsMediaItem>;
  onSave: (publish: boolean) => void;
}) {
  const post = posts.find((item) => item.id === selectedId) ?? posts[0] ?? null;

  function update(updates: Partial<CmsBlogPost>) {
    if (!post) return;
    onChange(posts.map((item) => item.id === post.id ? { ...item, ...updates, updatedAt: new Date().toISOString() } : item));
  }

  if (!post) {
    return <div className="p-6 text-slate-600">Create a post from the left panel.</div>;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-5 p-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Blog Post</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => onChange(posts.filter((item) => item.id !== post.id))} className="border border-red-200 px-4 py-3 text-sm font-semibold text-red-600">Delete</button>
          <button type="button" onClick={() => onSave(false)} className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold">Save</button>
          <button type="button" onClick={() => onSave(true)} className="bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">Publish</button>
        </div>
      </div>
      <div className="space-y-4 bg-white p-5 shadow-sm">
        <Field label="Title"><input value={post.title} onChange={(event) => update({ title: event.target.value, slug: post.slug || slugify(event.target.value) })} className="cms-input" /></Field>
        <Field label="Slug"><input value={post.slug} onChange={(event) => update({ slug: slugify(event.target.value) })} className="cms-input" /></Field>
        <Field label="Excerpt"><textarea value={post.excerpt} onChange={(event) => update({ excerpt: event.target.value })} className="cms-input min-h-24 resize-none" /></Field>
        <ImageField label="Cover image" url={post.coverImageUrl} altText={post.title} media={media} onUpload={onUpload} onChange={(url) => update({ coverImageUrl: url })} />
        <RichTextEditor label="Body" value={post.body} onChange={(body) => update({ body })} />
        <div className="grid grid-cols-3 gap-4">
          <Field label="Author"><input value={post.author} onChange={(event) => update({ author: event.target.value })} className="cms-input" /></Field>
          <Field label="Tags"><input value={post.tags.join(", ")} onChange={(event) => update({ tags: event.target.value.split(",").map((tag) => tag.trim()).filter(Boolean) })} className="cms-input" /></Field>
          <Field label="Status">
            <select value={post.status} onChange={(event) => update({ status: event.target.value === "published" ? "published" : "draft", publishedAt: event.target.value === "published" ? new Date().toISOString() : null })} className="cms-input">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </Field>
        </div>
      </div>
    </div>
  );
}

function AnnouncementsManager({ items, media, onChange, onUpload, onSave }: { items: CmsAnnouncement[]; media: CmsMediaItem[]; onChange: (items: CmsAnnouncement[]) => void; onUpload: (file: File, altText?: string) => Promise<CmsMediaItem>; onSave: (publish: boolean) => void }) {
  return (
    <div className="space-y-5 p-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Announcements / Hero Banners</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => onSave(false)} className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold">Save</button>
          <button type="button" onClick={() => onSave(true)} className="bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">Publish</button>
        </div>
      </div>
      {items.map((item) => (
        <div key={item.id} className="space-y-4 bg-white p-5 shadow-sm">
          <Field label="Headline"><input value={item.headline} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, headline: event.target.value } : candidate))} className="cms-input" /></Field>
          <Field label="Subheadline"><textarea value={item.subheadline} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, subheadline: event.target.value } : candidate))} className="cms-input min-h-24 resize-none" /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="CTA label"><input value={item.ctaLabel} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, ctaLabel: event.target.value } : candidate))} className="cms-input" /></Field>
            <Field label="CTA URL"><input value={item.ctaUrl} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, ctaUrl: event.target.value } : candidate))} className="cms-input" /></Field>
          </div>
          <ImageField label="Background image" url={item.backgroundImage} altText={item.headline} media={media} onUpload={onUpload} onChange={(url) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, backgroundImage: url } : candidate))} />
        </div>
      ))}
    </div>
  );
}

function ProductionsManager({ items, media, onChange, onUpload, onSave }: { items: CmsProductionCredit[]; media: CmsMediaItem[]; onChange: (items: CmsProductionCredit[]) => void; onUpload: (file: File, altText?: string) => Promise<CmsMediaItem>; onSave: (publish: boolean) => void }) {
  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-2xl font-semibold">Productions</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => onChange([...items, { id: `production-${Date.now()}`, title: "", category: "", posterImage: "" }])} className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-3 text-sm font-semibold"><Plus className="h-4 w-4" />Add</button>
          <button type="button" onClick={() => onSave(false)} className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold">Save</button>
          <button type="button" onClick={() => onSave(true)} className="bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">Publish</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="space-y-3 bg-white p-4 shadow-sm">
            <ImageField label="Poster" url={item.posterImage} altText={item.title} media={media} onUpload={onUpload} onChange={(url) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, posterImage: url } : candidate))} />
            <input value={item.title} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, title: event.target.value } : candidate))} className="cms-input" />
            <input value={item.category} onChange={(event) => onChange(items.map((candidate) => candidate.id === item.id ? { ...candidate, category: event.target.value } : candidate))} className="cms-input" />
            <button type="button" onClick={() => onChange(items.filter((candidate) => candidate.id !== item.id))} className="inline-flex items-center gap-2 border border-red-200 px-3 py-2 text-sm font-semibold text-red-600"><Trash2 className="h-4 w-4" />Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsManager({ settings, onChange, onSave }: { settings: CmsSettings; onChange: (settings: CmsSettings) => void; onSave: (publish: boolean) => void }) {
  return (
    <div className="mx-auto max-w-4xl space-y-5 p-6">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Settings</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => onSave(false)} className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold">Save</button>
          <button type="button" onClick={() => onSave(true)} className="bg-[#1769ff] px-4 py-3 text-sm font-semibold text-white">Publish</button>
        </div>
      </div>
      <div className="space-y-4 bg-white p-5 shadow-sm">
        <Field label="Site name"><input value={settings.siteName} onChange={(event) => onChange({ ...settings, siteName: event.target.value })} className="cms-input" /></Field>
        <Field label="Meta description"><textarea value={settings.metaDescription} onChange={(event) => onChange({ ...settings, metaDescription: event.target.value })} className="cms-input min-h-24 resize-none" /></Field>
        <Field label="OG image"><input value={settings.ogImage} onChange={(event) => onChange({ ...settings, ogImage: event.target.value })} className="cms-input" /></Field>
        <Field label="Footer text"><input value={settings.footerText} onChange={(event) => onChange({ ...settings, footerText: event.target.value })} className="cms-input" /></Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Contact email"><input value={settings.contactEmail} onChange={(event) => onChange({ ...settings, contactEmail: event.target.value })} className="cms-input" /></Field>
          <Field label="Contact phone"><input value={settings.contactPhone} onChange={(event) => onChange({ ...settings, contactPhone: event.target.value })} className="cms-input" /></Field>
        </div>
        {Object.entries(settings.socialLinks).map(([key, value]) => (
          <Field key={key} label={key}>
            <input value={value} onChange={(event) => onChange({ ...settings, socialLinks: { ...settings.socialLinks, [key]: event.target.value } })} className="cms-input" />
          </Field>
        ))}
      </div>
    </div>
  );
}

function SimpleListSidebar({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-4">
      <p className="mb-3 text-xs font-semibold text-slate-500">{title}</p>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="border border-slate-200 bg-white px-3 py-3 text-sm font-medium">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-sm font-semibold text-[#111827]">{title}</p>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold text-slate-500">{label}</span>
      {children}
    </label>
  );
}
