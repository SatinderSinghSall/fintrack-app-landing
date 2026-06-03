"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { db } from "@/lib/firebase";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "",
    goal: "",
    platform: "Android",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const joined = localStorage.getItem("fintrack-waitlist-joined");

    if (joined === "true") return;

    const dismissedUntil = localStorage.getItem("fintrack-waitlist-dismissed");

    const now = Date.now();

    // Prevent showing before cooldown ends
    if (dismissedUntil && now < Number(dismissedUntil)) {
      return;
    }

    // Show after 5–10 seconds
    const initialDelay = Math.floor(Math.random() * 5000) + 5000;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);

    // Reopen after 15 minutes
    const nextShow = Date.now() + 15 * 60 * 1000;

    localStorage.setItem("fintrack-waitlist-dismissed", nextShow.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,

        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "waitlist_users"), payload);

      localStorage.setItem("fintrack-waitlist-joined", "true");

      setSubmitted(true);

      setTimeout(() => {
        setIsOpen(false);
      }, 15000);
    } catch (error) {
      console.error("Error adding waitlist user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-start justify-center
        overflow-y-auto
        bg-black/35
        px-4 py-10
        backdrop-blur-md
        animate-in fade-in duration-500
      "
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[32px]
          border border-white/20
          bg-white/[0.78]
          p-5
          shadow-[0_25px_100px_rgba(0,0,0,0.18)]
          backdrop-blur-3xl
          animate-in
          slide-in-from-bottom-4
          zoom-in-95
          duration-500

          sm:p-7
          md:p-10
        "
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl" />

        {/* Noise Texture */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.025]
            mix-blend-overlay
            bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)]
            bg-[size:18px_18px]
          "
        />

        {/* Close */}
        <button
          onClick={handleClose}
          type="button"
          className="
            absolute right-4 top-4 z-50
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-black/[0.04]
            text-black/45
            transition-all duration-300
            hover:bg-black/[0.08]
            hover:text-black
            hover:scale-105
            active:scale-95
            cursor-pointer
          "
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          {/* Badge */}
          {/* Premium Badge */}
          <div
            className="
            inline-flex
            items-center
            gap-2.5

            rounded-full

            border
            border-white/30

            bg-white/55

            px-5
            py-2.5

            shadow-[0_4px_20px_rgba(255,255,255,0.15)]

            backdrop-blur-2xl

            transition-all
            duration-300

            hover:bg-white/70
            hover:shadow-[0_6px_30px_rgba(255,255,255,0.22)]
          "
          >
            {/* Glow Dot */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-2.5 w-2.5 rounded-full bg-blue-500/30 blur-sm" />

              <div className="relative h-1.5 w-1.5 rounded-full bg-blue-500" />
            </div>

            {/* Text */}
            <span
              className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-black/65

              sm:text-[11px]
            "
            >
              FinTrack Waitlist
            </span>
          </div>

          {/* Heading */}
          <div className="mt-6">
            <h2
              className="
                max-w-xl
                font-serif
                text-4xl
                font-bold
                leading-[0.95]
                tracking-tight
                text-black

                sm:text-5xl
                md:text-6xl
              "
            >
              Join the <span className="text-blue-500">FinTrack</span> Waitlist
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-xl
                text-[15px]
                leading-7
                text-black/60

                sm:text-[16px]
                sm:leading-8
              "
            >
              FinTrack is currently in Google Play closed testing. Join the
              waitlist to receive launch updates and be notified when the app
              officially launches.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=1"
                className="
                  h-10 w-10 rounded-full
                  border-2 border-white
                  object-cover
                "
              />

              <img
                src="https://i.pravatar.cc/100?img=7"
                className="
                  h-10 w-10 rounded-full
                  border-2 border-white
                  object-cover
                "
              />

              <img
                src="https://i.pravatar.cc/100?img=3"
                className="
                  h-10 w-10 rounded-full
                  border-2 border-white
                  object-cover
                "
              />
            </div>

            <p className="text-sm text-black/50">
              Joined by <span className="font-semibold text-black">137+</span>{" "}
              early users
            </p>
          </div>

          {/* FORM */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Name */}
                <Input
                  required
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="
                    h-14
                    rounded-2xl
                    border-black/10
                    bg-white/50
                    px-5
                    text-black
                    placeholder:text-black/35
                    backdrop-blur-xl
                    focus-visible:ring-1
                    focus-visible:ring-black
                  "
                />

                {/* Email */}
                <Input
                  required
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="
                    h-14
                    rounded-2xl
                    border-black/10
                    bg-white/50
                    px-5
                    text-black
                    placeholder:text-black/35
                    backdrop-blur-xl
                    focus-visible:ring-1
                    focus-visible:ring-black
                  "
                />

                {/* Occupation */}
                <select
                  required
                  value={formData.occupation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      occupation: e.target.value,
                    })
                  }
                  className="
                    h-14
                    rounded-2xl
                    border border-black/10
                    bg-white/50
                    px-5
                    text-black/70
                    backdrop-blur-xl
                    outline-none
                    focus:ring-1
                    focus:ring-black
                  "
                >
                  <option value="">Your occupation</option>

                  <option>Student</option>
                  <option>Developer</option>
                  <option>Freelancer</option>
                  <option>Working Professional</option>
                  <option>Business Owner</option>
                </select>

                {/* Goal */}
                <select
                  required
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      goal: e.target.value,
                    })
                  }
                  className="
                    h-14
                    rounded-2xl
                    border border-black/10
                    bg-white/50
                    px-5
                    text-black/70
                    backdrop-blur-xl
                    outline-none
                    focus:ring-1
                    focus:ring-black
                  "
                >
                  <option value="">Why are you interested?</option>

                  <option>Track expenses</option>
                  <option>Better budgeting</option>
                  <option>Save money</option>
                  <option>Financial analytics</option>
                  <option>Money management</option>
                </select>
              </div>

              {/* Platform */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-black/60">
                  Preferred platform
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Android", "iPhone"].map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          platform,
                        })
                      }
                      className={`
                          rounded-full
                          border
                          px-5
                          py-2.5
                          text-sm
                          transition-all
                          duration-300

                          ${
                            formData.platform === platform
                              ? "border-black bg-black text-white"
                              : "border-black/10 bg-white/40 text-black/60 hover:bg-black/5"
                          }
                        `}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                h-14
                w-full
                rounded-2xl
                bg-black
                text-base
                font-medium
                text-white
                shadow-[0_10px_40px_rgba(0,0,0,0.2)]
                transition-all
                duration-300
                hover:scale-[1.01]
                hover:bg-black/90
                active:scale-[0.99]
                disabled:cursor-not-allowed
                disabled:opacity-80
                cursor-pointer
              "
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    {/* Spinner */}
                    <div
                      className="
                      h-5 w-5
                      rounded-full
                      border-2
                      border-white/30
                      border-t-white
                      animate-spin
                    "
                    />

                    <span>Joining Waitlist...</span>
                  </div>
                ) : (
                  "Join Waitlist"
                )}
              </Button>

              {/* Footer */}
              <p
                className="
                  text-center
                  text-xs
                  tracking-wide
                  text-black/35
                "
              >
                NO SPAM • ONLY IMPORTANT PRODUCT UPDATES
              </p>
            </form>
          ) : (
            <div
              className="
                mt-10
                rounded-[28px]
                border border-green-200/50
                bg-green-50/70
                p-7
                text-center
                backdrop-blur-xl
              "
            >
              <div
                className="
                  mx-auto mb-4
                  flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  bg-green-500
                  text-2xl
                  text-white
                  shadow-lg
                "
              >
                ✓
              </div>

              <h3 className="text-2xl font-semibold text-green-700">
                You're on the waitlist! 🎉
              </h3>

              <p className="mt-3 text-sm leading-7 text-green-700/80">
                We’ll notify you once FinTrack officially launches.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
