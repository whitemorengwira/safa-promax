'use client';

import { SvgStage } from '@/components/visuals/SvgStage';
import { motion } from 'framer-motion';

export function EcosystemMap() {
  return (
    <SvgStage label="Architecture · Site Plan" aspect="wide">
      <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background grid */}
        <defs>
          <pattern id="gridEco" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="var(--line)" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#gridEco)" />

        {/* Central SAFA entity */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect x="400" y="150" width="200" height="140" fill="var(--surface-2)" stroke="var(--gold)" strokeWidth="2" />
          <rect x="400" y="150" width="200" height="8" fill="var(--gold)" />
          <text x="500" y="210" textAnchor="middle" dominantBaseline="middle" fill="var(--gold)" fontFamily="var(--font-display)" fontSize="20" fontWeight="600">
            SA FILM
          </text>
          <text x="500" y="235" textAnchor="middle" dominantBaseline="middle" fill="var(--gold)" fontFamily="var(--font-display)" fontSize="20" fontWeight="600">
            ACADEMY
          </text>
          <text x="500" y="265" textAnchor="middle" dominantBaseline="middle" fill="var(--text)" opacity="0.6" fontFamily="var(--font-body)" fontSize="9" letterSpacing="1">
            MASTER BRAND · MICT SETA
          </text>
          <text x="500" y="282" textAnchor="middle" dominantBaseline="middle" fill="var(--gold-soft)" opacity="0.72" fontFamily="var(--font-body)" fontSize="8" letterSpacing="0.8">
            3000+ TRAINEES · 500+ PRODUCTIONS · 96% BLACK STUDENT BASE
          </text>
        </motion.g>

        {/* Four programme entities radiating below */}
        {[
          { x: 150, label: 'ACE', desc: 'Alumni advancement' },
          { x: 350, label: 'FILMGRO', desc: 'Driving academy' },
          { x: 650, label: 'GreenSet', desc: 'Sustainable sets' },
          { x: 850, label: 'SA Film Interns', desc: 'Placement portal' },
        ].map((entity, idx) => (
          <motion.g 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Connection line */}
            <motion.line 
              x1="500" y1="290" x2={entity.x} y2="350" 
              stroke="var(--gold)" strokeWidth="1.5" opacity="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
            />

            {/* Entity box */}
            <rect
              x={entity.x - 70}
              y="350"
              width="140"
              height="100"
              fill="var(--surface)"
              stroke="var(--gold)"
              strokeWidth="1.5"
              opacity="0.8"
            />
            <text
              x={entity.x}
              y="385"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--gold-soft)"
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="600"
            >
              {entity.label}
            </text>
            <text
              x={entity.x}
              y="410"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--muted)"
              fontFamily="var(--font-body)"
              fontSize="8"
              letterSpacing="0.5"
            >
              {entity.desc}
            </text>
          </motion.g>
        ))}

        {/* Footer label */}
        <text x="500" y="480" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-body)" fontSize="9" opacity="0.7">
          ECOSYSTEM ARCHITECTURE · ONE FAMILY
        </text>
      </svg>
    </SvgStage>
  );
}
