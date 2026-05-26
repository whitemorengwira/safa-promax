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
      {/* HERO SECTION */}
      <PageHero
        eyebrow="14 · Growth Pillar"
        title="Six dimensions on which SAFA wins the room."
        subtitle="The strategy's positioning argument runs on six specific capabilities: each one a category where the typical competitor cannot match SAFA's contextual depth."
        imageSrc="/images/ai/v2/growth/pos-hero.png"
        imageAlt="Radar chart abstract in gold and dark red"
      />

      <FilmstripDivider />

      {/* Radar Section */}
      <SectionShell
        eyebrow="14.1"
        title="The Competitive Radar"
      >
        <div className="mb-16 max-w-4xl mx-auto">
          <PositioningRadar />
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The strategy's positioning argument runs on six specific capabilities: each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  Together they define why the Academy occupies a category of one, providing a unique value proposition that combines technical excellence with strategic commercial impact.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/gen/positioning.png"
                      alt="Competitive positioning strategy"
                      brief="Competitive positioning strategy and advantage"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/growth/radar-chart.png"
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
        title="The Six Dimensions"
        className="bg-surface/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">SETA Compliance</h3>
              <p className="text-sm text-text/70 leading-relaxed">Deep, institutional knowledge of MICT SETA processes, ensuring seamless accreditation and funding flows.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">B-BBEE Mechanics</h3>
              <p className="text-sm text-text/70 leading-relaxed">Strategic understanding of how training spend translates into maximum transformation points for partners.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Commercial Context</h3>
              <p className="text-sm text-text/70 leading-relaxed">An operating model built by industry professionals for industry professionals, respecting the pace of production.</p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Career Pathways</h3>
              <p className="text-sm text-text/70 leading-relaxed">A two-tier system that ensures clear progression from intern to professional crew member.</p>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Digital Infrastructure</h3>
              <p className="text-sm text-text/70 leading-relaxed">The SA Film Intense portal provides a demonstrable, tech-forward solution for talent management.</p>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Government Relations</h3>
              <p className="text-sm text-text/70 leading-relaxed">Long-standing relationships with DTI, DSAC, and other key state stakeholders.</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Market Position */}
      <SectionShell
        eyebrow="14.3"
        title="Market Leadership"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>20+ years of proven track record:</strong> Over 3,000 trainees placed, 500+ productions supported, institutional memory that new entrants cannot replicate.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Unique value proposition:</strong> SAFA is the only institution that combines SETA compliance, B-BBEE strategic value, digital infrastructure, and transformational impact under one operating model.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Category of one:</strong> There is no direct competitor in the South African film training market with SAFA's combination of accreditation, scale, and commercial relevance.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/growth-positioning/strategic-planning-wall.webp"
              alt="Strategic planning and market positioning"
              brief="Strategic planning board with competitive analysis, market data, and positioning strategy mapped out"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Implementation plan?</h2>
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
