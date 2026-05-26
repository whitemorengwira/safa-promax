import { NextResponse } from "next/server";
import { saveContactLead } from "@/lib/forms/file-leads";

function normalisePayload(payload: Record<string, unknown>) {
  return {
    name: String(payload.name ?? ""),
    email: String(payload.email ?? ""),
    organisation: String(payload.organisation ?? ""),
    enquiryType: String(payload.enquiryType ?? payload["enquiry-type"] ?? ""),
    message: String(payload.message ?? ""),
  };
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  const payload =
    contentType.includes("application/json")
      ? normalisePayload((await request.json()) as Record<string, unknown>)
      : await request.formData().then((formData) =>
          normalisePayload({
            name: formData.get("name"),
            email: formData.get("email"),
            organisation: formData.get("organisation"),
            "enquiry-type": formData.get("enquiry-type"),
            message: formData.get("message"),
          }),
        );

  await saveContactLead(payload);

  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}
