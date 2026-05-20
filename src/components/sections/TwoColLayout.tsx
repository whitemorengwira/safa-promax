import { ReactNode } from 'react';

interface TwoColLayoutProps {
  left: ReactNode;
  right: ReactNode;
  flip?: boolean;
  gap?: 'default' | 'wide';
  className?: string;
}

export function TwoColLayout({
  left,
  right,
  flip = false,
  gap = 'default',
  className = '',
}: TwoColLayoutProps) {
  const gapClass = gap === 'wide' ? 'gap-16 lg:gap-24' : 'gap-12 lg:gap-20';

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${gapClass} items-start ${className}`}>
      <div className={flip ? 'lg:order-last' : ''}>
        {left}
      </div>

      <div className={flip ? 'lg:order-first' : ''}>
        {right}
      </div>
    </div>
  );
}
