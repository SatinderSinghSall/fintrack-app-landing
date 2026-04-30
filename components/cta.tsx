"use client";

import { Button } from "@/components/ui/button";
import {
  AppStoreButton,
  GooglePlayButton,
} from "@/components/base/buttons/app-store-buttons";
import Image from "next/image";
import AppStatusModal from "./app-status-modal";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:44px_44px]" />

      {/* TOP HEADING (NEW) */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
          Take control of your finances
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            with FinTrack
          </span>
          <span> mobile app</span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Everything you need to track, manage, and grow your money — in one
          beautifully simple mobile app.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group w-[260px] md:w-[320px]">
            {/* Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl bg-indigo-500/20 rounded-full scale-125 transition duration-700 group-hover:scale-150" />

            {/* Floating animation */}
            <div className="animate-[float_3s_ease-in-out_infinite]">
              <div className="rounded-[36px] overflow-hidden border bg-white shadow-[0_40px_120px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-3">
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
        </div>

        {/* CONTENT */}
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
            Start using FinTrack today.
          </h3>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Track your expenses, manage budgets, and grow your savings — all in
            one simple and powerful mobile app.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <AppStatusModal>
              <Button className="px-8 py-6 rounded-full bg-black text-white text-base hover:scale-[1.03] transition">
                Get Started
              </Button>
            </AppStatusModal>

            <AppStatusModal>
              <Button
                variant="outline"
                className="px-8 py-6 rounded-full text-base hover:scale-[1.03] transition"
              >
                Learn More →
              </Button>
            </AppStatusModal>
          </div>

          {/* DOWNLOAD */}
          <div className="mt-14">
            <p className="text-sm text-gray-500 mb-6">
              Coming soon on your favorite platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
              <GooglePlayButton
                size="md"
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              />

              <AppStoreButton
                size="md"
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              />
            </div>

            <p className="mt-5 text-s text-gray-400">
              🚀 Launching soon • Early access available, contact developer.
            </p>
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION KEYFRAME */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }
      `}</style>
    </section>
  );
}
