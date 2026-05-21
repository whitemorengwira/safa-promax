"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Counter component.
 * Animates a numeric value from 0 to the target over the specified duration
 * when the element scrolls into view. Uses IntersectionObserver with a 500ms
 * fallback to ensure the animation triggers reliably.
 * - Respects prefers-reduced-motion by showing the final value immediately
 * - Counts up with an ease-out curve
 * - Displays only once per page load
 */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    // Start animation
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;
    const durationMs = duration * 1000;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out curve: 1 - (1 - progress)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (endValue - startValue) * easeProgress);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
        setHasAnimated(true);
      }
    };

    // Fallback timer in case requestAnimationFrame doesn't work
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
        setDisplayValue(endValue);
        setHasAnimated(true);
      }
    }, durationMs + 100);

    requestAnimationFrame(animate);

    return () => clearTimeout(fallbackTimer);
  }, [isInView, value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
