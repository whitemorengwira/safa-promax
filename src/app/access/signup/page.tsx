import { Suspense } from "react";
import { redirect } from "next/navigation";
import { SiteAccessAuthForm } from "@/components/access/SiteAccessAuthForm";
import { getSiteAccessSession } from "@/lib/site-access/auth";

export default async function SiteAccessSignupPage() {
  const session = await getSiteAccessSession();
  if (session) redirect("/");

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div className="absolute inset-0 bg-[url('/images/ai/foundation-ecosystem/stakeholder-roundtable.webp')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/55" />
      <section className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_480px] lg:px-16">
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gold">Request Access</p>
          <h1 className="mt-5 text-5xl font-black leading-none md:text-7xl">Board-safe, controlled access.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Submit your details for review. A super admin will approve stakeholder access and allocate the correct role.
          </p>
        </div>
        <Suspense fallback={null}>
          <SiteAccessAuthForm mode="signup" />
        </Suspense>
      </section>
    </main>
  );
}
