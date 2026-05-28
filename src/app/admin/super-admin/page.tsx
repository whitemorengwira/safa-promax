import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminUsersManager } from "@/components/admin/AdminUsersManager";
import { SiteAccessManager } from "@/components/admin/SiteAccessManager";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";
import { isSuperAdmin } from "@/lib/admin/permissions";
import { listSafeSiteAccessUsers } from "@/lib/site-access/store";

export default async function SuperAdminPortalPage() {
  const user = await requireAdminSession();
  if (!isSuperAdmin(user.role)) redirect("/admin/dashboard");

  const [store, siteAccess] = await Promise.all([
    getContentStore(),
    listSafeSiteAccessUsers(),
  ]);
  const cmsUsers = store.users.map((item) => ({
    id: item.id,
    email: item.email,
    name: item.name,
    role: item.role,
    status: item.status,
    createdAt: item.createdAt,
    approvedAt: item.approvedAt,
  }));
  const pendingCmsAdmins = cmsUsers.filter((item) => item.status === "pending").length;
  const pendingSiteUsers = siteAccess.users.filter((item) => item.status === "pending").length;

  return (
    <AdminShell user={user} title="Super Admin">
      <div className="space-y-8">
        <section className="border border-gold/25 bg-bg-deep p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.32em] text-gold">Access Command Centre</p>
          <div className="mt-4 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_420px] xl:items-end">
            <div>
              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                Approve CMS administrators and presentation viewers from one place.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                CMS administrators can edit the site. Presentation access users can view the protected board/stakeholder website only.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Metric label="CMS Pending" value={pendingCmsAdmins} />
              <Metric label="Site Pending" value={pendingSiteUsers} />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gold">CMS Admins</p>
            <h3 className="mt-2 text-2xl font-black text-white">Approve editors, admins and super admins</h3>
          </div>
          <AdminUsersManager users={cmsUsers} canManageUsers />
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gold">Website Access</p>
            <h3 className="mt-2 text-2xl font-black text-white">Approve board and stakeholder viewers</h3>
          </div>
          <SiteAccessManager users={siteAccess.users} auditLog={siteAccess.auditLog} />
        </section>
      </div>
    </AdminShell>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-white/10 bg-black/25 px-5 py-4 text-center">
      <p className="text-4xl font-black text-gold">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}
