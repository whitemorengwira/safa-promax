import { Suspense } from "react";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/admin/auth";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin/dashboard");

  return (
    <div className="grid min-h-screen grid-cols-1 bg-bg lg:grid-cols-[1fr_520px]">
      <section className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 bg-[url('/images/ai/home/hero-crew-night-set.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/30 via-bg/70 to-bg" />
        <div className="relative z-10 flex h-full flex-col justify-end p-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">SA Film Academy</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white">
            Secure marketing strategy control room.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted">
            Sign in to edit pages, manage media, approve changes and prepare board-facing updates.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md border border-gold/20 bg-surface/60 p-8 shadow-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Admin Portal</p>
          <h2 className="mt-3 text-3xl font-black text-white">Sign In or Request Access</h2>
          <p className="mb-8 mt-3 text-sm leading-relaxed text-muted">
            Access is password-protected and tied to approved administrator roles.
          </p>
          <Suspense>
            <AdminLoginForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
