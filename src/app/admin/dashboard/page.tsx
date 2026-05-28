import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export default async function AdminDashboardPage() {
  const user = await requireAdminSession();
  const store = await getContentStore();
  const pendingApprovals = store.approvals.filter((approval) => approval.status === "pending");
  const lockedPages = store.pages.filter((page) => page.lockedImage);

  return (
    <AdminShell user={user} title="Dashboard">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <Metric label="Pages" value={String(store.pages.length)} detail="editable routes" />
        <Metric label="Pending" value={String(pendingApprovals.length)} detail="approval requests" />
        <Metric label="Media" value={String(store.media.length)} detail="managed assets" />
        <Metric label="Locked" value={String(lockedPages.length)} detail="approved visuals" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        <section className="border border-white/10 bg-surface/40 p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold">Route Health</p>
              <h3 className="mt-1 text-2xl font-black text-white">Editable public pages</h3>
            </div>
            <Link href="/admin" className="bg-gold px-4 py-3 text-xs font-black uppercase tracking-widest text-bg">
              Edit Site
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {store.pages.slice(0, 10).map((page) => (
              <Link
                key={page.slug}
                href="/admin"
                className="border border-white/10 bg-bg/55 p-4 transition hover:border-gold/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-bold text-white">{page.title}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-gold">{page.status}</span>
                </div>
                <p className="mt-2 text-xs text-muted">{page.route}</p>
              </Link>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="border border-gold/20 bg-bg-deep p-6">
            <p className="text-[10px] uppercase tracking-widest text-gold">Security</p>
            <h3 className="mt-2 text-xl font-black text-white">Role-based approval is active.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Editors save drafts and preview. Super admins publish, restore original content, and manage access.
            </p>
          </section>
          <section className="border border-white/10 bg-surface/40 p-6">
            <p className="text-[10px] uppercase tracking-widest text-gold">Latest Activity</p>
            <div className="mt-4 space-y-4">
              {store.auditLog.slice(0, 5).map((entry) => (
                <div key={entry.id} className="border-b border-white/10 pb-3 last:border-0">
                  <p className="text-sm font-bold text-white">{entry.summary}</p>
                  <p className="text-xs text-muted">{entry.actor}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </AdminShell>
  );
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="border border-white/10 bg-surface/40 p-5">
      <p className="text-[10px] uppercase tracking-widest text-gold">{label}</p>
      <p className="mt-3 text-4xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs text-muted">{detail}</p>
    </div>
  );
}
