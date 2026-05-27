"use client";

import { useEffect, useRef, useState } from "react";

export function SkillsLevyFlow() {
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

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 300"
        className="w-full max-w-5xl"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#E0C268" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.4" />
          </linearGradient>
          <style>
            {`
              @keyframes flowAnimation {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -40px; }
              }
              .flow-animated {
                animation: ${isInView ? "flowAnimation 3s linear infinite" : "none"};
              }
            `}
          </style>
        </defs>

        {/* Input streams */}
        {/* Production company skills development spend */}
        <path
          d="M 50 80 Q 150 80 250 150"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 50 80 Q 150 80 250 150"
          fill="none"
          stroke="#E0C268"
          strokeWidth="20"
          strokeDasharray="40 40"
          className="flow-animated"
          opacity="0.8"
        />

        {/* SETA discretionary grant approval */}
        <path
          d="M 50 220 Q 150 220 250 150"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 50 220 Q 150 220 250 150"
          fill="none"
          stroke="#E0C268"
          strokeWidth="20"
          strokeDasharray="40 40"
          className="flow-animated"
          opacity="0.8"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Central evidence channel */}
        <rect
          x="250"
          y="102"
          width="500"
          height="96"
          rx="8"
          fill="#13131a"
          stroke="#C9A84C"
          strokeWidth="2"
        />
        <text
          x="500"
          y="140"
          textAnchor="middle"
          fill="#E0C268"
          fontFamily="Outfit"
          fontSize="14"
          fontWeight="700"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          SAFA Administration
        </text>
        <text
          x="500"
          y="164"
          textAnchor="middle"
          fill="#E8E0D0"
          fontFamily="Outfit"
          fontSize="10"
          opacity="0.78"
        >
          approvals · contracts · stipend schedule · audit trail
        </text>
        <text
          x="500"
          y="182"
          textAnchor="middle"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="9"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
          opacity="0.76"
        >
          evidence pack for B-BBEE skills development claims
        </text>

        {/* Output streams */}
        {/* Trainee stipends */}
        <path
          d="M 750 150 Q 850 150 950 80"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 750 150 Q 850 150 950 80"
          fill="none"
          stroke="#E0C268"
          strokeWidth="20"
          strokeDasharray="40 40"
          className="flow-animated"
          opacity="0.8"
          style={{ animationDelay: "1s" }}
        />

        {/* Production placement fees */}
        <path
          d="M 750 150 Q 850 150 950 150"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 750 150 Q 850 150 950 150"
          fill="none"
          stroke="#E0C268"
          strokeWidth="20"
          strokeDasharray="40 40"
          className="flow-animated"
          opacity="0.8"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Client evidence pack */}
        <path
          d="M 750 150 Q 850 150 950 220"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 750 150 Q 850 150 950 220"
          fill="none"
          stroke="#E0C268"
          strokeWidth="20"
          strokeDasharray="40 40"
          className="flow-animated"
          opacity="0.8"
          style={{ animationDelay: "2s" }}
        />

        {/* Input labels */}
        <text
          x="50"
          y="70"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          Production Company
        </text>
        <text
          x="50"
          y="85"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          Skills Spend
        </text>

        <text
          x="50"
          y="235"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          MICT SETA Grant
        </text>

        {/* Output labels */}
        <text
          x="950"
          y="65"
          textAnchor="end"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          Trainee
        </text>
        <text
          x="950"
          y="80"
          textAnchor="end"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          Stipends
        </text>

        <text
          x="950"
          y="160"
          textAnchor="end"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          Placement
        </text>
        <text
          x="950"
          y="174"
          textAnchor="end"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          Fees
        </text>

        <text
          x="950"
          y="235"
          textAnchor="end"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          B-BBEE
        </text>
        <text
          x="950"
          y="250"
          textAnchor="end"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          style={{ textTransform: "uppercase" }}
        >
          Evidence
        </text>

        {/* Title */}
        <text
          x="500"
          y="30"
          textAnchor="middle"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="12"
          letterSpacing="2"
          style={{ textTransform: "uppercase" }}
          opacity="0.7"
        >
          Skills Levy Financial Flow
        </text>

        <g opacity="0.86">
          {[
            { x: 305, label: "Apply annually" },
            { x: 435, label: "Approve cohort" },
            { x: 565, label: "Deploy interns" },
            { x: 695, label: "Report proof" },
          ].map((step, idx) => (
            <g key={step.label}>
              <circle cx={step.x} cy="245" r="16" fill="#13131a" stroke="#8B0000" strokeWidth="1.5" />
              <text x={step.x} y="249" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="9" fontWeight="700">
                {idx + 1}
              </text>
              <text x={step.x} y="276" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="8" opacity="0.75">
                {step.label}
              </text>
              {idx < 3 && <line x1={step.x + 18} y1="245" x2={step.x + 112} y2="245" stroke="#C9A84C" strokeWidth="1" opacity="0.28" />}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
