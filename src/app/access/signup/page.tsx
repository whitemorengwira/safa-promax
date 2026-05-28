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
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="mb-5 text-center">
          <Image src="/images/logos/sa-film-academy-logo.webp" alt="SA Film Academy" width={96} height={82} priority className="mx-auto h-20 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]" />
          <div className="mt-4 text-[10px] font-black uppercase leading-none tracking-[0.35em] text-gold">Create Account</div>
          <h1 className="mx-auto mt-4 max-w-4xl font-display font-black text-gold" style={{ fontSize: "clamp(2.5rem, 4.2vw, 4.8rem)", lineHeight: "0.98" }}>
            Request Presentation Access
          </h1>
          <div className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted">
            Submit your details for review. A super admin will approve stakeholder access and allocate the correct role before the site opens.
          </div>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 lg:grid-cols-[minmax(0,430px)_300px] lg:items-start lg:justify-center">
          <Suspense fallback={null}>
            <SiteAccessAuthForm mode="signup" />
          </Suspense>
          <CmsAdminEntryCard />
        </div>
      </section>
    </main>
  );
}
