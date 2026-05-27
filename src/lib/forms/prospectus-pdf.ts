function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

export function createProspectusPdf() {
  const lines = [
    "SA Film Academy 360 Marketing Strategy",
    "Partnership Prospectus",
    "",
    "Where Industry Meets Opportunity.",
    "",
    "This board-facing prospectus summarises the strategic routes for production companies, funders, partners and trainees.",
    "It covers the Foundation, Visibility, Growth Engine, Delivery, Smart Tools and SA Film Interns talent portal ecosystem.",
    "",
    "Core partnership themes:",
    "1. MICT SETA-aligned skills development and placement administration.",
    "2. B-BBEE and Skills Levy value for production-company partners.",
    "3. GreenSet, FILMGRO, ACE and SA Film Interns as a coherent brand family.",
    "4. Agentic AI support for content, matching, reporting and funding discovery.",
    "5. Board-level reporting through dashboards, KPIs and risk governance.",
    "",
    "For the full live strategy, visit https://safa-promax.vercel.app/.",
  ];

  const text = lines
    .map((line, index) => `BT /F1 ${index === 0 ? 20 : 11} Tf 54 ${760 - index * 24} Td (${escapePdfText(line)}) Tj ET`)
    .join("\n");

  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    `5 0 obj << /Length ${Buffer.byteLength(text)} >> stream\n${text}\nendstream endobj`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (const object of objects) {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${object}\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, "utf8");
}
