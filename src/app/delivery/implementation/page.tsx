import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SvgStage } from '@/components/visuals/SvgStage';

export const metadata: Metadata = {
  title: '18 · Implementation Commencement · SA Film Academy Strategy',
  description: 'Section 18 of the SA Film Academy 360° marketing strategy: Implementation Commencement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="18 · Implementation Commencement"
        title="Three tracks. Thirty days. Tangible, reportable _results._"
        subtitle="Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted."
        imageSrc="/images/ai/safa-impl-hero.png"
        imageAlt="Film crew launching into action on a professional set"
      />

      <FilmstripDivider />

      {/* Tracks Section */}
      <SectionShell
        eyebrow="18.1"
        title="The Activation _Tracks_"
        subtitle="Simultaneous workstreams for immediate impact."
      >
        <div className="mb-16">
          <SvgStage label="Implementation · 30-Day Schedule" aspect="wide">
            <svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="trackGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#9B7F2D" stop-opacity="0.6"/>
                  <stop offset="70%" stop-color="#E0C268"/>
                  <stop offset="100%" stop-color="#E0C268" stop-opacity="0.8"/>
                </linearGradient>
                <linearGradient id="trackRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#5e1212" stop-opacity="0.6"/>
                  <stop offset="70%" stop-color="#8B1A1A"/>
                  <stop offset="100%" stop-color="#8B1A1A" stop-opacity="0.8"/>
                </linearGradient>
              </defs>

              {/* Track 1: Cineterns */}
              <g transform="translate(0 80)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#C9A84C" opacity="0.15"/>
                <rect x="120" y="0" width="4" height="52" fill="#E0C268"/>
                <text x="138" y="20" fill="#E0C268" font-family="Outfit" font-size="10" letter-spacing="3">TRACK 01 · CINETERNS PLATFORM</text>
                <g fill="#E8E0D0" font-family="Playfair Display" font-style="italic" font-size="13">
                  <text x="138" y="40">Open beta → 50 trainee profiles migrated → first 5 employer accounts → first confirmed placement event logged</text>
                </g>
              </g>

              {/* Track 2: Content Pipeline */}
              <g transform="translate(0 160)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#8B1A1A" opacity="0.15"/>
                <rect x="120" y="0" width="4" height="52" fill="#8B1A1A"/>
                <text x="138" y="20" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">TRACK 02 · CONTENT PIPELINE AT CADENCE</text>
                <g fill="#E8E0D0" font-family="Playfair Display" font-style="italic" font-size="13">
                  <text x="138" y="40">8 SEO blog posts → 1 State of Industry editorial (email-distributed) → social cadence live → podcast episode in production</text>
                </g>
              </g>

              {/* Track 3: Strategic Partnerships */}
              <g transform="translate(0 240)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#C9A84C" opacity="0.05"/>
                <rect x="120" y="0" width="4" height="52" fill="#C9A84C" opacity="0.4"/>
                <text x="138" y="20" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">TRACK 03 · STRATEGIC PARTNERSHIPS</text>
                <g fill="#E8E0D0" font-family="Playfair Display" font-style="italic" font-size="13">
                  <text x="138" y="40">Formalise Suzuki co-brand → Netflix GreenSet case study → 3 Tier 1 production house service agreements signed</text>
                </g>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <div className="space-y-6">
              <p className="drop-cap">
                The implementation phase is not an aspiration — it is a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
              </p>
              <p>
                This disciplined approach ensures that the strategy translates into immediate, tangible results for the Academy and its stakeholders.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-142"
              alt="Track 1"
              brief="Cineterns portal profiles on a high-end monitor, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* 30-Day Section */}
      <SectionShell
        eyebrow="18.2"
        title="The 30-Day _Sprint_"
        subtitle="Closing the month with reportable deliverables."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <div className="space-y-6">
              <p>
                The first 30 days are critical for establishing momentum. By focusing on high-impact, demonstrable wins, we build the institutional confidence required for long-term success.
              </p>
              <p>
                Each track is assigned a dedicated lead and a set of clear KPIs, ensuring accountability and transparency throughout the commencement phase.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-145"
              alt="30 Day Timeline"
              brief="Project timeline screen with milestones lighting up in gold, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _KPI_ dashboard?</h2>
          <Link
            href="/delivery/kpis"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: KPI Dashboard →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
