"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    index: "01",
    title: "Levy Paid",
    body: ["Production company", "pays Skills Levy", "through SARS"],
  },
  {
    index: "02",
    title: "SETA Approval",
    body: ["SAFA structures", "training evidence", "and stipend flow"],
  },
  {
    index: "03",
    title: "Proof Pack",
    body: ["Partner receives", "B-BBEE evidence", "and placement proof"],
  },
];

export function SkillsLevyFlow() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 },
    );

    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex justify-center py-8 md:py-12">
      <svg
        ref={svgRef}
        viewBox="0 0 1320 620"
        className="w-full max-w-7xl min-h-[500px]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Animated Skills Levy flow from levy paid to SETA approval to B-BBEE evidence pack."
      >
        <defs>
          <linearGradient id="skillsLevyFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CC0000" />
            <stop offset="48%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E0C268" />
          </linearGradient>
          <radialGradient id="skillsLevyGlow" cx="50%" cy="44%" r="66%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.14" />
            <stop offset="62%" stopColor="#8B0000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0F0F15" stopOpacity="0" />
          </radialGradient>
          <marker id="skillsLevyArrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="10" markerHeight="10" orient="auto">
            <path d="M2 2 L10 6 L2 10 Z" fill="#E0C268" />
          </marker>
          <style>{`
            .levy-card {
              opacity: 0;
              transform: translateY(24px);
              animation: ${isInView ? "levyCard .7s cubic-bezier(.16,1,.3,1) forwards" : "none"};
            }
            .levy-line {
              stroke-dasharray: 24 18;
              animation: ${isInView ? "levyDash 2.4s linear infinite" : "none"};
            }
            @keyframes levyCard { to { opacity: 1; transform: translateY(0); } }
            @keyframes levyDash { to { stroke-dashoffset: -160; } }
            @media (prefers-reduced-motion: reduce) {
              .levy-card, .levy-line { animation: none; opacity: 1; transform: none; }
            }
          `}</style>
        </defs>

        <rect width="1320" height="620" fill="#111119" />
        <circle cx="660" cy="318" r="400" fill="url(#skillsLevyGlow)" />
        <text x="660" y="76" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="18" fontWeight="900" letterSpacing="4">
          SKILLS LEVY COMMERCIAL FLOW
        </text>
        <text x="660" y="110" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="15" opacity="0.72">
          mandatory spend becomes structured training proof and partner value
        </text>

        <path d="M230 330 H1092" fill="none" stroke="#4b3f20" strokeWidth="18" strokeLinecap="round" />
        <path d="M230 330 H1092" fill="none" stroke="url(#skillsLevyFlowGradient)" strokeWidth="7" strokeLinecap="round" markerEnd="url(#skillsLevyArrow)" className="levy-line" />

        {steps.map((step, index) => {
          const x = 90 + index * 410;
          return (
            <g key={step.index} transform={`translate(${x} 174)`}>
              <g className="levy-card" style={{ animationDelay: `${index * 0.16}s` }}>
                <rect width="320" height="300" rx="10" fill="#0F0F15" stroke="#C9A84C" strokeWidth="2.5" />
                <rect width="320" height="9" fill={index === 0 ? "#CC0000" : "#E0C268"} />
                <text x="34" y="74" fill="#C9A84C" fontFamily="Playfair Display" fontSize="60" fontStyle="italic" fontWeight="900">
                  {step.index}
                </text>
                <text x="160" y="143" textAnchor="middle" fill="#E8E0D0" fontFamily="Playfair Display" fontSize="32" fontWeight="900" fontStyle="italic">
                  {step.title}
                </text>
                {step.body.map((line, lineIndex) => (
                  <text key={line} x="160" y={206 + lineIndex * 26} textAnchor="middle" fill={lineIndex === 1 ? "#E0C268" : "#C9A84C"} fontFamily="Outfit" fontSize="16" fontWeight="800" letterSpacing="1.3">
                    {line.toUpperCase()}
                  </text>
                ))}
              </g>
            </g>
          );
        })}

        <g opacity="0.88">
          <rect x="246" y="526" width="828" height="58" fill="#101017" stroke="#C9A84C" strokeOpacity="0.38" />
          <text x="660" y="560" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="15" fontWeight="800">
            Finance sees control. HR sees training. The board sees evidence.
          </text>
        </g>
      </svg>
    </div>
  );
}
