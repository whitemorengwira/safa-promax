"use client";

import Image from "next/image";
import { KenBurns } from "./KenBurns";

interface ImagePlaceholderProps {
  src?: string; // If undefined, displays a clean dark surface with no UI text.
  alt: string;
  brief: string; // Asset brief, retained for source context but hidden from UI.
  id?: string;
  orientation?: "landscape" | "portrait" | "square" | "video";
  className?: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  motionSafe?: boolean;
  safeHeadroom?: boolean;
}

/**
 * Renders a cinematic visual slot and keeps any generation brief out of the UI.
 */
export function ImagePlaceholder({
  src,
  alt,
  brief,
  id,
  orientation = "landscape",
  className = "",
  fit = "cover",
  objectPosition,
  motionSafe = true,
  safeHeadroom = true,
}: ImagePlaceholderProps) {
  void brief;
  void id;

  const ratioClass =
    orientation === "portrait"
      ? "aspect-[3/4]"
      : orientation === "square"
      ? "aspect-square"
      : orientation === "video"
      ? "aspect-[21/9]"
      : "aspect-[16/9]";

  return (
    <figure className={`safa-image-slot w-full group ${className}`} data-visual-slot>
      <div
        className={`visual-fill relative ${ratioClass} w-full overflow-hidden bg-surface border border-line-strong flex items-center justify-center`}
      >
        {src ? (
          <KenBurns enabled={motionSafe && fit === "cover"} safe={safeHeadroom}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 84vw, 70vw"
              className={fit === "contain" ? "object-contain" : "object-cover"}
              style={{
                objectFit: fit,
                objectPosition: objectPosition ?? (safeHeadroom ? "center 28%" : "center center"),
              }}
            />
          </KenBurns>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center select-none z-10">
          </div>
        )}
      </div>
    </figure>
  );
}
