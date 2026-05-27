"use client";

import { ReactNode } from "react";

interface KenBurnsProps {
  children: ReactNode;
  variant?: "default" | "alt";
  className?: string;
  enabled?: boolean;
  safe?: boolean;
}

/**
 * KenBurns component applies a slow, cinematic zoom & pan motion
 * to its child elements (typically images).
 * Implements Priority 3: dramatic, visible Ken Burns effect (scale 1.18).
 * Animation parameters: 22s (default) or 24s (alt), infinite alternating.
 * Automatically halts when prefers-reduced-motion is requested.
 *
 * @param children - The image or content to apply Ken Burns to
 * @param variant - "default" (22s, pan -3%/-2%) or "alt" (24s, pan -2%/-3%)
 * @param className - Additional CSS classes to apply
 */
export function KenBurns({
  children,
  variant = "default",
  className = "",
  enabled = true,
  safe = false,
}: KenBurnsProps) {
  const baseClass = "ken-burns-frame w-full h-full";
  const variantClass = variant === "alt" ? "ken-burns-alt" : "";
  const safeClass = safe ? "ken-burns-safe" : "";
  const motionClass = enabled ? "" : "ken-burns-off";
  const finalClass = `${baseClass} ${variantClass} ${safeClass} ${motionClass} ${className}`.trim();

  return <div className={finalClass}>{children}</div>;
}
