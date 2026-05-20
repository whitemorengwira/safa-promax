import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '12 · Content Marketing & Storytelling · SA Film Academy Strategy',
  description: 'Section 12 of the SA Film Academy 360° marketing strategy: Content Marketing & Storytelling',
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
            <span className="text-text">Content Marketing & Storytelling</span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1">
        {/* Section header */}
        <section className="section-padding container-max py-16 md:py-24">
          <div className="mb-12">
            <span className="eyebrow mb-6">
              <span className="num">12 ·</span>
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 max-w-4xl">
              Content Marketing & Storytelling
            </h1>
          </div>
        </section>

        {/* Extracted section content */}
        <section className="section-padding container-max prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: `<div className="shell">
    <div className="section-head reveal-up">
      <span className="eyebrow"><span className="num">12 ·</span> Content Marketing &amp; Storytelling Strategy</span>
      <h2>The Editorial Engine of a Twenty-Year-Old Institution.</h2>
      <p className="kicker">A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.</p>
    </div>

    <div className="svg-stage reveal-scale" style="margin-bottom: 56px;">
      <div className="svg-frame">
        <svg viewBox="0 0 1200 460" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="editGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.18"/>
              <stop offset="100%" stop-color="#9B7F2D" stop-opacity="0.05"/>
            </linearGradient>
            <linearGradient id="editRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8B1A1A" stop-opacity="0.32"/>
              <stop offset="100%" stop-color="#8B1A1A" stop-opacity="0.08"/>
            </linearGradient>
            <pattern id="textureLines" width="6" height="6" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="6" y2="0" stroke="#C9A84C" stroke-width="0.4" opacity="0.4"/>
            </pattern>
          </defs>

          <!-- Editorial grid — varied rectangle sizes simulating magazine layout -->
          <g>
            <!-- Lead feature block -->
            <rect x="40" y="40" width="520" height="280" fill="url(#editRed)" stroke="#C9A84C" stroke-width="0.8"/>
            <rect x="40" y="40" width="520" height="280" fill="url(#textureLines)" opacity="0.4"/>
            <text x="64" y="76" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="4">LEAD FEATURE · WEEKLY LONG-FORM</text>
            <text x="64" y="142" fill="#E8E0D0" font-family="Playfair Display" font-size="28" font-style="italic">From Levy to Lever:</text>
            <text x="64" y="178" fill="#E8E0D0" font-family="Playfair Display" font-size="28" font-style="italic">The 1% Mechanism</text>
            <text x="64" y="214" fill="#E8E0D0" font-family="Playfair Display" font-size="28" font-style="italic">Few Producers Use Well</text>
            <line x1="64" y1="240" x2="200" y2="240" stroke="#C9A84C" stroke-width="1"/>
            <text x="64" y="266" fill="#C9A84C" opacity="0.7" font-family="Outfit" font-size="11">Pillar 01 · Skills Legislation</text>

            <!-- Right column stacked features -->
            <rect x="580" y="40" width="280" height="135" fill="url(#editGold)" stroke="#C9A84C" stroke-width="0.6"/>
            <text x="600" y="68" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="3">PILLAR 02 · AI IN POST</text>
            <text x="600" y="108" fill="#E8E0D0" font-family="Playfair Display" font-size="18" font-style="italic">Veo, Kling, Hailuo:</text>
            <text x="600" y="130" fill="#E8E0D0" font-family="Playfair Display" font-size="18" font-style="italic">The Post Production</text>
            <text x="600" y="152" fill="#E8E0D0" font-family="Playfair Display" font-size="18" font-style="italic">Hiring Shift of 2026</text>

            <rect x="880" y="40" width="280" height="135" fill="url(#editGold)" stroke="#C9A84C" stroke-width="0.6"/>
            <text x="900" y="68" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="3">PILLAR 03 · GREENSET</text>
            <text x="900" y="108" fill="#E8E0D0" font-family="Playfair Display" font-size="18" font-style="italic">Why Netflix Picks</text>
            <text x="900" y="130" fill="#E8E0D0" font-family="Playfair Display" font-size="18" font-style="italic">Sustainable Partners</text>
            <text x="900" y="152" fill="#E8E0D0" font-family="Playfair Display" font-size="18" font-style="italic">in South Africa</text>

            <rect x="580" y="185" width="580" height="135" fill="url(#editRed)" stroke="#C9A84C" stroke-width="0.6"/>
            <rect x="580" y="185" width="580" height="135" fill="url(#textureLines)" opacity="0.3"/>
            <text x="604" y="213" fill="#C9A84C" font-family="Outfit" font-size="10" letter-spacing="4">DOCUMENTARY MINI-SERIES · 6 EPISODES</text>
            <text x="604" y="258" fill="#E8E0D0" font-family="Playfair Display" font-size="24" font-style="italic">The Trainee Journey: From First Day</text>
            <text x="604" y="288" fill="#E8E0D0" font-family="Playfair Display" font-size="24" font-style="italic">on Set to Head of Department</text>
          </g>

          <!-- Bottom row of social/short content -->
          <g>
            <rect x="40" y="340" width="180" height="80" fill="url(#editGold)" stroke="#C9A84C" stroke-width="0.5"/>
            <text x="50" y="362" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="2">ALUMNI SPOTLIGHT</text>
            <text x="50" y="388" fill="#E8E0D0" font-family="Playfair Display" font-size="14" font-style="italic">Weekly Series</text>
            <text x="50" y="406" fill="#E0C268" opacity="0.7" font-family="Outfit" font-size="10">All platforms</text>

            <rect x="240" y="340" width="180" height="80" fill="url(#editGold)" stroke="#C9A84C" stroke-width="0.5"/>
            <text x="250" y="362" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="2">PRODUCTION DIARY</text>
            <text x="250" y="388" fill="#E8E0D0" font-family="Playfair Display" font-size="14" font-style="italic">Live SAFA Set</text>
            <text x="250" y="406" fill="#E0C268" opacity="0.7" font-family="Outfit" font-size="10">Real-time, permissioned</text>

            <rect x="440" y="340" width="180" height="80" fill="url(#editGold)" stroke="#C9A84C" stroke-width="0.5"/>
            <text x="450" y="362" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="2">SKILLS LEVY · 60 SEC</text>
            <text x="450" y="388" fill="#E8E0D0" font-family="Playfair Display" font-size="14" font-style="italic">Reel Series</text>
            <text x="450" y="406" fill="#E0C268" opacity="0.7" font-family="Outfit" font-size="10">Decision-maker targeted</text>

            <rect x="640" y="340" width="240" height="80" fill="url(#editGold)" stroke="#C9A84C" stroke-width="0.5"/>
            <text x="650" y="362" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="2">PODCAST · MONTHLY</text>
            <text x="650" y="388" fill="#E8E0D0" font-family="Playfair Display" font-size="16" font-style="italic">On Set &amp; On The Record</text>
            <text x="650" y="406" fill="#E0C268" opacity="0.7" font-family="Outfit" font-size="10">the Chief Executive in conversation with industry leaders</text>

            <rect x="900" y="340" width="260" height="80" fill="url(#editRed)" stroke="#C9A84C" stroke-width="0.5"/>
            <text x="910" y="362" fill="#C9A84C" font-family="Outfit" font-size="9" letter-spacing="2">EDITORIAL · MONTHLY</text>
            <text x="910" y="388" fill="#E8E0D0" font-family="Playfair Display" font-size="16" font-style="italic">State of the Industry</text>
            <text x="910" y="406" fill="#E0C268" opacity="0.7" font-family="Outfit" font-size="10">Distributed to all production company contacts</text>
          </g>

          <text x="600" y="30" text-anchor="middle" fill="#C9A84C" opacity="0.7" font-family="Outfit" font-size="11" letter-spacing="5">THE EDITORIAL GRID · A PUBLICATION-STYLE CONTENT ARCHITECTURE</text>
        </svg>
      </div>
    </div>

    <div className="reveal-up">
      <p>SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.</p>
      <p>The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive <em>"State of the Industry"</em> editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.</p>
      <p>The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.</p>
      <p>The social stream runs three named recurring series. <strong>Alumni Spotlight</strong> publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now. <strong>Production Diary</strong> follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds. <strong>Skills Levy Explained in 60 Seconds</strong> is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.</p>
      <p>The podcast — provisionally titled <em>"On Set &amp; On the Record"</em> — places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.</p>
    </div>

    <div className="cards-grid cols-3 stagger reveal-up" style="margin-top: 56px;">
      <div className="card"><span className="tag">Pillar 01</span><h3 style="font-size: 18px;">Skills &amp; B-BBEE Legislation</h3><p style="font-size: 14px;">The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.</p></div>
      <div className="card"><span className="tag">Pillar 02</span><h3 style="font-size: 18px;">AI in Post Production</h3><p style="font-size: 14px;">Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.</p></div>
      <div className="card"><span className="tag">Pillar 03</span><h3 style="font-size: 18px;">Sustainable Production</h3><p style="font-size: 14px;">GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.</p></div>
      <div className="card"><span className="tag">Pillar 04</span><h3 style="font-size: 18px;">Career-Path Stories</h3><p style="font-size: 14px;">From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.</p></div>
      <div className="card"><span className="tag">Pillar 05</span><h3 style="font-size: 18px;">SA Film Industry Commentary</h3><p style="font-size: 14px;">The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.</p></div>
      <div className="card"><span className="tag">Format</span><h3 style="font-size: 18px;">Cinematic, Not Corporate</h3><p style="font-size: 14px;">Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.</p></div>
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
