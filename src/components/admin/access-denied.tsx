"use client";

import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export function AccessDenied() {
  const { signOut } = useClerk();

  return (
    <section className="flex min-h-[calc(100vh-9rem)] items-center justify-center px-4 py-32">
      <div className="w-full max-w-lg rounded-2xl border border-red-500/30 bg-zinc-900/80 p-8 text-center shadow-2xl shadow-black/30">
        <h1 className="text-2xl font-bold text-red-400">Acceso denegado</h1>
        <p className="mt-4 text-zinc-300">
          Lo lamento, solo Jeremias tiene acceso a este panel de administrador.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            Volver al inicio
          </Link>
          <button
            type="button"
            onClick={() => signOut()}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 font-semibold text-zinc-200 transition-colors hover:bg-zinc-700"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </div>
      </div>
    </section>
  );
}
