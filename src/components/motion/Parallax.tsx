"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  offset?: number; // The parallax coefficient (default 0.92 per mandate)
  className?: string;
}

/**
 * Parallax component for the "Text Float" effect.
 * - Implements a subtle vertical drift relative to scroll.
 * - Uses the mandated 0.92 coefficient for a cinematic feel.
 * - Smooths motion with a spring transition.
 */
export function Parallax({
  children,
  offset = 0.92,
  className = "",
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate the vertical drift based on the offset coefficient
  // 0.92 means the text moves at 92% of the scroll speed, creating a "float"
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * (1 - offset)]);
  
  // Apply a smooth spring to the transform
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
