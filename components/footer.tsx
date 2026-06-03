"use client";

import Link from "next/link";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
  Globe,
} from "phosphor-react";

import { ArrowUpRight, Wallet, ShieldCheck, Smartphone } from "lucide-react";

const socials = [
  {
    icon: <LinkedinLogo size={18} weight="fill" />,
    link: "https://www.linkedin.com/in/satinder-singh-sall-b62049204/",
  },
  {
    icon: <GithubLogo size={18} weight="fill" />,
    link: "https://github.com/SatinderSinghSall",
  },
  {
    icon: <TwitterLogo size={18} weight="fill" />,
    link: "https://x.com/SallSatinder",
  },
  {
    icon: <YoutubeLogo size={18} weight="fill" />,
    link: "https://www.youtube.com/@satindersinghsall.3841/featured",
  },
  {
    icon: <Globe size={18} weight="bold" />,
    link: "https://satinder-portfolio.vercel.app/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white -z-10" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
        {/* ================= TOP CTA ================= */}
        <div
          className="
            relative overflow-hidden
            rounded-[40px]
            border border-zinc-200
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-800
            p-10 md:p-14
            text-white
            shadow-[0_30px_120px_rgba(0,0,0,0.25)]
          "
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-indigo-500/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                <Smartphone className="size-4" />
                Available on Google Play
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Smarter finance starts with
                <span className="text-indigo-400"> FinTrack</span>.
              </h2>

              <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
                Track expenses, manage budgets, and grow your savings with a
                beautifully designed finance platform built for modern users.
              </p>
            </div>

            {/* BUTTON */}
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp"
                target="_blank"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl bg-white
                  px-7 py-4
                  text-sm font-semibold
                  text-black
                  hover:scale-[1.03]
                  transition-all duration-300
                  shadow-2xl
                "
              >
                Download App
                <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="mt-20 grid lg:grid-cols-[1.3fr_1fr] gap-20">
          {/* BRAND */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex items-center justify-center
                  size-14 rounded-3xl
                  bg-gradient-to-br
                  from-black
                  to-zinc-700
                  text-white
                  shadow-lg shadow-black/20
                "
              >
                <Wallet className="size-6" />
              </div>

              <div>
                <h3 className="text-3xl font-semibold tracking-tight">
                  FinTrack
                </h3>

                <p className="text-sm text-zinc-500 tracking-wide">
                  SMART FINANCE PLATFORM
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-xl text-zinc-600 text-lg leading-relaxed">
              Built with a focus on simplicity, scalability, security, and
              premium user experience — helping people manage money with
              confidence and clarity.
            </p>

            {/* Trust */}
            <div
              className="
                mt-8 inline-flex items-center gap-3
                rounded-2xl border border-zinc-200
                bg-white px-5 py-4
                shadow-sm
              "
            >
              <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600">
                <ShieldCheck className="size-5" />
              </div>

              <div>
                <p className="font-medium">Privacy Focused</p>

                <p className="text-sm text-zinc-500">
                  Transparent policies & user-controlled data
                </p>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400">
                Product
              </h4>

              <ul className="mt-6 space-y-4">
                {[
                  ["Features", "/features"],
                  ["Screenshots", "/screenshots"],
                  ["Pricing", "/pricing"],
                  ["Testimonials", "/testimonials"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="
                        text-zinc-600
                        hover:text-black
                        transition-colors duration-300
                      "
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400">
                Company
              </h4>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="https://satinder-portfolio.vercel.app/"
                    target="_blank"
                    className="text-zinc-600 hover:text-black transition"
                  >
                    Portfolio
                  </a>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-zinc-600 hover:text-black transition"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <a
                    href="mailto:satindersinghsall111@gmail.com"
                    className="text-zinc-600 hover:text-black transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400">
                Legal
              </h4>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="https://fintrack-policy.vercel.app/privacy-policy"
                    target="_blank"
                    className="text-zinc-600 hover:text-black transition"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="https://fintrack-policy.vercel.app/account-deletion"
                    target="_blank"
                    className="text-zinc-600 hover:text-black transition"
                  >
                    Account Deletion
                  </a>
                </li>

                <li>
                  <a
                    href="https://fintrack-policy.vercel.app/"
                    target="_blank"
                    className="text-zinc-600 hover:text-black transition"
                  >
                    Policy Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        {/* ================= BOTTOM ================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} FinTrack. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-zinc-400">
              Designed & developed by Satinder Singh Sall
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="
                  flex items-center justify-center
                  size-11
                  rounded-2xl
                  border border-zinc-200
                  bg-white
                  text-zinc-700
                  shadow-sm
                  hover:bg-black
                  hover:text-white
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all duration-300
                "
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
