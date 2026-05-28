import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { CmsSafetyDashboard } from "@/components/admin/CmsSafetyDashboard";
import { getAdminSession } from "@/lib/admin/auth";
import { canManageSiteAccess } from "@/lib/admin/permissions";
import { getCmsSafetyOverview } from "@/lib/cms/safety";

export default async function AdminSafetyPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  if (!canManageSiteAccess(session.role)) redirect("/admin/dashboard");

  const overview = await getCmsSafetyOverview();

  return (
    <AdminShell user={session} title="CMS Safety & Activity">
      <CmsSafetyDashboard {...overview} />
    </AdminShell>
  );
}
