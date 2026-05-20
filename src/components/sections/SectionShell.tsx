import { ReactNode } from 'react';
import { WordReveal } from '@/components/motion/WordReveal';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';

interface SectionShellProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  titleTag?: 'h1' | 'h2';
  showDivider?: boolean;
  children?: ReactNode;
  className?: string;
}

export function SectionShell({
  eyebrow,
  title,
  subtitle,
  titleTag = 'h2',
  showDivider = true,
  children,
  className = '',
}: SectionShellProps) {
  const TitleTag = titleTag as any;

  return (
    <>
      <section className={`section-padding ${className}`}>
        <div className="container-max">
          <span className="eyebrow">
            <span className="num">{eyebrow}</span>
          </span>

          <WordReveal tag={titleTag} text={title} className="mt-6 mb-6" />

          {subtitle && (
            <Reveal className="mb-8">
              <p className="font-display-alt italic text-gold-soft max-w-60ch text-xl leading-relaxed">
                {subtitle}
              </p>
            </Reveal>
          )}

          {children}
        </div>
      </section>

      {showDivider && <FilmstripDivider />}
    </>
  );
}
