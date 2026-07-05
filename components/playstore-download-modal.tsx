"use client";

import { useEffect, useState } from "react";

import {
  Download,
  ShieldCheck,
  Wallet,
  BarChart3,
  PiggyBank,
  X,
  Star,
  Bell,
  Repeat,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN";

const features = [
  {
    icon: Wallet,
    label: "Expense Tracking",
  },

  {
    icon: PiggyBank,
    label: "Savings Goals",
  },

  {
    icon: BarChart3,
    label: "Financial Analytics",
  },

  {
    icon: Repeat,
    label: "Subscriptions",
  },

  {
    icon: Bell,
    label: "Smart Reminders",
  },

  {
    icon: ShieldCheck,
    label: "Secure Authentication",
  },
];

export default function PlayStoreDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);

  // ================= OPEN MODAL =================
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // ================= LOCK SCROLL =================
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ================= CLOSE =================
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[99999]

        flex items-center justify-center

        overflow-y-auto

        bg-black/40

        px-4 py-4 sm:px-6

        backdrop-blur-xl

        animate-in fade-in duration-500
      "
    >
      {/* ================= MODAL ================= */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          w-full

          max-w-[1180px]

          max-h-[95vh]

          overflow-y-auto
          overflow-x-hidden

          rounded-[28px] sm:rounded-[36px]

          border border-white/20

          bg-white/[0.88]

          shadow-[0_40px_140px_rgba(0,0,0,0.16)]

          backdrop-blur-3xl

          animate-in
          zoom-in-95
          slide-in-from-bottom-4
          duration-500
        "
      >
        {/* Ambient Glow */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        {/* ================= GRID ================= */}
        <div
          className="
            grid

            lg:grid-cols-[1.05fr_0.95fr]

            min-h-[760px]

            xl:min-h-[820px]
          "
        >
          {/* ================= LEFT ================= */}
          <div
            className="
              relative

              px-6 py-7

              pb-20

              sm:px-8 sm:py-8

              md:px-10 md:py-10

              lg:px-14 lg:py-14 lg:pb-14

              xl:px-16 xl:py-16
            "
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="
                absolute right-5 top-5 z-20

                flex h-11 w-11 items-center justify-center

                rounded-full

                bg-black/[0.04]

                text-black/45

                transition-all duration-300

                hover:bg-black/[0.08]
                hover:text-black

                cursor-pointer
              "
            >
              <X size={20} />
            </button>

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2

                rounded-full

                border border-green-100

                bg-green-50

                px-4 py-2

                text-xs font-semibold

                uppercase

                tracking-[0.18em]

                text-green-700
              "
            >
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Now Live on Google Play
            </div>

            {/* Heading */}
            <h2
              className="
                mt-8

                text-[42px]

                leading-[0.95]

                font-semibold

                tracking-tight

                text-black

                sm:text-5xl

                md:text-6xl

                xl:text-[78px]
              "
            >
              Download
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-600 bg-clip-text text-transparent">
                FinTrack
              </span>
              <br />
              today.
            </h2>

            {/* Description */}
            <p
              className="
                mt-7

                max-w-[560px]

                text-[15px]
                sm:text-[16px]

                leading-7 sm:leading-8

                text-black/60
              "
            >
              Manage expenses, budgets, subscriptions, savings goals, and
              financial analytics in one beautifully designed mobile experience.
            </p>

            {/* ================= MOBILE IMAGE ================= */}
            <div className="relative mt-12 flex justify-center lg:hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[260px] w-[260px] rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              <div className="relative">
                {/* Back Image */}
                <div
                  className="
                    absolute -left-12 top-8

                    rotate-[-10deg]

                    opacity-90
                  "
                >
                  <div
                    className="
                      overflow-hidden

                      rounded-[24px]

                      border border-black/10

                      bg-white

                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    "
                  >
                    <img
                      src="/images/screenshots/screenshot - 3.jpeg"
                      alt="FinTrack Analytics"
                      className="w-[140px]"
                    />
                  </div>
                </div>

                {/* Main */}
                <div
                  className="
                    relative z-10

                    overflow-hidden

                    rounded-[30px]

                    border border-black/10

                    bg-white

                    shadow-[0_30px_90px_rgba(0,0,0,0.16)]
                  "
                >
                  <img
                    src="/images/screenshots/screenshot - 1.jpeg"
                    alt="FinTrack Dashboard"
                    className="w-[190px]"
                  />
                </div>
              </div>
            </div>

            {/* ================= FEATURES ================= */}
            <div
              className="
                mt-12

                grid

                grid-cols-1

                sm:grid-cols-2

                gap-3

                max-w-[520px]
              "
            >
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-3

                    rounded-2xl

                    border border-black/5

                    bg-white/70

                    px-4 py-4

                    text-sm font-medium text-black/70

                    shadow-[0_6px_24px_rgba(0,0,0,0.04)]

                    backdrop-blur-xl

                    transition-all duration-300

                    hover:-translate-y-0.5
                  "
                >
                  <item.icon size={16} />

                  {item.label}
                </div>
              ))}
            </div>

            {/* ================= CTA ================= */}
            <div
              className="
                mt-10

                flex

                flex-col

                md:flex-row

                gap-4

                w-full

                max-w-[520px]
              "
            >
              <a
                href={PLAYSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button
                  className="
                    h-14

                    w-full md:w-auto

                    rounded-2xl

                    bg-black

                    px-8

                    text-base
                    font-medium
                    text-white

                    shadow-[0_16px_40px_rgba(0,0,0,0.18)]

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:bg-zinc-900
                    hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)]

                    cursor-pointer
                  "
                >
                  Download App
                  <Download className="ml-2" size={18} />
                </Button>
              </a>

              <Button
                variant="outline"
                onClick={handleClose}
                className="
                  h-14

                  rounded-2xl

                  border-black/10

                  bg-white/70

                  px-8

                  text-base
                  font-medium

                  backdrop-blur-xl

                  transition-all duration-300

                  hover:bg-white

                  cursor-pointer
                "
              >
                Maybe later
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center gap-2 text-sm text-black/45">
              <Star className="fill-yellow-400 text-yellow-400" size={15} />
              Published on Google Play Store
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
              relative

              hidden lg:flex

              items-center justify-center

              overflow-hidden

              border-l border-black/5

              bg-gradient-to-br
              from-indigo-50
              via-white
              to-violet-50

              px-6 py-10

              sm:px-10

              lg:p-10
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_55%)]" />

            {/* Devices */}
            <div
              className="
                relative

                flex

                items-center justify-center

                w-full
              "
            >
              {/* Back Device */}
              <div
                className="
                  absolute

                  left-0

                  top-8

                  rotate-[-12deg]

                  opacity-90
                "
              >
                <div
                  className="
                    overflow-hidden

                    rounded-[28px]

                    border border-black/10

                    bg-white

                    shadow-[0_20px_80px_rgba(0,0,0,0.10)]
                  "
                >
                  <img
                    src="/images/app-screenshots/Screen-6.jpeg"
                    alt="FinTrack Analytics"
                    className="w-[180px] xl:w-[240px]"
                  />
                </div>
              </div>

              {/* Main Device */}
              <div
                className="
                  relative z-10

                  overflow-hidden

                  rounded-[42px]

                  border border-black/10

                  bg-white

                  shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                "
              >
                <img
                  src="/images/app-screenshots/Screen-1.jpeg"
                  alt="FinTrack Dashboard"
                  className="
                    w-[280px]

                    xl:w-[360px]
                  "
                />
              </div>

              {/* Floating Card */}
              <div
                className="
                  absolute

                  -bottom-8

                  right-0

                  z-20

                  rounded-3xl

                  border border-black/5

                  bg-white/90

                  p-5

                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]

                  backdrop-blur-2xl
                "
              >
                <p className="text-sm text-black/50">Monthly Savings</p>

                <h4 className="mt-1 text-3xl font-semibold">₹24,340</h4>

                <div className="mt-3 text-sm font-medium text-green-600">
                  ↑ +18.4% this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
