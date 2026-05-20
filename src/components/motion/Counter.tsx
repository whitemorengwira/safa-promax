"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";

interface CounterProps {
  target: number;
  duration?: number; // duration in seconds
  className?: string;
}

/**
 * Counter component.
 * Smoothly counts up from 0 to the target number when scrolled into view.
 * - Leverages Framer Motion values to avoid continuous React re-renders.
 * - Animates over ~1500ms with an ease-out curve.
 * - Bypasses animation immediately if prefers-reduced-motion is active.
 */
export function Counter({ target, duration = 1.5, className = "" }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, {
      duration: duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, target, duration, count, shouldReduceMotion]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (nodeRef.current) {
        // Format thousands with spaces for South African currency/stats standard (e.g. 3 000)
        nodeRef.current.textContent = Math.round(latest).toLocaleString("en-ZA").replace(/,/g, " ");
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={nodeRef} className={className}>0</span>;
}
