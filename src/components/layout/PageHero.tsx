"use client";

import { ReactNode } from "react";
import { KenBurns } from "@/components/visuals/KenBurns";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  fit?: "cover" | "contain";
  objectPosition?: string;
  motionSafe?: boolean;
  safeHeadroom?: boolean;
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
  fit = "contain",
  objectPosition,
  motionSafe = true,
  safeHeadroom = true,
}: PageHeroProps) {
  const resolvedObjectPosition = objectPosition ?? (safeHeadroom ? "center 28%" : "center center");

  return (
    <section className="page-hero relative min-h-screen flex flex-col justify-end overflow-hidden -mt-[72px] md:-mt-[80px] pt-[72px] md:pt-[80px]">
      {/* Background Image with Ken Burns */}
      <div
        className="absolute inset-0 z-0 bg-bg-deep"
        data-cms-image-slot="hero"
        data-cms-image-src={imageSrc}
        data-cms-image-alt={imageAlt}
      >
        <KenBurns className="w-full h-full" enabled={motionSafe && fit === "cover"} safe={safeHeadroom}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={fit === "contain" ? "object-contain" : "object-cover"}
            style={{ objectFit: fit, objectPosition: resolvedObjectPosition }}
            preload
            sizes="100vw"
          />
        </KenBurns>
      </div>

      {/* Scrim / Overlay - Darker at bottom to support lowered text */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/45 to-transparent" />
      <div className="absolute inset-0 z-10 bg-red-deep/5" />

      {/* Content with Parallax Text Float - Minimal text to showcase image */}
      <div className="page-hero__content relative z-20 container-max">
        <Parallax offset={0.92} className="animate-float">
          <Reveal className="page-hero__copy hero-copy-flow">
            <span className="page-hero__eyebrow eyebrow mb-1 block">
              <span className="num">{eyebrow}</span>
            </span>

            <h1 className="page-hero__title mb-2 text-white drop-shadow-2xl">
              {title}
            </h1>

            {subtitle && (
              <p className="page-hero__subtitle font-body italic text-gold-soft leading-relaxed mb-3 drop-shadow-lg">
                {subtitle}
              </p>
            )}
          </Reveal>

          {children && <Reveal delay={0.3}>{children}</Reveal>}
        </Parallax>
      </div>

      {/* Scroll cue */}
      <div className="page-hero__scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-20">
        <span className="font-body text-[8px] tracking-[0.3em] uppercase text-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
