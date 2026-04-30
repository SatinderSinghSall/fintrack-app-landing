import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    google: "Clu0eX7kWXX7mFQV5wkswIW0EorAyp-yR8K4co_IhE",
  },

  title: {
    default: "FinTrack — Smart Personal Finance App",
    template: "%s | FinTrack",
  },

  description:
    "Track expenses, manage budgets, and grow your savings effortlessly with FinTrack — a clean and intuitive personal finance app.",

  keywords: [
    "FinTrack",
    "finance app",
    "expense tracker",
    "budget app",
    "personal finance",
    "money management",
  ],

  authors: [{ name: "Satinder Singh Sall" }],
  creator: "Satinder Singh Sall",

  alternates: {
    canonical: "https://fintrack-app-satinder.vercel.app",
  },

  openGraph: {
    title: "FinTrack — Smart Personal Finance App",
    description:
      "A clean and intuitive finance app to track expenses, manage budgets, and grow your savings.",
    url: "https://fintrack-app-satinder.vercel.app",
    siteName: "FinTrack",
    images: [
      {
        url: "/og-image.png",
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
    title: "FinTrack — Smart Personal Finance App",
    description:
      "Track expenses, manage budgets, and grow your savings effortlessly.",
    images: ["/og-image.png"],
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
                    name: "FinTrack",
                  },
                },
                {
                  "@type": "MobileApplication",
                  name: "FinTrack",
                  applicationCategory: "FinanceApplication",
                  operatingSystem: "Android, iOS",
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
