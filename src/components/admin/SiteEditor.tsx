"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Eye,
  FileText,
  ImageIcon,
  Layers,
  Lock,
  Monitor,
  Paintbrush,
  Plus,
  Save,
  Search,
  Send,
  Settings,
  Smartphone,
  Wrench,
} from "lucide-react";
import type { AdminSession, CmsPage } from "@/lib/admin/types";
import { canEdit, canPublish } from "@/lib/admin/permissions";

export function SiteEditor({
  page,
  pages,
  user,
}: {
  page: CmsPage;
  pages: CmsPage[];
  user: AdminSession;
}) {
  const editable = canEdit(user.role);
  const publishable = canPublish(user.role);
  const draft = page.draft ?? page;
  const [form, setForm] = useState({
    title: draft.title ?? page.title,
    heroTitle: draft.heroTitle ?? page.heroTitle,
    heroSubtitle: draft.heroSubtitle ?? page.heroSubtitle,
    summary: draft.summary ?? page.summary,
    seoTitle: draft.seoTitle ?? page.seoTitle,
    seoDescription: draft.seoDescription ?? page.seoDescription,
    image: draft.image ?? page.image,
  });
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  const previewWidth = viewport === "mobile" ? "max-w-[390px]" : "max-w-full";

  const selectedPageLabel = useMemo(() => {
    return pages.find((item) => item.slug === page.slug)?.title ?? page.title;
  }, [page.slug, page.title, pages]);

  const editorTools = [
    { label: "Add", icon: Plus },
    { label: "Sections", icon: Layers },
    { label: "Pages", icon: FileText },
    { label: "Theme", icon: Paintbrush },
    { label: "Media", icon: ImageIcon },
    { label: "Settings", icon: Settings },
  ];

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function saveDraft() {
    setSaving(true);
    setStatus("");
    const response = await fetch(`/api/admin/content/pages/${page.slug}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    setStatus(response.ok ? "Draft saved and sent for approval." : "Draft could not be saved.");
  }

  async function publish() {
    setSaving(true);
    setStatus("");
    const response = await fetch(`/api/admin/content/pages/${page.slug}/publish`, {
      method: "POST",
    });

    setSaving(false);
    setStatus(response.ok ? "Page published." : "Publishing requires approver access.");
  }

  return (
    <div className="space-y-5">
      <div className="border border-white/10 bg-[#f7f7fb] text-[#111827] shadow-2xl">
        <div className="flex min-h-12 flex-col gap-3 border-b border-black/10 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <strong className="text-2xl tracking-tight">SAFA</strong>
            <span>Site</span>
            <span>Settings</span>
            <span>Workflow</span>
            <span>Help</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={!editable || saving}
              onClick={saveDraft}
              className="text-sm font-semibold text-[#2f19e6] disabled:opacity-50"
            >
              Save
            </button>
            <Link href={page.route} target="_blank" className="text-sm font-semibold text-[#2f19e6]">
              Preview
            </Link>
            <button
              type="button"
              disabled={!publishable || saving}
              onClick={publish}
              className="rounded-full bg-[#4b19f5] px-5 py-2 text-sm font-bold text-white disabled:opacity-50"
            >
              Publish
            </button>
          </div>
        </div>

        <div className="flex min-h-12 flex-col gap-3 border-b border-black/10 px-4 py-2 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <span>Page:</span>
              <select
                value={page.slug}
                onChange={(event) => {
                  window.location.href = `/admin/editor/${event.target.value}`;
                }}
                className="border border-black/10 bg-white px-3 py-2 text-sm outline-none"
              >
                {pages.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={() => setViewport("desktop")}
              className={`border px-3 py-2 ${viewport === "desktop" ? "border-[#4b19f5] bg-[#ece9ff]" : "border-black/10 bg-white"}`}
              aria-label="Desktop preview"
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewport("mobile")}
              className={`border px-3 py-2 ${viewport === "mobile" ? "border-[#4b19f5] bg-[#ece9ff]" : "border-black/10 bg-white"}`}
              aria-label="Mobile preview"
            >
              <Smartphone className="h-4 w-4" />
            </button>
            <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
              safa-promax.vercel.app presentation workspace
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span>100%</span>
            <span className="inline-flex items-center gap-1"><Wrench className="h-4 w-4" /> Tools</span>
            <span className="inline-flex items-center gap-1"><Search className="h-4 w-4" /> Search</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[340px_1fr]">
      <aside className="space-y-5">
        <div className="border border-white/10 bg-surface/40 p-5">
          <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gold">
            Page
          </label>
          <select
            value={page.slug}
            onChange={(event) => {
              window.location.href = `/admin/editor/${event.target.value}`;
            }}
            className="w-full border border-white/10 bg-bg px-3 py-3 text-sm text-white outline-none focus:border-gold"
          >
            {pages.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
          <p className="mt-3 text-xs text-muted">
            Editing duplicate: <span className="text-gold-soft">{selectedPageLabel}</span>
          </p>
        </div>

        <div className="space-y-4 border border-white/10 bg-surface/40 p-5">
          <EditorField label="Navigation title" value={form.title} onChange={(value) => updateField("title", value)} disabled={!editable} />
          <EditorField label="Hero headline" value={form.heroTitle} onChange={(value) => updateField("heroTitle", value)} disabled={!editable} />
          <EditorArea label="Hero subtitle" value={form.heroSubtitle} onChange={(value) => updateField("heroSubtitle", value)} disabled={!editable} />
          <EditorArea label="Page summary" value={form.summary} onChange={(value) => updateField("summary", value)} disabled={!editable} />
          <EditorField label="SEO title" value={form.seoTitle} onChange={(value) => updateField("seoTitle", value)} disabled={!editable} />
          <EditorArea label="SEO description" value={form.seoDescription} onChange={(value) => updateField("seoDescription", value)} disabled={!editable} />

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold">
              {page.lockedImage && <Lock className="h-3.5 w-3.5" />}
              Image path
            </span>
            <input
              value={form.image}
              onChange={(event) => updateField("image", event.target.value)}
              disabled={!editable || page.lockedImage}
              className="w-full border border-white/10 bg-bg px-3 py-3 text-sm text-white outline-none transition focus:border-gold disabled:opacity-55"
            />
            {page.lockedImage && (
              <p className="mt-2 text-xs text-gold-soft">This approved hero image is locked by the mandate.</p>
            )}
          </label>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            disabled={!editable || saving}
            onClick={saveDraft}
            className="inline-flex items-center justify-center gap-2 bg-gold px-5 py-4 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            Save Draft
          </button>
          <button
            type="button"
            disabled={!publishable || saving}
            onClick={publish}
            className="inline-flex items-center justify-center gap-2 border border-gold/40 px-5 py-4 text-xs font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            Publish
          </button>
          {status && <p className="border border-white/10 bg-bg px-4 py-3 text-sm text-muted">{status}</p>}
        </div>
      </aside>

      <section className="space-y-5">
        <div className="flex flex-col gap-4 border border-white/10 bg-surface/40 p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Eye className="h-4 w-4 text-gold" />
            Live preview with editable duplicate fields beside it
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setViewport("desktop")}
              className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest ${
                viewport === "desktop" ? "bg-gold text-bg" : "border border-white/10 text-muted"
              }`}
            >
              <Monitor className="h-4 w-4" />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setViewport("mobile")}
              className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest ${
                viewport === "mobile" ? "bg-gold text-bg" : "border border-white/10 text-muted"
              }`}
            >
              <Smartphone className="h-4 w-4" />
              Mobile
            </button>
          </div>
        </div>

        <div className="grid gap-5 2xl:grid-cols-[1fr_360px]">
          <div className="flex h-[74vh] overflow-hidden border border-white/10 bg-[#efeff4]">
            <div className="hidden w-14 flex-col items-center gap-4 border-r border-black/10 bg-white py-5 text-[#2f3742] md:flex">
              {editorTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.label}
                    type="button"
                    className="rounded-sm p-2 transition hover:bg-[#ece9ff] hover:text-[#4b19f5]"
                    title={tool.label}
                    aria-label={tool.label}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
            <div className="relative flex flex-1 justify-center overflow-auto px-8 py-6">
              <div className="pointer-events-none absolute inset-y-0 left-[22%] hidden border-l border-dashed border-black/40 xl:block" />
              <div className="pointer-events-none absolute inset-y-0 right-[22%] hidden border-l border-dashed border-black/40 xl:block" />
              <div className={`h-full w-full overflow-hidden border border-black/20 bg-black shadow-2xl ${previewWidth}`}>
                <iframe
                  src={page.route}
                  title={`${page.title} preview`}
                  className="h-full w-full bg-bg"
                />
              </div>
            </div>
          </div>
          <div className="border border-gold/20 bg-bg-deep p-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Draft Snapshot</p>
            <h3 className="mt-4 text-2xl font-black text-white">{form.heroTitle}</h3>
            <p className="mt-3 text-sm text-gold-soft">{form.heroSubtitle}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted">{form.summary}</p>
            <div className="mt-6 border-t border-white/10 pt-4 text-xs text-muted">
              <p>Route: <Link href={page.route} className="text-gold" target="_blank">{page.route}</Link></p>
              <p>Status: {page.status}</p>
              <p>Approval: {page.draft ? "Pending review" : "No pending draft"}</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

function EditorField({
  label,
  value,
  onChange,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gold">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        className="w-full border border-white/10 bg-bg px-3 py-3 text-sm text-white outline-none transition focus:border-gold disabled:opacity-55"
      />
    </label>
  );
}

function EditorArea({
  label,
  value,
  onChange,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gold">{label}</span>
      <textarea
        value={value}
        rows={4}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        className="w-full resize-none border border-white/10 bg-bg px-3 py-3 text-sm text-white outline-none transition focus:border-gold disabled:opacity-55"
      />
    </label>
  );
}
