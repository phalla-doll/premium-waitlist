"use client";

import { useState } from "react";
import VariantNav from "./VariantNav";

export default function HeroSection3() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [focused, setFocused] = useState(false);

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
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
          A Different Approach
        </p>

        <h1 className="max-w-3xl font-serif text-4xl font-light leading-snug tracking-wide text-white sm:text-5xl md:text-6xl">
          We stress too much for a life that can end any time.
        </h1>

        <p className="mt-8 max-w-2xl text-xl font-light italic text-white/70">
          Make sure to live.
        </p>

        <p className="mt-8 max-w-md text-base text-white/60">
          Curated guidance for a more intentional existence. Limited openings
          available.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-lg flex-col items-center gap-6"
        >
          <div
            className={`relative w-full transition-transform duration-300 ${focused ? "scale-105" : ""}`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Your email address"
              required
              className="w-full border-b-2 border-white/30 bg-transparent px-1 py-4 text-center text-lg text-white placeholder-white/40 outline-none transition-all focus:border-white"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full border border-white/40 bg-transparent px-12 py-3 text-sm uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-black disabled:opacity-50"
          >
            {status === "loading" ? "Processing" : "Request Access"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-6 text-sm text-white/80">
            Welcome. We&apos;ll be in touch.
          </p>
        )}
        {status === "error" && (
          <p className="mt-6 text-sm text-red-400">Please try again.</p>
        )}
      </div>

      <VariantNav />
    </section>
  );
}
