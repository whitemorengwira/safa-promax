"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * PersistentCTA component.
 * A sticky bottom bar (mobile) or fixed end-of-page CTA card (desktop)
 * that appears after the user has scrolled 40% down the page.
 * Dismissable with a close button.
 * Fades in with 300ms transition.
 */
export function PersistentCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      // Calculate scroll percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Total scrollable distance
      const scrollableDistance = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / scrollableDistance) * 100;

      // Show CTA after 40% scroll
      if (scrollPercentage > 40) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:left-auto md:max-w-sm z-40 transition-all duration-300 ${
        isVisible && !isDismissed
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-full md:translate-y-0 pointer-events-none"
      }`}
    >
      {/* Mobile: Bottom bar */}
      <div className="md:hidden bg-surface border-t border-line px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs font-semibold text-gold mb-2">
            Ready to take this further?
          </p>
          <div className="flex gap-2">
            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-4 py-2 hover:bg-gold-soft transition"
            >
              Schedule a Briefing
            </Link>
            <button
              type="button"
              disabled
              className="text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-bg transition cursor-not-allowed opacity-75"
            >
              Download Prospectus
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-muted hover:text-gold transition flex-shrink-0"
          aria-label="Dismiss"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Desktop: Card */}
      <div className="hidden md:block bg-surface border border-line p-8 rounded-none">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-display text-lg font-bold text-gold mb-3">
              Ready to take this further?
            </p>
            <p className="text-sm text-muted mb-6">
              Schedule a briefing or download our partnership prospectus.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-muted hover:text-gold transition flex-shrink-0"
            aria-label="Dismiss"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-3">
          <Link
            href="/contact"
            className="flex-1 text-center text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-4 py-3 hover:bg-gold-soft transition"
          >
            Schedule a Briefing
          </Link>
          <button
            type="button"
            disabled
            className="flex-1 text-center text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-4 py-3 hover:bg-gold hover:text-bg transition cursor-not-allowed opacity-75"
          >
            Download Prospectus
          </button>
        </div>
      </div>
    </div>
  );
}
