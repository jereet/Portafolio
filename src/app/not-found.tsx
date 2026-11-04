import Link from "next/link";
import { Terminal, ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
        <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <Terminal className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-mono font-bold text-white">404</div>
          <h1 className="text-xl font-bold text-zinc-100">Ruta no encontrada</h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            El recurso o proyecto al que intentás acceder no existe o fue movido.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-all"
          >
            <Home className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium transition-all"
          >
            <span>Ver Proyectos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
