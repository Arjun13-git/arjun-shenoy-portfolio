"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/**
 * HeroPhoto — displays the profile photo.
 * On hover: transitions from grayscale → full color with a subtle scale animation.
 * Mobile: smaller, centered. Desktop: larger, right-aligned.
 * Place your photo at /public/profile.jpg
 */
export function HeroPhoto() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      {/* Ambient glow */}
      <div
        className="absolute h-[280px] w-[280px] rounded-full bg-cyan-500/8 blur-[60px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px] lg:blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Photo container */}
      <div
        className="relative z-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Decorative ring */}
        <motion.div
          className="absolute -inset-3 rounded-2xl border border-cyan-500/20"
          animate={hovered ? { borderColor: "rgba(34,211,238,0.4)", scale: 1.02 } : { borderColor: "rgba(34,211,238,0.12)", scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Second decorative ring */}
        <motion.div
          className="absolute -inset-6 rounded-2xl border border-border"
          animate={hovered ? { opacity: 0.6, scale: 1.01 } : { opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Photo frame — responsive sizing */}
        <motion.div
          className="relative h-[240px] w-[190px] overflow-hidden rounded-2xl sm:h-[300px] sm:w-[240px] lg:h-[380px] lg:w-[300px]"
          animate={hovered ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Grayscale overlay — removed on hover */}
          <motion.div
            className="absolute inset-0 z-10"
            animate={hovered ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ mixBlendMode: "saturation", background: "rgba(0,0,0,1)" }}
          />

          <Image
            src="/profile.jpg"
            alt="Arjun Shenoy R — AI Engineer & Software Developer"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 640px) 190px, (max-width: 1024px) 240px, 300px"
          />

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background/40 to-transparent z-20 pointer-events-none" />
        </motion.div>

        {/* Name card at bottom */}
        <motion.div
          className="absolute -bottom-4 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card/90 px-4 py-1.5 backdrop-blur-sm shadow-sm"
          animate={hovered ? { y: -2, borderColor: "rgba(34,211,238,0.3)" } : { y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold text-foreground">Arjun Shenoy R</p>
          <p className="text-xs text-muted-foreground text-center">CSE Student</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
