export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Laboral" | "Pasantía Profesionalizante";
  description: string;
  achievements: string[];
  technologies?: string[];
  reference?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-bbps",
    role: "Recepción / Promoción",
    company: "Bahía Blanca Plaza Shopping",
    location: "Bahía Blanca, Buenos Aires",
    period: "Julio 2025 - Octubre 2026",
    type: "Laboral",
    description: "Atención al cliente presencial, gestión de informes, soporte a visitantes y coordinación de dinámicas de promoción comercial en el principal centro comercial de la ciudad.",
    achievements: [
      "Atención al público directa con resolución ágil y empática de consultas y reclamos.",
      "Excelente comunicación interpersonal y coordinación continua para el trabajo en equipo.",
      "Manejo de situaciones de alta concurrencia y soporte al cliente."
    ],
    reference: "Laura Acosta — 4594150"
  },
  {
    id: "exp-rosch",
    role: "Desarrollador Fullstack",
    company: "Paula Schwerdt (ROSCH) Inmobiliaria",
    location: "Bahía Blanca, Buenos Aires",
    period: "Julio 2020 - Marzo 2021",
    type: "Pasantía Profesionalizante",
    description: "Desarrollo completo de sitio web de muestra y plataforma de gestión para publicación de inmuebles y propiedades comerciales.",
    achievements: [
      "Desarrollo de una aplicación web para la publicación, filtrado y administración de propiedades inmobiliarias.",
      "Diseño e implementación de interfaces de usuario responsivas con foco en la experiencia de usuario (UI/UX).",
      "Desarrollo de funcionalidades backend y gestión de bases de datos relacionales.",
      "Integración de tecnologías frontend y backend para construir una solución web funcional y robusta."
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
    reference: "Juan Rodriguez — +54 9 291 644-1450"
  },
  {
    id: "exp-saavedra",
    role: "Desarrollador Web",
    company: "Ferretería Saavedra",
    location: "Bahía Blanca, Buenos Aires",
    period: "Febrero 2020 - Julio 2020",
    type: "Pasantía Profesionalizante",
    description: "Desarrollo integral de sitio web comercial y tienda online para catálogo y operaciones de productos de ferretería industrial.",
    achievements: [
      "Desarrollo de sitio web comercial y tienda online con catálogo digital de productos.",
      "Diseño e implementación de interfaces responsive adaptables a móviles y computadoras.",
      "Desarrollo de funcionalidades backend para la gestión de productos, inventario y operaciones de la tienda."
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"]
  }
];
