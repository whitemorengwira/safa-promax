"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useTransition } from "react";
import type { ReactNode } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  ExternalLink,
  LayoutDashboard,
  Loader2,
  LogOut,
  Monitor,
  RotateCcw,
  Save,
  Send,
  Undo2,
  Redo2,
} from "lucide-react";
import { publicRouteItems, type PublicRouteItem } from "@/data/publicRoutes";
import type { SiteOverrideRecord, SiteOverrideVersion } from "@/lib/cms/site-overrides-types";

interface ToastMessage {
  id: number;
  tone: "success" | "error" | "info";
  text: string;
}

const routeItems = publicRouteItems;

function normaliseRoute(route: string) {
  const clean = String(route || "/").split("?")[0].split("#")[0].trim() || "/";
  const withSlash = clean.startsWith("/") ? clean : `/${clean}`;
  return withSlash.length > 1 ? withSlash.replace(/\/+$/, "") : "/";
}

function initialEditorRoute() {
  if (typeof window === "undefined") return "/";
  const route = new URLSearchParams(window.location.search).get("route");
  return normaliseRoute(route || "/");
}

function editorUrl(route: string, frameKey: number) {
  // Keep the CMS canvas tied to the real public route so future site rebuilds appear here automatically.
  const params = new URLSearchParams({
    "cms-editor": "true",
    "cms-frame": String(frameKey),
  });
  return `${route}?${params.toString()}`;
}

function signatureFor(items: SiteOverrideRecord[]) {
  return JSON.stringify(
    items
      .map((item) => ({
        id: item.id,
        selector: item.selector,
        elementType: item.elementType,
        value: item.value ?? "",
        htmlValue: item.htmlValue ?? "",
        altText: item.altText ?? "",
        deleted: Boolean(item.deleted),
        fingerprintStatus: item.fingerprintStatus ?? "ok",
      }))
      .sort((a, b) => a.id.localeCompare(b.id)),
  );
}

function storageKey(route: string, stack: "undo" | "redo") {
  return `safa-cms:${stack}:${route}`;
}

function readStoredStack(route: string, stack: "undo" | "redo") {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey(route, stack)) || "[]") as SiteOverrideRecord[][];
  } catch {
    return [];
  }
}

function writeStoredStack(route: string, stack: "undo" | "redo", value: SiteOverrideRecord[][]) {
  try {
    window.localStorage.setItem(storageKey(route, stack), JSON.stringify(value));
  } catch {
    // The in-memory stack still works if browser storage is unavailable.
  }
}

export function LiveSiteCmsEditor() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [activeRoute, setActiveRoute] = useState("/");
  const [routeInput, setRouteInput] = useState("/");
  const [frameKey, setFrameKey] = useState(1);
  const [overrides, setOverrides] = useState<SiteOverrideRecord[]>([]);
  const [published, setPublished] = useState<SiteOverrideRecord[]>([]);
  const [versions, setVersions] = useState<SiteOverrideVersion[]>([]);
  const [dirty, setDirty] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [undoStack, setUndoStack] = useState<SiteOverrideRecord[][]>([]);
  const [redoStack, setRedoStack] = useState<SiteOverrideRecord[][]>([]);
  const [previewedSignature, setPreviewedSignature] = useState("");
  const [sessionRole, setSessionRole] = useState("");
  const [saving, startSaving] = useTransition();

  const groupedRoutes = useMemo(() => {
    const groups = new Map<string, PublicRouteItem[]>();
    for (const item of routeItems) groups.set(item.group, [...(groups.get(item.group) ?? []), item]);
    return Array.from(groups.entries());
  }, []);

  const activeLabel = routeItems.find((item) => item.route === activeRoute)?.label ?? activeRoute;
  const currentSignature = useMemo(() => signatureFor(overrides), [overrides]);
  const canSuperPublish = sessionRole === "super_admin" || sessionRole === "super-admin";
  const publishReady = canSuperPublish && !dirty && previewedSignature === currentSignature;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const route = initialEditorRoute();
      if (route === "/") return;
      setActiveRoute(route);
      setRouteInput(route);
      setFrameKey((current) => current + 1);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const pushToast = useCallback((tone: ToastMessage["tone"], text: string) => {
    const id = Date.now();
    setToasts((current) => [...current, { id, tone, text }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 4200);
  }, []);

  const sendOverridesToFrame = useCallback((items: SiteOverrideRecord[]) => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "safa-cms-load-overrides", route: activeRoute, overrides: items },
      window.location.origin,
    );
  }, [activeRoute]);

  const loadRoute = useCallback(async (route: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/site-overrides?route=${encodeURIComponent(route)}`);
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.error || "Could not load editable site state.");
      const nextOverrides = payload.draft?.length ? payload.draft : payload.published ?? [];
      setOverrides(nextOverrides);
      setPublished(payload.published ?? []);
      setVersions(payload.versions ?? []);
      setDirty(Boolean(payload.draft?.length));
      setUndoStack(readStoredStack(route, "undo"));
      setRedoStack(readStoredStack(route, "redo"));
      setPreviewedSignature("");
      setLastSaved(null);
      window.setTimeout(() => sendOverridesToFrame(nextOverrides), 120);
    } catch (error) {
      pushToast("error", error instanceof Error ? error.message : "Could not load editable site state.");
    } finally {
      setLoading(false);
    }
  }, [pushToast, sendOverridesToFrame]);

  const saveDraft = useCallback(async (showToast = true) => {
    const response = await fetch("/api/admin/site-overrides/draft", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ route: activeRoute, overrides }),
    });
    const payload = await response.json().catch(() => null);
    if (!response.ok) throw new Error(payload?.error || "Draft could not be saved.");
    setDirty(false);
    setLastSaved(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    if (showToast) pushToast("success", "Draft saved.");
  }, [activeRoute, overrides, pushToast]);

  const changeRoute = useCallback(async (route: string) => {
    if (dirty) {
      try {
        await saveDraft(false);
      } catch (error) {
        pushToast("error", error instanceof Error ? error.message : "Current draft could not be saved.");
      }
    }
    setActiveRoute(route);
    setRouteInput(route);
    setFrameKey((current) => current + 1);
  }, [dirty, pushToast, saveDraft]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadRoute(activeRoute);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [activeRoute, loadRoute]);

  useEffect(() => {
    void fetch("/api/admin/session")
      .then((response) => response.json())
      .then((payload) => setSessionRole(payload?.session?.role ?? ""))
      .catch(() => setSessionRole(""));
  }, []);

  useEffect(() => {
    writeStoredStack(activeRoute, "undo", undoStack);
  }, [activeRoute, undoStack]);

  useEffect(() => {
    writeStoredStack(activeRoute, "redo", redoStack);
  }, [activeRoute, redoStack]);

  useEffect(() => {
    const heartbeat = () => {
      void fetch("/api/admin/safety/heartbeat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ route: activeRoute }),
      }).catch(() => undefined);
    };
    heartbeat();
    const timer = window.setInterval(heartbeat, 30000);
    return () => window.clearInterval(timer);
  }, [activeRoute]);

  const recordJournal = useCallback((beforeOverrides: SiteOverrideRecord[], afterOverrides: SiteOverrideRecord[], action = "cms_edit") => {
    void fetch("/api/admin/safety/journal", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        route: activeRoute,
        action,
        beforeOverrides,
        afterOverrides,
        summary: `Edited ${activeLabel}`,
      }),
    }).catch(() => undefined);
  }, [activeLabel, activeRoute]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "safa-cms-editor-ready") {
        sendOverridesToFrame(overrides);
        return;
      }

      if (event.data?.type === "safa-cms-navigate") {
        const nextRoute = normaliseRoute(event.data.route || "/");
        void changeRoute(nextRoute);
        return;
      }

      if (event.data?.type === "safa-cms-overrides-changed") {
        const nextRoute = normaliseRoute(event.data.route || activeRoute);
        if (nextRoute !== activeRoute) return;
        const nextOverrides = (event.data.overrides ?? []) as SiteOverrideRecord[];
        recordJournal(overrides, nextOverrides, "cms_edit");
        setUndoStack((current) => [...current, overrides]);
        setRedoStack([]);
        setOverrides(nextOverrides);
        setDirty(true);
        setPreviewedSignature("");
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [activeRoute, changeRoute, overrides, recordJournal, sendOverridesToFrame]);

  useEffect(() => {
    if (!dirty) return;
    const timer = window.setTimeout(() => {
      startSaving(() => {
        void saveDraft(false).catch((error) => pushToast("error", error.message));
      });
    }, 4500);
    return () => window.clearTimeout(timer);
  }, [dirty, saveDraft, pushToast]);

  function manualSave() {
    startSaving(() => {
      void saveDraft(true).catch((error) => pushToast("error", error.message));
    });
  }

  function preview() {
    startSaving(() => {
      void (async () => {
        const response = await fetch("/api/admin/site-overrides/preview-token", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ route: activeRoute, overrides }),
        });
        const payload = await response.json().catch(() => null);
        if (!response.ok) throw new Error(payload?.error || "Preview could not be created.");
        const previewedOverrides = (payload.overrides ?? overrides) as SiteOverrideRecord[];
        window.open(payload.url, "_blank", "noopener,noreferrer");
        setOverrides(previewedOverrides);
        setDirty(false);
        setPreviewedSignature(signatureFor(previewedOverrides));
        setLastSaved(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        pushToast("success", "Preview opened.");
      })().catch((error) => pushToast("error", error.message));
    });
  }

  function publish() {
    if (!publishReady) {
      pushToast("error", canSuperPublish ? "Open a fresh preview before publishing." : "Only super admins can publish.");
      return;
    }
    startSaving(() => {
      void (async () => {
        const response = await fetch("/api/admin/site-overrides/publish", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ route: activeRoute, overrides }),
        });
        const payload = await response.json().catch(() => null);
        if (!response.ok) throw new Error(payload?.error || "Publish failed.");
        setPublished(payload.published ?? overrides);
        setVersions((current) => payload.version ? [payload.version, ...current] : current);
        setDirty(false);
        setPreviewedSignature(signatureFor(payload.published ?? overrides));
        setLastSaved(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        pushToast(payload.commit?.skipped ? "info" : "success", payload.commit?.skipped ? payload.commit.reason : "Published to GitHub and Vercel.");
      })().catch((error) => pushToast("error", error.message));
    });
  }

  function undo() {
    if (!undoStack.length) return;
    const previous = undoStack[undoStack.length - 1];
    setRedoStack((current) => [...current, overrides]);
    setUndoStack((current) => current.slice(0, -1));
    setOverrides(previous);
    setDirty(true);
    setPreviewedSignature("");
    sendOverridesToFrame(previous);
  }

  function redo() {
    if (!redoStack.length) return;
    const next = redoStack[redoStack.length - 1];
    setUndoStack((current) => [...current, overrides]);
    setRedoStack((current) => current.slice(0, -1));
    setOverrides(next);
    setDirty(true);
    setPreviewedSignature("");
    sendOverridesToFrame(next);
  }

  function resetToPublished() {
    setUndoStack((current) => [...current, overrides]);
    setRedoStack([]);
    setOverrides(published);
    setDirty(true);
    setPreviewedSignature("");
    sendOverridesToFrame(published);
    pushToast("info", "Canvas reset to published content.");
  }

  function restoreOriginal(scope: "route" | "site") {
    if (!canSuperPublish) {
      pushToast("error", "Only super admins can restore original content.");
      return;
    }
    const label = scope === "site" ? "the full site" : activeRoute;
    if (!window.confirm(`Restore ${label} to the source-original site content? This publishes an empty CMS override set.`)) return;
    startSaving(() => {
      void (async () => {
        const response = await fetch("/api/admin/site-overrides/revert", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ route: activeRoute, scope }),
        });
        const payload = await response.json().catch(() => null);
        if (!response.ok) throw new Error(payload?.error || "Restore original failed.");
        setPublished([]);
        setOverrides([]);
        setDirty(false);
        setPreviewedSignature(signatureFor([]));
        setFrameKey((current) => current + 1);
        pushToast("success", scope === "site" ? "Full site restored to original source content." : "Page restored to original source content.");
      })().catch((error) => pushToast("error", error.message));
    });
  }

  function restoreVersion(versionId: string) {
    if (!versionId) return;
    startSaving(() => {
      void (async () => {
        const response = await fetch("/api/admin/site-overrides/restore", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ route: activeRoute, versionId }),
        });
        const payload = await response.json().catch(() => null);
        if (!response.ok) throw new Error(payload?.error || "Restore failed.");
        const nextPublished = payload.published ?? [];
        setPublished(nextPublished);
        setOverrides(nextPublished);
        setVersions((current) => payload.version ? [payload.version, ...current] : current);
        setDirty(false);
        setPreviewedSignature(signatureFor(nextPublished));
        sendOverridesToFrame(nextPublished);
        pushToast(payload.commit?.skipped ? "info" : "success", payload.commit?.skipped ? payload.commit.reason : "Version restored and published.");
      })().catch((error) => pushToast("error", error.message));
    });
  }

  function logout() {
    void fetch("/api/admin/logout", { method: "POST" }).finally(() => {
      window.location.href = "/admin/login";
    });
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#0b0d10] text-white">
      <header className="z-30 flex min-h-16 shrink-0 flex-wrap items-center gap-2 border-b border-white/10 bg-[#111317]/95 px-3 py-2 shadow-2xl">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-gold/30 bg-gold/10 text-gold">
            <Monitor className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-black leading-tight text-white">SAFA Live Site CMS</p>
            <p className="truncate text-[10px] uppercase tracking-[0.22em] text-gold">{activeLabel}</p>
          </div>
        </div>

        <div className="relative min-w-[220px] flex-1 md:max-w-[380px]">
          <select
            value={activeRoute}
            onChange={(event) => void changeRoute(event.target.value)}
            className="h-10 w-full appearance-none border border-white/10 bg-black/40 px-4 pr-10 text-sm text-white outline-none transition focus:border-gold"
          >
            {!routeItems.some((item) => item.route === activeRoute) && (
              <option value={activeRoute}>{activeRoute}</option>
            )}
            {groupedRoutes.map(([group, items]) => (
              <optgroup key={group} label={group}>
                {items.map((item) => (
                  <option key={item.route} value={item.route}>
                    {item.label} · {item.route}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
        </div>

        <form
          className="hidden min-w-[200px] 2xl:block"
          onSubmit={(event) => {
            event.preventDefault();
            void changeRoute(normaliseRoute(routeInput));
          }}
        >
          <input
            value={routeInput}
            onChange={(event) => setRouteInput(event.target.value)}
            className="h-10 w-full border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition focus:border-gold"
            aria-label="Open public route"
          />
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          <IconButton label="Undo" onClick={undo} disabled={!undoStack.length} icon={<Undo2 className="h-4 w-4" />} />
          <IconButton label="Redo" onClick={redo} disabled={!redoStack.length} icon={<Redo2 className="h-4 w-4" />} />
          <IconButton label="Reset" onClick={resetToPublished} disabled={!overrides.length} icon={<RotateCcw className="h-4 w-4" />} />
          {canSuperPublish && (
            <>
              <button
                type="button"
                onClick={() => restoreOriginal("route")}
                disabled={saving}
                className="hidden h-10 border border-gold/30 px-3 text-[10px] font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg disabled:opacity-40 2xl:inline-flex 2xl:items-center"
              >
                Original Page
              </button>
              <button
                type="button"
                onClick={() => restoreOriginal("site")}
                disabled={saving}
                className="hidden h-10 border border-red/40 px-3 text-[10px] font-black uppercase tracking-widest text-red-soft transition hover:bg-red hover:text-white disabled:opacity-40 2xl:inline-flex 2xl:items-center"
              >
                Original Site
              </button>
            </>
          )}
        </div>

        <select
          value=""
          onChange={(event) => restoreVersion(event.target.value)}
          disabled={!versions.length || saving}
          className="hidden h-10 max-w-[220px] border border-white/10 bg-black/40 px-3 text-xs text-white/75 outline-none transition focus:border-gold disabled:opacity-30 2xl:block"
          aria-label="Restore published version"
        >
          <option value="">Version History</option>
          {versions.map((version) => (
            <option key={version.id} value={version.id}>
              {new Date(version.publishedAt).toLocaleString()} · {version.publishedBy}
            </option>
          ))}
        </select>

        <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
          <a
            href="/admin/dashboard"
            className="inline-flex h-10 items-center gap-2 border border-gold/40 px-3 text-[10px] font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </a>
          <span className={`inline-flex h-9 items-center gap-2 border px-3 text-[11px] font-bold uppercase tracking-widest ${
            dirty ? "border-amber-300/30 bg-amber-300/10 text-amber-200" : "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
          }`}>
            {dirty ? <Clock3 className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
            {dirty ? "Draft changes" : "Saved"}
          </span>
          {lastSaved && <span className="hidden text-xs text-white/50 xl:inline">Saved {lastSaved}</span>}
          {!publishReady && (
            <span className="hidden max-w-[170px] text-[10px] font-bold uppercase tracking-widest text-amber-200 xl:inline">
              {canSuperPublish ? "Preview required" : "Edit / preview only"}
            </span>
          )}
          <ActionButton onClick={manualSave} disabled={saving} icon={<Save className="h-4 w-4" />} label="Save" />
          <ActionButton onClick={preview} disabled={saving} icon={<Eye className="h-4 w-4" />} label="Preview" />
          <button
            type="button"
            onClick={publish}
            disabled={saving || !publishReady}
            className="inline-flex h-10 items-center gap-2 bg-gold px-4 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft disabled:cursor-wait disabled:opacity-60"
            title={publishReady ? "Publish previewed changes" : "Open a fresh preview before publishing"}
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            Publish
          </button>
          <a
            href={activeRoute}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center border border-white/10 px-3 text-white/70 transition hover:border-gold hover:text-gold"
            title="Open live route"
            aria-label="Open live route"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <IconButton label="Logout" onClick={logout} icon={<LogOut className="h-4 w-4" />} />
        </div>
      </header>

      <div className="relative min-h-0 flex-1 bg-[#050607]">
        {loading && (
          <div className="absolute inset-x-0 top-0 z-20 h-1 overflow-hidden bg-white/10">
            <div className="h-full w-1/3 animate-pulse bg-gold" />
          </div>
        )}
        <iframe
          key={`${activeRoute}-${frameKey}`}
          ref={iframeRef}
          src={editorUrl(activeRoute, frameKey)}
          title="SAFA editable live site"
          onLoad={() => sendOverridesToFrame(overrides)}
          className="h-full w-full border-0 bg-bg"
        />
      </div>

      <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex w-96 max-w-[calc(100vw-2rem)] flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`border px-4 py-3 text-sm shadow-2xl ${
              toast.tone === "success"
                ? "border-emerald-300/30 bg-emerald-950/95 text-emerald-100"
                : toast.tone === "error"
                ? "border-red/40 bg-red/15 text-red-soft"
                : "border-gold/30 bg-bg-deep/95 text-gold-soft"
            }`}
          >
            {toast.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function IconButton({
  label,
  icon,
  onClick,
  disabled,
}: {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white/70 transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
    >
      {icon}
    </button>
  );
}

function ActionButton({
  label,
  icon,
  onClick,
  disabled,
}: {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-10 items-center gap-2 border border-gold/30 px-4 text-xs font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg disabled:cursor-wait disabled:opacity-60"
    >
      {icon}
      {label}
    </button>
  );
}
