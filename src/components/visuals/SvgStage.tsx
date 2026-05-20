"use client";

import { ReactNode } from "react";

interface SvgStageProps {
  label: string;
  aspect?: "square" | "tall" | "wide" | "cinema";
  className?: string;
  children: ReactNode;
}

/**
 * SvgStage component.
 * Encapsulates the animated vector graphic showcases.
 * - Renders a sleek gradient background frame.
 * - Includes an active pulsing "REC" indicator and section map label.
 * - Ensures responsive scaling and containment for complex diagrams.
 */
export function SvgStage({
  label,
  aspect = "square",
  className = "",
  children,
}: SvgStageProps) {
  const aspectClass =
    aspect === "tall"
      ? "aspect-[4/5]"
      : aspect === "wide"
      ? "aspect-[16/10]"
      : aspect === "cinema"
      ? "aspect-[16/7]"
      : "aspect-square";

  return (
    <div
      className={`svg-stage relative w-full overflow-hidden border border-line bg-gradient-to-b from-surface to-bg ${aspectClass} ${className}`}
    >
      {/* Pulse "REC" label indicator */}
      <span className="stage-label absolute top-[18px] left-[18px] font-body text-[10px] font-semibold tracking-[3px] text-gold uppercase z-10 flex items-center gap-2 select-none">
        <span
          className="w-2 h-2 rounded-full bg-red shadow-[0_0_10px_var(--red)] animate-pulse"
          style={{ animationDuration: "1.4s" }}
        />
        {label}
      </span>

      {/* Render internal interactive vector diagrams */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
