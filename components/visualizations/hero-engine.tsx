"use client";

import { AICore } from "./ai-core";
import { HeroNetwork } from "./hero-network";
import { ParticleField } from "./particle-field";
import { SystemStatus } from "@/components/hero/system-status";

export function HeroEngine() {
  return (
    <div className="relative h-[650px] w-full">

      <ParticleField />

      <HeroNetwork />

      <div className="absolute inset-0 flex items-center justify-center">
        <AICore />
      </div>

      <div className="absolute bottom-10 left-10 z-20">
        <SystemStatus />
      </div>

    </div>
  );
}