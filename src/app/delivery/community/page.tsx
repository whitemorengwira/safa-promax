import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SvgStage } from '@/components/visuals/SvgStage';
import { CareerProgression } from '@/components/diagrams/CareerProgression';

export const metadata: Metadata = {
  title: '11 · Community, Alumni & Stakeholder Engagement · SA Film Academy Strategy',
  description: 'Section 11 of the SA Film Academy 360° marketing strategy: Community, Alumni & Stakeholder Engagement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="11 · Community, Alumni & Stakeholder Engagement"
        title="From Perpetual Trainee to Permanent _Industry Citizen._"
        subtitle="The community architecture that dismantles the most damaging perception SAFA has carried — and replaces it with a tiered, visible career pathway."
        imageSrc="/images/ai/v2/hero-community.png"
        imageAlt="A group of young Black film alumni (22-30 years old) networking at a cinematic industry event"
      />

      <FilmstripDivider />

      {/* Mesh Section */}
      <SectionShell
        eyebrow="11.1"
        title="The Community _Mesh_"
        subtitle="Dismantling perceptions through visible career pathways."
      >
        <div className="mb-16">
          <CareerProgression />
        </div>

        <div className="mb-16 hidden">
          <SvgStage label="Community · Tiered Pathway" aspect="wide">
            <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="meshNode" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#E0C268" stop-opacity="1"/>
                  <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="meshLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.15"/>
                  <stop offset="50%" stop-color="#C9A84C" stop-opacity="0.7"/>
                  <stop offset="100%" stop-color="#C9A84C" stop-opacity="0.15"/>
                </linearGradient>
              </defs>

              {/* Background tier bands */}
              <g opacity="0.08">
                <rect x="0" y="40" width="1200" height="100" fill="#8B1A1A"/>
                <rect x="0" y="140" width="1200" height="100" fill="#9B7F2D"/>
                <rect x="0" y="240" width="1200" height="100" fill="#C9A84C"/>
                <rect x="0" y="340" width="1200" height="100" fill="#E0C268"/>
              </g>

              {/* Tier labels */}
              <g font-family="Outfit" font-size="10" letter-spacing="3" fill="#C9A84C" opacity="0.8">
                <text x="40" y="92">TIER 01 · INTERN</text>
                <text x="40" y="192">TIER 02 · PRODUCTION TRAINEE</text>
                <text x="40" y="292">TIER 03 · SENIOR TRAINEE</text>
                <text x="40" y="392">TIER 04 · ACE ALUMNUS · CREW · HOD</text>
              </g>

              {/* Connecting mesh lines between tiers */}
              <g stroke="url(#meshLine)" stroke-width="1" fill="none">
                <path d="M 260 92 L 380 192 L 520 192 L 640 292 L 800 292 L 920 392 L 1080 392"/>
                <path d="M 340 92 L 460 192 L 600 192 L 720 292 L 880 292 L 1000 392"/>
                <path d="M 420 92 L 540 192 L 680 192 L 800 292 L 960 292 L 1080 392"/>
                <path d="M 500 92 L 620 192 L 760 192 L 880 292"/>
                <path d="M 580 92 L 700 192 L 840 292 L 1000 392"/>
                <path d="M 660 92 L 780 192 L 920 292"/>
                <path d="M 740 92 L 860 192 L 1000 292"/>
                <path d="M 820 92 L 940 192"/>
                <path d="M 900 92 L 1020 192"/>
              </g>

              {/* Tier 1 nodes */}
              <g>
                <circle cx="260" cy="92" r="6" fill="url(#meshNode)"/>
                <circle cx="340" cy="92" r="5" fill="url(#meshNode)"/>
                <circle cx="420" cy="92" r="6" fill="url(#meshNode)"/>
                <circle cx="500" cy="92" r="5" fill="url(#meshNode)"/>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <div className="space-y-6">
              <p className="drop-cap">
                The community architecture dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
              </p>
              <p>
                By formalising the transition from intern to industry professional, we create a sense of belonging and achievement that drives long-term engagement and advocacy.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-148"
              alt="Tier 1 Intern"
              brief="Eager Black intern (19) on a professional film set, focused expression, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* Alumni Section */}
      <SectionShell
        eyebrow="11.2"
        title="The ACE _Alumni_"
        subtitle="Celebrating the success of our graduates."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <div className="space-y-6">
              <p>
                Our ACE Alumni are the living proof of the Academy's impact. By highlighting their achievements and providing ongoing support, we build a powerful network of industry leaders who continue to give back to the Academy.
              </p>
              <p>
                This tiered system ensures that every graduate has a clear path to becoming a permanent industry citizen, with the skills and connections required to thrive.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-150"
              alt="ACE Alumnus"
              brief="Confident Black director (28) on a professional film set, cinematic lighting"
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
