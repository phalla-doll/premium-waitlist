"use client";

import { useEffect, useState } from "react";
import VariantNav from "./VariantNav";

export default function HeroSection5() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Make sure to live.";

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }
    }, 80);
    return () => clearTimeout(timeout);
  }, [displayText]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 pb-24 text-center">
        <div className="mb-4 h-12 w-12 animate-pulse rounded-full bg-white/20 ring-1 ring-white/30" />

        <h1 className="max-w-5xl text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block text-white/30">WE STRESS TOO MUCH</span>
          <span className="block mt-2">FOR A LIFE THAT</span>
          <span className="block mt-2 text-white">CAN END ANY TIME.</span>
        </h1>

        <p className="mt-10 min-h-[2rem] text-2xl font-light text-white/90 sm:text-3xl md:text-4xl">
          {displayText}
          <span className="animate-blink ml-1 text-white">|</span>
        </p>

        <p className="mt-8 max-w-md text-base text-white/60">
          Stop waiting. Start living. Join thousands ready for change.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6 pb-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to join the waitlist"
            required
            className="flex-1 rounded-lg bg-white/10 px-6 py-4 text-white placeholder-white/50 backdrop-blur-sm outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-white px-8 py-4 font-bold text-black transition-all hover:bg-white/90 disabled:opacity-70"
          >
            {status === "loading" ? "JOINING..." : "JOIN NOW"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-3 text-center text-sm text-green-400">
            ✓ You&apos;re on the list! We&apos;ll be in touch.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-center text-sm text-red-400">
            Something went wrong. Try again.
          </p>
        )}
      </div>

      <VariantNav />
    </section>
  );
}
