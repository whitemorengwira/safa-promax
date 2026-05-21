import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell } from "@/components/sections/SectionShell";
import { Reveal } from "@/components/motion/Reveal";
import { FilmstripDivider } from "@/components/visuals/FilmstripDivider";
import { ImagePlaceholder } from "@/components/visuals/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Risk Acknowledgement & Contingency Planning · SA Film Academy Strategy",
  description:
    "Section 12 of the SA Film Academy 360° marketing strategy: Risk Acknowledgement & Contingency Planning",
};

interface Risk {
  id: number;
  title: string;
  description: string;
  contingency: string;
}

const risks: Risk[] = [
  {
    id: 1,
    title: "Suzuki Vehicle Commitment Delay",
    description:
      "The Suzuki vehicle commitment for the Gauteng FILMGRO expansion may not materialise in Q1 2026.",
    contingency:
      "Approach three alternative vehicle sponsors in parallel to ensure mobility infrastructure is secured regardless of primary sponsor timeline.",
  },
  {
    id: 2,
    title: "NFVF Grant Cycle Shift",
    description:
      "NFVF grant cycles may shift out of the projected Q3 2026 window due to regulatory or administrative changes.",
    contingency:
      "Submit applications in Q2 2026 ahead of expected cycle to capture funding before any potential delays.",
  },
  {
    id: 3,
    title: "Cineterns Account Targets Missed",
    description:
      "Cineterns production-company account targets may be missed at the Q1 2026 review, impacting revenue projections.",
    contingency:
      "Execute a direct outreach sprint to existing Blue Ice Africa and Film Afrika relationships to accelerate account growth.",
  },
  {
    id: 4,
    title: "Chief Executive Visibility Disruption",
    description:
      "The Chief Executive's visibility programme may be disrupted by operational demands, reducing external profile.",
    contingency:
      "Pre-produce eight LinkedIn posts and two speaking-event submissions per quarter so the pipeline does not depend on real-time availability.",
  },
  {
    id: 5,
    title: "B-BBEE Regulatory Changes",
    description:
      "B-BBEE regulatory changes may affect the Skills Levy mechanics, impacting the commercial model.",
    contingency:
      "Conduct an annual regulatory review with SAFA's SETA relationship manager each January to stay ahead of changes.",
  },
];

export default function RiskPage() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="12 · Delivery Pillar"
        title="Rigour through risk acknowledgement."
        subtitle="A strategy that does not acknowledge risk is a strategy that has not been stress-tested. Here are the five named risks we monitor and the contingencies we have prepared."
        imageSrc="/images/ai/v2/delivery/risk-hero.png"
        imageAlt="Professional film production environment with risk management focus"
      />

      <FilmstripDivider />

      {/* Risk Register Section */}
      <SectionShell
        eyebrow="12.1"
        title="The Five Named Risks"
      >
        <div className="space-y-12 max-w-6xl mx-auto">
          {risks.map((risk, idx) => (
            <Reveal key={risk.id} delay={idx * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                {/* Risk number and title */}
                <div className="md:col-span-1">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-display text-4xl font-bold text-gold">
                      {risk.id}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-gold/60 font-semibold">
                      Risk
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-text">
                    {risk.title}
                  </h3>
                </div>

                {/* Risk description */}
                <div className="md:col-span-1">
                  <p className="text-sm leading-relaxed text-text/70">
                    {risk.description}
                  </p>
                </div>

                {/* Contingency */}
                <div className="md:col-span-1 bg-bg/40 border border-gold/20 p-6 rounded-sm">
                  <p className="text-xs uppercase tracking-widest text-gold font-bold mb-3">
                    Contingency
                  </p>
                  <p className="text-sm leading-relaxed text-text italic">
                    {risk.contingency}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <FilmstripDivider />

      {/* Governance Section */}
      <SectionShell
        eyebrow="12.2"
        title="Risk Governance Framework"
        className="bg-surface/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <Reveal>
              <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                <h4 className="font-display text-lg font-bold text-gold mb-3 italic">
                  Quarterly Risk Reviews
                </h4>
                <p className="text-sm leading-relaxed text-text/70">
                  Every quarter, the Executive Team conducts a formal risk review against this register. New risks are identified, existing risks are re-assessed, and contingency plans are updated based on changed circumstances.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                <h4 className="font-display text-lg font-bold text-gold mb-3 italic">
                  Stakeholder Communication
                </h4>
                <p className="text-sm leading-relaxed text-text/70">
                  Board members and key partners are briefed on risk status in advance of each quarterly meeting. This ensures alignment and allows early intervention if contingency triggers are approaching.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                <h4 className="font-display text-lg font-bold text-gold mb-3 italic">
                  Contingency Activation
                </h4>
                <p className="text-sm leading-relaxed text-text/70">
                  If a risk threshold is breached (e.g., Cineterns accounts miss target by 20%), the corresponding contingency is activated immediately without waiting for the next quarterly review.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={0.1}>
            <ImagePlaceholder
              src="/images/ai/v2/delivery/risk-management.png"
              alt="Risk management and strategic planning"
              brief="A professional Black South African reviewing a risk register or strategic plan in a cinematic setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="square"
            />
          </Reveal>
        </div>
      </SectionShell>
    </main>
  );
}
