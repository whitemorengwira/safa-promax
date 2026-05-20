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

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setShowPrompt(false);
      setIsInstalled(true);
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
    } catch (error) {
      console.error("Installation failed:", error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (isInstalled || !showPrompt || !installPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96 bg-surface border border-red/30 p-6 shadow-1 z-40">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-display font-bold text-red mb-2">Install SA Film Academy</h3>
          <p className="font-body text-sm text-muted mb-4">
            Install our app for quick access to strategies, tools, and resources.
          </p>
          <button
            onClick={handleInstall}
            className="font-body text-xs font-semibold uppercase tracking-widest bg-red text-white px-4 py-2 hover:bg-red-soft transition w-full"
          >
            Install Now
          </button>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-muted hover:text-text transition"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
