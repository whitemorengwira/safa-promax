import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { SectionShell } from '@/components/sections/SectionShell';
import { TwoColLayout } from '@/components/sections/TwoColLayout';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';

export const metadata: Metadata = {
  title: '9 · Institutional Voice & Executive Visibility · SA Film Academy Strategy',
  description: 'Section 9 of the SA Film Academy 360° marketing strategy: Institutional Voice & Executive Visibility',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="9 · Institutional Voice"
        title="Institutional Voice & Executive Visibility"
        subtitle="The Chief Executive's voice as one of the Academy's most valuable marketing assets."
        imageSrc="/images/ai/v2/leadership/ceo-boardroom.png"
        imageAlt="Dignified Black female executive in a cinematic boardroom"
      />

      <FilmstripDivider />

      {/* 9.1 — THE LEADERSHIP ASSET */}
      <SectionShell
        eyebrow="09.1"
        title="The Chief Executive's Voice"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument.
                  </p>
                </div>
                <div className="my-4 float-left mr-6 w-44">
                  <ImagePlaceholder
                    src="/images/ai/safa-media-relations.png"
                    alt="Media and industry relations"
                    brief="Professional media and industry engagement"
                    orientation="portrait"
                  />
                </div>
                <p className="text-text/80 leading-relaxed">
                  The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than 500 new professional connection requests have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period — "Oh, are you at SA Film Academy now? Great. Great." The strategy now leverages that shift, deliberately and at pace.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/leadership/ceo-podium.png"
              alt="Dignified Black female executive speaking at a podium"
              brief="A dignified, authoritative Black woman, approximately 60 years old, light-complexioned, speaking at a podium in a cinematic setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="portrait"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 9.2 — CONTENT STRATEGY */}
      <SectionShell
        eyebrow="09.2"
        title="Content & Engagement"
        className="bg-surface/20"
      >
        <TwoColLayout
          flip
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four: industry commentary on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy; behind-the-scenes of SAFA placements; institutional reflections on transformation, leadership, and the realities of running a non-profit; and alumni championing.
                </p>
                <p className="text-text/80 leading-relaxed">
                  The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences. The media relations strategy targets op-ed placements in Screen Africa, the Mail & Guardian arts section, Destiny Business Magazine for institutional leadership profile work, and selected international trade publications covering African screen industry development.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/leadership/ceo-interview.png"
              alt="Dignified Black female executive being interviewed"
              brief="A dignified, authoritative Black woman, approximately 60 years old, light-complexioned, being interviewed in a cinematic studio setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 9.3 — 90-DAY ACTIVATION */}
      <SectionShell
        eyebrow="09.3"
        title="90-Day Activation"
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="py-4 px-6 text-gold font-display italic text-lg">Window</th>
                    <th className="py-4 px-6 text-gold font-display italic text-lg">Activation</th>
                    <th className="py-4 px-6 text-gold font-display italic text-lg">Target Signal</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-text/70">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 font-bold text-text">Days 1–30</td>
                    <td className="py-4 px-6">LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts</td>
                    <td className="py-4 px-6">Signal of repositioning — visible to the existing 500+ connections</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 font-bold text-text">Days 31–60</td>
                    <td className="py-4 px-6">First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured</td>
                    <td className="py-4 px-6">Press & podcast pickup — extending reach beyond the LinkedIn perimeter</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-text">Days 61–90</td>
                    <td className="py-4 px-6">First speaking engagement confirmed; ACE alumni championing post series live; Destiny profile feature submitted</td>
                    <td className="py-4 px-6">Authority signal — the Academy as the named voice of transformation in South African film training</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* 9.4 — SPEAKING & AUTHORITY */}
      <SectionShell
        eyebrow="09.4"
        title="Speaking Engagements & Authority Building"
        className="bg-surface/20"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="text-text/80 leading-relaxed">
                  <strong>Industry Conferences:</strong> MICT SETA forums, NFVF annual summits, and international screen-industry events where the Chief Executive is positioned as a thought leader on South African film transformation.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Media Appearances:</strong> Podcast interviews with industry voices, op-ed features in Screen Africa and trade publications, and regular commentary on transformation and the future of skills development in the screen sector.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Institutional Credibility:</strong> Every speaking engagement, media feature, and thought leadership article adds to the perception that SA Film Academy is led by one of the industry's most credible voices.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/visibility-leadership/keynote-stage.webp"
              alt="Executive speaking at a keynote stage"
              brief="Dignified executive speaking confidently at a keynote stage in a cinematic conference setting"
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
