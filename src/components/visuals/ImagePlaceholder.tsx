"use client";

import Image from "next/image";
import { KenBurns } from "./KenBurns";

interface ImagePlaceholderProps {
  src?: string; // If undefined, displays a clean dark surface (no text)
  alt: string;
  brief: string; // The Getty Images brief (hidden from UI per Part C)
  id?: string; // Unique ID (hidden from UI per Part C)
  orientation?: "landscape" | "portrait" | "square" | "video";
  className?: string;
}

/**
 * ImagePlaceholder component updated per Part C of the Targeted Fix Order.
 * - Renders a clean dark surface when `src` is missing.
 * - Hides all "SAFA-IMG", "Image Placeholder", and "Getty Brief" text.
 * - Once `src` is supplied, loads the actual image and animates it with
 *   a cinematic slow Ken Burns drift.
 */
export function ImagePlaceholder({
  src,
  alt,
  brief,
  id = "SAFA-IMG-XXX",
  orientation = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  const ratioClass =
    orientation === "portrait"
      ? "aspect-[3/4]"
      : orientation === "square"
      ? "aspect-square"
      : orientation === "video"
      ? "aspect-[21/9]"
      : "aspect-[16/9]";

  return (
    <figure className={`w-full group ${className}`}>
      <KenBurns>
        <div
          className={`placeholder-fill relative ${ratioClass} w-full overflow-hidden bg-surface border border-line-strong flex items-center justify-center`}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 1320px"
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center select-none z-10">
              {/* Placeholder text removed per Part C */}
            </div>
          )}
        </div>
      </KenBurns>

      {/* Getty Brief and instruction line removed per Part C */}
    </figure>
  );
}
