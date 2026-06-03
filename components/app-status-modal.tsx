"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { ArrowUpRight, X } from "lucide-react";

import { useEffect, useState } from "react";

export default function AppStatusModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

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

          border border-white/20

          bg-white/[0.78]

          p-0

          shadow-[0_30px_120px_rgba(0,0,0,0.22)]

          backdrop-blur-3xl

          sm:max-w-xl

          rounded-[34px]

          duration-300
        "
      >
        <div className="absolute inset-0 overflow-hidden rounded-[34px]">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-zinc-100/60" />
        </div>

        <button
          onClick={() => setOpen(false)}
          className="
            absolute right-5 top-5 z-20

            flex h-10 w-10 items-center justify-center

            rounded-full

            bg-black/[0.04]

            text-black/55

            transition-all duration-300

            hover:scale-105
            hover:bg-black/[0.08]
            hover:text-black

            cursor-pointer
          "
        >
          <X size={18} />
        </button>

        <div className="relative z-10 p-7 sm:p-9">
          <DialogHeader className="space-y-5 text-center">
            {/* Top Label */}
            <div className="flex justify-center">
              <div
                className="
                  inline-flex items-center gap-2

                  rounded-full

                  border border-yellow-200

                  bg-yellow-50/90

                  px-4 py-2

                  text-xs font-medium text-yellow-700

                  shadow-sm
                "
              >
                Closed Testing • In Progress
              </div>
            </div>

            <DialogTitle
              className="
                text-xl sm:text-2xl

                font-semibold

                tracking-tight

                text-black
              "
            >
              🚧 Mobile App is Under Development
            </DialogTitle>

            <h3
              className="
                text-3xl sm:text-4xl

                font-bold

                tracking-tight

                leading-[1.05]

                text-black
              "
            >
              FinTrack is not live yet.
            </h3>

            <DialogDescription
              className="
                mx-auto

                max-w-lg

                text-sm sm:text-[15px]

                leading-7 sm:leading-8

                text-black/60
              "
            >
              We’re currently running{" "}
              <span className="font-semibold text-black">
                Google Play Closed Testing
              </span>{" "}
              to refine performance and polish the experience before launch.
              <br />
              <br />
              You can request early access or reach out the developer directly.
            </DialogDescription>
          </DialogHeader>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
            <a
              href="https://satinder-portfolio.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className="
                  h-12 w-full

                  rounded-full

                  bg-black

                  text-sm font-medium text-white

                  shadow-[0_10px_40px_rgba(0,0,0,0.15)]

                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:bg-zinc-900
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]

                  cursor-pointer
                "
              >
                Contact Developer
                <ArrowUpRight className="ml-2" size={17} />
              </Button>
            </a>

            {/* Close */}
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="
                h-12

                rounded-full

                border-black/10

                bg-white/70

                px-6

                text-sm font-medium

                backdrop-blur-xl

                transition-all duration-300

                hover:bg-white
                hover:shadow-md

                sm:w-auto

                cursor-pointer
              "
            >
              Maybe later
            </Button>
          </div>

          {/* Footer */}
          <p
            className="
              mt-7

              text-center

              text-xs

              uppercase

              tracking-[0.22em]

              text-black/35
            "
          >
            Public release coming soon...
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
