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
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl animate-fade-in text-3xl font-light leading-snug tracking-wide text-gray-800 sm:text-4xl md:text-5xl">
          We stress too much for a life that can end any time.
          <span className="block mt-2 text-gray-500">Make sure to live.</span>
        </h1>

        <p className="mt-8 max-w-md text-base text-gray-600">
          A mindful approach to everyday living. Join the waitlist.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-sm flex-col gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg border border-gray-800 bg-transparent px-6 py-3 font-medium text-gray-800 transition-all hover:bg-gray-800 hover:text-white disabled:opacity-50"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-green-600">
            You&apos;re on the list!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-600">
            Something went wrong. Try again.
          </p>
        )}
      </div>

      <VariantNav />
    </section>
  );
}
