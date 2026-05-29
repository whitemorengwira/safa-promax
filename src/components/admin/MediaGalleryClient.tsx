"use client";

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  Copy,
  Download,
  Edit3,
  ExternalLink,
  Eye,
  ImageIcon,
  Link2,
  Palette,
  RefreshCcw,
  Search,
  Upload,
  Wand2,
  X,
} from "lucide-react";
import type { GalleryAsset, GalleryResponse } from "@/lib/admin/media-gallery";

type GalleryFilter = "all" | "used" | "unused" | "locked" | "generated" | "uploaded";
type ToastTone = "success" | "error" | "info";

const filters: Array<{ id: GalleryFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "used", label: "Used" },
  { id: "unused", label: "Unused" },
  { id: "locked", label: "Locked" },
  { id: "generated", label: "Generated" },
  { id: "uploaded", label: "Uploaded" },
];

function tagMatch(asset: GalleryAsset, tag: string) {
  return asset.tags.some((item) => item.toLowerCase() === tag);
}

function extensionSafeName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function formatBytes(size: number) {
  if (!size) return "Size unknown";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function imageLabel(asset: GalleryAsset) {
  const dimensions = asset.width && asset.height ? `${asset.width} x ${asset.height}` : "Dimensions pending";
  return `${dimensions} · ${formatBytes(asset.size)}`;
}

async function imageToCanvas(asset: GalleryAsset, mode: "enhance" | "grade") {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = asset.url;
  await image.decode();

  const canvas = document.createElement("canvas");
  const width = image.naturalWidth || asset.width || 1600;
  const height = image.naturalHeight || asset.height || 900;
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas tools are unavailable in this browser.");

  context.filter = mode === "enhance" ? "contrast(1.08) saturate(1.12) brightness(1.03)" : "contrast(1.04) saturate(1.18)";
  context.drawImage(image, 0, 0, width, height);
  context.filter = "none";

  if (mode === "grade") {
    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(180, 0, 0, 0.18)");
    gradient.addColorStop(0.55, "rgba(224, 194, 104, 0.14)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.22)");
    context.globalCompositeOperation = "soft-light";
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = "source-over";
  }

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Could not export the edited image."));
    }, "image/webp", 0.9);
  });
}

export function MediaGalleryClient() {
  const [assets, setAssets] = useState<GalleryAsset[]>([]);
  const [selected, setSelected] = useState<GalleryAsset | null>(null);
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ tone: ToastTone; text: string } | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/media", { cache: "no-store" });
      const payload = (await response.json().catch(() => null)) as GalleryResponse | { error?: string } | null;
      if (!response.ok || !payload || !("assets" in payload)) {
        const message = payload && "error" in payload ? payload.error : undefined;
        throw new Error(message || "Media gallery could not be loaded.");
      }
      setAssets(payload.assets);
    } catch (error) {
      setToast({ tone: "error", text: error instanceof Error ? error.message : "Media gallery could not be loaded." });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => void refresh(), 0);
    return () => window.clearTimeout(timer);
  }, [refresh]);

  const visibleAssets = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return assets.filter((asset) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "used" && asset.usedOn.length > 0) ||
        (filter === "unused" && asset.usedOn.length === 0) ||
        (filter === "locked" && asset.locked) ||
        (filter === "generated" && tagMatch(asset, "generated")) ||
        (filter === "uploaded" && tagMatch(asset, "uploaded"));

      if (!matchesFilter) return false;
      if (!needle) return true;
      return [asset.title, asset.url, asset.source, asset.origin, ...asset.tags, ...asset.usedOn]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [assets, filter, query]);

  function flash(tone: ToastTone, text: string) {
    setToast({ tone, text });
    window.setTimeout(() => setToast(null), 3800);
  }

  async function copyUrl(asset: GalleryAsset) {
    await navigator.clipboard.writeText(asset.url);
    flash("success", "Image URL copied.");
  }

  function editorRoute(asset: GalleryAsset) {
    const page = asset.usedOn.find((item) => item.startsWith("/")) || "/";
    return `/admin?route=${encodeURIComponent(page)}`;
  }

  function uploadReplacement(asset?: GalleryAsset) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const form = new FormData();
      form.append("file", file);
      form.append("title", asset ? `${asset.title} replacement` : file.name);
      form.append("source", "SAFA CMS gallery upload");
      form.append("tags", asset ? [...asset.tags, "replacement", "uploaded"].join(",") : "gallery,uploaded");
      setBusyId(asset?.id ?? "new-upload");
      try {
        const response = await fetch("/api/admin/media", { method: "POST", body: form });
        const payload = await response.json().catch(() => null);
        if (!response.ok) throw new Error(payload?.error || "Image upload failed.");
        flash("success", "Replacement asset added to the gallery.");
        await refresh();
      } catch (error) {
        flash("error", error instanceof Error ? error.message : "Image upload failed.");
      } finally {
        setBusyId(null);
      }
    };
    input.click();
  }

  async function addUrlReplacement(asset: GalleryAsset) {
    const url = window.prompt("Replacement image URL", asset.url);
    if (!url || url === asset.url) return;

    setBusyId(asset.id);
    try {
      const response = await fetch("/api/admin/media", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: `${asset.title} replacement`,
          type: "image",
          url,
          source: "SAFA CMS gallery URL replacement",
          locked: false,
          tags: [...asset.tags, "replacement", "linked"],
        }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.error || "Replacement URL could not be saved.");
      flash("success", "Replacement URL asset added.");
      await refresh();
    } catch (error) {
      flash("error", error instanceof Error ? error.message : "Replacement URL could not be saved.");
    } finally {
      setBusyId(null);
    }
  }

  async function editMetadata(asset: GalleryAsset) {
    const title = window.prompt("Image title", asset.title);
    if (title === null) return;
    const source = window.prompt("Image source", asset.source);
    if (source === null) return;
    const tags = window.prompt("Tags, comma separated", asset.tags.join(", "));
    if (tags === null) return;

    const body = {
      title: title.trim() || asset.title,
      source: source.trim() || asset.source,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      locked: asset.locked,
    };

    setBusyId(asset.id);
    try {
      const endpoint = asset.cmsId ? `/api/admin/media/${asset.cmsId}` : "/api/admin/media";
      const response = await fetch(endpoint, {
        method: asset.cmsId ? "PATCH" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(asset.cmsId ? body : { ...body, type: "image", url: asset.url }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.error || "Image metadata could not be saved.");
      flash("success", "Image metadata saved.");
      await refresh();
    } catch (error) {
      flash("error", error instanceof Error ? error.message : "Image metadata could not be saved.");
    } finally {
      setBusyId(null);
    }
  }

  async function canvasTransform(asset: GalleryAsset, mode: "enhance" | "grade") {
    setBusyId(asset.id);
    try {
      const blob = await imageToCanvas(asset, mode);
      const filename = `${extensionSafeName(asset.title)}-${mode}.webp`;
      const file = new File([blob], filename, { type: "image/webp" });
      const form = new FormData();
      form.append("file", file);
      form.append("title", `${asset.title} ${mode === "enhance" ? "enhanced" : "colour grade"}`);
      form.append("source", `Canvas ${mode} from ${asset.url}`);
      form.append("tags", [...asset.tags, mode, "generated", "uploaded"].join(","));

      const response = await fetch("/api/admin/media", { method: "POST", body: form });
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.error || "Edited image could not be uploaded.");
      flash("success", mode === "enhance" ? "Enhanced version added." : "Colour graded version added.");
      await refresh();
    } catch (error) {
      flash("error", error instanceof Error ? error.message : "Canvas edit could not be completed.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div className="border border-gold/20 bg-bg-deep p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Image Gallery</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              Every asset in public/images and every CMS media item is listed here. Static assets are kept
              non-destructive: replacements create new assets for the editor to apply.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => uploadReplacement()}
              className="inline-flex h-10 items-center gap-2 bg-gold px-4 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft"
            >
              <Upload className="h-4 w-4" />
              Upload
            </button>
            <button
              type="button"
              onClick={() => void refresh()}
              disabled={loading}
              className="inline-flex h-10 items-center gap-2 border border-white/10 px-4 text-xs font-black uppercase tracking-widest text-white/70 transition hover:border-gold hover:text-gold disabled:opacity-40"
            >
              <RefreshCcw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search images, paths, tags, usage"
              className="h-11 w-full border border-white/10 bg-black/30 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-gold"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`h-10 border px-3 text-[10px] font-black uppercase tracking-widest transition ${
                  filter === item.id
                    ? "border-gold bg-gold text-bg"
                    : "border-white/10 text-white/65 hover:border-gold hover:text-gold"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted">
        <span>{visibleAssets.length} assets shown</span>
        <span>{assets.filter((asset) => asset.usedOn.length > 0).length} used on site</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleAssets.map((asset) => (
          <article key={`${asset.origin}-${asset.id}-${asset.url}`} className="overflow-hidden border border-white/10 bg-surface/35">
            <button
              type="button"
              onClick={() => setSelected(asset)}
              className="relative block aspect-[16/10] w-full overflow-hidden bg-black text-left"
            >
              {asset.type === "image" ? (
                <img src={asset.url} alt={asset.title} className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <div className="flex h-full items-center justify-center text-gold">
                  <ImageIcon className="h-10 w-10" />
                </div>
              )}
              <span className="absolute left-3 top-3 bg-black/70 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-gold">
                {asset.origin}
              </span>
              {asset.locked && (
                <span className="absolute right-3 top-3 bg-gold px-2 py-1 text-[10px] font-black uppercase tracking-widest text-bg">
                  Locked
                </span>
              )}
            </button>

            <div className="space-y-4 p-4">
              <div>
                <p className="line-clamp-2 font-bold text-white">{asset.title}</p>
                <p className="mt-1 text-xs text-muted">{imageLabel(asset)}</p>
                <p className="mt-2 break-all text-[11px] text-white/45">{asset.url}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {asset.tags.slice(0, 6).map((tag) => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="min-h-10 text-[11px] leading-relaxed text-white/50">
                {asset.usedOn.length ? `Used: ${asset.usedOn.slice(0, 3).join(", ")}` : "Unused by scanned pages/code"}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <GalleryButton icon={<Eye className="h-3.5 w-3.5" />} label="Preview" onClick={() => setSelected(asset)} />
                <GalleryButton icon={<Copy className="h-3.5 w-3.5" />} label="Copy URL" onClick={() => void copyUrl(asset)} />
                <GalleryLink icon={<ExternalLink className="h-3.5 w-3.5" />} label="Open Editor" href={editorRoute(asset)} />
                <GalleryButton icon={<Upload className="h-3.5 w-3.5" />} label="Replace" onClick={() => uploadReplacement(asset)} disabled={busyId === asset.id} />
                <GalleryButton icon={<Link2 className="h-3.5 w-3.5" />} label="URL" onClick={() => void addUrlReplacement(asset)} disabled={busyId === asset.id} />
                <GalleryButton icon={<Edit3 className="h-3.5 w-3.5" />} label="Meta" onClick={() => void editMetadata(asset)} disabled={busyId === asset.id} />
                <GalleryButton icon={<Wand2 className="h-3.5 w-3.5" />} label="Enhance" onClick={() => void canvasTransform(asset, "enhance")} disabled={busyId === asset.id} />
                <GalleryButton icon={<Palette className="h-3.5 w-3.5" />} label="Grade" onClick={() => void canvasTransform(asset, "grade")} disabled={busyId === asset.id} />
              </div>

              <a
                href={asset.url}
                download
                className="inline-flex h-9 w-full items-center justify-center gap-2 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/65 transition hover:border-gold hover:text-gold"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
            </div>
          </article>
        ))}
      </div>

      {!loading && !visibleAssets.length && (
        <div className="border border-white/10 bg-surface/35 p-10 text-center text-sm text-muted">
          No assets match the current filters.
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden border border-gold/25 bg-bg-deep shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-black text-white">{selected.title}</p>
                <p className="truncate text-xs text-muted">{selected.url}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition hover:border-gold hover:text-gold"
                aria-label="Close preview"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid max-h-[calc(92vh-64px)] gap-0 overflow-auto lg:grid-cols-[1fr_320px]">
              <div className="flex min-h-[420px] items-center justify-center bg-black p-4">
                <img src={selected.url} alt={selected.title} className="max-h-[74vh] max-w-full object-contain" />
              </div>
              <aside className="space-y-4 border-l border-white/10 p-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gold">Details</p>
                  <p className="mt-2 text-sm text-white">{imageLabel(selected)}</p>
                  <p className="mt-1 text-sm text-muted">{selected.source}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gold">Usage</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selected.usedOn.length ? (
                      selected.usedOn.map((usage) => (
                        <span key={usage} className="border border-white/10 px-2 py-1 text-[11px] text-white/65">
                          {usage}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-muted">Unused by scanned pages/code.</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <GalleryButton icon={<Copy className="h-3.5 w-3.5" />} label="Copy URL" onClick={() => void copyUrl(selected)} />
                  <GalleryLink icon={<ExternalLink className="h-3.5 w-3.5" />} label="Editor" href={editorRoute(selected)} />
                  <GalleryButton icon={<Upload className="h-3.5 w-3.5" />} label="Replace" onClick={() => uploadReplacement(selected)} />
                  <GalleryButton icon={<Edit3 className="h-3.5 w-3.5" />} label="Metadata" onClick={() => void editMetadata(selected)} />
                  <GalleryButton icon={<Wand2 className="h-3.5 w-3.5" />} label="Enhance" onClick={() => void canvasTransform(selected, "enhance")} />
                  <GalleryButton icon={<Palette className="h-3.5 w-3.5" />} label="Grade" onClick={() => void canvasTransform(selected, "grade")} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div
          className={`fixed bottom-5 right-5 z-[60] max-w-sm border px-4 py-3 text-sm shadow-2xl ${
            toast.tone === "success"
              ? "border-emerald-300/30 bg-emerald-950/95 text-emerald-100"
              : toast.tone === "error"
              ? "border-red/40 bg-red/15 text-red-soft"
              : "border-gold/30 bg-bg-deep/95 text-gold-soft"
          }`}
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}

function GalleryButton({
  icon,
  label,
  onClick,
  disabled,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-9 items-center justify-center gap-2 border border-white/10 px-2 text-[10px] font-black uppercase tracking-widest text-white/65 transition hover:border-gold hover:text-gold disabled:cursor-wait disabled:opacity-40"
    >
      {icon}
      {label}
    </button>
  );
}

function GalleryLink({ icon, label, href }: { icon: ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-9 items-center justify-center gap-2 border border-white/10 px-2 text-[10px] font-black uppercase tracking-widest text-white/65 transition hover:border-gold hover:text-gold"
    >
      {icon}
      {label}
    </a>
  );
}
