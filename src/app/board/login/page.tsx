import { redirect } from "next/navigation";

export default function BoardLoginPage() {
  redirect("/access/login?next=/board");
}
