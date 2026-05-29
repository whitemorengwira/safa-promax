"use client";

import type { CSSProperties } from "react";
import { SvgStage } from "@/components/visuals/SvgStage";

const gauges = [
  { label: "Portal sign-ups", value: 69, note: "verified trainee profiles" },
  { label: "Placements", value: 54, note: "logged production matches" },
  { label: "Search traffic", value: 74, note: "SEO and AI discovery" },
  { label: "LinkedIn signal", value: 83, note: "executive visibility" },
  { label: "Levy leads", value: 43, note: "commercial conversion" },
];

const circumference = 452;

export function PerformanceGauges() {
  return (
    <SvgStage label="KPI · Performance Gauges" aspect="wide" className="min-h-[520px] md:min-h-[640px]">
      <svg viewBox="0 0 1200 640" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" role="img" aria-label="Animated KPI performance gauges.">
        <defs>
          <linearGradient id="performanceGaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CC0000" />
            <stop offset="55%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E0C268" />
          </linearGradient>
          <filter id="performanceGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            .gauge-ring {
              stroke-dasharray: ${circumference};
              stroke-dashoffset: ${circumference};
              animation: gaugeFill 1.25s cubic-bezier(.16,1,.3,1) forwards;
            }
            .gauge-pulse { transform-origin: center; animation: gaugePulse 2.8s ease-in-out infinite; }
            .gauge-bar { transform-origin: left center; animation: gaugeBar 1.1s cubic-bezier(.16,1,.3,1) forwards; transform: scaleX(0); }
            .gauge-card { opacity: 0; transform: translateY(18px); animation: gaugeCard .65s cubic-bezier(.16,1,.3,1) forwards; }
            @keyframes gaugeFill { to { stroke-dashoffset: var(--target-offset); } }
            @keyframes gaugePulse { 50% { transform: scale(1.055); opacity: .72; } }
            @keyframes gaugeBar { to { transform: scaleX(1); } }
            @keyframes gaugeCard { to { opacity: 1; transform: translateY(0); } }
            @media (prefers-reduced-motion: reduce) {
              .gauge-ring, .gauge-pulse, .gauge-bar, .gauge-card {
                animation: none !important;
                opacity: 1 !important;
                transform: none !important;
                stroke-dashoffset: var(--target-offset) !important;
              }
            }
          `}</style>
        </defs>

        <rect width="1200" height="640" fill="#171720" />
        <text x="600" y="72" textAnchor="middle" fill="#E8E0D0" fontFamily="Playfair Display" fontSize="36" fontWeight="800">
          Five signals, one quarterly view
        </text>
        <text x="600" y="102" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="12" fontWeight="800" letterSpacing="2.4">
          EACH GAUGE SHOWS PROGRESS TOWARD THE 12-MONTH TARGET
        </text>

        {gauges.map((gauge, index) => {
          const x = 160 + index * 220;
          const y = index % 2 === 0 ? 310 : 270;
          const targetOffset = circumference * (1 - gauge.value / 100);
          const delay = `${0.18 + index * 0.13}s`;

          return (
            <g key={gauge.label} className="gauge-card" style={{ animationDelay: delay }}>
              <circle cx={x} cy={y} r="100" fill="#0F0F15" stroke="#C9A84C" strokeOpacity="0.14" />
              <circle className="gauge-pulse" cx={x} cy={y} r="84" fill="none" stroke="#C9A84C" strokeOpacity="0.16" />
              <circle cx={x} cy={y} r="72" fill="none" stroke="#242431" strokeWidth="13" />
              <circle
                cx={x}
                cy={y}
                r="72"
                fill="none"
                stroke="url(#performanceGaugeGradient)"
                strokeWidth="13"
                strokeLinecap="round"
                transform={`rotate(-90 ${x} ${y})`}
                className="gauge-ring"
                style={{ "--target-offset": targetOffset, animationDelay: delay } as CSSProperties}
                filter="url(#performanceGlow)"
              />
              <text x={x} y={y - 8} textAnchor="middle" fill="#E0C268" fontFamily="Playfair Display" fontSize="34" fontStyle="italic" fontWeight="800">
                {gauge.value}%
              </text>
              <text x={x} y={y + 24} textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="12" fontWeight="900" letterSpacing="1">
                {gauge.label.toUpperCase()}
              </text>
              <text x={x} y={y + 126} textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="11" fontWeight="700">
                {gauge.note}
              </text>
              <rect x={x - 78} y={y + 146} width="156" height="5" fill="#242431" />
              <rect
                x={x - 78}
                y={y + 146}
                width={156 * (gauge.value / 100)}
                height="5"
                fill={index === 4 ? "#FE2020" : "#E0C268"}
                className="gauge-bar"
                style={{ animationDelay: delay }}
              />
            </g>
          );
        })}

        <g opacity="0.92">
          <rect x="178" y="524" width="844" height="92" fill="#101017" stroke="#C9A84C" strokeOpacity="0.42" strokeWidth="2" />
          <text x="600" y="554" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="15" fontWeight="900">
            The board does not need noise. It needs a clean view of what is moving,
          </text>
          <text x="600" y="578" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="15" fontWeight="900">
            what is stuck, and where action is required.
          </text>
          <text x="600" y="604" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="11" fontWeight="900" letterSpacing="2.4">
            REPORT MONTHLY · REVIEW QUARTERLY · ESCALATE EARLY
          </text>
        </g>
      </svg>
    </SvgStage>
  );
}
