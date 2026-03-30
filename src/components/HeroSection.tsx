"use client";

import { useState } from "react";
import VariantNav from "./VariantNav";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Replace with actual API endpoint
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
        poster="/poster.jpg"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          We stress too much for a life that can end any time.{" "}
          <span className="text-white/90">Make sure to live.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
          Discover a more intentional way to spend your time. Join the waitlist
          and be the first to know when we launch.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 rounded-full bg-white/10 px-6 py-4 text-white placeholder-white/50 backdrop-blur-sm outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-white/90 disabled:opacity-70"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-green-400">
            You&apos;re on the list! We&apos;ll be in touch soon.
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      <VariantNav />
    </section>
  );
}
