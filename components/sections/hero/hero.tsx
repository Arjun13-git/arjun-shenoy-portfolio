"use client";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroPhoto } from "./hero-photo";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24" aria-label="Introduction">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:min-h-screen lg:flex-row lg:items-center lg:gap-16">
        {/* Portrait — shown on mobile centered above content, on desktop right side */}
        <div className="flex justify-center lg:order-2 lg:flex-1 lg:justify-end mb-10 lg:mb-0">
          <HeroPhoto />
        </div>

        {/* Content */}
        <div className="w-full text-center lg:order-1 lg:flex-1 lg:text-left">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}