import Link from 'next/link';
import { HERO } from '@/lib/content/sections';
import { pageData } from '@/lib/content/pageData';
import { strategySections } from '@/data/nav';
import { WordReveal } from '@/components/motion/WordReveal';
import { Reveal } from '@/components/motion/Reveal';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { StatBand } from '@/components/sections/StatBand';
import { CardGrid } from '@/components/sections/CardGrid';
import { PageHero } from '@/components/layout/PageHero';
import { StakeholderPaths } from '@/components/sections/StakeholderPaths';
import { ProductionCredits } from '@/components/sections/ProductionCredits';

export default function HomePage() {
  // Get 6 featured strategy sections for the index grid
  const featuredSlugs = ['organisation', 'agentic-ai', 'seo', 'brand', 'positioning', 'implementation'];
  const featuredSections = featuredSlugs
    .map((slug) => {
      const navItem = strategySections.find((s) => s.href === `/strategy/${slug}`);
      return { slug, navItem };
    })
    .filter((item) => item.navItem);

  // Get ecosystem cards
  const ecosystemCards = pageData['ecosystem']?.cards || [];

  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* ===== FULL-VIEWPORT HERO ===== */}
      <PageHero
        eyebrow="Est. 2006 · Non-Profit Company"
        title="SA Film Academy"
        subtitle="Talent Pipeline of the South African Screen"
        imageSrc="/images/ai/v2/safa-hero-red-cinematic-black-trainees.png"
        imageAlt="Professional Black South African film crew on a cinematic movie set"
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href="/foundation/organisation"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition"
          >
            Explore the Strategy
          </Link>

          <a
            href={process.env.NEXT_PUBLIC_CINETERNS_URL || 'https://cineterns.vercel.app/'}
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-bg transition"
          >
            Access Cineterns →
          </a>
        </div>
      </PageHero>

      <FilmstripDivider />

      {/* ===== STATS BAND ===== */}
      <StatBand
        metrics={[
          {
            label: 'Investment',
            figure: '60',
            prefix: 'R',
            suffix: 'm+',
            description: 'Total training investment facilitated since inception.'
          },
          {
            label: 'Trainees',
            figure: '1200',
            suffix: '+',
            description: 'Black South African youth placed into professional production roles.'
          },
          {
            label: 'Success Rate',
            figure: '85',
            suffix: '%',
            description: 'Of Tier 2 trainees transition into full-time industry employment.'
          }
        ]}
      />

      <FilmstripDivider />

      {/* ===== STAKEHOLDER ENTRY PATHS ===== */}
      <StakeholderPaths />

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
              src="/images/ai/safa-ecosystem-bg.png"
              alt="SA Film Academy Ecosystem"
              brief="Macro close-up of a professional film clapperboard with gold light reflections"
              orientation="landscape"
              className="rounded-sm overflow-hidden shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===== STRATEGY GRID ===== */}
      <section className="section-padding bg-surface/30">
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
                  src="/images/ai/safa-org-hero.png"
                  alt="Foundation"
                  brief="Professional Black female executive on set"
                  orientation="portrait"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">1. Foundation</h3>
              <p className="text-sm text-muted">The structural core: Organisation, Ecosystem, and Infrastructure.</p>
            </Link>

            <Link href="/visibility/calendar" className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImagePlaceholder
                  src="/images/ai/safa-calendar-hero.png"
                  alt="Visibility"
                  brief="Abstract four-phase timeline in gold light"
                  orientation="portrait"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">2. Visibility</h3>
              <p className="text-sm text-muted">The market presence: SEO, Content, and Leadership.</p>
            </Link>

            <Link href="/growth/agentic-ai" className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImagePlaceholder
                  src="/images/ai/safa-ai-hero.png"
                  alt="Growth"
                  brief="Abstract orbital AI system"
                  orientation="portrait"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">3. Growth</h3>
              <p className="text-sm text-muted">The engine: Agentic AI, B-BBEE, and Partnerships.</p>
            </Link>

            <Link href="/delivery/implementation" className="group space-y-4">
              <div className="aspect-[4/5] overflow-hidden relative">
                <ImagePlaceholder
                  src="/images/ai/safa-impl-hero.png"
                  alt="Delivery"
                  brief="Film crew launching into action"
                  orientation="portrait"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors">4. Delivery</h3>
              <p className="text-sm text-muted">The results: Curriculum, Community, and KPIs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CINETERNS CTA ===== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            src="/images/ai/safa-cineterns-card.png"
            alt="Cineterns Portal"
            brief="Young Black creative professional using a laptop"
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
              text="Access the _Cineterns_ Portal."
              className="mb-8"
            />
            <p className="text-xl text-muted mb-10 leading-relaxed">
              Connect with over 500 MICT SETA-trained film and digital media professionals. Our AI-driven matching engine ensures the right talent for every production.
            </p>
            <a
              href="https://cineterns.vercel.app/"
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
