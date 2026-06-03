"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet, Menu, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppStatusModal from "./app-status-modal";

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
          max-w-7xl
          h-[72px]
          rounded-full
          border border-white/30
          bg-white/70
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          px-5 md:px-7
          flex items-center justify-between
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/40 pointer-events-none" />

        {/* ================= LOGO ================= */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
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
            <span className="text-[24px] font-semibold tracking-tight">
              FinTrack
            </span>

            <span className="text-[11px] text-zinc-500 tracking-wide">
              SMART FINANCE
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-2 relative z-10">
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
                  text-[18px]
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

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden md:flex items-center gap-3 relative z-10">
          {/* Developer */}
          <a
            href="https://satinder-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              rounded-full
              border border-black/10
              bg-white/70
              text-[14px]
              font-medium
              text-zinc-700
              hover:bg-white
              hover:shadow-lg
              transition-all duration-300
            "
          >
            Meet Developer
            <ArrowUpRight className="size-4" />
          </a>

          {/* CTA */}
          <AppStatusModal>
            <Button
              className="
                h-11
                rounded-full
                px-6
                bg-black
                text-white
                text-[14px]
                font-medium
                shadow-lg shadow-black/20
                hover:scale-[1.03]
                hover:shadow-black/30
                transition-all duration-300
                cursor-pointer
              "
            >
              Get Started
            </Button>
          </AppStatusModal>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden relative z-10">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="
                  flex items-center justify-center
                  size-11
                  rounded-2xl
                  border border-black/10
                  bg-white/80
                  backdrop-blur-xl
                  shadow-sm
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
                bg-white/90
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

              {/* Bottom CTA */}
              <div className="space-y-3 pt-10">
                <a
                  href="https://satinder-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    w-full
                    rounded-2xl
                    border border-black/10
                    bg-white
                    py-4
                    font-medium
                  "
                >
                  Meet Developer
                  <ArrowUpRight className="size-4" />
                </a>

                <AppStatusModal>
                  <Button
                    className="
                      w-full
                      rounded-2xl
                      py-6
                      bg-black
                      text-white
                      font-medium
                    "
                  >
                    Get Started
                  </Button>
                </AppStatusModal>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
