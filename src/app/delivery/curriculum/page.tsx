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
  title: '15 · Agentic AI in the Training Curriculum · SA Film Academy Strategy',
  description: 'Section 15 of the SA Film Academy 360° marketing strategy: Agentic AI in the Training Curriculum',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="15 · Agentic AI in the Training Curriculum"
        title="The Only Film Academy in South Africa Training for the _Post-Production Hiring Cycle of 2026._"
        subtitle="A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned as a curriculum differentiator."
        imageSrc="/images/ai/v2/v2-sub-curriculum.png"
        imageAlt="Neural network abstract in gold and blue"
      />

      <FilmstripDivider />

      {/* Neural Network Section */}
      <SectionShell
        eyebrow="15.1"
        title="The AI _Masterclass_"
        subtitle="Integrating generative intelligence into the core craft."
      >
        <div className="mb-16">
          <SvgStage label="Curriculum · Neural Network" aspect="wide">
            <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="neuralNode" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#E0C268" stop-opacity="1"/>
                  <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
                </radialGradient>
              </defs>

              <g>
                <circle cx="180" cy="100" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1.3"/>
                <circle cx="180" cy="100" r="5" fill="url(#neuralNode)"/>
                <circle cx="180" cy="190" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1.3"/>
                <circle cx="180" cy="190" r="5" fill="url(#neuralNode)"/>
                <circle cx="180" cy="280" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1.3"/>
                <circle cx="180" cy="280" r="5" fill="url(#neuralNode)"/>
                <circle cx="180" cy="370" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1.3"/>
                <circle cx="180" cy="370" r="5" fill="url(#neuralNode)"/>
                <text x="180" y="60" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">INPUT · CORE CRAFT</text>
                <text x="180" y="416" text-anchor="middle" fill="#E0C268" opacity="0.7" font-family="Playfair Display" font-style="italic" font-size="11">cinematography · editing · sound · grading</text>
              </g>

              <g>
                <circle cx="460" cy="80" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="460" cy="80" r="4" fill="url(#neuralNode)"/>
                <circle cx="460" cy="170" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="460" cy="170" r="4" fill="url(#neuralNode)"/>
                <circle cx="460" cy="260" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="460" cy="260" r="4" fill="url(#neuralNode)"/>
                <circle cx="460" cy="350" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="460" cy="350" r="4" fill="url(#neuralNode)"/>
                <text x="460" y="40" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">HIDDEN · AI TOOLING</text>
                <text x="460" y="396" text-anchor="middle" fill="#E0C268" opacity="0.7" font-family="Playfair Display" font-style="italic" font-size="11">Veo · Kling · Hailuo · Runway</text>
              </g>

              <g>
                <circle cx="740" cy="80" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="740" cy="80" r="4" fill="url(#neuralNode)"/>
                <circle cx="740" cy="170" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="740" cy="170" r="4" fill="url(#neuralNode)"/>
                <circle cx="740" cy="260" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="740" cy="260" r="4" fill="url(#neuralNode)"/>
                <circle cx="740" cy="350" r="12" fill="#13131a" stroke="#C9A84C" stroke-width="1.1"/>
                <circle cx="740" cy="350" r="4" fill="url(#neuralNode)"/>
                <text x="740" y="40" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="3">HIDDEN · AGENTIC WORKFLOW</text>
                <text x="740" y="396" text-anchor="middle" fill="#E0C268" opacity="0.7" font-family="Playfair Display" font-style="italic" font-size="11">briefing · iteration · review · delivery</text>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="drop-cap">
                  The SA Film Academy is the only institution in South Africa training for the post-production hiring cycle of 2026. Our masterclass module on generative AI tools is positioned as a marketing, curriculum, and commercial differentiator.
                </p>
                <p>
                  By integrating tools like Veo, Kling, and Hailuo into the core craft, we ensure our graduates are not just ready for the industry today, but are leading it tomorrow.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-146"
              alt="AI Tools"
              brief="Black student (22) at a workstation with AI video generation interface, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Masterclass Section */}
      <SectionShell
        eyebrow="15.2"
        title="The _Masterclass_ Module"
        subtitle="Practical, hands-on training with cutting-edge platforms."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p>
                  The masterclass covers the entire agentic workflow: from briefing and iteration to review and final delivery. Students learn how to leverage AI to enhance their creative output without compromising on quality or craft.
                </p>
                <p>
                  This module is not just about the tools; it's about the mindset of the modern filmmaker — one who is comfortable at the intersection of technology and storytelling.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-147"
              alt="Masterclass"
              brief="Creatives in a high-end workshop environment, focused on a large screen, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _Community_ strategy?</h2>
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
