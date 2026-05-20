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
        imageSrc="/images/ai/v2/hero-agentic-ai.png"
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
        subtitle="Five concrete agents running autonomous cycles. No human initiation needed."
        className="bg-surface/30"
      >
        <div className="space-y-8">
          {/* Agent 01 */}
          <div className="border border-line p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-gold">Agent 01 · Funding Scout</h4>
                <p className="text-muted text-xs mt-1">Weekly · Scans 12 funding streams</p>
              </div>
              <span className="text-gold-soft font-display text-2xl opacity-30">R2.5M</span>
            </div>
            <p className="mb-4">Automatically identifies government grants, NGO funding, CSI opportunities, and SETA partnerships. The agent monitors DAFF AgriSETA, NAMB, DSBD, IDC, Comic Relief, British Council, Netflix Fund, and others—submitting 12+ applications per year. Success target: 25% funding capture rate.</p>
            <p className="text-xs text-muted">Time saved: 48 hours per year on grant application research</p>
          </div>

          {/* Agent 02 */}
          <div className="border border-line p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-gold">Agent 02 · Content Pipeline</h4>
                <p className="text-muted text-xs mt-1">Twice Weekly · SEO & AI optimised</p>
              </div>
              <span className="text-gold-soft font-display text-2xl opacity-30">8–10</span>
            </div>
            <p className="mb-4">Generates two blog posts per week with full SEO markup, internal linking suggestions, and AI search engine optimisation. Each post targets specific keyword clusters (film internships, MICT SETA, B-BBEE, AI production tools). Posts include meta descriptions, schema markup, and social snippets ready for publication.</p>
            <p className="text-xs text-muted">Time saved: 32 hours per month | Organic traffic target: +35% YoY</p>
          </div>

          {/* Agent 03 */}
          <div className="border border-line p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-gold">Agent 03 · Perception Monitor</h4>
                <p className="text-muted text-xs mt-1">Daily · Monitors 6 channels</p>
              </div>
              <span className="text-gold-soft font-display text-2xl opacity-30">24/7</span>
            </div>
            <p className="mb-4">Listens to LinkedIn, Twitter, Instagram, Reddit, news mentions, and competitor activity. Categorises sentiment (positive, neutral, negative), flags high-reach mentions, identifies partnership opportunities, and surfaces misinformation requiring response. Daily digest with recommended response templates.</p>
            <p className="text-xs text-muted">Response time target: &lt; 4 hours | Sentiment improvement target: +15%</p>
          </div>

          {/* Agent 04 */}
          <div className="border border-line p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-gold">Agent 04 · Talent Matcher</h4>
                <p className="text-muted text-xs mt-1">Embedded · Real-time matching</p>
              </div>
              <span className="text-gold-soft font-display text-2xl opacity-30">10+</span>
            </div>
            <p className="mb-4">Instant candidate suggestions when production companies submit briefs on Cineterns. Matches trainee skills against role requirements, filters availability, optimises for tier advancement (tier 2 and tier 3 prioritised), and suggests top 5 candidates with match scores. Placement cycle reduced from 10–14 days to 3–5 days.</p>
            <p className="text-xs text-muted">Placements per week: 10+ | Acceptance rate target: 75%</p>
          </div>

          {/* Agent 05 */}
          <div className="border border-line p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-gold">Agent 05 · Reputation Index</h4>
                <p className="text-muted text-xs mt-1">Weekly · Strategic briefing</p>
              </div>
              <span className="text-gold-soft font-display text-2xl opacity-30">+25%</span>
            </div>
            <p className="mb-4">Aggregates brand mentions, competitive positioning, partner sentiment, and industry narrative trends. Generates Reputation Health Index (0–100) with strategic recommendations for CEO and comms team. Tracks SAFA vs. competitor mentions, policy signals, and emerging opportunities in media and partnerships.</p>
            <p className="text-xs text-muted">Health score baseline: Month 1 | Target improvement: +25% by Month 12</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-surface border border-line-strong">
          <h4 className="text-gold mb-3">Operational Architecture</h4>
          <p className="text-sm mb-4">All five agents run on the Claude API infrastructure already provisioned in Cineterns. Workflows operate on fixed schedules (weekly, twice-weekly, daily, or continuous) and surface only decisions requiring human judgment. No agent acts without human review gate on sensitive outputs (funding applications, content before publication, major partnership recommendations).</p>
          <p className="text-xs text-muted">Total monthly cost: R3,800 (Claude API allocation)</p>
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
