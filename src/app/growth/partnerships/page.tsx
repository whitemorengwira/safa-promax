import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { BroadcastCoreMap } from '@/components/diagrams/BroadcastCoreMap';

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
        imageSrc="/images/ai/v3/growth/partnerships-hero.webp"
        imageAlt="Broadcast signal waves radiating from a central point in gold light"
      />

      <FilmstripDivider />

      {/* Broadcast Section */}
      <SectionShell
        eyebrow="13.1"
        title="The Broadcast Core"
      >
        <div className="mb-16 max-w-6xl mx-auto">
          <BroadcastCoreMap />
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
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/v3/growth/partnerships-hero.webp"
                      alt="Strategic partnerships and alliances"
                      brief="Strategic partnerships and alliances"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v3/growth/female-handshake.webp"
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
