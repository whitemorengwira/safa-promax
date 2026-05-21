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
  title: '16 · KPI Dashboard & Measurement · SA Film Academy Strategy',
  description: 'Section 16 of the SA Film Academy 360° marketing strategy: KPI Dashboard & Measurement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="16 · KPI Dashboard & Measurement"
        title="The numbers reported every _quarter._"
        subtitle="A measurable, twelve-month KPI architecture with named baselines and named targets — designed to make trade-offs visible."
        imageSrc="/images/ai/safa-kpi-hero.png"
        imageAlt="Dashboard gauges abstract in gold and dark red"
      />

      <FilmstripDivider />

      {/* Gauges Section */}
      <SectionShell
        eyebrow="16.1"
        title="The Performance _Gauges_"
        subtitle="Real-time tracking of the Academy's strategic goals."
      >
        <div className="mb-16">
          <SvgStage label="KPI · Performance Dashboard" aspect="wide">
            <svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#8B1A1A"/>
                  <stop offset="50%" stop-color="#C9A84C"/>
                  <stop offset="100%" stop-color="#E0C268"/>
                </linearGradient>
              </defs>

              <g transform="translate(140 180)">
                <circle r="62" fill="none" stroke="#1f1f29" stroke-width="6"/>
                <circle r="62" fill="none" stroke="url(#gaugeGrad)" stroke-width="6"
                        stroke-dasharray="389.5" stroke-dashoffset="120"
                        transform="rotate(-90)" stroke-linecap="round"/>
                <text y="-4" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="22" font-style="italic">69%</text>
                <text y="16" text-anchor="middle" fill="#C9A84C" opacity="0.8" font-family="Outfit" font-size="9" letter-spacing="2">CINETERNS REG</text>
              </g>
              <g transform="translate(340 180)">
                <circle r="62" fill="none" stroke="#1f1f29" stroke-width="6"/>
                <circle r="62" fill="none" stroke="url(#gaugeGrad)" stroke-width="6"
                        stroke-dasharray="389.5" stroke-dashoffset="180"
                        transform="rotate(-90)" stroke-linecap="round"/>
                <text y="-4" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="22" font-style="italic">54%</text>
                <text y="16" text-anchor="middle" fill="#C9A84C" opacity="0.8" font-family="Outfit" font-size="9" letter-spacing="2">PLACEMENTS</text>
              </g>
              <g transform="translate(540 180)">
                <circle r="62" fill="none" stroke="#1f1f29" stroke-width="6"/>
                <circle r="62" fill="none" stroke="url(#gaugeGrad)" stroke-width="6"
                        stroke-dasharray="389.5" stroke-dashoffset="100"
                        transform="rotate(-90)" stroke-linecap="round"/>
                <text y="-4" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="22" font-style="italic">74%</text>
                <text y="16" text-anchor="middle" fill="#C9A84C" opacity="0.8" font-family="Outfit" font-size="9" letter-spacing="2">BLOG TRAFFIC</text>
              </g>
              <g transform="translate(740 180)">
                <circle r="62" fill="none" stroke="#1f1f29" stroke-width="6"/>
                <circle r="62" fill="none" stroke="url(#gaugeGrad)" stroke-width="6"
                        stroke-dasharray="389.5" stroke-dashoffset="65"
                        transform="rotate(-90)" stroke-linecap="round"/>
                <text y="-4" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="22" font-style="italic">83%</text>
                <text y="16" text-anchor="middle" fill="#C9A84C" opacity="0.8" font-family="Outfit" font-size="9" letter-spacing="2">LINDI · LINKEDIN</text>
              </g>
              <g transform="translate(940 180)">
                <circle r="62" fill="none" stroke="#1f1f29" stroke-width="6"/>
                <circle r="62" fill="none" stroke="url(#gaugeGrad)" stroke-width="6"
                        stroke-dasharray="389.5" stroke-dashoffset="220"
                        transform="rotate(-90)" stroke-linecap="round"/>
                <text y="-4" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="22" font-style="italic">43%</text>
                <text y="16" text-anchor="middle" fill="#C9A84C" opacity="0.8" font-family="Outfit" font-size="9" letter-spacing="2">SKILLS LEVY CLIENTS</text>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="drop-cap">
                  A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders.
                </p>
                <p>
                  This dashboard makes trade-offs visible rather than hidden, allowing for data-driven decision making and clear accountability across all strategic pillars.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-151"
              alt="KPI Graph"
              brief="Upward trajectory graph on a professional monitor, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Measurement Section */}
      <SectionShell
        eyebrow="16.2"
        title="The Measurement _Framework_"
        subtitle="Ensuring accuracy and transparency in our reporting."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p>
                  Our measurement framework is built on verifiable data points, from Cineterns registrations to placement events and digital engagement metrics.
                </p>
                <p>
                  By maintaining a rigorous approach to data collection and analysis, we ensure that our reports are both accurate and actionable, providing a clear picture of the Academy's progress.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-152"
              alt="Measurement"
              brief="Professional with a tablet reviewing a data dashboard, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _Budget_ allocation?</h2>
          <Link
            href="/delivery/budget"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Budget Allocation →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
