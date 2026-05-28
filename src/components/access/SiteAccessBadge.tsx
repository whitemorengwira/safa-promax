"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LogOut, ShieldCheck } from "lucide-react";
import { siteAccessRoleLabels, type SiteAccessRole, type SiteAccessSession } from "@/lib/site-access/types";

export function SiteAccessBadge() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [session, setSession] = useState<SiteAccessSession | null>(null);
  const isCmsEditor = searchParams.get("cms-editor") === "true";
  const route = useMemo(() => `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`, [pathname, searchParams]);

  useEffect(() => {
    if (isCmsEditor) return;
    void fetch("/api/site-access/session")
      .then((response) => response.json())
      .then((payload) => setSession(payload?.session ?? null))
      .catch(() => setSession(null));
  }, [isCmsEditor]);

  useEffect(() => {
    if (!session || isCmsEditor) return;
    const heartbeat = () => {
      void fetch("/api/site-access/session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ route }),
      }).catch(() => undefined);
    };
    heartbeat();
    const timer = window.setInterval(heartbeat, 45000);
    return () => window.clearInterval(timer);
  }, [isCmsEditor, route, session]);

  async function logout() {
    await fetch("/api/site-access/logout", { method: "POST" });
    router.push(`/access/login?next=${encodeURIComponent(pathname || "/")}`);
    router.refresh();
  }

  if (!session || isCmsEditor) return null;

  return (
    <div className="fixed bottom-5 left-5 z-[70] flex max-w-[calc(100vw-2.5rem)] items-center gap-3 border border-gold/30 bg-bg-deep/95 px-4 py-3 text-xs text-white shadow-2xl backdrop-blur">
      <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
      <div className="min-w-0">
        <p className="truncate font-black">{session.name}</p>
        <p className="truncate text-[10px] uppercase tracking-widest text-gold">
          {siteAccessRoleLabels[session.role as SiteAccessRole] ?? session.role}
        </p>
      </div>
      <button
        type="button"
        onClick={logout}
        className="ml-1 inline-flex h-8 items-center gap-2 border border-white/10 px-3 text-[10px] font-black uppercase tracking-widest text-muted transition hover:border-gold hover:text-gold"
      >
        <LogOut className="h-3.5 w-3.5" />
        Logout
      </button>
    </div>
  );
}
