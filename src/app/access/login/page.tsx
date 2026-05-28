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
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="mb-5 text-center">
          <Image src="/images/logos/sa-film-academy-logo.webp" alt="SA Film Academy" width={96} height={82} priority className="mx-auto h-20 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]" />
          <div className="mt-4 text-[10px] font-black uppercase leading-none tracking-[0.35em] text-gold">Invitation Only</div>
          <h1 className="mt-4 font-display font-black text-gold" style={{ fontSize: "clamp(3rem, 5vw, 5.8rem)", lineHeight: "0.95" }}>
            SA Film Academy
          </h1>
          <div className="mt-3 font-display text-lg italic leading-none text-white md:text-xl">360 Marketing Strategy</div>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 lg:grid-cols-[minmax(0,430px)_300px] lg:items-start lg:justify-center">
          <Suspense fallback={null}>
            <SiteAccessAuthForm mode="login" />
          </Suspense>
          <CmsAdminEntryCard />
        </div>

        <div className="mt-7 text-center">
          <div className="text-xs leading-6 text-muted">By invitation only - SA Film Academy board and stakeholder presentation</div>
          <a href="https://safilmacademy.org" target="_blank" rel="noopener" className="mt-2 inline-flex text-xs font-bold tracking-widest text-gold underline underline-offset-4">
            safilmacademy.org
          </a>
        </div>
      </section>
    </main>
  );
}
