import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WaitlistModal from "@/components/waitlist-modal";
import JoinedWaitlistModal from "@/components/joined-waitlist-modal";
import ScrollToTop from "@/components/scroll-to-top";
import PlayStoreDownloadModal from "@/components/playstore-download-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fintrack-app-satinder.vercel.app"),

  verification: {
    google: "CLiuOeX7kVXX7mFQV5wkswIWOEorAvp-yr8K4co_IhE",
  },

  title: {
    default:
      "FinTrack — Smart Personal Finance, Budget, Savings & Expense Tracker App | Developed by Satinder Singh Sall",
    template: "%s | FinTrack",
  },

  description:
    "FinTrack is a modern personal finance, budget, savings, and expense tracker mobile app designed to help users manage money smarter with intuitive analytics, budgeting tools, and clean financial insights. Developed by Satinder Singh Sall.",

  keywords: [
    "FinTrack",
    "finance app",
    "expense tracker",
    "budget app",
    "personal finance app",
    "money management app",
    "expense management",
    "budget tracker",
    "financial planning",
    "mobile finance app",
    "expense tracking app",
    "savings tracker",
    "budgeting app",
    "React Native finance app",
    "Satinder Singh Sall",
    "FinTrack mobile app",
    "Mobile App",
    "Finance Mobile App",
    "finance mobile app",
  ],

  authors: [{ name: "Satinder Singh Sall" }],
  creator: "Satinder Singh Sall",

  alternates: {
    canonical: "https://fintrack-app-satinder.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",

  openGraph: {
    title:
      "FinTrack — Smart Budget, Savings & Expense Tracker App | Smart Personal Finance App",
    description:
      "A clean and intuitive finance app to track expenses, manage budgets, and grow your savings.",
    url: "https://fintrack-app-satinder.vercel.app",
    siteName: "FinTrack — Smart Finance App",
    images: [
      {
        url: "https://fintrack-app-satinder.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinTrack App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "FinTrack — Smart Budget, Savings & Expense Tracker App | Smart Personal Finance App",
    description:
      "Manage expenses, budgets, savings, and personal finances smarter with FinTrack. Track expenses, manage budgets, and grow your savings effortlessly.",
    images: ["https://fintrack-app-satinder.vercel.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* <WaitlistModal />
        <JoinedWaitlistModal /> */}
        <PlayStoreDownloadModal />

        <ScrollToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Satinder Singh Sall",
                  url: "https://satinder-portfolio.vercel.app/",
                  sameAs: [
                    "https://www.linkedin.com/in/satinder-singh-sall-b62049204",
                    "https://github.com/SatinderSinghSall",
                    "https://x.com/SallSatinder",
                    "https://www.youtube.com/@satindersinghsall.3841/featured",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "FinTrack: Expense & Budget",
                  },
                },
                {
                  "@type": "MobileApplication",
                  name: "FinTrack: Expense & Budget",
                  applicationCategory: "FinanceApplication",
                  operatingSystem: "Android, iOS",
                  softwareVersion: "2.7.1",
                  description:
                    "Track expenses, manage budgets, and grow your savings with FinTrack.",
                  url: "https://fintrack-app-satinder.vercel.app",
                  creator: {
                    "@type": "Person",
                    name: "Satinder Singh Sall",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "FinTrack",
                  },
                  downloadUrl:
                    "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp",
                },
                {
                  "@type": "Organization",
                  name: "FinTrack",
                  url: "https://fintrack-app-satinder.vercel.app",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
