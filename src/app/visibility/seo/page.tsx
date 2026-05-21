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
      {/* HERO SECTION */}
      <PageHero
        eyebrow="7 · Visibility Pillar"
        title="Found by search engines today. Found by AI engines tomorrow. Both, deliberately."
        subtitle="Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface."
        imageSrc="/images/ai/v2/visibility/seo-hero.png"
        imageAlt="Radial knowledge graph or network visualization in gold light"
      />

      <FilmstripDivider />

      {/* Traditional SEO Section */}
      <SectionShell
        eyebrow="07.1"
        title="Traditional SEO"
      >
        <div className="mb-16 max-w-4xl mx-auto">
          <SvgStage aspect="wide" label="Search · Topic Cluster">
            <svg viewBox="-280 -280 560 560" xmlns="http://www.w3.org/2000/svg" className="draw">
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
              <text x="0" y="-250" text-anchor="middle" fill="#C9A84C" opacity="0.5" font-family="Outfit" font-size="8" letter-spacing="3">AI SEARCH HALO · PERPLEXITY · CHATGPT · GOOGLE AI</text>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    Traditional SEO remains foundational. The technical health audit covers <strong>Core Web Vitals improvement</strong>, canonical tag implementation, sitemap submission, and structured data markup.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  <strong>Schema Implementation:</strong> Organization, EducationalOrganization, Course, JobPosting and Event schema types ensure every page on safilmacademy.org is machine-readable to search engines.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Link Authority:</strong> Strategic outbound links to NFVF, MICT SETA, and industry partnerships signal authority in the South African film ecosystem.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/visibility/google-search.png"
              alt="Traditional SEO"
              brief="Google search results macro on a professional monitor in a cinematic office setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />

        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  Every audit, implementation, and optimization builds toward a single metric: <em>discoverability by search</em>. We own the keywords that matter: internship, MICT SETA, B-BBEE, placement, NFVF, and the production companies that define our industry.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/gen/seo-strategy.png"
                      alt="SEO strategy and implementation"
                      brief="SEO strategy and implementation"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/visibility-seo/technical-audit-screen.webp"
              alt="Technical SEO Audit"
              brief="A technical audit dashboard or screening tool on a monitor, showing analytics and performance metrics"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* AI SEO Section */}
      <SectionShell
        eyebrow="07.2"
        title="AI SEO"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  The Academy needs to be the entity that appears <em>inside</em> those answers — not the entity that ranks tenth on a page no one reads. This requires a deliberate strategy of entity disambiguation and authoritative citation.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/visibility/ai-assistant.png"
              alt="AI SEO"
              brief="A chatbot interface or AI assistant on a high-end screen in a cinematic setting, warm gold and deep red tones, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Content strategy?</h2>
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
