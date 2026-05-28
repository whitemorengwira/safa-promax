import { Suspense } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { CmsAdminEntryCard } from "@/components/access/CmsAdminEntryCard";
import { SiteAccessAuthForm } from "@/components/access/SiteAccessAuthForm";
import { getSiteAccessSession } from "@/lib/site-access/auth";

export default async function SiteAccessLoginPage() {
  const session = await getSiteAccessSession();
  if (session) redirect("/");

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div className="absolute inset-0 bg-[url('/images/main-hero-images/safa-hero-red-cinematic-black-trainees.png')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(212,175,55,0.12),transparent_55%),linear-gradient(180deg,#050810_0%,#0A1128_34%,#080808_100%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(135deg,transparent_40%,rgba(212,175,55,0.55)_40.5%,transparent_41%),linear-gradient(225deg,transparent_55%,rgba(212,175,55,0.35)_55.5%,transparent_56%)]" />
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
        <div className="mb-6 text-center">
          <Image src="/images/logos/sa-film-academy-logo.webp" alt="SA Film Academy" width={112} height={96} priority className="mx-auto h-24 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]" />
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-gold">Invitation Only</p>
          <h1 className="mt-4 text-4xl font-black leading-none text-gold md:text-5xl">SA Film Academy</h1>
          <p className="mt-2 font-display text-xl italic text-white">360 Marketing Strategy</p>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-5 lg:grid-cols-[minmax(0,430px)_320px] lg:items-start">
          <Suspense fallback={null}>
            <SiteAccessAuthForm mode="login" />
          </Suspense>
          <CmsAdminEntryCard />
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted">By invitation only - SA Film Academy board and stakeholder presentation</p>
          <a href="https://safilmacademy.org" target="_blank" rel="noopener" className="mt-2 inline-flex text-xs font-bold tracking-widest text-gold underline underline-offset-4">
            safilmacademy.org
          </a>
        </div>
      </section>
    </main>
  );
}
