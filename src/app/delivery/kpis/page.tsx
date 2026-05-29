import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { PerformanceGauges } from '@/components/diagrams/PerformanceGauges';
import { KpiOperatingDashboardSection } from '@/components/strategy/BoardStrategySections';

export const metadata: Metadata = {
  title: '16 · KPI Dashboard & Measurement · SA Film Academy Strategy',
  description: 'Section 16 of the SA Film Academy 360° marketing strategy: KPI Dashboard & Measurement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="16 · Delivery Pillar"
        title="The numbers reported every quarter."
        subtitle="A measurable, twelve-month KPI architecture with named baselines and named targets, designed to make trade-offs visible."
        imageSrc="/images/ai/v3/delivery/kpi-hero.webp"
        imageAlt="Dashboard gauges abstract in gold and dark red"
      />

      <FilmstripDivider />

      {/* Gauges Section */}
      <SectionShell
        eyebrow="16.1"
        title="The Performance Gauges"
      >
        <div className="mb-14">
          <PerformanceGauges />
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    A measurable, twelve-month KPI architecture with named baselines and named targets, designed to be reported quarterly to the Academy's executive and stakeholders.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  This dashboard makes trade-offs visible rather than hidden, allowing for data-driven decision making and clear accountability across all strategic pillars.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery/upward-graph.png"
              alt="KPI Graph"
              brief="Upward trajectory graph on a professional monitor in a cinematic office setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Measurement Section */}
      <SectionShell
        eyebrow="16.2"
        title="The Measurement Framework"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    Our measurement framework is built on verifiable data points, from SA Film Interns registrations to placement events and digital engagement metrics.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  By maintaining a rigorous approach to data collection and analysis, we ensure that our reports are both accurate and actionable, providing a clear picture of the Academy's progress.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery-kpis/measurement-framework.png"
              alt="Black operations and data team reviewing a KPI measurement framework"
              brief="Black operations and data team reviewing a KPI measurement framework"
              orientation="landscape"
              safeHeadroom
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      <KpiOperatingDashboardSection />

      {/* Dashboard & Monitoring */}
      <SectionShell
        eyebrow="Monitoring"
        title="Real-Time KPI Tracking"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Live Dashboard:</strong> All KPIs are tracked in real time on a centralised dashboard accessible to leadership and the Board.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Automated Alerts:</strong> When metrics fall below threshold, alerts trigger for immediate investigation and corrective action.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/delivery-kpis/realtime-kpi-tracking.png"
              alt="Black operations lead monitoring live KPIs on screen and tablet"
              brief="Black operations lead monitoring live KPIs on screen and tablet"
              orientation="landscape"
              safeHeadroom
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* CLOSING CALL TO ACTION */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Budget framework?</h2>
          <Link
            href="/delivery/budget"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Budget Framework →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
