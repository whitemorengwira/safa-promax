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
  title: '4 · Digital Infrastructure · SA Film Academy Strategy',
  description: 'Section 4 of the SA Film Academy 360° marketing strategy: Digital Infrastructure',
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      <PageHero
        eyebrow="04 · Digital Infrastructure"
        title="What has already been built — and why it matters before anything else is scaled."
        subtitle="This strategy is not aspirational. The infrastructure that underpins everything else is already live, deployed and demonstrable."
        imageSrc="/images/ai/safa-infra-hero.png"
        imageAlt="Black tech professional at dual monitors with cinematic blue-and-gold light"
      />

      <FilmstripDivider />

      {/* Stack Section */}
      <SectionShell
        eyebrow="04.1"
        title="The Tech _Stack_"
        subtitle="Scaling what is already running, not building from scratch."
      >
        <div className="mb-16">
          <SvgStage label="Stack · Circuit Topology" aspect="wide">
            <svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.8"/>
                  <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <g stroke="#C9A84C" stroke-opacity="0.04" stroke-width="0.5">
                <line x1="0" y1="120" x2="1200" y2="120"/>
                <line x1="0" y1="240" x2="1200" y2="240"/>
                <line x1="0" y1="360" x2="1200" y2="360"/>
              </g>
              <g stroke="#C9A84C" stroke-width="1.2" stroke-opacity="0.45" fill="none">
                <path d="M 80 240 L 200 240 L 220 220 L 280 220"/>
                <path d="M 350 220 L 430 220 L 450 240 L 510 240"/>
                <path d="M 600 240 L 680 240 L 700 220 L 760 220"/>
                <path d="M 580 270 L 700 360 L 760 360"/>
                <path d="M 80 120 L 1140 120 L 1140 380 L 80 380 Z" stroke-opacity="0.2" stroke-dasharray="6 4"/>
                <path d="M 850 220 L 950 220 L 970 240 L 1040 240"/>
                <path d="M 850 360 L 970 360 L 990 340 L 1040 280"/>
              </g>
              <circle r="3" fill="#E0C268">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 80 240 L 200 240 L 220 220 L 280 220 L 350 220 L 430 220 L 450 240 L 510 240"/>
              </circle>
              <circle r="2.5" fill="#E0C268">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 600 240 L 680 240 L 700 220 L 760 220 L 850 220 L 950 220 L 970 240 L 1040 240"/>
              </circle>
              <circle r="2.5" fill="#E0C268">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 580 270 L 700 360 L 760 360 L 850 360 L 970 360 L 990 340 L 1040 280"/>
              </circle>
              <text x="600" y="106" text-anchor="middle" fill="#C9A84C" opacity="0.6" font-family="Outfit" font-size="10" letter-spacing="4">CLOUDFLARE · WAF · CDN · DNS · BOT PROTECTION · POPIA-GRADE BOUNDARY</text>
              <g>
                <rect x="40" y="220" width="80" height="40" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                <text x="80" y="244" text-anchor="middle" fill="#E0C268" font-family="Outfit" font-size="11" letter-spacing="1">BROWSER</text>
                <text x="80" y="278" text-anchor="middle" fill="#E8E0D0" opacity="0.5" font-family="Outfit" font-size="8">user</text>
              </g>
              <g>
                <rect x="280" y="200" width="80" height="40" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                <text x="320" y="220" text-anchor="middle" fill="#E0C268" font-family="Outfit" font-size="10" letter-spacing="1">VERCEL</text>
                <text x="320" y="232" text-anchor="middle" fill="#E0C268" font-family="Outfit" font-size="9" letter-spacing="1">EDGE</text>
                <text x="320" y="258" text-anchor="middle" fill="#E8E0D0" opacity="0.5" font-family="Outfit" font-size="8">&lt;100ms global</text>
              </g>
              <g>
                <rect x="510" y="220" width="80" height="40" fill="#13131a" stroke="#C9A84C" stroke-width="1"/>
                <text x="550" y="244" text-anchor="middle" fill="#E0C268" font-family="Outfit" font-size="10" letter-spacing="1">NEXT.JS 14</text>
                <text x="550" y="278" text-anchor="middle" fill="#E8E0D0" opacity="0.5" font-family="Outfit" font-size="8">App Router · RSC</text>
              </g>
            </svg>
          </SvgStage>
        </div>

        <TwoColLayout
          left={
            <div className="space-y-6">
              <p className="drop-cap">
                The digital infrastructure of the SA Film Academy is built on a modern, high-performance stack designed for global scale. Leveraging Next.js 14, Vercel Edge, and Cloudflare, we ensure sub-100ms latency and POPIA-grade security across all user touchpoints.
              </p>
              <p>
                This is not a theoretical plan. The core components of this infrastructure are already live and operational, providing the foundation for the Cineterns portal and the Academy's digital presence.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/safa-tech-stack.png"
              alt="Abstract circuit topology illustration"
              brief="Abstract circuit topology illustration, gold traces on dark surface, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* Cineterns Section */}
      <SectionShell
        eyebrow="04.2"
        title="The Cineterns _Portal_"
        subtitle="A demonstrable, live platform connecting talent with opportunity."
        className="bg-surface/30"
      >
        <TwoColLayout
          flip
          left={
            <div className="space-y-6">
              <p>
                Cineterns is the flagship digital product of the SA Film Academy. It serves as a comprehensive talent portal where 500+ trained professionals are indexed, matched, and connected with production opportunities.
              </p>
              <p>
                The portal features an AI-driven matching engine that aligns trainee skills with specific production requirements, streamlining the placement process for the Academy's fringe clients.
              </p>
            </div>
          }
          right={
            <ImagePlaceholder
              src="/images/ai/safa-cineterns-infra.png"
              alt="Production manager using Cineterns interface"
              brief="Over-the-shoulder of a Black production manager using the Cineterns interface, cinematic lighting"
              orientation="landscape"
            />
          }
        />
      </SectionShell>

      {/* Final CTA / Transition */}
      <section className="section-padding container-max text-center py-24">
        <Reveal>
          <h2 className="mb-8">Ready to explore the _Visibility_ pillar?</h2>
          <Link
            href="/visibility/calendar"
            className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition inline-block"
          >
            Next: Visibility Calendar →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
