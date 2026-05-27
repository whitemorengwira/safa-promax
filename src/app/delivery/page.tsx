import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Delivery · SA Film Academy Strategy',
  description: 'Measurable, accountable results: Community, Curriculum, and KPIs.',
};

const SUB_PAGES = [
  {
    title: 'Community & Alumni',
    href: '/delivery/community',
    description: 'The four-tier career-progression model for industry citizens.',
    image: '/images/ai/v2/delivery/comm-hero.png'
  },
  {
    title: 'AI in Curriculum',
    href: '/delivery/curriculum',
    description: 'Masterclasses in Veo, Kling, Hailuo, and Runway.',
    image: '/images/ai/v2/delivery/curriculum-hero.png'
  },
  {
    title: 'KPI Dashboard',
    href: '/delivery/kpis',
    description: '16 indicators, baselines, and 12-month targets.',
    image: '/images/ai/v2/delivery/kpi-hero.png'
  },
  {
    title: 'Budget Framework',
    href: '/delivery/budget',
    description: 'Monthly subscription, transparent operating-expense line.',
    image: '/images/ai/v2/budget/budget-hero.png'
  },
  {
    title: 'Implementation',
    href: '/delivery/implementation',
    description: 'Three tracks, 30 days, and concrete results.',
    image: '/images/ai/v2/delivery/impl-hero.png'
  }
];

export default function DeliveryLanding() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* LOCKED HERO — DO NOT CHANGE */}
      <PageHero
        eyebrow="Pillar 04"
        title="The Delivery Pillar."
        subtitle="Measurable, accountable results that drive the Academy forward: Community Engagement, AI Curriculum, and KPI Tracking."
        imageSrc="/images/ai/v2/delivery/impl-hero.png"
        imageAlt="Delivery pillar and results visual"
      />

      <FilmstripDivider />

      <SectionShell
        eyebrow="Overview"
        title="Explore the Delivery Sections"
        subtitle="Select a section below to dive into the results and implementation strategy."
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
          <h2 className="font-display text-3xl md:text-4xl mb-8">Back to the start?</h2>
          <Link
            href="/"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-10 py-5 hover:bg-gold-soft transition inline-block"
          >
            Return to Homepage →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
