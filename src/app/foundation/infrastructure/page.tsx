import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { TechStackSimulation } from '@/components/diagrams/TechStackSimulation';
import { PlacementPipelineFlow } from '@/components/diagrams/PlacementPipelineFlow';

export const metadata: Metadata = {
  title: '4 · Digital Infrastructure · SA Film Academy Strategy',
  description: 'Section 4 of the SA Film Academy 360° marketing strategy: Digital Infrastructure',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="04 · Digital Infrastructure"
        title="What has already been built, and why it matters before anything else is scaled."
        subtitle="This strategy is not aspirational. The infrastructure that underpins everything else is already live, deployed and demonstrable."
        imageSrc="/images/ai/v3/foundation/infrastructure-hero.webp"
        imageAlt="Black tech professional at dual monitors with cinematic blue-and-gold light"
      />

      <FilmstripDivider />

      {/* Stack Section */}
      <SectionShell
        eyebrow="04.1"
        title="The Tech Stack"
      >
        <div className="mb-16">
          <TechStackSimulation />
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The digital infrastructure of the SA Film Academy is built on a modern, high-performance stack designed for global scale. Leveraging Next.js 16, Vercel Edge, and Cloudflare, we support fast delivery and POPIA-grade security across all user touchpoints.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  This is not a theoretical plan. The core components of this infrastructure are already live and operational, providing the foundation for the SA Film Interns portal and the Academy's digital presence. We build for the future, on the reality of today.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/safa-infra-hero.png"
                      alt="Digital infrastructure and tech stack"
                      brief="Digital infrastructure and technology stack overview"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/foundation/circuit-topology.png"
              alt="Abstract circuit topology illustration"
              brief="An abstract circuit topology illustration, gold traces on a dark surface, cinematic lighting, warm gold and deep red tones, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Placement Flow Diagram */}
      <SectionShell
        eyebrow="04.2a"
        title="The Placement Pipeline"
        className="bg-surface/20"
      >
        <div className="mb-16">
          <PlacementPipelineFlow />
        </div>
      </SectionShell>

      {/* Infrastructure Operations */}
      <SectionShell
        eyebrow="04.2b"
        title="Infrastructure at Scale"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Global Edge Network:</strong> Content is served from 275+ data centres across 6 continents, ensuring the Academy's digital presence is accessible to production companies and trainees wherever they are.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>24/7 Monitoring:</strong> The platform is continuously monitored for performance, security, and availability. Automated failover ensures zero single points of failure.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>POPIA Compliance:</strong> All trainee data, production records, and sensitive placements are encrypted end-to-end and comply with South African data protection standards.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/foundation-infra/data-center-racks.webp"
              alt="Data centre and infrastructure operations"
              brief="Professional data centre with server racks and monitoring infrastructure, cool blue and gold lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Talent Portal Section */}
      <SectionShell
        eyebrow="04.2"
        title="The SA Film Interns Portal"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    SA Film Interns is the flagship digital product of the SA Film Academy. It serves as a comprehensive talent portal where 500+ trained professionals are indexed, matched, and connected with production opportunities.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  The portal features an AI-driven matching engine that aligns trainee skills with specific production requirements, streamlining the placement process for the Academy's fringe clients. It is the demonstrable proof of our digital transformation.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/foundation/sa-film-interns-interface.png"
              alt="Production manager using the SA Film Interns interface"
              brief="Over-the-shoulder of a Black South African production manager using a clean digital interface on a high-end monitor, cinematic lighting, warm gold and deep red tones, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* CLOSING CALL TO ACTION */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Visibility pillar?</h2>
          <Link
            href="/visibility/calendar"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Visibility Calendar →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
