"use client";

import { CSSProperties } from "react";

interface KenBurnsProps {
  src: string;
  alt: string;
  className?: string;
  variant?: "default" | "alt";
}

export function KenBurns({ src, alt, className = "", variant = "default" }: KenBurnsProps) {
  const isAlt = variant === "alt";
  const animationName = isAlt ? "kenBurnsAlt" : "kenBurns";

  const style: CSSProperties = {
    animation: `${animationName} 22s ease-in-out infinite`,
    willChange: "transform",
    transformOrigin: isAlt ? "bottom right" : "top left",
  };

  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes kenBurns {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.18);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes kenBurnsAlt {
            0% {
              transform: scale(1.18);
            }
            50% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.18);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes kenBurns,
          @keyframes kenBurnsAlt {
            0%, 100% {
              transform: scale(1);
            }
          }
        }
      `}</style>
      <img
        src={src}
        alt={alt}
        className={`${className} object-cover`}
        style={style}
      />
    </>
  );
}
