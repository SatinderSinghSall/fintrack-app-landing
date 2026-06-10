"use client";

import { useState } from "react";

import {
  Wallet,
  TrendingUp,
  PiggyBank,
  BarChart3,
  Target,
  Bell,
  ShieldCheck,
  Smartphone,
  Repeat,
  CreditCard,
  LayoutDashboard,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Track daily expenses in real-time and understand exactly where your money goes.",
    color: "from-zinc-200 to-zinc-100",
    iconColor: "text-zinc-700",
  },

  {
    icon: TrendingUp,
    title: "Income Management",
    description:
      "Monitor all income sources and maintain a complete overview of your finances.",
    color: "from-emerald-200 to-emerald-100",
    iconColor: "text-emerald-600",
  },

  {
    icon: PiggyBank,
    title: "Savings Goals",
    description:
      "Create personalized savings targets and track progress toward your financial milestones.",
    color: "from-violet-200 to-violet-100",
    iconColor: "text-violet-600",
  },

  {
    icon: Target,
    title: "Smart Budgets",
    description:
      "Set monthly budgets with intelligent insights to help control spending habits.",
    color: "from-blue-200 to-blue-100",
    iconColor: "text-blue-600",
  },

  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Visualize spending trends, savings growth, and financial performance with powerful analytics.",
    color: "from-amber-200 to-amber-100",
    iconColor: "text-amber-600",
  },

  {
    icon: Repeat,
    title: "Subscription Tracking",
    description:
      "Manage recurring subscriptions and avoid unwanted renewals with smart reminders.",
    color: "from-pink-200 to-pink-100",
    iconColor: "text-pink-600",
  },

  {
    icon: CreditCard,
    title: "Recurring Payments",
    description:
      "Track recurring bills and scheduled payments so you never miss a due date.",
    color: "from-cyan-200 to-cyan-100",
    iconColor: "text-cyan-600",
  },

  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Receive alerts for budgets, bills, subscriptions, and important financial activities.",
    color: "from-rose-200 to-rose-100",
    iconColor: "text-rose-600",
  },

  {
    icon: LayoutDashboard,
    title: "Interactive Dashboard",
    description:
      "Access a beautifully designed dashboard with instant financial summaries and insights.",
    color: "from-indigo-200 to-indigo-100",
    iconColor: "text-indigo-600",
  },

  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT-based authentication and secure backend systems to keep your financial data protected.",
    color: "from-green-200 to-green-100",
    iconColor: "text-green-700",
  },

  {
    icon: Smartphone,
    title: "Modern Mobile Experience",
    description:
      "Built with React Native and Expo for a fast, smooth, and native mobile experience.",
    color: "from-sky-200 to-sky-100",
    iconColor: "text-sky-600",
  },

  {
    icon: BadgeCheck,
    title: "Production Ready",
    description:
      "Published on Google Play Store with scalable backend architecture and production deployment.",
    color: "from-orange-200 to-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" className="relative overflow-hidden py-36 px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-zinc-50 to-white" />

      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-indigo-500/10 blur-[160px] -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-28 text-center">
          <div
            className="
              inline-flex items-center gap-2

              rounded-full

              border border-indigo-100

              bg-indigo-50

              px-4 py-2

              text-sm font-medium text-indigo-700
            "
          >
            🚀 Powerful Personal Finance Tools
          </div>

          <h2
            className="
              mt-8

              text-4xl md:text-5xl lg:text-6xl

              font-semibold

              tracking-tight

              leading-[1.05]
            "
          >
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              manage your finances
            </span>
          </h2>

          <p
            className="
              mx-auto mt-7

              max-w-3xl

              text-lg

              leading-8

              text-black/60
            "
          >
            FinTrack combines expense tracking, budgeting, analytics,
            subscriptions, savings goals, and smart financial insights into one
            seamless mobile experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
            >
              {/* Hover Glow */}
              <div
                className={`
                  absolute inset-0 rounded-[32px]

                  bg-gradient-to-b
                  from-indigo-500/10
                  to-transparent

                  blur-xl

                  transition-opacity duration-500

                  ${hovered === index ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* Card */}
              <div
                className="
                  relative h-full overflow-hidden

                  rounded-[32px]

                  border border-black/5

                  bg-white/80

                  p-8

                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]

                  backdrop-blur-2xl

                  transition-all duration-500

                  group-hover:-translate-y-2
                  group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                "
              >
                {/* Gradient Overlay */}
                <div
                  className={`
                    pointer-events-none absolute inset-0 rounded-[32px]

                    transition-opacity duration-500

                    ${hovered === index ? "opacity-100" : "opacity-0"}
                  `}
                  style={{
                    background:
                      "radial-gradient(600px circle at top, rgba(99,102,241,0.08), transparent 40%)",
                  }}
                />

                {/* Icon */}
                <div
                  className={`
                    relative z-10

                    mb-7

                    flex h-16 w-16 items-center justify-center

                    rounded-3xl

                    bg-gradient-to-b ${feature.color}

                    shadow-inner
                  `}
                >
                  <feature.icon
                    className={`
                      h-7 w-7

                      ${feature.iconColor}

                      transition-transform duration-300

                      group-hover:scale-110
                    `}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="
                      text-2xl

                      font-semibold

                      tracking-tight

                      text-black
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      text-[15px]

                      leading-7

                      text-black/60
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0

                    h-[2px]

                    scale-x-0

                    bg-gradient-to-r
                    from-indigo-500
                    via-blue-500
                    to-violet-500

                    transition-transform duration-500

                    group-hover:scale-x-100
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
