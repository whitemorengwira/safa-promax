'use client';

import { SvgStage } from '@/components/visuals/SvgStage';

export function TopicCluster() {
  const primaryClusters = [
    { angle: 0, label: 'AI in Post', support: ['Veo/Kling', '2026 Hiring'] },
    { angle: 72, label: 'Sustainability', support: ['GreenSet', 'Eco-Stewards'] },
    { angle: 144, label: 'B-BBEE', support: ['Skills Levy', 'Proof Packs'] },
    { angle: 216, label: 'Talent Paths', support: ['ACE Alumni', 'Tier Movement'] },
    { angle: 288, label: 'Market Trends', support: ['Productions', 'Funding'] },
  ];

  return (
    <SvgStage label="Search · Topic Cluster" aspect="square">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Central pillar */}
        <circle cx="250" cy="250" r="45" fill="var(--gold)" opacity="0.15" stroke="var(--gold)" strokeWidth="2" />
        <text
          x="250"
          y="250"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--gold-soft)"
          fontFamily="var(--font-display)"
          fontSize="12"
          fontWeight="600"
          letterSpacing="0.04em"
        >
          SA FILM
        </text>

        {/* Primary clusters (5 nodes on r=160) */}
        {primaryClusters.map((cluster, idx) => {
          const rad = (cluster.angle * Math.PI) / 180;
          const x = 250 + 160 * Math.cos(rad);
          const y = 250 + 160 * Math.sin(rad);

          return (
            <g key={`primary-${idx}`}>
              {/* Connection line */}
              <line x1="250" y1="250" x2={x} y2={y} stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 2" />

              {/* Primary node */}
              <circle cx={x} cy={y} r="30" fill="var(--surface-2)" stroke="var(--gold)" strokeWidth="1.5" />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--gold-soft)"
                fontFamily="var(--font-body)"
                fontSize="8"
                fontWeight="600"
                letterSpacing="0.3"
              >
                {cluster.label}
              </text>

              {/* 2 supporting nodes per primary */}
              {[0, 1].map((sup) => {
                const supAngle = cluster.angle + (sup === 0 ? -20 : 20);
                const supRad = (supAngle * Math.PI) / 180;
                const sx = 250 + 240 * Math.cos(supRad);
                const sy = 250 + 240 * Math.sin(supRad);

                return (
                  <g key={`support-${idx}-${sup}`}>
                    <line x1={x} y1={y} x2={sx} y2={sy} stroke="var(--line)" strokeWidth="0.5" opacity="0.5" />
                    <circle cx={sx} cy={sy} r="16" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="0.8" opacity="0.7" />
                    <text x={sx} y={sy + 30} textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="7" opacity="0.75">
                      {cluster.support[sup]}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* Footer label */}
        <text x="250" y="480" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="9" opacity="0.7">
          TOPIC CLUSTER · KEYWORD ARCHITECTURE
        </text>
      </svg>
    </SvgStage>
  );
}
