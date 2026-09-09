import type { Metadata } from "next";
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
  Megaphone,
  Lightbulb,
  MessageSquare,
  ClipboardList,
  Settings,
  Database,
  Trash2,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TrustSection from "@/components/TrustSection";
import DeveloperCredit from "@/components/developer-credit";
import GooglePlayCTA from "@/components/GooglePlayCTA";

const SITE_URL = "https://fintrack-app-satinder.vercel.app";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
const DEVELOPER_NAME = "Satinder Singh Sall";
const DEVELOPER_URL = "https://satinder-portfolio.vercel.app/";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp";

export const metadata: Metadata = {
  title:
    "FinTrack Features — Expense Tracking, Budgets, Savings & Financial Analytics | By - Satinder Singh Sall",

  description:
    "Explore FinTrack features including expense tracking, income management, savings goals, smart budgets, financial analytics, subscription tracking, recurring payments, reminders, secure authentication, and a modern mobile experience. Developed by Satinder Singh Sall.",

  keywords: [
    "FinTrack features",
    "FinTrack app features",
    "FinTrack expense tracker",
    "expense tracker app",
    "budget tracker app",
    "personal finance app",
    "money management app",
    "budgeting app",
    "expense management app",
    "income management app",
    "savings goals app",
    "savings tracker",
    "financial analytics app",
    "subscription tracker",
    "recurring payment tracker",
    "finance reminders",
    "secure finance app",
    "React Native finance app",
    "FinTrack Android app",
    "Satinder Singh Sall",
    "FinTrack developed by Satinder Singh Sall",
  ],

  authors: [
    {
      name: DEVELOPER_NAME,
      url: DEVELOPER_URL,
    },
  ],

  creator: DEVELOPER_NAME,

  publisher: "FinTrack",

  category: "finance",

  alternates: {
    canonical: "/features",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "FinTrack Features — Smart Tools for Personal Finance Management",

    description:
      "Discover FinTrack's tools for tracking expenses, managing budgets, monitoring savings, analyzing finances, managing subscriptions, and more. Developed by Satinder Singh Sall.",

    url: `${SITE_URL}/features`,

    siteName: "FinTrack",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "FinTrack personal finance app features developed by Satinder Singh Sall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "FinTrack Features — Expense Tracking, Budgets & Financial Analytics",

    description:
      "Explore FinTrack's personal finance features for expenses, budgets, savings, analytics, subscriptions, and more.",

    images: [OG_IMAGE_URL],

    creator: "@SallSatinder",
  },
};

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
    title: "Subscription Management",
    description:
      "Manage recurring subscriptions, track renewal dates, and stay informed about upcoming renewals.",
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
    icon: ClipboardList,
    title: "Transaction History",
    description:
      "View and review your financial transactions in one organized place for a clearer picture of your activity.",
    color: "from-slate-200 to-slate-100",
    iconColor: "text-slate-700",
  },

  {
    icon: Megaphone,
    title: "In-App Announcements",
    description:
      "Stay informed with important FinTrack updates, news, announcements, and new feature releases.",
    color: "from-purple-200 to-purple-100",
    iconColor: "text-purple-600",
  },

  {
    icon: Lightbulb,
    title: "Financial Tips & Learning Hub",
    description:
      "Discover useful financial tips, guides, and educational content to build better money habits.",
    color: "from-yellow-200 to-yellow-100",
    iconColor: "text-yellow-600",
  },

  {
    icon: MessageSquare,
    title: "Feedback & Support",
    description:
      "Share feedback, report issues, and keep track of your submitted feedback directly through FinTrack.",
    color: "from-teal-200 to-teal-100",
    iconColor: "text-teal-600",
  },

  {
    icon: Bell,
    title: "Notifications",
    description:
      "Stay up to date with important reminders, financial activities, subscription updates, and app notifications.",
    color: "from-red-200 to-red-100",
    iconColor: "text-red-600",
  },

  {
    icon: Settings,
    title: "Account & App Settings",
    description:
      "Manage your account, preferences, and FinTrack app settings from one convenient place.",
    color: "from-gray-200 to-gray-100",
    iconColor: "text-gray-700",
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
    icon: Database,
    title: "Secure Backend & Database",
    description:
      "Built with a secure backend architecture, authenticated APIs, protected user data, and a reliable database system.",
    color: "from-blue-200 to-blue-100",
    iconColor: "text-blue-700",
  },

  {
    icon: Trash2,
    title: "Account Deletion & Privacy",
    description:
      "Manage your account and access dedicated privacy and account deletion options when needed.",
    color: "from-neutral-200 to-neutral-100",
    iconColor: "text-neutral-700",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/features#webpage`,
      url: `${SITE_URL}/features`,
      name: "FinTrack Features — Expense Tracking, Budgets, Savings & Financial Analytics",
      description:
        "Explore the features available in FinTrack, a personal finance and expense tracking application developed by Satinder Singh Sall.",
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
        "Expense Tracking Applications",
        "Budgeting Applications",
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
        "FinTrack is a personal finance and budgeting application developed by Satinder Singh Sall for tracking expenses, managing budgets, monitoring savings, income, and subscriptions.",
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

export default function Features() {
  return (
    <>
      <Navbar />

      <section id="features" className="relative overflow-hidden py-36 px-6">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-zinc-50 to-white" />

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-indigo-500/10 blur-[160px] -z-10" />

        <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="mx-auto max-w-7xl">
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
              subscriptions, savings goals, and smart financial insights into
              one seamless mobile experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className="
                  absolute inset-0 rounded-[32px]
                  bg-gradient-to-b
                  from-indigo-500/10
                  to-transparent
                  blur-xl
                  transition-opacity duration-500
                  opacity-0
                  group-hover:opacity-100
                "
                />

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
                  <div
                    className="
                    pointer-events-none absolute inset-0 rounded-[32px]
                    transition-opacity duration-500
                    opacity-0
                    group-hover:opacity-100
                  "
                    style={{
                      background:
                        "radial-gradient(600px circle at top, rgba(99,102,241,0.08), transparent 40%)",
                    }}
                  />

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

      <TrustSection />
      <GooglePlayCTA />

      <DeveloperCredit />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
