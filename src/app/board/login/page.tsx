import { redirect } from "next/navigation";

export default function BoardLoginPage() {
  redirect("/admin/login?next=/board");
}
