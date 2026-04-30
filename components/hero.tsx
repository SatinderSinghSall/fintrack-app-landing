"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import AppStatusModal from "./app-status-modal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6 text-center">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] opacity-80" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm rounded-full border bg-white/80 backdrop-blur shadow-sm">
        <Wallet size={14} />
        <span className="text-gray-700">Smart Personal Finance Mobile App</span>
      </div>

      {/* Headline */}
      <h1 className="max-w-5xl mx-auto text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
        Manage Your Money
        <br />
        <span className="relative inline-block mt-2">
          Smarter with FinTrack
          {/* ✨ Tilted Underline */}
          <span className="absolute left-0 bottom-2 w-full h-3 bg-black/20 -rotate-1 rounded-md" />
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
        Track expenses, manage budgets, and grow your savings effortlessly — all
        in one powerful mobile app.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        {/* GET STARTED */}
        <AppStatusModal>
          <Button className="w-full sm:w-auto px-8 py-6 text-lg rounded-full bg-black text-white hover:bg-gray-900 shadow-lg">
            Get Started
          </Button>
        </AppStatusModal>

        {/* LEARN MORE */}
        <AppStatusModal>
          <Button
            variant="outline"
            className="w-full sm:w-auto px-8 py-6 text-lg rounded-full border-gray-300 hover:bg-gray-50"
          >
            Learn More
          </Button>
        </AppStatusModal>
      </div>

      {/* Social Proof */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/40?img=${i}`}
              className="w-10 h-10 rounded-full border-2 border-white shadow"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500">
          ⭐ <span className="font-medium text-gray-700">4.5</span> • Loved by
          early users
        </p>
      </div>
    </section>
  );
}
