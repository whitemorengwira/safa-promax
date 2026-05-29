import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SkillsLevyFlow } from '@/components/diagrams/SkillsLevyFlow';
import { MarketingMixChannelSection } from '@/components/strategy/BoardStrategySections';

export const metadata: Metadata = {
  title: '10 · B-BBEE & Skills Levy Commercial Strategy · SA Film Academy Strategy',
  description: 'Section 10 of the SA Film Academy 360° marketing strategy: B-BBEE & Skills Levy Commercial Strategy',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="10 · Commercial Strategy"
        title="B-BBEE & Skills Levy Strategy"
        subtitle="SAFA's single most powerful commercial differentiator, and chronically under-marketed."
        imageSrc="/images/ai/v3/growth/commercial-hero.webp"
        imageAlt="Dark reddish-cinematic film production environment"
      />

      <FilmstripDivider />

      {/* 10.1 — THE SKILLS LEVY */}
      <SectionShell
        eyebrow="10.1"
        title="The Skills Levy"
      >
        <div className="mb-16 max-w-6xl mx-auto">
          <SkillsLevyFlow />
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  By facilitating the Work Skills Programme, SAFA helps production companies convert statutory skills spend into structured training evidence, relevant SETA grant pathways and B-BBEE skills development proof. This is the active alignment of commercial interest and social impact.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/growth/finance-meeting.png"
              alt="Finance team meeting with Black South African professionals"
              brief="Finance team meeting with Black South African professionals in a modern office, cinematic lighting, warm gold and deep red tones, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      <MarketingMixChannelSection />

      {/* 10.2 — THE B-BBEE ADVANTAGE */}
      <SectionShell
        eyebrow="10.2"
        title="The B-BBEE Advantage"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    SAFA's model is designed to maximise B-BBEE points for our partners. Through accredited training and verifiable placements, we provide the documentation and results required for high-level compliance.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  This is not just about compliance; it is about building a sustainable, transformed industry where the commercial interests of production houses align with the developmental needs of the country. We make the complex simple, and the mandatory meaningful.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/growth/accountant-laptop.png"
              alt="Black South African female accountant working on a laptop"
              brief="A Black South African female accountant (30) working on a laptop with spreadsheets in a cinematic office setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 10.3 — FINANCIAL POSITIONING */}
      <SectionShell
        eyebrow="10.3"
        title="Revenue & Sustainability"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Levy Claim-Back:</strong> Production companies with qualifying payroll obligations can turn mandatory skills spend into structured training evidence when they partner with SAFA, subject to the applicable SETA and compliance rules.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>B-BBEE Scorecard Evidence:</strong> Skills development is a material element in B-BBEE compliance. SAFA partners receive a clearer evidence trail through accredited training, verified placements and documented learner progression.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Institutional Revenue:</strong> SAFA captures placement fees and admin margins that sustain operations, reinvesting directly into trainee support and infrastructure expansion.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/growth-commercial/financial-dashboard-screen.webp"
              alt="Financial dashboard showing metrics and returns"
              brief="Financial dashboard on a professional monitor showing ROI, levy calculations, and B-BBEE metrics"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* CLOSING CALL TO ACTION */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Partnerships strategy?</h2>
          <Link
            href="/growth/partnerships"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Strategic Partnerships →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
