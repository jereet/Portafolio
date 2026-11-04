"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { Project } from "@/types";
import { ArrowRight, Sparkles, Filter } from "lucide-react";

interface SelectedProjectsProps {
  projects: Project[];
}

export function SelectedProjects({ projects }: SelectedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = ["Todos", "Real-time", "Frontend", "Full Stack", "Backend"];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
              <span className="text-zinc-600">01 //</span> Proyectos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Proyectos Desarrollados
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Aplicaciones web fullstack, interfaces interactivas y proyectos con bases de datos SQL y NoSQL. Cada uno cuenta con detalle de funcionalidades y enlace a GitHub.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900/80 rounded-xl border border-zinc-800/80 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-md shadow-emerald-500/30"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-semibold text-white text-base flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>¿Querés ver el código completo o explorar más?</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Revisá los repositorios abiertos en GitHub con documentación, pruebas y commits ordenados.
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
