import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export default async function AdminAuditLogPage() {
  const user = await requireAdminSession();
  const store = await getContentStore();

  return (
    <AdminShell user={user} title="Audit Log">
      <div className="space-y-3">
        {store.auditLog.map((entry) => (
          <article key={entry.id} className="border border-white/10 bg-surface/40 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold">{entry.action}</p>
                <h3 className="mt-2 text-lg font-black text-white">{entry.summary}</h3>
                <p className="mt-1 text-sm text-muted">{entry.actor}</p>
              </div>
              <time className="text-xs text-muted">{new Date(entry.createdAt).toLocaleString("en-ZA")}</time>
            </div>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
