"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ScreenshotGalleryProps = {
  screenshots: string[];
};

export default function ScreenshotGallery({
  screenshots,
}: ScreenshotGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;

  const closeViewer = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? screenshots.length - 1 : selectedIndex - 1,
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === screenshots.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  /* =========================================================
     KEYBOARD NAVIGATION
  ========================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [isOpen, selectedIndex]);

  return (
    <>
      {/* =====================================================
          GALLERY HEADER
      ===================================================== */}

      <div
        className="
          mt-16
          flex
          flex-col
          gap-5
          sm:mt-20
          sm:flex-row
          sm:items-end
          sm:justify-between
          md:mt-24
        "
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-medium text-gray-500">
              Complete app experience
            </p>

            <span
              className="
                rounded-full
                border
                border-black/[0.06]
                bg-white
                px-3
                py-1
                text-xs
                font-semibold
                text-gray-500
                shadow-sm
              "
            >
              73 screens
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-400">
            Tap any screen to explore it in detail.
          </p>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-2
            self-start
            rounded-full
            border
            border-black/[0.05]
            bg-white
            px-4
            py-2
            text-xs
            font-medium
            text-gray-500
            shadow-[0_6px_24px_rgba(0,0,0,0.04)]
            sm:self-auto
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          73 screenshots
        </div>
      </div>

      {/* =====================================================
          GALLERY SHELL
      ===================================================== */}

      <div
        className="
          relative
          mt-8
          overflow-hidden
          rounded-[30px]
          border
          border-black/[0.045]
          bg-white/80
          p-3
          shadow-[0_25px_90px_rgba(0,0,0,0.055)]
          backdrop-blur-xl
          sm:mt-10
          sm:rounded-[38px]
          sm:p-5
          md:rounded-[46px]
          md:p-7
        "
      >
        {/* Top highlight */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-10
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-black/[0.08]
            to-transparent
          "
        />

        {/* ===================================================
            GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            sm:gap-5
            md:grid-cols-4
            md:gap-6
            lg:grid-cols-5
            lg:gap-7
            xl:grid-cols-6
          "
        >
          {screenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open FinTrack screenshot ${index + 1}`}
              className="
                group
                relative
                block
                cursor-pointer
                overflow-hidden
                rounded-[20px]
                border
                border-black/[0.055]
                bg-white
                text-left
                shadow-[0_8px_26px_rgba(0,0,0,0.045)]
                outline-none
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:border-black/[0.10]
                hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)]
                focus-visible:ring-2
                focus-visible:ring-black/20
                focus-visible:ring-offset-4
                active:scale-[0.985]
                sm:rounded-[24px]
                md:rounded-[28px]
              "
            >
              {/* Image */}

              <div className="relative aspect-[9/20] overflow-hidden bg-gray-100">
                <Image
                  src={src}
                  alt={`FinTrack personal finance app screenshot ${index + 1}`}
                  fill
                  loading={index < 12 ? "eager" : "lazy"}
                  sizes="
                    (max-width: 639px) 45vw,
                    (max-width: 767px) 29vw,
                    (max-width: 1023px) 22vw,
                    (max-width: 1279px) 17vw,
                    14vw
                  "
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />

                {/* Hover gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* View icon */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-11
                    w-11
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-90
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/55
                    text-white
                    opacity-0
                    shadow-2xl
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </div>

                {/* Screen number */}

                <span
                  className="
                    absolute
                    right-2.5
                    top-2.5
                    rounded-full
                    border
                    border-white/50
                    bg-white/90
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    tabular-nums
                    text-gray-700
                    opacity-0
                    shadow-lg
                    backdrop-blur-xl
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    sm:right-3
                    sm:top-3
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Inner edge */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[20px]
                  ring-1
                  ring-inset
                  ring-black/[0.035]
                  sm:rounded-[24px]
                  md:rounded-[28px]
                "
              />
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================
          GALLERY FOOTER
      ===================================================== */}

      <div
        className="
          mt-6
          flex
          flex-col
          items-center
          justify-between
          gap-4
          sm:flex-row
        "
      >
        <p className="text-center text-xs text-gray-400 sm:text-left">
          Showing all 73 FinTrack app screens from version 3.2.0.
        </p>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            cursor-pointer
            rounded-full
            border
            border-black/[0.06]
            bg-white
            px-4
            py-2
            text-xs
            font-medium
            text-gray-500
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-black/10
            hover:text-black
            hover:shadow-md
            active:scale-95
          "
        >
          Back to top ↑
        </button>
      </div>

      {/* =====================================================
          FULLSCREEN VIEWER
      ===================================================== */}

      {isOpen && selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/80
            p-3
            backdrop-blur-xl
            sm:p-5
            md:p-8
          "
          role="dialog"
          aria-modal="true"
          aria-label={`FinTrack screenshot ${selectedIndex + 1}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeViewer();
            }
          }}
        >
          {/* =================================================
              VIEWER
          ================================================= */}

          <div
            className="
              relative
              flex
              h-full
              max-h-[900px]
              w-full
              max-w-[1500px]
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-[#080808]
              shadow-[0_40px_120px_rgba(0,0,0,0.55)]
              sm:rounded-[30px]
              md:rounded-[38px]
            "
          >
            {/* =================================================
                TOP BAR
            ================================================= */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                z-30
                flex
                items-center
                justify-between
                px-4
                py-4
                sm:px-6
                sm:py-5
                md:px-8
              "
            >
              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.07]
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-white/75
                  backdrop-blur-xl
                "
              >
                FinTrack v3.2.0
              </div>

              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close screenshot viewer"
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.07]
                  text-white/80
                  backdrop-blur-xl
                  transition-all
                  hover:bg-white/[0.14]
                  hover:text-white
                  active:scale-95
                  sm:h-11
                  sm:w-11
                "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            {/* =================================================
                IMAGE AREA
            ================================================= */}

            <div className="relative flex min-w-0 flex-1 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055),transparent_42%),#050505] p-12 sm:p-16 md:p-20">
              {/* Previous */}

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous screenshot"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.07]
                  text-white/80
                  backdrop-blur-xl
                  transition-all
                  hover:bg-white/[0.14]
                  hover:text-white
                  active:scale-95
                  sm:left-5
                  sm:h-12
                  sm:w-12
                  md:left-7
                "
              >
                ←
              </button>

              {/* Screenshot */}

              <div
                className="
                  relative
                  h-full
                  max-h-[78vh]
                  w-auto
                  max-w-[calc(100%-20px)]
                  overflow-hidden
                  rounded-[22px]
                  bg-white
                  shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                  sm:max-w-[calc(100%-80px)]
                  sm:rounded-[28px]
                "
              >
                <Image
                  src={screenshots[selectedIndex]}
                  alt={`FinTrack screenshot ${selectedIndex + 1}`}
                  width={500}
                  height={1050}
                  priority
                  className="
                    h-full
                    w-auto
                    max-w-full
                    object-contain
                  "
                />
              </div>

              {/* Next */}

              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.07]
                  text-white/80
                  backdrop-blur-xl
                  transition-all
                  hover:bg-white/[0.14]
                  hover:text-white
                  active:scale-95
                  sm:right-5
                  sm:h-12
                  sm:w-12
                  md:right-7
                "
              >
                →
              </button>
            </div>

            {/* =================================================
                DETAILS PANEL
            ================================================= */}

            <aside
              className="
                hidden
                w-[320px]
                shrink-0
                flex-col
                justify-between
                border-l
                border-white/[0.07]
                bg-[#0b0b0b]
                p-8
                lg:flex
                xl:w-[350px]
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-white/35
                  "
                >
                  App screen
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                  Screen {selectedIndex + 1}
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  Explore this FinTrack interface in detail. Use the arrows or
                  keyboard navigation to move through the complete application
                  experience.
                </p>

                {/* Counter */}

                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    p-5
                  "
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-semibold text-white">
                        {selectedIndex + 1}
                      </p>

                      <p className="mt-1 text-xs text-white/35">
                        Current screen
                      </p>
                    </div>

                    <p className="text-xs text-white/30">
                      / {screenshots.length}
                    </p>
                  </div>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                    <div
                      className="h-full rounded-full bg-white transition-all duration-300"
                      style={{
                        width: `${
                          ((selectedIndex + 1) / screenshots.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={closeViewer}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.045]
                    px-5
                    py-4
                    text-sm
                    font-medium
                    text-white/80
                    transition-all
                    hover:bg-white/[0.08]
                    hover:text-white
                    active:scale-[0.98]
                  "
                >
                  Close viewer
                </button>

                <p className="mt-4 text-center text-[11px] text-white/25">
                  Use ← → to navigate • ESC to close
                </p>
              </div>
            </aside>

            {/* =================================================
                MOBILE COUNTER
            ================================================= */}

            <div
              className="
                absolute
                bottom-4
                left-1/2
                z-30
                -translate-x-1/2
                rounded-full
                border
                border-white/10
                bg-black/60
                px-4
                py-2
                text-xs
                font-medium
                tabular-nums
                text-white/70
                backdrop-blur-xl
                lg:hidden
              "
            >
              {selectedIndex + 1} / {screenshots.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
