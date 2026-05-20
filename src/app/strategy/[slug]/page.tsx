import { notFound } from 'next/navigation';
import { sectionIndex, slugToId } from '@/lib/content/sections';
import { pageData } from '@/lib/content/pageData';
import { strategySections } from '@/data/nav';
import { parseContent } from '@/lib/content/parseContent';

import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { WordReveal } from '@/components/motion/WordReveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';

import { SectionShell } from '@/components/sections/SectionShell';
import { StatBand } from '@/components/sections/StatBand';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { CardGrid } from '@/components/sections/CardGrid';
import { Timeline } from '@/components/sections/Timeline';
import { DataTable } from '@/components/sections/DataTable';
import { AgentOrbit } from '@/components/sections/AgentOrbit';
import { SectionNav } from '@/components/sections/SectionNav';

import { EcosystemMap } from '@/components/diagrams/EcosystemMap';
import { CircuitTopology } from '@/components/diagrams/CircuitTopology';
import { TopicCluster } from '@/components/diagrams/TopicCluster';
import { BrandFamily } from '@/components/diagrams/BrandFamily';
import { PositioningRadar } from '@/components/diagrams/PositioningRadar';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return strategySections.map((section) => ({
    slug: section.href.replace('/strategy/', ''),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sectionId = slugToId[slug];
  if (!sectionId) return {};
  const section = sectionIndex[sectionId];
  return {
    title: `${section.num} ${section.title.slice(0, 60)} · SA Film Academy`,
    description: section.subtitle,
  };
}

export default async function StrategyPage({ params }: PageProps) {
  const { slug } = await params;

  // Lookup section by slug
  const sectionId = slugToId[slug];
  if (!sectionId) notFound();

  const section = sectionIndex[sectionId];
  const data = pageData[slug];

  if (!section || !data) notFound();

  // Find prev/next sections
  const currentIndex = strategySections.findIndex(
    (s) => s.href === `/strategy/${slug}`
  );
  const prevSection = currentIndex > 0 ? strategySections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < strategySections.length - 1
      ? strategySections[currentIndex + 1]
      : null;

  // Parse content into blocks
  const contentBlocks = parseContent(section.content);
  const introBlocks = contentBlocks.filter((b) => b.type !== 'skip').slice(0, 3);
  const remainingBlocks = contentBlocks.filter((b) => b.type !== 'skip').slice(3);


  return (
    <main className="flex flex-col">
      {/* Hero band */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <ImagePlaceholder
          src={data.heroImageBrief.startsWith('/') ? data.heroImageBrief : undefined}
          alt={data.heroImageAlt}
          brief={data.heroImageBrief}
          orientation="video"
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center section-padding container-max">
          <span className="eyebrow mb-6">
            <span className="num">{section.num} ·</span>
          </span>

          <WordReveal tag="h1" text={section.title} className="mb-6 max-w-4xl" />

          {section.subtitle && (
            <Reveal className="mb-8">
              <p className="font-display-alt italic text-gold-soft text-xl md:text-2xl max-w-3xl leading-relaxed">
                {section.subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <FilmstripDivider />

      {/* Intro copy band with 70/30 visual ratio */}
      {introBlocks.length > 0 && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <div className="layout-visual-heavy">
                {/* 70% Visual: Hero image */}
                <div className="visual-container order-last lg:order-first">
                  <ImagePlaceholder
                    src={data.heroImageBrief.startsWith('/') ? data.heroImageBrief : undefined}
                    alt={data.heroImageAlt}
                    brief={data.heroImageBrief}
                    orientation="video"
                    className="w-full h-auto"
                  />
                </div>

                {/* 30% Text: Intro copy with floating animation */}
                <div className="text-container">
                  <span className="eyebrow mb-2">
                    <span className="num">{section.num} ·</span>
                  </span>
                  <WordReveal tag="h2" text={section.title} className="mb-4" />
                  {section.subtitle && (
                    <Reveal className="mb-6">
                      <p className="font-display-alt italic text-gold-soft text-lg leading-relaxed">
                        {section.subtitle}
                      </p>
                    </Reveal>
                  )}
                  <div className="space-y-4">
                    {introBlocks.map((block, idx) => (
                      block.type === 'paragraph' && (
                        <Reveal key={idx} delay={idx * 0.12} className="floating-text">
                          <p className="font-body text-base text-text leading-relaxed">
                            {block.text}
                          </p>
                        </Reveal>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {/* Visual + copy band (if diagram exists) */}
      {data.diagram && data.diagram !== 'none' && (
        <>
          <section className="section-padding">
            <div className="container-max">
              {data.diagram === 'ecosystem' && <EcosystemMap />}
              {data.diagram === 'circuit' && <CircuitTopology />}
              {data.diagram === 'topiccluster' && <TopicCluster />}
              {data.diagram === 'brandfamily' && <BrandFamily />}
              {data.diagram === 'radar' && <PositioningRadar />}
              {data.diagram === 'agentorbit' && data.agents && (
                <AgentOrbit agents={data.agents} />
              )}
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {/* Data bands (conditional) */}
      {data.metrics && (
        <>
          <StatBand metrics={data.metrics} />
          <FilmstripDivider />
        </>
      )}

      {data.cards && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <CardGrid cards={data.cards} cols={data.cards.length <= 2 ? 2 : 3} />
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {data.events && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <Timeline events={data.events} />
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {data.agents && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <AgentOrbit agents={data.agents} />
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {data.tableHeaders && data.tableRows && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <DataTable headers={data.tableHeaders} rows={data.tableRows} />
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {data.budgetCategories && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <DataTable
                headers={['Item', 'Monthly Cost', 'Notes']}
                categories={data.budgetCategories.map((cat) => ({
                  name: cat.name,
                  rows: cat.rows.map((row) => [row.item, row.value, row.notes]),
                }))}
              />
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {data.kpis && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <DataTable
                headers={['Indicator', 'Baseline', 'Target', 'Owner']}
                rows={data.kpis.map((kpi) => [
                  kpi.indicator,
                  kpi.baseline,
                  kpi.target,
                  kpi.owner,
                ])}
              />
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {/* Remaining copy with scroll-triggered floating motion */}
      {remainingBlocks.length > 0 && (
        <>
          <section className="section-padding">
            <div className="container-max">
              <div className="space-y-6">
                {remainingBlocks.map((block, idx) => (
                  block.type === 'paragraph' && (
                    <Reveal key={idx} delay={idx * 0.08} className="scroll-float">
                      <p className="font-body text-base text-text leading-relaxed max-w-70ch floating-text-stagger">
                        {block.text}
                      </p>
                    </Reveal>
                  )
                ))}
              </div>
            </div>
          </section>
          <FilmstripDivider />
        </>
      )}

      {/* Section navigation */}
      <SectionNav
        prev={
          prevSection
            ? {
                slug: prevSection.href.replace('/strategy/', ''),
                label: prevSection.name.replace(/^\d{2}\s+/, ''),
              }
            : undefined
        }
        next={
          nextSection
            ? {
                slug: nextSection.href.replace('/strategy/', ''),
                label: nextSection.name.replace(/^\d{2}\s+/, ''),
              }
            : undefined
        }
      />
    </main>
  );
}
