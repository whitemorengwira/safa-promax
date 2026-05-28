"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, LockKeyhole, Send } from "lucide-react";

type Mode = "login" | "signup";

export function SiteAccessAuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = useMemo(() => searchParams.get("next") || "/", [searchParams]);
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    setSubmitting(true);

    const endpoint = mode === "login" ? "/api/site-access/login" : "/api/site-access/request";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, organisation, email, password }),
    });
    const payload = await response.json().catch(() => null);
    setSubmitting(false);

    if (!response.ok) {
      setError(payload?.error || "Access could not be processed.");
      return;
    }

    if (mode === "login") {
      router.push(nextUrl);
      router.refresh();
      return;
    }

    setMessage(payload?.message || "Access request submitted for approval.");
    setName("");
    setOrganisation("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="w-full max-w-md border border-gold/20 bg-bg-deep/95 p-6 shadow-2xl">
      <div className="mb-6 flex border border-white/10 bg-black/30 p-1">
        <Link
          href={`/access/login${nextUrl !== "/" ? `?next=${encodeURIComponent(nextUrl)}` : ""}`}
          className={`flex-1 px-4 py-3 text-center text-xs font-black uppercase tracking-widest transition ${
            mode === "login" ? "bg-gold text-bg" : "text-muted hover:text-white"
          }`}
        >
          Sign In
        </Link>
        <Link
          href={`/access/signup${nextUrl !== "/" ? `?next=${encodeURIComponent(nextUrl)}` : ""}`}
          className={`flex-1 px-4 py-3 text-center text-xs font-black uppercase tracking-widest transition ${
            mode === "signup" ? "bg-gold text-bg" : "text-muted hover:text-white"
          }`}
        >
          Create Account
        </Link>
      </div>

      <form className="space-y-4" onSubmit={submit}>
        {mode === "signup" && (
          <>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted">
              Full Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full border border-white/10 bg-bg px-4 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
                required
              />
            </label>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted">
              Organisation
              <input
                value={organisation}
                onChange={(event) => setOrganisation(event.target.value)}
                className="mt-2 w-full border border-white/10 bg-bg px-4 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
              />
            </label>
          </>
        )}

        <label className="block text-xs font-bold uppercase tracking-widest text-muted">
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className="mt-2 w-full border border-white/10 bg-bg px-4 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
            required
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-widest text-muted">
          Password
          <span className="mt-2 flex border border-white/10 bg-bg focus-within:border-gold">
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={showPassword ? "text" : "password"}
              minLength={8}
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-white outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="grid w-12 place-items-center text-muted transition hover:text-gold"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </span>
        </label>

        {message && <p className="border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">{message}</p>}
        {error && <p className="border border-red/40 bg-red/10 px-4 py-3 text-sm text-red-100">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-4 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft disabled:cursor-wait disabled:opacity-70"
        >
          {mode === "login" ? <LockKeyhole className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          {submitting ? "Working..." : mode === "login" ? "Open Presentation" : "Create Account"}
        </button>
      </form>
      {mode === "signup" && (
        <p className="mt-4 text-center text-xs leading-relaxed text-muted">
          New accounts remain pending until a super admin approves presentation access.
        </p>
      )}
    </div>
  );
}
