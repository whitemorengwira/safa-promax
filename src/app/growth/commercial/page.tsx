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
  title: '10 · B-BBEE & Skills Levy Commercial Strategy · SA Film Academy Strategy',
  description: 'Section 10 of the SA Film Academy 360° marketing strategy: B-BBEE & Skills Levy Commercial Strategy',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="10 · B-BBEE & Skills Levy Commercial Strategy"
        title="SAFA's single most powerful commercial differentiator, and chronically _under-marketed._"
        subtitle="The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent."
        imageSrc="/images/ai/safa-bee-hero.png"
        imageAlt="Sankey financial diagram or flow chart in gold and navy"
      />

      <FilmstripDivider />

      {/* Skills Levy Section */}
      <SectionShell
        eyebrow="10.1"
        title="The Skills _Levy_"
        subtitle="Turning a mandatory cost into a strategic asset."
      >
        <div className="mb-16">
          <SvgStage aspect="wide" label="Flow · Skills Levy">
            <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#C9A84C" />
                </marker>
              </defs>
              {/* Production Company source */}
              <g>
                <rect x="60" y="180" width="180" height="100" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
                <text x="150" y="218" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="14">Production</text>
                <text x="150" y="240" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="14">Company / SPV</text>
                <text x="150" y="266" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">payroll &gt; R500k p.a.</text>
              </g>

              {/* Arrow 1: Pay 1% Skills Levy to SARS */}
              <g>
                <path d="M 240 220 L 440 140" stroke="#C9A84C" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                <text x="340" y="170" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="11" letter-spacing="2">PAY 1%</text>
                <text x="340" y="186" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">Skills Levy</text>
              </g>

              {/* SARS / MICT SETA */}
              <g>
                <rect x="450" y="80" width="180" height="120" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
                <text x="540" y="120" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="14">SARS · MICT</text>
                <text x="540" y="142" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="14">SETA Fund</text>
                <text x="540" y="170" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">Skills Development</text>
                <text x="540" y="184" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">collection point</text>
              </g>

              {/* Arrow 2: Claim 20% back via WSP/ATR */}
              <g>
                <path d="M 630 180 L 830 220" stroke="#C9A84C" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                <text x="730" y="180" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="11" letter-spacing="2">CLAIM 20%</text>
                <text x="730" y="198" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">via WSP / ATR</text>
              </g>

              {/* SAFA */}
              <g>
                <rect x="840" y="180" width="180" height="100" fill="#13131a" stroke="#C9A84C" stroke-width="2"/>
                <rect x="840" y="180" width="180" height="4" fill="#C9A84C"/>
                <text x="930" y="220" text-anchor="middle" fill="#C9A84C" font-family="Playfair Display" font-size="16" font-weight="600">SA FILM ACADEMY</text>
                <text x="930" y="240" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">Skills Development Facilitator</text>
                <text x="930" y="262" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">administration cap R350k</text>
              </g>

              {/* Outputs from SAFA */}
              <g>
                <path d="M 1020 230 L 1140 180" stroke="#E0C268" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)"/>
                <text x="1140" y="160" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">Trainees</text>
                <text x="1140" y="174" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">placed</text>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <div className="space-y-6">
              <p className="drop-cap">
                The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
              </p>
              <p>
                By facilitating the Work Skills Programme, SAFA allows production companies to claim back 20% of their levy while simultaneously earning critical B-BBEE points for skills development.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-106"
              alt="Skills Levy"
              brief="Finance team meeting with Black professionals in a modern office, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* B-BBEE Section */}
      <SectionShell
        eyebrow="10.2"
        title="The B-BBEE _Advantage_"
        subtitle="Maximising transformation points through strategic training."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <div className="space-y-6">
              <p>
                SAFA's model is designed to maximise B-BBEE points for our partners. Through accredited training and verifiable placements, we provide the documentation and results required for high-level compliance.
              </p>
              <p>
                This isn't just about compliance; it's about building a sustainable, transformed industry where the commercial interests of production houses align with the developmental needs of the country.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-107"
              alt="B-BBEE Calculator"
              brief="Black female accountant (30) working on a laptop with spreadsheets, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _Partnerships_ strategy?</h2>
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
