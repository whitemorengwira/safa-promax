import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  Outfit,
  DM_Sans,
} from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister';
import { AppChrome } from "@/components/AppChrome";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://safa-promax.vercel.app"),
  title: "SA Film Academy · 360° Marketing Strategy 2026–2027",
  description:
    "Where Industry Meets Opportunity. SA Film Academy is South Africa's premier film training institution — 20 years of transforming the industry through skills development, B-BBEE compliance, and cutting-edge production training.",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/logos/sa-film-academy-logo.png",
    apple: "/images/logos/sa-film-academy-logo.png",
  },
  openGraph: {
    title: "SA Film Academy · 360° Marketing Strategy 2026–2027",
    description: "Where Industry Meets Opportunity. SA Film Academy is South Africa's premier film training institution — 20 years of transforming the industry through skills development, B-BBEE compliance, and cutting-edge production training.",
    url: "https://safa-promax.vercel.app",
    siteName: "SA Film Academy",
    images: [
      {
        url: "/images/logos/sa-film-academy-logo.png",
        width: 512,
        height: 512,
        alt: "SA Film Academy Logo",
      },
    ],
    type: "website",
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

        <AppChrome>
          {children}
        </AppChrome>
      </body>
    </html>
  );
}
