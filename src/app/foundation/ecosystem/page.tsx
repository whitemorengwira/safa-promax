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
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="03 · The Brand Ecosystem"
        title="Five entities, one architecture."
        subtitle="A branded house, unified under SAFA."
        imageSrc="/images/ai/safa-org-hero.png"
        imageAlt="Stakeholders gathered around a roundtable in warm cinematic light"
      />

      <FilmstripDivider />

      {/* Architecture Section */}
      <SectionShell
        eyebrow="03.1"
        title="The Branded _House_"
        subtitle="Moving from a collection of isolated projects to a unified strategic family."
      >
        <div className="mb-16">
          <SvgStage label="Architecture · Site Plan" aspect="wide">
            <svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A84C" stroke-opacity="0.06" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="1200" height="500" fill="url(#grid3)"/>

              {/* Central SAFA block */}
              <g>
                <rect x="500" y="180" width="200" height="140" fill="#13131a" stroke="#C9A84C" stroke-width="1.5"/>
                <rect x="500" y="180" width="200" height="6" fill="#C9A84C"/>
                <text x="600" y="230" text-anchor="middle" fill="#C9A84C" font-family="Playfair Display" font-size="22" font-weight="600">SA FILM</text>
                <text x="600" y="252" text-anchor="middle" fill="#C9A84C" font-family="Playfair Display" font-size="22" font-weight="600">ACADEMY</text>
                <text x="600" y="282" text-anchor="middle" fill="#E8E0D0" opacity="0.6" font-family="Outfit" font-size="9" letter-spacing="2">MASTER BRAND · MICT SETA NPC</text>
                <text x="600" y="305" text-anchor="middle" fill="#E0C268" opacity="0.5" font-family="Playfair Display" font-size="10" font-style="italic">est. 2006</text>
              </g>

              {/* ACE block */}
              <g>
                <rect x="120" y="80" width="240" height="100" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                <rect x="120" y="80" width="6" height="100" fill="#8B1A1A"/>
                <text x="240" y="118" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="18" font-style="italic">Academy of</text>
                <text x="240" y="138" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="18" font-style="italic">Creative Excellence</text>
                <text x="240" y="160" text-anchor="middle" fill="#E8E0D0" opacity="0.55" font-family="Outfit" font-size="9" letter-spacing="2">ALUMNI · HOD PATHWAY</text>
              </g>
              <line x1="360" y1="130" x2="500" y2="210" stroke="#C9A84C" stroke-opacity="0.4" stroke-width="0.8" stroke-dasharray="4 4"/>

              {/* FILMGRO block */}
              <g>
                <rect x="100" y="320" width="260" height="100" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                <rect x="100" y="320" width="6" height="100" fill="#8B1A1A"/>
                <text x="230" y="358" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="20" font-weight="600">FILMGRO</text>
                <text x="230" y="380" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="13" font-style="italic">Driving Academy</text>
                <text x="230" y="402" text-anchor="middle" fill="#E8E0D0" opacity="0.55" font-family="Outfit" font-size="9" letter-spacing="2">SUZUKI · 124 LICENCES</text>
              </g>
              <line x1="360" y1="370" x2="500" y2="290" stroke="#C9A84C" stroke-opacity="0.4" stroke-width="0.8" stroke-dasharray="4 4"/>

              {/* GreenSet block */}
              <g>
                <rect x="840" y="80" width="240" height="100" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                <rect x="1074" y="80" width="6" height="100" fill="#8B1A1A"/>
                <text x="960" y="120" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="20" font-weight="600">GreenSet</text>
                <text x="960" y="142" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="12" font-style="italic">Sustainability Subsidiary</text>
                <text x="960" y="164" text-anchor="middle" fill="#E8E0D0" opacity="0.55" font-family="Outfit" font-size="9" letter-spacing="2">NETFLIX · UK · US</text>
              </g>
              <line x1="840" y1="130" x2="700" y2="210" stroke="#C9A84C" stroke-opacity="0.4" stroke-width="0.8" stroke-dasharray="4 4"/>

              {/* Cineterns block */}
              <g>
                <rect x="820" y="320" width="260" height="100" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                <rect x="1074" y="320" width="6" height="100" fill="#8B1A1A"/>
                <text x="950" y="358" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="20" font-weight="600">Cineterns</text>
                <text x="950" y="380" text-anchor="middle" fill="#E0C268" font-family="Playfair Display" font-size="13" font-style="italic">Digital Talent Portal</text>
                <text x="950" y="402" text-anchor="middle" fill="#E8E0D0" opacity="0.55" font-family="Outfit" font-size="9" letter-spacing="2">500+ PROFILES · AI MATCH</text>
              </g>
              <line x1="820" y1="370" x2="700" y2="290" stroke="#C9A84C" stroke-opacity="0.4" stroke-width="0.8" stroke-dasharray="4 4"/>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <Reveal>
              <div className="space-y-6">
                <p className="drop-cap">
                  The SA Film Academy ecosystem is a "branded house" architecture. SAFA sits at the apex as the MICT SETA-accredited master brand, while four distinct programmes radiate outward, each carrying a visible relationship to the master brand.
                </p>
                <p>
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
        title="The Five _Pillars_"
        subtitle="Each entity serves a specific role in the talent pipeline."
        className="bg-surface/30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ACE */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/safa-ai-hero.png"
              alt="ACE Director"
              brief="Young Black male director behind camera, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">ACE</h3>
            <p className="text-sm">Academy of Creative Excellence: Alumni and HOD pathway for high-level creative leadership.</p>
          </div>

          {/* FILMGRO */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/safa-community-hero.png"
              alt="FILMGRO Trainee"
              brief="Young Black trainee in production vehicle, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">FILMGRO</h3>
            <p className="text-sm">Driving Academy: Providing essential driving skills and licensing for film industry trainees.</p>
          </div>

          {/* GreenSet */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/safa-curriculum-hero.png"
              alt="GreenSet Eco"
              brief="Sustainable film set with eco equipment, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">GreenSet</h3>
            <p className="text-sm">Sustainability Subsidiary: Leading the industry toward eco-friendly production practices.</p>
          </div>

          {/* Cineterns */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/safa-cineterns-portal.png"
              alt="Cineterns Portal"
              brief="Laptop screen showing Cineterns portal, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">Cineterns</h3>
            <p className="text-sm">Digital Talent Portal: Connecting 500+ trained professionals with production opportunities.</p>
          </div>

          {/* Digital Gap */}
          <div className="space-y-4">
            <ImagePlaceholder
              src="/images/ai/safa-digital-gap.png"
              alt="Digital Gap"
              brief="Abstract wireframe on dark surface, cinematic lighting"
              orientation="square"
            />
            <h3 className="text-gold">Digital Gap</h3>
            <p className="text-sm">Bridging the divide between traditional film training and modern digital infrastructure.</p>
          </div>
        </div>
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _Infrastructure?_</h2>
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
