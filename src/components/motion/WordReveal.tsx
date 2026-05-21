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
  const words = text.split(" ").filter((w) => w.length > 0);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06, // 60ms stagger per mandate
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
        duration: 0.7, // Slightly longer for more "weight"
        ease: [0.16, 1, 0.3, 1], // Premium ease
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
        className="inline"
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
              className={`inline ${isItalic ? "font-display-alt italic text-gold-soft" : ""}`}
              style={{ marginRight: "0.25em" }}
            >
              {cleanWord}
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
