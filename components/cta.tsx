"use client";

import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-20">
        {/* LEFT — IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-[260px] md:w-[300px]">
            {/* Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl bg-black/10 rounded-full scale-110" />

            <div className="rounded-[32px] overflow-hidden border bg-white shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/screenshots/screenshot - 1.jpeg"
                alt="FinTrack app"
                width={400}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Start using FinTrack today
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Track your expenses, manage budgets, and grow your savings — all in
            one simple and powerful app.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="px-8 py-6 rounded-full bg-black text-white text-base">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="px-8 py-6 rounded-full text-base"
            >
              Learn More →
            </Button>
          </div>

          {/* DOWNLOAD */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-5">
              Coming soon on your favorite platforms
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-3 px-6 py-4 rounded-xl border bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition">
                <Apple size={18} />
                <div className="text-left">
                  <p className="text-[10px] text-gray-500">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>

              <button className="flex items-center gap-3 px-6 py-4 rounded-xl border bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition">
                <Smartphone size={18} />
                <div className="text-left">
                  <p className="text-[10px] text-gray-500">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              🚀 Launching soon • Early access available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
