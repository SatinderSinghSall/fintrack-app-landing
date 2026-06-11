"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BellRing,
  CreditCard,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const screenshots = [
  "/images/screenshots/subscription-img-4 (2).jpg",
  "/images/screenshots/subscription-img-4 (1).jpg",
  "/images/screenshots/subscription-img-4 (3).jpg",
  "/images/screenshots/subscription-img-4 (4).jpg",
  "/images/screenshots/subscription-img-4 (5).jpg",
];

export default function SubscriptionFeatureCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/40 to-white" />

      {/* DECORATION */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* TOP CONTENT */}
        <div className="mx-auto max-w-4xl text-center">
          {/* BADGE */}
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2">
            <Sparkles className="mr-2 h-4 w-4 text-indigo-700" />

            <span className="text-sm font-black tracking-wide text-indigo-700">
              BRAND NEW FEATURE
            </span>
          </div>

          {/* TITLE */}
          <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight text-zinc-900 md:text-7xl">
            Meet the new{" "}
            <span className="text-indigo-600">Subscription Manager</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-600 md:text-xl">
            Track recurring bills, manage upcoming renewals, monitor monthly
            spending and organize all your subscriptions in one premium
            dashboard inside FinTrack.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* CARD */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
              <BellRing className="h-6 w-6 text-indigo-600" />
            </div>

            <h3 className="text-xl font-black text-zinc-900">Smart Alerts</h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Never miss upcoming renewals and recurring payments again.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>

            <h3 className="text-xl font-black text-zinc-900">Analytics</h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Understand your monthly and yearly subscription spending.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
              <CreditCard className="h-6 w-6 text-pink-600" />
            </div>

            <h3 className="text-xl font-black text-zinc-900">
              Recurring Bills
            </h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Organize Netflix, Spotify, AWS and all recurring expenses.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
              <Sparkles className="h-6 w-6 text-orange-600" />
            </div>

            <h3 className="text-xl font-black text-zinc-900">Premium UI</h3>

            <p className="mt-3 leading-7 text-zinc-600">
              Beautiful fintech-style experience built for modern budgeting.
            </p>
          </div>
        </div>

        {/* SCREENSHOTS */}
        <div className="mt-24 overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {screenshots.map((image, index) => (
              <div
                key={index}
                className="
                  relative
                  min-w-[280px]
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-zinc-200
                  bg-white
                  shadow-xl
                  md:min-w-[340px]
                "
              >
                <Image
                  src={image}
                  alt={`Subscription Screenshot ${index + 1}`}
                  width={1080}
                  height={2400}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA BOX */}
        <div className="relative mt-28 overflow-hidden rounded-[40px] bg-zinc-950 px-8 py-16 text-center md:px-16">
          {/* GLOW */}
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4 text-indigo-300" />

              <span className="text-sm font-bold tracking-wide text-indigo-200">
                NOW AVAILABLE ON FINTRACK
              </span>
            </div>

            <h3 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
              Take control of every recurring payment.
            </h3>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
              Experience smarter subscription tracking with FinTrack’s newest
              premium feature update.
            </p>

            {/* BUTTON */}
            <div className="mt-12">
              <Link
                href="https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  rounded-2xl
                  bg-indigo-600
                  px-8
                  py-5
                  text-lg
                  font-black
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:bg-indigo-500
                "
              >
                Download FinTrack
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
