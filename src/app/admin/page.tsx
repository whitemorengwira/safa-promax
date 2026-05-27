import { WixCmsEditor } from "@/components/admin/WixCmsEditor";
import { requireAdminSession } from "@/lib/admin/auth";

export default async function AdminIndexPage() {
  await requireAdminSession();
  return <WixCmsEditor />;
}
