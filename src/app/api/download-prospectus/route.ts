import { NextResponse } from "next/server";
import { saveProspectusLead } from "@/lib/forms/file-leads";
import { createProspectusPdf } from "@/lib/forms/prospectus-pdf";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const payload = {
    name: String(body?.name ?? ""),
    email: String(body?.email ?? ""),
    organisation: String(body?.organisation ?? ""),
    role: String(body?.role ?? ""),
  };

  if (!payload.email) {
    return NextResponse.json({ error: "Email address is required." }, { status: 400 });
  }

  await saveProspectusLead(payload);

  return new Response(createProspectusPdf(), {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": 'attachment; filename="safa-partnership-prospectus.pdf"',
      "cache-control": "no-store",
    },
  });
}
