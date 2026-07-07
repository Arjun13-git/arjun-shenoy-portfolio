"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cpu, Briefcase } from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeUp } from "@/lib/animations";

const facts = [
  {
    Icon: GraduationCap,
    label: "Education",
    value: "BE Computer Science & Engineering",
    sub: `${siteConfig.college} · VTU · CGPA ${siteConfig.cgpa}`,
  },
  {
    Icon: Cpu,
    label: "Specialization",
    value: "AI/ML Engineering",
    sub: "Machine Learning · Agentic AI · Backend Systems",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    sub: "Available for Remote & Relocation",
  },
];

// Interests array removed as it is now defined inline

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — Narrative */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                About Me
              </p>
              <h2
                id="about-heading"
                className="mt-3 font-heading text-3xl font-bold md:text-4xl"
              >
                Engineer by discipline.{" "}
                <span className="gradient-text">AI-first by conviction.</span>
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer Science Engineering student at Sahyadri College
                of Engineering &amp; Management, driven by a single conviction:{" "}
                <span className="font-medium text-foreground">
                  build complete systems, not just components.
                </span>
              </p>
              <p>
                From multi-agent AI architectures to full-stack disaster response
                platforms, every project starts with understanding the problem,
                designing the architecture, and building incrementally — closing
                the gap between an AI experiment and an AI product through pure
                engineering discipline.
              </p>
            </div>

            {/* My Interests */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                My Interests
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Machine Learning & AI",
                    reason: "Building end-to-end ML systems and transitioning models from academic theory into production-grade pipelines.",
                  },
                  {
                    title: "Agentic AI",
                    reason: "Fascinated by autonomous software agents, multi-agent workflows, and AI reasoning systems that execute complex tasks.",
                  },
                  {
                    title: "Backend Development",
                    reason: "Passionate about designing scalable services, robust API architectures, and data structures to power intelligent applications.",
                  },
                  {
                    title: "Quantum Machine Learning",
                    reason: "Exploring the frontier of quantum-enhanced feature learning and its applications in astronomical classification.",
                  },
                ].map((interest) => (
                  <li key={interest.title} className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span className="font-semibold text-cyan-400">{interest.title}</span>
                    <span>{interest.reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Quick Facts */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            {facts.map(({ Icon, label, value, sub }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-cyan-500/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{value}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}

            {/* Current Internship Card */}
            <div className="flex items-start gap-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 transition-colors hover:border-cyan-500/30">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15">
                <Briefcase className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/70">
                  Current Internship
                </p>
                <p className="mt-1 font-semibold text-foreground">Software Engineering Intern</p>
                <p className="text-sm font-medium text-cyan-400">Datavex AI Pvt Ltd</p>
                <p className="mt-1 text-xs text-muted-foreground">Mar 2026 – Present · On-site, Mangalore</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Backend Systems", "AI Products", "Enterprise Software"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-sm font-medium text-emerald-400">Available for Placements</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Open to full-time roles · Response within 24h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
