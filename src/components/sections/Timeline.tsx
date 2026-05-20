'use client';

import type { TimelineEvent } from '@/lib/content/types';
import { Reveal } from '@/components/motion/Reveal';

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className = '' }: TimelineProps) {
  return (
    <div className={className}>
      {/* Mobile: vertical timeline */}
      <div className="block lg:hidden">
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gold" />

          {events.map((event, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative pb-12 last:pb-0">
                {/* Connector dot */}
                <div className="absolute -left-2 top-1 w-3 h-3 bg-gold rounded-full" />

                {/* Content */}
                <span className="eyebrow text-xs mb-1">
                  <span className="num">{event.quarter}</span>
                </span>

                <span className="text-xs text-muted uppercase tracking-widest mb-2 block">
                  {event.span}
                </span>

                <h3 className="font-display text-lg font-600 mb-2 text-text">
                  {event.theme}
                </h3>

                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {event.description}
                </p>

                {event.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {event.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-gold-soft mt-1 flex-shrink-0">■</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative flex pb-12">
          <div className="absolute top-0 left-0 right-0 h-px bg-gold" />

          {events.map((event, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="flex-1">
              <div className="relative pt-8 px-6">
                {/* Connector dot */}
                <div className="absolute -top-2 left-6 w-4 h-4 bg-gold rounded-full" />

                {/* Content */}
                <span className="eyebrow text-xs mb-2">
                  <span className="num">{event.quarter}</span>
                </span>

                <span className="text-xs text-muted uppercase tracking-widest mb-2 block">
                  {event.span}
                </span>

                <h3 className="font-display text-lg font-600 mb-2 text-text">
                  {event.theme}
                </h3>

                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {event.description}
                </p>

                {event.bullets.length > 0 && (
                  <ul className="space-y-1.5">
                    {event.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-gold-soft mt-0.5 flex-shrink-0">■</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
