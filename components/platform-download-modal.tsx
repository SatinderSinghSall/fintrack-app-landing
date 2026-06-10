"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { ArrowUpRight, Download, Smartphone, X } from "lucide-react";

import { useEffect, useState } from "react";

type Platform = "android" | "ios";

interface PlatformDownloadModalProps {
  children: React.ReactNode;
  platform: Platform;
  isLive?: boolean;
}

export default function PlatformDownloadModal({
  children,
  platform,
  isLive = false,
}: PlatformDownloadModalProps) {
  const [open, setOpen] = useState(false);

  const PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=com.satinder_singh_sall.mobileapp&hl=en_IN";

  const isAndroid = platform === "android";

  useEffect(() => {
    if (open) {
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
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="
          overflow-hidden
          border-0
          bg-transparent
          p-0
          shadow-none
          sm:max-w-md
        "
      >
        <div
          className="
            relative overflow-hidden

            rounded-[36px]

            border border-black/5

            bg-white

            shadow-[0_30px_120px_rgba(0,0,0,0.12)]
          "
        >
          {/* Soft Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.06),transparent_35%)]" />

          {/* Top Glow */}
          <div className="absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="
              absolute right-5 top-5 z-20

              flex h-10 w-10 items-center justify-center

              rounded-full

              bg-black/[0.04]

              text-black/50

              transition-all duration-300

              hover:bg-black/[0.07]
              hover:text-black

              cursor-pointer
            "
          >
            <X size={18} />
          </button>

          <div className="relative z-10 px-8 pb-8 pt-10 sm:px-10">
            {/* App Icon */}
            <div className="flex justify-center">
              <div
                className="
                  relative

                  flex h-24 w-24 items-center justify-center

                  rounded-[30px]

                  bg-gradient-to-br
                  from-indigo-500
                  via-blue-500
                  to-violet-500

                  shadow-[0_25px_60px_rgba(99,102,241,0.28)]
                "
              >
                <div className="absolute inset-0 rounded-[30px] bg-white/10" />

                <Smartphone size={36} className="text-white" />
              </div>
            </div>

            {/* Badge */}
            <div className="mt-7 flex justify-center">
              <div
                className={`
                  rounded-full

                  px-4 py-2

                  text-[11px]
                  font-semibold

                  uppercase
                  tracking-[0.14em]

                  ${
                    isAndroid && isLive
                      ? "bg-green-50 text-green-700 border border-green-100"
                      : "bg-amber-50 text-amber-700 border border-amber-100"
                  }
                `}
              >
                {isAndroid && isLive
                  ? "Now Live on Google Play"
                  : "iOS Version Coming Soon"}
              </div>
            </div>

            {/* Heading */}
            <DialogHeader className="mt-7 space-y-4 text-center">
              <h2
                className="
                  text-4xl

                  font-semibold

                  tracking-tight

                  leading-[1.05]

                  text-black
                "
              >
                {isAndroid && isLive
                  ? "Download FinTrack"
                  : "FinTrack for iPhone"}
              </h2>

              <DialogDescription
                className="
                  mx-auto

                  max-w-md

                  text-[15px]

                  leading-8

                  text-black/60
                "
              >
                {isAndroid && isLive ? (
                  <>
                    Track expenses, manage budgets, monitor subscriptions, and
                    build smarter financial habits with FinTrack mobile app.
                  </>
                ) : (
                  <>
                    The iOS version is currently under development and will be
                    launching soon on the Apple App Store.
                  </>
                )}
              </DialogDescription>
            </DialogHeader>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3">
              {isAndroid && isLive ? (
                <a
                  href={PLAYSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="
                      h-14 w-full

                      rounded-2xl

                      bg-black

                      text-base
                      font-medium
                      text-white

                      shadow-[0_14px_40px_rgba(0,0,0,0.18)]

                      transition-all duration-300

                      hover:-translate-y-0.5
                      hover:bg-zinc-900
                      hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]

                      cursor-pointer
                    "
                  >
                    Download for Android
                    <Download className="ml-2" size={18} />
                  </Button>
                </a>
              ) : (
                <a
                  href="https://satinder-portfolio.vercel.app/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="
                      h-14 w-full

                      rounded-2xl

                      bg-black

                      text-base
                      font-medium
                      text-white

                      shadow-[0_14px_40px_rgba(0,0,0,0.18)]

                      transition-all duration-300

                      hover:-translate-y-0.5
                      hover:bg-zinc-900
                      hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]

                      cursor-pointer
                    "
                  >
                    Join Waitlist
                    <ArrowUpRight className="ml-2" size={18} />
                  </Button>
                </a>
              )}

              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                className="
                  h-12

                  rounded-2xl

                  text-black/55

                  hover:bg-black/[0.04]
                  hover:text-black

                  cursor-pointer
                "
              >
                Maybe later
              </Button>
            </div>

            {/* Footer */}
            <p
              className="
                mt-8

                text-center

                text-[11px]

                uppercase

                tracking-[0.22em]

                text-black/30
              "
            >
              {isAndroid && isLive ? "Available Now" : "Coming Soon"}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
