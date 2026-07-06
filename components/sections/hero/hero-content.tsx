import { AvailabilityPill } from "./availability-pill";
import { HeroActions } from "./hero-actions";
import { HeroStats } from "./hero-stats";
import { motion } from "framer-motion";
import { fadeLeft } from "@/lib/animations";


export function HeroContent() {
  return (
    <motion.div
  className="max-w-3xl"
  variants={fadeLeft}
  initial="hidden"
  animate="visible"
>

      <AvailabilityPill />

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        AI / ML Enthusiast • Software Engineer • Research Explorer
      </p>

      <h1 className="mt-6 font-heading text-5xl font-bold leading-none lg:text-6xl xl:text-[5.5rem]">
        Building

        <span className="text-cyan-400">
          {" "}Intelligent Systems
        </span>

        <br />

        through AI,

        <br />

        Software Engineering

        <br />

        & Research.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            Computer Science Engineering student focused on
            Artificial Intelligence, Backend Systems and
            Research. Passionate about designing intelligent,
            scalable software that bridges cutting-edge AI
            with real-world impact.
        </p>

      <div className="mt-10">
  <HeroActions />
</div>

<HeroStats />

    </motion.div>
  );
}