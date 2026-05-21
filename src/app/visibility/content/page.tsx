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
  title: '12 · Content Marketing & Storytelling · SA Film Academy Strategy',
  description: 'Section 12 of the SA Film Academy 360° marketing strategy: Content Marketing & Storytelling',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="12 · Visibility Pillar"
        title="Content Marketing & Storytelling"
        subtitle="A multi-format publication strategy that treats SAFA as the industry's most authoritative source."
        imageSrc="/images/ai/v2/visibility/content-hero.png"
        imageAlt="Dark reddish-cinematic film production environment"
      />

      <FilmstripDivider />

      {/* 12.1 — THE EDITORIAL ENGINE */}
      <SectionShell
        eyebrow="12.1"
        title="The Editorial Engine"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble.
                  </p>
                </div>
                <div className="my-4 float-right ml-6 w-44">
                  <ImagePlaceholder
                    src="/images/ai/safa-content-engine.png"
                    alt="Content publication engine"
                    brief="Content creation and publishing workflow"
                    orientation="portrait"
                  />
                </div>
                <p className="text-text/80 leading-relaxed">
                  The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar. We move from being a vendor to being a voice.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/v2/visibility/editorial-meeting.png"
              alt="Editorial team reviewing content"
              brief="A professional Black South African editorial team reviewing a magazine layout or digital content in a cinematic setting, warm gold and deep red lighting, photorealistic, textless."
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* 12.2 — CONTENT PILLARS */}
      <SectionShell
        eyebrow="12.2"
        title="The Five Pillars"
        className="bg-surface/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Skills & B-BBEE</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">AI in Post</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Sustainable Production</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Career-Path Stories</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                From the intern's first day to the alumni's first HOD credit. The tiered pathway told as biography, showing the real impact of the Academy's work.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Industry Commentary</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                The Academy's voice on industry developments, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm h-full">
              <h3 className="text-gold font-display italic text-xl mb-4">Cinematic, Not Corporate</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* 12.3 — CONTENT FORMATS */}
      <SectionShell
        eyebrow="12.3"
        title="Multi-Format Publication"
      >
        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="text-text/90 leading-relaxed">
                    <strong>No single format wins.</strong> The Academy's authority grows when the same story lives across multiple platforms: long-form articles, video, podcast, social cards, and case studies.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  <strong>Weekly Articles:</strong> 1,500–2,500 word deep-dives on industry topics, placed in industry publications and the Academy's own medium.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Monthly Podcast:</strong> 45–60 minute interviews with production company leaders, alumni, and partners.
                </p>
                <p className="text-text/80 leading-relaxed">
                  <strong>Social Cadence:</strong> Daily stories, weekly reels, and timely commentary on industry news.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/visibility-content/podcast-recording.webp"
              alt="Content production setup"
              brief="Professional podcast or audio recording setup in a cinematic studio environment"
              orientation="landscape"
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
