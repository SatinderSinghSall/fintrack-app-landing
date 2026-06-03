"use client";

import Link from "next/link";
import { ShieldCheck, Lock, UserRoundX, ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Privacy Policy",
    description:
      "Learn how FinTrack collects, uses, and protects your information.",
    href: "https://fintrack-policy.vercel.app/privacy-policy",
    icon: <Lock className="size-6" />,
  },
  {
    title: "Account Deletion",
    description:
      "Request permanent deletion of your account and associated data.",
    href: "https://fintrack-policy.vercel.app/account-deletion",
    icon: <UserRoundX className="size-6" />,
  },
  {
    title: "Legal & Compliance",
    description:
      "Access our official policy portal and compliance information.",
    href: "https://fintrack-policy.vercel.app/",
    icon: <ShieldCheck className="size-6" />,
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-zinc-50 to-white" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full border border-zinc-200
              bg-white px-4 py-2
              text-sm shadow-sm
            "
          >
            <ShieldCheck className="size-4 text-indigo-600" />
            User Trust
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
            Trust, Privacy &
            <span className="text-indigo-600"> Transparency</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            Your data belongs to you. FinTrack is designed with privacy,
            security, transparency, and user control at its core.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              className="
                group relative overflow-hidden
                rounded-[32px]
                border border-zinc-200
                bg-white/80 backdrop-blur-xl
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                hover:-translate-y-2
                hover:shadow-[0_30px_120px_rgba(0,0,0,0.12)]
                transition-all duration-500
              "
            >
              <div
                className="
                  absolute inset-0 opacity-0
                  bg-gradient-to-br
                  from-indigo-500/5
                  to-purple-500/5
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    inline-flex
                    rounded-2xl
                    bg-indigo-50
                    p-4
                    text-indigo-600
                  "
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-zinc-600 leading-relaxed">
                  {item.description}
                </p>

                <div
                  className="
                    mt-8 inline-flex items-center gap-2
                    font-medium text-indigo-600
                  "
                >
                  Learn More
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div
          className="
            mt-12 rounded-[32px]
            border border-indigo-100
            bg-gradient-to-r
            from-indigo-50
            via-white
            to-purple-50
            p-8 md:p-10
          "
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Built with user privacy in mind
              </h3>

              <p className="mt-3 text-zinc-600 max-w-2xl">
                We believe financial tools should provide transparency,
                security, and complete control over personal data. You can
                review our policies, understand how data is handled, and request
                account deletion at any time.
              </p>
            </div>

            <Link
              href="https://fintrack-policy.vercel.app"
              target="_blank"
              className="
                inline-flex items-center justify-center
                rounded-2xl bg-black
                px-6 py-4
                text-white font-medium
                hover:scale-[1.03]
                transition-all
              "
            >
              View Policy Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
