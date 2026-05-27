"use client";

import { SvgStage } from "@/components/visuals/SvgStage";

const label = {
  fill: "#E0C268",
  fontFamily: "Outfit",
  fontSize: 18,
  fontWeight: 800,
  letterSpacing: 0.8,
};
const small = {
  fill: "#E8E0D0",
  fontFamily: "Outfit",
  fontSize: 11,
  opacity: 0.72,
};

function Device({ type, x, y }: { type: "desktop" | "phone" | "browser"; x: number; y: number }) {
  if (type === "phone") {
    return (
      <g transform={`translate(${x} ${y})`}>
        <rect x="0" y="0" width="72" height="126" rx="12" fill="#0b0b10" stroke="#C9A84C" strokeWidth="2" />
        <rect x="9" y="14" width="54" height="92" rx="5" fill="#191923" stroke="#C9A84C" strokeOpacity="0.35" />
        <circle cx="36" cy="116" r="4" fill="#C9A84C" opacity="0.8" />
        <text x="36" y="152" textAnchor="middle" {...label} fontSize={13}>PHONE</text>
      </g>
    );
  }

  if (type === "browser") {
    return (
      <g transform={`translate(${x} ${y})`}>
        <rect x="0" y="0" width="140" height="92" rx="10" fill="#0b0b10" stroke="#C9A84C" strokeWidth="2" />
        <rect x="0" y="0" width="140" height="22" rx="10" fill="#24161a" stroke="#C9A84C" strokeOpacity="0.35" />
        <circle cx="16" cy="11" r="3" fill="#8B2C2C" />
        <circle cx="28" cy="11" r="3" fill="#C9A84C" />
        <circle cx="40" cy="11" r="3" fill="#E0C268" />
        <path d="M18 50 H122 M18 68 H92" stroke="#C9A84C" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
        <text x="70" y="122" textAnchor="middle" {...label} fontSize={13}>BROWSER</text>
      </g>
    );
  }

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="180" height="112" rx="10" fill="#0b0b10" stroke="#C9A84C" strokeWidth="2" />
      <rect x="15" y="14" width="150" height="76" rx="4" fill="#191923" stroke="#C9A84C" strokeOpacity="0.35" />
      <path d="M45 100 H135 L150 126 H30 Z" fill="#101017" stroke="#C9A84C" strokeOpacity="0.55" />
      <path d="M34 42 H146 M34 62 H112 M34 78 H134" stroke="#C9A84C" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
      <text x="90" y="152" textAnchor="middle" {...label} fontSize={13}>DESKTOP</text>
    </g>
  );
}

function Node({ x, y, title, sub }: { x: number; y: number; title: string; sub: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="158" height="72" rx="8" fill="#13131a" stroke="#C9A84C" strokeWidth="2" />
      <text x="79" y="30" textAnchor="middle" {...label}>{title}</text>
      <text x="79" y="52" textAnchor="middle" {...small}>{sub}</text>
    </g>
  );
}

export function TechStackSimulation() {
  return (
    <SvgStage label="Stack · Front End + Back End" aspect="wide">
      <svg viewBox="0 0 1200 560" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="stackLine" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#8B2C2C" />
            <stop offset="45%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E0C268" />
          </linearGradient>
          <filter id="stackGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <style>{`
            .stack-flow { stroke-dasharray: 14 16; animation: stackFlow 2.8s linear infinite; }
            .stack-pulse { animation: stackPulse 2.4s ease-in-out infinite; }
            @keyframes stackFlow { to { stroke-dashoffset: -90; } }
            @keyframes stackPulse { 50% { opacity: .52; transform: translateY(-3px); } }
          `}</style>
        </defs>

        <text x="600" y="58" textAnchor="middle" fill="#C9A84C" fontFamily="Outfit" fontSize="15" fontWeight="800" letterSpacing="4">
          LIVE DIGITAL INFRASTRUCTURE
        </text>

        <g opacity="0.35" stroke="#C9A84C" strokeDasharray="7 8">
          <rect x="44" y="90" width="1112" height="382" fill="none" />
          <line x1="44" y1="274" x2="1156" y2="274" />
        </g>

        <Device type="browser" x={72} y={150} />
        <Device type="desktop" x={236} y={134} />
        <Device type="phone" x={458} y={128} />

        <path d="M214 196 H235 M416 196 H456 M548 196 H650" stroke="url(#stackLine)" strokeWidth="4" className="stack-flow" fill="none" />
        <path d="M185 310 C295 384 470 385 650 386" stroke="url(#stackLine)" strokeWidth="3" className="stack-flow" fill="none" opacity="0.85" />

        <Node x={650} y={150} title="NEXT.JS 16" sub="App Router + RSC" />
        <Node x={650} y={340} title="ADMIN CMS" sub="text + image edits" />
        <Node x={850} y={150} title="VERCEL" sub="edge hosting" />
        <Node x={850} y={340} title="SUPABASE" sub="database + storage" />
        <Node x={1030} y={150} title="CLOUDFLARE" sub="WAF + DNS + CDN" />
        <Node x={1030} y={340} title="API AGENTS" sub="matching + reports" />

        <g stroke="url(#stackLine)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M808 186 H850" className="stack-flow" />
          <path d="M808 376 H850" className="stack-flow" />
          <path d="M1008 186 H1030" className="stack-flow" />
          <path d="M1008 376 H1030" className="stack-flow" />
          <path d="M929 222 V340" className="stack-flow" />
          <path d="M1109 222 V340" className="stack-flow" />
        </g>

        {[210, 420, 640, 820, 1010].map((x, index) => (
          <circle key={x} cx={x} cy={498} r="5" fill="#E0C268" filter="url(#stackGlow)" className="stack-pulse" style={{ animationDelay: `${index * 0.25}s` }} />
        ))}
        <text x="600" y="505" textAnchor="middle" fill="#E8E0D0" fontFamily="Outfit" fontSize="13" opacity="0.75">
          POPIA-grade boundary · authenticated profiles · public pages · admin publishing · agentic matching
        </text>
      </svg>
    </SvgStage>
  );
}
