import { Suspense } from "react";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminSession } from "@/lib/admin/auth";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session) redirect("/admin");

  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#f4f5f7] text-[#111827] lg:grid-cols-[1fr_460px]">
      <section className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 bg-[url('/images/main-hero-images/safa-hero-red-cinematic-black-trainees.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/55 to-[#f4f5f7]" />
        <div className="relative z-10 flex h-full flex-col justify-end p-16 text-white">
          <p className="text-sm font-semibold text-[#e0c268]">SA Film Academy</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white">
            CMS editor workspace.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Supabase Auth protects the editor, drafts remain unpublished until release, and published changes move through GitHub for Vercel deployment.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md border border-slate-200 bg-white p-8 shadow-xl">
          <p className="text-sm font-semibold text-[#1769ff]">Admin Portal</p>
          <h2 className="mt-3 text-3xl font-black text-[#111827]">Sign in securely</h2>
          <p className="mb-8 mt-3 text-sm leading-relaxed text-slate-600">
            Use an approved Supabase editor or super admin account.
          </p>
          <Suspense>
            <AdminLoginForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
