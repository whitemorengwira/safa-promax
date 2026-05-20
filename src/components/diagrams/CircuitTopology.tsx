'use client';

import { SvgStage } from '@/components/visuals/SvgStage';

export function CircuitTopology() {
  const nodes = [
    { x: 80, label: 'Next.js 14\nApp Router' },
    { x: 250, label: 'Tailwind CSS\nVercel' },
    { x: 420, label: 'Supabase\nPostgres' },
    { x: 590, label: 'Cloudflare\nWAF' },
    { x: 760, label: 'Claude API\nAI Layer' },
  ];

  return (
    <SvgStage label="Stack · Circuit Topology" aspect="wide">
      <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Horizontal trace line */}
        <line x1="50" y1="200" x2="850" y2="200" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="5 3" className="draw" />

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <g key={idx}>
            {/* Junction dot */}
            <circle cx={node.x} cy="200" r="4" fill="var(--gold)" />

            {/* Node box */}
            <rect x={node.x - 40} y="140" width="80" height="60" fill="var(--surface-2)" stroke="var(--gold-deep)" strokeWidth="1.5" />
            <text
              x={node.x}
              y="170"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--gold-soft)"
              fontFamily="var(--font-body)"
              fontSize="9"
              fontWeight="600"
              letterSpacing="0.3"
            >
              {node.label}
            </text>

            {/* Connector to trace */}
            <line x1={node.x} y1="200" x2={node.x} y2="140" stroke="var(--line-strong)" strokeWidth="0.8" />
          </g>
        ))}

        {/* Footer labels */}
        <text x="100" y="320" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8" opacity="0.7">
          FRONTEND
        </text>
        <text x="330" y="320" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8" opacity="0.7">
          EDGE
        </text>
        <text x="510" y="320" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8" opacity="0.7">
          DATA
        </text>
        <text x="680" y="320" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8" opacity="0.7">
          SECURITY
        </text>
        <text x="800" y="320" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8" opacity="0.7">
          AI
        </text>

        {/* Title */}
        <text x="450" y="380" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="9" opacity="0.7">
          INFRASTRUCTURE STACK · PRODUCTION GRADE
        </text>
      </svg>
    </SvgStage>
  );
}
