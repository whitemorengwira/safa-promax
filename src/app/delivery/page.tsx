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
    image: '/images/ai/safa-community-hero.png',
    id: 'SAFA-IMG-140'
  },
  {
    title: 'AI in Curriculum',
    href: '/delivery/curriculum',
    description: 'Masterclasses in Veo, Kling, Hailuo, and Runway.',
    image: '/images/ai/safa-curriculum-hero.png',
    id: 'SAFA-IMG-150'
  },
  {
    title: 'KPI Dashboard',
    href: '/delivery/kpis',
    description: '16 indicators, baselines, and 12-month targets.',
    image: '/images/ai/safa-kpi-hero.png',
    id: 'SAFA-IMG-160'
  },
  {
    title: 'Budget Framework',
    href: '/delivery/budget',
    description: 'Monthly subscription, transparent operating-expense line.',
    image: '/images/ai/safa-budget-hero.png',
    id: 'SAFA-IMG-170'
  },
  {
    title: 'Implementation',
    href: '/delivery/implementation',
    description: 'Three tracks, 30 days, and concrete results.',
    image: '/images/ai/safa-impl-hero.png',
    id: 'SAFA-IMG-180'
  }
];

export default function DeliveryLanding() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      <PageHero
        eyebrow="Pillar 04"
        title="The _Delivery_ Pillar."
        subtitle="Measurable, accountable results that drive the Academy forward: Community Engagement, AI Curriculum, and KPI Tracking."
        imageSrc="/images/ai/delivery-implementation/milestone-monitor.webp"
        imageAlt="Delivery pillar and results visual"
      />

      <FilmstripDivider />

      <SectionShell
        eyebrow="Overview"
        title="Explore the _Delivery_ Sections"
        subtitle="Select a section below to dive into the results and implementation strategy."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {SUB_PAGES.map((page) => (
            <Link 
              key={page.href} 
              href={page.href}
              className="group relative aspect-video overflow-hidden rounded-sm border border-white/10 hover:border-red-600 transition-colors"
            >
              <div className="absolute inset-0 z-0">
                <ImagePlaceholder
                  id={page.id}
                  src={page.image}
                  alt={page.title}
                  brief={page.description}
                  orientation="video"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-red-600 transition-colors uppercase tracking-tighter">
                  {page.title}
                </h3>
                <p className="text-muted text-sm max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {page.description}
                </p>
              </div>
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-red-600 font-black text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>

      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8 font-black uppercase tracking-tighter text-4xl">Back to the start?</h2>
          <Link
            href="/"
            className="font-body text-xs font-black uppercase tracking-widest bg-red-600 text-white px-10 py-5 hover:bg-red-700 transition inline-block shadow-xl shadow-red-600/20"
          >
            Return to Homepage →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
