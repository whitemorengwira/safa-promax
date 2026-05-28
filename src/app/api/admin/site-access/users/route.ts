import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canManageSiteAccess } from "@/lib/admin/permissions";
import {
  createSiteAccessUser,
  listSafeSiteAccessUsers,
  updateSiteAccessUser,
} from "@/lib/site-access/store";
import { siteAccessRoles, siteAccessStatuses, type SiteAccessRole, type SiteAccessStatus } from "@/lib/site-access/types";

function normaliseEmail(email: string) {
  return email.toLowerCase().trim();
}

async function requireSuperAdmin() {
  const session = await getAdminSession();
  if (!session) return { error: NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 }) };
  if (!canManageSiteAccess(session.role)) {
    return { error: NextResponse.json({ error: "Super admin access is required." }, { status: 403 }) };
  }
  return { session };
}

export async function GET() {
  const guard = await requireSuperAdmin();
  if (guard.error) return guard.error;

  const state = await listSafeSiteAccessUsers();
  return NextResponse.json(state);
}

export async function POST(request: Request) {
  const guard = await requireSuperAdmin();
  if (guard.error) return guard.error;

  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = normaliseEmail(String(body?.email ?? ""));
  const organisation = String(body?.organisation ?? "").trim();
  const password = String(body?.password ?? "");
  const role = String(body?.role ?? "viewer") as SiteAccessRole;
  const status = String(body?.status ?? "active") as SiteAccessStatus;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Name, email and password are required." }, { status: 400 });
  }

  if (!email.includes("@") || email.length < 6) {
    return NextResponse.json({ error: "Use a valid email address." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  if (!siteAccessRoles.includes(role) || !siteAccessStatuses.includes(status)) {
    return NextResponse.json({ error: "Valid role and status are required." }, { status: 400 });
  }

  try {
    const user = await createSiteAccessUser({ name, email, organisation, password, role, status }, guard.session.email);
    return NextResponse.json({ ok: true, user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Site-access user could not be created." },
      { status: 400 },
    );
  }
}

export async function PATCH(request: Request) {
  const guard = await requireSuperAdmin();
  if (guard.error) return guard.error;

  const body = await request.json().catch(() => null);
  const id = String(body?.id ?? "");
  const role = body?.role ? (String(body.role) as SiteAccessRole) : undefined;
  const status = body?.status ? (String(body.status) as SiteAccessStatus) : undefined;

  if (!id || (role && !siteAccessRoles.includes(role)) || (status && !siteAccessStatuses.includes(status))) {
    return NextResponse.json({ error: "Valid user, role and status are required." }, { status: 400 });
  }

  try {
    const user = await updateSiteAccessUser(id, { role, status }, guard.session.email);
    return NextResponse.json({ ok: true, user });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Site-access user could not be updated." },
      { status: 400 },
    );
  }
}
