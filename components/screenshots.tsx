"use client";

import Image from "next/image";

const screenshots = [
  "/images/app-screenshots/Screen-1.jpeg",
  "/images/app-screenshots/Screen-2.jpeg",
  "/images/app-screenshots/Screen-3.jpeg",
  "/images/app-screenshots/Screen-4.jpeg",
  "/images/app-screenshots/Screen-5.jpeg",
  "/images/app-screenshots/Screen-6.jpeg",
  "/images/app-screenshots/Screen-7.jpeg",
  "/images/app-screenshots/Screen-8.jpeg",
  "/images/app-screenshots/Screen-9.jpeg",
  "/images/app-screenshots/Screen-10.jpeg",
  "/images/app-screenshots/Screen-11.jpeg",
  "/images/app-screenshots/Screen-12.jpeg",
  "/images/app-screenshots/Screen-13.jpeg",
  "/images/app-screenshots/Screen-14.jpeg",
  "/images/app-screenshots/Screen-15.jpeg",
  "/images/app-screenshots/Screen-16.jpeg",
  "/images/app-screenshots/Screen-17.jpeg",
  "/images/app-screenshots/Screen-18.jpeg",
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

        {/* Download CTA */}
        <div className="mt-32">
          <div
            className="
      relative
      overflow-hidden

      mx-auto
      max-w-6xl

      rounded-[40px]

      border
      border-white/10

      bg-gradient-to-br
      from-[#020617]
      via-[#0B1120]
      to-black

      px-8
      py-16

      md:px-16
      md:py-20

      shadow-[0_40px_120px_rgba(0,0,0,.28)]
    "
          >
            {/* Background Glow */}
            <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />

            <div className="relative z-10 text-center">
              {/* Badge */}

              <span
                className="
          inline-flex
          items-center

          rounded-full

          border
          border-white/10

          bg-white/5

          px-5
          py-2

          text-sm
          font-medium

          text-neutral-200

          backdrop-blur-xl
        "
              >
                Available Now on Google Play
              </span>

              {/* Heading */}

              <h3 className="mt-8 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Download FinTrack Today
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
                Take control of your finances with smart expense tracking,
                budgeting, subscriptions, savings goals and beautiful analytics
                — all inside one premium mobile experience.
              </p>

              {/* CTA */}

              <div className="mt-12">
                <a
                  href="https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            inline-flex

            items-center
            gap-5

            rounded-full

            bg-white

            px-10
            py-5

            text-black

            shadow-2xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:scale-105
          "
                >
                  <div
                    className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              from-green-400
              to-emerald-600

              text-3xl
            "
                  >
                    ▶
                  </div>

                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                      GET IT ON
                    </p>

                    <p className="text-2xl font-bold">Google Play</p>
                  </div>
                </a>
              </div>

              {/* Stats */}

              <div className="mt-14 grid grid-cols-2 gap-6 text-left md:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-bold text-white">4.8★</p>
                  <p className="mt-1 text-sm text-neutral-400">User Rating</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-bold text-white">20+</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Beautiful Screens
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Secure & Private
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Free</p>
                  <p className="mt-1 text-sm text-neutral-400">Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
