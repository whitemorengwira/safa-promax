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
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-300"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in zoom-in duration-300">
        <div className="bg-surface border-2 border-red-600 p-8 max-w-md w-full shadow-2xl">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="font-display font-black text-2xl text-red-600">
              Install the App
            </h2>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-muted hover:text-red-600 transition"
              aria-label="Dismiss"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="font-body text-sm text-text/80 mb-6 leading-relaxed">
            Install SA Film Academy as an app on your device for instant access to strategies, tools, and resources. Works offline too.
          </p>

          <div className="space-y-3">
            <button
              onClick={handleInstall}
              className="font-body text-sm font-black uppercase tracking-widest bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition w-full"
            >
              Install Now →
            </button>
            <button
              onClick={handleDismiss}
              className="font-body text-sm font-semibold uppercase tracking-widest border-2 border-muted text-muted hover:border-red-600 hover:text-red-600 px-6 py-3 transition w-full"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
