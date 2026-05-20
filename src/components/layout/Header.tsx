"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Nav } from "./Nav";
import { MobileMenu } from "./MobileMenu";

/**
 * Header component.
 * Sticky header wrapper spanning all screens.
 * - Glides transparently over the hero section, transitioning to a dense
 *   --surface background with a gold hairline border upon scrolling past 50px.
 * - Incorporates the institutional wordmark and logo mark.
 * - Handles hamburger drawer toggle logic for mobile responsiveness.
 * - Connects the primary CTA to the external Cineterns talent portal.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cineternsUrl = process.env.NEXT_PUBLIC_CINETERNS_URL || "https://cineterns.vercel.app/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(16px,4vw,56px)] transition-all duration-400 select-none ${
          scrolled
            ? "bg-surface border-b border-line py-3 shadow-1"
            : "bg-gradient-to-b from-bg-deep/90 to-transparent py-5"
        }`}
      >
        {/* Wordmark Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-text hover:text-red transition-colors"
          aria-label="SA Film Academy Home"
        >
          {/* Official SA Film Academy Logo */}
          <img
            src="/images/logos/sa-film-academy-logo.webp"
            alt="SA Film Academy"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <span className="font-display font-bold tracking-[0.04em] text-base md:text-lg">
            SAFA <span className="font-body text-[10px] font-medium tracking-[0.3em] uppercase text-red ml-1">PROMAX</span>
          </span>
        </Link>

        {/* Primary Desktop Navigation */}
        <Nav />

        {/* Right CTA Button & Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={cineternsUrl}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center justify-center font-body text-[10px] md:text-[11px] font-semibold tracking-[2px] uppercase text-white bg-red hover:bg-red-soft border border-red px-4 py-2.5 transition-colors duration-300"
          >
            Talent Portal
          </a>

          {/* Hamburger toggle button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="w-11 h-11 flex items-center justify-center lg:hidden border border-line hover:text-red text-muted cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Side Navigation Drawer Overlay */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        cineternsUrl={cineternsUrl}
      />
    </>
  );
}
