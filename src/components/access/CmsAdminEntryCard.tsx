"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function CmsAdminEntryCard() {
  return (
    <aside className="w-full border border-gold/20 bg-black/45 p-5 shadow-2xl backdrop-blur-md lg:max-w-[300px]">
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center border border-gold/30 bg-gold/10 text-gold">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-black uppercase leading-none tracking-[0.24em] text-gold">Internal Access</div>
          <div className="mt-2 text-base font-black uppercase leading-snug tracking-[0.08em] text-white">
            CMS administrators and editors
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-white/10 pt-4 text-xs leading-6 text-muted">
        Only for approved SAFA CMS editors. Board and stakeholder viewers should use the presentation sign-in.
      </div>
      <Link
        href="/admin/login"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-gold/40 px-3 py-3 text-[11px] font-black uppercase leading-none tracking-[0.14em] text-gold transition hover:bg-gold hover:text-bg"
      >
        Open CMS Admin Studio
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </aside>
  );
}
