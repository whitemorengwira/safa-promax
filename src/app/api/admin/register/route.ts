import { NextResponse } from "next/server";
import { hashAdminPassword } from "@/lib/admin/auth";
import { getContentStore, saveContentStore } from "@/lib/admin/content-store";

function normaliseEmail(email: string) {
  return email.toLowerCase().trim();
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = normaliseEmail(String(body?.email ?? ""));
  const password = String(body?.password ?? "");

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Name, email and password are required." }, { status: 400 });
  }

  if (!email.includes("@") || email.length < 6) {
    return NextResponse.json({ error: "Use a valid email address." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  const bootstrapEmail = process.env.SAFA_ADMIN_EMAIL || process.env.ADMIN_EMAIL;
  if (bootstrapEmail && normaliseEmail(bootstrapEmail) === email) {
    return NextResponse.json({ error: "This administrator account already exists." }, { status: 409 });
  }

  const store = await getContentStore();
  const existing = store.users.find((user) => normaliseEmail(user.email) === email);

  if (existing) {
    return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
  }

  const now = new Date().toISOString();
  store.users.push({
    id: `user-request-${Date.now()}`,
    email,
    name,
    role: "viewer",
    status: "pending",
    passwordHash: hashAdminPassword(password),
    createdAt: now,
  });
  store.auditLog.unshift({
    id: `account-request-${Date.now()}`,
    action: "admin_account_requested",
    actor: email,
    summary: `${name} requested CMS access.`,
    createdAt: now,
  });

  await saveContentStore(store);

  return NextResponse.json({
    ok: true,
    message: "Account request submitted. An administrator must approve access before sign-in.",
  }, { status: 201 });
}
