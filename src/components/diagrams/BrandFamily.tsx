'use client';

import { SvgStage } from '@/components/visuals/SvgStage';

export function BrandFamily() {
  return (
    <SvgStage label="Brand Architecture · Family" aspect="wide">
      <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Master brand on left */}
        <g>
          <rect x="80" y="130" width="160" height="140" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" strokeWidth="2" />
          <rect x="80" y="130" width="160" height="10" fill="var(--gold)" />
          <text
            x="160"
            y="185"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--gold-soft)"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="600"
          >
            SA FILM
          </text>
          <text
            x="160"
            y="210"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--gold-soft)"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="600"
          >
            ACADEMY
          </text>
          <text x="160" y="245" textAnchor="middle" dominantBaseline="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="8">
            MASTER BRAND
          </text>
        </g>

        {/* Arrow */}
        <g>
          <line x1="270" y1="200" x2="340" y2="200" stroke="var(--gold)" strokeWidth="2" />
          <polygon points="350,200 340,195 340,205" fill="var(--gold)" />
        </g>

        {/* Four sub-brands on right (column) */}
        {[
          { y: 110, label: 'ACE', sub: 'Alumni' },
          { y: 180, label: 'FILMGRO', sub: 'Driving' },
          { y: 250, label: 'GreenSet', sub: 'Sustainability' },
          { y: 320, label: 'Cineterns', sub: 'Portal' },
        ].map((brand, idx) => (
          <g key={idx}>
            {/* Gold accent bar on left */}
            <rect x="360" y={brand.y} width="4" height="60" fill="var(--gold)" opacity="0.6" />

            {/* Brand box */}
            <rect x="375" y={brand.y} width="160" height="60" fill="var(--surface)" stroke="var(--gold-deep)" strokeWidth="1" opacity="0.8" />
            <text
              x="455"
              y={brand.y + 20}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--gold-soft)"
              fontFamily="var(--font-body)"
              fontSize="11"
              fontWeight="600"
              letterSpacing="0.5"
            >
              {brand.label}
            </text>
            <text
              x="455"
              y={brand.y + 40}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--muted)"
              fontFamily="var(--font-body)"
              fontSize="8"
            >
              {brand.sub}
            </text>
          </g>
        ))}

        {/* Footer label */}
        <text x="450" y="380" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="9" opacity="0.7">
          BRANDED HOUSE MODEL · ONE FAMILY
        </text>
      </svg>
    </SvgStage>
  );
}
