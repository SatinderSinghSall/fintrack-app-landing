"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
  Globe,
} from "phosphor-react";

export default function AboutPage() {
  return (
    <main id="about" className="relative bg-white overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 blur-[160px] rounded-full -z-10" />

      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gray-100 text-sm text-gray-600">
          ✨ Built with passion by a solo developer
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
          Building a smarter way to
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            manage your money
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          FinTrack is designed to make personal finance simple, intuitive, and
          powerful — helping you take control of your money without complexity.
        </p>

        {/* divider */}
        <div className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[300px] md:w-[380px]">
              {/* Glow */}
              <div className="absolute inset-0 -z-10 blur-[120px] bg-indigo-400/20 rounded-full scale-110" />

              {/* Card */}
              <div className="rounded-[32px] overflow-hidden border bg-white shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
                <Image
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800"
                  alt="Satinder Singh"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Hi, I’m Satinder 👋
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-[15px]">
              I’m a full-stack developer and the creator of FinTrack. This app
              was built from scratch as part of my journey to design and develop
              modern, scalable products that solve real-world problems.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
              FinTrack is not just another finance app — it’s a carefully
              crafted system built to simplify how people track expenses, manage
              budgets, and grow their savings.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
              Every feature, screen, and interaction in this monorepo — from the
              mobile app to this web experience — is designed and developed by
              me.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-3">
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
                  className="
                    p-3 rounded-xl border border-gray-200
                    hover:bg-black hover:text-white
                    hover:-translate-y-1 hover:shadow-lg
                    transition-all duration-300
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="px-6 pb-36">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Why FinTrack exists
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            Managing money shouldn’t feel complicated.
            <br />
            Most finance tools are either too basic or too overwhelming.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            FinTrack sits in the middle — giving you powerful insights without
            unnecessary complexity.
          </p>

          {/* Highlight box */}
          <div className="mt-10 px-6 py-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
            <p className="text-gray-800 font-medium">
              The goal is simple: help people make better financial decisions
              with clarity, confidence, and control.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
