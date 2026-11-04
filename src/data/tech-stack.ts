import { TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
  {
    title: "Lenguajes de Programación",
    description: "Dominio de lenguajes compilados, interpretados y orientados a objetos.",
    items: [
      { name: "Java", description: "Programación orientada a objetos, estructuras de datos y patrones de diseño.", level: "Avanzado", highlight: true },
      { name: "SQL", description: "Diseño y modelado relacional, consultas complejas, índices y normalización.", level: "Avanzado", highlight: true },
      { name: "JavaScript", description: "Desarrollo web moderno, asincronía, manipulación del DOM y APIs.", level: "Avanzado", highlight: true },
      { name: "Kotlin", description: "Desarrollo moderno, Compose Multiplatform, arquitectura MVVM y corrutinas.", level: "Avanzado", highlight: true },
      { name: "TypeScript", description: "Tipado estático, interfaces, generics y desarrollo escalable.", level: "Avanzado", highlight: true },
      { name: "Python", description: "Scripts, automatización, procesamiento de datos y algoritmos.", level: "Competente" },
      { name: "PHP", description: "Desarrollo backend, conexión con MySQL y procesamiento en servidor.", level: "Competente" }
    ]
  },
  {
    title: "Bases de Datos",
    description: "Diseño, modelado y administración de bases relacionales y documentales.",
    items: [
      { name: "PostgreSQL", description: "Bases de datos relacionales, integridad referencial y consultas optimizadas.", level: "Avanzado", highlight: true },
      { name: "MySQL", description: "Administración, esquemas relacionales, triggers y operaciones de producción.", level: "Avanzado", highlight: true },
      { name: "MongoDB", description: "Bases NoSQL documentales, consultas con agregaciones, índices y Atlas.", level: "Avanzado", highlight: true },
      { name: "Diseño y Modelado", description: "Diagramas entidad-relación, normalización de esquemas y optimización.", level: "Avanzado" }
    ]
  },
  {
    title: "Frontend Web & Escritorio",
    description: "Interfaces modernas, responsivas y accesibles para web y escritorio.",
    items: [
      { name: "Next.js & React", description: "App Router, componentes funcionales, hooks y renderizado ágil.", level: "Avanzado", highlight: true },
      { name: "Tailwind CSS", description: "Diseño ágil con utility-first, diseño adaptativo y paletas de color modernas.", level: "Avanzado", highlight: true },
      { name: "Compose Multiplatform", description: "Desarrollo de aplicaciones de escritorio multiplataforma con Kotlin.", level: "Avanzado", highlight: true },
      { name: "HTML5 & CSS3", description: "Estructuras semánticas, animaciones, flexbox, CSS grid y responsive design.", level: "Avanzado" }
    ]
  },
  {
    title: "Backend, Servidores & APIs",
    description: "Arquitecturas limpias, creación de servicios y comunicación segura.",
    items: [
      { name: "Arquitectura Modular y por Capas", description: "Separación de responsabilidades, capas de dominio, datos y presentación.", level: "Avanzado", highlight: true },
      { name: "APIs REST & Webhooks", description: "Diseño, desarrollo e integración de APIs RESTful y eventos webhook.", level: "Avanzado", highlight: true },
      { name: "Node.js & Express", description: "Servidores ligeros, middlewares, autenticación y endpoints JSON.", level: "Avanzado" },
      { name: "Ktor", description: "Framework ligero de Kotlin para clientes HTTP y APIs asincrónicas.", level: "Competente" }
    ]
  },
  {
    title: "Inteligencia Artificial y Desarrollo Asistido",
    description: "Flujos de trabajo acelerados por herramientas de última generación.",
    items: [
      { name: "Google Antigravity", description: "Uso de entornos avanzados agénticos de desarrollo asistido por IA.", level: "Avanzado", highlight: true },
      { name: "ClaudeCode", description: "Pair programming asistido por terminal para refactorización y testing.", level: "Avanzado", highlight: true },
      { name: "OpenCode", description: "Herramientas de código abierto y flujos inteligentes de desarrollo.", level: "Avanzado" }
    ]
  },
  {
    title: "Herramientas, Sistemas & Entornos",
    description: "Control de versiones, infraestructura y sistemas operativos.",
    items: [
      { name: "Git & GitHub", description: "Control de versiones, ramas, pull requests y flujo de colaboración.", level: "Avanzado", highlight: true },
      { name: "Ubuntu / Linux", description: "Administración básica de servidores Linux, terminal Bash y permisos.", level: "Avanzado" },
      { name: "Docker", description: "Contenerización de aplicaciones para desarrollo y despliegue consistente.", level: "Competente" },
      { name: "Redes & Soporte Técnico", description: "Diagnóstico de conectividad, configuración de redes LAN y mantenimiento.", level: "Avanzado" }
    ]
  }
];

export const additionalEducation = [
  { title: "Desarrollo Kotlin Multiplatform", institution: "Universidad Nacional Del Sur", year: "2025" },
  { title: "Desarrollo de videojuegos 2D Godot", institution: "Universidad Nacional Del Sur", year: "2025" },
  { title: "Desarrollo de Aplicaciones Móviles", institution: "Ticmas Academy", year: "2023" },
  { title: "Desarrollo Front-End", institution: "Ticmas Academy", year: "2023" },
];
