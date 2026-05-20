'use client';

import { SvgStage } from '@/components/visuals/SvgStage';

export function PositioningRadar() {
  const axes = [
    { angle: 0, label: 'SETA Fluency' },
    { angle: 60, label: 'B-BBEE Mechanics' },
    { angle: 120, label: 'Commercial Context' },
    { angle: 180, label: 'Career Pathway' },
    { angle: 240, label: 'Digital Infra' },
    { angle: 300, label: 'Agentic AI' },
  ];

  return (
    <SvgStage label="Positioning · Radar" aspect="square">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Concentric rings */}
        {[1, 2, 3, 4, 5].map((ring) => (
          <circle
            key={`ring-${ring}`}
            cx="250"
            cy="250"
            r={40 * ring}
            fill="none"
            stroke="var(--line)"
            strokeWidth="0.5"
            opacity={0.3 - ring * 0.05}
          />
        ))}

        {/* Axis lines */}
        {axes.map((axis, idx) => {
          const rad = (axis.angle * Math.PI) / 180;
          const x = 250 + 200 * Math.cos(rad);
          const y = 250 + 200 * Math.sin(rad);

          return (
            <g key={`axis-${idx}`}>
              <line x1="250" y1="250" x2={x} y2={y} stroke="var(--line)" strokeWidth="0.8" opacity="0.4" />
              <text
                x={250 + 220 * Math.cos(rad)}
                y={250 + 220 * Math.sin(rad)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--text)"
                fontFamily="var(--font-body)"
                fontSize="8"
                opacity="0.8"
              >
                {axis.label}
              </text>
            </g>
          );
        })}

        {/* Baseline polygon (muted) */}
        <polygon
          points={axes
            .map((axis) => {
              const rad = (axis.angle * Math.PI) / 180;
              const x = 250 + 120 * Math.cos(rad);
              const y = 250 + 120 * Math.sin(rad);
              return `${x},${y}`;
            })
            .join(' ')}
          fill="none"
          stroke="var(--muted)"
          strokeWidth="1"
          opacity="0.5"
          strokeDasharray="2 2"
        />

        {/* SAFA position polygon (gold) */}
        <polygon
          points={axes
            .map((axis) => {
              const rad = (axis.angle * Math.PI) / 180;
              const x = 250 + 170 * Math.cos(rad);
              const y = 250 + 170 * Math.sin(rad);
              return `${x},${y}`;
            })
            .join(' ')}
          fill="var(--gold)"
          fillOpacity="0.15"
          stroke="var(--gold)"
          strokeWidth="1.5"
        />

        {/* Center dot */}
        <circle cx="250" cy="250" r="3" fill="var(--gold)" />

        {/* Legend */}
        <g>
          <line x1="60" y1="440" x2="80" y2="440" stroke="var(--muted)" strokeWidth="1" strokeDasharray="2 2" />
          <text x="90" y="440" dominantBaseline="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8">
            Baseline
          </text>

          <line x1="170" y1="440" x2="190" y2="440" stroke="var(--gold)" strokeWidth="1.5" />
          <text x="200" y="440" dominantBaseline="middle" fill="var(--gold)" fontFamily="var(--font-body)" fontSize="8">
            SAFA Position
          </text>
        </g>
      </svg>
    </SvgStage>
  );
}
