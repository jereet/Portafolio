"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ProjectCard } from "@/components/projects/project-card";
import { Search, Plus, FolderKanban, Terminal, Sparkles } from "lucide-react";

interface ProjectsExplorerProps {
  initialProjects: Project[];
}

export function ProjectsExplorer({ initialProjects }: ProjectsExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Real-time", "Frontend", "Full Stack", "Backend"];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const matchesCategory =
        selectedCategory === "Todos" || p.category === selectedCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, search, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por tecnología (TypeScript, MongoDB, React), título..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-zinc-950 font-semibold"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Admin shortcut */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
        <div>
          Mostrando <span className="text-emerald-400 font-semibold">{filteredProjects.length}</span>{" "}
          de {initialProjects.length} proyectos
        </div>
        <Link
          href="/admin"
          className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Gestionar / Agregar Proyecto en Admin</span>
        </Link>
      </div>

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-2xl border border-zinc-800/60 bg-zinc-950/30">
          <FolderKanban className="h-10 w-10 text-zinc-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-zinc-300">No se encontraron proyectos</h3>
          <p className="text-xs text-zinc-500 mt-1">
            Prueba ajustando la búsqueda o seleccionando otra categoría.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
