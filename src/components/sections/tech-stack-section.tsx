import { techCategories } from "@/data/tech-stack";
import { Sparkles, Terminal, Code2, Database, Wrench, Bot, Layers } from "lucide-react";

export function TechStackSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code2;
      case 1:
        return Layers;
      case 2:
        return Terminal;
      case 3:
        return Database;
      case 4:
        return Bot;
      case 5:
        return Wrench;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">03 //</span> Tecnologías & Herramientas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Stack Tecnológico
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Lenguajes, frameworks, bases de datos y herramientas que utilizo para desarrollo web fullstack, administración de sistemas, redes e inteligencia artificial.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIdx) => {
            const Icon = getCategoryIcon(catIdx);
            return (
              <div
                key={category.title}
                className="flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/10"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100 text-base leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Tech items */}
                <div className="space-y-3 flex-1">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className={`p-3 rounded-xl border transition-all ${
                        item.highlight
                          ? "bg-zinc-900/90 border-emerald-500/30 text-zinc-200"
                          : "bg-zinc-900/40 border-zinc-800/60 text-zinc-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-semibold text-white flex items-center gap-1.5">
                          {item.name}
                          {item.highlight && (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          )}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            item.level === "Experto"
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                              : item.level === "Avanzado"
                              ? "bg-teal-500/10 text-teal-300 border-teal-500/30"
                              : "bg-zinc-800 text-zinc-400 border-zinc-700"
                          }`}
                        >
                          {item.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
