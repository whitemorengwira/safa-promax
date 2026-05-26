import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export default async function AdminEditorIndexPage() {
  await requireAdminSession();
  const store = await getContentStore();
  redirect(`/admin/editor/${store.pages[0]?.slug ?? "home"}`);
}
