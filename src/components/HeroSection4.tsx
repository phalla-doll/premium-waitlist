"use client";

import { useState } from "react";
import VariantNav from "./VariantNav";

export default function HeroSection4() {
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
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex h-full w-full items-center px-6 py-12 sm:px-12 lg:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <h1 className="animate-fade-in text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              We stress too much for a life that can end any time.
              <span className="block mt-4 text-white/70">
                Make sure to live.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base text-white/70 lg:mt-8 lg:text-lg">
              Stop drifting through your days. Start living with intention. Our
              framework helps you focus on what truly matters.
            </p>

            <div className="mt-8 hidden items-center gap-4 text-white/50 lg:flex">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-white/20 ring-2 ring-black/50"
                  />
                ))}
              </div>
              <span className="text-sm">
                Join 2,400+ others on the waitlist
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
            <div className="animate-slide-up rounded-2xl bg-white/10 p-8 backdrop-blur-lg ring-1 ring-white/20">
              <h2 className="text-xl font-semibold text-white">
                Get Early Access
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Be among the first to transform how you spend your time.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="rounded-xl bg-white/10 px-5 py-4 text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all hover:bg-white/90 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    "Joining..."
                  ) : (
                    <>
                      Join Waitlist
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <title>Arrow</title>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-4 text-center text-sm text-green-400">
                  You&apos;re on the list!
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-center text-sm text-red-400">
                  Try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <VariantNav />
    </section>
  );
}
