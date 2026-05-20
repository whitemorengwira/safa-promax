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
 * - Gracefully supports styling modifiers (like nested italics).
 */
export function WordReveal({
  text,
  className = "",
  tag: Tag = "h2",
  style,
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // cinematic cubic-bezier curve array
      },
    },
  };

  return (
    <Tag
      className={className}
      aria-label={text}
      style={style}
    >
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="inline-block"
        aria-hidden="true"
      >
        {words.map((word, idx) => {
          // Identify if the word should be italic (e.g. wrapped in _word_ or *word*)
          const isItalic =
            (word.startsWith("_") && word.endsWith("_")) ||
            (word.startsWith("*") && word.endsWith("*"));
          const cleanWord = isItalic ? word.slice(1, -1) : word;

          return (
            <motion.span
              key={idx}
              variants={wordVariants}
              className={`inline-block mr-[0.22em] ${isItalic ? "font-display-alt italic text-gold-soft" : ""}`}
            >
              {cleanWord}
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
