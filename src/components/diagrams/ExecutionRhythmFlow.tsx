"use client";

import { SvgStage } from "@/components/visuals/SvgStage";

const steps = [
  ["01", "Ship", "what went live"],
  ["02", "Block", "what needs action"],
  ["03", "Own", "who closes it"],
  ["04", "Report", "what the board sees"],
];

export function ExecutionRhythmFlow() {
  return (
    <SvgStage label="Visibility · Execution Rhythm" aspect="wide" className="min-h-[520px]">
      <svg viewBox="0 0 1280 720" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated execution rhythm showing four large weekly operating steps.">
        <defs>
          <linearGradient id="rhythmFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CC0000" />
            <stop offset="50%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E0C268" />
          </linearGradient>
          <radialGradient id="rhythmGlow" cx="50%" cy="45%" r="62%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#8B0000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0F0F15" stopOpacity="0" />
          </radialGradient>
          <style>{`
            .rhythm-grid { stroke-dasharray: 5 18; animation: rhythmGrid 15s linear infinite; }
            .rhythm-line { stroke-dasharray: 22 16; animation: rhythmDash 2.4s linear infinite; }
            .rhythm-card { animation: rhythmLift 4.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
            .rhythm-scan { animation: rhythmScan 4.8s cubic-bezier(.45,0,.2,1) infinite; }
            @keyframes rhythmGrid { to { stroke-dashoffset: -92; } }
            @keyframes rhythmDash { to { stroke-dashoffset: -152; } }
            @keyframes rhythmLift { 50% { transform: translateY(-12px); filter: drop-shadow(0 0 18px rgba(224,194,104,.32)); } }
            @keyframes rhythmScan { 0% { transform: translateX(0); opacity: 0; } 12%, 88% { opacity: .86; } 100% { transform: translateX(920px); opacity: 0; } }
            @media (prefers-reduced-motion: reduce) {
              .rhythm-grid, .rhythm-line, .rhythm-card, .rhythm-scan { animation: none; }
            }
          `}</style>
        </defs>

        <rect width="1280" height="720" fill="#111119" />
        <circle cx="640" cy="330" r="390" fill="url(#rhythmGlow)" />
        <g opacity="0.18">
          {Array.from({ length: 12 }).map((_, index) => (
            <path key={`h-${index}`} d={`M90 ${116 + index * 44} H1190`} stroke="#C9A84C" strokeWidth="1" className="rhythm-grid" />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <path key={`v-${index}`} d={`M${126 + index * 116} 92 V628`} stroke="#CC0000" strokeWidth="1" className="rhythm-grid" />
          ))}
        </g>

        <text x="640" y="88" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="20" fontWeight="900" letterSpacing="5">
          WEEKLY EXECUTION RHYTHM
        </text>
        <text x="640" y="122" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="15" opacity="0.72">
          Monday review, monthly report, quarterly board signal
        </text>

        <path d="M150 548 H1128" stroke="#4b3f20" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M150 548 H1128" stroke="url(#rhythmFlow)" strokeWidth="5" strokeLinecap="round" fill="none" className="rhythm-line" />
        <rect x="150" y="536" width="58" height="24" rx="12" fill="#E0C268" className="rhythm-scan" />

        {steps.map(([number, title, note], index) => {
          const x = 110 + index * 285;
          return (
            <g key={number} transform={`translate(${x} 220)`}>
              <g className="rhythm-card" style={{ animationDelay: `${index * 0.18}s` }}>
                <rect width="226" height="248" fill="#0F0F15" stroke="#C9A84C" strokeWidth="2.5" />
                <rect x="0" y="0" width="226" height="8" fill={index === 1 ? "#CC0000" : "#E0C268"} />
                <text x="28" y="74" fill="#C9A84C" fontFamily="Playfair Display" fontSize="64" fontStyle="italic" fontWeight="900">
                  {number}
                </text>
                <text x="28" y="132" fill="#E8E0D0" fontFamily="Playfair Display" fontSize="40" fontWeight="900" fontStyle="italic">
                  {title}
                </text>
                <text x="28" y="177" fill="#C9A84C" fontFamily="Outfit" fontSize="14" fontWeight="900" letterSpacing="2">
                  {note.toUpperCase()}
                </text>
                <line x1="28" y1="204" x2="176" y2="204" stroke="#CC0000" strokeWidth="4" opacity="0.75" />
                {index < steps.length - 1 && (
                  <path d="M236 124 H270" stroke="url(#rhythmFlow)" strokeWidth="7" strokeLinecap="round" className="rhythm-line" />
                )}
              </g>
            </g>
          );
        })}
      </svg>
    </SvgStage>
  );
}
