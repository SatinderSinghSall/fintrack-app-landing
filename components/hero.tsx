"use client";

import { Button } from "@/components/ui/button";
import { Wallet, Star } from "lucide-react";
import { useEffect, useState } from "react";

import AppStatusModal from "./app-status-modal";
import AppPosterModal from "./app-poster-modal";
import Image from "next/image";

const screenshots = [
  "/images/app-screenshots/Screen-1.jpeg",
  "/images/app-screenshots/Screen-2.jpeg",
  "/images/app-screenshots/Screen-6.jpeg",
  "/images/app-screenshots/Screen-14.jpeg",
  "/images/app-screenshots/Screen-13.jpeg",
  "/images/app-screenshots/Screen-7.jpeg",
  "/images/app-screenshots/Screen-5.jpeg",
];

export default function Hero() {
  const [posterOpen, setPosterOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-32 lg:pt-40 pb-24 px-6">
        {/* Background */}
        <div className="absolute inset-0 -z-30 bg-gradient-to-b from-white via-slate-50 to-white" />

        {/* Grid */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] opacity-60" />

        {/* Purple Glow */}
        <div className="absolute left-1/2 top-[-250px] -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/10 blur-[180px] -z-10" />

        {/* Blue Glow */}
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* LEFT SIDE */}

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/80 backdrop-blur-md shadow-sm">
                <Wallet size={16} />

                <span className="text-sm font-medium text-gray-700">
                  Smart Personal Finance Mobile App
                </span>
              </div>

              <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.02]">
                Manage Your Money
                <span className="block mt-2 text-black">
                  Smarter
                  <span className="relative inline-block ml-3">
                    with FinTrack
                    <span className="absolute left-0 bottom-2 h-3 w-full bg-violet-200 rounded-md -rotate-1 -z-10" />
                  </span>
                </span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Track expenses, manage budgets, analyze spending, and grow your
                savings with one beautifully designed finance app.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppStatusModal>
                  <Button className="h-14 px-9 rounded-full text-lg shadow-xl cursor-pointer">
                    Get Started
                  </Button>
                </AppStatusModal>

                <AppStatusModal>
                  <Button
                    variant="outline"
                    className="h-14 px-9 rounded-full text-lg cursor-pointer"
                  >
                    Learn More
                  </Button>
                </AppStatusModal>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/80?img=${i}`}
                      className="w-11 h-11 rounded-full border-2 border-white shadow"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Star className="fill-yellow-400 text-yellow-400" size={18} />

                  <span className="font-semibold">4.8</span>

                  <span className="text-gray-500">Loved by early users</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}

              <div className="absolute w-[420px] h-[420px] rounded-full bg-violet-500/15 blur-[100px]" />

              <div className="absolute w-[320px] h-[320px] rounded-full bg-sky-500/15 blur-[90px] top-20 right-10" />

              {/* Floating Card */}

              <div
                className="
                  relative
                  z-10

                  animate-[float_6s_ease-in-out_infinite]
                "
              >
                {/* Glass Shadow */}

                <div
                  className="
                    absolute
                    inset-0

                    rounded-[55px]

                    bg-gradient-to-br
                    from-violet-500/10
                    via-transparent
                    to-blue-500/10

                    blur-2xl
                    scale-110
                  "
                />

                {/* Phone */}

                <div
                  className="
                    relative

                    w-[300px]
                    sm:w-[340px]
                    lg:w-[360px]
                    xl:w-[390px]

                    rounded-[55px]

                    bg-[#111]

                    p-3

                    shadow-[0_50px_120px_rgba(0,0,0,.30)]

                    ring-1
                    ring-black/10
                  "
                >
                  {/* Dynamic Island */}

                  <div
                    className="
                    absolute
                    top-10
                    left-1/2
                    -translate-x-1/2

                    w-36
                    h-8

                    rounded-full
                    bg-black

                    z-20
                  "
                  />

                  <div className="relative aspect-[9/19.5] overflow-hidden rounded-[42px]">
                    {screenshots.map((src, index) => (
                      <Image
                        key={src}
                        src={src}
                        alt="FinTrack Screenshot"
                        width={420}
                        height={900}
                        priority={index === 0}
                        className={`
                          absolute
                          top-3
                          left-3
                          right-3
                          bottom-3

                          w-[calc(100%-24px)]
                          h-[calc(100%-24px)]

                          rounded-[42px]

                          object-cover

                          transition-all
                          duration-700

                          ${
                            currentImage === index
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-105"
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Cards */}

                <div
                  className="
                    absolute
                    -left-12
                    top-28

                    rounded-2xl

                    bg-white/90
                    backdrop-blur-xl

                    px-5
                    py-3

                    shadow-xl

                    border
                  "
                >
                  <p className="text-xs text-gray-500">Total Savings</p>

                  <p className="font-bold text-lg">₹24,500</p>
                </div>

                <div
                  className="
                    absolute

                    -right-10

                    bottom-24

                    rounded-2xl

                    bg-white/90

                    backdrop-blur-xl

                    px-5
                    py-3

                    shadow-xl

                    border
                  "
                >
                  <p className="text-xs text-gray-500">Monthly Budget</p>

                  <p className="font-bold text-lg">₹50,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Poster */}

          <div className="mt-28 flex justify-center">
            <img
              src="/images/app-screenshots/app-banner.png"
              alt="FinTrack Poster"
              onClick={() => setPosterOpen(true)}
              className="
                w-full
                max-w-6xl

                rounded-[32px]

                cursor-pointer

                shadow-[0_40px_120px_rgba(0,0,0,.18)]

                transition-all

                duration-500

                hover:scale-[1.015]

                hover:-translate-y-2
              "
            />
          </div>
        </div>

        <AppPosterModal
          open={posterOpen}
          onClose={() => setPosterOpen(false)}
          image="/images/app-screenshots/app-banner.png"
        />
      </section>
    </>
  );
}
