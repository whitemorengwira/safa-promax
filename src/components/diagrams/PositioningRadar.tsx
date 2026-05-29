"use client";

import { useEffect, useRef, useState } from "react";

const dimensions = [
  { label: "SETA Fluency", proof: "Funding and compliance language", value: 0.96 },
  { label: "B-BBEE Value", proof: "Training spend becomes evidence", value: 0.92 },
  { label: "Portal Infrastructure", proof: "Verified talent, visible placements", value: 0.9 },
  { label: "Agentic AI", proof: "Faster admin and smarter matching", value: 0.86 },
  { label: "Transformation Record", proof: "Two decades of film-career proof", value: 0.94 },
  { label: "Trusted NPC", proof: "Credibility with funders and partners", value: 0.91 },
];

const center = { x: 520, y: 360 };
const radius = 190;

function pointFor(index: number, distance: number) {
  const angle = (index * Math.PI * 2) / dimensions.length - Math.PI / 2;
  return {
    x: center.x + distance * Math.cos(angle),
    y: center.y + distance * Math.sin(angle),
  };
}

function polygonPoints() {
  return dimensions
    .map((dimension, index) => {
      const point = pointFor(index, radius * dimension.value);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

function cardPosition(index: number) {
  const positions = [
    { x: 520, y: 138 },
    { x: 792, y: 234 },
    { x: 792, y: 486 },
    { x: 520, y: 624 },
    { x: 248, y: 486 },
    { x: 248, y: 234 },
  ];
  return positions[index];
}

export function PositioningRadar() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.25 },
    );

    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-4">
      <svg
        ref={svgRef}
        viewBox="0 0 1040 720"
        className={`w-full ${isInView ? "radar-ready" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Competitive radar showing six SAFA advantages without a baseline comparison."
      >
        <defs>
          <radialGradient id="radarCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0C268" stopOpacity="0.2" />
            <stop offset="58%" stopColor="#CC0000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0F0F15" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="radarLine" x1="160" y1="120" x2="880" y2="620">
            <stop offset="0%" stopColor="#E0C268" />
            <stop offset="60%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#FE2020" />
          </linearGradient>
          <filter id="radarGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            .radar-orbit { transform-origin: ${center.x}px ${center.y}px; animation: radarRotate 34s linear infinite; }
            .radar-grid { opacity: 0; transform-origin: ${center.x}px ${center.y}px; }
            .radar-ready .radar-grid { animation: radarGrid 0.7s ease-out forwards; }
            .radar-axis { stroke-dasharray: 7 8; animation: radarDash 2.8s linear infinite; }
            .radar-area {
              stroke-dasharray: 1400;
              stroke-dashoffset: 1400;
              opacity: 0;
            }
            .radar-ready .radar-area { animation: radarDraw 1.1s ease-out 0.15s forwards; }
            .radar-dot { transform-origin: center; opacity: 0; }
            .radar-ready .radar-dot { animation: radarDot 2.4s ease-in-out infinite; }
            .radar-card { opacity: 0; }
            .radar-ready .radar-card { animation: radarCard 0.58s cubic-bezier(.16,1,.3,1) forwards; }
            @keyframes radarRotate { to { transform: rotate(360deg); } }
            @keyframes radarDash { to { stroke-dashoffset: -120; } }
            @keyframes radarGrid { to { opacity: 1; transform: scale(1); } from { opacity: 0; transform: scale(.94); } }
            @keyframes radarDraw { to { stroke-dashoffset: 0; opacity: 1; } }
            @keyframes radarDot {
              0%, 100% { opacity: .8; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.2); }
            }
            @keyframes radarCard { to { opacity: 1; } }
            @media (prefers-reduced-motion: reduce) {
              .radar-orbit, .radar-axis, .radar-ready .radar-dot, .radar-ready .radar-area, .radar-ready .radar-card, .radar-ready .radar-grid {
                animation: none !important;
                opacity: 1 !important;
                stroke-dashoffset: 0 !important;
                transform: none !important;
              }
            }
          `}</style>
        </defs>

        <rect x="0" y="0" width="1040" height="720" fill="#171720" />
        <circle cx={center.x} cy={center.y} r="290" fill="url(#radarCoreGlow)" />

        <text x={center.x} y="48" textAnchor="middle" fill="#E8E0D0" fontFamily="Playfair Display" fontSize="34" fontWeight="800">
          Six reasons SAFA wins
        </text>
        <text x={center.x} y="78" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="13" fontWeight="700" letterSpacing="2">
          FURTHER FROM CENTRE = STRONGER PROOF
        </text>

        <g className="radar-grid">
          {[0.25, 0.5, 0.75, 1].map((scale) => (
            <polygon
              key={scale}
              points={dimensions.map((_, index) => {
                const point = pointFor(index, radius * scale);
                return `${point.x},${point.y}`;
              }).join(" ")}
              fill="none"
              stroke="#C9A84C"
              strokeWidth="1"
              strokeOpacity={scale === 1 ? 0.34 : 0.16}
            />
          ))}
        </g>

        <g className="radar-orbit" opacity="0.55">
          <circle cx={center.x} cy={center.y} r="250" fill="none" stroke="#C9A84C" strokeDasharray="3 18" strokeOpacity="0.34" />
          <circle cx={center.x} cy={center.y} r="222" fill="none" stroke="#CC0000" strokeDasharray="1 20" strokeOpacity="0.32" />
        </g>

        {dimensions.map((dimension, index) => {
          const end = pointFor(index, radius);
          return (
            <line
              key={`axis-${dimension.label}`}
              x1={center.x}
              y1={center.y}
              x2={end.x}
              y2={end.y}
              stroke="#C9A84C"
              strokeOpacity="0.36"
              className="radar-axis"
            />
          );
        })}

        <polygon
          points={polygonPoints()}
          fill="#C9A84C"
          fillOpacity="0.18"
          stroke="url(#radarLine)"
          strokeWidth="4"
          strokeLinejoin="round"
          filter="url(#radarGlow)"
          className="radar-area"
        />

        <circle cx={center.x} cy={center.y} r="82" fill="#0F0F15" stroke="#E0C268" strokeWidth="2.5" />
        <text x={center.x} y={center.y - 12} textAnchor="middle" fill="#fff" fontFamily="Outfit" fontSize="20" fontWeight="900">
          SAFA
        </text>
        <text x={center.x} y={center.y + 16} textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="13" fontWeight="800" letterSpacing="1.5">
          PROVEN ADVANTAGE
        </text>

        {dimensions.map((dimension, index) => {
          const point = pointFor(index, radius * dimension.value);
          const card = cardPosition(index);
          const delay = `${0.35 + index * 0.1}s`;

          return (
            <g key={dimension.label}>
              <circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="#E0C268"
                stroke="#0F0F15"
                strokeWidth="3"
                className="radar-dot"
                style={{ animationDelay: delay }}
              />
              <g className="radar-card" style={{ animationDelay: delay }}>
                <rect x={card.x - 118} y={card.y - 38} width="236" height="76" fill="#101017" stroke="#C9A84C" strokeOpacity="0.78" />
                <rect x={card.x - 118} y={card.y - 38} width="5" height="76" fill={index === 3 ? "#FE2020" : "#E0C268"} />
                <text x={card.x - 96} y={card.y - 7} fill="#E8E0D0" fontFamily="Outfit" fontSize="15" fontWeight="900">
                  {dimension.label}
                </text>
                <text x={card.x - 96} y={card.y + 18} fill="#C9A84C" fontFamily="Outfit" fontSize="10.5" fontWeight="700">
                  {dimension.proof}
                </text>
              </g>
            </g>
          );
        })}

        <text x={center.x} y="694" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="12" opacity="0.68">
          Simple read: SAFA is strongest where compliance, transformation, placement proof and digital infrastructure meet.
        </text>
      </svg>
    </div>
  );
}
