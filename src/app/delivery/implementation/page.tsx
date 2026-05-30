import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { ImplementationTimelineSimulation } from '@/components/diagrams/ImplementationTimelineSimulation';

export const metadata: Metadata = {
  title: '18 · Implementation Commencement · SA Film Academy Strategy',
  description: 'Section 18 of the SA Film Academy 360° marketing strategy: Implementation Commencement',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="18 · Implementation Commencement"
        title="Three tracks. Thirty days. Tangible, reportable results."
        subtitle="Not an aspiration: a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted."
        imageSrc="/images/ai/v4/delivery/implementation-launch-hero.webp"
        imageAlt="Film and TV crew beginning a coordinated implementation launch briefing"
      />

      <FilmstripDivider />

      <SectionShell
        eyebrow="18.1"
        title="The 30-Day Implementation Simulation"
      >
        <div className="mb-16 max-w-6xl mx-auto">
          <ImplementationTimelineSimulation />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Portal proof",
              body: "50 trainee profiles are verified, five employer accounts are live, and the first placement is logged by 30 June 2026."
            },
            {
              title: "Visibility proof",
              body: "Eight SEO posts, the State of Industry report, and the leadership voice cadence are live inside the first month."
            },
            {
              title: "Partner proof",
              body: "GreenSet co-branding, partnership outreach, and production-house conversations are activated rather than deferred."
            }
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="h-full border border-gold/15 bg-surface/35 p-8">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Track {index + 1}</p>
                <h3 className="font-display text-2xl text-text mb-4">{item.title}</h3>
                <p className="text-sm text-text/70 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Board Approval Block */}
      <SectionShell
        eyebrow="18.3"
        title="Board Approval Required"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Budget Envelope</p>
              <p className="text-2xl font-display text-text mb-4">R 2.4m</p>
              <p className="text-sm text-text/70 leading-relaxed">Annual investment in the 360° marketing strategy, phased across four pillars.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Go-Live Date</p>
              <p className="text-2xl font-display text-text mb-4">1 June 2026</p>
              <p className="text-sm text-text/70 leading-relaxed">Implementation commencement. Three simultaneous activation tracks launch on this date.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">Mandate</p>
              <p className="text-2xl font-display text-text mb-4">Full Authority</p>
              <p className="text-sm text-text/70 leading-relaxed">Board approval to proceed with the strategy as presented, with quarterly reporting.</p>
            </div>
          </Reveal>
        </div>
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
