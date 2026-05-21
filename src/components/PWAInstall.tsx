"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PWAInstall() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Check if user has dismissed the prompt in the last 7 days
    const dismissedTime = localStorage.getItem("pwaInstallDismissed");
    if (dismissedTime) {
      const now = Date.now();
      const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
      if (now - parseInt(dismissedTime) < sevenDaysMs) {
        return; // Don't show the prompt
      }
    }

    // Track page visits
    let pageVisits = parseInt(sessionStorage.getItem("pwaPageVisits") || "0");
    pageVisits += 1;
    sessionStorage.setItem("pwaPageVisits", pageVisits.toString());

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      // Only show after visiting at least 2 pages
      if (pageVisits >= 2) {
        setInstallPrompt(e as BeforeInstallPromptEvent);
        setShowPrompt(true);
      }
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setShowPrompt(false);
      setIsInstalled(true);
      sessionStorage.removeItem("pwaPageVisits");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === "accepted") {
        setIsInstalled(true);
      }
      setShowPrompt(false);
      setInstallPrompt(null);
      sessionStorage.removeItem("pwaPageVisits");
    } catch (error) {
      console.error("Installation failed:", error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Store dismissal time for 7-day period
    localStorage.setItem("pwaInstallDismissed", Date.now().toString());
  };

  if (!isClient || isInstalled || !showPrompt || !installPrompt) {
    return null;
  }

  // Mobile: bottom bar, Desktop: top-right corner
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* Install Banner */}
      <div
        className={`fixed z-50 bg-surface border border-gold p-4 shadow-lg animate-in slide-in duration-300 ${
          isMobile
            ? "bottom-0 left-0 right-0 md:bottom-4 md:right-4 md:max-w-sm"
            : "top-4 right-4 max-w-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-body text-sm text-text">
              Add SA Film Academy to your home screen
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleInstall}
              className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-4 py-2 hover:bg-gold-soft transition whitespace-nowrap"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-muted hover:text-text transition p-1"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
