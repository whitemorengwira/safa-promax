import { Suspense } from "react";
import { redirect } from "next/navigation";
import { SiteAccessAuthForm } from "@/components/access/SiteAccessAuthForm";
import { getSiteAccessSession } from "@/lib/site-access/auth";

export default async function SiteAccessLoginPage() {
  const session = await getSiteAccessSession();
  if (session) redirect("/");

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div className="absolute inset-0 bg-[url('/images/ai/home/hero-crew-night-set.webp')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/55" />
      <section className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_480px] lg:px-16">
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gold">Invitation Only</p>
          <h1 className="mt-5 text-5xl font-black leading-none md:text-7xl">SA Film Academy Strategy</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            This board and stakeholder presentation is protected. Sign in with an approved account to continue.
          </p>
        </div>
        <Suspense fallback={null}>
          <SiteAccessAuthForm mode="login" />
        </Suspense>
      </section>
    </main>
  );
}
