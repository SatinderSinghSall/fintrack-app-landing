"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import {
  ArrowRight,
  Code2,
  Smartphone,
  Server,
  Globe,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import GooglePlayCTA from "@/components/GooglePlayCTA";
import TrustSection from "@/components/TrustSection";
import DeveloperCredit from "@/components/developer-credit";

const socials = [
  {
    href: "https://www.linkedin.com/in/satinder-singh-sall-b62049204/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/SatinderSinghSall",
    icon: <FaGithub />,
  },
  {
    href: "https://x.com/SallSatinder",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.youtube.com/@satindersinghsall.3841/featured",
    icon: <FaYoutube />,
  },
  {
    href: "https://www.facebook.com/satinder.singhsall",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.instagram.com/satindersinghsall",
    icon: <FaInstagram />,
  },
  {
    href: "mailto:satindersinghsall111@gmail.com",
    icon: <MdEmail />,
  },
];

const ecosystem = [
  {
    title: "Mobile App",
    description:
      "Built with React Native, Expo Router, Zustand, NativeWind, and modern mobile-first architecture.",
    icon: <Smartphone className="size-6" />,
  },
  {
    title: "Backend API",
    description:
      "Scalable Express + MongoDB backend with JWT authentication, REST APIs, and secure architecture.",
    icon: <Server className="size-6" />,
  },
  {
    title: "Web Ecosystem",
    description:
      "Landing page, admin panel, and account deletion portal built with Next.js and modern UI systems.",
    icon: <Globe className="size-6" />,
  },
  {
    title: "Production Quality",
    description:
      "Focused on performance, scalability, security, clean UI/UX, and real-world usability.",
    icon: <ShieldCheck className="size-6" />,
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white text-black">
      <Navbar />

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-zinc-50 to-white" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-[140px] -z-10" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px] -z-10" />

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm">
              <Sparkles className="size-4 text-indigo-600" />
              Founder of FinTrack
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1]">
              Building
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                premium digital{" "}
              </span>
              experiences for the modern world.
            </h1>

            <p className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-2xl">
              I’m Satinder Singh — a full-stack developer focused on building
              scalable web and mobile applications with modern UI/UX, secure
              backend systems, and production-grade architecture.
            </p>

            <p className="mt-4 text-lg text-zinc-600 leading-relaxed max-w-2xl">
              From mobile apps and backend systems to cloud deployment and
              product design, I create digital products that feel fast, clean,
              and impactful.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://satinder-portfolio.vercel.app"
                target="_blank"
                className="
                  inline-flex items-center gap-2
                  rounded-2xl bg-black text-white
                  px-6 py-4 text-sm font-medium
                  hover:scale-[1.02]
                  transition-all duration-300
                  shadow-xl shadow-black/10
                "
              >
                Visit Portfolio
                <ArrowRight className="size-4" />
              </a>

              <a
                href="https://github.com/SatinderSinghSall"
                target="_blank"
                className="
                  inline-flex items-center gap-2
                  rounded-2xl border border-zinc-200
                  bg-white px-6 py-4 text-sm font-medium
                  hover:bg-zinc-50
                  transition-all duration-300
                "
              >
                GitHub Profile
              </a>
            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="
                    flex items-center justify-center
                    size-12 rounded-2xl
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

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-indigo-500/20 blur-[100px]" />

              {/* Main Founder Image */}
              <div
                className="
                  relative overflow-hidden rounded-[36px]
                  border border-white/40
                  bg-white/70 backdrop-blur-xl
                  shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                "
              >
                <Image
                  src="/images/about-image4.jpeg"
                  alt="Satinder Singh"
                  width={700}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div
                className="
                  absolute -bottom-8 -left-8
                  hidden md:block
                  rounded-3xl border border-white/40
                  bg-white/80 backdrop-blur-xl
                  p-5 shadow-2xl
                "
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">
                    <Code2 className="size-5" />
                  </div>

                  <div>
                    <p className="font-semibold">Full-Stack Engineer</p>
                    <p className="text-sm text-zinc-500">
                      Web • Mobile • Backend
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating App Preview */}
              <div
                className="
                  absolute -top-8 -right-8
                  hidden lg:block
                  w-[220px]
                  overflow-hidden rounded-3xl
                  border border-white/40
                  bg-white shadow-2xl
                "
              >
                <Image
                  src="/images/banner/Banner 1.png"
                  alt="FinTrack App"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GooglePlayCTA />

      {/* ================= ABOUT ================= */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-5">
              <div className="overflow-hidden rounded-[32px] shadow-xl">
                <Image
                  src="/images/about-image1.png"
                  alt="Coding"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="overflow-hidden rounded-[32px] shadow-xl">
                <Image
                  src="/images/about-image3.jpeg"
                  alt="Bookstore"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-5 pt-10">
              <div className="overflow-hidden rounded-[32px] shadow-xl">
                <Image
                  src="/images/about-image2.jpeg"
                  alt="Workspace"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="overflow-hidden rounded-[32px] shadow-xl">
                <Image
                  src="/images/about-image4.jpeg"
                  alt="Developer"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-700">
              About Me
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Creating scalable products with
              <span className="text-indigo-600"> engineering precision</span>.
            </h2>

            <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
              I build high-performance full-stack applications with a strong
              focus on modern UI/UX, scalability, security, and real-world
              usability.
            </p>

            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Currently pursuing an MCA at KIIT University with expertise in
              React, Node.js, TypeScript, Express, MongoDB, MySQL, Docker, and
              cloud deployment systems.
            </p>

            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Alongside web engineering, I’m actively exploring mobile app
              development and game development to create immersive
              cross-platform digital experiences.
            </p>

            {/* TECH STACK */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "React Native",
                "Expo",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Docker",
                "TailwindCSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full border border-zinc-200
                    bg-white px-4 py-2 text-sm
                    shadow-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINTRACK ================= */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm">
              FinTrack Ecosystem
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              More than just a finance app.
            </h2>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              FinTrack is a complete ecosystem designed and engineered from
              scratch — combining mobile engineering, scalable backend systems,
              and modern web experiences into one production-grade platform.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {ecosystem.map((item, i) => (
              <div
                key={i}
                className="
                  rounded-[32px]
                  border border-zinc-200
                  bg-white
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                <div className="inline-flex rounded-2xl bg-indigo-50 p-4 text-indigo-600">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="px-6 pb-32">
        <div
          className="
            relative overflow-hidden
            max-w-6xl mx-auto
            rounded-[40px]
            border border-zinc-200
            bg-gradient-to-br from-indigo-50 via-white to-purple-50
            px-8 md:px-16 py-20
          "
        >
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
              Vision
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Technology should feel
              <span className="text-indigo-600"> effortless</span>.
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-zinc-600 leading-relaxed">
              My goal with FinTrack is simple — help people make smarter
              financial decisions through clean design, intuitive experiences,
              and powerful technology without unnecessary complexity.
            </p>

            <p className="mt-5 max-w-3xl mx-auto text-lg text-zinc-600 leading-relaxed">
              Every screen, animation, API, and interaction is crafted with
              precision to create a premium digital experience that feels fast,
              modern, and meaningful.
            </p>
          </div>
        </div>
      </section>

      <TrustSection />

      <DeveloperCredit />
      <Footer />
    </main>
  );
}
