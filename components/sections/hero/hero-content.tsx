"use client";

import { AvailabilityPill } from "./availability-pill";
import { HeroActions } from "./hero-actions";
import { HeroStats } from "./hero-stats";
import { motion } from "framer-motion";
import { fadeLeft } from "@/lib/animations";

export function HeroContent() {
  return (
    <motion.div
      className="max-w-2xl"
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
    >
      {/* Availability badge */}
      <AvailabilityPill />

      {/* Identity — name first, large and prominent */}
      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
          AI / ML · Software Engineering · Research
        </p>
        <h1 className="font-heading font-bold leading-none">
          <span className="block text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Arjun Shenoy R
          </span>
          <span className="mt-4 block text-2xl font-semibold leading-snug text-muted-foreground sm:text-3xl lg:text-4xl">
            Building{" "}
            <span className="text-cyan-400">Intelligent Systems</span>
            {" "}through AI,
            <br className="hidden sm:block" />
            {" "}Software Engineering{" "}
            <span className="text-foreground">&amp; Research.</span>
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        Computer Science student building production-grade AI systems, 
        backend architectures, and research-driven software — from hackathons 
        to enterprise internships.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <HeroActions />
      </div>

      {/* Stats */}
      <HeroStats />
    </motion.div>
  );
}