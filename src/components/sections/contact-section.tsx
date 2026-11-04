"use client";

import { useState } from "react";
import { 
  Mail, 
  Send, 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SocialLink } from "@/types";

interface ContactSectionProps {
  links?: SocialLink[];
}

export function ContactSection({ links }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jeremias.contacto.dev@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMsg(data.message || "¡Mensaje enviado con éxito!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setFeedbackMsg(data.message || "Error al enviar el mensaje.");
        }
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("Hubo un problema de conexión. Por favor escríbeme directamente a mi email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400">
            <span className="text-zinc-600">04 //</span> Iniciar Conversación
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Construyamos algo extraordinario juntos.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            ¿Tenés un puesto en tu equipo, un desafío técnico o un proyecto que requiera ingeniería sólida y visión de producto? Mi bandeja de entrada está siempre abierta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-md space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Canales Directos</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Podés contactarme a través del formulario o de manera directa por cualquiera de estos medios:
                </p>
              </div>

              {/* Email direct */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Correo Electrónico</div>
                  <a
                    href="mailto:jeremias.contacto.dev@gmail.com"
                    className="text-xs sm:text-sm font-medium text-emerald-300 hover:underline truncate block"
                  >
                    jeremias.contacto.dev@gmail.com
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors shrink-0"
                  title="Copiar email"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Social links */}
              <div className="space-y-2.5">
                <a
                  href="https://github.com/jereet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:border-emerald-500/30 text-zinc-300 hover:text-white transition-all text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="h-4 w-4 text-emerald-400" />
                    <span className="font-medium">GitHub</span>
                    <span className="text-zinc-500 font-mono">@jereet</span>
                  </div>
                  <span className="text-zinc-500">github.com/jereet ↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/jereet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 hover:border-emerald-500/30 text-zinc-300 hover:text-white transition-all text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="h-4 w-4 text-emerald-400" />
                    <span className="font-medium">LinkedIn</span>
                    <span className="text-zinc-500 font-mono">/in/jereet</span>
                  </div>
                  <span className="text-zinc-500">linkedin.com ↗</span>
                </a>

                <a
                  href="/cv/CV_Jeremias_FullStack.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-950/30 transition-all text-xs font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 text-emerald-400" />
                    <span>Descargar Curriculum Vitae</span>
                  </div>
                  <span className="font-mono text-[11px] bg-emerald-500/20 px-2 py-0.5 rounded">PDF</span>
                </a>
              </div>

              {/* Response commitment badge */}
              <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                <span>Tiempo estimado de respuesta: &lt; 24 horas</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Enviar un Mensaje</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </h3>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">¡Mensaje enviado con éxito!</div>
                    <div className="text-xs text-emerald-400/80 mt-0.5">{feedbackMsg}</div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-sm flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Error al enviar</div>
                    <div className="text-xs text-red-400/80 mt-0.5">{feedbackMsg}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">
                      Nombre <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre o empresa"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400">{errors.name[0]}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">
                      Correo Electrónico <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400">{errors.email[0]}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">
                    Asunto / Propósito <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ej: Oportunidad de puesto Full Stack / Proyecto"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400">{errors.subject[0]}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">
                    Mensaje <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre el puesto, los objetivos técnicos o las dudas que tengas..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400">{errors.message[0]}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all disabled:opacity-60 shadow-lg shadow-emerald-500/20"
                >
                  {loading ? (
                    <span>Enviando mensaje...</span>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
