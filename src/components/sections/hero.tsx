"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  CheckCircle2,
  Copy,
  Check
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { useState } from "react";
import { SocialLink } from "@/types";

interface HeroProps {
  links: SocialLink[];
}

export function Hero({ links }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jeremias.contacto.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main content column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono tracking-tight">Disponible para nuevos desafíos profesionales</span>
            </div>

            {/* Title & Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Jeremías{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  Full Stack Engineer
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-2xl leading-snug">
                Construyendo software en la intersección de{" "}
                <span className="text-emerald-400 font-medium">sistemas escalables</span>,{" "}
                <span className="text-zinc-100 font-medium">diseño de experiencias</span> y{" "}
                <span className="text-emerald-400 font-medium">desarrollo asistido por agentes de IA</span>.
              </p>
            </div>

            {/* Bio brief */}
            <p className="text-base text-zinc-400 max-w-xl leading-relaxed">
              Estudiante avanzado de Licenciatura en Ciencias de la Computación con base técnica en informática. Diseño y materializo productos digitales con criterio de ingeniería, código mantenible y atención meticulosa al detalle.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-sm transition-all hover:border-zinc-700"
              >
                <span>Hablemos</span>
              </Link>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-zinc-200 text-sm transition-all font-mono"
                title="Copiar email al portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copiar Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social links & quick stats */}
            <div className="flex items-center gap-6 pt-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/jereet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/jereet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="/cv/CV_Jeremias_FullStack.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-xs"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400" />
                  <span>CV (PDF)</span>
                </a>
              </div>

              <div className="hidden sm:block h-4 w-px bg-zinc-800" />

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span>Next.js 16 • React 19 • TypeScript</span>
              </div>
            </div>
          </div>

          {/* Interactive Tech Mockup / Terminal column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">engineer-profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/80">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ai-workflow: ready</span>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto space-y-3">
                <div className="text-zinc-500">// Arquitectura del desarrollador & competencias clave</div>
                <div>
                  <span className="text-emerald-400">interface</span>{" "}
                  <span className="text-yellow-300">SoftwareEngineer</span> {"{"}
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-zinc-400">name:</span>{" "}
                    <span className="text-emerald-300">&quot;Jeremías&quot;</span>;
                  </div>
                  <div>
                    <span className="text-zinc-400">degree:</span>{" "}
                    <span className="text-emerald-300">&quot;Licenciatura en Ciencias de la Computación&quot;</span>;
                  </div>
                  <div>
                    <span className="text-zinc-400">background:</span>{" "}
                    <span className="text-emerald-300">&quot;Técnico en Informática&quot;</span>;
                  </div>
                  <div>
                    <span className="text-zinc-400">methodology:</span> [
                    <span className="text-emerald-300">&quot;Clean Architecture&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Agentic Pair-Programming&quot;</span>
                    ];
                  </div>
                  <div>
                    <span className="text-zinc-400">currentFocus:</span> [
                    <span className="text-teal-300">&quot;Next.js App Router&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;PostgreSQL / MongoDB&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;LLM Orchestration&quot;</span>
                    ];
                  </div>
                </div>
                <div>{"}"}</div>

                <div className="pt-2 border-t border-zinc-800/80">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Sparkles className="h-3 w-3" /> Principios de ingeniería
                    </span>
                    <span className="text-zinc-500">v2.4.0</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Rigor algorítmico</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>UX y accesibilidad</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>APIs tipadas de punta a punta</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Aceleración con agentes IA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
