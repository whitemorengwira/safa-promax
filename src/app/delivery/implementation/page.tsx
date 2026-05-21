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
  title: '18 · Implementation Commencement · SA Film Academy Strategy',
  description: 'Section 18 of the SA Film Academy 360° marketing strategy: Implementation Commencement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="18 · Implementation Commencement"
        title="Three tracks. Thirty days. Tangible, reportable _results._"
        subtitle="Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted."
        imageSrc="/images/ai/safa-impl-hero.png"
        imageAlt="Film crew launching into action on a professional set"
      />

      <FilmstripDivider />

      {/* Tracks Section */}
      <SectionShell
        eyebrow="18.1"
        title="The Activation _Tracks_"
        subtitle="Simultaneous workstreams for immediate impact."
      >
        <div className="mb-16">
          <SvgStage label="Implementation · 30-Day Schedule" aspect="wide">
            <svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="trackGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#9B7F2D" stop-opacity="0.6"/>
                  <stop offset="70%" stop-color="#E0C268"/>
                  <stop offset="100%" stop-color="#E0C268" stop-opacity="0.8"/>
                </linearGradient>
                <linearGradient id="trackRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#5e1212" stop-opacity="0.6"/>
                  <stop offset="70%" stop-color="#8B1A1A"/>
                  <stop offset="100%" stop-color="#8B1A1A" stop-opacity="0.8"/>
                </linearGradient>
              </defs>

              {/* Track 1: Cineterns */}
              <g transform="translate(0 80)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#C9A84C" opacity="0.15"/>
                <rect x="120" y="0" width="4" height="52" fill="#E0C268"/>
                <text x="138" y="20" fill="#E0C268" font-family="Outfit" font-size="10" letter-spacing="3">TRACK 01 · CINETERNS PLATFORM</text>
                <g fill="#E8E0D0" font-family="Playfair Display" font-style="italic" font-size="13">
                  <text x="138" y="40">Open beta → 50 trainee profiles migrated → first 5 employer accounts → first confirmed placement event logged</text>
                </g>
              </g>

              {/* Track 2: Content Pipeline */}
              <g transform="translate(0 160)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#8B1A1A" opacity="0.15"/>
                <rect x="120" y="0" width="4" height="52" fill="#8B1A1A"/>
                <text x="138" y="20" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">TRACK 02 · CONTENT PIPELINE AT CADENCE</text>
                <g fill="#E8E0D0" font-family="Playfair Display" font-style="italic" font-size="13">
                  <text x="138" y="40">8 SEO blog posts → 1 State of Industry editorial (email-distributed) → social cadence live → podcast episode in production</text>
                </g>
              </g>

              {/* Track 3: Strategic Partnerships */}
              <g transform="translate(0 240)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#C9A84C" opacity="0.05"/>
                <rect x="120" y="0" width="4" height="52" fill="#C9A84C" opacity="0.4"/>
                <text x="138" y="20" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">TRACK 03 · STRATEGIC PARTNERSHIPS</text>
                <g fill="#E8E0D0" font-family="Playfair Display" font-style="italic" font-size="13">
                  <text x="138" y="40">Formalise Suzuki co-brand → Netflix GreenSet case study → 3 Tier 1 production house service agreements signed</text>
                </g>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="drop-cap">
                  The implementation phase is not an aspiration — it is a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
                </p>
                <p>
                  This disciplined approach ensures that the strategy translates into immediate, tangible results for the Academy and its stakeholders.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-142"
              alt="Track 1"
              brief="Cineterns portal profiles on a high-end monitor, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 30-Day Section */}
      <SectionShell
        eyebrow="18.2"
        title="The 30-Day _Sprint_"
        subtitle="Closing the month with reportable deliverables."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p>
                  The first 30 days are critical for establishing momentum. By focusing on high-impact, demonstrable wins, we build the institutional confidence required for long-term success.
                </p>
                <p>
                  Each track is assigned a dedicated lead and a set of clear KPIs, ensuring accountability and transparency throughout the commencement phase.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-145"
              alt="30 Day Timeline"
              brief="Project timeline screen with milestones lighting up in gold, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Board Approval Block */}
      <SectionShell
        eyebrow="18.3"
        title="What we are asking the _board_ to approve."
        subtitle="Three concrete decisions required to proceed."
        className="bg-surface/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal>
            <div className="border-l-2 border-gold pl-6 space-y-3">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold">Budget Envelope</p>
              <p className="text-lg font-display text-text">R 2.4m</p>
              <p className="text-sm text-muted">Annual investment in the 360° marketing strategy, phased across four pillars.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-l-2 border-gold pl-6 space-y-3">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold">Go-Live Date</p>
              <p className="text-lg font-display text-text">1 June 2026</p>
              <p className="text-sm text-muted">Implementation commencement. Three simultaneous activation tracks launch on this date.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="border-l-2 border-gold pl-6 space-y-3">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold">Mandate</p>
              <p className="text-lg font-display text-text">Full Authority</p>
              <p className="text-sm text-muted">Board approval to proceed with the strategy as presented, with quarterly reporting.</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <FilmstripDivider />

      {/* Productions & Testimonial Proof Section */}
      <SectionShell
        eyebrow="18.4"
        title="Proof: Named _Productions_ and _Clients._"
        subtitle="Real institutional partnerships that validate the strategy."
        className="bg-surface/30"
      >
        <div className="space-y-8">
          <Reveal>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-gold font-semibold">Productions Crewed</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">The Woman King</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Warrior</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">One Piece</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Wheel of Time</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Devil's Peak</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Blood & Water</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-gold font-semibold">Client Partners</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Blue Ice Africa</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Film Afrika</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Home Brew Films</span>
                <span className="px-4 py-2 border border-gold/30 text-sm text-text rounded">Mannequin Films</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-surface/50 border border-gold/20 p-6 rounded space-y-3">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold">Testimonial (Placeholder)</p>
              <p className="text-sm italic text-muted leading-relaxed">
                "SA Film Academy has fundamentally changed how we source and develop crew. The quality of trainees, the professionalism of the placement process, and the long-term career support have made SAFA an indispensable partner in our production workflow."
              </p>
              <p className="text-xs text-muted/60">— [Client Name, Title] (awaiting confirmation)</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <FilmstripDivider />

      {/* Risk Acknowledgement Section */}
      <SectionShell
        eyebrow="18.5"
        title="Risk _Acknowledgement._"
        subtitle="Known dependencies and mitigation strategies."
        className="bg-surface/20"
      >
        <div className="space-y-6">
          <Reveal>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text">Key Dependencies</h3>
              <ul className="space-y-3 text-sm text-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Suzuki Co-Brand Partnership:</strong> Strategic partnership dependent on Suzuki's Q2 2026 marketing calendar approval. Mitigation: Alternative partnership pathway with Netflix GreenSet case study.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>NFVF Grant Timing:</strong> R 1.2m funding contingent on NFVF funding cycle (typically Q3 2026). Mitigation: Budget framework includes phased deployment; core tracks launch without this funding.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span><strong>Cineterns Account Target:</strong> 3,000+ verified crew profiles required by Q3 2026. Mitigation: Phased onboarding with existing production partners; data migration from legacy systems.</span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/delivery/kpis"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft transition border-b border-gold hover:border-gold-soft"
            >
              View full risk register and mitigation strategies →
            </Link>
          </Reveal>
        </div>
      </SectionShell>

      <FilmstripDivider />

      {/* EmpowerYouth Presentation Standard Section */}
      <SectionShell
        eyebrow="The New Standard"
        title="How SA Film Academy _presents_ to the world."
        subtitle="Immersive, scroll-based web experiences instead of static documents."
        className="bg-surface/20"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="drop-cap">
                  Going forward, all formal presentations from the Academy — to funders, to production partners, to the SETA, and to corporate Skills Levy clients — will be delivered as immersive, scroll-based web experiences rather than static PowerPoint or PDF documents.
                </p>
                <p>
                  The EmpowerYouth web presentation demonstrates this format: full-screen cinematic sections, scroll-triggered animation, no slides, no decks, no PDFs distributed by email — a URL shared instead.
                </p>
                <p className="font-semibold text-gold text-sm uppercase tracking-widest mt-8">
                  Six Presentation Types
                </p>
                <ul className="space-y-2 text-sm">
                  <li>1. Skills Levy Client Explainer</li>
                  <li>2. GreenSet Sustainability Proposal</li>
                  <li>3. FILMGRO Gauteng Expansion Proposal</li>
                  <li>4. ACE Corporate Sponsor Pitch</li>
                  <li>5. NFVF Funding Narrative</li>
                  <li>6. Cineterns Production Company Onboarding</li>
                </ul>
              </div>
            </Reveal>
          }
          right={
            <div className="flex flex-col justify-center">
              <a
                href="https://empoweryouth.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gold bg-bg/50 p-8 hover:bg-bg/80 transition group"
              >
                <p className="text-xs uppercase tracking-widest text-gold mb-4">Reference Implementation</p>
                <h3 className="text-2xl font-playfair mb-4 group-hover:text-gold transition">EmpowerYouth</h3>
                <p className="text-sm text-body/80 mb-8">
                  A complete example of the immersive web presentation standard. Full-screen sections, scroll-triggered animation, and institutional authority.
                </p>
                <button className="w-full bg-gold text-bg font-semibold uppercase tracking-widest py-3 text-sm hover:bg-gold-soft transition">
                  View Reference →
                </button>
              </a>
            </div>
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _KPI_ dashboard?</h2>
          <Link
            href="/delivery/kpis"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: KPI Dashboard →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
