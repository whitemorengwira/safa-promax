import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { FilmstripDivider } from "@/components/visuals/FilmstripDivider";
import { strategySections } from "@/data/nav";

export const metadata: Metadata = {
  title: "Strategy Index · All 18 Chapters · SA Film Academy Strategy",
  description:
    "Complete index of all 18 chapters of the SA Film Academy 360° marketing strategy",
};

type StrategyTab = "Foundation" | "Visibility" | "Growth" | "Delivery";

interface Chapter {
  number: number;
  title: string;
  description: string;
  href: string;
  tab: StrategyTab;
}

const tabs: StrategyTab[] = ["Foundation", "Visibility", "Growth", "Delivery"];

const descriptions: Record<string, string> = {
  "/foundation/organisation": "Who SA Film Academy is, what it does, and the perception it is shifting.",
  "/foundation/ecosystem": "The mother brand, subsidiaries, and programmes as one coherent family.",
  "/foundation/infrastructure": "The technical backbone behind the public strategy, talent portal, and presentation system.",
  "/visibility/calendar": "The 12-month visibility rhythm from board approval into delivery.",
  "/growth/agentic-ai": "AI-assisted workflows for content, talent matching, reporting, and funding support.",
  "/visibility/seo": "Search and AI-search visibility for the Academy's authority topics.",
  "/foundation/brand": "Identity, voice, and visual rules for the branded house.",
  "/visibility/leadership": "Executive visibility, interviews, media presence, and thought leadership.",
  "/growth/commercial": "B-BBEE, Skills Levy, and commercial value for production partners.",
  "/delivery/community": "Alumni, community engagement, and professional progression.",
  "/visibility/content": "Editorial formats, production rhythm, podcasting, and campaign storytelling.",
  "/growth/partnerships": "Strategic partnership, PR, sponsorship, and media-development routes.",
  "/growth/positioning": "How SAFA differentiates itself from generic training providers.",
  "/delivery/curriculum": "Mandatory AI curriculum and new creative-technology competence.",
  "/delivery/kpis": "Dashboards, metrics, and board-facing performance visibility.",
  "/delivery/budget": "Budget categories, confirmed envelopes, and post-audit values.",
  "/delivery/implementation": "The first 30 days of practical execution.",
  "/delivery/risk": "Risk controls, dependencies, and contingency planning.",
};

function tabForHref(href: string): StrategyTab {
  if (href.startsWith("/foundation")) return "Foundation";
  if (href.startsWith("/visibility")) return "Visibility";
  if (href.startsWith("/growth")) return "Growth";
  return "Delivery";
}

const chapters: Chapter[] = strategySections.map((section, index) => ({
  number: index + 1,
  title: section.name.replace(/^\d+\s/, ""),
  description: descriptions[section.href] ?? "Strategy chapter.",
  href: section.href,
  tab: tabForHref(section.href),
}));

export default function StrategyIndexPage() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      <PageHero
        eyebrow="Strategy Index"
        title="All 18 _Chapters_"
        subtitle="A complete map of the SA Film Academy 360° marketing strategy."
        imageSrc="/images/ai/home/hero-crew-night-set.webp"
        imageAlt="SA Film Academy strategy overview"
      />

      <FilmstripDivider />

      <section className="section-padding container-max py-16 md:py-24">
        <div className="space-y-16">
          {tabs.map((tab) => {
            const tabChapters = chapters.filter((ch) => ch.tab === tab);
            return (
              <div key={tab}>
                <Reveal>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gold mb-8">
                    {tab}
                  </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tabChapters.map((chapter, idx) => (
                    <Reveal key={chapter.number} delay={idx * 0.05}>
                      <Link href={chapter.href}>
                        <div className="group p-6 bg-surface border border-line hover:border-gold hover:bg-surface-2 transition-all duration-200 cursor-pointer">
                          <div className="flex items-start gap-4 mb-3">
                            <span className="font-display text-3xl font-bold text-gold group-hover:text-gold-soft transition-colors">
                              {String(chapter.number).padStart(2, "0")}
                            </span>
                            <div className="flex-1">
                              <h3 className="font-display text-lg font-bold text-text group-hover:text-gold-soft transition-colors">
                                {chapter.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm text-muted ml-16">
                            {chapter.description}
                          </p>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <FilmstripDivider />

      <section className="section-padding container-max py-12 md:py-16 text-center">
        <Reveal>
          <WordReveal
            tag="h2"
            text="Ready to explore the full strategy?"
            className="mb-8"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            Each chapter is designed to stand alone, but together they form a
            comprehensive 360° marketing strategy for the SA Film Academy.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/foundation/organisation"
            className="inline-block font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition"
          >
            Start from Chapter 1
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
