import type { Metric } from '@/lib/content/types';
import { Counter } from '@/components/motion/Counter';
import { Reveal } from '@/components/motion/Reveal';

interface StatBandProps {
  metrics: Metric[];
  className?: string;
}

export function StatBand({ metrics, className = '' }: StatBandProps) {
  return (
    <section className={`bg-surface border-y border-line-strong py-16 ${className}`}>
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, idx) => {
            // Parse figure for numeric value
            const numericMatch = metric.figure.match(/^\d+/);
            const isNumeric = numericMatch !== null;

            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="flex flex-col gap-2">
                  {metric.prefix && (
                    <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                      {metric.prefix}
                    </span>
                  )}

                  <div className="flex items-baseline gap-1">
                    {isNumeric ? (
                      <>
                        <Counter target={parseInt(numericMatch[0])} className="text-4xl lg:text-5xl font-display text-gold" />
                        {metric.suffix && (
                          <span className="text-4xl lg:text-5xl font-display text-gold-soft">{metric.suffix}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-4xl lg:text-5xl font-display text-gold">
                        {metric.figure}
                        {metric.suffix}
                      </span>
                    )}
                  </div>

                  <span className="eyebrow text-xs mt-2">{metric.label}</span>

                  <p className="text-muted text-sm leading-relaxed mt-2">{metric.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
