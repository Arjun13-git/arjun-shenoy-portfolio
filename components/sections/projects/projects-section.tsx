import { getAllProjects } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectsGrid } from "./projects-grid";

export function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <Section id="projects" tone="surface">
      <Reveal>
        <SectionHeader
          id="projects"
          index="04"
          label="Projects"
          title="Things I've built"
          description="Personal projects, research code and hackathon builds."
        />
      </Reveal>

      <ProjectsGrid projects={projects} />
    </Section>
  );
}
