"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Activity,
  CheckCircle2,
  ExternalLink,
  FileText,
  Images,
  LayoutDashboard,
  Lock,
  LogOut,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { AdminSession } from "@/lib/admin/types";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/pages", label: "Pages", icon: FileText },
  { href: "/admin/editor", label: "Edit Site", icon: CheckCircle2 },
  { href: "/admin/media", label: "Media", icon: Images },
  { href: "/admin/approvals", label: "Approvals", icon: ShieldCheck },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/audit-log", label: "Audit Log", icon: Activity },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminShell({
  user,
  title,
  children,
}: {
  user: AdminSession;
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#121219] text-text">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-bg-deep/95 lg:block">
        <div className="flex h-full flex-col">
          <div className="border-b border-white/10 p-6">
            <Link href="/admin/dashboard" className="block">
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold">SAFA Promax</p>
              <h1 className="mt-2 text-2xl font-black leading-none text-white">Admin Studio</h1>
            </Link>
            <div className="mt-5 flex items-center gap-2 rounded-sm border border-gold/20 bg-gold/10 px-3 py-2 text-xs text-gold-soft">
              <Lock className="h-3.5 w-3.5" />
              Secure editor session
            </div>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-red/15 text-gold-soft"
                      : "text-text/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="mb-4">
              <p className="text-sm font-bold text-white">{user.name}</p>
              <p className="text-xs text-muted">{user.role}</p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center justify-center gap-2 border border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted transition hover:border-red hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/85 backdrop-blur-md">
          <div className="flex min-h-20 flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold">CMS Portal</p>
              <h2 className="mt-1 text-2xl font-black text-white md:text-3xl">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admin/editor"
                className="inline-flex items-center gap-2 bg-gold px-4 py-3 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft"
              >
                Edit Site
              </Link>
              <Link
                href="/board"
                className="inline-flex items-center gap-2 border border-gold/40 px-4 py-3 text-xs font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg"
              >
                Board View
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </header>

        <div className="px-5 py-8 md:px-8">{children}</div>
      </div>
    </div>
  );
}
