import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '9 · Institutional Voice & Executive Visibility · SA Film Academy Strategy',
  description: 'Section 9 of the SA Film Academy 360° marketing strategy: Institutional Voice & Executive Visibility',
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
            <span className="text-text">Institutional Voice & Executive Visibility</span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1">
        {/* Section header */}
        <section className="section-padding container-max py-16 md:py-24">
          <div className="mb-12">
            <span className="eyebrow mb-6">
              <span className="num">9 ·</span>
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 max-w-4xl">
              Institutional Voice & Executive Visibility
            </h1>
          </div>
        </section>

        {/* Extracted section content */}
        <section className="section-padding container-max prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: `<div className="shell">
    <div className="section-head reveal-up">
      <span className="eyebrow"><span className="num">09 ·</span> Institutional Voice &amp; Executive Visibility</span>
      <h2>The Chief Executive as the most powerful marketing instrument the Academy has.</h2>
      <p className="kicker">Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.</p>
    </div>

    <div className="two-col">
      <div className="reveal-up">
        <p>The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than <strong>500 new professional connection requests</strong> have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period — <em>"Oh, are you at SA Film Academy now? Great. Great."</em> The strategy now leverages that shift, deliberately and at pace.</p>
        <p>The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four: <strong>industry commentary</strong> on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy; <strong>behind-the-scenes</strong> of SAFA placements (with permission, respecting production confidentiality); <strong>institutional reflections</strong> on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and <strong>alumni championing</strong> — the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.</p>
        <p>The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in <strong>Screen Africa</strong>, the <strong>Mail &amp; Guardian</strong> arts section, <strong>Destiny Business Magazine</strong> for institutional leadership profile work, and selected international trade publications covering African screen industry development.</p>
        <p>The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.</p>
      </div>

      <div className="svg-stage reveal-scale">
        <span className="stage-label">Reach · Signal</span>
        <svg viewBox="-250 -250 500 500" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="60" fill="none" stroke="#C9A84C" stroke-width="1" stroke-opacity="0.6">
            <animate attributeName="r" from="40" to="220" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="0" r="60" fill="none" stroke="#C9A84C" stroke-width="1" stroke-opacity="0.6">
            <animate attributeName="r" from="40" to="220" dur="3s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite" begin="1s"/>
          </circle>
          <circle cx="0" cy="0" r="60" fill="none" stroke="#C9A84C" stroke-width="1" stroke-opacity="0.6">
            <animate attributeName="r" from="40" to="220" dur="3s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite" begin="2s"/>
          </circle>

          <g stroke="#C9A84C" stroke-opacity="0.35" stroke-width="0.5">
            <line x1="0" y1="0" x2="-180" y2="-150"/>
            <line x1="0" y1="0" x2="170" y2="-160"/>
            <line x1="0" y1="0" x2="200" y2="20"/>
            <line x1="0" y1="0" x2="160" y2="170"/>
            <line x1="0" y1="0" x2="-30" y2="200"/>
            <line x1="0" y1="0" x2="-190" y2="120"/>
            <line x1="0" y1="0" x2="-220" y2="-30"/>
            <line x1="0" y1="0" x2="60" y2="-190"/>
          </g>

          <g fill="#13131a" stroke="#C9A84C" stroke-width="0.8">
            <circle cx="-180" cy="-150" r="8"/>
            <circle cx="170" cy="-160" r="9"/>
            <circle cx="200" cy="20" r="7"/>
            <circle cx="160" cy="170" r="8"/>
            <circle cx="-30" cy="200" r="9"/>
            <circle cx="-190" cy="120" r="7"/>
            <circle cx="-220" cy="-30" r="8"/>
            <circle cx="60" cy="-190" r="9"/>
          </g>

          <g fill="#C9A84C" opacity="0.5">
            <circle cx="-160" cy="-200" r="2"/>
            <circle cx="-210" cy="-100" r="2"/>
            <circle cx="-230" cy="50" r="2"/>
            <circle cx="220" cy="-100" r="2"/>
            <circle cx="230" cy="70" r="2"/>
            <circle cx="220" cy="-30" r="2"/>
            <circle cx="100" cy="-220" r="2"/>
            <circle cx="-90" cy="220" r="2"/>
            <circle cx="90" cy="220" r="2"/>
          </g>

          <circle cx="0" cy="0" r="32" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="10" fill="#C9A84C"/>
          <text x="0" y="48" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="11">institutional voice</text>
          <text x="0" y="-235" text-anchor="middle" fill="#C9A84C" opacity="0.5" font-family="Outfit" font-size="9" letter-spacing="3">500+ CONNECTIONS · 2,000 TARGET BY MAY 2027</text>
        </svg>
      </div>
    </div>

    <div className="reveal-up" style="margin-top: 64px;">
      <h4 style="margin-bottom: 20px;">Executive visibility calendar — first 90 days</h4>
      <table className="tbl">
        <thead><tr><th style="width: 18%;">Window</th><th>Activation</th><th>Target signal</th></tr></thead>
        <tbody>
          <tr><td><strong>Days 1–30</strong></td><td>LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts</td><td>Signal of repositioning — visible to the existing 500+ connections</td></tr>
          <tr><td><strong>Days 31–60</strong></td><td>First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured</td><td>Press &amp; podcast pickup — extending reach beyond the LinkedIn perimeter</td></tr>
          <tr><td><strong>Days 61–90</strong></td><td>First speaking engagement confirmed; ACE alumni championing post series live; <em>Destiny</em> profile feature submitted</td><td>Authority signal — the Academy as the named voice of transformation in South African film training</td></tr>
        </tbody>
      </table>
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
