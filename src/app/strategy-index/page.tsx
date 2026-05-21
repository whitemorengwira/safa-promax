import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { FilmstripDivider } from "@/components/visuals/FilmstripDivider";

export const metadata: Metadata = {
  title: "Strategy Index · All 18 Chapters · SA Film Academy Strategy",
  description:
    "Complete index of all 18 chapters of the SA Film Academy 360° marketing strategy",
};

interface Chapter {
  number: number;
  title: string;
  description: string;
  href: string;
  tab: "Foundation" | "Visibility" | "Growth" | "Delivery";
}

const chapters: Chapter[] = [
  // Foundation
  {
    number: 1,
    title: "The Ecosystem",
    description: "SAFA's position within the South African film industry landscape.",
    href: "/foundation/organisation",
    tab: "Foundation",
  },
  {
    number: 2,
    title: "Brand Architecture",
    description: "The five-entity brand family and their distinct roles.",
    href: "/foundation/brand",
    tab: "Foundation",
  },
  {
    number: 3,
    title: "Digital Infrastructure",
    description: "The Cineterns platform and technical foundation.",
    href: "/foundation/infrastructure",
    tab: "Foundation",
  },
  {
    number: 4,
    title: "Stakeholder Engagement",
    description: "How SAFA connects with industry, funders, and trainees.",
    href: "/foundation/stakeholders",
    tab: "Foundation",
  },

  // Visibility
  {
    number: 5,
    title: "The 12-Month Marketing Calendar",
    description: "Strategic timeline from June 2026 to May 2027.",
    href: "/visibility/calendar",
    tab: "Visibility",
  },
  {
    number: 6,
    title: "SEO & Organic Discovery",
    description: "Search visibility and content strategy.",
    href: "/visibility/seo",
    tab: "Visibility",
  },
  {
    number: 7,
    title: "Leadership & Personal Brand",
    description: "Executive visibility and thought leadership.",
    href: "/visibility/leadership",
    tab: "Visibility",
  },
  {
    number: 8,
    title: "Content & Storytelling",
    description: "The narrative engine driving awareness.",
    href: "/visibility/content",
    tab: "Visibility",
  },

  // Growth
  {
    number: 9,
    title: "Agentic AI Marketing Engine",
    description: "Autonomous workflows driving growth.",
    href: "/growth/agentic-ai",
    tab: "Growth",
  },
  {
    number: 10,
    title: "B-BBEE & Skills Levy Commercial Strategy",
    description: "The Academy's most powerful commercial differentiator.",
    href: "/growth/commercial",
    tab: "Growth",
  },
  {
    number: 11,
    title: "Partnership & Sponsorship Strategy",
    description: "Strategic alliances and revenue partnerships.",
    href: "/growth/partners",
    tab: "Growth",
  },
  {
    number: 12,
    title: "Competitive Positioning & Differentiation",
    description: "Why SAFA wins the room.",
    href: "/growth/positioning",
    tab: "Growth",
  },

  // Delivery
  {
    number: 13,
    title: "Technical Execution & Infrastructure",
    description: "How the strategy is operationalised.",
    href: "/delivery/technical",
    tab: "Delivery",
  },
  {
    number: 14,
    title: "Operational Excellence",
    description: "Day-to-day execution and quality assurance.",
    href: "/delivery/operational",
    tab: "Delivery",
  },
  {
    number: 15,
    title: "Creative Implementation",
    description: "Content production and creative standards.",
    href: "/delivery/implementation",
    tab: "Delivery",
  },
  {
    number: 16,
    title: "Impact & Measurement",
    description: "KPIs, metrics, and success measurement.",
    href: "/delivery/impact",
    tab: "Delivery",
  },
  {
    number: 17,
    title: "Risk Acknowledgement & Contingency Planning",
    description: "Five named risks and contingency responses.",
    href: "/delivery/risk",
    tab: "Delivery",
  },
  {
    number: 18,
    title: "Governance & Compliance",
    description: "Board oversight, regulatory compliance, and accountability.",
    href: "/delivery/governance",
    tab: "Delivery",
  },
];

const tabs = ["Foundation", "Visibility", "Growth", "Delivery"];

export default function StrategyIndexPage() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Hero */}
      <PageHero
        eyebrow="Strategy Index"
        title="All 18 _Chapters_"
        subtitle="A complete map of the SA Film Academy 360° marketing strategy."
        imageSrc="/images/ai/v2/safa-hero-red-cinematic-black-trainees.png"
        imageAlt="SA Film Academy strategy overview"
      />

      <FilmstripDivider />

      {/* Index Section */}
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

      {/* CTA Section */}
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
