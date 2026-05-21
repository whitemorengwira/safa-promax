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
  title: '13 · Partnerships, PR & Media Relations · SA Film Academy Strategy',
  description: 'Section 13 of the SA Film Academy 360° marketing strategy: Partnerships, PR & Media Relations',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="13 · Growth Pillar"
        title="Building the Relationships that Earn the Headlines."
        subtitle="A formalised partnership architecture and disciplined media relations plan: converting existing goodwill into named co-brands and recurring press placements."
        imageSrc="/images/ai/v2/growth/part-hero.png"
        imageAlt="Broadcast signal waves radiating from a central point in gold light"
      />

      <FilmstripDivider />

      {/* Broadcast Section */}
      <SectionShell
        eyebrow="13.1"
        title="The Broadcast Core"
      >
        <div className="mb-16 max-w-4xl mx-auto">
          <SvgStage aspect="wide" label="Broadcast · Signal Topology">
            <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="broadcastCore" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#E0C268" stop-opacity="1"/>
                  <stop offset="50%" stop-color="#C9A84C" stop-opacity="0.7"/>
                  <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
                </radialGradient>
              </defs>

              <g transform="translate(600 230)">
                <circle r="40" fill="none" stroke="#C9A84C" stroke-width="1.4" opacity="0.95"/>
                <circle r="80" fill="none" stroke="#C9A84C" stroke-width="1.1" opacity="0.7"/>
                <circle r="130" fill="none" stroke="#C9A84C" stroke-width="0.9" opacity="0.5"/>
                <circle r="180" fill="none" stroke="#C9A84C" stroke-width="0.7" opacity="0.35"/>
                <circle r="235" fill="none" stroke="#C9A84C" stroke-width="0.6" opacity="0.22"/>
                <circle r="290" fill="none" stroke="#C9A84C" stroke-width="0.5" opacity="0.12"/>

                <circle r="28" fill="url(#broadcastCore)"/>
                <circle r="8" fill="#E0C268"/>
                <text y="-50" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">BROADCAST CORE</text>
                <text y="60" text-anchor="middle" fill="#E8E0D0" font-family="Playfair Display" font-size="14" font-style="italic">SA Film Academy</text>
              </g>

              <g font-family="Outfit" font-size="10" letter-spacing="2">
                <g transform="translate(280 130)">
                  <circle r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="3" fill="#C9A84C"/>
                  <text x="-20" y="-20" text-anchor="end" fill="#E8E0D0">SUZUKI</text>
                  <text x="-20" y="-6" text-anchor="end" fill="#C9A84C" opacity="0.7" font-size="9">FilmGro Sponsor</text>
                </g>
                <g transform="translate(280 330)">
                  <circle r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="3" fill="#C9A84C"/>
                  <text x="-20" y="-20" text-anchor="end" fill="#E8E0D0">NETFLIX</text>
                  <text x="-20" y="-6" text-anchor="end" fill="#C9A84C" opacity="0.7" font-size="9">via GreenSet</text>
                </g>
                <g transform="translate(380 80)">
                  <circle r="10" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="2.5" fill="#C9A84C"/>
                  <text x="0" y="-18" text-anchor="middle" fill="#E8E0D0">NFVF</text>
                </g>
                <g transform="translate(380 380)">
                  <circle r="10" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                  <circle r="2.5" fill="#C9A84C"/>
                  <text x="0" y="26" text-anchor="middle" fill="#E8E0D0">DTI · DSAC</text>
                </g>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    A formalised partnership architecture and disciplined media relations plan: converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  By aligning with global brands like Netflix and Suzuki, the Academy reinforces its position as the premier talent pipeline for the South African screen.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/growth/handshake.png"
              alt="Partnerships"
              brief="Professional handshake between Black executives in a high-end boardroom, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Media Relations Section */}
      <SectionShell
        eyebrow="13.2"
        title="Media Relations"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    The Academy's story is one of transformation, excellence, and impact. Our media relations strategy ensures this story is told consistently across industry publications, national news, and digital platforms.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  Through regular press releases, thought-leadership pieces, and strategic media events, we maintain a high-visibility profile that attracts both talent and investment.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/growth/media-event.png"
              alt="Media Relations"
              brief="Industry media event with Black professionals on a red carpet, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Partnership Execution */}
      <SectionShell
        eyebrow="13.3"
        title="Strategic Alliance Development"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Co-branding Agreements:</strong> Netflix, Suzuki, NFVF, and other strategic partners are formalized as co-sponsors of specific SAFA programs, with reciprocal visibility and messaging.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Joint Content:</strong> Case studies, white papers, and webinars developed collaboratively with partners to demonstrate mutual value and reach extended audiences.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Renewal & Expansion:</strong> Quarterly partnership reviews ensure continued alignment and identify new collaboration opportunities across the partner ecosystem.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/growth-partners/strategic-alliance-desk.webp"
              alt="Partnership strategy development"
              brief="Strategic partners in a professional meeting discussing collaboration and alliance opportunities"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Positioning strategy?</h2>
          <Link
            href="/growth/positioning"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Strategic Positioning →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
