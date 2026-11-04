"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  Sparkles, 
  Code2, 
  Layers, 
  CheckCircle2,
  Copy,
  Check,
  Cpu,
  Database,
  Network,
  Users
} from "lucide-react";
import { useState } from "react";
import { SocialLink } from "@/types";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

interface HeroProps {
  links: SocialLink[];
}

export function Hero({ links }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jereet31@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
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
              <span className="font-mono tracking-tight">Estudiante de último año de Ciencias de la Computación</span>
            </div>

            {/* Title & Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Jeremías Toranzo{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  Estudiante Avanzado de Computación
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-2xl leading-snug">
                Técnico en Informática y desarrollador con sólidos conocimientos en{" "}
                <span className="text-emerald-400 font-medium">desarrollo web fullstack</span>,{" "}
                <span className="text-zinc-100 font-medium">SQL & NoSQL</span> y herramientas de{" "}
                <span className="text-emerald-400 font-medium">inteligencia artificial</span>.
              </p>
            </div>

            {/* Bio real, sin humo */}
            <p className="text-base text-zinc-300 max-w-2xl leading-relaxed">
              Cuento con un buen manejo de redes, sistemas operativos y comunicación para el trabajo en equipo. Me caracterizo por ser una persona creativa, resolutiva, con fuerte capacidad de adaptación y aprendizaje autónomo. Cuento con experiencia en soporte técnico, atención al público, diseño gráfico y despliegue de aplicaciones en producción.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-sm transition-all hover:border-zinc-700"
              >
                <span>Contacto Directo</span>
              </a>

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

            {/* Social links */}
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
                  href="https://linkedin.com/in/jeremias-toranzo-4422901b1"
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

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Disponible para trabajar</span>
              </div>
            </div>
          </div>

          {/* Real Profile Card column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">perfil-profesional.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>online</span>
                </div>
              </div>

              {/* Real profile details */}
              <div className="p-5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto space-y-3">
                <div className="text-zinc-500">// Formación académica y habilidades comprobadas</div>
                <div>
                  <span className="text-emerald-400">const</span>{" "}
                  <span className="text-yellow-300">desarrollador</span> = {"{"}
                </div>
                <div className="pl-4 space-y-1.5">
                  <div>
                    <span className="text-zinc-400">nombre:</span>{" "}
                    <span className="text-emerald-300">&quot;Jeremías Toranzo&quot;</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">carrera:</span>{" "}
                    <span className="text-emerald-300">&quot;Licenciatura en Ciencias de la Computación (Último año)&quot;</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">tituloPrevio:</span>{" "}
                    <span className="text-emerald-300">&quot;Técnico en Informática&quot;</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">areas:</span> [
                    <span className="text-teal-300">&quot;Fullstack Web&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;Bases de Datos SQL & NoSQL&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;IA Tools&quot;</span>
                    ],
                  </div>
                  <div>
                    <span className="text-zinc-400">sistemas:</span> [
                    <span className="text-teal-300">&quot;Redes&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;Sistemas Operativos&quot;</span>,{" "}
                    <span className="text-teal-300">&quot;Soporte Técnico&quot;</span>
                    ]
                  </div>
                </div>
                <div>{"};"}</div>

                <div className="pt-3 border-t border-zinc-800/80 space-y-2">
                  <div className="text-[11px] text-zinc-400 font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Fortalezas clave:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Resolutivo y creativo</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Aprendizaje autónomo</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Trabajo en equipo</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Paso a producción</span>
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
