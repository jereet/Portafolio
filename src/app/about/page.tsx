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
  Briefcase,
  BookOpen,
  MapPin,
  Calendar,
  Building2,
  Phone
} from "lucide-react";
import { experiences } from "@/data/experience";
import { additionalEducation } from "@/data/tech-stack";

export const metadata: Metadata = {
  title: "Sobre Mí — Jeremías Toranzo | Perfil Profesional",
  description: "Estudiante avanzado de Licenciatura en Ciencias de la Computación (UNS) y Técnico en Informática.",
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
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Jeremías Toranzo
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
            Estudiante avanzado de Licenciatura en Ciencias de la Computación y Técnico en Informática.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {/* Resumen principal */}
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
              <p className="text-zinc-200">
                Estudiante de último año de <strong>Licenciatura en Ciencias de la Computación</strong> y <strong>Técnico en Informática</strong>. Sólidos conocimientos en programación, desarrollo web fullstack y bases de datos relacionales SQL y NoSQL.
              </p>
              <p className="text-zinc-300">
                Cuento con un gran manejo de herramientas de inteligencia artificial, un buen manejo de redes y sistemas operativos y buena comunicación para el trabajo en equipo.
              </p>
              <p className="text-zinc-300">
                Me caracterizo por ser una persona <strong>creativa, resolutiva</strong> y con una <strong>fuerte capacidad de adaptación, aprendizaje autónomo y resolución de problemas</strong>. Experiencia en atención al público, soporte técnico, diseño gráfico y despliegue de aplicaciones en producción.
              </p>
            </div>

            {/* Formación Académica */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                <span>Formación Académica</span>
              </h2>
              <div className="space-y-3">
                <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-base">Licenciatura en Ciencias de la Computación</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 w-fit">
                      2021 - Presente (Último Año)
                    </span>
                  </div>
                  <div className="text-xs font-medium text-zinc-400">Universidad Nacional del Sur (UNS)</div>
                  <p className="text-xs text-zinc-400 pt-1 leading-relaxed">
                    Formación universitaria integral en algoritmos, estructuras de datos avanzadas, complejidad computacional, sistemas operativos y redes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-base">Educación Técnica Superior — Técnico en Informática Personal y Profesional</span>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded-full border border-zinc-800 w-fit">
                      2013 - 2020
                    </span>
                  </div>
                  <div className="text-xs font-medium text-zinc-400">Instituto Técnico La Piedad</div>
                  <p className="text-xs text-zinc-400 pt-1 leading-relaxed">
                    Formación técnica en arquitectura de computadoras, redes cableadas y configuración, programación estructurada, bases de datos y soporte técnico de hardware.
                  </p>
                </div>
              </div>
            </section>

            {/* Otros Conocimientos y Cursos */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-400" />
                <span>Otros Conocimientos & Capacitaciones</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalEducation.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/40 space-y-1">
                    <div className="text-xs font-bold text-white">{edu.title}</div>
                    <div className="text-[11px] text-zinc-400 flex items-center justify-between">
                      <span>{edu.institution}</span>
                      <span className="font-mono text-emerald-400">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experiencia Laboral */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-emerald-400" />
                <span>Experiencia Laboral</span>
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-800/60 pb-2">
                      <div>
                        <div className="font-bold text-white text-base flex items-center gap-2">
                          <span>{exp.role}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                            {exp.type}
                          </span>
                        </div>
                        <div className="text-xs font-medium text-emerald-400 mt-0.5">{exp.company}</div>
                      </div>
                      <div className="text-xs font-mono text-zinc-400">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-1 text-xs text-zinc-400">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.reference && (
                      <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/40">
                        Referencia: {exp.reference}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Quick Sidebar Facts */}
          <div className="md:col-span-4 space-y-6">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-md space-y-5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Información de Contacto
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <div className="text-zinc-500">Nombre</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Jeremías Toranzo</div>
                </div>
                <div>
                  <div className="text-zinc-500">Ubicación</div>
                  <div className="text-zinc-200 font-semibold mt-0.5 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Bahía Blanca, Buenos Aires, Argentina</span>
                  </div>
                </div>
                <div>
                  <div className="text-zinc-500">Correo Electrónico</div>
                  <a href="mailto:jereet31@gmail.com" className="text-emerald-400 font-semibold mt-0.5 block hover:underline">
                    jereet31@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-zinc-500">Celular / WhatsApp</div>
                  <a href="https://wa.me/5492914298647" target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold mt-0.5 block hover:underline">
                    +54 9 291 429-8647
                  </a>
                </div>
                <div>
                  <div className="text-zinc-500">LinkedIn</div>
                  <a href="https://linkedin.com/in/jeremias-toranzo-4422901b1" target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold mt-0.5 block hover:underline truncate">
                    jeremias-toranzo-4422901b1
                  </a>
                </div>
                <div>
                  <div className="text-zinc-500">GitHub</div>
                  <a href="https://github.com/jereet" target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold mt-0.5 block hover:underline">
                    github.com/jereet
                  </a>
                </div>
                <div>
                  <div className="text-zinc-500">Idiomas</div>
                  <div className="text-zinc-200 font-semibold mt-0.5">Español (Nativo) • Inglés (Intermedio)</div>
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
                  href="/#contact"
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
