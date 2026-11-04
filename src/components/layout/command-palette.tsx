"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, ExternalLink, ArrowRight, FolderKanban, User, Terminal, Mail, FileText, Check, Lock, Sparkles } from "lucide-react";
import { Project, SocialLink } from "@/types";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  links: SocialLink[];
}

export function CommandPalette({ isOpen, onClose, projects, links }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const items = useMemo(() => {
    const navItems = [
      { id: "nav-home", label: "Inicio", subtitle: "Hero & Presentación Principal", icon: Terminal, action: () => router.push("/") },
      { id: "nav-projects", label: "Proyectos", subtitle: "Ver todos los proyectos desarrollados", icon: FolderKanban, action: () => router.push("/#projects") },
      { id: "nav-about", label: "Sobre Mí", subtitle: "Educación & Perfil Profesional", icon: User, action: () => router.push("/#about") },
      { id: "nav-stack", label: "Tech Stack", subtitle: "Lenguajes, Frameworks & Bases de Datos", icon: Sparkles, action: () => router.push("/#stack") },
      { id: "nav-experience", label: "Experiencia Laboral", subtitle: "Trayectoria y pasantías profesionalizantes", icon: FolderKanban, action: () => router.push("/#experience") },
      { id: "nav-contact", label: "Contacto", subtitle: "Email, WhatsApp & Formulario", icon: Mail, action: () => router.push("/#contact") },
      { id: "nav-admin", label: "Panel de Administración", subtitle: "Gestionar proyectos y enlaces", icon: Lock, action: () => router.push("/admin") },
    ];

    const projectItems = projects.map((p) => ({
      id: `proj-${p.slug}`,
      label: p.title,
      subtitle: `${p.category} • ${p.subtitle}`,
      icon: FolderKanban,
      action: () => router.push(`/projects/${p.slug}`),
    }));

    const actionItems = [
      {
        id: "action-copy-email",
        label: copiedEmail ? "¡Email Copiado al Portapapeles!" : "Copiar Email",
        subtitle: "jereet31@gmail.com",
        icon: copiedEmail ? Check : Mail,
        action: () => {
          navigator.clipboard.writeText("jereet31@gmail.com");
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2000);
        },
      },
      {
        id: "action-cv",
        label: "Descargar CV en PDF",
        subtitle: "Curriculum Vitae actualizado",
        icon: FileText,
        action: () => window.open("/cv/CV_Jeremias_FullStack.pdf", "_blank"),
      },
      ...links.map((link) => ({
        id: `link-${link.id}`,
        label: `Abrir ${link.name}`,
        subtitle: link.url,
        icon: ExternalLink,
        action: () => window.open(link.url, "_blank"),
      })),
    ];

    const all = [...navItems, ...projectItems, ...actionItems];

    if (!query.trim()) return all;

    const q = query.toLowerCase();
    return all.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
    );
  }, [query, projects, links, copiedEmail, router]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle arrow keys and Enter
  useEffect(() => {
    const handleKeyNav = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (items[selectedIndex]) {
          items[selectedIndex].action();
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyNav);
    return () => window.removeEventListener("keydown", handleKeyNav);
  }, [isOpen, items, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Palette Modal */}
      <div className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center gap-3 border-b border-zinc-800/80 px-4 py-3.5">
          <Search className="h-5 w-5 text-emerald-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Escribe para buscar proyectos, secciones o comandos..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            autoFocus
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-zinc-900 px-2 py-0.5 text-[11px] font-mono text-zinc-400 border border-zinc-800">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {items.length === 0 ? (
            <div className="py-8 text-center text-sm text-zinc-500">
              No se encontraron resultados para &ldquo;{query}&rdquo;
            </div>
          ) : (
            items.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-150 ${
                    isSelected
                      ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                      : "text-zinc-300 hover:bg-zinc-900/60 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-zinc-900 text-zinc-400"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="font-medium truncate">{item.label}</div>
                      <div className="text-xs text-zinc-500 truncate">{item.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isSelected ? "text-emerald-400 translate-x-1" : "text-zinc-600 opacity-0"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-zinc-800/80 px-4 py-2.5 bg-zinc-950/60 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span>Navegar con</span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono">↓</kbd>
            <span>Seleccionar</span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono">↵</kbd>
          </div>
          <span className="font-mono text-emerald-400/80">Command Palette</span>
        </div>
      </div>
    </div>
  );
}
