import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { createCmsPage } from "@/lib/admin/content-store";
import { canEdit } from "@/lib/admin/permissions";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  if (!canEdit(session.role)) {
    return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
  }

  try {
    const input = await request.json();
    const page = await createCmsPage(input, session);
    return NextResponse.json({ page }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Page could not be created." },
      { status: 400 },
    );
  }
}
