"use client";

import { motion } from "framer-motion";
import { FlaskConical, BookOpen, ExternalLink, Users } from "lucide-react";
import type { Research, ResearchStatus } from "@/types";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";
import { formatDate } from "@/utils/date";

const statusConfig: Record<ResearchStatus, { label: string; class: string }> = {
  active: { label: "Active Research", class: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  published: { label: "Published", class: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  completed: { label: "Completed", class: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  draft: { label: "Draft", class: "text-muted-foreground bg-muted/50 border-border" },
};

function ResearchCard({ paper, index }: { paper: Research; index: number }) {
  const status = statusConfig[paper.status];

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12 }}
      className="group rounded-2xl border border-border bg-card p-8 transition-all duration-200 hover:border-violet-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5"
    >
      {/* Icon + Status */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
          <FlaskConical className="h-6 w-6 text-violet-400" aria-hidden="true" />
        </div>
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
            status.class
          )}
        >
          {status.label}
        </span>
      </div>

      {/* Domain tag */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
        {paper.domain}
      </p>

      {/* Title */}
      <h3 className="font-heading text-lg font-bold text-foreground leading-snug group-hover:text-violet-400 transition-colors">
        {paper.title}
      </h3>

      {/* Abstract */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
        {paper.abstract}
      </p>

      {/* Collaborators */}
      {paper.collaborators && paper.collaborators.length > 0 && (
        <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
          <Users className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{paper.collaborators.join(", ")}</span>
        </div>
      )}

      {/* Presented at */}
      {paper.presentedAt && (
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{paper.presentedAt}</span>
        </div>
      )}

      {/* Tech + Footer */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {paper.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <time className="text-xs text-muted-foreground" dateTime={paper.date}>
          {formatDate(paper.date, "short")}
        </time>
        {paper.paperUrl && (
          <a
            href={paper.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors"
            aria-label={`Read ${paper.title} paper`}
          >
            Read Paper
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function ResearchGrid({ papers }: { papers: Research[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {papers.map((paper, i) => (
        <ResearchCard key={paper.slug} paper={paper} index={i} />
      ))}
    </div>
  );
}
