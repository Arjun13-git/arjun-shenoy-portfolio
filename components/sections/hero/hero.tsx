"use client";
import { motion } from "framer-motion";

import { fadeRight } from "@/lib/animations";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { AICore } from "@/components/visualizations/ai-core";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1500px] items-center px-6">
        <div className="grid w-full items-center gap-24 lg:grid-cols-2">
          <HeroContent />

          <motion.div
            className="hidden items-start justify-center pt-8 lg:flex"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <AICore />
          </motion.div>
        </div>
      </div>
    </section>
  );
}