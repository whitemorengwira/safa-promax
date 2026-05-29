import { AdminShell } from "@/components/admin/AdminShell";
import { MediaGalleryClient } from "@/components/admin/MediaGalleryClient";
import { requireAdminSession } from "@/lib/admin/auth";

export default async function AdminMediaPage() {
  const user = await requireAdminSession();

  return (
    <AdminShell user={user} title="Media Library">
      <MediaGalleryClient />
    </AdminShell>
  );
}
