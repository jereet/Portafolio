"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SocialLink } from "@/types";

interface FooterProps {
  links: SocialLink[];
}

export function Footer({ links }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-zinc-100">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-bold">JEREMÍAS TORANZO</span>
              <span className="text-zinc-500 text-xs">/ Fullstack & Informática</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Estudiante de último año de Licenciatura en Ciencias de la Computación y Técnico en Informática. Desarrollo web fullstack, bases de datos SQL y NoSQL y herramientas de IA.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span>Disponible para nuevos desafíos</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/#hero" className="hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-emerald-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-emerald-400 transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/#stack" className="hover:text-emerald-400 transition-colors">
                  Stack Tecnológico
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-emerald-400 transition-colors">
                  Experiencia Laboral
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-emerald-400 transition-colors">
                  Contacto Directo
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1 text-xs">
                  <span>Panel Admin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Conectar
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-zinc-400">
              <a
                href="https://github.com/jereet"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub (@jereet)</span>
                <ArrowUpRight className="h-3 w-3 text-zinc-600" />
              </a>
              <a
                href="https://linkedin.com/in/jeremias-toranzo-4422901b1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 text-zinc-600" />
              </a>
              <a
                href="mailto:jereet31@gmail.com"
                className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>jereet31@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} Jeremías. Diseñado y construido con precisión técnica.
          </div>
          <div className="flex items-center gap-2 text-zinc-400 font-mono">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Next.js App Router • Tailwind • Motion • AI Assisted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
