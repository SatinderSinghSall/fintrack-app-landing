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

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AppStatusModal from "@/components/app-status-modal";
import TrustSection from "@/components/TrustSection";
import GooglePlayCTA from "@/components/GooglePlayCTA";
import DeveloperCredit from "@/components/developer-credit";

const SITE_URL = "https://fintrack-app-satinder.vercel.app";

const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

const DEVELOPER_NAME = "Satinder Singh Sall";

const DEVELOPER_URL = "https://satinder-portfolio.vercel.app/";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp";

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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/pricing#webpage`,
      url: `${SITE_URL}/pricing`,
      name: "FinTrack Pricing — Free, Pro & Premium Personal Finance Plans",
      description:
        "Compare FinTrack Free, Pro, and Premium plans for personal finance management, expense tracking, budgeting, analytics, savings goals, and financial insights.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#mobileapp`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "FinTrack",
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FinTrack",
      url: SITE_URL,
      founder: {
        "@id": `${SITE_URL}/#developer`,
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#developer`,
      name: DEVELOPER_NAME,
      url: DEVELOPER_URL,
      jobTitle: "Software Developer",
      sameAs: [
        "https://www.linkedin.com/in/satinder-singh-sall-b62049204",
        "https://github.com/SatinderSinghSall",
        "https://x.com/SallSatinder",
        "https://www.youtube.com/@satindersinghsall.3841",
      ],
      knowsAbout: [
        "Software Development",
        "Mobile App Development",
        "React Native",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Personal Finance Applications",
        "Budgeting Applications",
        "Expense Tracking Applications",
      ],
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#mobileapp`,
      name: "FinTrack: Expense & Budget",
      alternateName: "FinTrack",
      url: SITE_URL,
      applicationCategory: "FinanceApplication",
      applicationSubCategory: "Personal Finance",
      operatingSystem: "Android",
      description:
        "FinTrack is a personal finance application developed by Satinder Singh Sall for tracking expenses, managing budgets, monitoring savings, income, subscriptions, and financial insights.",
      image: OG_IMAGE_URL,
      creator: {
        "@id": `${SITE_URL}/#developer`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      downloadUrl: PLAY_STORE_URL,
    },
  ],
};

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <title>
        FinTrack Pricing — Free, Pro & Premium Finance Plans | By Satinder Singh
        Sall
      </title>

      <meta
        name="description"
        content="Explore FinTrack pricing plans including Free, Pro, and Premium options for expense tracking, budgeting, analytics, savings goals, financial insights, and more. Developed by Satinder Singh Sall."
      />

      <meta
        name="keywords"
        content="FinTrack pricing, FinTrack plans, FinTrack Pro, FinTrack Premium, FinTrack Free, finance app pricing, budget app pricing, expense tracker pricing, personal finance app, budgeting app, expense tracking app, Satinder Singh Sall, FinTrack developed by Satinder Singh Sall"
      />

      <meta name="author" content="Satinder Singh Sall" />

      <meta name="creator" content="Satinder Singh Sall" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link rel="canonical" href={`${SITE_URL}/pricing`} />

      <meta
        property="og:title"
        content="FinTrack Pricing — Free, Pro & Premium Finance Plans"
      />

      <meta
        property="og:description"
        content="Compare FinTrack Free, Pro, and Premium plans for expense tracking, budgeting, analytics, savings goals, and smarter personal finance management."
      />

      <meta property="og:url" content={`${SITE_URL}/pricing`} />

      <meta property="og:site_name" content="FinTrack" />

      <meta property="og:type" content="website" />

      <meta property="og:locale" content="en_IN" />

      <meta property="og:image" content={OG_IMAGE_URL} />

      <meta
        property="og:image:alt"
        content="FinTrack pricing plans developed by Satinder Singh Sall"
      />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="FinTrack Pricing — Free, Pro & Premium Finance Plans"
      />

      <meta
        name="twitter:description"
        content="Compare FinTrack pricing plans and choose the right personal finance plan for your needs."
      />

      <meta name="twitter:image" content={OG_IMAGE_URL} />

      <meta name="twitter:creator" content="@SallSatinder" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navbar />

      <section id="pricing" className="relative py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 blur-[160px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Simple, transparent pricing.
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Start free. Upgrade when you need more power.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="bg-gray-100 p-1 rounded-full flex gap-1">
                <button
                  onClick={() => setYearly(false)}
                  className={`px-4 py-2 text-sm rounded-full transition cursor-pointer ${
                    !yearly ? "bg-white shadow font-medium" : "text-gray-500"
                  }`}
                >
                  Monthly
                </button>

                <button
                  onClick={() => setYearly(true)}
                  className={`px-4 py-2 text-sm rounded-full transition cursor-pointer ${
                    yearly ? "bg-white shadow font-medium" : "text-gray-500"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Everything you need —{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  completely free
                </span>
              </h3>

              <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                Start managing your finances without paying anything. Upgrade
                only when you need more power.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {freeFeatures.map((f, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-b ${f.color}`}
                  >
                    <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                  </div>

                  <h4 className="text-sm font-semibold text-gray-900">
                    {f.title}
                  </h4>

                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="relative flex items-center justify-center mb-10">
              <div className="absolute w-full border-t border-gray-200" />

              <span className="relative bg-white px-5 text-sm text-gray-500">
                Upgrade when you need more power
              </span>
            </div>

            <p className="text-center text-gray-500 text-sm mb-6">
              Unlock advanced insights, automation, and premium features.
            </p>
          </div>

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
                  {plan.highlight && (
                    <span className="absolute top-5 right-5 text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}

                  <h3 className="text-lg font-semibold">{plan.name}</h3>

                  <p className="mt-4 text-4xl font-bold tracking-tight">
                    {yearly ? plan.yearly : plan.monthly}

                    <span className="text-sm font-medium text-gray-500">
                      /mo
                    </span>
                  </p>

                  <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-[2px]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <AppStatusModal>
                    <button
                      className={`mt-8 w-full py-3 rounded-xl text-sm font-medium transition cursor-pointer ${
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

      <TrustSection />
      <GooglePlayCTA />

      <DeveloperCredit />
      <Footer />
    </>
  );
}
