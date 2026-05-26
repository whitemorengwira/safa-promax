import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SvgStage } from '@/components/visuals/SvgStage';
import { FiveAgenticWorkflows } from '@/components/diagrams/FiveAgenticWorkflows';

export const metadata: Metadata = {
  title: '6 · Agentic AI Marketing Engine · SA Film Academy Strategy',
  description: 'Section 6 of the SA Film Academy 360° marketing strategy: Agentic AI Marketing Engine',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="6 · Growth Pillar"
        title="Not an aspiration. A set of concrete, running, weekly automated workflows."
        subtitle="Five autonomous agents that operate without human initiation, turning the Academy's capacity constraint into its largest competitive advantage."
        imageSrc="/images/ai/v2/growth/agentic-hero.png"
        imageAlt="Abstract orbital AI system or neural network in gold and blue"
      />

      <FilmstripDivider />

      {/* Orbital System Section */}
      <SectionShell
        eyebrow="06.1"
        title="The Agentic Core"
      >
        <div className="mb-16">
          <FiveAgenticWorkflows />
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The Agentic AI Marketing Engine is the Academy's force multiplier. By deploying autonomous agents to handle repetitive, data-heavy tasks, we free up human leadership to focus on high-level strategy and relationship building.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  These agents operate 24/7, scanning for funding opportunities, generating draft content, monitoring social sentiment, and matching talent profiles with production needs.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/safa-ai-hero.png"
                      alt="Agentic AI engine and automation"
                      brief="Agentic AI engine and automation"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/growth/funding-scout.png"
              alt="Funding Scout"
              brief="An email inbox macro showing funding opportunities on a monitor in a cinematic office setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Workflows Section */}
      <SectionShell
        eyebrow="06.2"
        title="Automated Workflows"
        className="bg-surface/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Agent 01 */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h4 className="text-gold font-display italic text-xl mb-4">Agent 01 · Funding Scout</h4>
              <p className="text-sm text-text/70 leading-relaxed mb-4">
                Automatically identifies government grants, NGO funding, CSI opportunities, and SETA partnerships. The agent monitors DAFF AgriSETA, NAMB, DSBD, IDC, Comic Relief, British Council, Netflix Fund, and others.
              </p>
              <p className="text-xs text-gold/60 font-semibold uppercase tracking-widest">Weekly · Scans 12 funding streams</p>
            </div>
          </Reveal>

          {/* Agent 02 */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h4 className="text-gold font-display italic text-xl mb-4">Agent 02 · Content Pipeline</h4>
              <p className="text-sm text-text/70 leading-relaxed mb-4">
                Generates two blog posts per week with full SEO markup, internal linking suggestions, and AI search engine optimisation. Each post targets specific keyword clusters.
              </p>
              <p className="text-xs text-gold/60 font-semibold uppercase tracking-widest">Twice Weekly · SEO & AI optimised</p>
            </div>
          </Reveal>

          {/* Agent 03 */}
          <Reveal delay={0.3}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h4 className="text-gold font-display italic text-xl mb-4">Agent 03 · Perception Monitor</h4>
              <p className="text-sm text-text/70 leading-relaxed mb-4">
                Listens to LinkedIn, Twitter, Instagram, Reddit, news mentions, and competitor activity. Categorises sentiment, flags high-reach mentions, and identifies partnership opportunities.
              </p>
              <p className="text-xs text-gold/60 font-semibold uppercase tracking-widest">Daily · Monitors 6 channels</p>
            </div>
          </Reveal>

          {/* Agent 04 */}
          <Reveal delay={0.4}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h4 className="text-gold font-display italic text-xl mb-4">Agent 04 · Talent Matcher</h4>
              <p className="text-sm text-text/70 leading-relaxed mb-4">
                Instant candidate suggestions when production companies submit briefs through SA Film Intense. Matches trainee skills against role requirements and optimises for tier advancement.
              </p>
              <p className="text-xs text-gold/60 font-semibold uppercase tracking-widest">Embedded · Real-time matching</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm max-w-6xl mx-auto">
          <h4 className="text-gold font-display italic text-xl mb-4">Operational Architecture</h4>
          <p className="text-sm text-text/70 leading-relaxed">
            All five agents run on the same secure cloud infrastructure already provisioned for the talent portal. Workflows operate on fixed schedules and surface only decisions requiring human judgment. No agent acts without a human review gate on sensitive outputs.
          </p>
        </div>
      </SectionShell>

      {/* Implementation & Operations */}
      <SectionShell
        eyebrow="06.3"
        title="Running 24/7"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>No human bottleneck.</strong> The agents operate continuously, surfacing insights and decisions to the leadership team as daily reports, not interruptions.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Feedback Loop:</strong> Each agent improves from every decision the team makes. Over time, the system becomes smarter about what matters and what doesn't.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Scalability:</strong> Adding new agents takes days, not months. The infrastructure is built for growth.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/growth-ai/server-lights-macro.webp"
              alt="Agentic infrastructure running 24/7"
              brief="Server rack with active status lights and monitoring displays, 24/7 operations environment"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the B-BBEE strategy?</h2>
          <Link
            href="/growth/commercial"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: B-BBEE Strategy →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
