'use client';

import { useState } from 'react';
import Link from 'next/link';
import { corePillars } from '@/data/nav';

export default function MegaNav() {
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Mega Navbar */}
      <nav className="hidden lg:flex items-center gap-1 px-2 ml-auto">
        {corePillars.map((pillar) => (
          <div
            key={pillar.slug}
            className="relative group"
            onMouseEnter={() => setActivePillar(pillar.slug)}
            onMouseLeave={() => setActivePillar(null)}
          >
            {/* Pillar Trigger */}
            <button
              className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-red hover:text-red-soft transition-colors duration-300 relative group/trigger border border-red/30 hover:border-red/60 rounded-md"
              onClick={() => setActivePillar(activePillar === pillar.slug ? null : pillar.slug)}
            >
              {pillar.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red group-hover/trigger:w-full transition-all duration-300" />
            </button>

            {/* Mega Dropdown Panel */}
            <div
              className={`absolute top-full left-0 w-screen max-w-5xl bg-white border-t-4 border-red shadow-lg transform transition-all duration-300 origin-top ${
                activePillar === pillar.slug
                  ? 'opacity-100 visible scale-y-100 translate-y-0'
                  : 'opacity-0 invisible scale-y-95 -translate-y-2'
              }`}
            >
              <div className="p-8">
                {/* Pillar Header */}
                <div className="mb-6 pb-6 border-b border-red/20">
                  <h3 className="text-2xl font-bold text-red mb-2">{pillar.title}</h3>
                  <p className="text-sm text-text/70">{pillar.description}</p>
                </div>

                {/* Subpages Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {pillar.subpages.map((subpage) => (
                    <Link
                      key={subpage.href}
                      href={subpage.href}
                      className="group/item p-4 rounded-lg border border-red/15 hover:border-red/40 hover:bg-red/5 transition-all duration-300"
                      onClick={() => setActivePillar(null)}
                    >
                      <h4 className="text-sm font-semibold text-red group-hover/item:text-red-soft mb-1 transition-colors">
                        {subpage.name}
                      </h4>
                      <p className="text-xs text-text/60 group-hover/item:text-text/70 transition-colors">
                        {subpage.description}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-6 pt-6 border-t border-red/20">
                  <Link
                    href={`/strategy/${pillar.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red hover:text-red-soft transition-colors"
                    onClick={() => setActivePillar(null)}
                  >
                    Explore {pillar.title}
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* EmpowerYouth External Link */}
        <a
          href="https://empoweryouth.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-red hover:text-red-soft transition-colors duration-300 border border-red/30 hover:border-red/60 rounded-md"
        >
          EmpowerYouth
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-text hover:text-red transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Mega Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-red max-h-[80vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            {corePillars.map((pillar) => (
              <div key={pillar.slug} className="border-b border-red/20 pb-6 last:border-0">
                <h3 className="text-lg font-bold text-red mb-4">{pillar.title}</h3>
                <div className="space-y-3 ml-4">
                  {pillar.subpages.map((subpage) => (
                    <Link
                      key={subpage.href}
                      href={subpage.href}
                      className="block text-sm text-text hover:text-red transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {subpage.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
