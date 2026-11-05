"use client";

import { useState } from "react";
import { TechIcon } from "@/components/ui/tech-icons";

interface Tech {
  name: string;
}

const row1: Tech[] = [
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Kotlin" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "Python" },
  { name: "PHP" },
  { name: "Java" },
  { name: "C" },
];

const row2: Tech[] = [
  { name: "MongoDB" },
  { name: "HTML" },
  { name: "Docker" },
  { name: "Git" },
  { name: "Prolog" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Kotlin" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "MySQL" },
  { name: "Clerk" },
];

interface MarqueeRowProps {
  items: Tech[];
  direction: "left" | "right";
}

function MarqueeRow({ items, direction }: MarqueeRowProps) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [pinnedKey, setPinnedKey] = useState<string | null>(null);
  const [rowHovered, setRowHovered] = useState(false);

  const activeKey = hoveredKey ?? pinnedKey;
  const isPaused = rowHovered || pinnedKey !== null;

  return (
    <div
      data-tech-row={direction}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setRowHovered(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") {
          setRowHovered(false);
          setHoveredKey(null);
        }
      }}
      style={{
        animationDirection: direction === "right" ? "reverse" : undefined,
        animationDuration: direction === "right" ? "52s" : "48s",
        animationPlayState: isPaused ? "paused" : undefined,
      }}
      className="flex w-max animate-marquee"
    >
      {[0, 1].map((copy) => {
        const isDuplicate = copy === 1;

        return (
          <ul
            key={copy}
            aria-hidden={isDuplicate ? true : undefined}
            className="flex shrink-0 gap-4 pr-4"
          >
            {items.map((tech, idx) => {
              const key = `${copy}-${idx}`;
              const isActive = activeKey === key;
              const isDimmed = !isActive && activeKey !== null;

              return (
                <li key={key} className="shrink-0">
                  <button
                    type="button"
                    data-tech-card={tech.name}
                    tabIndex={isDuplicate ? -1 : undefined}
                    aria-pressed={pinnedKey === key}
                    title={`Pasá el cursor o tocá para pausar la fila en ${tech.name}`}
                    onPointerEnter={(e) => {
                      if (e.pointerType === "mouse") setHoveredKey(key);
                    }}
                    onClick={() =>
                      setPinnedKey((prev) => (prev === key ? null : key))
                    }
                    className={`group relative flex h-24 w-36 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 bg-white transition-all duration-300 ease-out md:h-28 md:w-44 ${
                      isActive
                        ? "z-10 border-[#034618] shadow-[6px_6px_0_0_#034618,0_18px_38px_-12px_rgba(3,70,24,0.55)] ring-2 ring-[#034618]/20 motion-safe:-translate-y-2 motion-safe:scale-105"
                        : isDimmed
                          ? "border-slate-200 opacity-45 saturate-50 shadow-sm"
                          : "border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex h-8 w-24 items-center justify-center object-contain md:h-10">
                      <TechIcon name={tech.name} />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 tracking-tight">
                      {tech.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

export function TechStackSection() {
  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">03 //</span> Tecnologías
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Habilidades Técnicas & Herramientas
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Lenguajes de programación, frameworks, bases de datos y herramientas que empleo en el desarrollo de software y sistemas.
          </p>
        </div>
      </div>

      {/* Marquee Container with exact user specifications */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        {/* Row 1 - Forward (left) */}
        <MarqueeRow items={row1} direction="left" />

        {/* Row 2 - Reverse (right) */}
        <MarqueeRow items={row2} direction="right" />

        <p className="sr-only">
          Tecnologías: TypeScript, JavaScript, Kotlin, React, Next.js, Tailwind CSS, MySQL, PostgreSQL, Python, PHP, Java, C, MongoDB, HTML, Docker, Git, Prolog.
        </p>
      </div>

    </section>
  );
}
