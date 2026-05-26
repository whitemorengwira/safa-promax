import { promises as fs } from "fs";
import path from "path";

type LeadPayload = Record<string, string>;

async function appendJsonLine(fileName: string, payload: LeadPayload) {
  const dir = process.env.VERCEL
    ? path.join("/tmp", "safa-promax-leads")
    : path.join(process.cwd(), "data", "leads");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(
    path.join(dir, fileName),
    `${JSON.stringify({ ...payload, createdAt: new Date().toISOString() })}\n`,
    "utf8",
  );
}

export async function saveContactLead(payload: LeadPayload) {
  await appendJsonLine("contact-submissions.jsonl", payload);
}

export async function saveProspectusLead(payload: LeadPayload) {
  await appendJsonLine("prospectus-downloads.jsonl", payload);
}
