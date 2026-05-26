"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  style?: React.CSSProperties;
}

/**
 * WordReveal component.
 * Animates a text heading or block word-by-word as it scrolls into view.
 * Signature "headline assembles itself" cinematic entrance.
 * - Staggers each word by 60ms.
 * - Maintains accessibility using aria-label on the root element.
 * - Fixes concatenation by treating underscores as spaces and ensuring margin.
 */
export function WordReveal({
  text,
  className = "",
  tag: Tag = "h2",
  style,
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  
  // Replace underscores with spaces and split by space to ensure words are separated
  const cleanText = text.replace(/_/g, " ");
  const words = cleanText.split(" ").filter((w) => w.length > 0);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Tag
      className={className}
      aria-label={cleanText}
      style={style}
    >
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-wrap"
        aria-hidden="true"
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={wordVariants}
            className="inline-block shrink-0 mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
