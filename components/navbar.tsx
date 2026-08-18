"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet, Menu, ShieldCheck } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Screenshots", href: "/screenshots" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav
        className="
          relative
          w-full
          max-w-6xl
          h-[76px]
          rounded-full
          border border-white/30
          bg-white/70
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          px-6 md:px-10
          flex items-center justify-between
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/40 pointer-events-none" />

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3 group shrink-0"
        >
          <div
            className="
              relative
              flex items-center justify-center
              size-11
              rounded-2xl
              bg-gradient-to-br
              from-black
              via-zinc-900
              to-zinc-700
              text-white
              shadow-lg shadow-black/20
              group-hover:scale-105
              transition-all duration-300
            "
          >
            <Wallet className="size-5" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-[22px] md:text-[24px] font-semibold tracking-tight">
              FinTrack
            </span>

            <span className="text-[10px] md:text-[11px] text-zinc-500 tracking-wide">
              SMART FINANCE
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-2 relative z-10">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  relative
                  px-5 py-2.5
                  rounded-full
                  text-[17px]
                  font-medium
                  tracking-tight
                  transition-all duration-300

                  ${
                    isActive
                      ? `
                        bg-black
                        text-white
                        shadow-lg shadow-black/15
                      `
                      : `
                        text-zinc-600
                        hover:text-black
                        hover:bg-black/[0.04]
                      `
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* ================= DESKTOP ADMIN CTA ================= */}
        <div className="hidden lg:flex items-center relative z-10 shrink-0">
          <a
            href="https://fintrack-adminpanel.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              inline-flex items-center gap-2.5
              px-6 py-3
              rounded-full
              border border-zinc-900/15
              bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950
              text-[15px]
              font-semibold
              text-white
              shadow-md shadow-black/10
              hover:shadow-xl hover:shadow-black/20
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-300
            "
          >
            <ShieldCheck className="size-4 text-emerald-400 transition-transform duration-300 group-hover:rotate-12" />
            <span>Admin Panel</span>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </a>
        </div>

        {/* ================= TABLET & MOBILE (Collapsed Navigation) ================= */}
        <div className="lg:hidden relative z-10">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open Menu"
                className="
                  flex items-center justify-center
                  size-11
                  rounded-2xl
                  border border-black/10
                  bg-white/80
                  backdrop-blur-xl
                  shadow-sm
                  transition-transform
                  active:scale-95
                "
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                w-[320px]
                border-l border-black/10
                bg-white/95
                backdrop-blur-3xl
                p-6
                flex flex-col
              "
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-10">
                <div
                  className="
                    flex items-center justify-center
                    size-11
                    rounded-2xl
                    bg-black
                    text-white
                  "
                >
                  <Wallet className="size-5" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    FinTrack
                  </h2>

                  <p className="text-xs text-zinc-500">
                    Smart Finance Platform
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`
                        px-5 py-4
                        rounded-2xl
                        text-[16px]
                        font-medium
                        transition-all duration-300

                        ${
                          isActive
                            ? `
                              bg-black
                              text-white
                              shadow-lg shadow-black/15
                            `
                            : `
                              text-zinc-700
                              hover:bg-zinc-100
                            `
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex-1" />

              {/* Bottom Mobile Admin CTA */}
              <div className="pt-6">
                <a
                  href="https://fintrack-adminpanel.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    w-full
                    rounded-2xl
                    bg-zinc-950
                    py-4
                    font-semibold
                    text-white
                    shadow-md
                  "
                >
                  <ShieldCheck className="size-4 text-emerald-400" />
                  <span>Admin Panel</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
