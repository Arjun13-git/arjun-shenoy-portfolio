import { BookOpen, GitBranch, ExternalLink, Users } from "lucide-react";
import type { Research, ResearchStatus } from "@/types";
import { formatDate } from "@/utils/date";
import { Reveal } from "@/components/motion/reveal";
import { TechList } from "@/components/shared/tech-list";

const STATUS_LABELS: Record<ResearchStatus, string> = {
  active: "Ongoing",
  published: "Published",
  completed: "Completed",
  draft: "Draft",
};

function ResearchCard({ paper }: { paper: Research }) {
  return (
    <article className="card-surface card-lift flex h-full flex-col rounded-2xl p-6 sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
        <span className="text-brand">{paper.domain}</span>
        <span aria-hidden="true"> · </span>
        {STATUS_LABELS[paper.status]}
        <span aria-hidden="true"> · </span>
        <time dateTime={paper.date}>{formatDate(paper.date, "short")}</time>
      </p>

      <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-foreground">
        {paper.title}
      </h3>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{paper.abstract}</p>

      <div className="mt-auto space-y-4 pt-6">
        {(paper.collaborators?.length || paper.presentedAt) && (
          <div className="space-y-1.5 text-sm text-muted-foreground">
            {paper.collaborators && paper.collaborators.length > 0 && (
              <p className="flex items-start gap-2">
                <Users className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>With {paper.collaborators.join(", ")}</span>
              </p>
            )}
            {paper.presentedAt && (
              <p className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{paper.presentedAt}</span>
              </p>
            )}
          </div>
        )}

        <TechList items={paper.tech} />

        {(paper.github || paper.paperUrl) && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {paper.github && (
              <a
                href={paper.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                <GitBranch className="h-4 w-4 transition-transform motion-safe:group-hover/link:-translate-y-0.5" aria-hidden="true" />
                Code
                <span className="sr-only">for {paper.title} on GitHub (opens in a new tab)</span>
              </a>
            )}
            {paper.paperUrl && (
              <a
                href={paper.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 rounded-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                Read paper
                <ExternalLink className="h-3.5 w-3.5 transition-transform motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5" aria-hidden="true" />
                <span className="sr-only">: {paper.title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function ResearchGrid({ papers }: { papers: Research[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {papers.map((paper, i) => (
        <Reveal key={paper.slug} delay={i * 0.08} className="h-full">
          <ResearchCard paper={paper} />
        </Reveal>
      ))}
    </div>
  );
}
