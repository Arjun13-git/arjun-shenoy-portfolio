"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, Star } from "lucide-react";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";
import { formatDate } from "@/utils/date";

const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai" },
  { label: "Research", value: "research" },
  { label: "Backend", value: "backend" },
  { label: "Tools", value: "tools" },
  { label: "Frontend", value: "frontend" },
];

const statusConfig = {
  active: { label: "Active", class: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  completed: { label: "Completed", class: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  research: { label: "Research", class: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  archived: { label: "Archived", class: "text-muted-foreground bg-muted/50 border-border" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status];

  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5"
      aria-label={project.title}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {project.featured && (
            <div className="mb-2 flex items-center gap-1 text-xs font-medium text-amber-400">
              <Star className="h-3 w-3 fill-amber-400" aria-hidden="true" />
              Featured
            </div>
          )}
          <h3 className="font-heading text-base font-bold text-foreground group-hover:text-cyan-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitBranch className="h-4 w-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {project.description}
      </p>

      {/* Footer */}
      <div className="mt-5 space-y-4">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
              status.class
            )}
          >
            {status.label}
          </span>
          <time className="text-xs text-muted-foreground" dateTime={project.date}>
            {formatDate(project.date, "short")}
          </time>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filter bar */}
      <div
        className="mb-10 flex flex-wrap gap-2 justify-center"
        role="group"
        aria-label="Filter projects by category"
      >
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            aria-pressed={activeFilter === value}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              activeFilter === value
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                : "border border-border text-muted-foreground hover:border-cyan-500/30 hover:text-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
