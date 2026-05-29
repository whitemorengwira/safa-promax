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
    <div className="fixed left-3 top-[54px] z-[70] flex max-w-[calc(100vw-1.5rem)] items-center gap-1.5 border border-gold/30 bg-bg-deep/88 px-2 py-1 text-[10px] text-white shadow-2xl backdrop-blur lg:left-[220px] lg:top-2 lg:h-8">
      <ShieldCheck className="h-3 w-3 shrink-0 text-gold" />
      <div className="hidden min-w-0 xl:block">
        <p className="max-w-32 truncate text-[10px] font-black leading-tight">{session.name}</p>
        <p className="truncate text-[8px] uppercase tracking-widest text-gold">
          {siteAccessRoleLabels[session.role as SiteAccessRole] ?? session.role}
        </p>
      </div>
      <button
        type="button"
        onClick={logout}
        className="inline-flex h-6 items-center gap-1 border border-white/10 px-1.5 text-[8px] font-black uppercase tracking-widest text-muted transition hover:border-gold hover:text-gold"
        title="Logout"
      >
        <LogOut className="h-2.5 w-2.5" />
        Logout
      </button>
    </div>
  );
}
