import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { savePageDraft } from "@/lib/admin/content-store";
import { canEdit } from "@/lib/admin/permissions";

type RouteContext = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function PUT(request: Request, context: RouteContext) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  if (!canEdit(session.role)) {
    return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
  }

  const { slug } = await context.params;
  const updates = await request.json();
  const page = await savePageDraft(slug, updates, session);

  return NextResponse.json({ page });
}
