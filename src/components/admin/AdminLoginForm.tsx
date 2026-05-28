"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Home, Lock, Mail, UserPlus } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";
  const [mode, setMode] = useState<"signin" | "create">("signin");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      setError(body?.error || "Unable to sign in.");
      setLoading(false);
      return;
    }

    router.push(next);
    router.refresh();
  }

  async function createAccount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    const body = await response.json().catch(() => null);
    setLoading(false);

    if (!response.ok) {
      setError(body?.error || "Unable to create the account request.");
      return;
    }

    setMode("signin");
    setMessage(body?.message || "Account request submitted for administrator approval.");
    event.currentTarget.reset();
    setShowPassword(false);
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-2 border border-white/10 bg-bg p-1">
        <button
          type="button"
          onClick={() => {
            setMode("signin");
            setError("");
          }}
          className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest transition ${
            mode === "signin" ? "bg-gold text-bg" : "text-muted hover:text-white"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("create");
            setError("");
          }}
          className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest transition ${
            mode === "create" ? "bg-gold text-bg" : "text-muted hover:text-white"
          }`}
        >
          Create Account
        </button>
      </div>

      <form onSubmit={mode === "signin" ? submit : createAccount} className="space-y-5">
        {mode === "create" && (
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
              <UserPlus className="h-3.5 w-3.5" />
              Full Name
            </span>
            <input
              name="name"
              required
              autoComplete="name"
              className="w-full border border-white/10 bg-bg px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
            />
          </label>
        )}

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
            <Mail className="h-3.5 w-3.5" />
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-white/10 bg-bg px-4 py-3 text-sm text-white outline-none transition focus:border-gold"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
            <Lock className="h-3.5 w-3.5" />
            Password
          </span>
          <div className="flex border border-white/10 bg-bg transition focus-within:border-gold">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={mode === "create" ? 8 : undefined}
              autoComplete={mode === "create" ? "new-password" : "current-password"}
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="flex w-12 items-center justify-center border-l border-white/10 text-muted transition hover:text-gold"
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        {message && (
          <p className="border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">{message}</p>
        )}
        {error && (
          <p className="border border-red/40 bg-red/10 px-4 py-3 text-sm text-red-soft">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold px-5 py-4 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft disabled:cursor-wait disabled:opacity-70"
        >
          {loading
            ? mode === "signin" ? "Signing In..." : "Submitting..."
            : mode === "signin" ? "Sign In Securely" : "Request Account"}
        </button>
      </form>

      <Link
        href="/"
        className="inline-flex w-full items-center justify-center gap-2 border border-gold/30 px-5 py-3 text-xs font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg"
      >
        <Home className="h-4 w-4" />
        Return to Main Website
      </Link>
    </div>
  );
}
