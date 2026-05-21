import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SkillsLevyFlow } from '@/components/diagrams/SkillsLevyFlow';

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
        imageSrc="/images/ai/v2/growth/commercial-hero.png"
        imageAlt="Dark reddish-cinematic film production environment"
      />

      <FilmstripDivider />

      {/* 10.1 — THE SKILLS LEVY */}
      <SectionShell
        eyebrow="10.1"
        title="The Skills Levy"
      >
        <div className="mb-16">
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
                  By facilitating the Work Skills Programme, SAFA allows production companies to claim back 20% of their levy while simultaneously earning critical B-BBEE points for skills development. This is the active alignment of commercial interest and social impact.
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
                  This isn't just about compliance; it's about building a sustainable, transformed industry where the commercial interests of production houses align with the developmental needs of the country. We make the complex simple, and the mandatory meaningful.
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
