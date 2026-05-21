"use client";

import { useEffect, useRef, useState } from "react";

export function CareerProgression() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tiers = [
    { label: "Year 1 Intern", level: 0 },
    { label: "Year 2–3 Trainee", level: 1 },
    { label: "ACE Graduate", level: 2 },
    { label: "Independent Practitioner", level: 3 },
  ];

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 800 500"
        className="w-full max-w-2xl"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="tierGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B1A1A" />
            <stop offset="100%" stopColor="#C9A84C" />
          </linearGradient>
          <style>
            {`
              @keyframes barFill {
                0% { width: 0; }
                100% { width: 100%; }
              }
              @keyframes figureClimb {
                0% { transform: translateY(0); opacity: 0; }
                100% { transform: translateY(-${tiers.length * 100}px); opacity: 1; }
              }
              .tier-bar {
                animation: ${isInView ? "barFill 0.6s ease-out forwards" : "none"};
              }
              .figure {
                animation: ${isInView ? "figureClimb 2s ease-out 0.4s forwards" : "none"};
              }
            `}
          </style>
        </linearGradient>
        </defs>

        {/* Title */}
        <text
          x="400"
          y="40"
          textAnchor="middle"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="12"
          letterSpacing="2"
          textTransform="uppercase"
          opacity="0.7"
        >
          Four-Tier Career Progression
        </text>

        {/* Ladder bars and labels */}
        {tiers.map((tier, idx) => {
          const yPos = 100 + idx * 100;
          const barWidth = 300;
          return (
            <g key={`tier-${idx}`}>
              {/* Bar background */}
              <rect
                x="150"
                y={yPos}
                width={barWidth}
                height="40"
                rx="4"
                fill="#13131a"
                stroke="#C9A84C"
                strokeWidth="1"
                opacity="0.3"
              />
              {/* Animated bar fill */}
              <rect
                x="150"
                y={yPos}
                width={barWidth}
                height="40"
                rx="4"
                fill="url(#tierGradient)"
                className="tier-bar"
                style={{
                  animationDelay: isInView ? `${idx * 0.1}s` : "0s",
                }}
              />
              {/* Tier label */}
              <text
                x="470"
                y={yPos + 26}
                fill="#E0C268"
                fontFamily="Outfit"
                fontSize="12"
                fontWeight="600"
                letterSpacing="0.5"
              >
                {tier.label}
              </text>
            </g>
          );
        })}

        {/* Climbing figure */}
        <g className="figure" opacity={isInView ? 1 : 0}>
          {/* Head */}
          <circle cx="120" cy="420" r="6" fill="#E0C268" />
          {/* Body */}
          <line x1="120" y1="426" x2="120" y2="438" stroke="#E0C268" strokeWidth="2" />
          {/* Arms */}
          <line x1="114" y1="430" x2="126" y2="430" stroke="#E0C268" strokeWidth="2" />
          {/* Legs */}
          <line x1="120" y1="438" x2="114" y2="448" stroke="#E0C268" strokeWidth="2" />
          <line x1="120" y1="438" x2="126" y2="448" stroke="#E0C268" strokeWidth="2" />
        </g>

        {/* Rungs of the ladder */}
        {tiers.map((_, idx) => {
          const yPos = 100 + idx * 100;
          return (
            <line
              key={`rung-${idx}`}
              x1="130"
              y1={yPos + 20}
              x2="140"
              y2={yPos + 20}
              stroke="#C9A84C"
              strokeWidth="2"
              opacity="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}
