"use client";

import { motion } from "framer-motion";

export function Ocean() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-60">

      <motion.svg
        viewBox="0 0 1440 320"
        className="w-full"
        preserveAspectRatio="none"
        animate={{
          x: [-40, 40, -40],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          fill="rgba(34,211,238,0.12)"
          d="
          M0,192
          L60,170
          C120,150,240,120,360,128
          C480,136,600,180,720,170
          C840,160,960,90,1080,85
          C1200,80,1320,140,1440,170
          L1440,320
          L0,320
          Z
          "
        />
      </motion.svg>

    </div>
  );
}