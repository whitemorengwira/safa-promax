"use client";

import { ReactNode } from "react";
import { KenBurns } from "@/components/visuals/KenBurns";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { Parallax } from "@/components/motion/Parallax";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
}

/**
 * PageHero component implements Priority 5 & 7:
 * - Full-viewport-height (min-h-screen)
 * - Ken Burns background image
 * - Dark gradient scrim for legibility
 * - Cinematic typography overlay
 * - Parallax "Text Float" effect (0.92 coefficient)
 * - Lowered text positioning to preserve hero image impact
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden -mt-[72px] md:-mt-[80px] pt-[72px] md:pt-[80px]">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <KenBurns className="w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </KenBurns>
      </div>

      {/* Scrim / Overlay - Darker at bottom to support lowered text */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Content with Parallax Text Float - Lowered to bottom 1/6 with smaller text */}
      <div className="relative z-20 container-max pb-8 md:pb-12">
        <Parallax offset={0.92}>
          <Reveal>
            <span className="eyebrow mb-2 block text-xs md:text-sm">
              <span className="num">{eyebrow}</span>
            </span>
          </Reveal>

          <WordReveal
            tag="h1"
            text={title}
            className="mb-2 max-w-3xl text-white drop-shadow-2xl text-4xl md:text-5xl lg:text-6xl"
          />

          {subtitle && (
            <Reveal delay={0.2}>
              <p className="font-display-alt italic text-gold-soft text-base md:text-lg max-w-xl leading-relaxed mb-4 drop-shadow-lg">
                {subtitle}
              </p>
            </Reveal>
          )}

          {children && <Reveal delay={0.3}>{children}</Reveal>}
        </Parallax>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-20">
        <span className="font-body text-[8px] tracking-[0.3em] uppercase text-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
