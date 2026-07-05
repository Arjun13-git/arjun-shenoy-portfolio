"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 60, y: 70 },
  { x: 220, y: 180 },
  { x: 420, y: 120 },
  { x: 520, y: 260 },
  { x: 360, y: 360 },
  { x: 180, y: 330 },
  { x: 520, y: 70 },
];

const lines = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [1, 4],
  [2, 6],
];

export function HeroNetwork() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <svg className="h-full w-full">

        {lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#22d3ee"
            strokeOpacity={0.25}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.15,
            }}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={4}
            fill="#22d3ee"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

      </svg>

    </div>
  );
}