"use client";

import Image from "next/image";
import { KenBurns } from "./KenBurns";

interface ImagePlaceholderProps {
  src?: string; // If undefined, displays the structured Getty placeholder
  alt: string;
  brief: string; // The copy-pasteable Getty Images brief
  id?: string; // Unique ID for Getty relinking (e.g., SAFA-IMG-001)
  orientation?: "landscape" | "portrait" | "square" | "video";
  className?: string;
}

/**
 * ImagePlaceholder component implemented per Rule D and Rule E.
 * - Renders a premium placeholder (dark background, gold hairline border)
 *   with an easily copy-pasteable Getty Images Brief box directly beneath.
 * - Once `src` is supplied, loads the actual image and animates it with
 *   a cinematic slow Ken Burns drift.
 * - Displays a unique ID (e.g., SAFA-IMG-001) for easy Getty relinking.
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
              <div className="mb-4 px-3 py-1 bg-gold text-bg font-mono text-[10px] font-bold rounded-full">
                {id}
              </div>
              <span className="font-body tracking-[4px] text-gold/60 text-[10px] md:text-xs uppercase font-semibold">
                Image Placeholder
              </span>
              <span className="font-display italic text-[11px] text-muted/40 mt-1 max-w-[200px] block truncate">
                {alt}
              </span>
            </div>
          )}
          
          {/* ID Overlay on hover when src exists */}
          {src && (
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-2 py-1 bg-black/80 text-gold font-mono text-[10px] border border-gold/50">
                {id}
              </div>
            </div>
          )}
        </div>
      </KenBurns>

      {/* GETTY BRIEF - Visible instructable block when image is a placeholder */}
      {!src && (
        <figcaption className="mt-3 border-l-2 border-gold/50 pl-3 py-1.5 font-body text-[11px] md:text-[12px] leading-relaxed text-muted bg-surface-2/40 px-3">
          <div>
            <strong className="text-gold tracking-wider uppercase text-[10px] block md:inline md:mr-1">
              Getty Brief:
            </strong>
            <span className="select-all bg-bg-deep/50 px-1 py-0.5 rounded border border-line/5 text-text/90 font-mono">
              "{brief}"
            </span>
          </div>
          <span className="block mt-1.5 text-gold/50 text-[10px] italic">
            British English. Professional Black South African representation. Cinematic, low-key gold and shadow lighting.
          </span>
        </figcaption>
      )}
    </figure>
  );
}
