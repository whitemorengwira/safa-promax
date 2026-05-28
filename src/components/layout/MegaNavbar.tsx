'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface MegaDropdownItem {
  title: string;
  href: string;
  description: string;
}

interface MegaPanel {
  heading: string;
  items: MegaDropdownItem[];
}

const MEGA_PANELS: Record<string, MegaPanel> = {
  foundation: {
    heading: 'The Building Blocks',
    items: [
      {
        title: 'The Organisation',
        href: '/foundation/organisation',
        description: 'MICT SETA-accredited, 20 years of placement',
      },
      {
        title: 'Brand Ecosystem',
        href: '/foundation/ecosystem',
        description: 'Five entities, one architecture',
      },
      {
        title: 'Digital Infrastructure',
        href: '/foundation/infrastructure',
        description: 'SA Film Interns and the presentation engine',
      },
      {
        title: 'Brand Architecture',
        href: '/foundation/brand',
        description: 'From separate subsidiaries to one family',
      },
    ],
  },
  visibility: {
    heading: 'How the World Sees SAFA',
    items: [
      {
        title: '12-Month Calendar',
        href: '/visibility/calendar',
        description: 'Foundation, visibility, authority, scale',
      },
      {
        title: 'SEO & AI SEO',
        href: '/visibility/seo',
        description: 'Found by search engines and AI engines',
      },
      {
        title: 'Institutional Voice',
        href: '/visibility/leadership',
        description: 'The Chief Executive as a marketing asset',
      },
      {
        title: 'Content Marketing',
        href: '/visibility/content',
        description: 'The editorial engine and the podcast',
      },
    ],
  },
  growth: {
    heading: 'Where Revenue Is Generated',
    items: [
      {
        title: 'Agentic AI Engine',
        href: '/growth/agentic-ai',
        description: 'Five autonomous workflows, weekly cadence',
      },
      {
        title: 'B-BBEE & Skills Levy',
        href: '/growth/commercial',
        description: 'SDL, B-BBEE evidence and grant pathways',
      },
      {
        title: 'Partnerships & PR',
        href: '/growth/partnerships',
        description: 'Suzuki, Netflix, NFVF and beyond',
      },
      {
        title: 'Competitive Positioning',
        href: '/growth/positioning',
        description: 'Six dimensions on which SAFA wins',
      },
    ],
  },
  delivery: {
    heading: 'Measurable, Accountable Results',
    items: [
      {
        title: 'Community & Alumni',
        href: '/delivery/community',
        description: 'The four-tier career-progression model',
      },
      {
        title: 'AI in Curriculum',
        href: '/delivery/curriculum',
        description: 'Veo, Kling, Hailuo, Runway masterclasses',
      },
      {
        title: 'KPI Dashboard',
        href: '/delivery/kpis',
        description: '16 indicators, baselines, 12-month targets',
      },
      {
        title: 'Budget Framework',
        href: '/delivery/budget',
        description: 'Monthly subscription, transparent envelope',
      },
      {
        title: 'Implementation',
        href: '/delivery/implementation',
        description: 'Three tracks, 30 days, concrete results',
      },
      {
        title: 'Risk & Contingency',
        href: '/delivery/risk',
        description: 'Risk controls, dependencies and board visibility',
      },
    ],
  },
};

const STRATEGY_TABS = [
  { label: 'FOUNDATION', key: 'foundation', href: '/foundation' },
  { label: 'VISIBILITY', key: 'visibility', href: '/visibility' },
  { label: 'GROWTH ENGINE', key: 'growth', href: '/growth' },
  { label: 'DELIVERY', key: 'delivery', href: '/delivery' },
];

export default function MegaNavbar() {
  const pathname = usePathname();
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const saFilmInternsUrl =
    process.env.NEXT_PUBLIC_SA_FILM_INTERNS_URL ||
    process.env.NEXT_PUBLIC_CINETERNS_URL ||
    'https://cineterns.vercel.app/';

  const isRouteActive = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  const navClass = (href: string) =>
    `text-[10px] font-bold tracking-widest transition-colors ${
      isRouteActive(href) ? 'text-red-600' : 'text-text hover:text-red-600'
    }`;

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:flex fixed top-0 z-50 w-full h-12 items-center justify-between px-5 transition-all duration-300 ${
          scrolled
            ? 'border-b border-gold/20'
            : 'bg-transparent'
        }`}
        style={{
          background: scrolled ? 'rgba(9, 9, 14, 0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        {/* Wordmark with Restored Logo */}
        <Link href="/" data-cms-nav-link="true" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 overflow-hidden flex items-center justify-center group-hover:opacity-80 transition-opacity">
            <Image
              src="/images/logos/sa-film-academy-logo.png"
              alt="SA Film Academy Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-black text-text group-hover:text-red-600 transition-colors leading-none">
              SA Film Academy
            </span>
            <span className="text-[9px] text-gold tracking-[0.15em] font-bold uppercase mt-0.5">360° Strategy</span>
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center gap-4">
          <Link href="/" data-cms-nav-link="true" className={navClass('/')}>
            HOME
          </Link>

          {/* Strategy Tabs with Mega Dropdowns */}
          {STRATEGY_TABS.map((tab) => (
            <div
              key={tab.key}
              className="relative group"
              onMouseEnter={() => setActivePanel(tab.key)}
              onMouseLeave={() => setActivePanel(null)}
            >
              <Link
                href={tab.href}
                data-cms-nav-link="true"
                className={`${navClass(tab.href)} py-1.5 relative group/btn block`}
              >
                {tab.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover/btn:w-full transition-all duration-300" />
              </Link>

              {/* Mega Dropdown Panel - Shrunk and Refined */}
              {activePanel === tab.key && (
                <div
                  className="mega-panel absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl border-t border-gold/20 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200"
                  style={{
                    backgroundColor: 'rgba(9, 9, 14, 0.92)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(201, 168, 76, 0.12)',
                    boxShadow: '0 24px 64px rgba(0, 0, 0, 0.7)',
                  }}
                  onMouseEnter={() => setActivePanel(tab.key)}
                  onMouseLeave={() => setActivePanel(null)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                      <h3 className="text-gold text-[10px] font-bold uppercase tracking-widest">
                        {MEGA_PANELS[tab.key].heading}
                      </h3>
                      <Link href={tab.href} data-cms-nav-link="true" className="text-[9px] text-muted hover:text-red-600 transition-all duration-200 uppercase tracking-widest font-bold group flex items-center gap-1">
                        View All {tab.label}
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {MEGA_PANELS[tab.key].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          data-cms-nav-link="true"
                          className={`group/item block p-3 -m-2 rounded transition-all duration-300 hover:bg-red-600/5 ${
                            isRouteActive(item.href) ? 'bg-red-600/10' : ''
                          }`}
                        >
                          <div className="mb-1">
                            <h4 className="text-text font-bold text-[10px] uppercase tracking-tight group-hover/item:text-red-600 transition-colors duration-200">
                              {item.title}
                            </h4>
                            <div className="h-px w-0 bg-red-600 group-hover/item:w-8 transition-all duration-300 mt-0.5" />
                          </div>
                          <p className="text-muted text-[9px] leading-relaxed group-hover/item:text-text/80 transition-colors duration-200">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="/smart-tools" data-cms-nav-link="true" className={navClass('/smart-tools')}>
            SMART TOOLS
          </Link>
          <Link href="/contact" data-cms-nav-link="true" className={navClass('/contact')}>
            CONTACT
          </Link>
        </div>

        {/* Right CTA */}
        <a
          href={saFilmInternsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-red-600 text-white font-black text-[9px] tracking-widest hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20"
        >
          SA Film Interns
        </a>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 z-50 w-full h-12 bg-surface/80 backdrop-blur-md border-b border-red-600/30 flex items-center justify-between px-5">
        <Link href="/" data-cms-nav-link="true" className="flex items-center gap-2">
          <div className="w-7 h-7 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/logos/sa-film-academy-logo.png"
              alt="SA Film Academy Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <span className="font-display text-sm font-black text-text">SA Film Academy</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-red-600 hover:text-red-500 transition-colors"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-12 z-40 bg-surface/90 backdrop-blur-md overflow-y-auto">
          <div className="p-6 space-y-8">
            <Link
              href="/"
              data-cms-nav-link="true"
              className="block text-lg font-black text-text hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>

            {/* Mobile Strategy Sections */}
            {STRATEGY_TABS.map((tab) => (
              <div key={tab.key} className="space-y-4">
                <Link 
                  href={tab.href}
                  data-cms-nav-link="true"
                  className="text-red-600 text-xs font-black uppercase tracking-widest block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {tab.label}
                </Link>
                <div className="space-y-4 pl-4 border-l-2 border-red-600/50">
                  {MEGA_PANELS[tab.key].items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      data-cms-nav-link="true"
                      className="block group p-3 -ml-3 -pl-3 rounded transition-all duration-200 hover:bg-red-600/10 border-l-2 border-transparent group-hover:border-l-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="text-text font-bold text-sm group-hover:text-red-600 transition-colors duration-200">{item.title}</div>
                      <div className="text-muted text-[10px] uppercase tracking-wider mt-1 group-hover:text-text/60 transition-colors">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-white/10 pt-8 space-y-6">
              <Link
                href="/smart-tools"
                data-cms-nav-link="true"
                className="block text-lg font-black text-text hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                SMART TOOLS
              </Link>
              <Link
                href="/contact"
                data-cms-nav-link="true"
                className="block text-lg font-black text-text hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <a
                href={saFilmInternsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4 bg-red-600 text-white font-black text-sm tracking-widest rounded text-center shadow-lg shadow-red-600/20"
              >
                SA Film Interns
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
