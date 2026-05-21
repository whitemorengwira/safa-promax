"use client";

import { useEffect, useRef, useState } from "react";

export function CineternsPlacementFlow() {
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

  const nodes = [
    { x: 100, label: "SETA\nApproval" },
    { x: 250, label: "Trainee\nProfile" },
    { x: 400, label: "Cineterns\nPortal" },
    { x: 550, label: "Agentic\nMatch" },
    { x: 700, label: "Production\nCompany" },
    { x: 850, label: "Active\nPlacement" },
  ];

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 950 300"
        className="w-full max-w-4xl"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>
            {`
              @keyframes arrowFlow {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -20px; }
              }
              @keyframes nodePulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.6; }
              }
              .arrow-animated {
                animation: ${isInView ? "arrowFlow 2s linear infinite" : "none"};
              }
              .node-pulse {
                animation: ${isInView ? "nodePulse 2s ease-in-out infinite" : "none"};
              }
            `}
          </style>
        </defs>

        {/* Connection lines and animated arrows */}
        {nodes.map((node, idx) => {
          if (idx < nodes.length - 1) {
            const nextNode = nodes[idx + 1];
            return (
              <g key={`connection-${idx}`}>
                {/* Static line */}
                <line
                  x1={node.x}
                  y1="150"
                  x2={nextNode.x}
                  y2="150"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  opacity="0.3"
                />
                {/* Animated arrow */}
                <line
                  x1={node.x}
                  y1="150"
                  x2={nextNode.x}
                  y2="150"
                  stroke="#E0C268"
                  strokeWidth="2"
                  strokeDasharray="20 10"
                  className="arrow-animated"
                />
                {/* Arrow head */}
                <polygon
                  points={`${nextNode.x - 8},145 ${nextNode.x},150 ${nextNode.x - 8},155`}
                  fill="#E0C268"
                  opacity={isInView ? 1 : 0.3}
                />
              </g>
            );
          }
          return null;
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <g key={`node-${idx}`}>
            {/* Node background */}
            <rect
              x={node.x - 40}
              y="110"
              width="80"
              height="80"
              rx="8"
              fill="#13131a"
              stroke="#C9A84C"
              strokeWidth="2"
              opacity={isInView ? 1 : 0.5}
              className="node-pulse"
            />
            {/* Node label */}
            <text
              x={node.x}
              y="155"
              textAnchor="middle"
              fill="#E0C268"
              fontFamily="Outfit"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.5"
              textTransform="uppercase"
            >
              {node.label.split("\n").map((line, i) => (
                <tspan key={i} x={node.x} dy={i === 0 ? 0 : 14}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}

        {/* Title */}
        <text
          x="475"
          y="30"
          textAnchor="middle"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="12"
          letterSpacing="2"
          textTransform="uppercase"
          opacity="0.7"
        >
          Placement Pipeline
        </text>
      </svg>
    </div>
  );
}
