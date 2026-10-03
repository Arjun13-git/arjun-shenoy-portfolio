import { getAllProjects, getAllResearch } from "@/lib/content";
import { competitions } from "@/constants/competitions";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroPhoto } from "./hero-photo";

export function Hero() {
  // Counted from the content itself so the numbers can't drift out of date.
  const stats = [
    { value: getAllProjects().length, label: "Projects" },
    { value: competitions.length, label: "Hackathons" },
    { value: getAllResearch().length, label: "Research projects" },
  ];

  return (
    <section
      className="relative overflow-hidden pt-16 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:min-h-[calc(100svh-5rem)] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-16">
        {/* Portrait — above the text on small screens, right column on desktop */}
        <div className="flex justify-center lg:order-2 lg:flex-1 lg:justify-end">
          <HeroPhoto />
        </div>

        <div className="w-full text-center lg:order-1 lg:flex-1 lg:text-left">
          <HeroContent stats={stats} />
        </div>
      </div>
    </section>
  );
}
