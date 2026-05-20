'use client';

import type { Agent } from '@/lib/content/types';
import { SvgStage } from '@/components/visuals/SvgStage';

interface AgentOrbitProps {
  agents: Agent[];
  className?: string;
}

export function AgentOrbit({ agents, className = '' }: AgentOrbitProps) {
  const agentPositions = [
    { angle: 0, cx: 250, cy: 100 },     // top
    { angle: 72, cx: 380, cy: 150 },    // top-right
    { angle: 144, cx: 370, cy: 320 },   // bottom-right
    { angle: 216, cx: 130, cy: 320 },   // bottom-left
    { angle: 288, cx: 120, cy: 150 },   // top-left
  ];

  return (
    <SvgStage label="Agents · Orbital System" aspect="square" className={className}>
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Orbital ring */}
        <circle cx="250" cy="250" r="140" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Connecting lines from center to agents */}
        {agentPositions.map((pos, idx) => (
          <line
            key={`line-${idx}`}
            x1="250"
            y1="250"
            x2={pos.cx}
            y2={pos.cy}
            stroke="var(--line-strong)"
            strokeWidth="1"
            strokeDasharray="5 3"
            className="draw"
          />
        ))}

        {/* Central SAFA core */}
        <circle cx="250" cy="250" r="35" fill="var(--surface)" stroke="var(--gold)" strokeWidth="2" />
        <circle cx="250" cy="250" r="25" fill="var(--gold-soft)" fillOpacity="0.2" />
        <text
          x="250"
          y="250"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--gold)"
          fontFamily="var(--font-display)"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.05em"
        >
          SAFA
        </text>

        {/* Agent orbit nodes */}
        {agents.map((agent, idx) => {
          const pos = agentPositions[idx];
          const delaySeconds = idx * 0.4;

          return (
            <g key={`agent-${idx}`} style={{ animationDelay: `${delaySeconds}s` }}>
              {/* Orbit node circle */}
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r="24"
                fill="var(--surface-2)"
                stroke="var(--gold)"
                strokeWidth="1.5"
              />

              {/* Pulse effect */}
              <circle
                cx={pos.cx}
                cy={pos.cy}
                r="24"
                fill="none"
                stroke="var(--gold-soft)"
                strokeWidth="0.5"
                opacity="0.3"
                style={{
                  animation: `pulse-scale 2.5s ease-out infinite`,
                  animationDelay: `${delaySeconds}s`,
                }}
              />

              {/* Agent label */}
              <text
                x={pos.cx}
                y={pos.cy - 4}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--gold-soft)"
                fontFamily="var(--font-body)"
                fontSize="9"
                fontWeight="600"
                letterSpacing="0.04em"
              >
                {agent.tag.split('·')[0].trim()}
              </text>

              <text
                x={pos.cx}
                y={pos.cy + 6}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--muted)"
                fontFamily="var(--font-body)"
                fontSize="7"
                letterSpacing="0.03em"
              >
                {agent.tag.split('·')[1]?.trim() || ''}
              </text>
            </g>
          );
        })}

        {/* Footer label */}
        <text
          x="250"
          y="480"
          textAnchor="middle"
          fill="var(--muted)"
          fontFamily="var(--font-body)"
          fontSize="9"
          opacity="0.7"
        >
          Five Autonomous Agents
        </text>
      </svg>
    </SvgStage>
  );
}
