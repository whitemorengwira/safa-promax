import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SvgStage } from '@/components/visuals/SvgStage';
import { RoadmapAccountabilitySection } from '@/components/strategy/BoardStrategySections';

export const metadata: Metadata = {
  title: '18 · Implementation Commencement · SA Film Academy Strategy',
  description: 'Section 18 of the SA Film Academy 360° marketing strategy: Implementation Commencement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="18 · Implementation Commencement"
        title="Three tracks. Thirty days. Tangible, reportable results."
        subtitle="Not an aspiration: a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted."
        imageSrc="/images/ai/v2/delivery/impl-hero.png"
        imageAlt="Film crew launching into action on a professional set"
      />

      <FilmstripDivider />

      {/* Tracks Section */}
      <SectionShell
        eyebrow="18.1"
        title="The Activation Tracks"
      >
        <div className="mb-16">
          <SvgStage label="Implementation · 30-Day Schedule" aspect="wide">
            <svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="trackGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9B7F2D" stopOpacity="0.6"/>
                  <stop offset="70%" stopColor="#E0C268"/>
                  <stop offset="100%" stopColor="#E0C268" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="trackRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5e1212" stopOpacity="0.6"/>
                  <stop offset="70%" stopColor="#8B1A1A"/>
                  <stop offset="100%" stopColor="#8B1A1A" stopOpacity="0.8"/>
                </linearGradient>
              </defs>

              {/* Track 1: SA Film Intense */}
              <g transform="translate(0 80)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#C9A84C" opacity="0.15"/>
                <rect x="120" y="0" width="4" height="52" fill="#E0C268"/>
                <text x="138" y="20" fill="#E0C268" fontFamily="Outfit" fontSize="10" letterSpacing="3">TRACK 01 · SA FILM INTENSE PLATFORM</text>
                <g fill="#E8E0D0" fontFamily="Playfair Display" fontStyle="italic" fontSize="13">
                  <text x="138" y="40">Open beta → 50 trainee profiles migrated → first 5 employer accounts → first confirmed placement event logged</text>
                </g>
              </g>

              {/* Track 2: Content Pipeline */}
              <g transform="translate(0 160)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#8B1A1A" opacity="0.15"/>
                <rect x="120" y="0" width="4" height="52" fill="#8B1A1A"/>
                <text x="138" y="20" fill="#C9A84C" fontFamily="Outfit" fontSize="10" letterSpacing="3">TRACK 02 · CONTENT PIPELINE AT CADENCE</text>
                <g fill="#E8E0D0" fontFamily="Playfair Display" fontStyle="italic" fontSize="13">
                  <text x="138" y="40">8 SEO blog posts → 1 State of Industry editorial (email-distributed) → social cadence live → podcast episode in production</text>
                </g>
              </g>

              {/* Track 3: Strategic Partnerships */}
              <g transform="translate(0 240)">
                <rect x="120" y="0" width="1000" height="52" rx="0" fill="#C9A84C" opacity="0.05"/>
                <rect x="120" y="0" width="4" height="52" fill="#C9A84C" opacity="0.4"/>
                <text x="138" y="20" fill="#C9A84C" fontFamily="Outfit" fontSize="10" letterSpacing="3">TRACK 03 · STRATEGIC PARTNERSHIPS</text>
                <g fill="#E8E0D0" fontFamily="Playfair Display" fontStyle="italic" fontSize="13">
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
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The implementation phase is not an aspiration: it is a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  This disciplined approach ensures that the strategy translates into immediate, tangible results for the Academy and its stakeholders. We move with purpose, at pace.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/gen/implementation-launch.png"
                      alt="30-day implementation launch"
                      brief="30-day implementation launch"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery-implementation/clapperboard-action-shot.png"
              alt="Clapperboard action shot signalling implementation launch"
              brief="Clapperboard mid-snap on a professional film set under warm gold and deep red cinematic lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 30-Day Section */}
      <SectionShell
        eyebrow="18.2"
        title="The 30-Day Sprint"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    The first 30 days are critical for establishing momentum. By focusing on high-impact, demonstrable wins, we build the institutional confidence required for long-term success.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  Each track is assigned a dedicated lead and a set of clear KPIs, ensuring accountability and transparency throughout the commencement phase.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery/timeline-milestones.png"
              alt="Project timeline screen with milestones"
              brief="A project timeline screen with milestones lighting up in gold in a cinematic setting, warm gold and deep red tones, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      <RoadmapAccountabilitySection />

      {/* Board Approval Block */}
      <SectionShell
        eyebrow="18.3"
        title="Board Approval Required"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Budget Envelope</p>
              <p className="text-2xl font-display text-text mb-4">R 2.4m</p>
              <p className="text-sm text-text/70 leading-relaxed">Annual investment in the 360° marketing strategy, phased across four pillars.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Go-Live Date</p>
              <p className="text-2xl font-display text-text mb-4">1 June 2026</p>
              <p className="text-sm text-text/70 leading-relaxed">Implementation commencement. Three simultaneous activation tracks launch on this date.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Mandate</p>
              <p className="text-2xl font-display text-text mb-4">Full Authority</p>
              <p className="text-sm text-text/70 leading-relaxed">Board approval to proceed with the strategy as presented, with quarterly reporting.</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Launch Readiness */}
      <SectionShell
        eyebrow="18.3"
        title="Launch Readiness & Execution"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>June 1 Launch:</strong> All systems go. Three tracks activate simultaneously on day one, with daily stand-ups tracking progress against the 30-day deliverable schedule.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Reporting & Transparency:</strong> Weekly updates to the Board show exactly what shipped, what's blocked, and what's next. No delays hidden. The calendar is the contract.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery/timeline-milestones.png"
              alt="Implementation timeline and milestones"
              brief="Visual timeline showing key implementation milestones and deliverables"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* CLOSING CALL TO ACTION */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Budget framework?</h2>
          <Link
            href="/delivery/budget"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Budget Framework →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
