import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { AIMasterclassFlow } from '@/components/diagrams/AIMasterclassFlow';

export const metadata: Metadata = {
  title: '15 · Agentic AI in the Training Curriculum · SA Film Academy Strategy',
  description: 'Section 15 of the SA Film Academy 360° marketing strategy: Agentic AI in the Training Curriculum',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="15 · Delivery Pillar"
        title="Training Film and TV Crews for the AI-Enabled Production Cycle of 2026."
        subtitle="A practical creative-technology module in generative video, AI-assisted post-production and production workflows."
        imageSrc="/images/ai/v4/delivery/curriculum-ai-training-hero.webp"
        imageAlt="Film and TV trainees in an AI-enabled post-production training studio"
      />

      <FilmstripDivider />

      {/* Neural Network Section */}
      <SectionShell
        eyebrow="15.1"
        title="The AI Masterclass"
      >
        <div className="mb-16 max-w-6xl mx-auto">
          <AIMasterclassFlow />
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    SA Film Academy is treating AI as practical production literacy, not a novelty add-on. The module trains trainees and alumni to use generative video and AI-assisted post-production tools inside real film and television workflows: briefing, prompt development, shot planning, edit review and final delivery.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  The 2026 hiring cycle will reward crew who understand both craft and current production technology. SAFA's advantage is to teach AI in context, with film and television standards at the centre.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery-curriculum/ai-masterclass-lab.png"
              alt="Black trainees using AI video tools in a production classroom"
              brief="Black trainees using AI video tools in a practical production classroom"
              orientation="landscape"
              safeHeadroom
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Masterclass Section */}
      <SectionShell
        eyebrow="15.2"
        title="The Masterclass Module"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    The masterclass covers the entire agentic workflow: from briefing and iteration to review and final delivery. Students learn how to leverage AI to enhance their creative output without compromising on quality or craft.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  This module is not just about the tools; it's about the mindset of the modern filmmaker: one who is comfortable at the intersection of technology and storytelling.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery-curriculum/prompt-iteration-session.png"
              alt="Black trainees running a prompt iteration session for film production"
              brief="Black trainees running a prompt iteration session for film production planning"
              orientation="landscape"
              safeHeadroom
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Continuous Learning */}
      <SectionShell
        eyebrow="Ongoing"
        title="Curriculum Evolution"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Quarterly Reviews:</strong> The curriculum is assessed every three months against industry developments, AI tools, and production company feedback.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Annual Updates:</strong> Major curriculum refreshes occur annually, ensuring trainees learn the skills production companies need right now.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery/ai-workstation.png"
              alt="Modern production training setup"
              brief="State-of-the-art training workstation showing current production tools and technology"
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
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Community strategy?</h2>
          <Link
            href="/delivery/community"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Alumni Community →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
