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
  title: '6 · Agentic AI Marketing Engine · SA Film Academy Strategy',
  description: 'Section 6 of the SA Film Academy 360° marketing strategy: Agentic AI Marketing Engine',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="06 · Agentic AI Marketing Engine"
        title="Not an aspiration. A set of concrete, running, weekly automated _workflows._"
        subtitle="Five autonomous agents that operate without human initiation — turning the Academy's capacity constraint into its largest competitive advantage."
        imageSrc="/images/ai/safa-ai-hero.png"
        imageAlt="Abstract orbital AI system or neural network in gold and blue"
      />

      <FilmstripDivider />

      {/* Orbital System Section */}
      <SectionShell
        eyebrow="06.1"
        title="The Agentic _Core_"
        subtitle="Autonomous intelligence driving the Academy's growth engine."
      >
        <div className="mb-16">
          <SvgStage aspect="wide" label="Agents · Orbital System">
            <svg viewBox="-250 -250 500 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#E0C268" stop-opacity="0.95"/>
                  <stop offset="60%" stop-color="#C9A84C" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#9B7F2D" stop-opacity="0"/>
                </radialGradient>
              </defs>

              {/* Orbits */}
              <ellipse cx="0" cy="0" rx="90" ry="90" fill="none" stroke="#C9A84C" stroke-width="0.5" stroke-opacity="0.3"/>
              <ellipse cx="0" cy="0" rx="135" ry="135" fill="none" stroke="#C9A84C" stroke-width="0.5" stroke-opacity="0.25"/>
              <ellipse cx="0" cy="0" rx="180" ry="180" fill="none" stroke="#C9A84C" stroke-width="0.5" stroke-opacity="0.2"/>
              <ellipse cx="0" cy="0" rx="220" ry="220" fill="none" stroke="#C9A84C" stroke-width="0.5" stroke-opacity="0.15"/>

              {/* Core */}
              <circle cx="0" cy="0" r="60" fill="url(#coreGlow)"/>
              <circle cx="0" cy="0" r="32" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
              <text x="0" y="-2" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="2">AGENTIC</text>
              <text x="0" y="10" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="2">CORE</text>

              {/* Satellite 1: Funding (90 radius) */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="40s" repeatCount="indefinite"/>
                <g transform="translate(90 0)">
                  <circle r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="5" fill="#C9A84C"/>
                  <text y="28" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">Funding</text>
                </g>
              </g>

              {/* Satellite 2: Content (135 radius) */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="60 0 0" to="420 0 0" dur="55s" repeatCount="indefinite"/>
                <g transform="translate(135 0)">
                  <circle r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="5" fill="#C9A84C"/>
                  <text y="-22" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">Content</text>
                </g>
              </g>

              {/* Satellite 3: Social (180 radius) */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="140 0 0" to="500 0 0" dur="70s" repeatCount="indefinite"/>
                <g transform="translate(180 0)">
                  <circle r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="5" fill="#C9A84C"/>
                  <text y="28" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">Social</text>
                </g>
              </g>

              {/* Satellite 4: Talent (220 radius) */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="220 0 0" to="580 0 0" dur="85s" repeatCount="indefinite"/>
                <g transform="translate(220 0)">
                  <circle r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="5" fill="#C9A84C"/>
                  <text y="-22" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">Talent</text>
                </g>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <div className="space-y-6">
              <p className="drop-cap">
                The Agentic AI Marketing Engine is the Academy's force multiplier. By deploying autonomous agents to handle repetitive, data-heavy tasks, we free up human leadership to focus on high-level strategy and relationship building.
              </p>
              <p>
                These agents operate 24/7, scanning for funding opportunities, generating draft content, monitoring social sentiment, and matching talent profiles with production needs.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-102"
              alt="Funding Scout"
              brief="Email inbox macro showing funding opportunities on a monitor, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* Workflows Section */}
      <SectionShell
        eyebrow="06.2"
        title="Automated _Workflows_"
        subtitle="Concrete, running systems that deliver weekly results."
        className="bg-surface/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <ImagePlaceholder
              id="SAFA-IMG-103"
              alt="Content Engine"
              brief="Text generation visualization or code on a dark screen, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">Content Engine</h3>
            <p className="text-sm">Automatically drafting blog posts, social updates, and newsletters based on Academy activity.</p>
          </div>

          <div className="space-y-4">
            <ImagePlaceholder
              id="SAFA-IMG-104"
              alt="Talent Matcher"
              brief="Profile matching interface with Black professional headshots, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">Talent Matcher</h3>
            <p className="text-sm">Scanning the Cineterns database to proactively suggest candidates for new production briefs.</p>
          </div>

          <div className="space-y-4">
            <ImagePlaceholder
              id="SAFA-IMG-105"
              alt="Funding Scout"
              brief="Abstract financial flow chart in gold and navy, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">Funding Scout</h3>
            <p className="text-sm">Monitoring government and private sector grants to ensure the Academy never misses a deadline.</p>
          </div>
        </div>
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _B-BBEE_ strategy?</h2>
          <Link
            href="/growth/bee"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: B-BBEE Strategy →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
