"use client";

import Link from "next/link";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
  Globe,
} from "phosphor-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold tracking-tight">FinTrack</h3>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Track expenses, manage budgets, and grow your savings — all in one
              beautifully simple mobile app.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="font-semibold mb-3 text-gray-900">Product</p>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#features" className="hover:text-black">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className="hover:text-black">
                    Screenshots
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-black">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-3 text-gray-900">Company</p>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a
                    href="https://satinder-portfolio.vercel.app/"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <Link href="/about" className="hover:text-black transition">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://satinder-portfolio.vercel.app/contact"
                    target="_blank"
                    className="hover:text-black"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-3 text-gray-900">Legal</p>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gray-200" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FinTrack. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: <LinkedinLogo size={18} />,
                link: "https://www.linkedin.com/in/satinder-singh-sall-b62049204",
              },
              {
                icon: <GithubLogo size={18} />,
                link: "https://github.com/SatinderSinghSall",
              },
              {
                icon: <TwitterLogo size={18} />,
                link: "https://x.com/SallSatinder",
              },
              {
                icon: <YoutubeLogo size={18} />,
                link: "https://www.youtube.com/@satindersinghsall.3841/featured",
              },
              {
                icon: <Globe size={18} />,
                link: "https://satinder-portfolio.vercel.app/",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="p-2 rounded-full border border-gray-200 
                hover:bg-black hover:text-white transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
