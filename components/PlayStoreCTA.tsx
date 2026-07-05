"use client";

import { Button } from "@/components/ui/button";

import {
  ArrowUpRight,
  Download,
  ShieldCheck,
  Wallet,
  BarChart3,
  PiggyBank,
  BadgeCheck,
  Smartphone,
} from "lucide-react";

export default function PlayStoreCTA() {
  const PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN";

  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#fafafa]" />

      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl -z-20" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl -z-20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="max-w-7xl mx-auto">
        <div
          className="
            relative overflow-hidden

            rounded-[42px]

            border border-black/5

            bg-white

            shadow-[0_30px_120px_rgba(0,0,0,0.08)]

            px-8 py-14

            md:px-14 md:py-16
          "
        >
          {/* Soft Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div
                className="
                  inline-flex items-center gap-2

                  rounded-full

                  border border-green-100

                  bg-green-50

                  px-4 py-2

                  text-sm font-medium text-green-700
                "
              >
                <BadgeCheck size={16} />
                Now Live on Google Play
              </div>

              {/* Heading */}
              <h2
                className="
                  mt-7

                  text-5xl md:text-6xl

                  font-semibold

                  tracking-tight

                  leading-[1.02]

                  text-black
                "
              >
                Manage your money
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-600 bg-clip-text text-transparent">
                  smarter with FinTrack
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-7

                  max-w-xl

                  text-[17px]

                  leading-8

                  text-black/60
                "
              >
                FinTrack helps you track expenses, manage budgets, monitor
                savings goals, analyze spending habits, and take full control of
                your finances — all in one beautifully designed mobile app.
              </p>

              {/* Feature Pills */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  {
                    icon: Wallet,
                    label: "Expense Tracking",
                  },
                  {
                    icon: ArrowUpRight,
                    label: "Income Management",
                  },
                  {
                    icon: PiggyBank,
                    label: "Savings Goals",
                  },
                  {
                    icon: Download,
                    label: "Budget Planning",
                  },
                  {
                    icon: BarChart3,
                    label: "Financial Analytics",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Secure Authentication",
                  },
                  {
                    icon: BadgeCheck,
                    label: "Subscription Tracking",
                  },
                  {
                    icon: Smartphone,
                    label: "Recurring Payments",
                  },
                  {
                    icon: Wallet,
                    label: "Smart Insights",
                  },
                  {
                    icon: PiggyBank,
                    label: "Spending Reports",
                  },
                  {
                    icon: BarChart3,
                    label: "Interactive Dashboard",
                  },
                  {
                    icon: ShieldCheck,
                    label: "JWT Protected API",
                  },
                  {
                    icon: Smartphone,
                    label: "Modern Mobile UI",
                  },
                  {
                    icon: BadgeCheck,
                    label: "Play Store Published",
                  },
                  {
                    icon: ArrowUpRight,
                    label: "REST API Backend",
                  },
                  {
                    icon: Download,
                    label: "Cross Platform Ready",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
        flex items-center gap-2

        rounded-2xl

        border border-black/5

        bg-black/[0.03]

        px-4 py-3

        text-sm font-medium text-black/70

        backdrop-blur-xl

        transition-all duration-300

        hover:-translate-y-0.5
        hover:bg-black/[0.05]
      "
                  >
                    <item.icon size={16} />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={PLAYSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="
                      h-14

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

                <a
                  href="https://fintrack-app-satinder.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="
                      h-14

                      rounded-2xl

                      border-black/10

                      bg-white

                      px-8

                      text-base
                      font-medium

                      transition-all duration-300

                      hover:bg-black/[0.03]
                      hover:-translate-y-1

                      cursor-pointer
                    "
                  >
                    Visit Website
                    <ArrowUpRight className="ml-2" size={18} />
                  </Button>
                </a>
              </div>

              {/* Bottom Note */}
              <p className="mt-6 text-sm text-black/40">
                Available now on Android • Built with React Native, Expo,
                Node.js & MongoDB
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              {/* Phone Stack */}
              <div className="relative">
                {/* Back Phone */}
                <div
                  className="
                    absolute top-8 -left-12

                    rotate-[-10deg]

                    opacity-80
                  "
                >
                  <div
                    className="
                      w-[230px]

                      overflow-hidden

                      rounded-[38px]

                      border border-black/10

                      bg-white

                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    "
                  >
                    <img
                      src="/images/app-screenshots/Screen-6.jpeg"
                      alt="FinTrack Analytics"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Main Phone */}
                <div
                  className="
                    relative z-10

                    overflow-hidden

                    rounded-[42px]

                    border border-black/10

                    bg-white

                    shadow-[0_40px_120px_rgba(0,0,0,0.16)]
                  "
                >
                  <img
                    src="/images/app-screenshots/Screen-1.jpeg"
                    alt="FinTrack Dashboard"
                    className="w-[280px]"
                  />
                </div>

                {/* Front Floating Card */}
                <div
                  className="
                    absolute -bottom-6 -right-10

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

                  <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-medium">
                    ↑ +18.4% this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
