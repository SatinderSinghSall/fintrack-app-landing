"use client";

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
    color: "from-green-200 to-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: PiggyBank,
    title: "Savings Goals",
    description:
      "Set savings targets and track progress to achieve your financial goals faster.",
    color: "from-purple-200 to-purple-100",
    iconColor: "text-purple-600",
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
    color: "from-orange-200 to-orange-100",
    iconColor: "text-orange-600",
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
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              manage your finances
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-xl mx-auto text-lg">
            Powerful tools to track, save, and grow your money effortlessly with
            FinTrack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-gray-200 to-transparent hover:from-black/20 transition-all duration-300"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl bg-white/70 backdrop-blur-xl p-6 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-b ${f.color}`}
                >
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {f.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {f.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-transparent via-white/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
