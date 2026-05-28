import { NextResponse } from "next/server";
import { clearSiteAccessSession } from "@/lib/site-access/auth";

export async function POST() {
  await clearSiteAccessSession();
  return NextResponse.json({ ok: true });
}
