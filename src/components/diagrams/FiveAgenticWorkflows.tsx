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
    { x: 600, y: 100, label: "Funding\nScout" },
    { x: 850, y: 300, label: "Content\nEngine" },
    { x: 600, y: 500, label: "Talent\nMatcher" },
    { x: 350, y: 300, label: "Reputation\nMonitor" },
  ];

  const center = { x: 600, y: 300 };

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 1200 600"
        className="w-full max-w-4xl"
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
            r="50"
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
            fontSize="13"
            fontWeight="700"
            letterSpacing="1"
            textTransform="uppercase"
          >
            AI Engine
          </text>
        </g>

        {/* Satellite nodes */}
        {satellites.map((sat, idx) => (
          <g key={`sat-${idx}`} className="satellite-pulse">
            <rect
              x={sat.x - 45}
              y={sat.y - 45}
              width="90"
              height="90"
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
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.5"
              textTransform="uppercase"
            >
              {sat.label.split("\n").map((line, i) => (
                <tspan key={i} x={sat.x} dy={i === 0 ? 0 : 13}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}

        {/* Title */}
        <text
          x="600"
          y="40"
          textAnchor="middle"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="12"
          letterSpacing="2"
          textTransform="uppercase"
          opacity="0.7"
        >
          Five Agentic Workflows
        </text>
      </svg>
    </div>
  );
}
