'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { SvgStage } from '@/components/visuals/SvgStage';

const stages = [
  {
    title: 'Technical Signal',
    detail: ['speed · schema', 'index hygiene'],
    x: 560,
    y: 158,
  },
  {
    title: 'Authority Pages',
    detail: ['film internships · B-BBEE', 'training pathways'],
    x: 752,
    y: 264,
  },
  {
    title: 'Proof Network',
    detail: ['MICT SETA · NFVF', 'production partners'],
    x: 752,
    y: 462,
  },
  {
    title: 'Search Ranking',
    detail: ['Google visibility', 'high-intent queries'],
    x: 560,
    y: 562,
  },
  {
    title: 'AI Citation',
    detail: ['ChatGPT · Perplexity', 'Google AI answers'],
    x: 368,
    y: 462,
  },
  {
    title: 'Qualified Enquiries',
    detail: ['interns · producers', 'funders'],
    x: 368,
    y: 264,
  },
];

const center = { x: 560, y: 366 };
const flowRadius = 205;

export function SeoDiscoveryFlywheel() {
  const shouldReduceMotion = useReducedMotion();

  const nodeVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      scale: shouldReduceMotion ? 1 : 0.88,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : 0.35 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const lineVariants: Variants = {
    hidden: {
      pathLength: shouldReduceMotion ? 1 : 0,
      opacity: shouldReduceMotion ? 0.35 : 0,
    },
    visible: (index: number) => ({
      pathLength: 1,
      opacity: 0.42,
      transition: {
        duration: 0.7,
        delay: shouldReduceMotion ? 0 : 0.55 + index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <SvgStage
      aspect="wide"
      label="Discovery Flywheel · SEO + AI Answers"
      className="min-h-[760px] md:min-h-0 shadow-gold"
    >
      <div className="hidden h-full w-full md:block">
        <svg
          viewBox="0 0 1120 660"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          role="img"
          aria-label="Animated discovery flywheel showing how SA Film Academy turns SEO foundations into search rankings, AI citations, and qualified enquiries."
        >
          <defs>
            <radialGradient id="seo-flywheel-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.2" />
              <stop offset="65%" stopColor="var(--red)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--bg-deep)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="seo-flywheel-flow" x1="250" y1="120" x2="880" y2="580">
              <stop offset="0%" stopColor="var(--gold-soft)" stopOpacity="0.95" />
              <stop offset="48%" stopColor="var(--gold)" stopOpacity="0.65" />
              <stop offset="100%" stopColor="var(--red-soft)" stopOpacity="0.82" />
            </linearGradient>
            <pattern id="seo-flywheel-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="var(--line)" strokeWidth="1" opacity="0.45" />
            </pattern>
            <filter id="seo-flywheel-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="1120" height="660" fill="url(#seo-flywheel-grid)" opacity="0.65" />
          <circle cx={center.x} cy={center.y} r="294" fill="url(#seo-flywheel-core)" />

          <motion.text
            x={center.x}
            y="58"
            textAnchor="middle"
            fill="var(--text)"
            fontFamily="var(--font-display)"
            fontSize="34"
            fontWeight="800"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            From searchable pages to cited answers
          </motion.text>
          <motion.text
            x={center.x}
            y="84"
            textAnchor="middle"
            fill="var(--muted)"
            fontFamily="var(--font-body)"
            fontSize="12"
            letterSpacing="0.4"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Every optimisation creates source material that search engines rank and AI engines quote.
          </motion.text>

          <motion.g
            style={{ transformOrigin: `${center.x}px ${center.y}px` }}
            animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
            transition={{ duration: 68, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              cx={center.x}
              cy={center.y}
              r="296"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              strokeDasharray="4 16"
              opacity="0.32"
            />
            <circle
              cx={center.x}
              cy={center.y}
              r="276"
              fill="none"
              stroke="var(--red)"
              strokeWidth="1"
              strokeDasharray="1 22"
              opacity="0.42"
            />
          </motion.g>

          <motion.circle
            cx={center.x}
            cy={center.y}
            r={flowRadius}
            fill="none"
            stroke="url(#seo-flywheel-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="18 14"
            transform={`rotate(-90 ${center.x} ${center.y})`}
            initial={false}
            animate={{ pathLength: 1, opacity: 0.92 }}
            transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {[0, 1, 2].map((index) => {
            const startAngle = index * 120 - 90;

            return (
              <motion.g
                key={`particle-${index}`}
                style={{ transformOrigin: `${center.x}px ${center.y}px` }}
                initial={{ rotate: startAngle }}
                animate={shouldReduceMotion ? { rotate: startAngle } : { rotate: startAngle + 360 }}
                transition={{ duration: 9 + index, repeat: Infinity, ease: 'linear', delay: index * -1.4 }}
              >
                <circle
                  cx={center.x + flowRadius}
                  cy={center.y}
                  r={index === 1 ? 4.5 : 3.5}
                  fill={index === 2 ? 'var(--red-soft)' : 'var(--gold-soft)'}
                  opacity="0.92"
                  filter="url(#seo-flywheel-glow)"
                />
              </motion.g>
            );
          })}

          {stages.map((stage, index) => (
            <motion.line
              key={`spoke-${stage.title}`}
              x1={center.x}
              y1={center.y}
              x2={stage.x}
              y2={stage.y}
              stroke="var(--line)"
              strokeWidth="1"
              strokeDasharray="5 6"
              custom={index}
              variants={lineVariants}
              initial={false}
              animate="visible"
            />
          ))}

          <motion.g
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <circle cx={center.x} cy={center.y} r="92" fill="var(--bg-deep)" stroke="var(--gold)" strokeWidth="2.5" />
            <circle cx={center.x} cy={center.y} r="74" fill="var(--surface)" opacity="0.78" stroke="var(--line-strong)" />
            <text
              x={center.x}
              y={center.y - 22}
              textAnchor="middle"
              fill="var(--gold-soft)"
              fontFamily="var(--font-body)"
              fontSize="13"
              fontWeight="700"
              letterSpacing="2"
            >
              SAFA
            </text>
            <text
              x={center.x}
              y={center.y + 2}
              textAnchor="middle"
              fill="var(--text)"
              fontFamily="var(--font-display)"
              fontSize="22"
              fontWeight="800"
            >
              Authority
            </text>
            <text
              x={center.x}
              y={center.y + 28}
              textAnchor="middle"
              fill="var(--gold)"
              fontFamily="var(--font-body)"
              fontSize="12"
              fontWeight="700"
              letterSpacing="2"
            >
              ENGINE
            </text>
          </motion.g>

          {stages.map((stage, index) => {
            const cardWidth = 190;
            const cardHeight = 78;
            const cardX = stage.x - cardWidth / 2;
            const cardY = stage.y - cardHeight / 2;

            return (
              <motion.g
                key={stage.title}
                custom={index}
                variants={nodeVariants}
                initial={false}
                animate="visible"
              >
                <motion.circle
                  cx={cardX + 22}
                  cy={cardY + 25}
                  r="14"
                  fill="none"
                  stroke={index === 4 ? 'var(--red-soft)' : 'var(--gold)'}
                  strokeWidth="1.2"
                  opacity="0.45"
                  animate={
                    shouldReduceMotion
                      ? { opacity: 0.45, scale: 1 }
                      : { opacity: [0.45, 0, 0.45], scale: [1, 1.75, 1] }
                  }
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.28, ease: 'easeInOut' }}
                  style={{ transformOrigin: `${cardX + 22}px ${cardY + 25}px` }}
                />
                <rect
                  x={cardX}
                  y={cardY}
                  width={cardWidth}
                  height={cardHeight}
                  fill="rgba(15, 15, 21, 0.9)"
                  stroke={index === 4 ? 'var(--red-soft)' : 'var(--gold)'}
                  strokeWidth="1.25"
                  opacity="0.96"
                />
                <rect x={cardX} y={cardY} width="4" height={cardHeight} fill={index === 4 ? 'var(--red-soft)' : 'var(--gold)'} />
                <circle cx={cardX + 22} cy={cardY + 25} r="6" fill={index === 4 ? 'var(--red-soft)' : 'var(--gold-soft)'} />
                <text
                  x={cardX + 42}
                  y={cardY + 25}
                  fill="var(--text)"
                  fontFamily="var(--font-body)"
                  fontSize="13"
                  fontWeight="800"
                  letterSpacing="0.8"
                >
                  {stage.title}
                </text>
                <text
                  x={cardX + 42}
                  y={cardY + 48}
                  fill="var(--muted)"
                  fontFamily="var(--font-body)"
                  fontSize="10.5"
                  letterSpacing="0.15"
                >
                  {stage.detail.map((line, lineIndex) => (
                    <tspan key={line} x={cardX + 42} dy={lineIndex === 0 ? 0 : 14}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div
        className="flex h-full w-full flex-col justify-start px-2 pb-3 pt-14 md:hidden"
        role="img"
        aria-label="Discovery flywheel showing the SEO and AI answer visibility sequence."
      >
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="border-l border-gold/60 pl-4"
        >
          <div className="font-display text-[1.8rem] font-black leading-[1.05] text-text">
            From searchable pages to cited answers
          </div>
          <div className="mt-3 max-w-[27rem] font-body text-[0.76rem] leading-6 text-muted">
            Every optimisation creates source material that search engines rank and AI engines quote.
          </div>
          <div className="mt-3 inline-flex border border-gold/35 bg-surface/40 px-3 py-2 font-body text-[0.58rem] font-bold uppercase tracking-[0.22em] text-gold-soft">
            SAFA Authority Engine
          </div>
        </motion.div>

        <div className="relative mt-6 flex-1">
          <motion.div
            className="absolute bottom-8 left-[18px] top-5 w-px bg-gradient-to-b from-gold via-gold/40 to-red-soft/70"
            initial={false}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-2">
            {stages.map((stage, index) => (
              <motion.div
                key={`mobile-${stage.title}`}
                custom={index}
                variants={nodeVariants}
                initial={false}
                animate="visible"
                className="relative grid grid-cols-[38px_1fr] items-center gap-3"
              >
                <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-gold/70 bg-bg-deep font-body text-[0.62rem] font-black text-gold-soft">
                  {index + 1}
                </span>
                <div className="border border-line bg-bg-deep/80 px-4 py-2.5 shadow-1">
                  <div className="font-body text-[0.76rem] font-black uppercase tracking-[0.12em] text-text">
                    {stage.title}
                  </div>
                  <div className="mt-1 font-body text-[0.7rem] leading-5 text-muted">
                    {stage.detail.join(' · ')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SvgStage>
  );
}
