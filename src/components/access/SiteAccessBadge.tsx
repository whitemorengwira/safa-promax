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
    <div className="fixed right-4 top-[88px] z-[70] flex max-w-[calc(100vw-2rem)] items-center gap-2 border border-gold/30 bg-bg-deep/90 px-3 py-2 text-[11px] text-white shadow-2xl backdrop-blur md:right-6 md:top-[92px]">
      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-gold" />
      <div className="hidden min-w-0 sm:block">
        <p className="max-w-40 truncate font-black leading-tight">{session.name}</p>
        <p className="truncate text-[9px] uppercase tracking-widest text-gold">
          {siteAccessRoleLabels[session.role as SiteAccessRole] ?? session.role}
        </p>
      </div>
      <button
        type="button"
        onClick={logout}
        className="inline-flex h-7 items-center gap-1.5 border border-white/10 px-2 text-[9px] font-black uppercase tracking-widest text-muted transition hover:border-gold hover:text-gold"
        title="Logout"
      >
        <LogOut className="h-3 w-3" />
        Logout
      </button>
    </div>
  );
}
