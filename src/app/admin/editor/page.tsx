import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/admin/auth";

export default async function AdminEditorIndexPage() {
  await requireAdminSession();
  redirect("/admin");
}
