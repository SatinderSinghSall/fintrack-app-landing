"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface AppPosterModalProps {
  open: boolean;
  onClose: () => void;
  image: string;
}

export default function AppPosterModal({
  open,
  onClose,
  image,
}: AppPosterModalProps) {
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevTouch = body.style.touchAction;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.touchAction = prevTouch;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const preventEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", preventEscape);

    return () => {
      window.removeEventListener("keydown", preventEscape);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="
      fixed
      inset-0
      z-[999999]

      flex
      items-center
      justify-center

      p-2
      sm:p-4
      lg:p-8

      bg-black/80
      backdrop-blur-xl

      animate-in
      fade-in
      duration-300
      "
    >
      <div
        className="
        relative

        flex
        flex-col

        w-full
        max-w-[1700px]

        h-[92dvh]

        overflow-hidden

        rounded-[34px]

        bg-white/80
        supports-[backdrop-filter]:bg-white/70
        backdrop-blur-3xl

        border
        border-white/30

        shadow-[0_40px_120px_rgba(0,0,0,.45)]

        animate-in
        zoom-in-95
        slide-in-from-bottom-6
        duration-500
        ease-out
        "
      >
        {/* Decorative Glow */}

        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

        {/* Header */}

        <div
          className="
          sticky
          top-0
          z-50

          flex
          items-center
          justify-between

          px-6
          md:px-8

          py-5

          bg-white/90
          backdrop-blur-3xl

          border-b
          border-neutral-200/70

          shadow-sm
          "
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900">
              FinTrack App Showcase
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Designed & Developed by{" "}
              <span className="font-semibold text-black">
                Satinder Singh Sall
              </span>
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="
            group

            flex
            items-center
            justify-center

            h-12
            w-12

            rounded-full

            bg-white

            border
            border-neutral-200

            shadow-xl

            transition-all
            duration-300

            hover:bg-red-500
            hover:border-red-500
            hover:text-white

            hover:rotate-90
            hover:scale-110

            active:scale-95

            cursor-pointer
            "
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Scrollable Content */}

        <div
          className="
          flex-1

          overflow-y-auto
          overflow-x-hidden

          overscroll-contain

          px-3
          sm:px-5
          md:px-8

          py-6

          scrollbar-thin
          scrollbar-thumb-neutral-300

          modal-scroll
          "
        >
          <div
            className="
            mx-auto

            w-full

            max-w-[1450px]
            "
          >
            <div
              className="
              rounded-[30px]

              bg-gradient-to-b
              from-white
              to-neutral-100

              p-4

              shadow-[0_30px_100px_rgba(0,0,0,.18)]
              "
            >
              <img
                src={image}
                alt="FinTrack App Poster"
                draggable={false}
                className="
                block

                w-full

                h-auto

                rounded-2xl

                select-none

                transition-transform
                duration-500

                hover:scale-[1.01]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
