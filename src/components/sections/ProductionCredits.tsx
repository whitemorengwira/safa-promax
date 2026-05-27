"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { KenBurns } from "@/components/visuals/KenBurns";
import { productionCredits } from "@/data/productions";

export function ProductionCredits() {
  const posterLoop = [...productionCredits, ...productionCredits];

  return (
    <section className="section-padding bg-surface border-y border-line py-12 md:py-16 overflow-hidden overflow-x-clip">
      <div className="container-max">
        <Reveal>
          <p className="text-center text-xs font-body uppercase tracking-widest text-muted mb-3">
            Productions We Have Crewed
          </p>
          <h2 className="mx-auto mb-10 max-w-3xl text-center font-display text-3xl md:text-4xl font-bold text-text">
            Proof carried by the work itself.
          </h2>
        </Reveal>

        <div className="overflow-hidden md:-mx-[var(--gutter)]">
          <div className="flex w-max gap-5 px-0 md:px-[var(--gutter)] animate-poster-rail">
            {posterLoop.map((production, idx) => (
              <article
                key={`${production.title}-${idx}`}
                className="group w-36 shrink-0 overflow-hidden border border-gold/20 bg-bg-deep shadow-2xl md:w-44"
                aria-label={`${production.title}, ${production.note}`}
              >
                <div className="relative aspect-[2/3]">
                  <KenBurns>
                    <Image
                      src={production.image}
                      alt={`${production.title} official poster artwork`}
                      fill
                      sizes="(max-width: 768px) 144px, 176px"
                      className="object-cover"
                    />
                  </KenBurns>
                </div>
                <div className="border-t border-gold/15 bg-bg-deep p-3">
                  <h3 className="break-words font-display text-sm font-bold leading-tight text-white md:text-base">
                    {production.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-gold-soft/85">
                    {production.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes poster-rail {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-poster-rail {
          animation: poster-rail 70s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-poster-rail {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
