import { Suspense } from "react";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/admin/auth";
import { isSuperAdmin } from "@/lib/admin/permissions";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect(isSuperAdmin(session.role) ? "/admin/super-admin" : "/admin");

  return (
    <div className="grid min-h-screen grid-cols-1 bg-bg lg:grid-cols-[1fr_520px]">
      <section className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 bg-[url('/images/ai/home/hero-crew-night-set.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/30 via-bg/70 to-bg" />
        <div className="relative z-10 flex h-full flex-col justify-end p-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">CMS Admin Studio</p>
          <p className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white">
            Secure marketing strategy control room.
          </p>
          <p className="mt-5 max-w-xl text-base text-muted">
            Sign in to edit pages, manage media, approve CMS users and prepare board-facing updates.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md border border-gold/20 bg-surface/60 p-8 shadow-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">CMS Admin Studio</p>
          <p className="mt-3 text-3xl font-black text-white">CMS Sign In or Request Access</p>
          <p className="mb-8 mt-3 text-sm leading-relaxed text-muted">
            This area is only for approved SAFA CMS editors and administrators. Board members and stakeholders should use the presentation sign-in.
          </p>
          <Suspense>
            <AdminLoginForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
