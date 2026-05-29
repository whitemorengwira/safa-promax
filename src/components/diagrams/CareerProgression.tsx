"use client";

import { SvgStage } from "@/components/visuals/SvgStage";

const nodes = [
  { label: "Intern", detail: "first set experience", x: 190, y: 280 },
  { label: "Verified Profile", detail: "skills and availability", x: 398, y: 150 },
  { label: "Placement", detail: "paid production pathway", x: 660, y: 150 },
  { label: "ACE Alumni", detail: "credits and credibility", x: 870, y: 280 },
  { label: "Mentor Loop", detail: "graduates guide cohorts", x: 660, y: 430 },
  { label: "Industry Citizen", detail: "permanent career identity", x: 398, y: 430 },
];

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [1, 5],
  [2, 4],
  [0, 2],
  [3, 5],
];

export function CareerProgression() {
  return (
    <SvgStage label="Community · Career Mesh" aspect="wide" className="min-h-[540px] md:min-h-[680px] shadow-gold">
      <svg viewBox="0 0 1060 600" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" role="img" aria-label="Animated community mesh from intern to industry citizen.">
        <defs>
          <radialGradient id="communityGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0C268" stopOpacity="0.18" />
            <stop offset="65%" stopColor="#CC0000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0F0F15" stopOpacity="0" />
          </radialGradient>
          <filter id="communityNodeGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            .community-link { stroke-dasharray: 12 14; animation: communityFlow 3s linear infinite; }
            .community-node { opacity: 0; animation: communityIn .7s cubic-bezier(.16,1,.3,1) forwards; }
            .community-pulse { transform-origin: center; animation: communityPulse 2.6s ease-in-out infinite; }
            .community-orbit { transform-origin: 530px 300px; animation: communityOrbit 44s linear infinite; }
            @keyframes communityFlow { to { stroke-dashoffset: -120; } }
            @keyframes communityIn { to { opacity: 1; } }
            @keyframes communityPulse { 50% { opacity: .28; transform: scale(1.45); } }
            @keyframes communityOrbit { to { transform: rotate(360deg); } }
            @media (prefers-reduced-motion: reduce) {
              .community-link, .community-node, .community-pulse, .community-orbit {
                animation: none !important;
                opacity: 1 !important;
                transform: none !important;
              }
            }
          `}</style>
        </defs>

        <rect width="1060" height="600" fill="#171720" />
        <circle cx="530" cy="300" r="260" fill="url(#communityGlow)" />

        <text x="530" y="64" textAnchor="middle" fill="#E8E0D0" fontFamily="Playfair Display" fontSize="34" fontWeight="800">
          From trainee to visible industry citizen
        </text>
        <text x="530" y="94" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="12" fontWeight="800" letterSpacing="2.6">
          A COMMUNITY LOOP THAT KEEPS PEOPLE MOVING FORWARD
        </text>

        <g className="community-orbit" fill="none" stroke="#C9A84C" strokeWidth="1">
          <ellipse cx="530" cy="300" rx="375" ry="210" strokeOpacity="0.18" strokeDasharray="4 16" />
          <ellipse cx="530" cy="300" rx="282" ry="154" strokeOpacity="0.28" strokeDasharray="1 18" />
        </g>

        {links.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];
          return (
            <line
              key={`${start.label}-${end.label}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={index > 5 ? "#FE2020" : "#E0C268"}
              strokeWidth={index > 5 ? 1.6 : 2.5}
              strokeOpacity={index > 5 ? 0.32 : 0.54}
              className="community-link"
              style={{ animationDelay: `${index * 0.08}s` }}
            />
          );
        })}

        <g transform="translate(530 300)">
          <circle r="78" fill="#0F0F15" stroke="#E0C268" strokeWidth="2.5" />
          <text y="-13" textAnchor="middle" fill="#fff" fontFamily="Outfit" fontSize="18" fontWeight="900">
            SAFA
          </text>
          <text y="15" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="13" fontWeight="900" letterSpacing="1.5">
            COMMUNITY
          </text>
          <text y="40" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="10" fontWeight="800" letterSpacing="1.4">
            PROOF LOOP
          </text>
        </g>

        {nodes.map((node, index) => (
          <g key={node.label} transform={`translate(${node.x} ${node.y})`} className="community-node" style={{ animationDelay: `${0.2 + index * 0.12}s` }}>
            <circle r="34" fill="none" stroke={index === 4 ? "#FE2020" : "#E0C268"} strokeWidth="1.6" opacity="0.42" className="community-pulse" />
            <rect x="-96" y="-48" width="192" height="96" fill="#101017" stroke={index === 4 ? "#FE2020" : "#C9A84C"} strokeWidth="1.8" filter="url(#communityNodeGlow)" />
            <rect x="-96" y="-48" width="5" height="96" fill={index === 4 ? "#FE2020" : "#E0C268"} />
            <text y="-9" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="15" fontWeight="900">
              {node.label.toUpperCase()}
            </text>
            <text y="18" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="10.5" fontWeight="700">
              {node.detail}
            </text>
          </g>
        ))}
      </svg>
    </SvgStage>
  );
}
