"use client";

import { useEffect, useRef, useState } from "react";

export function CalendarTimeline() {
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

  const phases = [
    {
      quarter: "Q1",
      name: "Foundation",
      months: "Jun–Aug 2026",
      milestones: ["Brand audit", "SEO baseline", "SA Film Interns beta", "GreenSet co-brand"],
    },
    {
      quarter: "Q2",
      name: "Visibility",
      months: "Sep–Nov 2026",
      milestones: ["Netflix case study", "Skills Levy campaign", "10 company accounts", "FILMGRO Gauteng"],
    },
    {
      quarter: "Q3",
      name: "Authority",
      months: "Dec 2026–Feb 2027",
      milestones: ["Funding pipeline", "Impact report", "Speaking engagement", "GreenSet blog series"],
    },
    {
      quarter: "Q4",
      name: "Scale",
      months: "Mar–May 2027",
      milestones: ["Commercial launch", "Self-sustainability model", "SLA renewals", "Year-two blueprint"],
    },
  ];

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 1200 400"
        className="w-full max-w-4xl"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>
            {`
              @keyframes phaseSlideIn {
                0% { transform: translateX(-50px); opacity: 0; }
                100% { transform: translateX(0); opacity: 1; }
              }
              .phase-segment {
                animation: ${isInView ? "phaseSlideIn 0.6s ease-out forwards" : "none"};
              }
            `}
          </style>
        </defs>

        {/* Title */}
        <text
          x="600"
          y="40"
          textAnchor="middle"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="12"
          letterSpacing="2"
          style={{ textTransform: "uppercase" }}
          opacity="0.7"
        >
          12-Month Strategic Timeline
        </text>

        {/* Timeline segments */}
        {phases.map((phase, idx) => {
          const segmentWidth = 250;
          const xStart = 50 + idx * segmentWidth;
          const isActive = idx === 0;

          return (
            <g
              key={`phase-${idx}`}
              className="phase-segment"
              style={{
                animationDelay: isInView ? `${idx * 0.15}s` : "0s",
              }}
            >
              {/* Phase segment background */}
              <rect
                x={xStart}
                y="80"
                width={segmentWidth - 10}
                height="280"
                rx="4"
                fill="#13131a"
                stroke={isActive ? "#E0C268" : "#C9A84C"}
                strokeWidth={isActive ? "2" : "1"}
                opacity={isActive ? 1 : 0.6}
              />

              {/* Active underline */}
              {isActive && (
                <rect
                  x={xStart}
                  y="80"
                  width={segmentWidth - 10}
                  height="4"
                  fill="#E0C268"
                />
              )}

              {/* Quarter badge */}
              <rect x={xStart + 16} y="98" width="34" height="18" rx="2" fill="#8B0000" opacity="0.8" />
              <text
                x={xStart + 33}
                y="111"
                textAnchor="middle"
                fill="#E0C268"
                fontFamily="Outfit"
                fontSize="8"
                fontWeight="700"
              >
                {phase.quarter}
              </text>

              {/* Phase name */}
              <text
                x={xStart + (segmentWidth - 10) / 2}
                y="120"
                textAnchor="middle"
                fill="#E0C268"
                fontFamily="Playfair Display"
                fontSize="16"
                fontWeight="700"
                letterSpacing="0.5"
              >
                {phase.name}
              </text>

              {/* Months */}
              <text
                x={xStart + (segmentWidth - 10) / 2}
                y="145"
                textAnchor="middle"
                fill="#C9A84C"
                fontFamily="Outfit"
                fontSize="9"
                letterSpacing="1"
                style={{ textTransform: "uppercase" }}
                opacity="0.7"
              >
                {phase.months}
              </text>

              {/* Milestones */}
              {phase.milestones.map((milestone, mIdx) => (
                <text
                  key={`milestone-${mIdx}`}
                  x={xStart + 15}
                  y={176 + mIdx * 28}
                  fill="#E8E0D0"
                  fontFamily="Outfit"
                  fontSize="10"
                  opacity="0.8"
                >
                  • {milestone}
                </text>
              ))}

              <text
                x={xStart + 15}
                y="325"
                fill="#C9A84C"
                fontFamily="Outfit"
                fontSize="8"
                letterSpacing="0.8"
                style={{ textTransform: "uppercase" }}
                opacity="0.75"
              >
                board checkpoint
              </text>
            </g>
          );
        })}

        {/* Connecting line (mobile vertical, desktop horizontal) */}
        <line
          x1="50"
          y1="220"
          x2="1050"
          y2="220"
          stroke="#C9A84C"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
