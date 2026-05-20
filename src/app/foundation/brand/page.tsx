import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '8 · Brand Architecture & Identity · SA Film Academy Strategy',
  description: 'Section 8 of the SA Film Academy 360° marketing strategy: Brand Architecture & Identity',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Breadcrumb navigation */}
      <nav className="bg-surface border-b border-line px-6 py-4 sticky top-0 z-40">
        <div className="container-max">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gold hover:text-gold-soft transition-colors">
              Home
            </Link>
            <span className="text-muted">/</span>
            <span className="text-gold">Strategy</span>
            <span className="text-muted">/</span>
            <span className="text-text">Brand Architecture & Identity</span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1">
        {/* Section header */}
        <section className="section-padding container-max py-16 md:py-24">
          <div className="mb-12">
            <span className="eyebrow mb-6">
              <span className="num">8 ·</span>
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 max-w-4xl">
              Brand Architecture & Identity
            </h1>
          </div>
        </section>

        {/* Extracted section content */}
        <section className="section-padding container-max prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: `<div className="shell">
    <div className="section-head reveal-up">
      <span className="eyebrow"><span className="num">08 ·</span> Brand Architecture &amp; Identity</span>
      <h2>Five entities currently read as five strangers. They will read as one family.</h2>
      <p className="kicker">A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.</p>
    </div>

    <div className="two-col flip">
      <div className="svg-stage reveal-scale">
        <span className="stage-label">Family · Overlap</span>
        <svg viewBox="-260 -240 520 480" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="masterFill">
              <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#C9A84C" stop-opacity="0.05"/>
            </radialGradient>
          </defs>
          <!-- Master brand outer shape -->
          <circle cx="0" cy="0" r="200" fill="url(#masterFill)" stroke="#C9A84C" stroke-width="1.5"/>
          <text x="0" y="-170" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="3">MASTER BRAND · SAFA</text>

          <!-- Overlapping subsidiary shapes -->
          <polygon points="-100,-90 100,-90 130,0 100,90 -100,90 -130,0" fill="#C9A84C" fill-opacity="0.12" stroke="#C9A84C" stroke-width="0.8" stroke-opacity="0.6"/>
          <text x="0" y="0" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="18" font-weight="600">SAFA</text>
          <text x="0" y="20" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="10">core entity</text>

          <!-- ACE diamond -->
          <polygon points="-140,-60 -90,-100 -40,-60 -90,-20" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
          <text x="-90" y="-58" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="10">ACE</text>

          <!-- FILMGRO hex -->
          <polygon points="-150,60 -100,30 -50,60 -50,120 -100,150 -150,120" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
          <text x="-100" y="92" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="10">FILMGRO</text>

          <!-- GreenSet circle -->
          <circle cx="100" cy="-80" r="36" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
          <text x="100" y="-76" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="10">GreenSet</text>

          <!-- Cineterns square -->
          <rect x="80" y="40" width="80" height="80" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
          <rect x="80" y="40" width="80" height="3" fill="#C9A84C"/>
          <text x="120" y="84" text-anchor="middle" fill="#C9A84C" font-family="Playfair Display" font-style="italic" font-size="10">Cineterns</text>

          <!-- Faint connections from master to each -->
          <g stroke="#C9A84C" stroke-opacity="0.3" stroke-width="0.5" stroke-dasharray="2 3">
            <line x1="0" y1="0" x2="-90" y2="-60"/>
            <line x1="0" y1="0" x2="-100" y2="92"/>
            <line x1="0" y1="0" x2="100" y2="-80"/>
            <line x1="0" y1="0" x2="120" y2="80"/>
          </g>
        </svg>
      </div>

      <div className="reveal-up">
        <p>The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.</p>
        <p>The proposed architecture is a <strong>branded house</strong>: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.</p>
        <p>The brand voice is <em>authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate</em>. The existing tagline — <em>Where Industry Meets Opportunity</em> — is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.</p>
        <p>The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio — <em>Devil's Peak</em>, <em>Warrior</em>, <em>The Woman King</em>, <em>One Piece</em>, <em>Wheel of Time</em>, <em>Average Joe</em> — are the power-brand leverage at the heart of every conversation: the moment <em>The Woman King</em> appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.</p>
      </div>
    </div>

    <div className="reveal-up" style="margin-top: 72px;">
      <h4 style="margin-bottom: 20px;">Brand voice principles — applied across every channel</h4>
      <div className="cards-grid cols-4 stagger">
        <div className="card"><span className="tag">Voice 01</span><h3 style="font-size: 18px;">Authoritative but accessible</h3><p style="font-size: 14px;">The Academy speaks as the body that has placed trainees on <em>The Woman King</em> — without ever sounding like it is reading from a brochure.</p></div>
        <div className="card"><span className="tag">Voice 02</span><h3 style="font-size: 18px;">Proudly South African</h3><p style="font-size: 14px;">Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.</p></div>
        <div className="card"><span className="tag">Voice 03</span><h3 style="font-size: 18px;">Insider without exclusion</h3><p style="font-size: 14px;">Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.</p></div>
        <div className="card"><span className="tag">Voice 04</span><h3 style="font-size: 18px;">Data-driven, not corporate</h3><p style="font-size: 14px;">Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.</p></div>
      </div>
    </div>
  </div>` }} />
        </section>
      </div>

      {/* Navigation footer */}
      <nav className="bg-surface border-t border-line px-6 py-8 mt-16">
        <div className="container-max flex justify-between items-center">
          <Link href="/" className="text-gold hover:text-gold-soft transition-colors">
            ← Back to Strategy
          </Link>
          <Link href="/" className="text-gold hover:text-gold-soft transition-colors">
            Next Section →
          </Link>
        </div>
      </nav>
    </main>
  );
}
