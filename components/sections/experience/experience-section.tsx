import { getAllExperience } from "@/lib/content";
import { ExperienceTimeline } from "./experience-timeline";

export async function ExperienceSection() {
  const experiences = getAllExperience();

  return (
    <section
      id="experience"
      className="py-24 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Journey &amp; Experience
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            Internships, training programs, and hands-on engineering work that
            have shaped my engineering approach.
          </p>
        </div>

        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
}
