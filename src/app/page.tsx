import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { WordReveal } from '@/components/motion/WordReveal';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { StatBand } from '@/components/sections/StatBand';
import { PageHero } from '@/components/layout/PageHero';
import { StakeholderPaths } from '@/components/sections/StakeholderPaths';
import { ProductionCredits } from '@/components/sections/ProductionCredits';
import { getCmsPageByRoute } from '@/lib/cms/server';
import { AudienceFunnelSection, BoardCompletionAssuranceSection, ExecutiveSummarySection } from '@/components/strategy/BoardStrategySections';

export default async function HomePage() {
  const cmsHome = await getCmsPageByRoute("/");
  const stripHtml = (value: string) => value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const heroTitle = cmsHome?.hero.headline ? stripHtml(cmsHome.hero.headline) : "SA Film Academy";
  const heroSubtitle = cmsHome?.hero.subheadline ? stripHtml(cmsHome.hero.subheadline) : "Talent Pipeline of the South African Screen";
  const heroImage = cmsHome?.hero.backgroundImage ?? "/images/main-hero-images/safa-hero-red-cinematic-black-trainees.png";
  const saFilmInternsUrl =
    process.env.NEXT_PUBLIC_SA_FILM_INTERNS_URL ||
    process.env.NEXT_PUBLIC_CINETERNS_URL ||
    'https://cineterns.vercel.app/';

  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* ===== FULL-VIEWPORT HERO ===== */}
      {/* LOCKED HERO — DO NOT CHANGE */}
      <PageHero
        eyebrow="Est. 2006 · Non-Profit Company"
        title={heroTitle}
        subtitle={heroSubtitle}
        imageSrc={heroImage}
        imageAlt={cmsHome?.hero.altText ?? "Professional Black South African film crew on a cinematic movie set"}
      >
        <div className="flex flex-wrap gap-4">
                      <Link href="/foundation/organisation"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition"
          >
            Explore the Strategy
          </Link>

          <a
            href={saFilmInternsUrl}
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-bg transition"
          >
            Access SA Film Interns →
          </a>
        </div>
      </PageHero>

      <FilmstripDivider />

      <ExecutiveSummarySection />

      <BoardCompletionAssuranceSection />

      {/* ===== PLAIN-ENGLISH SUMMARY & JARGON DEFINITIONS ===== */}
      <section className="section-padding bg-surface/20">
        <div className="container-max max-w-3xl">
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-2xl font-display text-text">What is SA Film Academy?</h2>
                <p className="text-lg leading-relaxed text-muted">
                  SA Film Academy is a 20-year-old non-profit organisation that trains South African youth for careers in film and digital media production, then places them directly into professional production roles with major studios and broadcasters.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-gold font-semibold">Key Terms Explained</h3>
                <div className="space-y-3 text-sm">
                  <div className="grid gap-1 sm:flex sm:gap-4">
                    <span className="font-semibold text-gold min-w-fit">MICT SETA:</span>
                    <span className="text-muted">Media, Information and Communication Technologies Sector Education and Training Authority — the government body that funds skills development in South Africa's film and media sector.</span>
                  </div>
                  <div className="grid gap-1 sm:flex sm:gap-4">
                    <span className="font-semibold text-gold min-w-fit">Skills Levy:</span>
                    <span className="text-muted">A 1% payroll-linked levy that qualifying employers pay to support skills development, with grant recovery pathways available where current SETA rules and evidence requirements are met.</span>
                  </div>
                  <div className="grid gap-1 sm:flex sm:gap-4">
                    <span className="font-semibold text-gold min-w-fit">B-BBEE:</span>
                    <span className="text-muted">Broad-Based Black Economic Empowerment — South African policy requiring companies to demonstrate commitment to skills development and Black employment.</span>
                  </div>
                  <div className="grid gap-1 sm:flex sm:gap-4">
                    <span className="font-semibold text-gold min-w-fit">SPV:</span>
                    <span className="text-muted">Special Purpose Vehicle — a separate legal entity created to manage specific projects or revenue streams, used here for production finance.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== STATS BAND ===== */}
      <StatBand
        metrics={[
          {
            label: 'Investment',
            figure: '60',
            prefix: 'R',
            suffix: 'm+',
            description: 'Invested in skills development and in-service training since 2006.'
          },
          {
            label: 'Trainees',
            figure: '3000',
            suffix: '+',
            description: 'Trainees placed into professional film and digital media production roles.'
          },
          {
            label: 'Student Base',
            figure: '96',
            suffix: '%',
            description: 'Black student base reported through SETA-submitted training records.'
          },
          {
            label: 'Licences',
            figure: '124',
            description: 'Driving licences granted free through the FILMGRO pathway.'
          }
        ]}
      />

      <FilmstripDivider />

      {/* ===== STAKEHOLDER ENTRY PATHS ===== */}
      <StakeholderPaths />

      <AudienceFunnelSection />

      {/* ===== PRODUCTION CREDITS ===== */}
      <ProductionCredits />

      {/* ===== ECOSYSTEM PREVIEW ===== */}
      <section className="section-padding container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="eyebrow">01 · The Ecosystem</span>
            <WordReveal
              tag="h2"
              text="A Unified _Architecture_ for Talent Growth."
            />
            <p className="text-lg leading-relaxed text-muted">
              The SA Film Academy is more than a training programme. It is a comprehensive ecosystem of five distinct entities, each serving a critical role in the South African film and digital media talent pipeline.
            </p>
            <div className="pt-4">
              <Link
                href="/foundation/ecosystem"
                className="font-body text-xs font-semibold uppercase tracking-widest border-b-2 border-gold text-gold pb-2 hover:text-gold-soft transition"
              >
                View the Ecosystem Map →
              </Link>
            </div>
          </div>
          <div className="relative">
            <ImagePlaceholder
              src="/images/ai/v3/foundation/ecosystem-hero.webp"
              alt="SA Film Academy Ecosystem"
              brief="Macro close-up of a professional film clapperboard with gold light reflections"
              orientation="landscape"
              className="rounded-sm overflow-hidden shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===== STRATEGY GRID ===== */}
      <section id="strategy-pillars" className="section-padding bg-surface/30">
        <div className="container-max">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="eyebrow mb-6 block">The 360° Strategy</span>
            <WordReveal
              tag="h2"
              text="Four Pillars of _Transformation._"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/foundation/organisation" className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImagePlaceholder
                  src="/images/ai/v3/foundation/organisation-hero.webp"
                  alt="Foundation"
                  brief="Professional Black female executive on set"
                  orientation="landscape"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">1. Foundation</h3>
              <p className="text-sm text-muted">The structural core: Organisation, Ecosystem, and Infrastructure.</p>
            </Link>

            <Link href="/visibility/calendar" className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImagePlaceholder
                  src="/images/ai/visibility-calendar/filming-schedule-monitor.webp"
                  alt="Visibility"
                  brief="Photorealistic 12-month strategy timeline dashboard on a professional monitor"
                  orientation="landscape"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">2. Visibility</h3>
              <p className="text-sm text-muted">The market presence: SEO, Content, and Leadership.</p>
            </Link>

            <Link href="/growth/agentic-ai" className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImagePlaceholder
                  src="/images/ai/smart-tools/tools-hero-professional.webp"
                  alt="Growth"
                  brief="Photorealistic AI workflow dashboard on a professional computer screen"
                  orientation="landscape"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">3. Growth Engine</h3>
              <p className="text-sm text-muted">The engine: Agentic AI, B-BBEE, and Partnerships.</p>
            </Link>

            <Link href="/delivery/implementation" className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImagePlaceholder
                  src="/images/ai/v3/delivery/delivery-hero.webp"
                  alt="Delivery"
                  brief="Film crew launching into action"
                  orientation="landscape"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">4. Delivery</h3>
              <p className="text-sm text-muted">The results: Curriculum, Community, and KPIs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TALENT PORTAL CTA ===== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            src="/images/ai/smart-tools/profile-cards-screen.webp"
            alt="SA Film Interns Talent Portal"
            brief="Photorealistic talent portal dashboard with profile cards on a professional computer monitor"
            orientation="video"
            className="w-full h-full opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10" />

        <div className="relative z-20 container-max">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6 block">Live Platform</span>
            <WordReveal
              tag="h2"
              text="Access the _SA Film Interns_ Portal."
              className="mb-8"
            />
            <p className="text-xl text-muted mb-10 leading-relaxed">
              Connect with over 500 MICT SETA-trained film and digital media professionals. Our AI-driven matching engine ensures the right talent for every production.
            </p>
            <a
              href={saFilmInternsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-10 py-5 hover:bg-gold-soft transition inline-block"
            >
              Enter the Portal →
            </a>
          </div>
        </div>
      </section>

      <FilmstripDivider />
    </main>
  );
}
