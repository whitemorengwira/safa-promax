"use client";

import { SvgStage } from "@/components/visuals/SvgStage";

const stages = [
  ["MICT SETA", "cohort", "approved seats"],
  ["Verified", "profile", "skills + portfolio"],
  ["SA Film", "Interns", "live database"],
  ["Weighted", "match", "role + location"],
  ["Production", "brief", "dates + tier"],
  ["Placement", "pack", "intro + audit"],
];

export function PlacementPipelineFlow() {
  return (
    <SvgStage label="Placement · Animated Pipeline" aspect="wide">
      <svg viewBox="0 0 1200 500" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="pipelineArrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="10" markerHeight="10" orient="auto">
            <path d="M2 2 L10 6 L2 10 Z" fill="#E0C268" />
          </marker>
          <style>{`
            .pipe-flow { stroke-dasharray: 22 16; animation: pipeFlow 2.4s linear infinite; }
            .pipe-card { animation: pipeCard 5s ease-in-out infinite; transform-origin: center; }
            .approval-scan { animation: approvalScan 3.2s ease-in-out infinite; }
            @keyframes pipeFlow { to { stroke-dashoffset: -152; } }
            @keyframes pipeCard { 50% { opacity: .78; transform: translateY(-5px); } }
            @keyframes approvalScan { 0%, 100% { transform: translateX(0); opacity: .15; } 50% { transform: translateX(128px); opacity: .9; } }
          `}</style>
        </defs>

        <text x="600" y="56" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="15" fontWeight="800" letterSpacing="4">
          FROM TRAINING SEAT TO DOCUMENTED PLACEMENT
        </text>

        <path d="M120 226 H1078" stroke="#4b3f20" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M120 226 H1078" stroke="#E0C268" strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#pipelineArrow)" className="pipe-flow" />

        {stages.map(([a, b, c], index) => {
          const x = 84 + index * 184;
          return (
            <g key={`${a}-${b}`} className="pipe-card" style={{ animationDelay: `${index * 0.18}s` }}>
              <rect x={x} y="140" width="138" height="146" rx="12" fill="#13131a" stroke="#C9A84C" strokeWidth="2" />
              <circle cx={x + 69} cy="140" r="13" fill="#8B2C2C" stroke="#E0C268" strokeWidth="2" />
              <text x={x + 69} y="145" textAnchor="middle" fill="#fff" fontFamily="Outfit" fontSize="11" fontWeight="900">
                {index + 1}
              </text>
              <text x={x + 69} y="190" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="16" fontWeight="900" letterSpacing="0.8">
                {a}
              </text>
              <text x={x + 69} y="212" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="16" fontWeight="900" letterSpacing="0.8">
                {b}
              </text>
              <text x={x + 69} y="252" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="11" opacity="0.72">
                {c}
              </text>
            </g>
          );
        })}

        <g transform="translate(202 342)">
          <rect x="0" y="0" width="796" height="76" rx="8" fill="#101017" stroke="#8B2C2C" strokeWidth="2" />
          {["12-month stipend", "availability status", "ranked shortlist", "human approval", "documented handoff"].map((item, index) => (
            <g key={item}>
              <text x={88 + index * 155} y="45" textAnchor="middle" fill={index === 3 ? "#fff" : "#C9A84C"} fontFamily="Outfit" fontSize="11" fontWeight="800" letterSpacing="1">
                {item.toUpperCase()}
              </text>
              {index === 3 && <rect x={555} y="17" width="124" height="40" rx="20" fill="#8B2C2C" opacity="0.45" />}
            </g>
          ))}
          <rect x="552" y="15" width="10" height="44" fill="#E0C268" className="approval-scan" opacity="0.8" />
        </g>

        <text x="600" y="462" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="12" opacity="0.72">
          Agentic matching accelerates the shortlist; people still approve the placement before handoff.
        </text>
      </svg>
    </SvgStage>
  );
}
