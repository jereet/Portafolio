"use client";

import Link from "next/link";
import { CircularProjectsCarousel } from "@/components/projects/circular-projects-carousel";
import { Project } from "@/types";
import { ArrowRight, Sparkles } from "lucide-react";

interface SelectedProjectsProps {
  projects: Project[];
}

export function SelectedProjects({ projects }: SelectedProjectsProps) {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
              <span className="text-zinc-600">01 //</span> Proyectos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Proyectos Desarrollados
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Explora las aplicaciones desarrolladas con capturas, funcionalidades, stack tecnológico y accesos directos al código fuente y demo.
            </p>
          </div>

        </div>

        <CircularProjectsCarousel projects={projects} />

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-semibold text-white text-base flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>¿Querés ver el código completo de cada desarrollo?</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Todos los repositorios se encuentran públicos y documentados en GitHub con commits ordenados.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-xs font-medium transition-all flex items-center gap-2"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
