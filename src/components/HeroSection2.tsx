"use client";

import { useState } from "react";
import VariantNav from "./VariantNav";

export default function HeroSection2() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-black/60 to-orange-900/70" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl animate-slide-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          We stress too much for a life that can end any time.
          <span className="bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
            {" "}
            Make sure to live.
          </span>
        </h1>

        <p
          className="mt-6 max-w-xl animate-slide-up text-lg text-white/80 sm:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          Break free from the noise. Embrace what matters. Join the waitlist.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-md flex-col gap-4 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="rounded-2xl bg-white/10 px-6 py-4 text-white placeholder-white/50 backdrop-blur-md outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-lime-500 to-green-500 px-8 py-4 font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40 disabled:opacity-70"
          >
            <span className="relative z-10">
              {status === "loading" ? "Joining..." : "Join Waitlist →"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 animate-fade-in text-sm text-green-400">
            🎉 You&apos;re on the list!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 animate-fade-in text-sm text-red-400">
            Oops! Try again.
          </p>
        )}
      </div>

      <VariantNav />
    </section>
  );
}
