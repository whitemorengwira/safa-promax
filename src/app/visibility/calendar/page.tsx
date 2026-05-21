import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarTimeline } from '@/components/diagrams/CalendarTimeline';

export const metadata: Metadata = {
  title: '5 · The 12-Month Marketing Calendar · SA Film Academy Strategy',
  description: 'Section 5 of the SA Film Academy 360° marketing strategy: The 12-Month Marketing Calendar',
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
            <span className="text-text">The 12-Month Marketing Calendar</span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1">
        {/* Section header */}
        <section className="section-padding container-max py-16 md:py-24">
          <div className="mb-12">
            <span className="eyebrow mb-6">
              <span className="num">5 ·</span>
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 max-w-4xl">
              The 12-Month Marketing Calendar
            </h1>
          </div>
        </section>

        {/* Calendar Timeline Section */}
        <section className="section-padding container-max">
          <CalendarTimeline />
        </section>

        {/* Extracted section content */}
        <section className="section-padding container-max prose prose-invert max-w-none hidden">
          <div dangerouslySetInnerHTML={{ __html: `<div className="shell">
    <div className="section-head reveal-up">
      <span className="eyebrow"><span className="num">05 ·</span> The 12-Month Marketing Calendar</span>
      <h2>June 2026 to May 2027 — four quarters, four phases, every milestone visible.</h2>
      <p className="kicker">Foundation and unification first. Visibility and commercial traction second. Authority and funding third. Scale and self-sustainability last.</p>
    </div>

    <div className="band reveal-scale" style="margin-bottom: 56px;">
      <div className="svg-stage" style="aspect-ratio: 16/5;">
        <span className="stage-label">Timeline · 12 Months</span>
        <svg viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <g opacity="0.08">
            <rect x="0" y="20" width="1200" height="10" fill="#C9A84C"/>
            <rect x="0" y="240" width="1200" height="10" fill="#C9A84C"/>
            <g fill="#09090e">
              <rect x="10" y="22" width="20" height="6"/><rect x="50" y="22" width="20" height="6"/><rect x="90" y="22" width="20" height="6"/><rect x="130" y="22" width="20" height="6"/><rect x="170" y="22" width="20" height="6"/><rect x="210" y="22" width="20" height="6"/><rect x="250" y="22" width="20" height="6"/><rect x="290" y="22" width="20" height="6"/><rect x="330" y="22" width="20" height="6"/><rect x="370" y="22" width="20" height="6"/><rect x="410" y="22" width="20" height="6"/><rect x="450" y="22" width="20" height="6"/><rect x="490" y="22" width="20" height="6"/><rect x="530" y="22" width="20" height="6"/><rect x="570" y="22" width="20" height="6"/><rect x="610" y="22" width="20" height="6"/><rect x="650" y="22" width="20" height="6"/><rect x="690" y="22" width="20" height="6"/><rect x="730" y="22" width="20" height="6"/><rect x="770" y="22" width="20" height="6"/><rect x="810" y="22" width="20" height="6"/><rect x="850" y="22" width="20" height="6"/><rect x="890" y="22" width="20" height="6"/><rect x="930" y="22" width="20" height="6"/><rect x="970" y="22" width="20" height="6"/><rect x="1010" y="22" width="20" height="6"/><rect x="1050" y="22" width="20" height="6"/><rect x="1090" y="22" width="20" height="6"/><rect x="1130" y="22" width="20" height="6"/><rect x="1170" y="22" width="20" height="6"/>
            </g>
          </g>
          <g>
            <rect x="40" y="100" width="270" height="60" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
            <text x="175" y="128" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="11" letter-spacing="3">QUARTER ONE</text>
            <text x="175" y="148" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="13">Foundation · Unification · Launch</text>
            <text x="175" y="178" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">JUN · JUL · AUG 2026</text>
          </g>
          <g>
            <rect x="330" y="100" width="270" height="60" fill="#13131a" stroke="#E0C268" stroke-width="1.5"/>
            <text x="465" y="128" text-anchor="middle" fill="#E0C268" font-family="Outfit" font-size="11" letter-spacing="3">QUARTER TWO</text>
            <text x="465" y="148" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="13">Growth · Visibility · Traction</text>
            <text x="465" y="178" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">SEP · OCT · NOV 2026</text>
          </g>
          <g>
            <rect x="620" y="100" width="270" height="60" fill="#13131a" stroke="#8B1A1A" stroke-width="1.5"/>
            <text x="755" y="128" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="11" letter-spacing="3">QUARTER THREE</text>
            <text x="755" y="148" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="13">Authority · Thought Leadership · Funding</text>
            <text x="755" y="178" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">DEC 2026 · JAN · FEB 2027</text>
          </g>
          <g>
            <rect x="910" y="100" width="250" height="60" fill="#13131a" stroke="#9B7F2D" stroke-width="1.5"/>
            <text x="1035" y="128" text-anchor="middle" fill="#C9A84C" font-family="Outfit" font-size="11" letter-spacing="3">QUARTER FOUR</text>
            <text x="1035" y="148" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-style="italic" font-size="13">Scale · Self-Sustainability · Renewal</text>
            <text x="1035" y="178" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="10">MAR · APR · MAY 2027</text>
          </g>
          <text x="600" y="76" text-anchor="middle" fill="#C9A84C" opacity="0.7" font-family="Outfit" font-size="11" letter-spacing="5">IMPLEMENTATION TIMELINE · JUNE 2026 → MAY 2027</text>
        </svg>
      </div>
    </div>

    <div className="quarters reveal-up stagger">
      <div className="quarter">
        <span className="qspan">Quarter 1 · Jun–Aug 2026</span>
        <h3>Foundation, Unification &amp; Launch</h3>
        <p className="qtheme">Architecture, alignment, and the first visible signal that the new chapter has begun.</p>
        <ul>
          <li>Strategy formally adopted and the implementation rhythm established with the executive team.</li>
          <li>Brand audit across all five entities — SAFA, GreenSet, FilmGro, ACE, Cineterns — to establish a unified visual language and messaging hierarchy.</li>
          <li>Launch of the GreenSet co-brand integration campaign across the SAFA website and every social channel.</li>
          <li>Formal SEO baseline audit on safilmacademy.org and the Cineterns portal.</li>
          <li>Social media account consolidation and profile optimisation across LinkedIn, Instagram and Facebook.</li>
          <li>Cineterns open beta with the first cohort of registered trainees and invited production companies.</li>
          <li>FILMGRO Gauteng expansion: activate the Suzuki conversation and identify a driving training partner.</li>
          <li>First two agentic blog posts published.</li>
          <li>The Chief Executive's LinkedIn presence strategy activated as the institutional voice channel.</li>
        </ul>
      </div>

      <div className="quarter">
        <span className="qspan">Quarter 2 · Sep–Nov 2026</span>
        <h3>Growth, Visibility &amp; Commercial Traction</h3>
        <p className="qtheme">From quiet authority to commercial signal — the brand starts converting attention into income.</p>
        <ul>
          <li>GreenSet–Netflix case study published as a flagship piece of thought-leadership content.</li>
          <li>B-BBEE Skills Levy awareness campaign targeting SPV production accountants and legal compliance teams — digital advertisements, LinkedIn outreach, and a free downloadable <em>Skills Levy Guide for Film Productions</em> lead magnet.</li>
          <li>Cineterns public launch with the first ten confirmed production-company accounts.</li>
          <li>FILMGRO Gauteng launch event (conditional on the Suzuki vehicle commitment being secured).</li>
          <li>ACE alumni case-study series — profile the NFVF-funded short film <em>Ini</em> and other HOD-track graduates.</li>
          <li>Paid LinkedIn campaign targeting international production companies serviced from South Africa.</li>
          <li>AI training masterclass module announced and pre-registration opened.</li>
        </ul>
      </div>

      <div className="quarter">
        <span className="qspan">Quarter 3 · Dec 2026 – Feb 2027</span>
        <h3>Authority, Thought Leadership &amp; Funding</h3>
        <p className="qtheme">The Academy becomes the entity quoted, cited, and approached — not the one applying.</p>
        <ul>
          <li>Agentic funding application pipeline operating weekly — NFVF, DTI, DSAC, and private foundations.</li>
          <li>Annual impact report published digitally and distributed to all production-company partners and SETA contacts.</li>
          <li>One major industry speaking engagement secured for the Academy's Chief Executive.</li>
          <li>GreenSet blog series: five posts on sustainable production practices in South Africa, co-authored with GreenSet practitioners.</li>
          <li>AI-in-film masterclass content completed and curriculum published.</li>
          <li>Second cohort of ACE alumni profiled in the <em>From Intern to HOD</em> editorial series.</li>
        </ul>
      </div>

      <div className="quarter">
        <span className="qspan">Quarter 4 · Mar–May 2027</span>
        <h3>Scale, Self-Sustainability &amp; Renewal</h3>
        <p className="qtheme">The infrastructure pays for itself. The strategy renews for year two with a stronger position than it started.</p>
        <ul>
          <li>Cineterns commercial launch — the full pricing model active for production-company subscriptions.</li>
          <li>The self-sustainability case is modelled publicly: SAFA publishes a <em>Path to Self-Sustainability</em> article showing how the ecosystem funds itself through Skills Levy administration fees, Cineterns subscriptions, and GreenSet contracts.</li>
          <li>All production-company SLAs reviewed and renewed with an upsell to bundled Cineterns access.</li>
          <li>The twelve-month strategy review is initiated and a second-year blueprint is drafted.</li>
        </ul>
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
