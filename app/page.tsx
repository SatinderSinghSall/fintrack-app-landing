import type { Metadata } from "next";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Screenshots from "@/components/screenshots";
import DeveloperCredit from "@/components/developer-credit";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import GooglePlayCTA from "@/components/GooglePlayCTA";
import TrustSection from "@/components/TrustSection";
import PlayStoreCTA from "@/components/PlayStoreCTA";
import SubscriptionFeatureCTA from "@/components/subscription-feature-cta";

const SITE_URL = "https://fintrack-app-satinder.vercel.app";

const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

const FINTRACK_LOGO_URL = `${SITE_URL}/images/icon-fintrack.png`;

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp";

const DEVELOPER_NAME = "Satinder Singh Sall";

const DEVELOPER_URL = "https://satinder-portfolio.vercel.app/";

export const metadata: Metadata = {
  title:
    "FinTrack — Smart Personal Finance, Budget & Expense Tracker App | Developed by Satinder Singh Sall",

  description:
    "FinTrack is a modern personal finance, budgeting, savings, income, subscription, and expense tracker app developed by Satinder Singh Sall. Manage your money, track expenses, plan budgets, and understand your finances with clear insights.",

  keywords: [
    "FinTrack",
    "FinTrack app",
    "FinTrack finance app",
    "FinTrack expense tracker",
    "expense tracker app",
    "budget tracker app",
    "personal finance app",
    "money management app",
    "budgeting app",
    "expense management app",
    "savings tracker",
    "income tracker",
    "subscription tracker",
    "finance app",
    "Satinder Singh Sall",
    "FinTrack Satinder Singh Sall",
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
    canonical: "/",
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
    title:
      "FinTrack — Smart Personal Finance & Expense Tracker | Developed by Satinder Singh Sall",

    description:
      "Manage expenses, budgets, savings, income, and subscriptions with FinTrack — a personal finance app developed by Satinder Singh Sall.",

    url: SITE_URL,

    siteName: "FinTrack",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "FinTrack — Smart Personal Finance and Expense Tracker App developed by Satinder Singh Sall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "FinTrack — Smart Personal Finance & Expense Tracker | Satinder Singh Sall",

    description:
      "Track expenses, manage budgets, monitor savings, income, and subscriptions with FinTrack, developed by Satinder Singh Sall.",

    images: [OG_IMAGE_URL],

    creator: "@SallSatinder",
  },
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "FinTrack",
      alternateName: "FinTrack — Smart Personal Finance & Expense Tracker",
      url: SITE_URL,
      description:
        "Official website of FinTrack, a personal finance app for tracking expenses, managing budgets, monitoring savings, income, and subscriptions.",
      inLanguage: "en-IN",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },

    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "FinTrack",
      alternateName: "FinTrack Finance App",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: FINTRACK_LOGO_URL,
      },
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
        "FinTrack is a personal finance and budgeting application developed by Satinder Singh Sall that helps users track expenses, manage budgets, monitor savings, income, and subscriptions.",
      image: OG_IMAGE_URL,
      creator: {
        "@id": `${SITE_URL}/#developer`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      downloadUrl: PLAY_STORE_URL,
      installUrl: PLAY_STORE_URL,
    },
  ],
};

export default function Home() {
  return (
    <>
      <main className="gradient min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <Screenshots />
        <PlayStoreCTA />
        <SubscriptionFeatureCTA />
        <Pricing />
        <Testimonials />
        <CTA />
        <TrustSection />
        <GooglePlayCTA />
        <DeveloperCredit />
        <Footer />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
