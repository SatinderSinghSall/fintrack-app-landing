import type { Metadata } from "next";

import DeveloperCredit from "@/components/developer-credit";
import Footer from "@/components/footer";
import GooglePlayCTA from "@/components/GooglePlayCTA";
import Navbar from "@/components/navbar";
import TrustSection from "@/components/TrustSection";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const SITE_URL = "https://fintrack-app-satinder.vercel.app";

const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

const DEVELOPER_NAME = "Satinder Singh Sall";

const DEVELOPER_URL = "https://satinder-portfolio.vercel.app/";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN";

/* =========================================================
   FINTRACK APP SCREENSHOTS
========================================================= */

const screenshots = Array.from(
  { length: 73 },
  (_, i) =>
    `/images/app-version-29-v3.2.0/Screen-${String(i + 1).padStart(
      2,
      "0",
    )}.jpeg`,
);

/* =========================================================
   SEO
========================================================= */

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

/* =========================================================
   STRUCTURED DATA
========================================================= */

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

/* =========================================================
   PAGE
========================================================= */

export default function Screenshots() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="screenshots"
          className="
            relative
            overflow-hidden
            px-4
            pb-24
            pt-28
            sm:px-6
            sm:pb-28
            sm:pt-32
            md:pb-36
            md:pt-40
          "
        >
          {/* =================================================
              PREMIUM BACKGROUND
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-20
              bg-[radial-gradient(circle_at_50%_15%,rgba(59,130,246,0.055),transparent_34%),linear-gradient(to_bottom,#fff,#fafafa_45%,#fff)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[320px]
              -z-10
              h-[420px]
              w-[720px]
              -translate-x-1/2
              rounded-full
              bg-blue-100/20
              blur-[150px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[-180px]
              top-[1100px]
              -z-10
              h-[480px]
              w-[480px]
              rounded-full
              bg-violet-100/20
              blur-[140px]
            "
          />

          {/* =================================================
              MAIN CONTAINER
          ================================================= */}

          <div className="mx-auto max-w-[1540px]">
            {/* =================================================
                HERO
            ================================================= */}

            <div className="mx-auto max-w-4xl text-center">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-black/[0.06]
                  bg-white/90
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-gray-600
                  shadow-[0_8px_30px_rgba(0,0,0,0.045)]
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-500
                    shadow-[0_0_0_4px_rgba(16,185,129,0.10)]
                  "
                />
                FinTrack v3.2.0
              </div>

              <h1
                className="
                  mt-7
                  text-[clamp(2.7rem,6vw,5.8rem)]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-gray-950
                "
              >
                See FinTrack in action
              </h1>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-[15px]
                  leading-7
                  text-gray-500
                  sm:text-lg
                  sm:leading-8
                  md:text-xl
                "
              >
                Explore the complete FinTrack mobile experience through real app
                screens designed to help you track spending, manage budgets,
                grow savings and understand your finances.
              </p>
            </div>

            {/* =================================================
                GALLERY
            ================================================= */}

            <ScreenshotGallery screenshots={screenshots} />

            {/* =================================================
                DOWNLOAD CTA
            ================================================= */}

            <div className="mt-24 sm:mt-28 md:mt-32">
              <div
                className="
                  relative
                  mx-auto
                  max-w-6xl
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-[#020617]
                  via-[#0B1120]
                  to-black
                  px-6
                  py-14
                  shadow-[0_40px_120px_rgba(0,0,0,.24)]
                  sm:rounded-[36px]
                  sm:px-10
                  sm:py-16
                  md:rounded-[42px]
                  md:px-16
                  md:py-20
                "
              >
                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-1/2
                    h-96
                    w-96
                    -translate-x-1/2
                    rounded-full
                    bg-violet-500/20
                    blur-[130px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-120px]
                    right-[-80px]
                    h-80
                    w-80
                    rounded-full
                    bg-sky-500/10
                    blur-[120px]
                  "
                />

                <div className="relative z-10 text-center">
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.06]
                      px-5
                      py-2
                      text-sm
                      font-medium
                      text-neutral-200
                      shadow-inner
                      backdrop-blur-xl
                    "
                  >
                    Available Now on Google Play
                  </span>

                  <h2
                    className="
                      mt-8
                      text-4xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                      sm:text-5xl
                      md:text-6xl
                    "
                  >
                    Download FinTrack Today
                  </h2>

                  <p
                    className="
                      mx-auto
                      mt-6
                      max-w-3xl
                      text-base
                      leading-7
                      text-neutral-300
                      sm:text-lg
                      sm:leading-8
                      md:text-xl
                    "
                  >
                    Take control of your finances with smart expense tracking,
                    budgeting, subscriptions, savings goals and beautiful
                    analytics — all inside one premium mobile experience.
                  </p>

                  <div className="mt-10 sm:mt-12">
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        cursor-pointer
                        items-center
                        gap-4
                        rounded-full
                        bg-white
                        px-6
                        py-4
                        text-black
                        shadow-2xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-[1.02]
                        hover:shadow-[0_24px_70px_rgba(255,255,255,0.14)]
                        active:scale-[0.98]
                        sm:gap-5
                        sm:px-10
                        sm:py-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-green-400
                          to-emerald-600
                          text-2xl
                          shadow-lg
                          sm:h-14
                          sm:w-14
                          sm:text-3xl
                        "
                      >
                        ▶
                      </div>

                      <div className="text-left">
                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.25em]
                            text-neutral-500
                            sm:text-xs
                          "
                        >
                          GET IT ON
                        </p>

                        <p className="text-xl font-bold sm:text-2xl">
                          Google Play
                        </p>
                      </div>
                    </a>
                  </div>

                  <div
                    className="
                      mx-auto
                      mt-12
                      grid
                      max-w-4xl
                      grid-cols-2
                      gap-3
                      sm:mt-14
                      sm:grid-cols-4
                      sm:gap-4
                    "
                  >
                    {[
                      ["4.8★", "User Rating"],
                      ["73", "App Screens"],
                      ["100%", "Secure & Private"],
                      ["Free", "Download"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.045]
                          p-4
                          text-left
                          backdrop-blur-xl
                          transition-colors
                          hover:bg-white/[0.07]
                          sm:p-5
                        "
                      >
                        <p className="text-2xl font-bold text-white sm:text-3xl">
                          {value}
                        </p>

                        <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSection />

        <GooglePlayCTA />
      </main>

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
