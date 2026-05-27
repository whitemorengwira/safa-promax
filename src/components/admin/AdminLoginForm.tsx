"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

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

  return (
    <div className="space-y-5">
      <form onSubmit={submit} className="space-y-5">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-600">
            <Mail className="h-3.5 w-3.5" />
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#1769ff]"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-600">
            <Lock className="h-3.5 w-3.5" />
            Password
          </span>
          <div className="flex border border-slate-200 bg-white transition focus-within:border-[#1769ff]">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#111827] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="flex w-12 items-center justify-center border-l border-slate-200 text-slate-500 transition hover:text-[#1769ff]"
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        {error && (
          <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1769ff] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#0d56d9] disabled:cursor-wait disabled:opacity-70"
        >
          {loading ? "Signing in..." : "Sign in securely"}
        </button>
      </form>
    </div>
  );
}
