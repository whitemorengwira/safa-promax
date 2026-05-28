"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function CmsAdminEntryCard() {
  return (
    <aside className="border border-gold/20 bg-black/35 p-6 shadow-2xl backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center border border-gold/30 bg-gold/10 text-gold">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gold">Internal Access</p>
          <h2 className="mt-2 text-xl font-black text-white">CMS administrators and editors</h2>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Only for approved SAFA CMS editors. Board and stakeholder viewers should use the presentation sign-in.
      </p>
      <Link
        href="/admin/login"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-gold/40 px-4 py-3 text-xs font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg"
      >
        Open CMS Admin Studio
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </aside>
  );
}
