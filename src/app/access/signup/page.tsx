import { Suspense } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { CmsAdminEntryCard } from "@/components/access/CmsAdminEntryCard";
import { SiteAccessAuthForm } from "@/components/access/SiteAccessAuthForm";
import { getSiteAccessSession } from "@/lib/site-access/auth";

export default async function SiteAccessSignupPage() {
  const session = await getSiteAccessSession();
  if (session) redirect("/");

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div className="absolute inset-0 bg-[url('/images/ai/foundation-ecosystem/stakeholder-roundtable.webp')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(212,175,55,0.12),transparent_55%),linear-gradient(180deg,#050810_0%,#0A1128_34%,#080808_100%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(135deg,transparent_40%,rgba(212,175,55,0.55)_40.5%,transparent_41%),linear-gradient(225deg,transparent_55%,rgba(212,175,55,0.35)_55.5%,transparent_56%)]" />
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
        <div className="mb-6 text-center">
          <Image src="/images/logos/sa-film-academy-logo.webp" alt="SA Film Academy" width={112} height={96} priority className="mx-auto h-24 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]" />
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-gold">Create Account</p>
          <h1 className="mt-4 text-4xl font-black leading-none text-gold md:text-5xl">Request Presentation Access</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Submit your details for review. A super admin will approve stakeholder access and allocate the correct role before the site opens.
          </p>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-5 lg:grid-cols-[minmax(0,430px)_320px] lg:items-start">
          <Suspense fallback={null}>
            <SiteAccessAuthForm mode="signup" />
          </Suspense>
          <CmsAdminEntryCard />
        </div>
      </section>
    </main>
  );
}
