import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/admin/auth";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export default async function AdminEditorPage({ params }: PageProps) {
  await requireAdminSession();
  await params;
  redirect("/admin");
}
