import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";
import { canPublish } from "@/lib/admin/permissions";

export default async function AdminApprovalsPage() {
  const user = await requireAdminSession();
  const store = await getContentStore();

  return (
    <AdminShell user={user} title="Approvals">
      <div className="mb-6 border border-gold/20 bg-bg-deep p-5">
        <p className="text-sm leading-relaxed text-muted">
          Drafts require approval before publishing. Your current role {canPublish(user.role) ? "can publish approved work." : "can request changes but cannot publish."}
        </p>
      </div>
      <div className="space-y-4">
        {store.approvals.length === 0 && (
          <div className="border border-white/10 bg-surface/40 p-6 text-muted">No approval requests yet.</div>
        )}
        {store.approvals.map((approval) => {
          const page = store.pages.find((item) => item.slug === approval.pageSlug);
          return (
            <article key={approval.id} className="border border-white/10 bg-surface/40 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold">{approval.status}</p>
                  <p className="mt-2 text-xl font-black text-white">{approval.summary}</p>
                  <p className="mt-1 text-sm text-muted">Requested by {approval.requester}</p>
                </div>
                {page && (
                  <Link href={`/admin/editor/${page.slug}`} className="border border-gold/40 px-4 py-3 text-xs font-black uppercase tracking-widest text-gold hover:bg-gold hover:text-bg">
                    Review Draft
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </AdminShell>
  );
}
