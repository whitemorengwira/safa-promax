"use client";

import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";

/**
 * Footer component.
 * Shared institutional footer.
 * Consists of three defined layout zones:
 * 1. Tagline: Italic Playfair Display branding statement.
 * 2. Connect Links & Socials: Direct outbound channels to main entities.
 * 3. Copyright Row: Archival meta details.
 */
export function Footer() {
  const cineternsUrl = process.env.NEXT_PUBLIC_CINETERNS_URL || "https://cineterns.vercel.app/";

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
              href="https://www.greenset.org/"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-xs font-body text-muted hover:text-gold transition-colors w-fit border-b border-transparent hover:border-gold/30 pb-0.5"
            >
              <img src="/images/logos/greenset-logo.webp" alt="GreenSet" className="h-4 w-auto opacity-80" />
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
              SA Film Intense Talent Portal
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <Link
              href="/admin"
              className="mt-3 inline-flex w-fit items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-bg"
            >
              <LockKeyhole className="h-3.5 w-3.5" />
              Admin CMS Portal
            </Link>
          </div>

          {/* Social Channels */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-[9px] block mb-1">Stay Connected</span>
            <div className="flex flex-col gap-2 text-xs">
              <a href="https://linkedin.com/company/sa-film-academy" target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors">LinkedIn</a>
              <a href="https://instagram.com/safilmacademy" target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors">Instagram</a>
              <a href="https://facebook.com/TheSAFilmAcademy" target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors">Facebook</a>
              <a href="https://x.com/safilmacademy" target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors">X (Twitter)</a>
              <a href="https://youtube.com/@safilmacademy" target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors">YouTube</a>
              <a href="https://tiktok.com/@safilmacademy" target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors">TikTok</a>
              <Link href="/contact" className="text-muted hover:text-gold transition-colors">Contact Form</Link>
              <a href="https://t.me/safilmacademy" target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors">Telegram</a>
            </div>
          </div>
        </div>

        {/* Zone 3: Presentation Note */}
        <div className="pt-8 border-t border-line/40 text-center md:text-left">
          <span className="eyebrow text-[9px] block mb-2">A Note on Our Presentations</span>
          <p className="font-body italic text-xs md:text-sm text-muted leading-relaxed max-w-2xl">
            We have reimagined the manner in which our work is presented. Our latest showcase is now hosted at{" "}
            <a
              href="https://empoweryouth.vercel.app/"
              target="_blank"
              rel="noopener"
              className="text-gold hover:text-gold-soft transition-colors border-b border-gold/30 hover:border-gold pb-0.5 inline-flex items-center gap-1"
            >
              empoweryouth.vercel.app
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
            .
          </p>
        </div>

        {/* Zone 4: Small Print and Brand Meta */}
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
