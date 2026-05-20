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
  title: '7 · SEO & AI SEO Strategy · SA Film Academy Strategy',
  description: 'Section 7 of the SA Film Academy 360° marketing strategy: SEO & AI SEO Strategy',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="07 · SEO & AI SEO Strategy"
        title="Found by search engines today. Found by AI engines tomorrow. Both, _deliberately._"
        subtitle="Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface."
        imageSrc="/images/ai/safa-seo-hero.png"
        imageAlt="Radial knowledge graph or network visualization in gold light"
      />

      <FilmstripDivider />

      {/* Traditional SEO Section */}
      <SectionShell
        eyebrow="07.1"
        title="Traditional _SEO_"
        subtitle="The technical health audit and keyword strategy for the modern web."
      >
        <div className="mb-16">
          <SvgStage aspect="wide" label="Search · Topic Cluster">
            <svg viewBox="-250 -250 500 500" xmlns="http://www.w3.org/2000/svg" className="draw">
              {/* Centre node */}
              <circle cx="0" cy="0" r="42" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
              <text x="0" y="-4" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="1">SA FILM</text>
              <text x="0" y="8" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="1">ACADEMY</text>

              {/* Radial branches with cluster nodes */}
              <g stroke="#C9A84C" stroke-opacity="0.45" stroke-width="0.8" fill="none">
                <line x1="0" y1="-42" x2="0" y2="-150"/>
                <line x1="42" y1="0" x2="150" y2="0"/>
                <line x1="0" y1="42" x2="0" y2="150"/>
                <line x1="-42" y1="0" x2="-150" y2="0"/>
                <line x1="30" y1="-30" x2="130" y2="-130"/>
                <line x1="30" y1="30" x2="130" y2="130"/>
                <line x1="-30" y1="-30" x2="-130" y2="-130"/>
                <line x1="-30" y1="30" x2="-130" y2="130"/>
              </g>

              {/* Cluster nodes (8 keyword groups) */}
              <g font-family="Playfair Display" font-style="italic" font-size="10" fill="#E0C268">
                <g><circle cx="0" cy="-165" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="0" y="-190" text-anchor="middle">internship</text></g>
                <g><circle cx="165" cy="0" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="200" y="-4" text-anchor="start">MICT SETA</text></g>
                <g><circle cx="0" cy="165" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="0" y="195" text-anchor="middle">B-BBEE</text></g>
                <g><circle cx="-165" cy="0" r="14" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="-200" y="-4" text-anchor="end">NFVF</text></g>
                <g><circle cx="142" cy="-142" r="13" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="172" y="-160" text-anchor="middle">placement</text></g>
                <g><circle cx="142" cy="142" r="13" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="172" y="160" text-anchor="middle">GreenSet</text></g>
                <g><circle cx="-142" cy="-142" r="13" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="-172" y="-160" text-anchor="middle">trainee</text></g>
                <g><circle cx="-142" cy="142" r="13" fill="#13131a" stroke="#C9A84C" stroke-width="1"/><text x="-172" y="160" text-anchor="middle">FILMGRO</text></g>
              </g>

              {/* Outer ring (AI SEO halo) */}
              <circle cx="0" cy="0" r="230" fill="none" stroke="#C9A84C" stroke-opacity="0.15" stroke-width="0.5" stroke-dasharray="3 4"/>
              <text x="0" y="-235" text-anchor="middle" fill="#C9A84C" opacity="0.5" font-family="Outfit" font-size="8" letter-spacing="3">AI SEARCH HALO · PERPLEXITY · CHATGPT · GOOGLE AI</text>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <div className="space-y-6">
              <p className="drop-cap">
                The technical health audit covers Core Web Vitals improvement, canonical tag implementation, sitemap submission, and structured data markup using <strong>Organization</strong>, <strong>EducationalOrganization</strong>, <strong>Course</strong>, <strong>JobPosting</strong> and <strong>Event</strong> schema types.
              </p>
              <p>
                Every page on safilmacademy.org will be re-indexed with the appropriate schema, making the Academy machine-readable to every search engine in a way it currently is not.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-066"
              alt="Traditional SEO"
              brief="Google search results macro on a professional monitor, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* AI SEO Section */}
      <SectionShell
        eyebrow="07.2"
        title="AI _SEO_"
        subtitle="Generative Engine Optimisation for the next era of discovery."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <div className="space-y-6">
              <p>
                An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it.
              </p>
              <p>
                The Academy needs to be the entity that appears <em>inside</em> those answers — not the entity that ranks tenth on a page no one reads. This requires a deliberate strategy of entity disambiguation and authoritative citation.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              id="SAFA-IMG-067"
              alt="AI SEO"
              brief="Chatbot interface or AI assistant on a high-end screen, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _Content_ strategy?</h2>
          <Link
            href="/visibility/content"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Content Marketing →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
