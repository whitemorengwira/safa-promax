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

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:left-auto md:max-w-sm z-50 transition-all duration-300 opacity-100 translate-y-0">
      {/* Mobile: Bottom bar */}
      <div className="md:hidden bg-surface border-t border-line px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs font-semibold text-gold mb-2">
            Install for offline viewing
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-4 py-2 hover:bg-gold-soft transition"
            >
              Install App
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-muted hover:text-gold transition flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop: Card */}
      <div className="hidden md:block bg-surface border border-line p-8 rounded-none">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="font-display text-lg font-bold text-gold mb-3">
              Install for offline viewing
            </p>
            <p className="text-sm text-muted mb-6">
              Add SA Film Academy to your home screen and access the strategy anywhere — even without an internet connection.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-muted hover:text-gold transition flex-shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleInstall}
            className="flex-1 text-center text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-4 py-3 hover:bg-gold-soft transition"
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  );
}
