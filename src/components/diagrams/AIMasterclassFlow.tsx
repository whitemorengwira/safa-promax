"use client";

import { SvgStage } from "@/components/visuals/SvgStage";

const columns = [
  { title: "Core Craft", items: ["cinematography", "editing", "sound", "grading"] },
  { title: "AI Tools", items: ["Veo", "Kling", "Hailuo", "Runway"] },
  { title: "Agentic Workflow", items: ["brief", "prompt", "review", "iterate"] },
  { title: "Portfolio Output", items: ["showreel", "proof pack", "placement asset", "reflective note"] },
];

export function AIMasterclassFlow() {
  return (
    <SvgStage label="Curriculum · AI Masterclass Map" aspect="wide">
      <svg viewBox="0 0 1200 520" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="aiArrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="9" markerHeight="9" orient="auto">
            <path d="M2 2 L10 6 L2 10 Z" fill="#E0C268" />
          </marker>
          <style>{`
            .ai-flow { stroke-dasharray: 18 16; animation: aiFlow 2.7s linear infinite; }
            .ai-module { animation: aiModule 4s ease-in-out infinite; transform-origin: center; }
            .ai-chip { animation: aiChip 2.6s ease-in-out infinite; }
            @keyframes aiFlow { to { stroke-dashoffset: -136; } }
            @keyframes aiModule { 50% { transform: translateY(-5px); opacity: .86; } }
            @keyframes aiChip { 50% { opacity: .55; } }
          `}</style>
        </defs>

        <text x="600" y="56" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="15" fontWeight="800" letterSpacing="4">
          PRACTICAL MASTERCLASS PATHWAY
        </text>

        {columns.map((column, columnIndex) => {
          const x = 86 + columnIndex * 278;
          return (
            <g key={column.title} className="ai-module" style={{ animationDelay: `${columnIndex * 0.22}s` }}>
              <rect x={x} y="118" width="210" height="260" rx="14" fill="#13131a" stroke="#C9A84C" strokeWidth="2" />
              <rect x={x + 18} y="142" width="174" height="44" rx="22" fill="#8B2C2C" opacity="0.48" stroke="#E0C268" strokeOpacity="0.45" />
              <text x={x + 105} y="170" textAnchor="middle" fill="#fff" fontFamily="Outfit" fontSize="15" fontWeight="900" letterSpacing="1">
                {column.title.toUpperCase()}
              </text>
              {column.items.map((item, itemIndex) => (
                <g key={item} className="ai-chip" style={{ animationDelay: `${itemIndex * 0.22 + columnIndex * 0.16}s` }}>
                  <rect x={x + 28} y={212 + itemIndex * 36} width="154" height="24" rx="12" fill="#0f0f15" stroke="#C9A84C" strokeOpacity="0.36" />
                  <text x={x + 105} y={229 + itemIndex * 36} textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="11" opacity="0.86">
                    {item}
                  </text>
                </g>
              ))}
            </g>
          );
        })}

        {[0, 1, 2].map((index) => {
          const start = 296 + index * 278;
          return (
            <path
              key={index}
              d={`M${start} 248 H${start + 68}`}
              stroke="#E0C268"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              markerEnd="url(#aiArrow)"
              className="ai-flow"
            />
          );
        })}

        <g transform="translate(226 420)">
          <rect x="0" y="0" width="748" height="56" rx="8" fill="#101017" stroke="#8B2C2C" strokeWidth="2" />
          <text x="374" y="35" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="13" fontWeight="800" letterSpacing="1.4">
            BRIEFING · CONTROLLED TOOL USE · HUMAN REVIEW · ASSESSED PORTFOLIO OUTPUT
          </text>
        </g>
      </svg>
    </SvgStage>
  );
}
