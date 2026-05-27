"use client";

import { useEffect, useRef, useState } from "react";

export function FiveAgenticWorkflows() {
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

  const satellites = [
    { x: 600, y: 110, label: "Funding\nScout", cadence: "Weekly", output: "Applications" },
    { x: 835, y: 225, label: "Content\nPipeline", cadence: "2x weekly", output: "SEO drafts" },
    { x: 745, y: 470, label: "Talent\nMatcher", cadence: "On brief", output: "Top 5 shortlist" },
    { x: 455, y: 470, label: "Reputation\nMonitor", cadence: "Daily", output: "Signals" },
    { x: 365, y: 225, label: "Competitive\nIntel", cadence: "Weekly", output: "Market shifts" },
  ];

  const center = { x: 600, y: 300 };

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 1200 640"
        className="w-full max-w-5xl"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>
            {`
              @keyframes lineDraw {
                0% { stroke-dashoffset: 500; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes satellitePulse {
                0%, 100% { filter: drop-shadow(0 0 0 rgba(201, 168, 76, 0)); }
                50% { filter: drop-shadow(0 0 12px rgba(139, 26, 26, 0.6)); }
              }
              @keyframes centerPulse {
                0%, 100% { filter: drop-shadow(0 0 0 rgba(224, 194, 104, 0)); }
                50% { filter: drop-shadow(0 0 16px rgba(224, 194, 104, 0.8)); }
              }
              .line-draw {
                animation: ${isInView ? "lineDraw 1s ease-out forwards" : "none"};
              }
              .satellite-pulse {
                animation: ${isInView ? "satellitePulse 2s ease-in-out 1s infinite" : "none"};
              }
              .center-pulse {
                animation: ${isInView ? "centerPulse 2s ease-in-out 2s infinite" : "none"};
              }
            `}
          </style>
        </defs>

        {/* Connecting lines */}
        {satellites.map((sat, idx) => (
          <line
            key={`line-${idx}`}
            x1={center.x}
            y1={center.y}
            x2={sat.x}
            y2={sat.y}
            stroke="#C9A84C"
            strokeWidth="2"
            strokeDasharray="500"
            className="line-draw"
            style={{
              animationDelay: isInView ? `${idx * 0.15}s` : "0s",
            }}
          />
        ))}

        {/* Center node */}
        <g className="center-pulse">
          <circle
            cx={center.x}
            cy={center.y}
            r="68"
            fill="#13131a"
            stroke="#E0C268"
            strokeWidth="2"
          />
          <text
            x={center.x}
            y={center.y + 8}
            textAnchor="middle"
            fill="#E0C268"
            fontFamily="Outfit"
            fontSize="15"
            fontWeight="700"
            letterSpacing="1"
            style={{ textTransform: "uppercase" }}
          >
            Agentic Core
          </text>
          <text
            x={center.x}
            y={center.y + 30}
            textAnchor="middle"
            fill="#C9A84C"
            fontFamily="Outfit"
            fontSize="8"
            letterSpacing="0.8"
            style={{ textTransform: "uppercase" }}
          >
            Human review gate
          </text>
        </g>

        {/* Satellite nodes */}
        {satellites.map((sat, idx) => (
          <g key={`sat-${idx}`} className="satellite-pulse">
            <rect
            x={sat.x - 69}
            y={sat.y - 59}
            width="138"
            height="118"
              rx="8"
              fill="#13131a"
              stroke="#C9A84C"
              strokeWidth="2"
            />
            <text
              x={sat.x}
              y={sat.y + 5}
              textAnchor="middle"
              fill="#E0C268"
              fontFamily="Outfit"
              fontSize="12"
              fontWeight="600"
              letterSpacing="0.5"
              style={{ textTransform: "uppercase" }}
            >
              {sat.label.split("\n").map((line, i) => (
                <tspan key={i} x={sat.x} dy={i === 0 ? 0 : 13}>
                  {line}
                </tspan>
              ))}
            </text>
            <text
              x={sat.x}
              y={sat.y + 30}
              textAnchor="middle"
              fill="#C9A84C"
              fontFamily="Outfit"
              fontSize="7.5"
              letterSpacing="0.7"
              style={{ textTransform: "uppercase" }}
              opacity="0.85"
            >
              {sat.cadence}
            </text>
            <text
              x={sat.x}
              y={sat.y + 42}
              textAnchor="middle"
              fill="#E8E0D0"
              fontFamily="Outfit"
              fontSize="7.5"
              opacity="0.72"
            >
              {sat.output}
            </text>
          </g>
        ))}

        <g opacity="0.85">
          <rect x="80" y="548" width="1040" height="52" fill="#13131a" stroke="#C9A84C" strokeWidth="1" opacity="0.8" />
          {["Schedule", "Draft", "Score", "Review", "Publish / Submit"].map((step, idx) => (
            <g key={step}>
              <text
                x={170 + idx * 215}
                y="581"
                textAnchor="middle"
                fill={idx === 3 ? "#E0C268" : "#C9A84C"}
                fontFamily="Outfit"
                fontSize="10"
                fontWeight="600"
                letterSpacing="1"
                style={{ textTransform: "uppercase" }}
              >
                {idx + 1}. {step}
              </text>
              {idx < 4 && <line x1={250 + idx * 215} y1="576" x2={300 + idx * 215} y2="576" stroke="#8B0000" strokeWidth="2" />}
            </g>
          ))}
        </g>

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
          The Agentic Core
        </text>
      </svg>
    </div>
  );
}
