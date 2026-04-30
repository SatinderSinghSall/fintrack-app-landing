"use client";

import {
  Wallet,
  TrendingUp,
  BarChart3,
  Target,
  Bell,
  PiggyBank,
  Check,
} from "lucide-react";
import { useState } from "react";
import AppStatusModal from "./app-status-modal";

const freeFeatures = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    desc: "Track every expense in real-time with clarity",
    color: "from-gray-100 to-gray-50",
    iconColor: "text-gray-700",
  },
  {
    icon: TrendingUp,
    title: "Income Management",
    desc: "Monitor all income sources effortlessly",
    color: "from-green-100 to-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Basic Analytics",
    desc: "Understand your spending patterns",
    color: "from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Target,
    title: "Budget Tracking",
    desc: "Stay on track with monthly budgets",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    desc: "Never miss bills or deadlines",
    color: "from-pink-100 to-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: PiggyBank,
    title: "Savings Goals",
    desc: "Set and track your savings goals",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
];

const plans = [
  {
    name: "Free",
    monthly: "₹0",
    yearly: "₹0",
    desc: "Perfect to get started",
    features: [
      "Expense tracking",
      "Income management",
      "Basic analytics",
      "Monthly budget tracking",
      "Daily reminders",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    monthly: "₹99",
    yearly: "₹79",
    desc: "For serious money management",
    features: [
      "Everything in Free",
      "Advanced analytics & insights",
      "Unlimited budgets",
      "Smart savings goals",
      "Priority reminders",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    monthly: "₹199",
    yearly: "₹159",
    desc: "For power users",
    features: [
      "Everything in Pro",
      "AI spending insights",
      "Export reports",
      "Multi-device sync",
      "Priority support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 blur-[160px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Simple, transparent pricing.
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Start free. Upgrade when you need more power.
          </p>

          {/* TOGGLE */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-100 p-1 rounded-full flex gap-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  !yearly ? "bg-white shadow font-medium" : "text-gray-500"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  yearly ? "bg-white shadow font-medium" : "text-gray-500"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* FREE FEATURES */}
        <div className="mb-24">
          {/* Heading */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Everything you need —{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                completely free
              </span>
            </h3>

            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Start managing your finances without paying anything. Upgrade only
              when you need more power.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {freeFeatures.map((f, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-b ${f.color}`}
                >
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                </div>

                {/* Title */}
                <h4 className="text-sm font-semibold text-gray-900">
                  {f.title}
                </h4>

                {/* Desc */}
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FREE FEATURES END */}
        <div className="mb-20">
          {/* Divider */}
          <div className="relative flex items-center justify-center mb-10">
            <div className="absolute w-full border-t border-gray-200" />
            <span className="relative bg-white px-5 text-sm text-gray-500">
              Upgrade when you need more power
            </span>
          </div>

          {/* Sub CTA */}
          <p className="text-center text-gray-500 text-sm mb-6">
            Unlock advanced insights, automation, and premium features.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-[1px] ${
                plan.highlight
                  ? "bg-gradient-to-br from-indigo-500 to-purple-500"
                  : "bg-gradient-to-b from-gray-200/60 to-transparent"
              }`}
            >
              <div
                className={`h-full rounded-3xl p-8 transition-all duration-500 ${
                  plan.highlight
                    ? "bg-white shadow-[0_30px_100px_rgba(99,102,241,0.3)] scale-[1.04]"
                    : "bg-white border border-gray-200/60 shadow-sm hover:-translate-y-2 hover:shadow-xl"
                }`}
              >
                {/* Badge */}
                {plan.highlight && (
                  <span className="absolute top-5 right-5 text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}

                {/* Name */}
                <h3 className="text-lg font-semibold">{plan.name}</h3>

                {/* Price */}
                <p className="mt-4 text-4xl font-bold tracking-tight">
                  {yearly ? plan.yearly : plan.monthly}
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                </p>

                {/* Desc */}
                <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-[2px]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <AppStatusModal>
                  <button
                    className={`mt-8 w-full py-3 rounded-xl text-sm font-medium transition ${
                      plan.highlight
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    Get started
                  </button>
                </AppStatusModal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
