"use client";

import { Button } from "@/components/ui/button";
import { Wallet, Menu } from "lucide-react";
import AppStatusModal from "./app-status-modal";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl h-18 md:h-20 flex items-center justify-between px-6 md:px-8 rounded-full border border-black/5 bg-white/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-black text-white">
            <Wallet size={20} />
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-tight">
            FinTrack
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-600 font-medium text-lg">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <a href="#features" className="hover:text-black transition">
            Features
          </a>
          <a href="#screenshots" className="hover:text-black transition">
            Screenshots
          </a>
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://satinder-portfolio.vercel.app/"
            target="_blank"
            className="px-5 py-2.5 rounded-full text-sm font-medium border border-black/10 hover:bg-gray-50 transition"
          >
            Meet Developer
          </a>

          <AppStatusModal>
            <Button className="rounded-full px-6 py-2.5 bg-black text-white">
              Get Started
            </Button>
          </AppStatusModal>
        </div>

        {/* 🔥 MOBILE MENU */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg border border-gray-200">
                <Menu size={20} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[360px] p-6 flex flex-col"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2.5 rounded-xl bg-black text-white">
                  <Wallet size={20} />
                </div>
                <span className="text-lg font-semibold">FinTrack</span>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-gray-700 text-lg font-medium">
                <Link href="/" className="hover:text-black">
                  Home
                </Link>
                <a href="#features" className="hover:text-black">
                  Features
                </a>
                <a href="#screenshots" className="hover:text-black">
                  Screenshots
                </a>
                <Link href="/about" className="hover:text-black">
                  About
                </Link>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://satinder-portfolio.vercel.app/"
                  target="_blank"
                  className="w-full text-center py-3 rounded-xl border border-gray-200"
                >
                  Meet Developer
                </a>

                <AppStatusModal>
                  <Button className="w-full rounded-xl bg-black text-white py-3">
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
