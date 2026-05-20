"use client";

import { ReactNode } from "react";

interface KenBurnsProps {
  children: ReactNode;
}

/**
 * KenBurns component applies a slow, cinematic zoom & pan motion
 * to its child elements (typically image overlays).
 * Implemented per Rule E: every image must feel alive.
 * Animation parameters: ~22 seconds, infinite alternating direction.
 * Automatically halts when prefers-reduced-motion is requested.
 */
export function KenBurns({ children }: KenBurnsProps) {
  return <div className="kenburns-frame w-full h-full">{children}</div>;
}
