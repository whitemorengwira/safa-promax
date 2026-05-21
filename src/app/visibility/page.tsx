import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Visibility · SA Film Academy Strategy',
  description: 'How the world sees SAFA: SEO, Content, and Institutional Leadership.',
};

const SUB_PAGES = [
  {
    title: '12-Month Calendar',
    href: '/visibility/calendar',
    description: 'A phased roadmap for foundation, visibility, authority, and scale.',
    image: '/images/ai/v2/visibility/calendar-hero.png'
  },
  {
    title: 'SEO & AI SEO',
    href: '/visibility/seo',
    description: 'Optimising for the search engines of today and the AI engines of tomorrow.',
    image: '/images/ai/v2/visibility/seo-hero.png'
  },
  {
    title: 'Institutional Voice',
    href: '/visibility/leadership',
    description: 'Leveraging executive visibility to drive institutional authority.',
    image: '/images/ai/v2/visibility/ceo-podium.png'
  },
  {
    title: 'Content Marketing',
    href: '/visibility/content',
    description: 'The editorial engine, storytelling, and the Academy podcast.',
    image: '/images/ai/v2/visibility/content-hero.png'
  }
];

export default function VisibilityLanding() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* LOCKED HERO — DO NOT CHANGE */}
      <PageHero
        eyebrow="Pillar 02"
        title="The Visibility Pillar."
        subtitle="How the world sees SAFA: A strategic approach to SEO, Content Marketing, and Institutional Leadership."
        imageSrc="/images/ai/v2/road-home-training-red-visual.png"
        imageAlt="Cinematic visibility and media visual"
      />

      <FilmstripDivider />

      <SectionShell
        eyebrow="Overview"
        title="Explore the Visibility Sections"
        subtitle="Select a section below to dive into the market presence strategy."
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
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready for the growth engine?</h2>
          <Link
            href="/growth"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-10 py-5 hover:bg-gold-soft transition inline-block"
          >
            Next: Growth Engine Pillar →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
