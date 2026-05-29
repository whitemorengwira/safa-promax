import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { CareerProgression } from '@/components/diagrams/CareerProgression';

export const metadata: Metadata = {
  title: '11 · Community, Alumni & Stakeholder Engagement · SA Film Academy Strategy',
  description: 'Section 11 of the SA Film Academy 360° marketing strategy: Community, Alumni & Stakeholder Engagement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="11 · Delivery Pillar"
        title="From Perpetual Trainee to Permanent Industry Citizen."
        subtitle="The community architecture that dismantles the most damaging perception SAFA has carried, and replaces it with a tiered, visible career pathway."
        imageSrc="/images/ai/v3/delivery/community-hero.webp"
        imageAlt="A group of young Black film alumni networking at a cinematic industry event"
      />

      <FilmstripDivider />

      {/* Mesh Section */}
      <SectionShell
        eyebrow="11.1"
        title="The Community Mesh"
      >
        <div className="mb-14 max-w-7xl mx-auto">
          <CareerProgression />
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The community architecture dismantles the most damaging perception SAFA has carried for two decades, and replaces it with a tiered, visible, celebrated career pathway.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  By formalising the transition from intern to industry professional, we create a sense of belonging and achievement that drives long-term engagement and advocacy.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/v2/delivery-community/community-mesh-workshop.png"
                      alt="Mixed-gender Black alumni and trainees in a mentorship workshop"
                      brief="Mixed-gender Black alumni and trainees in a clean mentorship and community workshop setting"
                      orientation="landscape"
                      safeHeadroom
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery/intern-set.png"
              alt="Tier 1 Intern"
              brief="Eager Black intern (19) on a professional film set, focused expression, cinematic lighting"
              orientation="landscape"
              safeHeadroom
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Alumni Section */}
      <SectionShell
        eyebrow="11.2"
        title="The ACE Alumni"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    Our ACE Alumni are the living proof of the Academy's impact. By highlighting their achievements and providing ongoing support, we build a powerful network of industry leaders who continue to give back to the Academy.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  This tiered system ensures that every graduate has a clear path to becoming a permanent industry citizen, with the skills and connections required to thrive.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery/alumni-director.png"
              alt="ACE Alumnus"
              brief="Confident Black director (28) on a professional film set, cinematic lighting"
              orientation="landscape"
              safeHeadroom
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Mentorship & Advocacy Section */}
      <SectionShell
        eyebrow="11.3"
        title="From Graduate to Mentor"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Mentorship Pipeline:</strong> Senior ACE Alumni mentor new cohorts, creating a virtuous cycle of knowledge transfer and professional development.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Industry Advocacy:</strong> Alumni champions defend and promote the Academy in their networks, becoming ambassadors to production companies, funders, and international colleagues.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Continuous Connection:</strong> Regular gatherings, exclusive content, and ongoing learning opportunities keep the community engaged beyond graduation.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery-community/graduate-to-mentor-woman.png"
              alt="Black woman mentor guiding younger film trainees"
              brief="Black 30-year-old woman mentor guiding younger film trainees on set"
              orientation="landscape"
              safeHeadroom
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the KPI dashboard?</h2>
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
