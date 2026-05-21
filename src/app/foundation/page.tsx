import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Foundation · SA Film Academy Strategy',
  description: 'The structural core of the SA Film Academy: Organisation, Ecosystem, and Infrastructure.',
};

const SUB_PAGES = [
  {
    title: 'The Organisation',
    href: '/foundation/organisation',
    description: 'MICT SETA-accredited, 20 years of placement history and institutional memory.',
    image: '/images/ai/v2/foundation/org-hero.png'
  },
  {
    title: 'Brand Ecosystem',
    href: '/foundation/ecosystem',
    description: 'Five distinct entities unified under a single strategic architecture.',
    image: '/images/ai/v2/foundation/ecosystem-hero.png'
  },
  {
    title: 'Digital Infrastructure',
    href: '/foundation/infrastructure',
    description: 'The Cineterns portal and the proprietary digital presentation engine.',
    image: '/images/ai/v2/foundation/infra-hero.png'
  },
  {
    title: 'Brand Architecture',
    href: '/foundation/brand',
    description: 'Visual identity and brand family consolidation strategy.',
    image: '/images/ai/v2/foundation/brand-hero.png'
  }
];

export default function FoundationLanding() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* LOCKED HERO — DO NOT CHANGE */}
      <PageHero
        eyebrow="Pillar 01"
        title="The Foundation."
        subtitle="Structure. Ecosystem. Infrastructure."
        imageSrc="/images/main-hero-images/post-production-lab-black-creators.png"
        imageAlt="Black creators working in a cinematic post-production lab"
      />

      <FilmstripDivider />

      <SectionShell
        eyebrow="Overview"
        title="Explore the Foundation Sections"
        subtitle="Select a section below to dive into the structural strategy."
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
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready for the next pillar?</h2>
          <Link
            href="/visibility"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-10 py-5 hover:bg-gold-soft transition inline-block"
          >
            Next: Visibility Pillar →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
