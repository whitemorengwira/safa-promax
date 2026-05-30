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
  title: '3 · The Brand Ecosystem · SA Film Academy Strategy',
  description: 'Section 3 of the SA Film Academy 360° marketing strategy: The Brand Ecosystem',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* HERO SECTION */}
      <PageHero
        eyebrow="03 · The Brand Ecosystem"
        title="Five entities, one architecture."
        subtitle="A branded house, unified under SAFA."
        imageSrc="/images/ai/v4/foundation/ecosystem-production-hub-hero.webp"
        imageAlt="Connected film training ecosystem across production, logistics, sustainability and digital placement"
      />

      <FilmstripDivider />

      {/* Architecture Section */}
      <SectionShell
        eyebrow="03.1"
        title="The Branded House"
      >
        <div className="mb-16">
          <SvgStage label="Architecture · Site Plan" aspect="wide">
            <svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A84C" strokeOpacity="0.06" strokeWidth="0.5"/>
                </pattern>
                <style>{`
                  .architecture-grid { animation: architectureGrid 14s linear infinite; }
                  .architecture-link { stroke-dasharray: 10 10; animation: architectureFlow 2.6s linear infinite; }
                  .architecture-block { animation: architecturePulse 4.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
                  .architecture-block:nth-of-type(2) { animation-delay: .25s; }
                  .architecture-block:nth-of-type(3) { animation-delay: .5s; }
                  .architecture-block:nth-of-type(4) { animation-delay: .75s; }
                  .architecture-block:nth-of-type(5) { animation-delay: 1s; }
                  @keyframes architectureGrid { to { transform: translate(-40px, -40px); } }
                  @keyframes architectureFlow { to { stroke-dashoffset: -120; } }
                  @keyframes architecturePulse { 50% { transform: translateY(-6px); filter: drop-shadow(0 0 16px rgba(201,168,76,.35)); } }
                  @media (prefers-reduced-motion: reduce) {
                    .architecture-grid, .architecture-link, .architecture-block { animation: none; }
                  }
                `}</style>
              </defs>
              <rect className="architecture-grid" width="1280" height="580" x="-40" y="-40" fill="url(#grid3)"/>

              {/* Central SAFA block */}
              <g className="architecture-block">
                <rect x="500" y="180" width="200" height="140" fill="#13131a" stroke="#C9A84C" strokeWidth="1.5"/>
                <rect x="500" y="180" width="200" height="6" fill="#C9A84C"/>
                <text x="600" y="230" textAnchor="middle" fill="#C9A84C" fontFamily="Playfair Display" fontSize="22" fontWeight="600">SA FILM</text>
                <text x="600" y="252" textAnchor="middle" fill="#C9A84C" fontFamily="Playfair Display" fontSize="22" fontWeight="600">ACADEMY</text>
                <text x="600" y="282" textAnchor="middle" fill="#E8E0D0" opacity="0.6" fontFamily="Outfit" fontSize="9" letterSpacing="2">MASTER BRAND · MICT SETA NPC</text>
                <text x="600" y="305" textAnchor="middle" fill="#E0C268" opacity="0.5" fontFamily="Playfair Display" fontSize="10" fontStyle="italic">est. 2006</text>
              </g>

              {/* ACE block */}
              <g className="architecture-block">
                <rect x="120" y="80" width="240" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="120" y="80" width="6" height="100" fill="#8B1A1A"/>
                <text x="240" y="118" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="18" fontStyle="italic">Academy of</text>
                <text x="240" y="138" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="18" fontStyle="italic">Creative Excellence</text>
                <text x="240" y="160" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">ALUMNI · HOD PATHWAY</text>
              </g>
              <line className="architecture-link" x1="360" y1="130" x2="500" y2="210" stroke="#C9A84C" strokeOpacity="0.5" strokeWidth="2"/>

              {/* FILMGRO block */}
              <g className="architecture-block">
                <rect x="100" y="320" width="260" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="100" y="320" width="6" height="100" fill="#8B1A1A"/>
                <text x="230" y="358" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="20" fontWeight="600">FILMGRO</text>
                <text x="230" y="380" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="13" fontStyle="italic">Driving Academy</text>
                <text x="230" y="402" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">SUZUKI · 124 LICENCES</text>
              </g>
              <line className="architecture-link" x1="360" y1="370" x2="500" y2="290" stroke="#C9A84C" strokeOpacity="0.5" strokeWidth="2"/>

              {/* GreenSet block */}
              <g className="architecture-block">
                <rect x="840" y="80" width="240" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="1074" y="80" width="6" height="100" fill="#8B1A1A"/>
                <text x="960" y="120" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="20" fontWeight="600">GreenSet</text>
                <text x="960" y="142" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="12" fontStyle="italic">Sustainability Subsidiary</text>
                <text x="960" y="164" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">NETFLIX · UK · US</text>
              </g>
              <line className="architecture-link" x1="840" y1="130" x2="700" y2="210" stroke="#C9A84C" strokeOpacity="0.5" strokeWidth="2"/>

              {/* SA Film Interns block */}
              <g className="architecture-block">
                <rect x="820" y="320" width="260" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="1074" y="320" width="6" height="100" fill="#8B1A1A"/>
                <text x="950" y="352" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="17" fontWeight="600">SA Film Interns</text>
                <text x="950" y="380" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="13" fontStyle="italic">Digital Talent Portal</text>
                <text x="950" y="402" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">500+ PROFILES · AI MATCH</text>
              </g>
              <line className="architecture-link" x1="820" y1="370" x2="700" y2="290" stroke="#C9A84C" strokeOpacity="0.5" strokeWidth="2"/>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <div className="p-8 bg-surface/40 backdrop-blur-md border border-gold/10 rounded-sm">
                  <p className="drop-cap text-text/90 leading-relaxed">
                    The SA Film Academy ecosystem is a branded house architecture. SAFA sits at the apex as the MICT SETA-accredited master brand, while its distinct subsidiaries and programmes radiate outward, each carrying a visible relationship to the master brand.
                  </p>
                </div>
                <p className="text-text/80 leading-relaxed">
                  Until now, these entities have often read as isolated projects. The strategy moving forward is to unify them under a single visual and strategic umbrella, ensuring that the success of one programme reinforces the authority of the entire Academy.
                </p>
              </div>
            </Reveal>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/safa-org-hero.png"
              alt="MICT SETA accreditation certificate"
              brief="MICT SETA accreditation certificate with gold seal, cinematic lighting"
              orientation="landscape"
            />
          }
          visualRatio="70-30"
        />
      </SectionShell>

      {/* Entity Breakdown Section */}
      <SectionShell
        eyebrow="03.2"
        title="The Five Pillars"
        className="bg-surface/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ACE */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v4/foundation/ace-woman-director.webp"
              alt="ACE woman director leading trainees on a film set"
              brief="A Black South African woman director leading male and female trainees around a director monitor on a professional film set."
              orientation="landscape"
            />
            <h3 className="text-gold font-display italic text-xl">ACE</h3>
            <p className="text-sm text-text/70">Academy of Creative Excellence: Alumni and HOD pathway for high-level creative leadership.</p>
          </div>

          {/* FILMGRO */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v4/foundation/filmgro-logistics-training.webp"
              alt="FILMGRO production logistics training beside an unbranded vehicle"
              brief="A Black South African male trainee learning production logistics from a woman supervisor beside an unbranded production vehicle."
              orientation="landscape"
            />
            <h3 className="text-gold font-display italic text-xl">FILMGRO</h3>
            <p className="text-sm text-text/70">Driving Academy: Providing essential driving skills and licensing for film industry trainees.</p>
          </div>

          {/* GreenSet */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v4/foundation/greenset-sustainable-set.webp"
              alt="GreenSet sustainable production team on a working film set"
              brief="A balanced Black South African sustainable production team coordinating eco-friendly equipment on a working film set."
              orientation="landscape"
            />
            <h3 className="text-gold font-display italic text-xl">GreenSet</h3>
            <p className="text-sm text-text/70">Sustainability Subsidiary: Leading the industry toward eco-friendly production practices.</p>
          </div>

          {/* SA Film Interns */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v4/foundation/interns-placement-desk.webp"
              alt="SA Film Interns placement desk with trainees and coordinator"
              brief="Black South African trainees and a placement coordinator reviewing a digital talent portal beside a studio floor."
              orientation="landscape"
            />
            <h3 className="text-gold font-display italic text-xl">SA Film Interns</h3>
            <p className="text-sm text-text/70">Digital Talent Portal: Connecting 500+ trained professionals with production opportunities.</p>
          </div>

          {/* Digital Enablement */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v4/foundation/digital-enablement-ops.webp"
              alt="Digital enablement operations desk beside a soundstage"
              brief="Black South African production and data team checking clean digital workflows beside a working soundstage."
              orientation="landscape"
            />
            <h3 className="text-gold font-display italic text-xl">Digital Enablement</h3>
            <p className="text-sm text-text/70">Bridging the divide between traditional film training and modern digital infrastructure.</p>
          </div>
        </div>
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Ready to explore the Infrastructure?</h2>
          <Link
            href="/foundation/infrastructure"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Digital Infrastructure →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
