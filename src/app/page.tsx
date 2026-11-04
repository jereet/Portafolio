import { getAllProjects, getAllLinks } from "@/lib/projects-service";
import { Hero } from "@/components/sections/hero";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default async function HomePage() {
  const allProjects = await getAllProjects();
  const allLinks = await getAllLinks();

  return (
    <div className="relative">
      <Hero links={allLinks} />
      <SelectedProjects projects={allProjects} />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection links={allLinks} />
    </div>
  );
}
