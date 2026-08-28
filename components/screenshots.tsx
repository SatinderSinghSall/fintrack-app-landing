"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

const screenshots = Array.from(
  { length: 73 },
  (_, i) =>
    `/images/app-version-29-v3.2.0/Screen-${String(i + 1).padStart(
      2,
      "0",
    )}.jpeg`,
);

const VISIBLE_COUNT = 12;
const STEP = 6;
const CHANGE_INTERVAL = 5500;

export default function Screenshots() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  /* -------------------------------------------------------------
     Visible screenshots
  ------------------------------------------------------------- */

  const visibleScreenshots = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
      const index = (startIndex + i) % screenshots.length;

      return {
        src: screenshots[index],
        index,
      };
    });
  }, [startIndex]);

  /* -------------------------------------------------------------
     Navigation
  ------------------------------------------------------------- */

  const next = useCallback(() => {
    setStartIndex((current) => (current + STEP) % screenshots.length);
  }, []);

  const previous = useCallback(() => {
    setStartIndex((current) => {
      return (current - STEP + screenshots.length) % screenshots.length;
    });
  }, []);

  /* -------------------------------------------------------------
     Auto rotation
  ------------------------------------------------------------- */

  useEffect(() => {
    if (isPaused || selectedIndex !== null) return;

    const timer = window.setInterval(next, CHANGE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [isPaused, selectedIndex, next]);

  /* -------------------------------------------------------------
     Lock page scrolling while viewer is open
  ------------------------------------------------------------- */

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  /* -------------------------------------------------------------
     Keyboard controls
  ------------------------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (event.key === "Escape") {
          setSelectedIndex(null);
          setIsPaused(false);
          return;
        }

        if (event.key === "ArrowRight") {
          setSelectedIndex((selectedIndex + 1) % screenshots.length);
          return;
        }

        if (event.key === "ArrowLeft") {
          setSelectedIndex(
            (selectedIndex - 1 + screenshots.length) % screenshots.length,
          );
          return;
        }

        return;
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.code === "Space") {
        event.preventDefault();
        setIsPaused((current) => !current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, previous, selectedIndex]);

  /* -------------------------------------------------------------
     Open / close
  ------------------------------------------------------------- */

  const openScreenshot = (index: number) => {
    setSelectedIndex(index);
    setIsPaused(true);
  };

  const closeScreenshot = () => {
    setSelectedIndex(null);
    setIsPaused(false);
  };

  /* -------------------------------------------------------------
     Progress
  ------------------------------------------------------------- */

  const progress = ((startIndex + VISIBLE_COUNT) / screenshots.length) * 100;

  const selectedProgress =
    selectedIndex !== null
      ? ((selectedIndex + 1) / screenshots.length) * 100
      : 0;

  return (
    <section
      id="screenshots"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-28
        sm:px-6
        sm:py-32
        lg:py-40
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa] to-white" />

        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[140px]" />

        <div className="absolute -bottom-32 left-[15%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.025] blur-[130px]" />

        <div className="absolute -bottom-40 right-[10%] h-[400px] w-[400px] rounded-full bg-sky-500/[0.025] blur-[130px]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-[1500px]">
        {/* =======================================================
            HERO
        ======================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-black/[0.06]
              bg-white
              px-4
              py-2
              text-xs
              font-medium
              text-gray-600
              shadow-[0_4px_24px_rgba(0,0,0,0.045)]
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            FinTrack v3.2.0
          </div>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.035em]
              text-gray-950
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            See FinTrack in action
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-gray-500
              sm:text-lg
              sm:leading-8
            "
          >
            Explore the polished mobile experience built to help you track
            spending, manage budgets, grow savings and understand your finances.
          </p>
        </div>

        {/* =======================================================
            GALLERY
        ======================================================== */}

        <div className="mt-20 sm:mt-24 lg:mt-28">
          {/* Gallery toolbar */}

          <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-base font-semibold tracking-tight text-gray-950 sm:text-lg">
                  App experience
                </h3>

                <span className="rounded-full border border-black/[0.05] bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-500 sm:text-xs">
                  73 screens
                </span>
              </div>

              <p className="mt-1.5 text-xs text-gray-500 sm:text-sm">
                Tap any screen to explore it in detail.
              </p>
            </div>

            {/* Controls */}

            <div className="flex items-center gap-2">
              {/* Previous */}

              <button
                type="button"
                onClick={previous}
                aria-label="Previous screenshots"
                className="
                  group
                  flex
                  h-11
                  w-11
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.07]
                  bg-white
                  text-gray-700
                  shadow-[0_4px_18px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-black/[0.12]
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                  active:translate-y-0
                  active:scale-95
                "
              >
                <span className="transition-transform group-hover:-translate-x-0.5">
                  ←
                </span>
              </button>

              {/* Pause */}

              <button
                type="button"
                onClick={() => setIsPaused((current) => !current)}
                aria-label={
                  isPaused
                    ? "Resume screenshot preview"
                    : "Pause screenshot preview"
                }
                className="
                  inline-flex
                  h-11
                  cursor-pointer
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-black/[0.07]
                  bg-white
                  px-5
                  text-xs
                  font-semibold
                  text-gray-800
                  shadow-[0_4px_18px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-black/[0.12]
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                  active:translate-y-0
                  active:scale-[0.98]
                  sm:px-5
                "
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[9px]">
                  {isPaused ? "▶" : "Ⅱ"}
                </span>

                <span>{isPaused ? "Resume" : "Pause"}</span>
              </button>

              {/* Next */}

              <button
                type="button"
                onClick={next}
                aria-label="Next screenshots"
                className="
                  group
                  flex
                  h-11
                  w-11
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.07]
                  bg-white
                  text-gray-700
                  shadow-[0_4px_18px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-black/[0.12]
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                  active:translate-y-0
                  active:scale-95
                "
              >
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* =====================================================
              SCREEN GRID
          ====================================================== */}

          <div
            className="
              relative
              rounded-[34px]
              border
              border-black/[0.045]
              bg-white/50
              p-2
              shadow-[0_25px_80px_rgba(0,0,0,0.035)]
              sm:rounded-[40px]
              sm:p-3
              lg:p-4
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6 lg:gap-6">
              {visibleScreenshots.map(({ src, index }, position) => (
                <button
                  key={`${src}-${startIndex}`}
                  type="button"
                  onClick={() => openScreenshot(index)}
                  aria-label={`View FinTrack screen ${index + 1}`}
                  className="
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-black/[0.055]
                    bg-white
                    text-left
                    shadow-[0_8px_28px_rgba(0,0,0,0.055)]
                    outline-none
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:shadow-[0_20px_55px_rgba(0,0,0,0.12)]
                    focus-visible:ring-2
                    focus-visible:ring-gray-900
                    focus-visible:ring-offset-2
                    sm:rounded-[28px]
                  "
                >
                  <div className="relative aspect-[9/20] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={src}
                      alt={`FinTrack app screen ${index + 1}`}
                      fill
                      sizes="
                        (max-width: 640px) 44vw,
                        (max-width: 768px) 29vw,
                        (max-width: 1024px) 21vw,
                        15vw
                      "
                      className="
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.035]
                      "
                      priority={position < 6}
                    />

                    {/* Hover overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/45
                        via-transparent
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {/* View badge */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-1/2
                        -translate-x-1/2
                        translate-y-2
                        rounded-full
                        bg-black/75
                        px-3.5
                        py-2
                        text-[10px]
                        font-semibold
                        whitespace-nowrap
                        text-white
                        opacity-0
                        shadow-lg
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      Open screen
                    </div>

                    {/* Number */}

                    <div
                      className="
                        absolute
                        right-3
                        top-3
                        rounded-full
                        border
                        border-white/30
                        bg-white/85
                        px-2.5
                        py-1
                        text-[9px]
                        font-semibold
                        tabular-nums
                        text-gray-700
                        opacity-0
                        shadow-sm
                        backdrop-blur-xl
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/[0.045] sm:rounded-[28px]" />
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================
              PROGRESS
          ====================================================== */}

          <div className="mt-8">
            <div className="flex items-center gap-4">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-gray-900 transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.max(4, Math.min(progress, 100))}%`,
                  }}
                />
              </div>

              <span className="shrink-0 text-xs font-medium tabular-nums text-gray-400">
                {String(startIndex + 1).padStart(2, "0")} / 73
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-2 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
              <span>
                {isPaused
                  ? "Preview paused — explore at your own pace."
                  : "Automatically showcasing the FinTrack experience."}
              </span>

              <span className="hidden sm:block">
                Hover to pause · Click to inspect · ← → navigate
              </span>
            </div>
          </div>

          {/* =====================================================
              FULL GALLERY CTA
          ====================================================== */}

          <div className="mt-11 flex justify-center">
            <Link
              href="/screenshots"
              className="
                group
                inline-flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                bg-gray-950
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                shadow-[0_14px_40px_rgba(0,0,0,0.16)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-black
                hover:shadow-[0_20px_55px_rgba(0,0,0,0.22)]
                active:translate-y-0
                active:scale-[0.98]
              "
            >
              <span>View all 73 screenshots</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =========================================================
            DOWNLOAD CTA
        ========================================================== */}

        <div className="mt-32 sm:mt-36">
          <div
            className="
              relative
              mx-auto
              max-w-6xl
              overflow-hidden
              rounded-[34px]
              border
              border-white/10
              bg-gradient-to-br
              from-[#020617]
              via-[#0B1120]
              to-black
              px-6
              py-14
              shadow-[0_40px_120px_rgba(0,0,0,.25)]
              sm:rounded-[42px]
              sm:px-10
              sm:py-16
              md:px-16
              md:py-20
            "
          >
            <div className="pointer-events-none absolute -left-24 -top-32 h-96 w-96 rounded-full bg-violet-500/20 blur-[130px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-sky-500/10 blur-[130px]" />

            <div className="relative z-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available Now on Google Play
              </span>

              <h3 className="mt-7 text-4xl font-semibold tracking-[-0.035em] text-white md:text-6xl">
                Download FinTrack Today
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                Take control of your finances with smart expense tracking,
                budgeting, subscriptions, savings goals and beautiful analytics
                — all inside one premium mobile experience.
              </p>

              <div className="mt-11">
                <a
                  href="https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-4
                    rounded-full
                    bg-white
                    px-7
                    py-4
                    text-black
                    shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-[1.02]
                    sm:gap-5
                    sm:px-10
                    sm:py-5
                  "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                    ▶
                  </div>

                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 sm:text-xs">
                      GET IT ON
                    </p>

                    <p className="text-xl font-bold sm:text-2xl">Google Play</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:mt-14 md:grid-cols-4">
                {[
                  ["4.8★", "User Rating"],
                  ["73", "App Screens"],
                  ["100%", "Secure & Private"],
                  ["Free", "Download"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.045]
                      p-4
                      text-left
                      backdrop-blur-xl
                      sm:p-5
                    "
                  >
                    <p className="text-2xl font-bold text-white sm:text-3xl">
                      {value}
                    </p>

                    <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCREENSHOT VIEWER
      ========================================================== */}

      {selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/75
            p-0
            backdrop-blur-2xl
            sm:p-5
            lg:p-8
          "
          role="dialog"
          aria-modal="true"
          aria-label={`FinTrack screen ${selectedIndex + 1}`}
          onClick={closeScreenshot}
        >
          {/* Viewer */}

          <div
            className="
              relative
              flex
              h-full
              w-full
              max-w-[1400px]
              flex-col
              overflow-hidden
              bg-[#09090b]
              shadow-[0_40px_140px_rgba(0,0,0,0.6)]
              sm:h-[94vh]
              sm:rounded-[34px]
              sm:border
              sm:border-white/10
              lg:flex-row
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* ===================================================
                IMAGE
            ==================================================== */}

            <div
              className="
                relative
                flex
                min-h-0
                flex-1
                items-center
                justify-center
                bg-gradient-to-br
                from-[#111214]
                via-[#09090b]
                to-black
                p-5
                sm:p-8
                lg:p-12
              "
            >
              <div
                className="
                  relative
                  h-[68vh]
                  max-h-[780px]
                  w-auto
                  aspect-[9/20]
                  overflow-hidden
                  rounded-[26px]
                  bg-white
                  shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                  sm:rounded-[32px]
                "
              >
                <Image
                  src={screenshots[selectedIndex]}
                  alt={`FinTrack app screen ${selectedIndex + 1}`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 45vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Desktop previous */}

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + screenshots.length) %
                      screenshots.length,
                  )
                }
                aria-label="Previous screen"
                className="
                  absolute
                  left-4
                  top-1/2
                  hidden
                  h-12
                  w-12
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.08]
                  text-xl
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/[0.15]
                  sm:flex
                  lg:left-8
                "
              >
                ←
              </button>

              {/* Desktop next */}

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % screenshots.length)
                }
                aria-label="Next screen"
                className="
                  absolute
                  right-4
                  top-1/2
                  hidden
                  h-12
                  w-12
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.08]
                  text-xl
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/[0.15]
                  sm:flex
                  lg:right-8
                "
              >
                →
              </button>
            </div>

            {/* ===================================================
                DETAILS PANEL
            ==================================================== */}

            <div
              className="
                flex
                w-full
                shrink-0
                flex-col
                border-t
                border-white/10
                bg-[#0b0b0d]
                p-6
                text-white
                sm:p-8
                lg:w-[360px]
                lg:border-l
                lg:border-t-0
                lg:p-9
              "
            >
              {/* Top */}

              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[11px] font-medium text-neutral-300">
                  FinTrack v3.2.0
                </span>

                <button
                  type="button"
                  onClick={closeScreenshot}
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
                    bg-white/[0.04]
                    text-lg
                    text-neutral-300
                    transition
                    hover:bg-white/[0.1]
                    hover:text-white
                    active:scale-95
                  "
                >
                  ×
                </button>
              </div>

              {/* Details */}

              <div className="mt-8 lg:mt-12">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  App screen
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Screen {selectedIndex + 1}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  Explore this FinTrack interface in detail. Navigate through
                  the complete mobile experience using the controls.
                </p>
              </div>

              {/* Counter card */}

              <div className="mt-7 rounded-[22px] border border-white/10 bg-white/[0.035] p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-semibold tabular-nums">
                      {String(selectedIndex + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-1 text-xs text-neutral-500">
                      Current screen
                    </p>
                  </div>

                  <p className="text-sm text-neutral-500">
                    / {screenshots.length}
                  </p>
                </div>

                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-500"
                    style={{
                      width: `${selectedProgress}%`,
                    }}
                  />
                </div>
              </div>

              {/* Mobile navigation */}

              <div className="mt-5 grid grid-cols-2 gap-3 sm:hidden">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + screenshots.length) %
                        screenshots.length,
                    )
                  }
                  className="
                    cursor-pointer
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-white/[0.08]
                    active:scale-[0.98]
                  "
                >
                  ← Previous
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedIndex((selectedIndex + 1) % screenshots.length)
                  }
                  className="
                    cursor-pointer
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-white/[0.08]
                    active:scale-[0.98]
                  "
                >
                  Next →
                </button>
              </div>

              {/* Bottom */}

              <div className="mt-auto pt-7">
                <button
                  type="button"
                  onClick={() => setIsPaused((current) => !current)}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2.5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-4
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-white/[0.08]
                    active:scale-[0.99]
                  "
                >
                  <span>{isPaused ? "▶" : "Ⅱ"}</span>

                  {isPaused ? "Resume preview" : "Pause preview"}
                </button>

                <p className="mt-4 text-center text-[10px] text-neutral-600">
                  ← → navigate · ESC close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
