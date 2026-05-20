"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { mainNavItems, strategySections } from "@/data/nav";

/**
 * Nav component.
 * Core navigation system for desktop screens.
 * - Displays static links (Home, Smart Tools, Contact).
 * - Implements a premium dropdown list containing all 18 strategy sections,
 *   styled as a two-column editorial overlay.
 * - Highlights active route with gold underlines.
 */
export function Nav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-6 relative select-none">
      {/* Home Link */}
      <Link
        href="/"
        className={`font-body text-xs font-semibold uppercase tracking-[3px] py-2 transition-colors hover:text-gold-soft ${
          pathname === "/" ? "text-gold relative" : "text-muted"
        }`}
      >
        Home
        {pathname === "/" && (
          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
        )}
      </Link>

      {/* Strategy Sections Dropdown Trigger */}
      <div
        className="relative py-2 group"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button
          className={`flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-[3px] transition-colors hover:text-gold-soft cursor-pointer ${
            pathname.startsWith("/strategy") ? "text-gold" : "text-muted"
          }`}
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          Strategy
          <ChevronDown className="w-3.5 h-3.5 text-gold-soft transition-transform group-hover:rotate-180" />
        </button>

        {/* Dropdown Panel */}
        {dropdownOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[460px] bg-surface border border-line p-6 shadow-1 z-50 animate-fade-in">
            <span className="eyebrow block mb-4 text-[10px]">360° Strategy Blueprint</span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {strategySections.map((sec) => {
                const isActive = pathname === sec.href;
                return (
                  <Link
                    key={sec.href}
                    href={sec.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`text-[11px] font-body tracking-wider transition-colors hover:text-gold ${
                      isActive ? "text-gold font-medium" : "text-muted"
                    }`}
                  >
                    {sec.name}
                  </Link>
                );
              })}
            </div>
            <div className="gold-divider my-4" />
            <div className="text-[10px] italic text-muted/60 text-center">
              "Where Industry Meets Opportunity"
            </div>
          </div>
        )}
      </div>

      {/* Smart Tools Link */}
      <Link
        href="/smart-tools"
        className={`font-body text-xs font-semibold uppercase tracking-[3px] py-2 transition-colors hover:text-gold-soft ${
          pathname.startsWith("/smart-tools") ? "text-gold relative" : "text-muted"
        }`}
      >
        Smart Tools
        {pathname.startsWith("/smart-tools") && (
          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
        )}
      </Link>

      {/* Contact Link */}
      <Link
        href="/contact"
        className={`font-body text-xs font-semibold uppercase tracking-[3px] py-2 transition-colors hover:text-gold-soft ${
          pathname === "/contact" ? "text-gold relative" : "text-muted"
        }`}
      >
        Contact
        {pathname === "/contact" && (
          <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
        )}
      </Link>
    </nav>
  );
}
