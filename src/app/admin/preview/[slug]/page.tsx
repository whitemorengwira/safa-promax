import { notFound } from "next/navigation";
import { CmsRenderedPage, mergeCmsPage } from "@/components/cms/CmsRenderedPage";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export default async function AdminPreviewPage({ params }: PageProps) {
  await requireAdminSession();
  const { slug } = await params;
  const store = await getContentStore();
  const page = store.pages.find((item) => item.slug === slug);

  if (!page) notFound();

  return <CmsRenderedPage page={mergeCmsPage(page, page.workingCopy)} preview />;
}
