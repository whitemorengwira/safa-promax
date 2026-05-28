import { NextResponse } from "next/server";
import { requestSiteAccess } from "@/lib/site-access/store";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").toLowerCase().trim();
  const organisation = String(body?.organisation ?? "").trim();
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

  try {
    const user = await requestSiteAccess({ name, email, organisation, password });
    return NextResponse.json(
      {
        ok: true,
        user,
        message: "Access request submitted. A super admin will review it before the site opens.",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Access request could not be submitted." },
      { status: 400 },
    );
  }
}
