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
        imageSrc="/images/ai/v2/foundation/ecosystem-hero.png"
        imageAlt="Professional Black South African film crew gathered around a cinematic movie set"
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
              </defs>
              <rect width="1200" height="500" fill="url(#grid3)"/>

              {/* Central SAFA block */}
              <g>
                <rect x="500" y="180" width="200" height="140" fill="#13131a" stroke="#C9A84C" strokeWidth="1.5"/>
                <rect x="500" y="180" width="200" height="6" fill="#C9A84C"/>
                <text x="600" y="230" textAnchor="middle" fill="#C9A84C" fontFamily="Playfair Display" fontSize="22" fontWeight="600">SA FILM</text>
                <text x="600" y="252" textAnchor="middle" fill="#C9A84C" fontFamily="Playfair Display" fontSize="22" fontWeight="600">ACADEMY</text>
                <text x="600" y="282" textAnchor="middle" fill="#E8E0D0" opacity="0.6" fontFamily="Outfit" fontSize="9" letterSpacing="2">MASTER BRAND · MICT SETA NPC</text>
                <text x="600" y="305" textAnchor="middle" fill="#E0C268" opacity="0.5" fontFamily="Playfair Display" fontSize="10" fontStyle="italic">est. 2006</text>
              </g>

              {/* ACE block */}
              <g>
                <rect x="120" y="80" width="240" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="120" y="80" width="6" height="100" fill="#8B1A1A"/>
                <text x="240" y="118" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="18" fontStyle="italic">Academy of</text>
                <text x="240" y="138" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="18" fontStyle="italic">Creative Excellence</text>
                <text x="240" y="160" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">ALUMNI · HOD PATHWAY</text>
              </g>
              <line x1="360" y1="130" x2="500" y2="210" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="0.8" strokeDasharray="4 4"/>

              {/* FILMGRO block */}
              <g>
                <rect x="100" y="320" width="260" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="100" y="320" width="6" height="100" fill="#8B1A1A"/>
                <text x="230" y="358" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="20" fontWeight="600">FILMGRO</text>
                <text x="230" y="380" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="13" fontStyle="italic">Driving Academy</text>
                <text x="230" y="402" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">SUZUKI · 124 LICENCES</text>
              </g>
              <line x1="360" y1="370" x2="500" y2="290" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="0.8" strokeDasharray="4 4"/>

              {/* GreenSet block */}
              <g>
                <rect x="840" y="80" width="240" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="1074" y="80" width="6" height="100" fill="#8B1A1A"/>
                <text x="960" y="120" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="20" fontWeight="600">GreenSet</text>
                <text x="960" y="142" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="12" fontStyle="italic">Sustainability Subsidiary</text>
                <text x="960" y="164" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">NETFLIX · UK · US</text>
              </g>
              <line x1="840" y1="130" x2="700" y2="210" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="0.8" strokeDasharray="4 4"/>

              {/* SA Film Intense block */}
              <g>
                <rect x="820" y="320" width="260" height="100" fill="#13131a" stroke="#C9A84C" strokeWidth="1"/>
                <rect x="1074" y="320" width="6" height="100" fill="#8B1A1A"/>
                <text x="950" y="352" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="17" fontWeight="600">SA Film Intense</text>
                <text x="950" y="380" textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="13" fontStyle="italic">Digital Talent Portal</text>
                <text x="950" y="402" textAnchor="middle" fill="#E8E0D0" opacity="0.55" fontFamily="Outfit" fontSize="9" letterSpacing="2">500+ PROFILES · AI MATCH</text>
              </g>
              <line x1="820" y1="370" x2="700" y2="290" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="0.8" strokeDasharray="4 4"/>
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
              src="/images/ai/v2/foundation/ace-director.png"
              alt="ACE Director"
              brief="A young Black South African male director behind a cinematic camera, warm gold and deep red lighting, photorealistic, textless."
              orientation="square"
            />
            <h3 className="text-gold font-display italic text-xl">ACE</h3>
            <p className="text-sm text-text/70">Academy of Creative Excellence: Alumni and HOD pathway for high-level creative leadership.</p>
          </div>

          {/* FILMGRO */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v2/foundation/filmgro-trainee.png"
              alt="FILMGRO Trainee"
              brief="A young Black South African trainee in a professional production vehicle, cinematic lighting, warm gold and deep red tones, photorealistic, textless."
              orientation="square"
            />
            <h3 className="text-gold font-display italic text-xl">FILMGRO</h3>
            <p className="text-sm text-text/70">Driving Academy: Providing essential driving skills and licensing for film industry trainees.</p>
          </div>

          {/* GreenSet */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v2/foundation/greenset-eco.png"
              alt="GreenSet Eco"
              brief="A sustainable film set with eco-friendly equipment, cinematic lighting, warm gold and deep red tones, photorealistic, textless."
              orientation="square"
            />
            <h3 className="text-gold font-display italic text-xl">GreenSet</h3>
            <p className="text-sm text-text/70">Sustainability Subsidiary: Leading the industry toward eco-friendly production practices.</p>
          </div>

          {/* SA Film Intense */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v2/foundation/cineterns-portal.png"
              alt="SA Film Intense digital talent portal"
              brief="A high-end laptop screen showing a clean digital portal, cinematic lighting, warm gold and deep red tones, photorealistic, textless."
              orientation="square"
            />
            <h3 className="text-gold font-display italic text-xl">SA Film Intense</h3>
            <p className="text-sm text-text/70">Digital Talent Portal: Connecting 500+ trained professionals with production opportunities.</p>
          </div>

          {/* Digital Enablement */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/v2/foundation/digital-gap.png"
              alt="Digital enablement infrastructure"
              brief="An abstract wireframe or digital network on a dark surface, cinematic lighting, warm gold and deep red tones, photorealistic, textless."
              orientation="square"
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
