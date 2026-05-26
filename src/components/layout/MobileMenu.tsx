"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { strategySections } from "@/data/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  cineternsUrl: string;
}

/**
 * MobileMenu component.
 * Collapsible overlay drawer for mobile devices (< 1024px).
 * - Full-height scrollable side drawer utilizing framer-motion transitions.
 * - Enforces minimum 44px tap targets for premium accessibility.
 * - Integrates all page routes, strategy indices, and the talent portal CTA.
 */
export function MobileMenu({ isOpen, onClose, cineternsUrl }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent background scroll when menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle route change closing
  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-deep z-[100] backdrop-blur-sm cursor-pointer lg:hidden"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[380px] bg-surface border-l border-line z-[101] shadow-1 flex flex-col p-6 overflow-y-auto lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-line mb-6">
              <span className="font-display italic text-gold text-lg">Menu</span>
              <button
                onClick={onClose}
                className="w-11 h-11 flex items-center justify-center border border-line text-muted hover:text-gold cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Navigation Links */}
            <div className="flex flex-col gap-1 mb-8">
              <Link
                href="/"
                className={`min-h-[44px] flex items-center font-body text-xs font-semibold uppercase tracking-[3px] transition-colors hover:text-gold-soft ${
                  pathname === "/" ? "text-gold" : "text-muted"
                }`}
              >
                Home
              </Link>
              <Link
                href="/smart-tools"
                className={`min-h-[44px] flex items-center font-body text-xs font-semibold uppercase tracking-[3px] transition-colors hover:text-gold-soft ${
                  pathname.startsWith("/smart-tools") ? "text-gold" : "text-muted"
                }`}
              >
                Smart Tools
              </Link>
              <Link
                href="/contact"
                className={`min-h-[44px] flex items-center font-body text-xs font-semibold uppercase tracking-[3px] transition-colors hover:text-gold-soft ${
                  pathname === "/contact" ? "text-gold" : "text-muted"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Strategy Sections Accordion List */}
            <div className="mb-8">
              <span className="eyebrow block mb-4 text-[10px]">360° Strategy Indices</span>
              <div className="flex flex-col border-l border-line/30 pl-4 gap-1">
                {strategySections.map((sec) => {
                  const isActive = pathname === sec.href;
                  return (
                    <Link
                      key={sec.href}
                      href={sec.href}
                      className={`min-h-[44px] flex items-center text-xs font-body tracking-wider transition-colors hover:text-gold ${
                        isActive ? "text-gold font-medium" : "text-muted"
                      }`}
                    >
                      {sec.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom talent portal CTA */}
            <div className="mt-auto pt-6 border-t border-line">
              <a
                href={cineternsUrl}
                target="_blank"
                rel="noopener"
                className="w-full min-h-[46px] flex items-center justify-center font-body text-[11px] font-semibold tracking-[3px] uppercase text-bg bg-gold hover:bg-transparent hover:text-gold border border-gold transition-colors duration-300"
              >
                Talent Portal
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
