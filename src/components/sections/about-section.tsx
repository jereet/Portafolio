import Link from "next/link";
import { 
  GraduationCap, 
  Terminal, 
  Bot, 
  Cpu, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Code2,
  CheckCircle2
} from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Ciencias de la Computación & Base Técnica",
      description: "Estudio de Licenciatura en Ciencias de la Computación complementado con formación técnica en informática. Esto me proporciona comprensión profunda de estructuras de datos, complejidad temporal/espacial, sistemas operativos y redes, y no únicamente el uso superficial de frameworks.",
      badge: "Formación de Base"
    },
    {
      icon: Layers,
      title: "Ingeniería Full Stack & Diseño de Producto",
      description: "No concibo el backend y el frontend como silos desconectados. Desarrollo aplicaciones de extremo a extremo: desde modelos de datos optimizados y Server Actions seguras, hasta microinteracciones fluidas con Tailwind y accesibilidad impecable.",
      badge: "Full Stack"
    },
    {
      icon: Bot,
      title: "Desarrollo Acelerado con Agentes de IA",
      description: "Adopto flujos de pair programming con agentes inteligentes (Claude, Cursor, LLMs estructurados) como multiplicador de fuerza. Me permite iterar arquitecturas complejas a gran velocidad, automatizar suites de tests exhaustivas y mantener el foco en las decisiones críticas de diseño.",
      badge: "AI-Augmented"
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">02 //</span> Sobre Mí & Filosofía
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ingeniería de software con mentalidad de producto y herramientas de última generación.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Creo en la simplicidad justificada: resolver problemas reales con la herramienta adecuada, escribir código que tus compañeros disfruten leer y entregar experiencias que superen las expectativas del usuario.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-7 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/70 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 px-2.5 py-0.5 rounded-full bg-zinc-900/80 border border-zinc-800">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mb-3 group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Philosophy Card */}
        <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Criterio Profesional</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                &ldquo;No se trata de usar 20 herramientas para impresionar, sino de dominar los fundamentos y tomar decisiones arquitectónicas acertadas.&rdquo;
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Cada decisión técnica en mis proyectos (elegir Server Components sobre client-side fetching innecesario, índices compuestos en bases de datos o aislamiento de estados) responde a una necesidad verificable de escalabilidad, legibilidad y costo operacional.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium transition-all group"
              >
                <span>Leer trayectoria completa</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
