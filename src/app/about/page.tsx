import { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  Terminal, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Code2, 
  FileText,
  Mail,
  Compass,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mí — Jeremías | Full Stack & AI Assisted Engineer",
  description: "Formación en Ciencias de la Computación, base técnica en informática y enfoque en ingeniería Full Stack con agentes de IA.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">//</span> Perfil Profesional
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Ingeniería de software con fundamentos sólidos y visión de producto.
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed font-light">
            Soy Jeremías, desarrollador Full Stack orientado a crear aplicaciones web robustas, rápidas y memorables.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                <span>Formación Académica y Raíces Técnicas</span>
              </h2>
              <p>
                Mi viaje en la tecnología comenzó con una <strong>formación técnica en informática</strong>, donde aprendí las bases del hardware, la arquitectura de computadoras, redes y lógica de programación estructurada desde cero.
              </p>
              <p>
                Actualmente curso la <strong>Licenciatura en Ciencias de la Computación</strong>. Esta formación universitaria me ha dado una base rigurosa en análisis de algoritmos, estructuras de datos avanzadas, teoría de la computación, sistemas distribuidos y optimización de memoria. Para mí, la programación no es solo encajar paquetes de npm; es entender qué sucede por debajo del capó.
              </p>
            </section>

            <section className="space-y-3 pt-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-400" />
                <span>El Enfoque Full Stack Moderno</span>
              </h2>
              <p>
                En lugar de limitarme a un solo lado de la pila, disfruto construir la solución completa. En el backend, diseño esquemas relacionales o documentales bien indexados (PostgreSQL, MongoDB), arquitecturas de servidor con Next.js y APIs REST con tipado estricto de punta a punta.
              </p>
              <p>
                En el frontend, considero que la estética y la experiencia de usuario (UX) son de primer orden: renderizado rápido con Server Components, microinteracciones cuidadas con Framer Motion, diseño responsive impecable y accesibilidad web sin excepciones.
              </p>
            </section>

            <section className="space-y-3 pt-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Bot className="h-5 w-5 text-emerald-400" />
                <span>Desarrollo Aumentado por Agentes de IA</span>
              </h2>
              <p>
                Entiendo la inteligencia artificial no como un reemplazo del criterio del ingeniero, sino como un <strong>multiplicador exponencial de capacidad</strong>. Trabajo activamente con arquitecturas de agentes, herramientas como Cursor, Claude y orquestación de LLMs para:
              </p>
              <ul className="space-y-2 pl-4 border-l-2 border-emerald-500/30 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acelerar la creación de prototipos y suites de pruebas automatizadas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Explorar escenarios de borde (edge cases) y validaciones de seguridad exhaustivas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mantener el foco cognitivo en la arquitectura, la lógica de negocio y las decisiones que realmente impactan al usuario.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Quick Sidebar Facts */}
          <div className="md:col-span-4 space-y-6">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-md space-y-5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Resumen de Perfil
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-zinc-500">Carrera</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Lic. en Ciencias de la Computación</div>
                </div>
                <div>
                  <div className="text-zinc-500">Base Previa</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Técnico en Informática</div>
                </div>
                <div>
                  <div className="text-zinc-500">Especialidad</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Full Stack & AI-Assisted Dev</div>
                </div>
                <div>
                  <div className="text-zinc-500">Idiomas</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Español (Nativo) • Inglés (Técnico fluido)</div>
                </div>
                <div>
                  <div className="text-zinc-500">Disponibilidad</div>
                  <div className="text-emerald-400 font-semibold mt-0.5 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Inmediata / Remoto o Híbrido</span>
                  </div>
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
