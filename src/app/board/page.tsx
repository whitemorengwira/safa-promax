import Link from "next/link";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export default async function BoardPage() {
  await requireAdminSession();
  const store = await getContentStore();
  const keyPages = store.pages.filter((page) => ["home", "foundation", "visibility", "growth-engine", "delivery", "smart-tools"].includes(page.slug));

  return (
    <main className="min-h-screen bg-bg">
      <section className="container-max py-16 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gold">Board Portal</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
          SA Film Academy 360 Marketing Strategy
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          A protected board-facing view of the strategy routes, readiness status, locked visuals and approval flow.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="bg-gold px-5 py-4 text-xs font-black uppercase tracking-widest text-bg">Open Public Site</Link>
          <Link href="/admin/dashboard" className="border border-gold/40 px-5 py-4 text-xs font-black uppercase tracking-widest text-gold">Admin Dashboard</Link>
        </div>
      </section>

      <section className="container-max pb-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {keyPages.map((page) => (
            <Link key={page.slug} href={page.route} className="border border-white/10 bg-surface/40 p-6 transition hover:border-gold/60">
              <p className="text-[10px] uppercase tracking-widest text-gold">{page.category}</p>
              <h2 className="mt-3 text-2xl font-black text-white">{page.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{page.summary}</p>
              <p className="mt-4 text-xs text-gold-soft">{page.lockedImage ? "Approved visual locked" : "Editable visual"}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
