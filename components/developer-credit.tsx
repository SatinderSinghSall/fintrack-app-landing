"use client";

export default function DeveloperCredit() {
  return (
    <section className="relative w-full py-20 md:py-15 text-center overflow-hidden">
      {/* subtle divider lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* soft glow (very subtle premium touch) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[200px] bg-black/5 blur-[100px] rounded-full" />
      </div>

      {/* content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <h2
          className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl
            font-medium
            tracking-[0.5em]
            text-black/80
          "
        >
          SATINDER SINGH SALL
        </h2>
      </div>
    </section>
  );
}
