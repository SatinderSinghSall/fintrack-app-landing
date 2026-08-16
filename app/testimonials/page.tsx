import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

const SITE_URL = "https://fintrack-app-satinder.vercel.app";

const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

const DEVELOPER_NAME = "Satinder Singh Sall";

const DEVELOPER_URL = "https://satinder-portfolio.vercel.app/";

export const metadata: Metadata = {
  title:
    "FinTrack Testimonials — What Users Say About the Personal Finance App",

  description:
    "Discover what users say about FinTrack, a personal finance, budgeting, expense tracking, savings, and financial analytics app developed by Satinder Singh Sall.",

  keywords: [
    "FinTrack testimonials",
    "FinTrack reviews",
    "FinTrack app reviews",
    "FinTrack user reviews",
    "FinTrack finance app",
    "FinTrack expense tracker",
    "personal finance app reviews",
    "expense tracker app reviews",
    "budget app reviews",
    "budgeting app",
    "personal finance app",
    "expense tracking app",
    "money management app",
    "savings tracker",
    "financial analytics app",
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
    canonical: "/testimonials",
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
    title: "FinTrack Testimonials — What Users Say About the Finance App",

    description:
      "See what users are saying about FinTrack's expense tracking, budgeting, savings, reminders, and financial analytics experience.",

    url: `${SITE_URL}/testimonials`,

    siteName: "FinTrack",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "FinTrack personal finance app testimonials developed by Satinder Singh Sall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FinTrack Testimonials — What Users Say About the Finance App",

    description:
      "Discover user experiences with FinTrack, a personal finance and expense tracking app developed by Satinder Singh Sall.",

    images: [OG_IMAGE_URL],

    creator: "@SallSatinder",
  },
};

const testimonials = [
  {
    name: "Aman Verma",
    username: "@amanv",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop",
    text: "FinTrack completely changed how I manage money. I finally understand where every rupee goes.",
  },
  {
    name: "Priya Sharma",
    username: "@priyasharma",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    text: "The clean UI and smart insights make budgeting actually enjoyable. Didn’t expect that.",
  },
  {
    name: "Rahul Mehta",
    username: "@rahuldev",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    text: "Tried multiple apps — nothing comes close. FinTrack just gets it right.",
  },
  {
    name: "Sneha Kapoor",
    username: "@sneha",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    text: "I love how simple yet powerful everything feels. It’s now part of my daily routine.",
  },
  {
    name: "Arjun Patel",
    username: "@arjunp",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
    text: "The analytics are insane. I can actually see patterns in my spending now.",
  },
  {
    name: "Neha Singh",
    username: "@nehasingh",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    text: "Reminders + budgeting = lifesaver. I’ve saved more in 2 months than last year.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/testimonials#webpage`,
      url: `${SITE_URL}/testimonials`,
      name: "FinTrack Testimonials — What Users Say About the Personal Finance App",
      description:
        "User experiences and testimonials about FinTrack, a personal finance, budgeting, and expense tracking application developed by Satinder Singh Sall.",
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
        "FinTrack is a personal finance and budgeting application developed by Satinder Singh Sall for tracking expenses, managing budgets, monitoring savings, income, subscriptions, and financial insights.",
      image: OG_IMAGE_URL,
      creator: {
        "@id": `${SITE_URL}/#developer`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function Testimonials() {
  return (
    <>
      <Navbar />

      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 blur-[160px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Loved by people who care about
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                their money.
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
              Join thousands of users who trust FinTrack to manage their
              finances.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-gray-200/60 to-transparent"
              >
                <div className="relative h-full rounded-3xl bg-white p-7 border border-gray-200/60 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-100/40 via-transparent to-purple-100/40" />

                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t.text}
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={t.image}
                        alt={`${t.name} — FinTrack user`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">{t.username}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
