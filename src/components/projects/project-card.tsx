import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Layers, Terminal, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  // Determine an accent icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Real-time":
        return Activity;
      case "Backend":
        return Terminal;
      case "Frontend":
        return Layers;
      default:
        return Sparkles;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-1 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Subtle top glow highlight */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="space-y-4">
        {/* Category & Status */}
        <div className="flex items-center justify-between text-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors">
            <CategoryIcon className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-mono">{project.category}</span>
          </div>

          <span className="text-zinc-500 font-mono text-[11px]">{project.timeline}</span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <Link href={`/projects/${project.slug}`} className="block group/title">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover/title:text-emerald-400 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowRight className="h-4 w-4 text-zinc-600 group-hover/title:text-emerald-400 group-hover/title:translate-x-1 transition-all" />
            </h3>
          </Link>
          <p className="text-xs sm:text-sm font-medium text-emerald-400/90 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Stats strip if available */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-800/60 bg-zinc-900/30 rounded-xl px-3 my-2">
            {project.stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xs font-mono font-bold text-emerald-300">{s.value}</div>
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-400 group-hover:border-zinc-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/link"
        >
          <span>Explorar Arquitectura & Retos</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              title="Ver código fuente en GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
              title="Abrir Demo en Vivo"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
