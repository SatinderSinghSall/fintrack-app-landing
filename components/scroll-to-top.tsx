"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-[999]

        flex items-center justify-center

        h-14 w-14

        rounded-2xl

        border border-white/20

        bg-green-500

        text-black

        shadow-[0_10px_40px_rgba(0,0,0,0.12)]

        backdrop-blur-2xl

        transition-all duration-500

        hover:-translate-y-1
        hover:scale-105
        hover:bg-black
        hover:text-white
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]

        cursor-pointer

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }
      `}
    >
      <ArrowUp size={22} strokeWidth={2.3} />
    </button>
  );
}
