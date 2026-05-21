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
        className="w-full max-w-4xl"
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
        {/* Production Company Payroll */}
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

        {/* SETA Approval */}
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

        {/* Central channel */}
        <rect
          x="250"
          y="110"
          width="500"
          height="80"
          rx="8"
          fill="#13131a"
          stroke="#C9A84C"
          strokeWidth="2"
        />
        <text
          x="500"
          y="160"
          textAnchor="middle"
          fill="#E0C268"
          fontFamily="Outfit"
          fontSize="14"
          fontWeight="700"
          letterSpacing="1"
          textTransform="uppercase"
        >
          SAFA Administration
        </text>

        {/* Output streams */}
        {/* Trainee Stipends */}
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

        {/* SAFA Admin Fee */}
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

        {/* Client Rebate */}
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
          textTransform="uppercase"
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
          textTransform="uppercase"
        >
          Payroll
        </text>

        <text
          x="50"
          y="235"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          textTransform="uppercase"
        >
          SETA Approval
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
          textTransform="uppercase"
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
          textTransform="uppercase"
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
          textTransform="uppercase"
        >
          SAFA Admin Fee
        </text>

        <text
          x="950"
          y="235"
          textAnchor="end"
          fill="#C9A84C"
          fontFamily="Outfit"
          fontSize="10"
          letterSpacing="1"
          textTransform="uppercase"
        >
          Client Rebate
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
          textTransform="uppercase"
          opacity="0.7"
        >
          Skills Levy Financial Flow
        </text>
      </svg>
    </div>
  );
}
