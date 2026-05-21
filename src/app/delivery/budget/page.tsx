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
  title: '17 · Budget Framework · SA Film Academy Strategy',
  description: 'Section 17 of the SA Film Academy 360° marketing strategy: Budget Framework',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="17 · Budget Framework"
        title="A Monthly Subscription, Not a _Project Quote._"
        subtitle="A transparent, line-itemised monthly framework that converts marketing strategy into a single, defensible operating-expense line."
        imageSrc="/images/ai/safa-budget-hero.png"
        imageAlt="Ascending bar chart in gold and dark red"
      />

      <FilmstripDivider />

      {/* Budget Chart Section */}
      <SectionShell
        eyebrow="17.1"
        title="The Budget _Allocation_"
        subtitle="Transparent, predictable monthly operating expenses."
      >
        <div className="mb-16">
          <SvgStage label="Budget · Monthly Allocation" aspect="wide">
            <svg viewBox="0 0 1200 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="barGold" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#9B7F2D"/>
                  <stop offset="100%" stop-color="#E0C268"/>
                </linearGradient>
              </defs>

              {/* Y-axis ticks and grid */}
              <g stroke="#C9A84C" stroke-width="0.4" opacity="0.18">
                <line x1="120" y1="80"  x2="1140" y2="80"/>
                <line x1="120" y1="140" x2="1140" y2="140"/>
                <line x1="120" y1="200" x2="1140" y2="200"/>
                <line x1="120" y1="260" x2="1140" y2="260"/>
                <line x1="120" y1="320" x2="1140" y2="320"/>
              </g>
              <g font-family="Outfit" font-size="10" letter-spacing="2" fill="#C9A84C" opacity="0.7" text-anchor="end">
                <text x="110" y="84">R15k</text>
                <text x="110" y="144">R12k</text>
                <text x="110" y="204">R9k</text>
                <text x="110" y="264">R6k</text>
                <text x="110" y="324">R3k</text>
                <text x="110" y="356">R0</text>
              </g>

              {/* Baseline axis */}
              <line x1="120" y1="340" x2="1140" y2="340" stroke="#C9A84C" stroke-width="0.8" opacity="0.5"/>

              {/* Bars */}
              <g>
                <rect x="150" y="280" width="60" height="60" fill="url(#barGold)" opacity="0.85"/>
                <text x="180" y="270" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="12">R380</text>
                <text x="180" y="362" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="1">VERCEL</text>
              </g>
              <g>
                <rect x="230" y="278" width="60" height="62" fill="url(#barGold)" opacity="0.85"/>
                <text x="260" y="268" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="12">R450</text>
                <text x="260" y="362" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="1">SUPABASE</text>
              </g>
              <g>
                <rect x="310" y="290" width="60" height="50" fill="url(#barGold)" opacity="0.85"/>
                <text x="340" y="280" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="12">R200</text>
                <text x="340" y="362" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="1">CLOUDFLARE</text>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="drop-cap">
                  A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
                </p>
                <p>
                  This subscription-based model provides the Academy with predictable costs and consistent service delivery, ensuring that the marketing engine remains powered without financial surprises.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-153"
              alt="Budget Invoice"
              brief="Professional invoice macro on a modern dark surface, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Infrastructure Section */}
      <SectionShell
        eyebrow="17.2"
        title="The Infrastructure _Investment_"
        subtitle="Building the foundation for long-term growth."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p>
                  The budget allocation prioritises critical digital infrastructure, from hosting and database management to security and content delivery networks.
                </p>
                <p>
                  By investing in high-quality, scalable platforms, we ensure that the Academy's digital presence is robust, secure, and capable of supporting our ambitious growth targets.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-154"
              alt="Budget Infrastructure"
              brief="Server nodes abstract in gold and navy, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
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
