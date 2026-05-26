import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  const store = await getContentStore();
  return NextResponse.json(store);
}
