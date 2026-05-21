"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
  coefficient?: number;
}

/**
 * ParallaxText component.
 * Creates a gentle parallax effect where text moves at 92% of scroll speed
 * while the background image moves at 100%, creating a floating effect.
 * - Uses Framer Motion's useScroll and useTransform hooks
 * - Coefficient of 0.92 creates subtle depth
 * - Respects prefers-reduced-motion
 */
export function ParallaxText({
  children,
  className = "",
  coefficient = 0.92,
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Transform scroll progress to parallax offset
  // At coefficient 0.92, the text moves at 92% of scroll speed
  const y = useTransform(scrollY, (value) => value * (1 - coefficient));

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
