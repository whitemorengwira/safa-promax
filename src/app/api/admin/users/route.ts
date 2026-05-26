import { NextResponse } from "next/server";
import { getAdminSession, hashAdminPassword } from "@/lib/admin/auth";
import { getContentStore, saveContentStore } from "@/lib/admin/content-store";
import { canManageUsers } from "@/lib/admin/permissions";
import type { AdminRole, AdminStatus } from "@/lib/admin/types";

const roles: AdminRole[] = ["viewer", "editor", "approver", "admin", "super-admin"];
const statuses: AdminStatus[] = ["pending", "active", "suspended"];

function normaliseEmail(email: string) {
  return email.toLowerCase().trim();
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  if (!canManageUsers(session.role)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });

  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = normaliseEmail(String(body?.email ?? ""));
  const password = String(body?.password ?? "");
  const role = String(body?.role ?? "editor") as AdminRole;
  const status = String(body?.status ?? "active") as AdminStatus;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Name, email and password are required." }, { status: 400 });
  }

  if (!email.includes("@") || email.length < 6) {
    return NextResponse.json({ error: "Use a valid email address." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  if (!roles.includes(role)) {
    return NextResponse.json({ error: "Invalid role." }, { status: 400 });
  }

  if (!statuses.includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  if (role === "super-admin" && session.role !== "super-admin") {
    return NextResponse.json({ error: "Only a super-admin can create another super-admin." }, { status: 403 });
  }

  const store = await getContentStore();
  const existing = store.users.find((user) => normaliseEmail(user.email) === email);

  if (existing) {
    return NextResponse.json({ error: "A user with this email already exists." }, { status: 409 });
  }

  const now = new Date().toISOString();
  const user = {
    id: `user-${Date.now()}`,
    email,
    name,
    role,
    status,
    passwordHash: hashAdminPassword(password),
    createdAt: now,
    approvedAt: status === "active" ? now : undefined,
  };

  store.users.push(user);
  store.auditLog.unshift({
    id: `user-created-${Date.now()}`,
    action: "admin_user_created",
    actor: session.email,
    summary: `Created ${role} user ${email}.`,
    createdAt: now,
  });

  await saveContentStore(store);

  return NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
      approvedAt: user.approvedAt,
    },
  }, { status: 201 });
}

export async function PATCH(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
  if (!canManageUsers(session.role)) return NextResponse.json({ error: "Forbidden." }, { status: 403 });

  const body = await request.json().catch(() => null);
  const id = String(body?.id ?? "");
  const role = String(body?.role ?? "") as AdminRole;
  const status = String(body?.status ?? "") as AdminStatus;

  if (!id || !roles.includes(role) || !statuses.includes(status)) {
    return NextResponse.json({ error: "User, role and status are required." }, { status: 400 });
  }

  if (role === "super-admin" && session.role !== "super-admin") {
    return NextResponse.json({ error: "Only a super-admin can assign super-admin access." }, { status: 403 });
  }

  if (id === session.id && status !== "active") {
    return NextResponse.json({ error: "You cannot suspend your own active session." }, { status: 400 });
  }

  const store = await getContentStore();
  const user = store.users.find((item) => item.id === id);

  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  if (user.role === "super-admin" && session.role !== "super-admin") {
    return NextResponse.json({ error: "Only a super-admin can modify a super-admin." }, { status: 403 });
  }

  const now = new Date().toISOString();
  user.role = role;
  user.status = status;
  if (status === "active" && !user.approvedAt) user.approvedAt = now;

  store.auditLog.unshift({
    id: `user-updated-${Date.now()}`,
    action: "admin_user_updated",
    actor: session.email,
    summary: `Updated ${user.email} to ${role} / ${status}.`,
    createdAt: now,
  });

  await saveContentStore(store);

  return NextResponse.json({
    ok: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
      approvedAt: user.approvedAt,
    },
  });
}
