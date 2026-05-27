"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";

interface PathCard {
  title: string;
  subtext: string;
  cta: string;
  href: string | (() => string) | null;
  image: string;
}

const saFilmInternsUrl = () =>
  process.env.NEXT_PUBLIC_SA_FILM_INTERNS_URL ||
  process.env.NEXT_PUBLIC_CINETERNS_URL ||
  "https://cineterns.vercel.app/";

const paths: PathCard[] = [
  {
    title: "Production Companies",
    subtext: "Access 3,000+ SETA-verified crew",
    cta: "Browse SA Film Interns",
    href: saFilmInternsUrl,
    image: "/images/ai/v2/homepage/production-companies.png",
  },
  {
    title: "Funders & Partners",
    subtext: "B-BBEE compliance, Skills Levy administration, and impact returns",
    cta: "Download the Partnership Prospectus",
    href: "/download-prospectus",
    image: "/images/ai/v2/homepage/funders-partners.png",
  },
  {
    title: "Trainee and Aspiring Film Practitioners",
    subtext: "Start, strengthen, or relaunch your professional screen career",
    cta: "Explore the Programme",
    href: "/foundation/organisation",
    image: "/images/ai/v2/homepage/aspiring-trainees.png",
  },
];

export function StakeholderPaths() {
  return (
    <section id="stakeholder-paths" className="section-padding container-max py-16 md:py-24">
      <Reveal>
        <WordReveal
          tag="h2"
          text="Who are we here for?"
          className="mb-12 text-center"
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paths.map((path, idx) => {
          const href = typeof path.href === "function" ? path.href() : path.href;

          return (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="relative group overflow-hidden rounded-none bg-surface border border-line hover:border-gold transition-colors duration-300">
              {/* Background image with Ken Burns */}
              <div className="absolute inset-0 z-0 overflow-hidden h-48">
                <div className="ken-burns-frame w-full h-full">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-bg/40 to-bg" />

              {/* Content */}
              <div className="relative z-20 p-8 flex flex-col h-full min-h-96">
                {/* Spacer for image */}
                <div className="h-32" />

                {/* Text content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gold mb-2">
                      {path.title}
                    </h3>
                    <p className="text-sm text-muted mb-6">{path.subtext}</p>
                  </div>

                  {/* CTA Button */}
                  {href ? (
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-block font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-6 py-3 hover:bg-gold-soft transition-colors duration-200 w-fit"
                    >
                      {path.cta} →
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-block font-body text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-6 py-3 cursor-not-allowed opacity-75"
                    >
                      {path.cta} →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
