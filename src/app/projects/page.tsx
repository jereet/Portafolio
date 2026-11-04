import { Metadata } from "next";
import { getAllProjects } from "@/lib/projects-service";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { Sparkles, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyectos — Jeremías | Full Stack & AI Assisted Engineer",
  description: "Catálogo completo de proyectos de ingeniería de software con arquitectura, decisiones técnicas y código abierto en GitHub.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <Terminal className="h-3.5 w-3.5" />
            <span>Repositorios & Proyectos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Proyectos de Ingeniería
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Una colección de aplicaciones web, motores de búsqueda en bases de datos y sistemas en tiempo real desarrollados con foco en arquitectura mantenible, rendimiento y calidad de experiencia.
          </p>
        </div>

        {/* Explorer */}
        <ProjectsExplorer initialProjects={projects} />
      </div>
    </div>
  );
}
