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
    default: "Jeremías — Fullstack & Ciencias de la Computación",
    template: "%s | Jeremías",
  },
  description:
    "Estudiante de último año de Licenciatura en Ciencias de la Computación y Técnico en Informática. Sólidos conocimientos en programación, desarrollo web fullstack, SQL, NoSQL y herramientas de IA.",
  keywords: [
    "Full Stack Developer",
    "Ciencias de la Computación",
    "Técnico en Informática",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "NoSQL",
    "Argentina",
  ],
  authors: [{ name: "Jeremías" }],
  creator: "Jeremías",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://jeremias-portfolio.vercel.app",
    title: "Jeremías — Fullstack & Ciencias de la Computación",
    description:
      "Estudiante de último año de Licenciatura en Ciencias de la Computación y Técnico en Informática.",
    siteName: "Jeremías Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremías — Fullstack & Ciencias de la Computación",
    description:
      "Estudiante de último año de Licenciatura en Ciencias de la Computación y Técnico en Informática.",
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
      <body className="min-h-screen bg-[#080a0d] text-zinc-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200 bg-ambient-ambient relative">
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
