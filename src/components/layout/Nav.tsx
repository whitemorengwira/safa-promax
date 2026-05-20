"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { corePillars } from "@/data/nav";

export function Nav() {
  const pathname = usePathname();
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-0 ml-auto relative select-none">
      {/* Home Link */}
      <Link
        href="/"
        className={`font-body text-xs font-semibold uppercase tracking-[3px] px-4 py-2 transition-colors hover:text-red ${
          pathname === "/" ? "text-red" : "text-muted"
        }`}
      >
        Home
      </Link>

      {/* Four Core Pillars with Mega Dropdown */}
      {corePillars.map((pillar) => (
        <div
          key={pillar.slug}
          className="relative group"
          onMouseEnter={() => setActivePillar(pillar.slug)}
          onMouseLeave={() => setActivePillar(null)}
        >
          <button className={`flex items-center gap-1 font-body text-xs font-semibold uppercase tracking-[3px] px-4 py-2 transition-colors cursor-pointer ${
            activePillar === pillar.slug ? "text-red" : "text-muted hover:text-red"
          }`}>
            {pillar.title}
            <ChevronDown className="w-3 h-3 transition-transform" />
          </button>

          {/* Mega Dropdown Panel */}
          {activePillar === pillar.slug && (
            <div className="absolute top-full left-0 mt-0 w-72 bg-surface border border-line shadow-1 z-50 p-6">
              <h4 className="font-display text-sm text-red mb-4">{pillar.title}</h4>
              <div className="space-y-2">
                {pillar.subpages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`block text-xs font-body uppercase tracking-wider transition-colors hover:text-red ${
                      pathname === page.href ? "text-red font-medium" : "text-muted"
                    }`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Smart Tools Link */}
      <Link
        href="/smart-tools"
        className={`font-body text-xs font-semibold uppercase tracking-[3px] px-4 py-2 transition-colors hover:text-red ${
          pathname.startsWith("/smart-tools") ? "text-red" : "text-muted"
        }`}
      >
        Smart Tools
      </Link>

      {/* Contact Link */}
      <Link
        href="/contact"
        className={`font-body text-xs font-semibold uppercase tracking-[3px] px-4 py-2 transition-colors hover:text-red ${
          pathname === "/contact" ? "text-red" : "text-muted"
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
