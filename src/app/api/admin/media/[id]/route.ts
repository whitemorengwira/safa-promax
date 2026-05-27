import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { updateMediaAsset } from "@/lib/admin/content-store";
import { canEdit } from "@/lib/admin/permissions";

type RouteContext = {
  params: Promise<{ id: string }> | { id: string };
};

export async function PATCH(request: Request, context: RouteContext) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  if (!canEdit(session.role)) {
    return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
  }

  try {
    const { id } = await context.params;
    const updates = await request.json();
    const asset = await updateMediaAsset(id, updates, session);
    return NextResponse.json({ asset });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Media asset could not be updated." },
      { status: 400 },
    );
  }
}
