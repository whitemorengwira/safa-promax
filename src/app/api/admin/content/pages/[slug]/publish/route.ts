import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { publishPage } from "@/lib/admin/content-store";
import { canPublish } from "@/lib/admin/permissions";

type RouteContext = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function POST(_request: Request, context: RouteContext) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  if (!canPublish(session.role)) {
    return NextResponse.json({ error: "Approver access is required." }, { status: 403 });
  }

  const { slug } = await context.params;
  const page = await publishPage(slug, session);

  return NextResponse.json({ page });
}
