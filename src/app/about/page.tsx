import { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  Bot, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  FileText,
  Mail,
  Network,
  Headphones,
  Palette,
  Server
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mí — Jeremías | Perfil Profesional",
  description: "Estudiante de último año de Licenciatura en Ciencias de la Computación y Técnico en Informática.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">//</span> Perfil Profesional
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Jeremías
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
            Estudiante de último año de Licenciatura en Ciencias de la Computación y Técnico en Informática.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {/* Resumen principal */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
              <p className="text-zinc-200">
                Cuento con <strong>sólidos conocimientos en programación, desarrollo web fullstack y bases de datos relacionales SQL y NoSQL</strong>. Poseo un gran manejo de herramientas de inteligencia artificial, un buen manejo de redes y sistemas operativos y buena comunicación para el trabajo en equipo.
              </p>
              <p className="text-zinc-300">
                Me caracterizo por ser una persona <strong>creativa, resolutiva</strong> y con una <strong>fuerte capacidad de adaptación, aprendizaje autónomo y resolución de problemas</strong>.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                <span>Formación Académica</span>
              </h2>
              <ul className="space-y-3">
                <li className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Licenciatura en Ciencias de la Computación</span>
                    <span className="text-xs font-mono text-emerald-400">Último Año</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Formación integral en algoritmos, estructuras de datos, complejidad computacional, sistemas operativos y redes.
                  </p>
                </li>
                <li className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Técnico en Informática</span>
                    <span className="text-xs font-mono text-zinc-400">Completado</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Fundamentos de hardware, arquitectura de computadoras, cableado y configuración de redes, soporte técnico y mantenimiento de sistemas.
                  </p>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-400" />
                <span>Experiencia y Habilidades Prácticas</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Desarrollo Web Fullstack (Frontend & Backend)</span>
                </div>
                <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bases de datos SQL y NoSQL (PostgreSQL, MongoDB)</span>
                </div>
                <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Herramientas de Inteligencia Artificial aplicadas al desarrollo</span>
                </div>
                <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Manejo de Redes y Sistemas Operativos</span>
                </div>
                <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Soporte Técnico y Atención al Público</span>
                </div>
                <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Diseño Gráfico y Despliegue en Producción</span>
                </div>
              </div>
            </section>
          </div>

          {/* Quick Sidebar Facts */}
          <div className="md:col-span-4 space-y-6">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-md space-y-5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Datos de Contacto
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-zinc-500">Formación</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Lic. en Ciencias de la Computación (Último año)</div>
                </div>
                <div>
                  <div className="text-zinc-500">Título Técnico</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Técnico en Informática</div>
                </div>
                <div>
                  <div className="text-zinc-500">Especialidad</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Fullstack, SQL/NoSQL & IA Tools</div>
                </div>
                <div>
                  <div className="text-zinc-500">Email</div>
                  <div className="text-emerald-400 font-semibold mt-0.5">jeremias.contacto.dev@gmail.com</div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-2">
                <a
                  href="/cv/CV_Jeremias_FullStack.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-semibold transition-all"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Descargar CV Completo</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-all"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Enviar Mensaje</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
