"use client";

import { useState } from "react";
import {
  Wallet,
  TrendingUp,
  PiggyBank,
  BarChart3,
  Target,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Track every expense in real-time and understand where your money goes daily.",
    color: "from-gray-200 to-gray-100",
    iconColor: "text-gray-700",
  },
  {
    icon: TrendingUp,
    title: "Income Management",
    description:
      "Log and monitor all income sources to get a complete financial overview.",
    color: "from-emerald-200 to-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: PiggyBank,
    title: "Savings Goals",
    description:
      "Set savings targets and track progress to achieve your financial goals faster.",
    color: "from-violet-200 to-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Target,
    title: "Smart Budgets",
    description:
      "Create monthly budgets and stay on track with intelligent spending insights.",
    color: "from-blue-200 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Visualize your finances with charts and insights to make better decisions.",
    color: "from-amber-200 to-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Get alerts for bills, budgets, and savings goals so you never miss anything.",
    color: "from-pink-200 to-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 blur-[160px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              manage your finances
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Powerful tools to track, save, and grow your money effortlessly with
            FinTrack mobile app.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              {/* Outer glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gray-200/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative h-full rounded-3xl bg-white border border-gray-200/70 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                {/* Spotlight glow */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(600px circle at center, rgba(99,102,241,0.12), transparent 40%)",
                  }}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 bg-gradient-to-b ${f.color} shadow-inner`}
                >
                  <f.icon
                    className={`w-6 h-6 ${f.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
