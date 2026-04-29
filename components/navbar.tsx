"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import AppStatusModal from "./app-status-modal";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        className="
        w-full max-w-6xl h-18 md:h-20 
        flex items-center justify-between px-6 md:px-8
        rounded-full border border-black/5
        bg-white/70 backdrop-blur-xl
        shadow-[0_12px_40px_rgba(0,0,0,0.08)]
      "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-black text-white">
            <Wallet size={20} />
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-tight">
            FinTrack
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-base text-gray-600 font-medium text-lg">
          <a href="#features" className="hover:text-black transition">
            Features
          </a>
          <a href="#screenshots" className="hover:text-black transition">
            Screenshots
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {/* Portfolio / Meet Developer */}
          <a
            href="https://satinder-portfolio.vercel.app/"
            target="_blank"
            className="
              hidden sm:inline-flex
              px-5 py-2.5 rounded-full 
              text-sm md:text-base font-medium
              border border-black/10 
              hover:border-black/20
              hover:bg-gray-50
              transition
            "
          >
            Meet Developer
          </a>

          {/* Primary CTA */}
          <AppStatusModal>
            <Button className="rounded-full px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base bg-black text-white hover:bg-gray-900 transition">
              Get Started
            </Button>
          </AppStatusModal>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
