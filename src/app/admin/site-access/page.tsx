import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { SiteAccessManager } from "@/components/admin/SiteAccessManager";
import { requireAdminSession } from "@/lib/admin/auth";
import { canManageSiteAccess } from "@/lib/admin/permissions";
import { listSafeSiteAccessUsers } from "@/lib/site-access/store";

export default async function AdminSiteAccessPage() {
  const user = await requireAdminSession();
  if (!canManageSiteAccess(user.role)) redirect("/admin/dashboard");

  const { users, auditLog } = await listSafeSiteAccessUsers();

  return (
    <AdminShell user={user} title="Site Access">
      <SiteAccessManager users={users} auditLog={auditLog} />
    </AdminShell>
  );
}
