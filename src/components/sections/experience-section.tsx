import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, UserCheck, Sparkles, Building2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">04 //</span> Trayectoria
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experiencia Laboral
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Experiencia práctica en desarrollo web fullstack, gestión de bases de datos, atención al público, soporte técnico y trabajo en equipo.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker with glow */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500 transition-all shadow-sm shadow-emerald-500/50" />

              <div className="p-6 sm:p-7 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all duration-300 space-y-4">
                {/* Role, Period & Type */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/70 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        {exp.type}
                      </span>
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-emerald-400 mt-1 flex items-center gap-2">
                      <Building2 className="h-4 w-4 shrink-0 text-emerald-400/80" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500 hidden sm:flex">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements / Responsibilities */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                    Responsabilidades y Aportes:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies and Reference */}
                <div className="pt-3 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  {exp.technologies && exp.technologies.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-zinc-500 text-[11px] mr-1">Tecnologías:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : <div />}

                  {exp.reference && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-lg border border-zinc-800/80">
                      <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Referencia: {exp.reference}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
