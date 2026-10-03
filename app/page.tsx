import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero/hero";
import { AboutSection } from "@/components/sections/about/about-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { ResearchSection } from "@/components/sections/research/research-section";
import { CompetitionsSection } from "@/components/sections/competitions/competitions-section";
// Blog is hidden — import kept for future re-enabling
// import { BlogSection } from "@/components/sections/blog/blog-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-fill focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-fill-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="overflow-x-clip outline-none">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <CompetitionsSection />

        {/* Blog — hidden; re-enable by uncommenting below */}
        {/* <BlogSection /> */}

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
