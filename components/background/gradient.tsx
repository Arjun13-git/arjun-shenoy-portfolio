import { motion } from "framer-motion";
export function GradientBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-background" />

      <motion.div
  className="absolute left-[-200px] top-[-200px] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]"
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.7, 0.4],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      <div className="absolute right-[-200px] bottom-[-200px] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_45%)]" />
    </>
  );
}