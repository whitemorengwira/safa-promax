import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';

export const metadata: Metadata = {
  title: '17 · Budget Framework · SA Film Academy Strategy',
  description: 'Section 17 of the SA Film Academy 360° marketing strategy: Budget Framework',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="17 · Budget Framework"
        title="A Monthly Subscription, Not a Project Quote."
        subtitle="A transparent, line-itemised monthly framework that converts the marketing strategy into a single, defensible operating-expense line on the Academy's books."
        imageSrc="/images/ai/v2/budget/budget-hero.png"
        imageAlt="Dark reddish-cinematic budget framework hero"
      />

      <FilmstripDivider />

      {/* 17.1 — THE BUDGETING PHILOSOPHY */}
      <SectionShell
        eyebrow="17.1"
        title="The Budgeting Philosophy"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    Most marketing relationships bill in unpredictable spikes. A campaign here, a redesign there, an invoice that arrives without warning and never quite matches the quote. For a non-profit company operating in a financially disciplined sector, that model is impossible to plan around and difficult to defend to a board.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  The SA Film Academy marketing engine is funded differently. It runs as a single, predictable monthly subscription, in the same way the Academy already pays for electricity, connectivity, or insurance. Every workstream that powers the strategy, the digital infrastructure, the content production, the search and social visibility, and the autonomous AI workflows, is consolidated into one recurring operating-expense line.
                </p>
                <p className="text-text/80 leading-relaxed">
                  This subscription approach gives the Academy three things a project-quote model never can: predictable monthly costs that can be budgeted a year in advance, consistent service delivery that does not pause between projects, and a marketing engine that keeps running without financial surprises.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/budget/budget-philosophy.png"
              alt="Black South African finance professional reviewing a monthly statement"
              brief="A Black South African finance or operations professional, 25 to 30 years, reviewing a clean monthly statement at a dark desk under warm gold lamp light, deep red ambient glow behind. Textless, no currency signs."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 17.2 — THE KEY BUDGET LINE ITEMS */}
      <SectionShell
        eyebrow="17.2"
        title="The Key Budget Line Items"
        className="bg-surface/20"
      >
        <div className="max-w-4xl mx-auto mb-16">
          <Reveal>
            <p className="text-text/80 leading-relaxed mb-12">
              An effective marketing strategy budget for the Academy is built from a clear set of line items. The costed figures for each are still being finalised and will be presented in a dedicated budget presentation. For now, the framework below sets out every line item the budget will account for, so the board can see exactly what the marketing engine is composed of before any amounts are attached.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <div className="p-6 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
                <h3 className="text-gold font-display italic text-xl mb-4">Digital infrastructure</h3>
                <ul className="space-y-2 text-sm text-text/70">
                  <li>• Website and platform hosting, deployment, and global edge delivery</li>
                  <li>• Database, authentication, and secure file storage</li>
                  <li>• Content delivery network, security, and domain proxy</li>
                  <li>• Domain renewals and transactional email delivery</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
                <h3 className="text-gold font-display italic text-xl mb-4">Strategic execution</h3>
                <ul className="space-y-2 text-sm text-text/70">
                  <li>• Editorial content production across the five content pillars</li>
                  <li>• Search-engine and AI-search optimisation</li>
                  <li>• Institutional social media channel management</li>
                  <li>• Operation and supervision of the agentic AI workflows</li>
                  <li>• Monthly performance reporting against the strategy's key performance indicators</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-6 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
                <h3 className="text-gold font-display italic text-xl mb-4">Platform and creative development</h3>
                <ul className="space-y-2 text-sm text-text/70">
                  <li>• The Cineterns production platform build (quoted separately)</li>
                  <li>• Post-launch maintenance, administrator training, and onboarding</li>
                  <li>• Ongoing technical maintenance after handover</li>
                  <li>• Cinematic web presentations produced in the EmpowerYouth format</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-6 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
                <h3 className="text-gold font-display italic text-xl mb-4">Creative and media production</h3>
                <ul className="space-y-2 text-sm text-text/70">
                  <li>• Photography, generated visuals, and graphic assets</li>
                  <li>• Video and behind-the-scenes capture for the content engine</li>
                  <li>• Podcast production and editing</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <ImagePlaceholder
            src="/images/ai/v2/budget/budget-line-items.png"
            alt="Abstract macro of a circuit board with deep red indicator lights"
            brief="An abstract macro of a circuit board or server rack with deep red indicator lights and fine gold traces on a near-black surface. Textless. Equipment-only, no people required."
            orientation="video"
          />
        </div>
      </SectionShell>

      {/* 17.3 — A WORK IN PROGRESS */}
      <SectionShell
        eyebrow="17.3"
        title="A Work in Progress"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    The costed budget is a work in progress. The line items above represent the complete structure of an effective marketing strategy budget for the Academy, but the consolidated, costed figures are being finalised and will be presented in a separate, dedicated budget presentation to the board.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  Presenting the framework in this way allows the board to understand and approve the shape of the budget, what it covers and why each line exists, before any single figure is fixed. This is precisely the kind of staged financial clarity a non-profit's governance requires.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/budget/budget-wip.png"
              alt="Confident Black South African professional presenting a framework"
              brief="A confident Black South African professional, 27 to 30 years, in a dark boardroom presenting a clean framework on screen, warm gold and deep red cinematic lighting. Textless, no currency signs."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Financial Sustainability */}
      <SectionShell
        eyebrow="Sustainability"
        title="Budget Allocation & ROI"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Allocation by Pillar:</strong> Foundation 15%, Visibility 30%, Growth 35%, Delivery 20%. Distribution reflects impact potential and market readiness.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>ROI Measurement:</strong> Each pillar's budget is tied to specific KPIs and measured quarterly for continuous optimization.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery/upward-graph.png"
              alt="Financial growth and ROI trajectory"
              brief="Upward trending graph showing budget allocation efficiency and ROI growth"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* CLOSING CALL TO ACTION */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Implementation plan?</h2>
          <Link
            href="/delivery/implementation"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Implementation Plan →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
