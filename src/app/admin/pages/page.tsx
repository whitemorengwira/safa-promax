import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export default async function AdminPagesPage() {
  const user = await requireAdminSession();
  const store = await getContentStore();

  return (
    <AdminShell user={user} title="Pages">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {store.pages.map((page) => (
          <Link
            key={page.slug}
            href={`/admin/editor/${page.slug}`}
            className="border border-white/10 bg-surface/40 p-5 transition hover:border-gold/70"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold">{page.category}</p>
                <h3 className="mt-2 text-xl font-black text-white">{page.title}</h3>
              </div>
              {page.lockedImage && (
                <span className="border border-gold/30 px-2 py-1 text-[10px] uppercase tracking-widest text-gold">
                  Locked
                </span>
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{page.summary}</p>
            <p className="mt-4 text-xs text-gold-soft">{page.route}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
