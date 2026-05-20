"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Footer component.
 * Shared institutional footer.
 * Consists of three defined layout zones:
 * 1. Tagline: Italic Playfair Display branding statement.
 * 2. Connect Links & Socials: Direct outbound channels to main entities.
 * 3. Copyright Row: Archival meta details.
 */
export function Footer() {
  const cineternsUrl = process.env.NEXT_PUBLIC_CINETERNS_URL || "https://cineterns.co.za";

  return (
    <footer className="border-t border-line bg-bg-deep pt-16 pb-12 select-none">
      <div className="container-max flex flex-col gap-12">
        {/* Zone 1: Tagline */}
        <div className="text-center md:text-left">
          <p
            className="font-display italic text-2xl md:text-3xl lg:text-4xl text-gold-soft leading-tight"
            style={{ fontFamily: "var(--font-display-alt)" }}
          >
            "Where Industry Meets Opportunity."
          </p>
        </div>

        {/* Zone 2: Digital Presence & Networking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
          {/* Institutional Links */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-[9px] block mb-1">Corporate Presence</span>
            <a
              href="https://safilmacademy.org"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 text-xs font-body text-muted hover:text-gold transition-colors w-fit border-b border-transparent hover:border-gold/30 pb-0.5"
            >
              safilmacademy.org
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href="https://greenset.org"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 text-xs font-body text-muted hover:text-gold transition-colors w-fit border-b border-transparent hover:border-gold/30 pb-0.5"
            >
              greenset.org
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Connect Link */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-[9px] block mb-1">Trainee Services</span>
            <a
              href={cineternsUrl}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 text-xs font-body text-muted hover:text-gold transition-colors w-fit border-b border-transparent hover:border-gold/30 pb-0.5"
            >
              Cineterns Placement Portal
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Social Channels */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-[9px] block mb-1">Stay Connected</span>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://facebook.com/TheSAFilmAcademy"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1.5 text-xs text-muted hover:text-gold transition-colors border border-line px-3 py-1.5 hover:bg-surface"
              >
                <svg className="w-4 h-4 text-gold-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                TheSAFilmAcademy
              </a>
              <a
                href="https://instagram.com/safilmacademy"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1.5 text-xs text-muted hover:text-gold transition-colors border border-line px-3 py-1.5 hover:bg-surface"
              >
                <svg className="w-4 h-4 text-gold-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @safilmacademy
              </a>
            </div>
          </div>
        </div>

        {/* Zone 3: Small Print and Brand Meta */}
        <div className="pt-8 border-t border-line/40 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-[11px] font-body text-muted/50 tracking-wider">
          <p>© {new Date().getFullYear()} SA Film Academy. All Rights Reserved.</p>
          <p className="uppercase tracking-[2px] text-center md:text-right">
            SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027
          </p>
        </div>
      </div>
    </footer>
  );
}
