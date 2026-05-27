import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsRenderedPage } from "@/components/cms/CmsRenderedPage";
import { getContentStore } from "@/lib/admin/content-store";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = await getContentStore();
  const page = store.pages.find((item) => item.slug === slug && item.route === `/pages/${slug}`);

  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.seoDescription,
  };
}

export default async function CmsPublicPage({ params }: PageProps) {
  const { slug } = await params;
  const store = await getContentStore();
  const page = store.pages.find((item) => item.slug === slug && item.route === `/pages/${slug}`);

  if (!page) notFound();

  return <CmsRenderedPage page={page} />;
}
