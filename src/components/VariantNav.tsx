"use client";

import { usePathname, useRouter } from "next/navigation";

const variants = ["", "/1", "/2", "/3", "/4", "/5"];

export default function VariantNav() {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = variants.findIndex(
    (v) => v === pathname || (v === "" && pathname === "/"),
  );

  const goTo = (index: number) => {
    if (index < 0) index = variants.length - 1;
    if (index >= variants.length) index = 0;
    router.push(variants[index] || "/");
  };

  const handlePrev = () => goTo(currentIndex - 1);
  const handleNext = () => goTo(currentIndex + 1);

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md ring-1 ring-white/20">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Previous variant"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <title>Previous</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <span className="min-w-[3rem] text-center text-sm font-medium text-white">
          {currentIndex + 1}/{variants.length}
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Next variant"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <title>Next</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
