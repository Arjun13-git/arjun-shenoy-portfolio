"use client";
import { motion } from "framer-motion";

import { fadeRight } from "@/lib/animations";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { AICore } from "@/components/visualizations/ai-core";
import { SystemStatus } from "@/components/hero/system-status";
import { HeroEngine } from "@/components/visualizations/hero-engine";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1700px] items-center px-6">
        <div className="grid w-full items-center gap-24 lg:grid-cols-[0.9fr_1.1fr]">
          <HeroContent />

          <motion.div
            className="hidden items-start justify-center pt-8 lg:flex"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <HeroEngine />
          </motion.div>
        </div>
      </div>
    </section>
  );
}