import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { SiteEditor } from "@/components/admin/SiteEditor";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export default async function AdminEditorPage({ params }: PageProps) {
  const user = await requireAdminSession();
  const { slug } = await params;
  const store = await getContentStore();
  const page = store.pages.find((item) => item.slug === slug);

  if (!page) notFound();

  return (
    <AdminShell user={user} title="Edit Site">
      <SiteEditor page={page} pages={store.pages} user={user} />
    </AdminShell>
  );
}
