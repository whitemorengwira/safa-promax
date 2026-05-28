import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canManageSiteAccess } from "@/lib/admin/permissions";
import { getCmsSafetyOverview } from "@/lib/cms/safety";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }
  if (!canManageSiteAccess(session.role)) {
    return NextResponse.json({ error: "Super admin access is required." }, { status: 403 });
  }

  return NextResponse.json(await getCmsSafetyOverview());
}
