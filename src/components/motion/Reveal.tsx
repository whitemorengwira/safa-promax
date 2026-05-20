"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

/**
 * Reveal component.
 * Applies a smooth fade-in-and-rise entrance effect on scroll.
 * Implemented using Framer Motion to replace the legacy IntersectionObserver.
 * - Respects system 'prefers-reduced-motion' settings.
 * - Triggers when 15% of the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 28,
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
      scale: shouldReduceMotion ? 1 : 0.98, // Subtle scale-up effect
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // More aggressive premium ease
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
