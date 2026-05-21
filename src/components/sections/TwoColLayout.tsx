import { ReactNode } from 'react';

interface TwoColLayoutProps {
  left: ReactNode;
  right: ReactNode;
  flip?: boolean;
  gap?: 'default' | 'wide';
  className?: string;
  visualRatio?: '50-50' | '70-30' | '30-70';
}

export function TwoColLayout({
  left,
  right,
  flip = false,
  gap = 'default',
  className = '',
  visualRatio = '50-50',
}: TwoColLayoutProps) {
  const gapClass = gap === 'wide' ? 'gap-16 lg:gap-24' : 'gap-12 lg:gap-20';
  const ratioClass =
    visualRatio === '70-30' ? 'lg:grid-cols-10' :
    visualRatio === '30-70' ? 'lg:grid-cols-10' :
    'lg:grid-cols-2';

  return (
    <div className={`grid grid-cols-1 ${ratioClass} ${gapClass} items-start ${className}`}>
      <div className={`${
        visualRatio === '70-30' ? 'lg:col-span-3' :
        visualRatio === '30-70' ? 'lg:col-span-7' :
        ''
      } ${flip ? 'lg:order-last' : ''}`}>
        {left}
      </div>

      <div className={`${
        visualRatio === '70-30' ? 'lg:col-span-7' :
        visualRatio === '30-70' ? 'lg:col-span-3' :
        ''
      } ${flip ? 'lg:order-first' : ''}`}>
        {right}
      </div>
    </div>
  );
}
