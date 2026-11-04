"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Command, 
  Menu, 
  X, 
  Lock, 
  ArrowUpRight 
} from "lucide-react";
import { CommandPalette } from "./command-palette";
import { Project, SocialLink } from "@/types";
import { GithubIcon } from "@/components/ui/icons";

interface NavbarProps {
  projects: Project[];
  links: SocialLink[];
}

export function Navbar({ projects, links }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section as user scrolls up and down
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = ["hero", "projects", "about", "stack", "experience", "contact"];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // offset for detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // Global Ctrl+K / Cmd+K handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { id: "hero", label: "Inicio", href: "/#hero" },
    { id: "projects", label: "Proyectos", href: "/#projects" },
    { id: "about", label: "Sobre Mí", href: "/#about" },
    { id: "stack", label: "Stack", href: "/#stack" },
    { id: "experience", label: "Experiencia", href: "/#experience" },
    { id: "contact", label: "Contacto", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navLinks[0]) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveSection(item.id);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-zinc-100 hover:text-emerald-400 transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
                <Terminal className="h-4 w-4 text-emerald-400 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold flex items-center gap-1.5">
                  JEREMÍAS <span className="text-emerald-400 text-xs font-normal px-1 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/20">TORANZO</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Animated Active Indicator */}
            <div className="hidden md:flex items-center gap-1 bg-zinc-900/70 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md relative">
              {navLinks.map((link) => {
                const isActive =
                  pathname === "/"
                    ? activeSection === link.id
                    : pathname.startsWith(`/${link.id}`);

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
                  >
                    {/* Animated Sliding Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-150 ${
                        isActive
                          ? "text-zinc-950 font-bold"
                          : "text-zinc-400 hover:text-zinc-100"
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Actions: Status pill, Command palette, GitHub, Admin */}
            <div className="flex items-center gap-2.5">
              {/* Status Badge */}
              <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponible para proyectos</span>
              </div>

              {/* Command Palette Button */}
              <button
                onClick={() => setIsCommandOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition-all group"
                title="Abrir Command Palette (Ctrl+K)"
              >
                <Command className="h-3.5 w-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Buscar</span>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded bg-zinc-950 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-800">
                  ⌘K
                </kbd>
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/jereet"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                title="GitHub @jereet"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              {/* Admin Access Button */}
              <Link
                href="/admin"
                className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all ${
                  pathname.startsWith("/admin")
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
                title="Panel de Administración"
              >
                <Lock className="h-3.5 w-3.5" />
              </Link>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                aria-label="Abrir menú"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-2xl">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Disponible para proyectos</span>
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === "/" ? activeSection === link.id : false;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                        : "text-zinc-300 hover:bg-zinc-900"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                <Link
                  href="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-emerald-400"
                >
                  <Lock className="h-3.5 w-3.5" />
                  <span>Panel Administrador</span>
                </Link>
                <a
                  href="https://github.com/jereet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        projects={projects}
        links={links}
      />
    </>
  );
}
