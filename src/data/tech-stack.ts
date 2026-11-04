import { TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
  {
    title: "Lenguajes de Programación",
    description: "Bases sólidas de computación con tipado estricto y alto rendimiento.",
    items: [
      { name: "TypeScript", description: "Tipado estricto, genéricos, inferencia y patrones funcionales.", level: "Avanzado", highlight: true },
      { name: "JavaScript (ESNext)", description: "Event loop, concurrencia, asincronía y optimizaciones.", level: "Avanzado", highlight: true },
      { name: "Python", description: "Scripting, automatización, APIs y manipulación de datos.", level: "Avanzado" },
      { name: "C / C++", description: "Fundamentos de memoria, punteros y estructuras de datos de la facultad.", level: "Competente" },
      { name: "SQL", description: "Modelado relacional, subconsultas, índices y optimización de planes.", level: "Avanzado" }
    ]
  },
  {
    title: "Frontend & Experiencia de Usuario",
    description: "Interfaces reactivas, accesibles y con microinteracciones de alta fidelidad.",
    items: [
      { name: "React 19 / 18", description: "Hooks, Server Components, Concurrent Mode y arquitectura de estado.", level: "Avanzado", highlight: true },
      { name: "Next.js (App Router)", description: "SSR, ISR, Server Actions, layouts anidados y optimización de rutas.", level: "Avanzado", highlight: true },
      { name: "Tailwind CSS", description: "Design systems con utilidades, variables CSS, animaciones fluidas.", level: "Avanzado", highlight: true },
      { name: "Framer Motion", description: "Animaciones declarativas, gestos, transiciones entre páginas y layouts.", level: "Avanzado" },
      { name: "shadcn/ui & Radix UI", description: "Componentes accesibles, headless primitives y soporte WAI-ARIA.", level: "Avanzado" },
      { name: "Zod & React Hook Form", description: "Validación estricta de esquemas en tiempo de compilación y ejecución.", level: "Avanzado" }
    ]
  },
  {
    title: "Backend & Arquitectura de Software",
    description: "Sistemas distribuidos, APIs robustas y procesamiento en tiempo real.",
    items: [
      { name: "Node.js & Express", description: "Servidores REST, middlewares, autenticación y stream de datos.", level: "Avanzado", highlight: true },
      { name: "Next.js Server Actions & APIs", description: "Rutas tipadas, mutaciones seguras y ejecución server-side.", level: "Avanzado", highlight: true },
      { name: "WebSockets & Event-Driven", description: "Sincronización en tiempo real, eventos pub/sub y manejo de salas.", level: "Competente" },
      { name: "RESTful API Design", description: "Especificaciones OpenAPI, versionado, códigos HTTP canónicos y rate limiting.", level: "Avanzado" }
    ]
  },
  {
    title: "Bases de Datos & Persistencia",
    description: "Modelado eficiente, consistencia ACID y consultas agregadas de alta velocidad.",
    items: [
      { name: "PostgreSQL", description: "Bases relacionales, triggers, índices compuestos y constraints.", level: "Avanzado", highlight: true },
      { name: "MongoDB & Mongoose", description: "Modelado documental, Aggregation Pipelines complejas e índices de texto.", level: "Avanzado", highlight: true },
      { name: "Prisma ORM", description: "Migraciones automáticas, tipado end-to-end y consultas optimizadas.", level: "Avanzado", highlight: true },
      { name: "Redis", description: "Caché en memoria, sesiones distribuidas y colas de trabajo.", level: "Competente" }
    ]
  },
  {
    title: "Desarrollo Asistido por Agentes de IA",
    description: "Multiplicación de productividad con flujos agénticos y orquestación de LLMs.",
    items: [
      { name: "AI Agent Orchestration", description: "Diseño de flujos de trabajo multi-agente, arquitecturas 'human-in-the-loop' y subagentes.", level: "Avanzado", highlight: true },
      { name: "SDKs de LLMs (Gemini / OpenAI)", description: "Function calling, estructuración de salidas (JSON schema) y RAG.", level: "Avanzado", highlight: true },
      { name: "Prompt Engineering & Context Curation", description: "Técnicas avanzadas de prompting, Chain-of-Thought y curación de contexto.", level: "Avanzado" },
      { name: "Desarrollo con Cursor & Copilot", description: "Refactorización asistida, scaffolding inteligente y test-driven coding acelerado.", level: "Avanzado" }
    ]
  },
  {
    title: "DevOps, Herramientas & Calidad",
    description: "Entrega continua, testing automatizado y observabilidad.",
    items: [
      { name: "Git & GitHub Workflows", description: "Branching strategies, code reviews, PRs limpias y GitHub Actions.", level: "Avanzado", highlight: true },
      { name: "Vercel & Cloud Deployments", description: "Edge functions, analytics, variables de entorno seguras y dominios.", level: "Avanzado" },
      { name: "Docker", description: "Contenedores reproducibles para entornos de desarrollo y microservicios.", level: "Competente" },
      { name: "Testing (Vitest / Playwright)", description: "Pruebas unitarias, de integración y end-to-end.", level: "Competente" }
    ]
  }
];
