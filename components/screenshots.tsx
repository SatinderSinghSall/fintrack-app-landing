"use client";

import Image from "next/image";

const screenshots = [
  "/images/screenshots/screenshot - 1.jpeg",
  "/images/screenshots/screenshot - 2.jpeg",
  "/images/screenshots/screenshot - 3.jpeg",
  "/images/screenshots/screenshot - 4.jpeg",
  "/images/screenshots/screenshot - 5.jpeg",
  "/images/screenshots/screenshot - 6.jpeg",
  "/images/screenshots/screenshot - 7.jpeg",
  "/images/screenshots/screenshot - 8.jpeg",
  "/images/screenshots/screenshot - 9.jpeg",
  "/images/screenshots/screenshot - 10.jpeg",
  "/images/screenshots/screenshot - 11.jpeg",
];

export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="relative py-28 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden md:overflow-visible"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Edge fade (responsive + disabled on very small screens) */}
      <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          See FinTrack in action
        </h2>

        <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          A clean, intuitive experience designed mobile app to help you stay in
          control of your finances.
        </p>

        {/* GRID */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {screenshots.map((src, i) => (
            <div
              key={i}
              className={`
                group relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white
                border border-black/5
                shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all duration-500
                hover:-translate-y-2
                ${i % 2 === 0 ? "mt-4 sm:mt-6" : "mt-0"}
              `}
            >
              {/* Image */}
              <Image
                src={src}
                alt={`screenshot-${i}`}
                width={300}
                height={600}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* Inner border glow */}
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
