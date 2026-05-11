"use client";

import { Wallet, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import AppStatusModal from "./app-status-modal";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Screenshots", href: "/screenshots" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        className="
          relative
          w-full
          max-w-6xl
          h-[74px]
          flex
          items-center
          justify-between
          px-6
          md:px-10
          rounded-full
          border
          border-white/20
          bg-white/55
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          before:absolute
          before:inset-0
          before:rounded-full
          before:bg-gradient-to-r
          before:from-white/40
          before:via-white/10
          before:to-white/40
          before:p-[1px]
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        {/* Logo */}
        <Link href="/" className="relative z-10 group flex items-center gap-3">
          <div
            className="
              p-2.5
              rounded-2xl
              bg-gradient-to-br
              from-black
              to-zinc-700
              text-white
              shadow-lg
              shadow-black/20
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:shadow-black/30
            "
          >
            <Wallet size={20} />
          </div>

          <span
            className="
              text-xl
              md:text-2xl
              font-semibold
              tracking-[-0.03em]
              text-black
            "
          >
            FinTrack
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 relative z-10">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  relative
                  text-[18px]
                  font-medium
                  tracking-[-0.01em]
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1.5
                  after:h-[2px]
                  after:bg-black
                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? `
                        text-black
                        after:w-full
                      `
                      : `
                        text-zinc-600
                        hover:text-black
                        after:w-0
                        hover:after:w-full
                      `
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 relative z-10">
          <a
            href="https://satinder-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5
              py-2.5
              rounded-full
              text-sm
              font-medium
              border
              border-black/10
              bg-white/60
              hover:bg-white
              hover:shadow-md
              transition-all
              duration-300
            "
          >
            Meet Developer
          </a>

          <AppStatusModal>
            <Button
              className="
                rounded-full
                px-6
                py-2.5
                bg-black
                text-white
                shadow-lg
                shadow-black/20
                hover:scale-[1.03]
                hover:shadow-black/30
                transition-all
                duration-300
              "
            >
              Get Started
            </Button>
          </AppStatusModal>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative z-10">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="
                  p-2.5
                  rounded-xl
                  border
                  border-black/10
                  bg-white/70
                  backdrop-blur-xl
                  hover:bg-white
                  transition-all
                  duration-300
                "
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                w-[320px]
                border-l
                border-black/10
                bg-white/80
                backdrop-blur-2xl
                p-6
                flex
                flex-col
              "
            >
              {/* Mobile Logo */}
              <div className="flex items-center gap-3 mb-12">
                <div
                  className="
                    p-2.5
                    rounded-2xl
                    bg-gradient-to-br
                    from-black
                    to-zinc-700
                    text-white
                    shadow-lg
                    shadow-black/20
                  "
                >
                  <Wallet size={20} />
                </div>

                <span className="text-xl font-semibold tracking-tight">
                  FinTrack
                </span>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`
                      px-4
                      py-3
                      rounded-2xl
                      text-lg
                      font-medium
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-black
                            text-white
                            shadow-lg
                            shadow-black/20
                          `
                          : `
                            text-zinc-700
                            hover:bg-black/5
                            hover:text-black
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

              {/* Mobile CTA */}
              <div className="flex flex-col gap-3 pt-8">
                <a
                  href="https://satinder-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    text-center
                    py-3
                    rounded-2xl
                    border
                    border-black/10
                    bg-white/70
                    font-medium
                    hover:bg-white
                    transition-all
                    duration-300
                  "
                >
                  Meet Developer
                </a>

                <AppStatusModal>
                  <Button
                    className="
                      w-full
                      rounded-2xl
                      bg-black
                      text-white
                      py-6
                      shadow-lg
                      shadow-black/20
                      hover:scale-[1.02]
                      transition-all
                      duration-300
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
};

export default Navbar;
