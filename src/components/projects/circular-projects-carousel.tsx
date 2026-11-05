"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Sparkles,
  ArrowRight,
  Layers,
  Terminal,
  Activity,
  Code2
} from "lucide-react";
import { Project } from "@/types";
import { GithubIcon } from "@/components/ui/icons";

interface CircularProjectsCarouselProps {
  projects: Project[];
}

export function CircularProjectsCarousel({ projects }: CircularProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});

  if (!projects || projects.length === 0) return null;

  const total = projects.length;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  // Handle image switching inside a project
  const handleDotClick = (projectId: string, imgIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({ ...prev, [projectId]: imgIdx }));
  };

  // Generate placeholder mockups for projects if real images are not provided
  const renderProjectScreenshot = (project: Project) => {
    const images = project.images && project.images.length > 0 
      ? project.images 
      : [project.image || "/projects/default.webp"];

    const currentImgIdx = activeImageIndexes[project.id] || 0;
    const currentImg = images[currentImgIdx % images.length];

    return (
      <div className="relative w-full aspect-[16/10] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800/80 group/mockup flex flex-col justify-between p-4">
        {/* Project Visual Canvas / Representation */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 flex items-center justify-center p-6">
          {project.slug.includes("mixrush") && (
            <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-emerald-500/20 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="font-mono text-xs text-emerald-400 font-bold">MixRush — Partida en Vivo</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Ronda {currentImgIdx + 1}/7</span>
              </div>
              <div className="grid grid-cols-4 gap-2 my-auto">
                <div className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">🎲 Dados</div>
                <div className="h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-xs font-bold text-emerald-300">🃏 Desafío</div>
                <div className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">⏱️ Turno</div>
                <div className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">🏆 Podio</div>
              </div>
              <div className="text-[11px] font-mono text-zinc-400 truncate">Jugador activo: Jeremías • Turno 3</div>
            </div>
          )}

          {project.slug.includes("countries") && (
            <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-blue-500/20 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="font-mono text-xs text-blue-400 font-bold">Countries Explorer — Desktop</span>
                <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Kotlin Multiplatform</span>
              </div>
              <div className="grid grid-cols-2 gap-3 my-auto text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700 space-y-1">
                  <div className="text-zinc-200 font-bold">🇦🇷 Argentina</div>
                  <div className="text-[10px] text-zinc-400">Capital: Buenos Aires</div>
                  <div className="text-[10px] text-emerald-400">Clima: 22°C Soleado</div>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700 space-y-1">
                  <div className="text-zinc-200 font-bold">🇪🇸 España</div>
                  <div className="text-[10px] text-zinc-400">Capital: Madrid</div>
                  <div className="text-[10px] text-emerald-400">Clima: 18°C Despejado</div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-500">Comparativa demográfica y climática en tiempo real</div>
            </div>
          )}

          {project.slug.includes("qr") && (
            <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-purple-500/20 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="font-mono text-xs text-purple-400 font-bold">QR Party — Evento 50th</span>
                <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Escaneo Móvil</span>
              </div>
              <div className="flex items-center justify-around my-auto">
                <div className="h-16 w-16 rounded-xl bg-white p-1.5 flex items-center justify-center">
                  <div className="h-full w-full bg-black rounded flex items-center justify-center text-[9px] text-white font-mono font-bold">QR CODE</div>
                </div>
                <div className="text-left space-y-1">
                  <div className="text-xs font-bold text-zinc-100">🍸 Menú de Tragos</div>
                  <div className="text-xs font-bold text-zinc-100">📸 Muro de Recuerdos</div>
                  <div className="text-[11px] text-purple-300">Mesa 12 asignada</div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-500">Acceso instantáneo para invitados sin apps</div>
            </div>
          )}

          {project.slug.includes("mongo") && (
            <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-emerald-500/20 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="font-mono text-xs text-emerald-400 font-bold">MongoDB Movie Search</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">REST API</span>
              </div>
              <div className="space-y-2 my-auto font-mono text-xs">
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 flex items-center justify-between">
                  <span>🔍 &quot;Interstellar&quot; (2014)</span>
                  <span className="text-yellow-400 text-[11px]">★ 8.7</span>
                </div>
                <div className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 flex items-center justify-between">
                  <span>🔍 &quot;Inception&quot; (2010)</span>
                  <span className="text-yellow-400 text-[11px]">★ 8.8</span>
                </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-500">Consultas optimizadas con text indexing y pipelines</div>
            </div>
          )}
        </div>

        {/* Carousel Dots Navigation at Bottom of Screenshot */}
        <div className="relative z-10 flex items-center justify-center gap-1.5 pt-2">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => handleDotClick(project.id, dotIdx, e)}
              className={`h-2 rounded-full transition-all ${
                currentImgIdx === dotIdx
                  ? "w-6 bg-emerald-400"
                  : "w-2 bg-zinc-600 hover:bg-zinc-400"
              }`}
              aria-label={`Ver captura ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  // Indices in circular queue: prev, current, next
  const prevIdx = (currentIndex - 1 + total) % total;
  const nextIdx = (currentIndex + 1) % total;

  const currentProject = projects[currentIndex];
  const prevProj = projects[prevIdx];
  const nextProj = projects[nextIdx];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Controls Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-500">Proyecto</span>
          <span className="text-sm font-mono font-bold text-emerald-400">
            0{currentIndex + 1} <span className="text-zinc-600">/ 0{total}</span>
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevProject}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-all shadow-md active:scale-95"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-all shadow-md active:scale-95"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Circular Queue Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Project (Previous - Partially Visible) */}
        <div
          onClick={prevProject}
          className="hidden lg:block lg:col-span-3 cursor-pointer opacity-40 hover:opacity-75 transition-all duration-300 transform scale-90 -translate-x-4 select-none"
        >
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 backdrop-blur-md space-y-4">
            <div className="aspect-[16/10] bg-zinc-900 rounded-xl flex items-center justify-center text-xs font-mono text-zinc-500">
              {prevProj.title}
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-300 truncate">{prevProj.title}</h4>
              <p className="text-xs text-zinc-500 line-clamp-2 mt-1">{prevProj.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Center Project (Active / Focused - Big Card exactly like image) */}
        <div className="col-span-1 lg:col-span-6 z-20">
          <div className="relative rounded-3xl border-2 border-emerald-500/50 bg-[#0c0f17] p-6 sm:p-8 shadow-2xl shadow-emerald-950/30 backdrop-blur-xl transition-all duration-300 space-y-5">
            {/* Top Screenshot with Dots */}
            {renderProjectScreenshot(currentProject)}

            {/* Title & Category Pill */}
            <div className="flex items-start justify-between gap-4 pt-2">
              <div>
                <Link
                  href={`/projects/${currentProject.slug}`}
                  className="group inline-flex items-center gap-2"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {currentProject.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </Link>
                <div className="text-xs font-mono text-emerald-400 mt-1">
                  {currentProject.subtitle} • {currentProject.timeline}
                </div>
              </div>

              <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                {currentProject.category}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {currentProject.description}
            </p>

            {/* Technology Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {currentProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-emerald-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Actions: Ver Demo & Código */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-4">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Demo</span>
                  </a>
                )}

                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>Código</span>
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${currentProject.slug}`}
                className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono"
              >
                <span>Detalle técnico</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Project (Next - Partially Visible) */}
        <div
          onClick={nextProject}
          className="hidden lg:block lg:col-span-3 cursor-pointer opacity-40 hover:opacity-75 transition-all duration-300 transform scale-90 translate-x-4 select-none"
        >
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-5 backdrop-blur-md space-y-4">
            <div className="aspect-[16/10] bg-zinc-900 rounded-xl flex items-center justify-center text-xs font-mono text-zinc-500">
              {nextProj.title}
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-300 truncate">{nextProj.title}</h4>
              <p className="text-xs text-zinc-500 line-clamp-2 mt-1">{nextProj.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
