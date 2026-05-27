import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { CalendarTimeline } from '@/components/diagrams/CalendarTimeline';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';

export const metadata: Metadata = {
  title: '5 · The 12-Month Marketing Calendar · SA Film Academy Strategy',
  description: 'Section 5 of the SA Film Academy 360° marketing strategy: The 12-Month Marketing Calendar',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="5 · Visibility Pillar"
        title="The 12-Month Marketing Calendar"
        subtitle="June 2026 to May 2027: four quarters, four phases, every milestone visible."
        imageSrc="/images/ai/v2/visibility/calendar-hero.png"
        imageAlt="Dark reddish-cinematic film production environment"
      />

      <FilmstripDivider />

      {/* Calendar Timeline Section */}
      <SectionShell
        eyebrow="05.1"
        title="Implementation Timeline"
      >
        <div className="mb-16">
          <CalendarTimeline />
        </div>

        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <h3 className="text-gold font-display italic text-xl mb-4">Q1: Foundation & Launch</h3>
                  <p className="text-sm text-text/70 leading-relaxed">
                    Architecture, alignment, and the first visible signal that the new chapter has begun. Strategy formally adopted and the implementation rhythm established with the executive team.
                  </p>
                </div>
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <h3 className="text-gold font-display italic text-xl mb-4">Q2: Growth & Traction</h3>
                  <p className="text-sm text-text/70 leading-relaxed">
                    From quiet authority to commercial signal — the brand starts converting attention into income. GreenSet–Netflix case study published as a flagship piece of thought-leadership content.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <h3 className="text-gold font-display italic text-xl mb-4">Q3: Authority & Funding</h3>
                  <p className="text-sm text-text/70 leading-relaxed">
                    The Academy becomes the entity quoted, cited, and approached — not the one applying. Agentic funding application pipeline operating weekly — NFVF, DTI, DSAC, and private foundations.
                  </p>
                </div>
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <h3 className="text-gold font-display italic text-xl mb-4">Q4: Scale & Renewal</h3>
                  <p className="text-sm text-text/70 leading-relaxed">
                    The infrastructure pays for itself. The strategy renews for year two with a stronger position than it started. SA Film Interns commercial launch — the full pricing model active.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Execution Detail Section */}
      <SectionShell
        eyebrow="05.2"
        title="Execution Rhythm"
        className="bg-surface/20"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Weekly Cadence:</strong> Every Monday, the execution team gathers for five decisions: what shipped, what's blocked, what's next, who owns it, when does it close.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Monthly Visibility:</strong> The Board sees complete progress against the 12-month map. No surprises, no delays hidden. The calendar is the contract between strategy and delivery.
                </p>
                <p className="text-text/80 leading-relaxed">
                  This rhythm transforms the marketing calendar from a planning artifact into an operational instrument.
                </p>
                <Reveal>
                  <div className="mt-10">
                    <ImagePlaceholder
                      src="/images/ai/safa-calendar-hero.png"
                      alt="12-month marketing calendar execution"
                      brief="12-month marketing calendar execution"
                      orientation="landscape"
                    />
                  </div>
                </Reveal>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/visibility-calendar/production-office-night.webp"
              alt="Team planning and execution"
              brief="Professional team in a well-organised office environment planning and coordinating work"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* CLOSING CALL TO ACTION */}
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
