import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';

export const metadata: Metadata = {
  title: '2 · The Organisation · SA Film Academy Strategy',
  description: 'Section 2 of the SA Film Academy 360° marketing strategy: The Organisation',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="Pillar 01 · Section 02"
        title="The Organisation."
        subtitle="Who we are, what we do, and the perception we have already begun to shift."
        imageSrc="/images/ai/v3/foundation/organisation-hero.webp"
        imageAlt="Professional Black South African film crew on a cinematic movie set"
      />

      <FilmstripDivider />

      {/* Core Mission Section */}
      <SectionShell
        eyebrow="02.1"
        title="The Work Skills Facilitator"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    SA Film Academy is a MICT SETA-accredited Non-Profit Company that facilitates the Work Skills Programme on behalf of the South African film and digital media industries.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  The Academy applies annually to the SETA for intern placements; the SETA approves a cohort and pays trainee stipends; the Academy then deploys those interns into a roster of production-company clients.
                </p>
                <p className="text-text/80 leading-relaxed">
                  These production houses are described internally as the Academy's <em>fringe clients</em>: they request a defined number of trainees per production, and SAFA fulfils the placement. Clients include <strong>Blue Ice Africa, Film Afrika, Home Brew Films, Mannequin Films, Moonlighting Films, Spier Films, Atlantic Studios</strong> and an evolving list of others.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/safa-accreditation-new.png"
                      alt="MICT SETA accreditation"
                      brief="MICT SETA accreditation certificate and credentials"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/foundation-org/trainees-live-production.webp"
              alt="Black trainees on a live production set"
              brief="Black trainees on a live production set, working alongside experienced crew members, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Two-Tier System Section */}
      <SectionShell
        eyebrow="02.2"
        title="The Two-Tier Pathway"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    The trainee pathway is best understood as two clear tiers.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  <strong>Tier 1:</strong> In the first year, an intern is placed on a production for twelve months under a SETA-funded stipend. If the placement company extends them onto an active production beyond that internship, an additional production fee applies.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Tier 2:</strong> After that internship year, the trainee progresses onto SAFA's database and becomes available for future productions, paid directly by production companies in accordance with our tiered remuneration policy.
                </p>
                <p className="text-text/80 leading-relaxed">
                  The Academy carries the full administrative weight around this two-tier system.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/safa-tier1-intern.png"
                      alt="Tier 1 intern on professional set"
                      brief="Tier 1 intern on a professional production set"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/foundation-org/hero-executive-walk.webp"
              alt="Young Black trainee progressing professionally on a film set"
              brief="A young Black South African trainee walking with confidence on a professional film set, showing career progression and industry integration, warm gold and cinematic lighting."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Administration & Compliance Section */}
      <SectionShell
        eyebrow="02.3"
        title="The Administrative Infrastructure"
        className="bg-surface/20"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  The Academy's operational backbone is a tightly-managed administrative system that tracks placements, manages stipend approvals, coordinates production schedules, and ensures compliance with SETA accreditation requirements.
                </p>
                <p className="text-text/80 leading-relaxed">
                  This infrastructure is invisible to stakeholders but essential to scale: every intern placement, production handoff, and trainee progression requires documented approval and audit trail.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/safa-org-hero.png"
                      alt="Academy administrative operations"
                      brief="Academy administrative and compliance operations"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/foundation-org/compliance-desk.webp"
              alt="Academy administrative and compliance operations"
              brief="Professional administrative workspace with compliance documentation and management systems, organised and professional"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Perception Shift Section */}
      <SectionShell
        eyebrow="02.4"
        title="Shifting the Perception"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    There has historically been a twin perception challenge in the market.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  <strong>Perception 1:</strong> The Academy was sometimes misread through the lens of the production companies it served, rather than through its own Black-led training, placement, and industry-development mandate.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Perception 2:</strong> Trainees were allowed to remain trainees for too long: the <em>perpetual trainee</em> problem, undermining both the Academy's and trainees' professional standing.
                </p>
                <p className="text-text/80 leading-relaxed">
                  Both perceptions are now demonstrably softening. Over the past year, more than <strong>500 new professional connection requests</strong> have landed in the Chief Executive's channels alone, and the industry's tone toward SAFA has perceptibly shifted.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/safa-perception-new.png"
                      alt="Shifting the perception of SAFA"
                      brief="Shifting the perception of SAFA in the industry"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/foundation-org/networking-event.webp"
              alt="Professional networking event with Black film industry professionals"
              brief="Professional networking event with Black film industry professionals, warm celebratory atmosphere, industry leaders connecting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Ecosystem?</h2>
          <Link
            href="/foundation/ecosystem"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Brand Ecosystem →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
