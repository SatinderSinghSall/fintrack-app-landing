import type { Metadata } from "next";

import DeveloperCredit from "@/components/developer-credit";
import Footer from "@/components/footer";
import GooglePlayCTA from "@/components/GooglePlayCTA";
import Navbar from "@/components/navbar";
import TrustSection from "@/components/TrustSection";
import Image from "next/image";

const SITE_URL = "https://fintrack-app-satinder.vercel.app";

const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

const DEVELOPER_NAME = "Satinder Singh Sall";

const DEVELOPER_URL = "https://satinder-portfolio.vercel.app/";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN";

const screenshots = [
  "/images/app-screenshots/Screen-1.jpeg",
  "/images/app-screenshots/Screen-2.jpeg",
  "/images/app-screenshots/Screen-3.jpeg",
  "/images/app-screenshots/Screen-4.jpeg",
  "/images/app-screenshots/Screen-5.jpeg",
  "/images/app-screenshots/Screen-6.jpeg",
  "/images/app-screenshots/Screen-7.jpeg",
  "/images/app-screenshots/Screen-8.jpeg",
  "/images/app-screenshots/Screen-9.jpeg",
  "/images/app-screenshots/Screen-10.jpeg",
  "/images/app-screenshots/Screen-11.jpeg",
  "/images/app-screenshots/Screen-12.jpeg",
  "/images/app-screenshots/Screen-13.jpeg",
  "/images/app-screenshots/Screen-14.jpeg",
  "/images/app-screenshots/Screen-15.jpeg",
  "/images/app-screenshots/Screen-16.jpeg",
  "/images/app-screenshots/Screen-17.jpeg",
  "/images/app-screenshots/Screen-18.jpeg",
];

export const metadata: Metadata = {
  title: "FinTrack App Screenshots — See the Personal Finance App in Action",

  description:
    "Explore FinTrack app screenshots and see the personal finance experience in action. Discover expense tracking, budgeting, savings goals, analytics, subscriptions, reminders, and more. Developed by Satinder Singh Sall.",

  keywords: [
    "FinTrack screenshots",
    "FinTrack app screenshots",
    "FinTrack mobile app",
    "FinTrack finance app",
    "FinTrack expense tracker",
    "expense tracker app screenshots",
    "budget app screenshots",
    "personal finance app screenshots",
    "finance app UI",
    "budget tracker app",
    "expense tracking app",
    "savings tracker app",
    "financial analytics app",
    "FinTrack Android app",
    "FinTrack Google Play",
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
    canonical: "/screenshots",
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
      "FinTrack App Screenshots — Personal Finance, Budget & Expense Tracker",

    description:
      "See FinTrack in action through real app screenshots showcasing expense tracking, budgets, savings, analytics, subscriptions, and more.",

    url: `${SITE_URL}/screenshots`,

    siteName: "FinTrack",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "FinTrack personal finance and expense tracker app screenshots developed by Satinder Singh Sall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FinTrack App Screenshots — See the Finance App in Action",

    description:
      "Explore FinTrack screenshots and discover the app's expense tracking, budgeting, savings, analytics, and subscription features.",

    images: [OG_IMAGE_URL],

    creator: "@SallSatinder",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/screenshots#webpage`,
      url: `${SITE_URL}/screenshots`,
      name: "FinTrack App Screenshots — See the Personal Finance App in Action",
      description:
        "Explore screenshots of FinTrack, a personal finance and expense tracking application developed by Satinder Singh Sall.",
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
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/icon-fintrack.png`,
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
        "FinTrack is a personal finance and budgeting application developed by Satinder Singh Sall for tracking expenses, managing budgets, monitoring savings, income, subscriptions, and financial insights.",
      image: OG_IMAGE_URL,
      creator: {
        "@id": `${SITE_URL}/#developer`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      downloadUrl: PLAY_STORE_URL,
    },

    {
      "@type": "ImageGallery",
      "@id": `${SITE_URL}/screenshots#gallery`,
      name: "FinTrack App Screenshots",
      description:
        "A gallery of FinTrack personal finance app screenshots showing the mobile application's features and user interface.",
      url: `${SITE_URL}/screenshots`,
      creator: {
        "@id": `${SITE_URL}/#developer`,
      },
      about: {
        "@id": `${SITE_URL}/#mobileapp`,
      },
    },
  ],
};

export default function Screenshots() {
  return (
    <>
      <Navbar />

      <section
        id="screenshots"
        className="relative py-28 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden md:overflow-visible"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10" />

        <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            See FinTrack in action
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            A clean, intuitive experience designed mobile app to help you stay
            in control of your finances.
          </p>

          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {screenshots.map((src, i) => (
              <div
                key={i}
                className={`
                group relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white
                border border-black/5
                shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all duration-500
                hover:-translate-y-2
                ${i % 2 === 0 ? "mt-4 sm:mt-6" : "mt-0"}
              `}
              >
                <Image
                  src={src}
                  alt={`FinTrack personal finance app screenshot ${i + 1}`}
                  width={300}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="mt-32">
            <div
              className="
      relative
      overflow-hidden
      mx-auto
      max-w-6xl
      rounded-[40px]
      border
      border-white/10
      bg-gradient-to-br
      from-[#020617]
      via-[#0B1120]
      to-black
      px-8
      py-16
      md:px-16
      md:py-20
      shadow-[0_40px_120px_rgba(0,0,0,.28)]
    "
            >
              <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />

              <div className="relative z-10 text-center">
                <span
                  className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          font-medium
          text-neutral-200
          backdrop-blur-xl
        "
                >
                  Available Now on Google Play
                </span>

                <h2 className="mt-8 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  Download FinTrack Today
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
                  Take control of your finances with smart expense tracking,
                  budgeting, subscriptions, savings goals and beautiful
                  analytics — all inside one premium mobile experience.
                </p>

                <div className="mt-12">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            inline-flex
            items-center
            gap-5
            rounded-full
            bg-white
            px-10
            py-5
            text-black
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
                  >
                    <div
                      className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-green-400
              to-emerald-600
              text-3xl
            "
                    >
                      ▶
                    </div>

                    <div className="text-left">
                      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                        GET IT ON
                      </p>

                      <p className="text-2xl font-bold">Google Play</p>
                    </div>
                  </a>
                </div>

                <div className="mt-14 grid grid-cols-2 gap-6 text-left md:grid-cols-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="text-3xl font-bold text-white">4.8★</p>
                    <p className="mt-1 text-sm text-neutral-400">User Rating</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="text-3xl font-bold text-white">18+</p>
                    <p className="mt-1 text-sm text-neutral-400">
                      Beautiful Screens
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="mt-1 text-sm text-neutral-400">
                      Secure & Private
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="text-3xl font-bold text-white">Free</p>
                    <p className="mt-1 text-sm text-neutral-400">Download</p>
                  </div>
                </div>
              </div>
            </div>
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
