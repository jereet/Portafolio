import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/lib/projects-service";
import { 
  ArrowLeft, 
  ExternalLink, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Lightbulb, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  UserCheck
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: `${project.title} — Jeremías | Full Stack Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const allProjects = await getAllProjects();

  if (!project) {
    notFound();
  }

  const nextProjects = allProjects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a todos los proyectos</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-5 pb-8 border-b border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <Calendar className="h-3.5 w-3.5 text-zinc-500" />
              <span>{project.timeline}</span>
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <UserCheck className="h-3.5 w-3.5 text-zinc-500" />
              <span>{project.role}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-emerald-400/90 font-medium">
            {project.subtitle}
          </p>

          <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 text-xs font-semibold transition-all hover:border-emerald-500/40"
              >
                <GithubIcon className="h-4 w-4 text-emerald-400" />
                <span>Ver Código en GitHub</span>
                <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Explorar Proyecto en Vivo</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </header>

        {/* Stats Strip */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
            {project.stats.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 text-center"
              >
                <div className="text-2xl font-mono font-bold text-emerald-400">{s.value}</div>
                <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Challenges & Solutions (Crucial for Senior Assessment) */}
        <section className="my-14 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Ingeniería & Criterio
            </div>
            <h2 className="text-2xl font-bold text-white">
              Desafíos Técnicos y Decisiones Arquitectónicas
            </h2>
            <p className="text-sm text-zinc-400">
              Los problemas complejos enfrentados durante la construcción y las decisiones de diseño adoptadas para resolverlos.
            </p>
          </div>

          <div className="space-y-4">
            {project.challenges.map((c, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 backdrop-blur-sm space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0 mt-0.5">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-100">
                      Desafío #{idx + 1}: {c.title}
                    </h3>
                  </div>
                </div>

                <div className="pl-11 border-l-2 border-emerald-500/40 ml-4 py-1">
                  <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
                    Solución Técnica Implementada:
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {c.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture & Engineering Decisions */}
        <section className="my-14 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Estructura
            </div>
            <h2 className="text-2xl font-bold text-white">
              Arquitectura del Sistema
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-start gap-3"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="my-14 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Capacidades
            </div>
            <h2 className="text-2xl font-bold text-white">
              Funcionalidades Principales
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-zinc-800/60 bg-zinc-900/30 flex items-center gap-3 text-xs sm:text-sm text-zinc-300"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="my-14 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Herramientas
            </div>
            <h2 className="text-2xl font-bold text-white">
              Tecnologías Utilizadas
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Next Projects Navigation */}
        <section className="pt-12 border-t border-zinc-800/80 space-y-6">
          <h3 className="text-lg font-bold text-white">
            Explorar Otros Proyectos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nextProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 hover:border-emerald-500/40 transition-all group block"
              >
                <div className="text-[11px] font-mono text-emerald-400 mb-1">
                  {p.category}
                </div>
                <div className="text-base font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                  <span>{p.title}</span>
                  <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {p.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
