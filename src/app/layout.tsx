import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Outfit,
  DM_Sans,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PWAInstall } from '@/components/PWAInstall';
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';
import { PersistentCTA } from '@/components/sections/PersistentCTA';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SA Film Academy · 360° Marketing Strategy 2026–2027",
  description:
    "Where Industry Meets Opportunity. SA Film Academy is South Africa's premier film training institution — 20 years of transforming the industry through skills development, B-BBEE compliance, and cutting-edge production training.",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/logos/sa-film-academy-logo.webp",
    apple: "/images/logos/sa-film-academy-logo.webp",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SA Film Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`
        ${playfair.variable}
        ${cormorant.variable}
        ${outfit.variable}
        ${dmSans.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-gold selection:text-bg">
        {/* Service Worker Registration */}
        <ServiceWorkerRegister />

        {/* Sticky Header */}
        <Header />

        {/* Content Area */}
        <main className="flex-1 flex flex-col pt-[72px] md:pt-[80px]">
          {children}
        </main>

        {/* Institutional Footer */}
        <Footer />

        {/* PWA Install Prompt */}
        <PWAInstall />

        {/* Persistent CTA */}
        <PersistentCTA />
      </body>
    </html>
  );
}
