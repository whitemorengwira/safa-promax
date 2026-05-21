import Link from 'next/link';
import { WordReveal } from '@/components/motion/WordReveal';
import { Reveal } from '@/components/motion/Reveal';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SkillsLevyCalculator } from '@/components/tools/SkillsLevyCalculator';
import { BBBEEStorecardSimulator } from '@/components/tools/BBBEEStorecardSimulator';
import { EcoStewardROI } from '@/components/tools/EcoStewardROI';

export default function SmartToolsPage() {
  return (
    <main className="flex flex-col">
      {/* ===== HERO SECTION (70/30) ===== */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <ImagePlaceholder
            src="/images/ai/v2/delivery/ai-workstation.png"
            alt="SA Film Academy: Smart Tools Hub"
            brief="Cinematic AI workstation. Interactive calculators and simulators on screen in a high-end studio environment, warm gold and deep red lighting, photorealistic, textless."
            orientation="video"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full section-padding container-max">
          <div className="layout-visual-heavy">
            <div className="visual-container hidden lg:block opacity-0">
              {/* Spacer for 70/30 layout */}
            </div>
            <div className="text-container cinematic-reveal">
              <span className="eyebrow mb-6">
                <span className="num">Phase 07 ·</span>
              </span>
              <WordReveal tag="h1" text="Smart Tools Hub" className="mb-6" />
              <Reveal className="mb-8">
                <p className="font-display-alt italic text-gold-soft text-xl md:text-2xl leading-relaxed floating-text">
                  Interactive calculators and simulators designed to convert compliance into commercial strategy.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== SKILLS LEVY CALCULATOR SECTION ===== */}
      <section id="levy-calculator" className="section-padding bg-bg-deep">
        <div className="container-max">
          <div className="mb-16">
            <span className="eyebrow mb-4">
              <span className="num">Tool 01 ·</span>
            </span>
            <WordReveal tag="h2" text="Skills Levy _Calculator_" className="mb-6" />
            <div className="my-4 float-right ml-6 w-44 mb-8">
              <ImagePlaceholder
                src="/images/ai/safa-levy-calculator.png"
                alt="Skills levy calculation tool"
                brief="Levy calculation and skills development"
                orientation="portrait"
              />
            </div>
            <Reveal>
              <p className="font-body text-lg text-text/80 max-w-3xl leading-relaxed">
                Calculate your mandatory Skills Development Levy (SDL) and discover how to recover up to 70% of your contribution through strategic training partnerships.
              </p>
            </Reveal>
          </div>

          <SkillsLevyCalculator />
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== B-BBEE SCORECARD SIMULATOR SECTION ===== */}
      <section id="bbbee-simulator" className="section-padding">
        <div className="container-max">
          <div className="mb-16">
            <span className="eyebrow mb-4">
              <span className="num">Tool 02 ·</span>
            </span>
            <WordReveal tag="h2" text="B-BBEE Scorecard _Simulator_" className="mb-6" />
            <div className="my-4 float-left mr-6 w-44 mb-8">
              <ImagePlaceholder
                src="/images/ai/safa-bbbee-scorecard.png"
                alt="B-BBEE scorecard simulator"
                brief="B-BBEE compliance and scorecard modeling"
                orientation="portrait"
              />
            </div>
            <Reveal>
              <p className="font-body text-lg text-text/80 max-w-3xl leading-relaxed">
                Model your Skills Development pillar performance and discover how SAFA partnerships can maximize your scorecard points while delivering high-impact training.
              </p>
            </Reveal>
          </div>

          <BBBEEStorecardSimulator />
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== ECO-STEWARD ROI SECTION ===== */}
      <section id="eco-steward-roi" className="section-padding bg-bg-deep">
        <div className="container-max">
          <div className="mb-16">
            <span className="eyebrow mb-4">
              <span className="num">Tool 03 ·</span>
            </span>
            <WordReveal tag="h2" text="Eco-Steward _ROI Calculator_" className="mb-6" />
            <div className="my-4 float-right ml-6 w-44 mb-8">
              <ImagePlaceholder
                src="/images/ai/safa-greenset-eco.png"
                alt="Eco-steward ROI and sustainability"
                brief="Environmental impact and ROI calculation"
                orientation="portrait"
              />
            </div>
            <Reveal>
              <p className="font-body text-lg text-text/80 max-w-3xl leading-relaxed">
                Sustainability is a commercial imperative. Use this tool to project the environmental impact and operational cost savings of deploying GreenSet Eco-Stewards on your production.
              </p>
            </Reveal>
          </div>

          <EcoStewardROI />
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== UPCOMING TOOLS GRID ===== */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12">
            <span className="eyebrow mb-4">
              <span className="num">Roadmap ·</span>
            </span>
            <WordReveal tag="h2" text="The Agentic _Toolbox_" className="mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'B-BBEE Scorecard Simulator',
                desc: 'Model the impact of SAFA training spend on your Skills Development and Enterprise Development pillars.',
                status: 'In Development'
              },
              {
                title: 'Funding Opportunity Finder',
                desc: 'AI-matched funding sources and grant opportunities aligned to institutional and individual goals.',
                status: 'Q3 2026'
              },
              {
                title: 'AI Talent Match',
                desc: 'Intelligent candidate-to-role matching engine connecting trainees with production opportunities.',
                status: 'Q3 2026'
              },
              {
                title: 'Eco-Steward ROI',
                desc: 'Calculate the carbon and cost savings of deploying GreenSet Eco-Stewards on your production.',
                status: 'Q4 2026'
              },
              {
                title: 'Cineterns Placement Portal',
                desc: 'The full digital portal for managing trainee placements, compliance, and reporting.',
                status: 'Live Beta'
              }
            ].map((tool, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="card-premium p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-display text-text">{tool.title}</h3>
                  <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-gold border border-gold/30 px-2 py-1">
                    {tool.status}
                  </span>
                </div>
                <p className="text-sm text-text/60 leading-relaxed">
                  {tool.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== CTA BAND ===== */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-8">
            <Reveal>
              <p className="font-body text-base text-text leading-relaxed max-w-2xl mx-auto">
                The Smart Tools Hub is designed to reduce administrative overhead, accelerate decision-making, and unlock data-driven insight across the institution. Every tool is purpose-built for the South African film and skills landscape.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/contact"
                className="inline-block font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition"
              >
                Request a Strategic Audit
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
