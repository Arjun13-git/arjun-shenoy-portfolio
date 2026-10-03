import { Briefcase, MapPin, Calendar } from "lucide-react";
import type { Experience } from "@/types";
import { formatDateRange } from "@/utils/date";
import { Reveal } from "@/components/motion/reveal";
import { TechList } from "@/components/shared/tech-list";

function InternshipCard({ experience }: { experience: Experience }) {
  return (
    <article className="card-surface rounded-2xl p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
          <Briefcase className="h-5 w-5 text-brand" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-bold leading-tight text-foreground sm:text-xl">
            {experience.role}
          </h3>
          <p className="mt-1 font-medium text-secondary-foreground">{experience.company}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDateRange(experience.startDate, experience.endDate)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {experience.location}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
        {experience.description}
      </p>

      {experience.highlights.length > 0 && (
        <ul className="mt-5 max-w-3xl space-y-2.5">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-secondary-foreground">
              <span className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {experience.tech.length > 0 && <TechList items={experience.tech} className="mt-6" />}
    </article>
  );
}

export function InternshipCards({ experiences }: { experiences: Experience[] }) {
  if (experiences.length === 0) return null;

  return (
    <div className="grid gap-6">
      {experiences.map((exp) => (
        <Reveal key={exp.slug}>
          <InternshipCard experience={exp} />
        </Reveal>
      ))}
    </div>
  );
}
