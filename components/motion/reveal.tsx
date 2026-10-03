"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades content in once when it scrolls into view. Respects reduced motion via MotionProvider. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
