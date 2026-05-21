"use client";

import { useEffect, useRef, useState } from "react";

export function PositioningRadar() {
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

  const axes = [
    "SETA Fluency",
    "B-BBEE Mechanics",
    "Digital Infrastructure",
    "Agentic AI",
    "Transformation Track Record",
    "NPC Integrity",
  ];

  const center = { x: 400, y: 300 };
  const radius = 120;

  // Calculate points for a hexagon (6 axes)
  const getPoint = (index: number, distance: number) => {
    const angle = (index * Math.PI * 2) / axes.length - Math.PI / 2;
    return {
      x: center.x + distance * Math.cos(angle),
      y: center.y + distance * Math.sin(angle),
    };
  };

  // SAFA values (larger)
  const safaValues = [0.95, 0.92, 0.88, 0.85, 0.90, 0.93];
  // Sector baseline (smaller)
  const baselineValues = [0.60, 0.65, 0.58, 0.62, 0.60, 0.65];

  const generatePolygonPath = (values: number[]) => {
    let path = "";
    values.forEach((value, idx) => {
      const point = getPoint(idx, radius * value);
      path += `${point.x},${point.y} `;
    });
    return path;
  };

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="w-full max-w-2xl"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>
            {`
              @keyframes polygonDraw {
                0% { stroke-dashoffset: 1000; opacity: 0; }
                100% { stroke-dashoffset: 0; opacity: 1; }
              }
              @keyframes labelFadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
              }
              .polygon-safa {
                animation: ${isInView ? "polygonDraw 0.8s ease-out forwards" : "none"};
              }
              .polygon-baseline {
                animation: ${isInView ? "polygonDraw 0.8s ease-out forwards" : "none"};
              }
              .axis-label {
                animation: ${isInView ? "labelFadeIn 0.6s ease-out 0.8s forwards" : "none"};
              }
            `}
          </style>
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
          style={{ textTransform: "uppercase" }}
          opacity="0.7"
        >
          Competitive Positioning Radar
        </text>

        {/* Grid circles */}
        {[0.25, 0.5, 0.75, 1].map((scale, idx) => (
          <circle
            key={`grid-${idx}`}
            cx={center.x}
            cy={center.y}
            r={radius * scale}
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1"
            opacity="0.15"
            strokeDasharray="4 4"
          />
        ))}

        {/* Axis lines */}
        {axes.map((_, idx) => {
          const point = getPoint(idx, radius);
          return (
            <line
              key={`axis-${idx}`}
              x1={center.x}
              y1={center.y}
              x2={point.x}
              y2={point.y}
              stroke="#C9A84C"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}

        {/* Sector baseline polygon */}
        <polygon
          points={generatePolygonPath(baselineValues)}
          fill="#8B1A1A"
          fillOpacity="0.2"
          stroke="#8B1A1A"
          strokeWidth="2"
          strokeDasharray="1000"
          className="polygon-baseline"
        />

        {/* SAFA polygon */}
        <polygon
          points={generatePolygonPath(safaValues)}
          fill="#C9A84C"
          fillOpacity="0.15"
          stroke="#E0C268"
          strokeWidth="2.5"
          strokeDasharray="1000"
          className="polygon-safa"
        />

        {/* Axis labels */}
        {axes.map((axis, idx) => {
          const labelPoint = getPoint(idx, radius + 50);
          return (
            <text
              key={`label-${idx}`}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              fill="#C9A84C"
              fontFamily="Outfit"
              fontSize="9"
              letterSpacing="0.5"
              style={{ textTransform: "uppercase" }}
              opacity="0"
              className="axis-label"
            >
              {axis}
            </text>
          );
        })}

        {/* Legend */}
        <g>
          <rect x="50" y="520" width="16" height="16" fill="#E0C268" opacity="0.3" />
          <text
            x="75"
            y="532"
            fill="#E0C268"
            fontFamily="Outfit"
            fontSize="10"
            letterSpacing="0.5"
          >
            SA Film Academy
          </text>

          <rect x="300" y="520" width="16" height="16" fill="#8B1A1A" opacity="0.3" />
          <text
            x="325"
            y="532"
            fill="#C9A84C"
            fontFamily="Outfit"
            fontSize="10"
            letterSpacing="0.5"
          >
            Sector Baseline
          </text>
        </g>
      </svg>
    </div>
  );
}
