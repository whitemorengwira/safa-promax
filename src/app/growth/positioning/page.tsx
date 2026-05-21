import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SvgStage } from '@/components/visuals/SvgStage';
import { PositioningRadar } from '@/components/diagrams/PositioningRadar';

export const metadata: Metadata = {
  title: '14 · Competitive Positioning & Differentiation · SA Film Academy Strategy',
  description: 'Section 14 of the SA Film Academy 360° marketing strategy: Competitive Positioning & Differentiation',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="14 · Competitive Positioning & Differentiation"
        title="Six dimensions on which SAFA _wins the room._"
        subtitle="The strategy's positioning argument runs on six specific capabilities — each one a category where the typical competitor cannot match SAFA's contextual depth."
        imageSrc="/images/ai/v2/hero-positioning.png"
        imageAlt="Radar chart abstract in gold and dark red"
      />

      <FilmstripDivider />

      {/* Radar Section */}
      <SectionShell
        eyebrow="14.1"
        title="The Competitive _Radar_"
        subtitle="Defining why the Academy occupies a category of one."
      >
        <div className="mb-16">
          <PositioningRadar />
        </div>

        <div className="mb-16 hidden">
          <SvgStage aspect="wide" label="Positioning · Radar Chart">
            <svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.32"/>
                  <stop offset="70%" stop-color="#C9A84C" stop-opacity="0.06"/>
                  <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="radarFillComp" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#8B1A1A" stop-opacity="0.22"/>
                  <stop offset="100%" stop-color="#8B1A1A" stop-opacity="0"/>
                </radialGradient>
              </defs>

              <g transform="translate(600 250)">
                <g fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.3">
                  <polygon points="0,-180 156,-90 156,90 0,180 -156,90 -156,-90"/>
                  <polygon points="0,-144 125,-72 125,72 0,144 -125,72 -125,-72"/>
                  <polygon points="0,-108 94,-54 94,54 0,108 -94,54 -94,-54"/>
                  <polygon points="0,-72 62,-36 62,36 0,72 -62,36 -62,-36"/>
                  <polygon points="0,-36 31,-18 31,18 0,36 -31,18 -31,-18"/>
                </g>

                <g stroke="#C9A84C" stroke-width="0.5" opacity="0.35">
                  <line x1="0" y1="0" x2="0" y2="-180"/>
                  <line x1="0" y1="0" x2="156" y2="-90"/>
                  <line x1="0" y1="0" x2="156" y2="90"/>
                  <line x1="0" y1="0" x2="0" y2="180"/>
                  <line x1="0" y1="0" x2="-156" y2="90"/>
                  <line x1="0" y1="0" x2="-156" y2="-90"/>
                </g>

                <polygon points="0,-72 78,-45 62,36 0,72 -62,36 -78,-45"
                         fill="url(#radarFillComp)"
                         stroke="#8B1A1A"
                         stroke-width="1.2"
                         opacity="0.85"/>

                <polygon points="0,-168 140,-82 145,84 0,160 -130,76 -140,-80"
                         fill="url(#radarFill)"
                         stroke="#C9A84C"
                         stroke-width="1.6"/>

                <g font-family="Outfit" font-size="11" letter-spacing="2" fill="#E8E0D0">
                  <text x="0" y="-200" text-anchor="middle">SETA COMPLIANCE FLUENCY</text>
                  <text x="180" y="-100" text-anchor="middle">B-BBEE SCORECARD MECHANICS</text>
                  <text x="180" y="108" text-anchor="middle">PRODUCTION CO. COMMERCIAL CONTEXT</text>
                  <text x="0" y="206" text-anchor="middle">TRAINEE CAREER PATHWAY KNOWLEDGE</text>
                  <text x="-180" y="108" text-anchor="middle">LIVE DIGITAL INFRASTRUCTURE</text>
                  <text x="-180" y="-100" text-anchor="middle">GOVERNMENT RELATIONS DEPTH</text>
                </g>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="drop-cap">
                  The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model.
                </p>
                <p>
                  Together they define why the Academy occupies a category of one, providing a unique value proposition that combines technical excellence with strategic commercial impact.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-111"
              alt="Positioning"
              brief="Abstract geometric radar chart in gold and dark red, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Differentiation Section */}
      <SectionShell
        eyebrow="14.2"
        title="The Six _Dimensions_"
        subtitle="Where SAFA wins the room every time."
        className="bg-surface/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-gold">SETA Compliance Fluency</h3>
            <p className="text-sm">Deep, institutional knowledge of MICT SETA processes, ensuring seamless accreditation and funding flows.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-gold">B-BBEE Scorecard Mechanics</h3>
            <p className="text-sm">Strategic understanding of how training spend translates into maximum transformation points for partners.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-gold">Production Co. Commercial Context</h3>
            <p className="text-sm">An operating model built by industry professionals for industry professionals, respecting the pace of production.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-gold">Trainee Career Pathway Knowledge</h3>
            <p className="text-sm">A two-tier system that ensures clear progression from intern to professional crew member.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-gold">Live Digital Infrastructure</h3>
            <p className="text-sm">The Cineterns portal provides a demonstrable, tech-forward solution for talent management.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-gold">Government Relations Depth</h3>
            <p className="text-sm">Long-standing relationships with DTI, DSAC, and other key state stakeholders.</p>
          </div>
        </div>
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _Implementation_ plan?</h2>
          <Link
            href="/delivery/implementation"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Implementation Plan →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
