"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PWAInstall } from "@/components/PWAInstall";
import { SiteOverrideRuntime } from "@/components/cms/SiteOverrideRuntime";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPrivateSurface = pathname.startsWith("/admin") || pathname.startsWith("/board") || pathname.startsWith("/access");

  if (isPrivateSurface) {
    return <main className="min-h-screen bg-bg text-text">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-[72px] md:pt-[80px]">{children}</main>
      <Footer />
      <PWAInstall />
      <Suspense fallback={null}>
        <SiteOverrideRuntime />
      </Suspense>
    </>
  );
}
