"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import type { Experience, ExperienceType } from "@/types";
import { formatDateRange } from "@/utils/date";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

const typeConfig: Record<ExperienceType, { Icon: typeof Briefcase; label: string; color: string }> = {
  internship: { Icon: Briefcase, label: "Internship", color: "text-cyan-400 bg-cyan-500/10" },
  training: { Icon: GraduationCap, label: "Training", color: "text-violet-400 bg-violet-500/10" },
  freelance: { Icon: Briefcase, label: "Freelance", color: "text-blue-400 bg-blue-500/10" },
  research: { Icon: GraduationCap, label: "Research", color: "text-emerald-400 bg-emerald-500/10" },
};

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" aria-hidden="true" />

      <div className="space-y-12">
        {experiences.map((exp, i) => {
          const { Icon, label, color } = typeConfig[exp.type] ?? typeConfig.internship;
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={exp.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex items-start gap-8 pl-16 md:pl-0",
                "md:grid md:grid-cols-2 md:gap-12"
              )}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute left-4 top-5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-card md:left-1/2 md:-translate-x-1/2",
                  "z-10"
                )}
                aria-hidden="true"
              >
                <span className={cn("h-2 w-2 rounded-full", exp.current ? "bg-emerald-400 animate-pulse" : "bg-cyan-400")} />
              </div>

              {/* Date — desktop */}
              <div
                className={cn(
                  "hidden md:flex md:items-start md:pt-5",
                  isLeft ? "md:justify-end md:pr-8" : "md:order-last md:pl-8"
                )}
              >
                <time className="text-sm text-muted-foreground">
                  {formatDateRange(exp.startDate, exp.endDate || undefined)}
                </time>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-border bg-card p-6 hover:border-cyan-500/20 transition-colors">
                {/* Badges */}
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                      color
                    )}
                  >
                    <Icon className="h-3 w-3" aria-hidden="true" />
                    {label}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                      Ongoing
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="mt-1 font-medium text-cyan-400">{exp.company}</p>

                {/* Date — mobile */}
                <p className="mt-1 text-xs text-muted-foreground md:hidden">
                  {formatDateRange(exp.startDate, exp.endDate || undefined)}
                  {exp.current ? " · Ongoing" : exp.duration ? ` · ${exp.duration}` : ""}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
