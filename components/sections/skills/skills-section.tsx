import { skillGroups } from "@/constants/skills";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";

export function SkillsSection() {
  return (
    <Section id="skills" tone="surface">
      <Reveal>
        <SectionHeader
          id="skills"
          index="02"
          label="Skills"
          title="Tools I work with"
          description="Grouped by how I use them. Everything here shows up in at least one of my projects, my research or my internship."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="card-surface h-full rounded-xl p-5">
              <h3 className="font-heading text-base font-semibold text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
