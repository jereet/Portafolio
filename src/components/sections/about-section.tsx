import Link from "next/link";
import { 
  GraduationCap, 
  Terminal, 
  Bot, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Database,
  Network,
  Palette,
  Headphones,
  CheckCircle2,
  Users
} from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: GraduationCap,
      title: "Formación en Informática & Computación",
      description: "Estudiante de último año de la Licenciatura en Ciencias de la Computación y Técnico en Informática. Comprensión sólida de lógica, estructuras de datos, sistemas operativos y redes.",
      badge: "Educación"
    },
    {
      icon: Layers,
      title: "Desarrollo Web Fullstack & Bases de Datos",
      description: "Sólidos conocimientos en programación y desarrollo web completo (frontend y backend), trabajando con bases de datos relacionales SQL y documentales NoSQL.",
      badge: "Desarrollo"
    },
    {
      icon: Bot,
      title: "Herramientas de Inteligencia Artificial",
      description: "Gran manejo de herramientas y flujos de IA para optimizar tiempos de desarrollo, resolución de bugs, asistencia en código y aprendizaje ágil de nuevas tecnologías.",
      badge: "IA Aplicada"
    },
    {
      icon: Network,
      title: "Redes & Sistemas Operativos",
      description: "Buen manejo en configuración de redes, administración de sistemas operativos y resolución práctica de problemas de infraestructura tecnológica.",
      badge: "Infraestructura"
    },
    {
      icon: Headphones,
      title: "Soporte Técnico & Atención al Público",
      description: "Experiencia directa en diagnóstico, soporte de equipamiento y trato con usuarios, asegurando una comunicación clara, empática y efectiva para el trabajo en equipo.",
      badge: "Experiencia"
    },
    {
      icon: Palette,
      title: "Diseño Gráfico & Despliegue en Producción",
      description: "Habilidades de diseño visual para interfaces atractivas y experiencia práctica publicando y configurando aplicaciones en entornos de producción.",
      badge: "Producción"
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">02 //</span> Sobre Mí
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Perfil Profesional & Formación
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
            Estudiante de último año de Licenciatura en Ciencias de la Computación y Técnico en Informática con sólidos conocimientos en desarrollo web fullstack, bases de datos SQL y NoSQL, y herramientas de inteligencia artificial.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/70 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 px-2.5 py-0.5 rounded-full bg-zinc-900/80 border border-zinc-800">
                    {skill.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-100 mb-2 group-hover:text-emerald-300 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Personality & Value Card */}
        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-950/15 p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                <Users className="h-3.5 w-3.5" />
                <span>Actitud de Trabajo</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Persona creativa, resolutiva y con fuerte capacidad de adaptación y aprendizaje autónomo.
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Priorizo la buena comunicación para el trabajo en equipo, la predisposición a resolver problemas y el aprendizaje continuo de nuevas herramientas para aportar valor inmediato a los proyectos.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium transition-all group"
              >
                <span>Ver perfil detallado</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
