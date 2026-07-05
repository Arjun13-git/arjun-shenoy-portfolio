"use client";

import { motion } from "framer-motion";

export function AICore() {
  return (
    <div className="relative flex h-[520px] w-[520px] items-center justify-center">

      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full border border-cyan-500/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full border border-cyan-400/30"
        animate={{ rotate: -360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute h-40 w-40 rounded-full bg-cyan-500/20 blur-xl"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_40px_rgba(34,211,238,1)]"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}