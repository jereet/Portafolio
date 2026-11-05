"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
  type PanInfo,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Project } from "@/types";
import { GithubIcon } from "@/components/ui/icons";

interface CircularProjectsCarouselProps {
  projects: Project[];
}

// Slots rendered around the active card. Each one is positioned
// `offset * step` pixels away from the center. The active slot is
// rendered last so it stays on top before hydration.
const SLOT_OFFSETS = [-2, -1, 1, 2, 0];

// Slightly overdamped so the card glides into place and stops exactly
// on the slot instead of bouncing past it.
const SNAP_TRANSITION = {
  type: "tween",
  duration: 0.22,
  ease: "easeOut",
} as const;

const MAX_DRAG_VELOCITY = 1200;
const VELOCITY_PROJECTION = 0.14;

export function CircularProjectsCarousel({
  projects,
}: CircularProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndexes, setActiveImageIndexes] = useState<
    Record<string, number>
  >({});
  const [step, setStep] = useState(520);
  const [isDragging, setIsDragging] = useState(false);
  const [isSettling, setIsSettling] = useState(false);

  const x = useMotionValue(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const resetXOnRender = useRef(false);
  const settlingRef = useRef(false);
  const draggedRef = useRef(false);
  const dragResetTimer = useRef<number | null>(null);

  const total = projects.length;

  // Keep the slot distance in sync with the card width so cards never overlap.
  useLayoutEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const measure = () => {
      if (!node.clientWidth) return;
      const cardWidth = Math.min(window.innerWidth * 0.9, 560);
      setStep(cardWidth * 0.96 + 36);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Once the slide animation lands on the next card we swap indexes.
  // Resetting x in a layout effect keeps both frames visually identical.
  useLayoutEffect(() => {
    if (resetXOnRender.current) {
      resetXOnRender.current = false;
      x.set(0);
    }
  }, [currentIndex, x]);

  const commitSlide = useCallback(
    (delta: number) => {
      if (total <= 1 || delta === 0) {
        x.set(0);
        return;
      }
      resetXOnRender.current = true;
      setCurrentIndex((prev) => (((prev + delta) % total) + total) % total);
    },
    [total, x]
  );

  const slideTo = useCallback(
    (delta: number, velocity = 0) => {
      if (total <= 1 || delta === 0 || settlingRef.current) return;

      settlingRef.current = true;
      setIsSettling(true);

      animate(x, -delta * step, { ...SNAP_TRANSITION, velocity }).then(() => {
        settlingRef.current = false;
        setIsSettling(false);
        commitSlide(delta);
      });
    },
    [commitSlide, step, total, x]
  );

  useEffect(() => {
    return () => {
      if (dragResetTimer.current) window.clearTimeout(dragResetTimer.current);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft") slideTo(-1);
      if (e.key === "ArrowRight") slideTo(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slideTo]);

  const handleDragStart = () => {
    if (dragResetTimer.current) {
      window.clearTimeout(dragResetTimer.current);
      dragResetTimer.current = null;
    }
    draggedRef.current = true;
    setIsDragging(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    // Block the click that the browser fires right after a drag.
    dragResetTimer.current = window.setTimeout(() => {
      draggedRef.current = false;
      dragResetTimer.current = null;
    }, 120);

    if (settlingRef.current) return;

    const offset = x.get();
    const velocity = Math.max(
      -MAX_DRAG_VELOCITY,
      Math.min(MAX_DRAG_VELOCITY, info.velocity.x)
    );
    // Project where the card would land if the gesture kept its momentum.
    // This makes short flicks decisive while long, slow drags still have to
    // travel far enough to commit.
    const projected = offset + velocity * VELOCITY_PROJECTION;
    const snapThreshold = step * 0.22;

    let direction = 0;
    if (projected <= -snapThreshold) direction = 1;
    else if (projected >= snapThreshold) direction = -1;

    if (direction !== 0) {
      slideTo(direction, velocity);
      return;
    }

    settlingRef.current = true;
    setIsSettling(true);
    animate(x, 0, { ...SNAP_TRANSITION, velocity }).then(() => {
      settlingRef.current = false;
      setIsSettling(false);
    });
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (!draggedRef.current) return;
    draggedRef.current = false;
    if (dragResetTimer.current) {
      window.clearTimeout(dragResetTimer.current);
      dragResetTimer.current = null;
    }
    e.preventDefault();
    e.stopPropagation();
  };

  const goToSlide = (target: number) => {
    if (total <= 1 || settlingRef.current) return;
    let delta = (((target - currentIndex) % total) + total) % total;
    if (delta > total / 2) delta -= total;
    slideTo(delta);
  };

  // Handle image switching inside a project
  const handleDotClick = (
    projectId: string,
    imgIdx: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({ ...prev, [projectId]: imgIdx }));
  };

  const handleImageNavigation = (
    projectId: string,
    imageCount: number,
    delta: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] ?? 0) + delta + imageCount) % imageCount,
    }));
  };

  const renderProjectCard = (project: Project, isActive: boolean) => {
    const images =
      project.images && project.images.length > 0
        ? project.images
        : [project.image || "/projects/default.webp"];

    const currentImgIdx =
      (activeImageIndexes[project.id] ?? 0) % images.length;

    return (
      <div
        className={`relative rounded-3xl border-2 bg-[#0c0f17] p-5 sm:p-8 space-y-5 transition-colors duration-300 ${
          isActive
            ? "border-emerald-500/50 shadow-2xl shadow-emerald-950/40"
            : "border-emerald-500/20"
        } ${isActive ? "" : "pointer-events-none"}`}
      >
        {/* Top Screenshot with Dots */}
        <div className="relative w-full aspect-[16/10] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800/80 group/mockup flex flex-col justify-between p-4">
          {/* Project Visual Canvas / Representation */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 flex items-center justify-center p-6">
            {images.length > 0 ? (
              <img
                src={images[currentImgIdx]}
                alt={`Captura de ${project.title}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain bg-zinc-950"
              />
            ) : (
              <>
            {project.slug.includes("mixrush") && (
              <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-emerald-500/20 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    MixRush — Partida en Vivo
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    Ronda {currentImgIdx + 1}/7
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 my-auto">
                  <div className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">
                    🎲 Dados
                  </div>
                  <div className="h-10 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-xs font-bold text-emerald-300">
                    🃏 Desafío
                  </div>
                  <div className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">
                    ⏱️ Turno
                  </div>
                  <div className="h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">
                    🏆 Podio
                  </div>
                </div>
                <div className="text-[11px] font-mono text-zinc-400 truncate">
                  Jugador activo: Jeremías • Turno 3
                </div>
              </div>
            )}

            {project.slug.includes("countries") && (
              <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-blue-500/20 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="font-mono text-xs text-blue-400 font-bold">
                    Countries Explorer — Desktop
                  </span>
                  <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                    Kotlin Multiplatform
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 my-auto text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700 space-y-1">
                    <div className="text-zinc-200 font-bold">🇦🇷 Argentina</div>
                    <div className="text-[10px] text-zinc-400">
                      Capital: Buenos Aires
                    </div>
                    <div className="text-[10px] text-emerald-400">
                      Clima: 22°C Soleado
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700 space-y-1">
                    <div className="text-zinc-200 font-bold">🇪🇸 España</div>
                    <div className="text-[10px] text-zinc-400">
                      Capital: Madrid
                    </div>
                    <div className="text-[10px] text-emerald-400">
                      Clima: 18°C Despejado
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500">
                  Comparativa demográfica y climática en tiempo real
                </div>
              </div>
            )}

            {project.slug.includes("qr") && (
              <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-purple-500/20 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="font-mono text-xs text-purple-400 font-bold">
                    QR Party — Evento 50th
                  </span>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                    Escaneo Móvil
                  </span>
                </div>
                <div className="flex items-center justify-around my-auto">
                  <div className="h-16 w-16 rounded-xl bg-white p-1.5 flex items-center justify-center">
                    <div className="h-full w-full bg-black rounded flex items-center justify-center text-[9px] text-white font-mono font-bold">
                      QR CODE
                    </div>
                  </div>
                  <div className="text-left space-y-1">
                    <div className="text-xs font-bold text-zinc-100">
                      🍸 Menú de Tragos
                    </div>
                    <div className="text-xs font-bold text-zinc-100">
                      📸 Muro de Recuerdos
                    </div>
                    <div className="text-[11px] text-purple-300">
                      Mesa 12 asignada
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500">
                  Acceso instantáneo para invitados sin apps
                </div>
              </div>
            )}

            {project.slug.includes("mongo") && (
              <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-emerald-500/20 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    MongoDB Movie Search
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    REST API
                  </span>
                </div>
                <div className="space-y-2 my-auto font-mono text-xs">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 flex items-center justify-between">
                    <span>🔍 &quot;Interstellar&quot; (2014)</span>
                    <span className="text-yellow-400 text-[11px]">★ 8.7</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 flex items-center justify-between">
                    <span>🔍 &quot;Inception&quot; (2010)</span>
                    <span className="text-yellow-400 text-[11px]">★ 8.8</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-500">
                  Consultas optimizadas con text indexing y pipelines
                </div>
              </div>
            )}
              </>
            )}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) =>
                    handleImageNavigation(project.id, images.length, -1, e)
                  }
                  className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-zinc-950/70 text-white shadow-lg backdrop-blur-sm transition-all hover:border-emerald-400/60 hover:bg-emerald-500 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label={`Ver captura anterior de ${project.title}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={(e) =>
                    handleImageNavigation(project.id, images.length, 1, e)
                  }
                  className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-zinc-950/70 text-white shadow-lg backdrop-blur-sm transition-all hover:border-emerald-400/60 hover:bg-emerald-500 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  aria-label={`Ver captura siguiente de ${project.title}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>

          {/* Carousel Dots Navigation at Bottom of Screenshot */}
          <div className="relative z-10 flex items-center justify-center gap-1.5 pt-2">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => handleDotClick(project.id, dotIdx, e)}
                tabIndex={isActive ? undefined : -1}
                className={`h-2 rounded-full transition-all ${
                  currentImgIdx === dotIdx
                    ? "w-6 bg-emerald-400"
                    : "w-2 bg-zinc-600 hover:bg-zinc-400"
                }`}
                aria-label={`Ver captura ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Title & Category Pill */}
        <div className="flex items-start justify-between gap-4 pt-2">
          <div>
            <Link
              href={`/projects/${project.slug}`}
              draggable={false}
              tabIndex={isActive ? undefined : -1}
              className="group inline-flex items-center gap-2"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </Link>
            <div className="text-xs font-mono text-emerald-400 mt-1">
              {project.subtitle} • {project.timeline}
            </div>
          </div>

          <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-emerald-500/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions: Ver Demo & Código */}
        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                draggable={false}
                tabIndex={isActive ? undefined : -1}
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors group"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Ver Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                draggable={false}
                tabIndex={isActive ? undefined : -1}
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Código</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            draggable={false}
            tabIndex={isActive ? undefined : -1}
            className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono"
          >
            <span>Detalle técnico</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  };

  if (!projects || projects.length === 0) return null;

  const currentProject = projects[currentIndex];
  const offsets = total > 1 ? SLOT_OFFSETS : [0];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Controls Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-500">Proyecto</span>
          <span className="text-sm font-mono font-bold text-emerald-400">
            {String(currentIndex + 1).padStart(2, "0")}{" "}
            <span className="text-zinc-600">
              / {String(total).padStart(2, "0")}
            </span>
          </span>
          <span
            className={`hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 transition-opacity ${
              isDragging ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            Arrastrá para explorar
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => slideTo(-1)}
            disabled={total <= 1}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-all shadow-md active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => slideTo(1)}
            disabled={total <= 1}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-all shadow-md active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Draggable / Snapping Stage */}
      <div className="relative w-full overflow-hidden py-4 md:[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
        <motion.div
          ref={stageRef}
          data-carousel-stage
          drag={total > 1 && !isSettling ? "x" : false}
          dragConstraints={{ left: -step, right: step }}
          dragElastic={0.14}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onClickCapture={handleClickCapture}
          style={{
            x,
            touchAction: "pan-y",
            perspective: 2000,
            transformStyle: "preserve-3d",
          }}
          className={`relative grid w-full justify-center place-items-center select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {offsets.map((offset) => {
            const project =
              projects[((currentIndex + offset) % total + total) % total];

            return (
              <CarouselSlide
                key={offset}
                offset={offset}
                step={step}
                x={x}
                isActive={offset === 0}
                onSelect={() => slideTo(offset)}
              >
                {renderProjectCard(project, offset === 0)}
              </CarouselSlide>
            );
          })}
        </motion.div>
      </div>

      {/* Dot navigation */}
      {total > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ir a ${project.title}`}
              aria-current={index === currentIndex ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-emerald-400"
                  : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {currentProject.title} — proyecto {currentIndex + 1} de {total}
      </p>
    </div>
  );
}

interface CarouselSlideProps {
  offset: number;
  step: number;
  x: MotionValue<number>;
  isActive: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}

function CarouselSlide({
  offset,
  step,
  x,
  isActive,
  onSelect,
  children,
}: CarouselSlideProps) {
  const slideX = useTransform(x, (value) => offset * step + value);
  const distance = useTransform(slideX, (value) => Math.abs(value));
  const opacity = useTransform(distance, [0, step, step * 2], [1, 0.55, 0.16]);
  const rotateY = useTransform(
    slideX,
    [-step * 2, -step, 0, step, step * 2],
    [14, 9, 0, -9, -14]
  );
  const zIndex = useTransform(distance, (value) =>
    Math.max(1, 100 - Math.round(value / 10))
  );

  return (
    <motion.div
      data-carousel-slide={offset}
      data-active={isActive}
      aria-hidden={isActive ? undefined : true}
      onClick={isActive ? undefined : onSelect}
      style={{ x: offset * step, opacity, rotateY, zIndex }}
      className="col-start-1 row-start-1 w-[min(90vw,560px)] justify-self-center self-center will-change-transform"
    >
      {children}
    </motion.div>
  );
}
