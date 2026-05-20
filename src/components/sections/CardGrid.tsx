import type { Card } from '@/lib/content/types';
import { Reveal } from '@/components/motion/Reveal';

interface CardGridProps {
  cards: Card[];
  cols?: 2 | 3;
  className?: string;
}

export function CardGrid({
  cards,
  cols = 3,
  className = '',
}: CardGridProps) {
  const colClass = cols === 2
    ? 'sm:grid-cols-2 lg:grid-cols-2'
    : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-6 lg:gap-8 ${className}`}>
      {cards.map((card, idx) => (
        <Reveal key={idx} delay={idx * 0.08}>
          <div className="card-premium bg-surface p-6 flex flex-col gap-3">
            {card.num && (
              <span className="eyebrow text-xs">
                <span className="num">{card.num}</span>
              </span>
            )}

            {card.tag && (
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-gold">
                {card.tag}
              </span>
            )}

            <h3 className="font-display text-lg font-600 text-text mt-1">
              {card.title}
            </h3>

            <p className="font-body text-sm text-muted leading-relaxed">
              {card.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
