import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { SvgStage } from '@/components/visuals/SvgStage';

export const metadata: Metadata = {
  title: '8 · Brand Architecture & Identity · SA Film Academy Strategy',
  description: 'Section 8 of the SA Film Academy 360° marketing strategy: Brand Architecture & Identity',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="8 · Foundation Pillar"
        title="Brand Architecture & Identity"
        subtitle="Five entities currently read as five strangers. They will read as one family."
        imageSrc="/images/ai/v2/foundation/brand-hero.png"
        imageAlt="Dark reddish-cinematic film production environment"
      />

      <FilmstripDivider />

      {/* 8.1 — THE BRANDED HOUSE */}
      <SectionShell
        eyebrow="8.1"
        title="The Branded House"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The brand fragmentation problem is the central diagnostic. Five entities (SAFA, ACE, FILMGRO, GreenSet, Cineterns) exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  The proposed architecture is a <strong>branded house</strong>: SA Film Academy is the master brand, and each subsidiary carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, and a shared editorial voice.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/foundation/brand-architecture.png"
              alt="Brand architecture review"
              brief="A professional Black South African designer reviewing a brand architecture or visual identity system on a high-end monitor in a cinematic setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 8.2 — BRAND VOICE */}
      <SectionShell
        eyebrow="8.2"
        title="Brand Voice Principles"
        className="bg-surface/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Authoritative</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                The Academy speaks as the body that has placed trainees on The Woman King: without ever sounding like it is reading from a brochure.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Proudly Local</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Insider Fluent</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Data Driven</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* CLOSING CALL TO ACTION */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Marketing Calendar?</h2>
          <Link
            href="/visibility/calendar"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Marketing Calendar →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
