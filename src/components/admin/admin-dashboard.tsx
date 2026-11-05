"use client";

import { useState, useEffect } from "react";
import { 
  Project, 
  SocialLink, 
  ProjectChallenge, 
  ProjectStat 
} from "@/types";
import { 
  adminSaveProject, 
  adminDeleteProject, 
  adminSaveLink, 
  adminDeleteLink, 
  verifyAdminPassword 
} from "@/app/admin/actions";
import { 
  Lock, 
  Key, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  FolderKanban, 
  Link2, 
  Save, 
  X, 
  Sparkles,
  ArrowRight,
  Database
} from "lucide-react";

interface AdminDashboardProps {
  initialProjects: Project[];
  initialLinks: SocialLink[];
}

export function AdminDashboard({ initialProjects, initialLinks }: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretKey, setSecretKey] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<"projects" | "links" | "docs">("projects");
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [links, setLinks] = useState<SocialLink[]>(initialLinks);

  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Editing Project Modal State
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Editing Link Modal State
  const [editingLink, setEditingLink] = useState<Partial<SocialLink> | null>(null);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  // Check stored auth in sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem("portfolio_admin_key");
    if (stored) {
      setSecretKey(stored);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const res = await verifyAdminPassword(passwordInput);
    if (res.success) {
      setIsAuthenticated(true);
      setSecretKey(passwordInput);
      sessionStorage.setItem("portfolio_admin_key", passwordInput);
    } else {
      setAuthError(res.error || "Clave inválida");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("portfolio_admin_key");
    setIsAuthenticated(false);
    setSecretKey("");
    setPasswordInput("");
  };

  const showToast = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // Open Create Project
  const handleOpenCreateProject = () => {
    setEditingProject({
      title: "",
      subtitle: "",
      slug: "",
      description: "",
      longDescription: "",
      category: "Full Stack",
      tags: [],
      technologies: [],
      featured: true,
      githubUrl: "",
      liveUrl: "",
      role: "Full Stack Engineer",
      timeline: "2024",
      architecture: [
        "Arquitectura modular desacoplada.",
        "Manejo de estado reactivo y Server Actions."
      ],
      challenges: [
        {
          title: "Optimización de concurrencia y latencia",
          solution: "Implementación de caching y compresión de carga útil."
        }
      ],
      features: [
        "Interfaz adaptativa y accesible.",
        "Validación de datos de entrada."
      ],
      image: "/projects/default.webp",
      order: projects.length + 1
    });
    setIsProjectModalOpen(true);
  };

  // Open Edit Project
  const handleOpenEditProject = (p: Project) => {
    setEditingProject({ ...p });
    setIsProjectModalOpen(true);
  };

  // Save Project
  const handleSaveProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !editingProject.title) return;

    const res = await adminSaveProject(editingProject as any, secretKey);
    if (res.success && res.project) {
      setProjects((prev) => {
        const idx = prev.findIndex((p) => p.id === res.project!.id);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = res.project!;
          return updated;
        }
        return [...prev, res.project!];
      });
      setIsProjectModalOpen(false);
      showToast("¡Proyecto guardado exitosamente!", "success");
    } else {
      showToast(res.error || "Error al guardar el proyecto", "error");
    }
  };

  // Delete Project
  const handleDeleteProject = async (id: string, title: string) => {
    if (!confirm(`¿Estás seguro de que deseas eliminar el proyecto "${title}"?`)) {
      return;
    }
    const res = await adminDeleteProject(id, secretKey);
    if (res.success) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      showToast("Proyecto eliminado.", "success");
    } else {
      showToast(res.error || "No se pudo eliminar el proyecto.", "error");
    }
  };

  // Open Create Link
  const handleOpenCreateLink = () => {
    setEditingLink({
      name: "",
      url: "",
      icon: "globe",
      highlight: false
    });
    setIsLinkModalOpen(true);
  };

  // Save Link
  const handleSaveLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLink || !editingLink.name || !editingLink.url) return;

    const res = await adminSaveLink(editingLink as any, secretKey);
    if (res.success && res.link) {
      setLinks((prev) => {
        const idx = prev.findIndex((l) => l.id === res.link!.id);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = res.link!;
          return updated;
        }
        return [...prev, res.link!];
      });
      setIsLinkModalOpen(false);
      showToast("Enlace guardado exitosamente.", "success");
    } else {
      showToast(res.error || "Error al guardar enlace.", "error");
    }
  };

  // Delete Link
  const handleDeleteLink = async (id: string, name: string) => {
    if (!confirm(`¿Eliminar enlace "${name}"?`)) return;
    const res = await adminDeleteLink(id, secretKey);
    if (res.success) {
      setLinks((prev) => prev.filter((l) => l.id !== id));
      showToast("Enlace eliminado.", "success");
    } else {
      showToast(res.error || "Error al eliminar enlace.", "error");
    }
  };

  // If not authenticated, show modern terminal login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-8 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Panel Administrador</h1>
              <p className="text-xs text-zinc-400 font-mono">Gestión de Proyectos & Enlaces</p>
            </div>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-300 flex items-center justify-between">
                <span>Clave de Acceso</span>
                <span className="text-[11px] text-zinc-500">Default: admin123</span>
              </label>
              <div className="relative">
                <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                  type="password"
                  required
                  autoFocus
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Introduce la contraseña de admin"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20"
            >
              Ingresar al Dashboard
            </button>
          </form>

          <p className="text-[11px] text-zinc-500 text-center font-mono">
            Configurable mediante la variable <code className="text-emerald-400">ADMIN_SECRET_KEY</code> en <code>.env.local</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Dashboard Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FolderKanban className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Admin Studio</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Activo
                </span>
              </h1>
              <p className="text-xs text-zinc-400 font-mono">
                Agrega, edita o reorganiza proyectos y enlaces en tiempo real.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>

        {/* Global Toast */}
        {message && (
          <div
            className={`p-4 rounded-xl border text-xs sm:text-sm flex items-center gap-2.5 transition-all ${
              message.type === "success"
                ? "bg-emerald-950/50 border-emerald-500/50 text-emerald-300"
                : "bg-red-950/50 border-red-500/50 text-red-300"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            ) : (
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* Tabs Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeTab === "projects"
                  ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
            >
              Proyectos ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab("links")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeTab === "links"
                  ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
            >
              Enlaces & Perfil ({links.length})
            </button>
            <button
              onClick={() => setActiveTab("docs")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeTab === "docs"
                  ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
            >
              Arquitectura & Prisma
            </button>
          </div>

          {activeTab === "projects" && (
            <button
              onClick={handleOpenCreateProject}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-all shadow-md shadow-emerald-500/20"
            >
              <Plus className="h-4 w-4" />
              <span>Nuevo Proyecto</span>
            </button>
          )}

          {activeTab === "links" && (
            <button
              onClick={handleOpenCreateLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-all shadow-md shadow-emerald-500/20"
            >
              <Plus className="h-4 w-4" />
              <span>Nuevo Enlace</span>
            </button>
          )}
        </div>

        {/* Tab Content: Projects */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-zinc-700 transition-all"
                >
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                        {p.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">Orden: #{p.order}</span>
                      {p.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                          Destacado
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{p.title}</span>
                      <span className="text-xs text-zinc-500 font-normal">/ {p.slug}</span>
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-2 max-w-3xl">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <button
                      onClick={() => handleOpenEditProject(p)}
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                      title="Editar Proyecto"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <a
                      href={`/projects/${p.slug}`}
                      target="_blank"
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-emerald-400 transition-colors"
                      title="Previsualizar Página"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => handleDeleteProject(p.id, p.title)}
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-red-950/60 border border-zinc-800 hover:border-red-500/40 text-zinc-400 hover:text-red-300 transition-colors"
                      title="Eliminar Proyecto"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Links */}
        {activeTab === "links" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{link.name}</span>
                      {link.highlight && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                          Destacado
                        </span>
                      )}
                    </div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-zinc-400 hover:text-emerald-400 truncate block mt-0.5"
                    >
                      {link.url}
                    </a>
                    <div className="text-[10px] font-mono text-zinc-500 mt-1 uppercase">
                      Icono: {link.icon}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        setEditingLink({ ...link });
                        setIsLinkModalOpen(true);
                      }}
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                      title="Editar"
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteLink(link.id, link.name)}
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-red-400"
                      title="Eliminar"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Docs / Prisma Architecture */}
        {activeTab === "docs" && (
          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 space-y-6">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-emerald-400" />
              <h2 className="text-lg font-bold text-white">
                Persistencia & Configuración de Base de Datos
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                Este portfolio implementa una arquitectura híbrida con alta tolerancia a fallos:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                <li>
                  <strong>Modo Out-of-the-Box (Local):</strong> Almacenamiento atómico en <code className="text-emerald-400">src/data/projects-data.json</code> con operaciones thread-safe y Server Actions revalidadas al instante. No requiere Docker ni bases de datos externas para funcionar de inmediato.
                </li>
                <li>
                  <strong>Modo PostgreSQL + Prisma:</strong> El esquema listo en <code className="text-emerald-400">prisma/schema.prisma</code> incluye los modelos <code className="text-zinc-200">Project</code>, <code className="text-zinc-200">SocialLink</code> y <code className="text-zinc-200">ContactMessage</code>.
                </li>
              </ul>

              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 font-mono text-xs text-emerald-300 space-y-1">
                <div className="text-zinc-500">// Para conectar una base de datos PostgreSQL de producción:</div>
                <div>1. Define DATABASE_URL=&quot;postgresql://...&quot; en .env.local</div>
                <div>2. Ejecuta: pnpm prisma db push</div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Project Form */}
        {isProjectModalOpen && editingProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-emerald-400" />
                  <span>{editingProject.id ? "Editar Proyecto" : "Nuevo Proyecto"}</span>
                </h2>
                <button
                  onClick={() => setIsProjectModalOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProjectSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-zinc-300">Título del Proyecto *</label>
                    <input
                      type="text"
                      required
                      value={editingProject.title || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-zinc-300">Subtítulo / Rol breve</label>
                    <input
                      type="text"
                      value={editingProject.subtitle || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, subtitle: e.target.value })}
                      placeholder="Ej: Juego de Mesa Digital Multijugador"
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-zinc-300">Categoría</label>
                    <select
                      value={editingProject.category || "Full Stack"}
                      onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Full Stack">Full Stack</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Real-time">Real-time</option>
                      <option value="Data & Tools">Data & Tools</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-zinc-300">Timeline / Año</label>
                    <input
                      type="text"
                      value={editingProject.timeline || "2024"}
                      onChange={(e) => setEditingProject({ ...editingProject, timeline: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-zinc-300">Orden en grilla</label>
                    <input
                      type="number"
                      value={editingProject.order ?? 1}
                      onChange={(e) => setEditingProject({ ...editingProject, order: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">Descripción Corta (Tarjeta)</label>
                  <textarea
                    rows={2}
                    value={editingProject.description || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">Descripción Detallada (Página de Detalle)</label>
                  <textarea
                    rows={4}
                    value={editingProject.longDescription || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, longDescription: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-zinc-300">URL del Repositorio de GitHub *</label>
                    <input
                      type="url"
                      required
                      value={editingProject.githubUrl || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                      placeholder="https://github.com/jereet/..."
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-zinc-300">URL de Demo en Vivo (Opcional)</label>
                    <input
                      type="url"
                      value={editingProject.liveUrl || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">Tags (Separados por coma)</label>
                  <input
                    type="text"
                    value={editingProject.tags?.join(", ") || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
                      })
                    }
                    placeholder="React, TypeScript, Tailwind, WebSockets"
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">Tecnologías Detalladas (Separadas por coma)</label>
                  <input
                    type="text"
                    value={editingProject.technologies?.join(", ") || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        technologies: e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
                      })
                    }
                    placeholder="React 19, TypeScript, Next.js, Framer Motion"
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">Capturas de Pantalla (Rutas o URLs separadas por coma)</label>
                  <input
                    type="text"
                    value={editingProject.images?.join(", ") || ""}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        images: e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                      })
                    }
                    placeholder="/projects/screenshot1.webp, /projects/screenshot2.webp"
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                  />
                  <p className="text-[10px] text-zinc-500 font-mono">
                    Estas imágenes se mostrarán con dots interactivos en la cola circular de proyectos.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={editingProject.featured || false}
                    onChange={(e) => setEditingProject({ ...editingProject, featured: e.target.checked })}
                    className="rounded bg-zinc-900 border-zinc-800 text-emerald-500 focus:ring-emerald-500"
                  />
                  <label htmlFor="featured" className="font-mono text-zinc-300 cursor-pointer">
                    Destacar en la página de inicio
                  </label>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setIsProjectModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold shadow-md shadow-emerald-500/20"
                  >
                    <Save className="h-4 w-4" />
                    <span>Guardar Proyecto</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal Link Form */}
        {isLinkModalOpen && editingLink && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h3 className="font-bold text-white text-base">
                  {editingLink.id ? "Editar Enlace" : "Nuevo Enlace"}
                </h3>
                <button
                  onClick={() => setIsLinkModalOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleSaveLinkSubmit} className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">Nombre del Enlace *</label>
                  <input
                    type="text"
                    required
                    value={editingLink.name || ""}
                    onChange={(e) => setEditingLink({ ...editingLink, name: e.target.value })}
                    placeholder="Ej: Twitter / X, Artículos, Kaggle"
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">URL de Destino *</label>
                  <input
                    type="url"
                    required
                    value={editingLink.url || ""}
                    onChange={(e) => setEditingLink({ ...editingLink, url: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-zinc-300">Tipo de Icono</label>
                  <select
                    value={editingLink.icon || "globe"}
                    onChange={(e) => setEditingLink({ ...editingLink, icon: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="globe">Globe (Web general)</option>
                    <option value="github">GitHub</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="mail">Mail / Correo</option>
                    <option value="file-text">Documento / PDF</option>
                    <option value="twitter">Twitter / X</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="highlightLink"
                    checked={editingLink.highlight || false}
                    onChange={(e) => setEditingLink({ ...editingLink, highlight: e.target.checked })}
                    className="rounded bg-zinc-900 border-zinc-800 text-emerald-500 focus:ring-emerald-500"
                  />
                  <label htmlFor="highlightLink" className="font-mono text-zinc-300 cursor-pointer">
                    Destacar en la barra social
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setIsLinkModalOpen(false)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
