"use client";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

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
    href: "https://www.instagram.com/satindersinghsall",
    icon: <FaInstagram />,
  },
];

export default function JoinedWaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);

  // ================= SHOW MODAL =================
  useEffect(() => {
    if (typeof window === "undefined") return;

    const joined = localStorage.getItem("fintrack-waitlist-joined");

    if (joined !== "true") return;

    const timer = setTimeout(
      () => {
        setIsOpen(true);
      },

      // Show after 3–5 sec
      Math.floor(Math.random() * 2000) + 3000,
    );

    return () => clearTimeout(timer);
  }, []);

  // ================= LOCK BODY SCROLL =================
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]

        flex items-center justify-center

        bg-black/40
        backdrop-blur-md

        px-4 py-4 sm:px-6

        animate-in fade-in duration-500
      "
    >
      {/* ================= MODAL ================= */}
      <div
        className="
          relative

          w-full
          max-w-xl

          overflow-y-auto
          overflow-x-hidden

          max-h-[92vh]

          rounded-[32px] md:rounded-[36px]

          border border-white/20
          bg-white/[0.78]

          p-6 sm:p-7 md:p-10

          shadow-[0_25px_120px_rgba(0,0,0,0.2)]

          backdrop-blur-3xl

          animate-in
          zoom-in-95
          slide-in-from-bottom-4
          duration-500

          scrollbar-thin
          scrollbar-thumb-black/10
          scrollbar-track-transparent
        "
      >
        {/* ================= GLOW EFFECTS ================= */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

        {/* ================= CLOSE BUTTON ================= */}
        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute right-4 top-4 z-20

            flex h-10 w-10 items-center justify-center

            rounded-full

            bg-black/[0.05]

            text-black/50

            hover:bg-black/[0.08]
            hover:text-black

            transition-all duration-300

            cursor-pointer
          "
        >
          <X className="h-5 w-5" />
        </button>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 text-center">
          {/* Success Icon */}
          <div
            className="
              mx-auto

              flex h-20 w-20 items-center justify-center

              rounded-full

              bg-green-500

              text-4xl text-white

              shadow-[0_10px_40px_rgba(34,197,94,0.35)]
            "
          >
            ✓
          </div>

          {/* ================= HEADING ================= */}
          <h2
            className="
              mt-8

              text-3xl
              sm:text-4xl
              md:text-5xl

              font-bold

              tracking-tight
              leading-[1]

              text-black
            "
          >
            You're already on the
            <span className="text-blue-500"> FinTrack</span> waitlist.
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              mt-6

              text-[15px]
              sm:text-[16px]

              leading-7 sm:leading-8

              text-black/60
            "
          >
            Thank you for joining early. We’ll notify you as soon as FinTrack
            officially launches on Google Play.
          </p>

          <p
            className="
              mt-3

              text-[14px]
              sm:text-[15px]

              leading-7

              text-black/45
            "
          >
            Meanwhile, follow the developer journey & product updates.
          </p>

          {/* ================= SOCIALS ================= */}
          <div
            className="
              mt-10

              flex flex-wrap items-center justify-center

              gap-3 sm:gap-4
            "
          >
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex

                  h-12 w-12
                  sm:h-14 sm:w-14

                  items-center justify-center

                  rounded-2xl

                  border border-black/10

                  bg-white/60

                  text-base sm:text-lg
                  text-black/70

                  shadow-sm

                  backdrop-blur-xl

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:bg-black
                  hover:text-white
                  hover:shadow-xl
                "
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* ================= PORTFOLIO CTA ================= */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://satinder-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex

                w-full sm:w-auto

                items-center justify-center gap-3

                rounded-2xl

                bg-black

                px-6 py-4

                text-sm font-medium
                text-white

                shadow-[0_10px_40px_rgba(0,0,0,0.15)]

                transition-all duration-300

                hover:-translate-y-1
                hover:scale-[1.02]

                hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]
              "
            >
              Visit Developer Portfolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* ================= FOOTER ================= */}
          <p
            className="
              mt-10

              text-[10px] sm:text-xs

              uppercase

              tracking-[0.22em] sm:tracking-[0.28em]

              text-black/35
            "
          >
            THANK YOU FOR SUPPORTING FINTRACK
          </p>
        </div>
      </div>
    </div>
  );
}
