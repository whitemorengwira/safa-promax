"use client";

import { Reveal } from "@/components/motion/Reveal";

const productions = [
  "The Woman King",
  "Warrior",
  "One Piece",
  "Wheel of Time",
  "Devil's Peak",
  "Blood & Water",
  "Servant",
  "The Newsroom",
];

export function ProductionCredits() {
  return (
    <section className="section-padding bg-surface border-y border-line py-12 md:py-16">
      <div className="container-max">
        <Reveal>
          <p className="text-center text-xs font-body uppercase tracking-widest text-muted mb-8">
            Productions We Have Crewed
          </p>
        </Reveal>

        {/* Scrolling production titles */}
        <div className="overflow-hidden">
          <div className="flex gap-8 md:gap-12 animate-scroll-left whitespace-nowrap">
            {/* First pass */}
            {productions.map((title, idx) => (
              <span
                key={`prod-${idx}`}
                className="font-display italic text-lg md:text-xl text-gold-soft flex-shrink-0"
              >
                {title}
                {idx < productions.length - 1 && (
                  <span className="mx-8 text-gold">◆</span>
                )}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {productions.map((title, idx) => (
              <span
                key={`prod-dup-${idx}`}
                className="font-display italic text-lg md:text-xl text-gold-soft flex-shrink-0"
              >
                {title}
                {idx < productions.length - 1 && (
                  <span className="mx-8 text-gold">◆</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
