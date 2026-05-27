"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Eye,
  FileText,
  HelpCircle,
  ImageIcon,
  Layers,
  Lock,
  LogOut,
  Monitor,
  Paintbrush,
  Plus,
  Redo2,
  Save,
  Search,
  Settings,
  Smartphone,
  Sparkles,
  Upload,
  Undo2,
  Wrench,
} from "lucide-react";
import type { AdminSession, CmsMediaAsset, CmsPage, CmsPageWorkingCopy, ContentStore } from "@/lib/admin/types";
import { canEdit, canPublish } from "@/lib/admin/permissions";

type ToolId = "add" | "sections" | "pages" | "theme" | "media" | "settings" | "help";
type Viewport = "desktop" | "mobile";

const tools: Array<{ id: ToolId; label: string; icon: typeof Plus }> = [
  { id: "add", label: "Add", icon: Plus },
  { id: "sections", label: "Sections", icon: Layers },
  { id: "pages", label: "Pages", icon: FileText },
  { id: "theme", label: "Theme", icon: Paintbrush },
  { id: "media", label: "Media", icon: ImageIcon },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "help", label: "Help", icon: HelpCircle },
];

function editableState(page: CmsPage) {
  const working = page.workingCopy ?? {};
  return {
    title: working.title ?? page.title,
    navLabel: working.navLabel ?? page.navLabel ?? page.title,
    route: working.route ?? page.route,
    category: working.category ?? page.category,
    visibleInNavigation: working.visibleInNavigation ?? page.visibleInNavigation ?? true,
    sortOrder: working.sortOrder ?? page.sortOrder ?? 1,
    template: working.template ?? page.template ?? "standard",
    heroTitle: working.heroTitle ?? page.heroTitle,
    heroSubtitle: working.heroSubtitle ?? page.heroSubtitle,
    summary: working.summary ?? page.summary,
    image: working.image ?? page.image,
    seoTitle: working.seoTitle ?? page.seoTitle,
    seoDescription: working.seoDescription ?? page.seoDescription,
  } satisfies CmsPageWorkingCopy & {
    title: string;
    navLabel: string;
    route: string;
    category: string;
    visibleInNavigation: boolean;
    sortOrder: number;
    template: NonNullable<CmsPage["template"]>;
    heroTitle: string;
    heroSubtitle: string;
    summary: string;
    image: string;
    seoTitle: string;
    seoDescription: string;
  };
}

export function SiteEditor({
  page,
  pages,
  media,
  siteSettings,
  user,
}: {
  page: CmsPage;
  pages: CmsPage[];
  media: CmsMediaAsset[];
  siteSettings: ContentStore["siteSettings"];
  user: AdminSession;
}) {
  const editable = canEdit(user.role);
  const publishable = canPublish(user.role);
  const [activeTool, setActiveTool] = useState<ToolId>("sections");
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [form, setForm] = useState(editableState(page));
  const [status, setStatus] = useState(page.workingCopy ? "Saved working copy loaded." : "");
  const [saving, setSaving] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [previewVersion, setPreviewVersion] = useState(() => Date.now());
  const [search, setSearch] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const sortedPages = useMemo(
    () => [...pages].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999) || a.title.localeCompare(b.title)),
    [pages],
  );

  const filteredPages = sortedPages.filter((item) => {
    const needle = search.trim().toLowerCase();
    if (!needle) return true;
    return `${item.title} ${item.route} ${item.category}`.toLowerCase().includes(needle);
  });

  const previewRoute = `/admin/preview/${page.slug}?v=${previewVersion}`;
  const canvasStyle = {
    width: viewport === "mobile" ? "390px" : "100%",
    maxWidth: viewport === "mobile" ? "100%" : "1120px",
  };
  const iframeStyle = {
    width: "100%",
    height: "calc(100vh - 170px)",
  };
  const selectedImageLocked = page.lockedImage;

  function updateField<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function saveWorkingCopy() {
    setSaving(true);
    setStatus("");
    const response = await fetch(`/api/admin/content/pages/${page.slug}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    setStatus(response.ok ? "Working copy saved." : "Working copy could not be saved.");
    if (response.ok) setPreviewVersion(Date.now());
  }

  async function publishNow() {
    setSaving(true);
    setStatus("");
    const response = await fetch(`/api/admin/content/pages/${page.slug}/publish`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    setStatus(response.ok ? "Published to the live site." : "Publishing failed.");
    if (response.ok) setPreviewVersion(Date.now());
  }

  async function createPage(formData: FormData) {
    const title = String(formData.get("title") || "").trim();
    if (!title) {
      setStatus("Add a page title first.");
      return;
    }

    setSaving(true);
    const response = await fetch("/api/admin/pages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title,
        slug: formData.get("slug"),
        category: formData.get("category") || "Custom",
        heroSubtitle: "SA Film Academy CMS page",
        summary: "New CMS-managed page.",
      }),
    });
    setSaving(false);

    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      setStatus(payload?.error || "Page could not be created.");
      return;
    }

    window.location.href = `/admin/editor/${payload.page.slug}`;
  }

  async function uploadMedia(formData: FormData) {
    setSaving(true);
    setStatus("");
    const response = await fetch("/api/admin/media", {
      method: "POST",
      body: formData,
    });
    setSaving(false);

    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      setStatus(payload?.error || "Media could not be uploaded.");
      return;
    }

    setStatus("Media uploaded. Refreshing the media drawer.");
    window.location.reload();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="h-screen overflow-hidden bg-[#f1f1f4] text-[#111827]">
      <EditorTopBar
        page={page}
        pages={sortedPages}
        saving={saving}
        editable={editable}
        publishable={publishable}
        onSave={saveWorkingCopy}
        onPublish={publishNow}
      />

      <div className="flex h-[calc(100vh-90px)]">
        <ToolRail activeTool={activeTool} drawerOpen={drawerOpen} onSelect={(tool) => {
          setActiveTool(tool);
          setDrawerOpen(true);
        }} />

        {drawerOpen && (
          <ToolDrawer
            activeTool={activeTool}
            page={page}
            pages={filteredPages}
            media={media}
            form={form}
            search={search}
            editable={editable}
            selectedImageLocked={selectedImageLocked}
            fileInputRef={fileInputRef}
            onSearch={setSearch}
            onClose={() => setDrawerOpen(false)}
            onChange={updateField}
            onCreatePage={createPage}
            onUploadMedia={uploadMedia}
          />
        )}

        <section className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-11 items-center justify-between border-b border-black/10 bg-white px-4 text-sm">
            <div className="flex items-center gap-3">
              <button type="button" className="rounded-md p-2 text-[#667085] hover:bg-[#f1f1f4]" title="Undo">
                <Undo2 className="h-4 w-4" />
              </button>
              <button type="button" className="rounded-md p-2 text-[#667085] hover:bg-[#f1f1f4]" title="Redo">
                <Redo2 className="h-4 w-4" />
              </button>
              <span className="h-6 border-l border-black/10" />
              <span className="inline-flex items-center gap-2 font-semibold">
                <Eye className="h-4 w-4 text-[#2f19e6]" />
                Editable duplicate canvas
              </span>
              {status && <span className="rounded-full bg-[#f1f1f4] px-3 py-1 text-xs text-[#475467]">{status}</span>}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                className={`inline-flex h-8 items-center gap-2 rounded-sm px-3 text-xs font-bold uppercase tracking-wider ${
                  viewport === "desktop" ? "bg-[#2f19e6] text-white" : "border border-black/10 bg-white"
                }`}
              >
                <Monitor className="h-4 w-4" />
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                className={`inline-flex h-8 items-center gap-2 rounded-sm px-3 text-xs font-bold uppercase tracking-wider ${
                  viewport === "mobile" ? "bg-[#2f19e6] text-white" : "border border-black/10 bg-white"
                }`}
              >
                <Smartphone className="h-4 w-4" />
                Mobile
              </button>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1 overflow-auto bg-[#e9e9ed] px-10 py-8">
            <div className="pointer-events-none absolute inset-y-0 left-[18%] border-l border-dashed border-black/35" />
            <div className="pointer-events-none absolute inset-y-0 right-[18%] border-l border-dashed border-black/35" />
            <div className="mx-auto flex min-h-full w-full items-start justify-center">
              <div
                className="min-h-[calc(100vh-170px)] overflow-hidden bg-white shadow-[0_8px_28px_rgba(15,23,42,0.28)] transition-all"
                style={canvasStyle}
              >
                <iframe
                  key={`${page.slug}-${previewVersion}-${viewport}`}
                  src={previewRoute}
                  title={`${page.title} CMS preview`}
                  className="border-0 bg-white"
                  style={iframeStyle}
                />
              </div>
            </div>
          </div>
        </section>

        <Inspector
          page={page}
          form={form}
          siteSettings={siteSettings}
          user={user}
          editable={editable}
          selectedImageLocked={selectedImageLocked}
          onChange={updateField}
          onSave={saveWorkingCopy}
          onPublish={publishNow}
          onLogout={logout}
        />
      </div>
    </div>
  );
}

function EditorTopBar({
  page,
  pages,
  saving,
  editable,
  publishable,
  onSave,
  onPublish,
}: {
  page: CmsPage;
  pages: CmsPage[];
  saving: boolean;
  editable: boolean;
  publishable: boolean;
  onSave: () => void;
  onPublish: () => void;
}) {
  return (
    <header className="h-[90px] border-b border-black/10 bg-white shadow-sm">
      <div className="flex h-11 items-center justify-between border-b border-black/10 pl-4 pr-5">
        <div className="flex h-full items-center gap-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2 font-black tracking-tight text-black">
            <span className="grid h-8 w-8 place-items-center bg-[#111827] text-xs text-white">SA</span>
            <span>SAFA</span>
          </Link>
          <nav className="flex h-full items-center gap-6 text-sm">
            <span>Site</span>
            <span>Settings</span>
            <span>Workflow</span>
            <span>Help</span>
          </nav>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <button
            type="button"
            disabled={!editable || saving}
            onClick={onSave}
            className="font-semibold text-[#2f19e6] disabled:opacity-40"
          >
            Save
          </button>
          <Link href={`/admin/preview/${page.slug}`} target="_blank" className="font-semibold text-[#2f19e6]">
            Preview
          </Link>
          <button
            type="button"
            disabled={!publishable || saving}
            onClick={onPublish}
            className="rounded-full bg-[#1769ff] px-6 py-2 font-bold text-white shadow-sm disabled:opacity-40"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="flex h-11 items-center justify-between px-4">
        <div className="flex h-full items-center gap-3">
          <label className="flex h-full items-center gap-2 border-r border-black/10 pr-4 text-sm">
            <span>Page:</span>
            <select
              value={page.slug}
              onChange={(event) => {
                window.location.href = `/admin/editor/${event.target.value}`;
              }}
              className="h-9 min-w-44 rounded-sm border border-transparent bg-white px-2 outline-none hover:border-black/10"
            >
              {pages.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.navLabel || item.title}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-center gap-1 border-r border-black/10 pr-4">
            <button type="button" className="grid h-9 w-10 place-items-center rounded-sm bg-[#eaf1ff] text-[#1769ff]">
              <Monitor className="h-4 w-4" />
            </button>
            <button type="button" className="grid h-9 w-10 place-items-center rounded-sm hover:bg-[#f1f1f4]">
              <Smartphone className="h-4 w-4" />
            </button>
          </div>
          <span className="inline-flex h-8 min-w-[520px] items-center gap-2 rounded-full bg-[#f4f6f8] px-4 text-sm text-[#344054]">
            <span className="grid h-5 w-5 place-items-center rounded-full border border-[#c8d0db] text-[10px]">↗</span>
            safa-promax.vercel.app presentation workspace
          </span>
        </div>
        <div className="flex h-full items-center gap-5 border-l border-black/10 pl-4 text-sm">
          <span>100%</span>
          <span className="inline-flex items-center gap-1">
            <Wrench className="h-4 w-4" />
            Tools
          </span>
          <span className="inline-flex items-center gap-1">
            <Search className="h-4 w-4" />
            Search
          </span>
        </div>
      </div>
    </header>
  );
}

function ToolRail({
  activeTool,
  drawerOpen,
  onSelect,
}: {
  activeTool: ToolId;
  drawerOpen: boolean;
  onSelect: (tool: ToolId) => void;
}) {
  return (
    <aside className="flex w-[60px] flex-col items-center border-r border-black/10 bg-white py-4 shadow-sm">
      {tools.map((tool) => {
        const Icon = tool.icon;
        const active = drawerOpen && activeTool === tool.id;
        return (
          <button
            key={tool.id}
            type="button"
            title={tool.label}
            aria-label={tool.label}
            onClick={() => onSelect(tool.id)}
            className={`mb-3 grid h-10 w-10 place-items-center rounded-full transition ${
              active ? "bg-[#eaf1ff] text-[#1769ff]" : "text-[#28313d] hover:bg-[#f1f1f4]"
            }`}
          >
            <Icon className="h-5 w-5" />
          </button>
        );
      })}
      <div className="mt-auto grid h-10 w-10 place-items-center rounded-full bg-[#ecfdf3] text-[#039855]">
        <Sparkles className="h-5 w-5" />
      </div>
    </aside>
  );
}

function ToolDrawer({
  activeTool,
  page,
  pages,
  media,
  form,
  search,
  editable,
  selectedImageLocked,
  fileInputRef,
  onSearch,
  onClose,
  onChange,
  onCreatePage,
  onUploadMedia,
}: {
  activeTool: ToolId;
  page: CmsPage;
  pages: CmsPage[];
  media: CmsMediaAsset[];
  form: ReturnType<typeof editableState>;
  search: string;
  editable: boolean;
  selectedImageLocked: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onSearch: (value: string) => void;
  onClose: () => void;
  onChange: <K extends keyof ReturnType<typeof editableState>>(field: K, value: ReturnType<typeof editableState>[K]) => void;
  onCreatePage: (formData: FormData) => void;
  onUploadMedia: (formData: FormData) => void;
}) {
  const title = tools.find((tool) => tool.id === activeTool)?.label ?? "Tools";

  return (
    <aside className="w-[330px] shrink-0 overflow-y-auto border-r border-black/10 bg-white">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-black/10 bg-white px-5">
        <h2 className="text-sm font-bold">{title}</h2>
        <button type="button" onClick={onClose} className="rounded-md px-2 py-1 text-xl leading-none hover:bg-[#f1f1f4]">
          ×
        </button>
      </div>

      <div className="space-y-5 p-5">
        {activeTool === "add" && (
          <Panel title="Add Page">
            <form action={onCreatePage} className="space-y-3">
              <Field label="Page title">
                <input name="title" className="cms-input" placeholder="New campaign page" disabled={!editable} />
              </Field>
              <Field label="Slug">
                <input name="slug" className="cms-input" placeholder="new-campaign-page" disabled={!editable} />
              </Field>
              <Field label="Category">
                <input name="category" className="cms-input" defaultValue="Custom" disabled={!editable} />
              </Field>
              <button className="w-full rounded-sm bg-[#1769ff] px-4 py-3 text-sm font-bold text-white disabled:opacity-40" disabled={!editable}>
                Create CMS Page
              </button>
            </form>
          </Panel>
        )}

        {activeTool === "pages" && (
          <>
            <Field label="Search pages">
              <input value={search} onChange={(event) => onSearch(event.target.value)} className="cms-input" placeholder="Find a page" />
            </Field>
            <div className="space-y-2">
              {pages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/admin/editor/${item.slug}`}
                  className={`block rounded-sm border px-3 py-3 text-sm ${
                    item.slug === page.slug ? "border-[#1769ff] bg-[#eaf1ff]" : "border-black/10 hover:bg-[#f8fafc]"
                  }`}
                >
                  <span className="block font-bold">{item.navLabel || item.title}</span>
                  <span className="mt-1 block text-xs text-[#667085]">{item.route}</span>
                </Link>
              ))}
            </div>
          </>
        )}

        {activeTool === "sections" && (
          <>
            <Panel title="Hero Section">
              <TextInput label="Hero headline" value={form.heroTitle} disabled={!editable} onChange={(value) => onChange("heroTitle", value)} />
              <TextArea label="Hero subtitle" value={form.heroSubtitle} disabled={!editable} onChange={(value) => onChange("heroSubtitle", value)} />
              <TextArea label="Page summary" value={form.summary} disabled={!editable} onChange={(value) => onChange("summary", value)} />
            </Panel>
            <Panel title="Hero Media">
              <TextInput label="Image URL" value={form.image} disabled={!editable || selectedImageLocked} onChange={(value) => onChange("image", value)} />
              {selectedImageLocked && (
                <p className="rounded-sm bg-[#fff8e1] px-3 py-2 text-xs text-[#7a4d00]">
                  This hero image is locked by the finishing mandate.
                </p>
              )}
            </Panel>
          </>
        )}

        {activeTool === "media" && (
          <>
            <Panel title="Upload Media">
              <form action={onUploadMedia} className="space-y-3">
                <input ref={fileInputRef} name="file" type="file" className="cms-input" accept="image/*,.pdf" disabled={!editable} />
                <input name="title" className="cms-input" placeholder="Asset title" disabled={!editable} />
                <input name="tags" className="cms-input" placeholder="hero, cms, campaign" disabled={!editable} />
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#1769ff] px-4 py-3 text-sm font-bold text-white disabled:opacity-40" disabled={!editable}>
                  <Upload className="h-4 w-4" />
                  Upload to CMS
                </button>
              </form>
            </Panel>
            <Panel title="Select Asset">
              <div className="grid grid-cols-2 gap-3">
                {media.map((asset) => (
                  <button
                    key={asset.id}
                    type="button"
                    disabled={!editable || selectedImageLocked || asset.type !== "image"}
                    onClick={() => onChange("image", asset.url)}
                    className="overflow-hidden rounded-sm border border-black/10 bg-[#f8fafc] text-left disabled:opacity-50"
                  >
                    <div className="relative aspect-[4/3] bg-[#e9e9ed]">
                      {asset.type === "image" && <img src={asset.url} alt={asset.title} className="h-full w-full object-cover" />}
                      {asset.locked && <Lock className="absolute right-2 top-2 h-4 w-4 rounded-full bg-white p-0.5" />}
                    </div>
                    <span className="block truncate px-2 py-2 text-xs font-semibold">{asset.title}</span>
                  </button>
                ))}
              </div>
            </Panel>
          </>
        )}

        {activeTool === "theme" && (
          <Panel title="SAFA Theme">
            <div className="grid grid-cols-3 gap-3">
              {["#0b0b10", "#6f1717", "#c9a84c", "#f7f4ec", "#1769ff", "#e9e9ed"].map((colour) => (
                <div key={colour} className="space-y-2">
                  <span className="block h-12 rounded-sm border border-black/10" style={{ background: colour }} />
                  <span className="text-[10px] text-[#667085]">{colour}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#667085]">Theme controls are read-only for this release to protect the approved cinematic direction.</p>
          </Panel>
        )}

        {activeTool === "settings" && (
          <Panel title="Page Settings">
            <TextInput label="Navigation title" value={form.navLabel} disabled={!editable} onChange={(value) => onChange("navLabel", value)} />
            <TextInput label="Category" value={form.category} disabled={!editable} onChange={(value) => onChange("category", value)} />
            <Field label="Visible in navigation">
              <label className="flex items-center gap-3 rounded-sm border border-black/10 px-3 py-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.visibleInNavigation}
                  disabled={!editable}
                  onChange={(event) => onChange("visibleInNavigation", event.target.checked)}
                />
                Show page in CMS navigation
              </label>
            </Field>
            <TextInput label="SEO title" value={form.seoTitle} disabled={!editable} onChange={(value) => onChange("seoTitle", value)} />
            <TextArea label="SEO description" value={form.seoDescription} disabled={!editable} onChange={(value) => onChange("seoDescription", value)} />
          </Panel>
        )}

        {activeTool === "help" && (
          <Panel title="Workflow">
            <ol className="space-y-3 text-sm text-[#475467]">
              <li>1. Select a page from the top bar or Pages drawer.</li>
              <li>2. Edit hero, summary, SEO and media fields.</li>
              <li>3. Save to preserve the working copy.</li>
              <li>4. Preview the saved working copy.</li>
              <li>5. Publish to update the live site immediately.</li>
            </ol>
          </Panel>
        )}
      </div>
    </aside>
  );
}

function Inspector({
  page,
  form,
  siteSettings,
  user,
  editable,
  selectedImageLocked,
  onChange,
  onSave,
  onPublish,
  onLogout,
}: {
  page: CmsPage;
  form: ReturnType<typeof editableState>;
  siteSettings: ContentStore["siteSettings"];
  user: AdminSession;
  editable: boolean;
  selectedImageLocked: boolean;
  onChange: <K extends keyof ReturnType<typeof editableState>>(field: K, value: ReturnType<typeof editableState>[K]) => void;
  onSave: () => void;
  onPublish: () => void;
  onLogout: () => void;
}) {
  return (
    <aside className="hidden w-[340px] shrink-0 overflow-y-auto border-l border-black/10 bg-white xl:block">
      <div className="border-b border-black/10 p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#1769ff]">Inspector</p>
        <h2 className="mt-2 text-xl font-black">{form.title}</h2>
        <p className="mt-1 text-xs text-[#667085]">{form.route}</p>
      </div>
      <div className="space-y-5 p-5">
        <Panel title="Quick Edit">
          <TextInput label="Page title" value={form.title} disabled={!editable} onChange={(value) => onChange("title", value)} />
          <TextInput label="Hero headline" value={form.heroTitle} disabled={!editable} onChange={(value) => onChange("heroTitle", value)} />
          <TextArea label="Summary" value={form.summary} disabled={!editable} onChange={(value) => onChange("summary", value)} />
          <TextInput label="Image" value={form.image} disabled={!editable || selectedImageLocked} onChange={(value) => onChange("image", value)} />
        </Panel>

        <Panel title="Status">
          <div className="space-y-2 text-sm text-[#475467]">
            <InfoRow label="CMS mode" value={siteSettings.cmsMode} />
            <InfoRow label="Page status" value={page.status} />
            <InfoRow label="Role" value={user.role} />
            <InfoRow label="Locked image" value={page.lockedImage ? "Yes" : "No"} />
            <InfoRow label="Published" value={page.publishedAt ? new Date(page.publishedAt).toLocaleString("en-ZA") : "Not yet"} />
          </div>
        </Panel>

        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={onSave} className="inline-flex items-center justify-center gap-2 rounded-sm border border-black/10 px-4 py-3 text-sm font-bold">
            <Save className="h-4 w-4" />
            Save
          </button>
          <button type="button" onClick={onPublish} className="rounded-sm bg-[#1769ff] px-4 py-3 text-sm font-bold text-white">
            Publish
          </button>
        </div>

        <button type="button" onClick={onLogout} className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-black/10 px-4 py-3 text-sm font-bold text-[#475467]">
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3 rounded-sm border border-black/10 bg-white p-4 shadow-sm">
      <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#344054]">{title}</h3>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#667085]">{label}</span>
      {children}
    </label>
  );
}

function TextInput({
  label,
  value,
  disabled,
  onChange,
}: {
  label: string;
  value: string | number | undefined;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <Field label={label}>
      <input value={value ?? ""} disabled={disabled} onChange={(event) => onChange(event.target.value)} className="cms-input" />
    </Field>
  );
}

function TextArea({
  label,
  value,
  disabled,
  onChange,
}: {
  label: string;
  value: string | undefined;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <Field label={label}>
      <textarea value={value ?? ""} disabled={disabled} rows={4} onChange={(event) => onChange(event.target.value)} className="cms-input resize-none" />
    </Field>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-2">
      <span>{label}</span>
      <strong className="text-right text-[#111827]">{value}</strong>
    </div>
  );
}
