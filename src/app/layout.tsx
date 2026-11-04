import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getAllProjects, getAllLinks } from "@/lib/projects-service";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jeremías — Full Stack Software Engineer & AI-Augmented Developer",
    template: "%s | Jeremías",
  },
  description:
    "Portafolio profesional de Jeremías. Desarrollador Full Stack con bases en Ciencias de la Computación, arquitectura de software, experiencia de usuario y desarrollo asistido por agentes de IA.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "AI Agents",
    "Argentina",
  ],
  authors: [{ name: "Jeremías" }],
  creator: "Jeremías",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://jeremias-portfolio.vercel.app",
    title: "Jeremías — Full Stack Software Engineer",
    description:
      "Ingeniería de software, diseño de producto y desarrollo asistido por agentes de IA.",
    siteName: "Jeremías Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremías — Full Stack Software Engineer",
    description:
      "Ingeniería de software, diseño de producto y desarrollo asistido por agentes de IA.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await getAllProjects();
  const links = await getAllLinks();

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090a0f] text-zinc-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200 bg-grid-tech relative">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-500 text-zinc-950 font-bold rounded-lg shadow-lg"
        >
          Saltar al contenido principal
        </a>

        {/* Global Navbar */}
        <Navbar projects={projects} links={links} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer links={links} />
      </body>
    </html>
  );
}
