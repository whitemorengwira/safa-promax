import { LiveSiteCmsEditor } from "@/components/admin/LiveSiteCmsEditor";
import { requireAdminSession } from "@/lib/admin/auth";

export default async function AdminIndexPage() {
  await requireAdminSession();
  return <LiveSiteCmsEditor />;
}
