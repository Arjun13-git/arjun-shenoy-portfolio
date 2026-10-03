"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/**
 * Profile photo: grayscale by default, full colour on hover.
 * The entrance is a short CSS fade so the image never waits for hydration.
 */
export function HeroPhoto() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fade-in-up relative flex items-center justify-center">
      {/* Soft ambient glow behind the frame */}
      <div
        className="pointer-events-none absolute h-[220px] w-[220px] rounded-full blur-[60px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px] lg:blur-[80px]"
        style={{ backgroundColor: "var(--glow)" }}
        aria-hidden="true"
      />

      <div
        className="relative z-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Inner ring */}
        <motion.div
          className="absolute -inset-2 rounded-2xl border border-brand-border sm:-inset-3"
          animate={{ opacity: hovered ? 1 : 0.5, scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-hidden="true"
        />

        {/* Outer ring */}
        <motion.div
          className="absolute -inset-4 rounded-2xl border border-border sm:-inset-6"
          animate={{ opacity: hovered ? 0.9 : 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-hidden="true"
        />

        <motion.div
          className="relative h-[200px] w-[160px] overflow-hidden rounded-2xl bg-elevated sm:h-[280px] sm:w-[224px] lg:h-[380px] lg:w-[300px]"
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Grayscale overlay — removed on hover */}
          <motion.div
            className="absolute inset-0 z-10"
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ mixBlendMode: "saturation", background: "rgba(0,0,0,1)" }}
            aria-hidden="true"
          />

          <Image
            src="/profile.jpg"
            alt="Portrait of Arjun Shenoy R"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 300px"
          />
        </motion.div>

        {/* Name card */}
        <div className="absolute -bottom-4 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 text-center shadow-sm">
          <p className="text-xs font-semibold text-foreground">Arjun Shenoy R</p>
          <p className="text-[11px] text-muted-foreground">CSE Student</p>
        </div>
      </div>
    </div>
  );
}
