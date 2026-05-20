import Link from 'next/link';
import { HERO, sectionIndex } from '@/lib/content/sections';
import { pageData } from '@/lib/content/pageData';
import { strategySections } from '@/data/nav';
import { WordReveal } from '@/components/motion/WordReveal';
import { Reveal } from '@/components/motion/Reveal';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { StatBand } from '@/components/sections/StatBand';
import { CardGrid } from '@/components/sections/CardGrid';
import { SvgStage } from '@/components/visuals/SvgStage';

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
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen -mt-[72px] md:-mt-[80px] pt-[72px] md:pt-[80px] overflow-hidden">
        {/* Full-bleed background */}
        <ImagePlaceholder
          alt="SA Film Academy — professional South African film crew on set"
          brief="South African film production set, professional Black crew members, cinematic lighting, wide angle, documentary style"
          orientation="video"
          className="absolute inset-0 w-full h-full"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/50 to-bg/95" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen container-max pb-20 md:pb-32">
          {/* Ribbon */}
          <span className="eyebrow mb-6">
            <span className="num">MICT SETA Accredited · Est. 2006 · Non-Profit Company</span>
          </span>

          {/* H1 with inline italic */}
          <WordReveal
            tag="h1"
            text="SA Film Academy _— Talent Pipeline of the South African Screen._"
            className="mb-6 max-w-5xl"
          />

          {/* Lead */}
          <Reveal className="mb-10">
            <p className="font-display-alt italic text-gold-soft text-xl md:text-2xl max-w-2xl leading-relaxed">
              {HERO.lead}
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/strategy/organisation"
                className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-6 py-3 hover:bg-gold-soft transition"
              >
                Explore the Strategy
              </Link>

              <a
                href={process.env.NEXT_PUBLIC_CINETERNS_URL || '#'}
                target="_blank"
                rel="noreferrer"
                className="font-body text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-bg transition"
              >
                Access Cineterns →
              </a>
            </div>
          </Reveal>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
            <span className="font-body text-[10px] tracking-widest uppercase text-muted">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
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
            description: 'In skills development and in-service training, since 2006.',
          },
          {
            label: 'Trainees & Interns',
            figure: '3000',
            prefix: '',
            suffix: '+',
            description: 'Placed across more than 500 local and international productions.',
          },
          {
            label: 'Black Student Base',
            figure: '96',
            prefix: '',
            suffix: '%',
            description: 'With 58% black female representation across the trainee body.',
          },
          {
            label: 'Driving Licences',
            figure: '124',
            prefix: '',
            suffix: '',
            description: 'Granted free through FILMGRO Driving Academy, sponsored by Suzuki.',
          },
        ]}
      />

      <FilmstripDivider />

      {/* ===== ECOSYSTEM OVERVIEW ===== */}
      <section className="section-padding">
        <div className="container-max">
          <span className="eyebrow mb-8">
            <span className="num">01 ·</span> The Ecosystem
          </span>

          <WordReveal tag="h2" text="Five entities. _One architecture._" className="mb-12" />

          <CardGrid cards={ecosystemCards} cols={2} />
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== EXECUTIVE SUMMARY ===== */}
      <section className="bg-surface section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: drop-cap paragraph */}
            <Reveal>
              <div className="space-y-4">
                <p className="font-body text-base text-text leading-relaxed">
                  <span className="font-display text-7xl md:text-8xl text-gold float-left mr-3 mt-1 leading-none">
                    F
                  </span>
                  or twenty years, SA Film Academy has quietly built the talent pipeline that has carried South African film onto the
                  global stage. Established in 2006 as a MICT SETA-accredited Non-Profit Company, the Academy has invested in excess
                  of R60 million in skills development and in-service training, placed over 3,000 trainees and interns on more than
                  500 local and international productions, holds a 96% black student base with 58% black female students, and has
                  facilitated 124 free driving licences through the FILMGRO Driving Academy.
                </p>

                <p className="font-body text-base text-text leading-relaxed">
                  This document is not an incremental marketing plan. It is the deliberate moment at which SA Film Academy stops
                  being an institution known only to insiders – and becomes the defining brand of the South African film talent
                  pipeline, recognised by production accountants, by international studios, by every aspiring trainee in the
                  country, and by every funder who matters.
                </p>
              </div>
            </Reveal>

            {/* Right: SVG map */}
            <SvgStage label="Production Ecosystem · Geography" aspect="square">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Background */}
                <rect width="500" height="500" fill="none" />

                {/* South Africa coastline (simplified) */}
                <path
                  d="M 100 150 Q 150 120 200 140 Q 250 110 300 150 Q 350 120 380 200 Q 400 280 360 380 Q 300 420 200 400 Q 120 380 100 320 Z"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  opacity="0.4"
                />

                {/* Connection lines */}
                <line x1="200" y1="350" x2="380" y2="180" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="200" y1="350" x2="380" y2="380" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="380" y1="180" x2="380" y2="380" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="4 2" />

                {/* Cape Town */}
                <circle cx="200" cy="350" r="18" fill="var(--surface-2)" stroke="var(--gold)" strokeWidth="2" />
                <circle cx="200" cy="350" r="28" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3" />
                <text x="200" y="320" textAnchor="middle" fill="var(--gold-soft)" fontFamily="var(--font-display)" fontSize="11">
                  Cape Town
                </text>
                <text x="200" y="385" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8">
                  Historic Home
                </text>

                {/* Johannesburg */}
                <circle cx="380" cy="180" r="16" fill="var(--surface-2)" stroke="var(--gold)" strokeWidth="2" />
                <circle cx="380" cy="180" r="26" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3" />
                <text x="380" y="155" textAnchor="middle" fill="var(--gold-soft)" fontFamily="var(--font-display)" fontSize="11">
                  Johannesburg
                </text>
                <text x="380" y="208" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8">
                  Growth Hub
                </text>

                {/* Durban */}
                <circle cx="380" cy="380" r="14" fill="var(--surface-2)" stroke="var(--gold)" strokeWidth="2" />
                <circle cx="380" cy="380" r="24" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.3" />
                <text x="380" y="405" textAnchor="middle" fill="var(--gold-soft)" fontFamily="var(--font-display)" fontSize="11">
                  Durban
                </text>
                <text x="380" y="427" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8">
                  Future Node
                </text>

                {/* Footer */}
                <text x="250" y="480" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="9" opacity="0.7">
                  TALENT FLOW ACROSS SOUTH AFRICA
                </text>
              </svg>
            </SvgStage>
          </div>
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== STRATEGY INDEX ===== */}
      <section className="section-padding">
        <div className="container-max">
          <span className="eyebrow mb-8">
            <span className="num">02 ·</span> The Strategy
          </span>

          <WordReveal tag="h2" text="One blueprint. _Eighteen chapters._" className="mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSections.map(({ slug, navItem }) => {
              const sectionId = slug === 'agentic-ai' ? 'ai' : slug === 'positioning' ? 'position' : slug.replace(/-/g, '');
              const section = sectionIndex[sectionId];

              return (
                <Reveal key={slug}>
                  <Link href={`/strategy/${slug}`} className="block group">
                    <div className="border border-line-strong hover:border-gold transition p-6 flex flex-col gap-3 h-full">
                      {/* Gold top bar */}
                      <div className="h-1 bg-gold w-8" />

                      {/* Number */}
                      <span className="eyebrow text-xs">
                        <span className="num">{section?.num || '–'}</span>
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-lg font-600 text-text group-hover:text-gold-soft transition">
                        {section?.title || navItem?.name || slug}
                      </h3>

                      {/* Subtitle */}
                      {section?.subtitle && (
                        <p className="text-sm text-muted leading-relaxed flex-1">
                          {section.subtitle.substring(0, 120)}...
                        </p>
                      )}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== CTA BAND ===== */}
      <section className="bg-bg-deep section-padding">
        <div className="container-max">
          <div className="text-center space-y-12">
            {/* Quote */}
            <Reveal>
              <blockquote className="font-display-alt italic text-gold-soft text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                "The deliberate moment at which SA Film Academy stops being an institution known only to insiders — and becomes the
                defining brand of the South African film talent pipeline."
              </blockquote>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/strategy/organisation"
                  className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition"
                >
                  Read the Full Strategy
                </Link>

                <a
                  href={process.env.NEXT_PUBLIC_CINETERNS_URL || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-bg transition"
                >
                  Explore Cineterns
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
