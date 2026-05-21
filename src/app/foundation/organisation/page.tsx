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
        subtitle="Who we are, what we actually do, and the perception we have already begun to shift."
        imageSrc="/images/ai/v2/foundation/org-hero.png"
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
                    SA Film Academy is a MICT SETA-accredited Non-Profit Company that facilitates the Work Skills Programme on behalf of the South African film and digital media industries. The Academy applies annually to the SETA for intern placements; the SETA approves a cohort and pays trainee stipends; the Academy then deploys those interns into a roster of production-company clients.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  These production houses are described internally as the Academy's <em>fringe clients</em>: they request a defined number of trainees per production, and SAFA fulfils the placement. Clients include <strong>Blue Ice Africa, Film Afrika, Home Brew Films, Mannequin Films, Moonlighting Films, Spier Films, Atlantic Studios</strong> and an evolving list of others.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/foundation/two-tier-pathway.png"
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
                <p className="text-text/80 leading-relaxed">
                  The trainee pathway is best understood as two clear tiers. In the first year, an intern is placed on a production for twelve months under a SETA-funded stipend; if the placement company puts them on an active production beyond that internship, an additional production fee applies.
                </p>
                <p className="text-text/80 leading-relaxed">
                  After that internship year, the trainee progresses onto SAFA's database and becomes available for future productions, paid by the production company in accordance with the Academy's tiered remuneration policy. Around this two-tier system, the Academy carries the full administrative weight.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/foundation/two-tier-pathway.png"
              alt="Young Black trainee progressing on set"
              brief="A young Black South African trainee progressing on a cinematic film set, showing growth and professional development, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Perception Shift Section */}
      <SectionShell
        eyebrow="02.3"
        title="Shifting the Perception"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    There has historically been a twin perception challenge in the market. The first is that the Academy was led by Cape Town-based white production companies; the second is that trainees were allowed to remain trainees for too long: the <em>perpetual trainee</em> problem.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  Both perceptions are now demonstrably softening. Over the past year, more than <strong>500 new professional connection requests</strong> have landed in the Chief Executive's channels alone, and the industry's tone toward SAFA has perceptibly shifted.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/foundation/org-hero.png"
              alt="Professional networking event with Black film industry professionals"
              brief="Professional networking event with Black film industry professionals, warm celebratory atmosphere"
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
