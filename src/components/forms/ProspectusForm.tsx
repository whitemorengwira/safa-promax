"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export function ProspectusForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/download-prospectus", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    setLoading(false);

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      setMessage(body?.error || "The prospectus could not be prepared.");
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "safa-partnership-prospectus.pdf";
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Prospectus prepared.");
  }

  return (
    <form onSubmit={submit} className="space-y-5 border border-gold/20 bg-surface/50 p-6 md:p-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field name="name" label="Full Name" required />
        <Field name="email" label="Email Address" type="email" required />
      </div>
      <Field name="organisation" label="Organisation" required />
      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gold">Primary Role</span>
        <select name="role" required className="w-full border border-white/10 bg-bg px-4 py-3 text-sm text-white outline-none focus:border-gold">
          <option value="">Select an option</option>
          <option value="production-company">Production Company</option>
          <option value="funder">Funder or Partner</option>
          <option value="trainee">Trainee or Practitioner</option>
          <option value="board">Board or Governance</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 bg-gold px-5 py-4 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft disabled:cursor-wait disabled:opacity-70"
      >
        <Download className="h-4 w-4" />
        {loading ? "Preparing..." : "Download Prospectus"}
      </button>
      {message && <p className="text-sm text-gold-soft">{message}</p>}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gold">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-white/10 bg-bg px-4 py-3 text-sm text-white outline-none focus:border-gold"
      />
    </label>
  );
}
