"use client";

import { SvgStage } from "@/components/visuals/SvgStage";

const nodes = [
  { label: "Suzuki", x: 200, y: 170, note: "mobility partner" },
  { label: "Netflix", x: 1000, y: 170, note: "streaming pathway" },
  { label: "NFVF", x: 1000, y: 382, note: "public mandate" },
  { label: "PR", x: 200, y: 382, note: "industry voice" },
  { label: "Broadcasters", x: 600, y: 86, note: "screen access" },
  { label: "Productions", x: 600, y: 466, note: "placement demand" },
];

export function BroadcastCoreMap() {
  return (
    <SvgStage label="Partnerships · Broadcast Core" aspect="wide">
      <svg viewBox="0 0 1200 560" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{`
            .broadcast-ring { transform-origin: 600px 276px; animation: broadcastRing 5s ease-in-out infinite; }
            .broadcast-ring:nth-of-type(2) { animation-delay: .7s; }
            .broadcast-ring:nth-of-type(3) { animation-delay: 1.4s; }
            .broadcast-link { stroke-dasharray: 18 16; animation: broadcastFlow 2.8s linear infinite; }
            .broadcast-node { animation: broadcastNode 3.4s ease-in-out infinite; transform-origin: center; }
            @keyframes broadcastRing { 50% { transform: scale(1.06); opacity: .26; } }
            @keyframes broadcastFlow { to { stroke-dashoffset: -136; } }
            @keyframes broadcastNode { 50% { transform: translateY(-4px); opacity: .86; } }
          `}</style>
        </defs>

        <text x="600" y="54" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="15" fontWeight="800" letterSpacing="4">
          THE BROADCAST CORE
        </text>

        <g fill="none" stroke="#C9A84C" strokeWidth="2">
          <ellipse className="broadcast-ring" cx="600" cy="276" rx="170" ry="92" opacity="0.35" />
          <ellipse className="broadcast-ring" cx="600" cy="276" rx="268" ry="150" opacity="0.22" />
          <ellipse className="broadcast-ring" cx="600" cy="276" rx="384" ry="214" opacity="0.14" />
        </g>

        {nodes.map((node) => (
          <path
            key={`${node.label}-link`}
            d={`M600 276 L${node.x} ${node.y}`}
            stroke="#E0C268"
            strokeWidth="3"
            fill="none"
            opacity="0.78"
            className="broadcast-link"
          />
        ))}

        <g>
          <circle cx="600" cy="276" r="82" fill="#13131a" stroke="#E0C268" strokeWidth="3" />
          <text x="600" y="266" textAnchor="middle" fill="#fff" fontFamily="Outfit" fontSize="18" fontWeight="900" letterSpacing="1">
            SAFA
          </text>
          <text x="600" y="292" textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="14" fontWeight="800">
            PARTNER SIGNAL
          </text>
          <text x="600" y="316" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="11" opacity="0.7">
            visibility · credibility · demand
          </text>
        </g>

        {nodes.map((node, index) => (
          <g key={node.label} className="broadcast-node" style={{ animationDelay: `${index * 0.16}s` }}>
            <rect x={node.x - 76} y={node.y - 38} width="152" height="76" rx="12" fill="#13131a" stroke="#C9A84C" strokeWidth="2" />
            <text x={node.x} y={node.y - 4} textAnchor="middle" fill="#E0C268" fontFamily="Outfit" fontSize="16" fontWeight="900" letterSpacing="0.8">
              {node.label.toUpperCase()}
            </text>
            <text x={node.x} y={node.y + 20} textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="10" opacity="0.72">
              {node.note}
            </text>
          </g>
        ))}
      </svg>
    </SvgStage>
  );
}
