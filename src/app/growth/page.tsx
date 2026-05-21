import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Growth Engine · SA Film Academy Strategy',
  description: 'Where revenue is generated: Agentic AI, B-BBEE, and Partnerships.',
};

const SUB_PAGES = [
  {
    title: 'Agentic AI Engine',
    href: '/growth/agentic-ai',
    description: 'Five autonomous workflows driving a weekly marketing cadence.',
    image: '/images/ai/v2/growth/agentic-hero.png'
  },
  {
    title: 'B-BBEE & Skills Levy',
    href: '/growth/commercial',
    description: 'The commercial strategy for the 1% levy and 20% claim-back.',
    image: '/images/ai/v2/growth/commercial-hero.png'
  },
  {
    title: 'Partnerships & PR',
    href: '/growth/partnerships',
    description: 'Strategic alliances with Suzuki, Netflix, NFVF and beyond.',
    image: '/images/ai/v2/growth/part-hero.png'
  },
  {
    title: 'Competitive Positioning',
    href: '/growth/positioning',
    description: 'Six dimensions on which the SA Film Academy wins.',
    image: '/images/ai/v2/growth/pos-hero.png'
  }
];

export default function GrowthLanding() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* LOCKED HERO — DO NOT CHANGE */}
      <PageHero
        eyebrow="Pillar 03"
        title="The Growth Engine."
        subtitle="Where revenue is generated and impact is scaled: Agentic AI, B-BBEE Compliance, and Strategic Partnerships."
        imageSrc="/images/ai/v2/growth-hero-new.png"
        imageAlt="Film academy infographic with Black professionals"
      />

      <FilmstripDivider />

      <SectionShell
        eyebrow="Overview"
        title="Explore the Growth Sections"
        subtitle="Select a section below to dive into the revenue and scale strategy."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {SUB_PAGES.map((page) => (
            <Link 
              key={page.href} 
              href={page.href}
              className="group relative aspect-video overflow-hidden rounded-sm border border-white/10 hover:border-gold/30 transition-colors"
            >
              <div className="absolute inset-0 z-0">
                <ImagePlaceholder
                  src={page.image}
                  alt={page.title}
                  brief={page.description}
                  orientation="video"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-display italic text-white mb-2 group-hover:text-gold transition-colors tracking-tight">
                  {page.title}
                </h3>
                <p className="text-muted text-sm max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {page.description}
                </p>
              </div>
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold font-display text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>

      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready for the delivery pillar?</h2>
          <Link
            href="/delivery"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-10 py-5 hover:bg-gold-soft transition inline-block"
          >
            Next: Delivery Pillar →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
