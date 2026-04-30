"use client";

import Image from "next/image";

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

export default function Testimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-500/10 blur-[160px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Loved by people who care about
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              their money.
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
            Join thousands of users who trust FinTrack to manage their finances.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-gray-200/60 to-transparent"
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl bg-white p-7 border border-gray-200/60 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-100/40 via-transparent to-purple-100/40" />

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
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
  );
}
