import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SeoDiscoveryFlywheel } from '@/components/diagrams/SeoDiscoveryFlywheel';

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
        imageSrc="/images/ai/v5/visibility/seo-answer-engine-hero.webp"
        imageAlt="Film and TV strategy team reviewing an AI search visibility command wall"
      />

      <FilmstripDivider />

      {/* Traditional SEO Section */}
      <SectionShell
        eyebrow="07.1"
        title="Traditional SEO"
      >
        <div className="mb-16 max-w-6xl mx-auto">
          <SeoDiscoveryFlywheel />
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
                  <strong>Schema implementation:</strong> Organisation, educational organisation, course, job posting and event schema coverage ensures every page on safilmacademy.org is machine-readable to search engines.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Link Authority:</strong> Strategic outbound links to NFVF, MICT SETA, and industry partnerships signal authority in the South African film ecosystem.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v5/visibility/seo-technical-audit-dashboard.webp"
              alt="Traditional SEO technical audit dashboard"
              brief="Real technical SEO audit monitor with practical KPI cards, tables, charts and status panels."
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
                  Every audit, implementation, and optimisation builds toward a single metric: <em>discoverability by search</em>. We own the keywords that matter: internship, MICT SETA, B-BBEE, placement, NFVF, and the production companies that define our industry.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/v5/visibility/seo-schema-authority-map.webp"
                      alt="SEO schema and authority dashboard"
                      brief="Real schema and authority management dashboard with validation tables, citation cards and coverage metrics."
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v5/visibility/seo-search-intent-workstation.webp"
              alt="Search intent workstation"
              brief="Professional search operations workstation with practical keyword, ranking and content opportunity dashboards."
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
              src="/images/ai/v5/visibility/seo-ai-answer-citation-screen.webp"
              alt="AI answer engine citation screen"
              brief="Real AI answer and citation tracking dashboard on a physical monitor."
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
