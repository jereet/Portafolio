import { TechIcon } from "@/components/ui/tech-icons";

export function TechStackSection() {
  const row1 = [
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

  const row2 = [
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
  ];

  const renderTechCard = (tech: { name: string }, key: string) => (
    <li
      key={key}
      className="flex h-24 w-36 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white transition duration-200 hover:border-[#034618] hover:shadow-[4px_4px_0_0_#034618] motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 md:h-28 md:w-44 cursor-default shadow-sm"
    >
      <div className="flex h-8 w-24 items-center justify-center object-contain md:h-10">
        <TechIcon name={tech.name} />
      </div>
      <span className="text-xs font-semibold text-slate-800 tracking-tight">
        {tech.name}
      </span>
    </li>
  );

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
        {/* Row 1 - Forward */}
        <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
          <ul aria-hidden="false" className="flex shrink-0 gap-4 pr-4">
            {row1.map((tech, idx) => renderTechCard(tech, `row1-a-${idx}`))}
          </ul>
          <ul aria-hidden="true" className="flex shrink-0 gap-4 pr-4">
            {row1.map((tech, idx) => renderTechCard(tech, `row1-b-${idx}`))}
          </ul>
        </div>

        {/* Row 2 - Reverse */}
        <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused] [animation-direction:reverse]">
          <ul aria-hidden="false" className="flex shrink-0 gap-4 pr-4">
            {row2.map((tech, idx) => renderTechCard(tech, `row2-a-${idx}`))}
          </ul>
          <ul aria-hidden="true" className="flex shrink-0 gap-4 pr-4">
            {row2.map((tech, idx) => renderTechCard(tech, `row2-b-${idx}`))}
          </ul>
        </div>

        <p className="sr-only">
          Tecnologías: TypeScript, JavaScript, Kotlin, React, Next.js, Tailwind CSS, MySQL, PostgreSQL, Python, PHP, Java, C, MongoDB, HTML, Docker, Git, Prolog.
        </p>
      </div>
    </section>
  );
}
