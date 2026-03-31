"use client";

import { useState } from "react";
import VariantNav from "./VariantNav";

export default function HeroSection1() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl animate-fade-in text-3xl font-light leading-snug tracking-tight text-white sm:text-4xl md:text-5xl motion-reduce:animate-none">
          We stress too much for a life that can end any time.
          <span className="block mt-2 text-white/80">Make sure to live.</span>
        </h1>

        <p className="mt-8 max-w-md text-base text-white/90">
          A mindful approach to everyday living. Join the waitlist.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-sm flex-col gap-3"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com…"
            autoComplete="email"
            spellCheck={false}
            required
            className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-sm placeholder-white/50 outline-none transition-all focus:border-white/40 focus:ring-2 focus:ring-white/20"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg border border-white/40 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white hover:text-gray-900 disabled:opacity-50"
          >
            {status === "loading" ? "Joining…" : "Join Waitlist"}
          </button>
        </form>

        {status === "success" && (
          <p aria-live="polite" className="mt-4 text-sm text-green-400">
            You&apos;re on the list!
          </p>
        )}
        {status === "error" && (
          <p aria-live="polite" className="mt-4 text-sm text-red-400">
            Something went wrong. Try again.
          </p>
        )}
      </div>

      <VariantNav />
    </section>
  );
}
