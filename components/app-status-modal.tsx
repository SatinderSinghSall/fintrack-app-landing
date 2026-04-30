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
import { ExternalLink } from "lucide-react";

export default function AppStatusModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="
        sm:max-w-lg 
        rounded-3xl 
        border border-black/10
        bg-white/90 backdrop-blur-xl
        shadow-[0_20px_80px_rgba(0,0,0,0.15)]
        p-8
      "
      >
        <DialogHeader className="text-center space-y-4">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            🚧 Mobile App is Under Development
          </DialogTitle>

          <div className="flex justify-center">
            <div className="px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium border border-yellow-200">
              Closed Testing • In Progress
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            FinTrack is not live yet.
          </h3>

          <DialogDescription className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            We’re currently running{" "}
            <span className="font-medium text-black">
              Google Play Closed Testing
            </span>{" "}
            to refine performance and polish the experience before launch.
            <br />
            <br />
            You can request early access or reach out the developer directly.
          </DialogDescription>
        </DialogHeader>

        <div className="my-6 h-px bg-black/5" />

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
          <a
            href="https://satinder-portfolio.vercel.app/contact"
            target="_blank"
            className="w-full"
          >
            <Button className="w-full h-11 rounded-full bg-black text-white hover:bg-gray-900 text-sm font-medium">
              Contact Developer
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </a>

          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="
                h-11 px-6 rounded-full 
                text-sm font-medium
                border-black/10
                bg-white
                hover:bg-gray-50
                sm:w-auto
                "
            >
              Maybe later
            </Button>
          </DialogTrigger>
        </div>

        <p className="text-center text-s text-gray-400 mt-4">
          Public release coming soon...
        </p>
      </DialogContent>
    </Dialog>
  );
}
