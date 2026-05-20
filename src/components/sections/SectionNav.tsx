import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SectionNavProps {
  prev?: {
    slug: string;
    label: string;
  };
  next?: {
    slug: string;
    label: string;
  };
  className?: string;
}

export function SectionNav({
  prev,
  next,
  className = '',
}: SectionNavProps) {
  return (
    <nav className={`bg-surface border-t border-line-strong py-12 ${className}`}>
      <div className="container-max flex flex-col sm:flex-row justify-between items-center gap-8">
        {prev ? (
          <Link
            href={`/strategy/${prev.slug}`}
            className="link-premium flex items-center gap-3 text-gold hover:text-gold-soft transition font-body text-xs font-semibold tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            <span>Previous: {prev.label}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/strategy/${next.slug}`}
            className="link-premium flex items-center gap-3 text-gold hover:text-gold-soft transition font-body text-xs font-semibold tracking-widest uppercase"
          >
            <span>Next: {next.label}</span>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
