import { AdminShell } from "@/components/admin/AdminShell";
import { AdminUsersManager } from "@/components/admin/AdminUsersManager";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";
import { canManageUsers } from "@/lib/admin/permissions";

export default async function AdminUsersPage() {
  const user = await requireAdminSession();
  const store = await getContentStore();
  const users = store.users.map((item) => ({
    id: item.id,
    email: item.email,
    name: item.name,
    role: item.role,
    status: item.status,
    createdAt: item.createdAt,
    approvedAt: item.approvedAt,
  }));

  return (
    <AdminShell user={user} title="Users & Roles">
      <AdminUsersManager users={users} canManageUsers={canManageUsers(user.role)} />
    </AdminShell>
  );
}
