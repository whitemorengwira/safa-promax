import Link from 'next/link';
import { WordReveal } from '@/components/motion/WordReveal';
import { Reveal } from '@/components/motion/Reveal';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { CardGrid } from '@/components/sections/CardGrid';

const tools = [
  {
    num: '01',
    title: 'Skills Levy Calculator',
    text: 'Automated calculation of skills development levy obligations and claiming procedures for South African companies.',
  },
  {
    num: '02',
    title: 'B-BBEE Scorecard Tool',
    text: 'Real-time B-BBEE compliance dashboard and scorecard generation for institutional partnerships.',
  },
  {
    num: '03',
    title: 'Funding Opportunity Finder',
    text: 'AI-matched funding sources and grant opportunities aligned to institutional and individual goals.',
  },
  {
    num: '04',
    title: 'AI Talent Match',
    text: 'Intelligent candidate-to-role matching engine connecting trainees and interns with production opportunities.',
  },
  {
    num: '05',
    title: 'Content Studio',
    text: 'Automated content generation and curation engine for marketing, social, and collateral.',
  },
  {
    num: '06',
    title: 'Presentation Builder',
    text: 'Dynamic deck generation from strategy content and institutional data for stakeholder briefings.',
  },
];

export default function SmartToolsPage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <ImagePlaceholder
          alt="SA Film Academy — AI tools workspace"
          brief="Modern workspace with technology, South African context, professional setup, clean minimalist design, digital tools visualisation"
          orientation="video"
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center section-padding container-max">
          <span className="eyebrow mb-6">
            <span className="num">Upcoming ·</span>
          </span>

          <WordReveal tag="h1" text="Smart Tools Hub" className="mb-6 max-w-4xl" />

          <Reveal className="mb-8">
            <p className="font-display-alt italic text-gold-soft text-xl md:text-2xl max-w-3xl leading-relaxed">
              AI-assisted calculators, funding assistants, and talent matching — launching Q2 2026.
            </p>
          </Reveal>
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== TOOLS GRID ===== */}
      <section className="section-padding">
        <div className="container-max">
          <span className="eyebrow mb-8">
            <span className="num">Coming Soon ·</span>
          </span>

          <WordReveal tag="h2" text="Six tools. _Six capabilities._" className="mb-12" />

          <CardGrid cards={tools} cols={3} />
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== CTA BAND ===== */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-8">
            <Reveal>
              <p className="font-body text-base text-text leading-relaxed max-w-2xl mx-auto">
                The Smart Tools Hub is designed to reduce administrative overhead, accelerate decision-making, and unlock data-driven insight across the institution. Each tool is AI-assisted, auditable, and purpose-built for the South African institutional and skills landscape.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/strategy/agentic-ai"
                className="inline-block font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition"
              >
                Read the AI Strategy
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
