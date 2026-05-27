"use client";

import { SvgStage } from "@/components/visuals/SvgStage";

const events = [
  { day: "1 Jun", x: 92, title: "Launch", detail: "Strategy rhythm starts" },
  { day: "Week 1", x: 252, title: "SEO + voice", detail: "8 posts commissioned" },
  { day: "Week 2", x: 412, title: "50 profiles", detail: "trainees verified" },
  { day: "Week 3", x: 572, title: "5 employers", detail: "accounts live" },
  { day: "Week 4", x: 732, title: "Partners", detail: "GreenSet + voice activation" },
  { day: "30 Jun", x: 916, title: "First placement", detail: "proof of model" },
];

const tracks = [
  ["Portal", "profiles · employers · first match"],
  ["Visibility", "8 SEO posts · report · voice"],
  ["Partnerships", "GreenSet · outreach · activation"],
];

export function ImplementationTimelineSimulation() {
  return (
    <SvgStage label="Delivery · 30-Day Simulation" aspect="wide">
      <svg viewBox="0 0 1200 560" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="timelineArrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="9" markerHeight="9" orient="auto">
            <path d="M2 2 L10 6 L2 10 Z" fill="#E0C268" />
          </marker>
          <style>{`
            .timeline-flow { stroke-dasharray: 18 18; animation: timelineFlow 2.7s linear infinite; }
            .timeline-event { animation: timelineEvent 4.8s ease-in-out infinite; transform-origin: center; }
            .timeline-scan { animation: timelineScan 5.5s ease-in-out infinite; }
            @keyframes timelineFlow { to { stroke-dashoffset: -144; } }
            @keyframes timelineEvent { 50% { transform: translateY(-5px); opacity: .84; } }
            @keyframes timelineScan { 0%, 100% { transform: translateX(0); opacity: .12; } 50% { transform: translateX(905px); opacity: .75; } }
          `}</style>
        </defs>

        <text x="600" y="58" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="15" fontWeight="800" letterSpacing="4">
          1 JUNE 2026 TO 30 JUNE 2026
        </text>
        <text x="600" y="86" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="13" opacity="0.7">
          one launch month, three workstreams, measurable proof by month end
        </text>

        <path d="M100 250 H1085" stroke="#4b3f20" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M100 250 H1085" stroke="#E0C268" strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#timelineArrow)" className="timeline-flow" />
        <rect x="92" y="222" width="12" height="56" fill="#E0C268" className="timeline-scan" />

        {events.map((event, index) => (
          <g key={event.title} className="timeline-event" style={{ animationDelay: `${index * 0.18}s` }}>
            <line x1={event.x + 8} y1="250" x2={event.x + 8} y2={index % 2 === 0 ? 154 : 346} stroke="#C9A84C" strokeWidth="1.4" opacity="0.55" />
            <circle cx={event.x + 8} cy="250" r="13" fill="#8B2C2C" stroke="#E0C268" strokeWidth="2" />
            <rect x={event.x - 54} y={index % 2 === 0 ? 106 : 346} width="124" height="88" rx="10" fill="#13131a" stroke="#C9A84C" strokeWidth="2" />
            <text x={event.x + 8} y={index % 2 === 0 ? 132 : 372} textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="11" fontWeight="900" letterSpacing="1">
              {event.day.toUpperCase()}
            </text>
            <text x={event.x + 8} y={index % 2 === 0 ? 156 : 396} textAnchor="middle" fill="#fff" fontFamily="Outfit" fontSize="13" fontWeight="900">
              {event.title}
            </text>
            <text x={event.x + 8} y={index % 2 === 0 ? 176 : 416} textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="10" opacity="0.72">
              {event.detail}
            </text>
          </g>
        ))}

        <g transform="translate(118 448)">
          {tracks.map(([title, detail], index) => (
            <g key={title} transform={`translate(${index * 326} 0)`}>
              <rect x="0" y="0" width="292" height="60" rx="8" fill="#101017" stroke="#8B2C2C" strokeWidth="1.6" />
              <text x="18" y="24" fill="#E0C268" fontFamily="Outfit" fontSize="12" fontWeight="900" letterSpacing="1">
                {title.toUpperCase()}
              </text>
              <text x="18" y="44" fill="#E8E0D0" fontFamily="Outfit" fontSize="10" opacity="0.72">
                {detail}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </SvgStage>
  );
}
