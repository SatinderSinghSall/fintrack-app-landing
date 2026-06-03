"use client";

import Image from "next/image";
import { ArrowUpRight, Download, Smartphone, Star } from "lucide-react";

const apps = [
  {
    name: "FinTrack: Expense & Budget",
    description:
      "Modern personal finance management app for tracking expenses, budgets, and savings.",
    image: "/images/icon-fintrack.png",
    link: "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp",
    badge: "Finance",
  },
  {
    name: "Course Calculator",
    description:
      "Simple and efficient GPA / course calculation app built for students.",
    image: "/images/icon-course-calculator.png",
    link: "https://play.google.com/store/apps/details?id=com.satinder.coursecalculator",
    badge: "Education",
  },
];

export default function GooglePlayCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white -z-10" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-green-500/10 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full border border-zinc-200
              bg-white px-4 py-2
              text-sm shadow-sm
            "
          >
            <Smartphone className="size-4 text-green-600" />
            Google Play Apps
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Building apps used by
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              {" "}
              real users
            </span>
            .
          </h2>

          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            Explore my published Android applications focused on productivity,
            finance, and modern mobile experiences.
          </p>
        </div>

        {/* APPS GRID */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-[36px]
                border border-zinc-200
                bg-white/80 backdrop-blur-xl
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
                hover:shadow-[0_30px_120px_rgba(0,0,0,0.14)]
                transition-all duration-500
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  bg-gradient-to-br from-green-500/5 to-emerald-500/5
                  transition-opacity duration-500
                "
              />

              {/* Badge */}
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-zinc-100
                  px-3 py-1 text-xs font-medium
                "
              >
                <Star className="size-3 text-yellow-500 fill-yellow-500" />
                {app.badge}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6 flex items-start gap-5">
                {/* Icon */}
                <div
                  className="
                    relative overflow-hidden
                    rounded-[24px]
                    border border-zinc-200
                    bg-white
                    shadow-lg
                    shrink-0
                  "
                >
                  <Image
                    src={app.image}
                    alt={app.name}
                    width={90}
                    height={90}
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {app.name}
                  </h3>

                  <p className="mt-3 text-zinc-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={app.link}
                  target="_blank"
                  className="
                    inline-flex items-center gap-2
                    rounded-2xl bg-black
                    px-5 py-3 text-sm font-medium
                    text-white
                    hover:scale-[1.03]
                    transition-all duration-300
                  "
                >
                  <Download className="size-4" />
                  View on Google Play
                </a>

                <a
                  href={app.link}
                  target="_blank"
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium text-zinc-700
                    hover:text-black transition-colors
                  "
                >
                  Open Store
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* DEVELOPER PROFILE */}
        <div
          className="
            relative overflow-hidden
            mt-20 rounded-[40px]
            border border-zinc-200
            bg-gradient-to-br from-zinc-900 to-black
            px-8 md:px-16 py-16
            text-white
          "
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-green-500/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                Google Play Developer
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Satinder Singh Sall
              </h3>

              <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
                Full-stack developer building scalable mobile apps, modern web
                platforms, and production-grade digital experiences.
              </p>
            </div>

            {/* BUTTON */}
            <div>
              <a
                href="https://play.google.com/store/apps/developer?id=Satinder+Singh+Sall"
                target="_blank"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl bg-white
                  px-7 py-4 text-sm font-semibold
                  text-black
                  hover:scale-[1.03]
                  transition-all duration-300
                  shadow-2xl
                "
              >
                Visit Google Play Profile
                <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
