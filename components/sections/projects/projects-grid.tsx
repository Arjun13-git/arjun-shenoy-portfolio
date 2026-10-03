"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date";
import { TechList } from "@/components/shared/tech-list";
import { Reveal } from "@/components/motion/reveal";

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  ai: "AI / ML",
  research: "Research",
  backend: "Backend",
  tools: "Tools",
  frontend: "Frontend",
};

const CATEGORY_ORDER: ProjectCategory[] = ["ai", "research", "backend", "tools", "frontend"];

const STATUS_LABELS: Record<NonNullable<Project["status"]>, string> = {
  active: "Ongoing",
  published: "Published",
  completed: "Completed",
  draft: "Draft",
};

type Filter = ProjectCategory | "all";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 rounded-sm font-medium text-muted-foreground transition-colors hover:text-brand"
        >
          <GitBranch className="h-4 w-4 transition-transform motion-safe:group-hover/link:-translate-y-0.5" aria-hidden="true" />
          Code
          <span className="sr-only">for {project.title} on GitHub (opens in a new tab)</span>
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1 rounded-sm font-medium text-muted-foreground transition-colors hover:text-brand"
        >
          Live demo
          <ArrowUpRight className="h-4 w-4 transition-transform motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only">of {project.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
      <span className="text-brand">{CATEGORY_LABELS[project.category]}</span>
      <span aria-hidden="true"> · </span>
      {project.status && (
        <>
          {STATUS_LABELS[project.status]}
          <span aria-hidden="true"> · </span>
        </>
      )}
      <time dateTime={project.date}>{formatDate(project.date, "short")}</time>
    </p>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="card-surface card-lift flex h-full flex-col rounded-2xl p-6">
      <ProjectMeta project={project} />
      <h4 className="mt-2 font-heading text-lg font-bold text-foreground">{project.title}</h4>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{project.description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-secondary-foreground">
              <span className="mt-[0.55rem] h-1 w-2.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto space-y-4 pt-6">
        <TechList items={project.tech} max={5} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="card-surface card-lift flex h-full flex-col rounded-xl p-5">
      <ProjectMeta project={project} />
      <h4 className="mt-2 font-heading text-base font-bold text-foreground">{project.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mt-auto space-y-3 pt-5">
        <TechList items={project.tech} max={4} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function AnimatedGrid({
  projects,
  className,
  render,
}: {
  projects: Project[];
  className: string;
  render: (project: Project) => ReactNode;
}) {
  return (
    <div className={className}>
      {/* initial={false}: cards are visible in the server HTML; only filter changes animate */}
      <AnimatePresence initial={false} mode="popLayout">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Entrance on first scroll into view; small stagger, capped */}
            <Reveal delay={Math.min(i, 5) * 0.05} className="h-full">
              {render(project)}
            </Reveal>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  // Only offer filters for categories that actually have projects.
  const filters = useMemo(() => {
    const present = new Set(projects.map((p) => p.category));
    return [
      { label: "All", value: "all" as Filter, count: projects.length },
      ...CATEGORY_ORDER.filter((c) => present.has(c)).map((c) => ({
        label: CATEGORY_LABELS[c],
        value: c as Filter,
        count: projects.filter((p) => p.category === c).length,
      })),
    ];
  }, [projects]);

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map(({ label, value, count }) => {
          const active = filter === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "border-brand-border bg-brand-soft text-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-border-strong hover:text-foreground"
              )}
            >
              {label}
              <span className={cn("font-mono text-xs", active ? "text-brand" : "text-muted-foreground")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {featured.length > 0 && (
        <div>
          <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Featured
          </h3>
          <AnimatedGrid
            projects={featured}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            render={(project) => <FeaturedCard project={project} />}
          />
        </div>
      )}

      {others.length > 0 && (
        <div className={cn(featured.length > 0 && "mt-14")}>
          <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            More projects
          </h3>
          <AnimatedGrid
            projects={others}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            render={(project) => <CompactCard project={project} />}
          />
        </div>
      )}
    </div>
  );
}
