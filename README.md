# Jeremías — Full Stack Software Engineer Portfolio

Portafolio profesional desarrollado como una aplicación de producto de alto rendimiento, con identidad visual **dark minimalist**, acentos tecnológicos en verde esmeralda y una arquitectura escalable.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías | Propósito |
|---|---|---|
| **Framework** | Next.js 16 (App Router) + React 19 + TypeScript | Renderizado híbrido (SSG, ISR, Server Actions), tipado estricto. |
| **Estilos & UI** | Tailwind CSS v4 + Design System Propio | Glassmorphism, microinteracciones, paleta dark y acentos neón sutiles. |
| **Animaciones** | Framer Motion | Entradas fluidas, transiciones de tarjetas y modales. |
| **Buscador & Atajos** | Command Palette (`Ctrl + K` / `⌘ + K`) | Navegación instantánea entre proyectos, secciones y redes. |
| **Persistencia** | JSON Atómico + Prisma Schema (PostgreSQL ready) | Almacenamiento ágil out-of-the-box con soporte listo para Supabase/Neon. |
| **Validación** | Zod | Validación de esquemas en API de contacto y formularios. |
| **SEO & Accesibilidad**| Metadata API, OpenGraph, Sitemap, Robots, WCAG AA | Indexación optimizada y navegación por teclado. |

---

## 🚀 Proyectos Iniciales Destacados

1. **[MixRush — Juego de Mesa Digital](https://github.com/jereet/MixRush-JuegoDeMesaDigital)**  
   *Categoría: Real-time & Game Mechanics*  
   Plataforma multijugador con sincronización de estado en tiempo real, gestión determinista de turnos y feedback audiovisual adaptado a múltiples dispositivos.

2. **[Countries Explorer](https://github.com/jereet/Countries-Explorer)**  
   *Categoría: Frontend Engineering & Data Visualization*  
   Explorador geo-demográfico de más de 250 territorios con búsqueda instantánea debounced, cálculo de fronteras en memoria $O(1)$ y 99/100 en Lighthouse.

3. **[QR Party 50th](https://github.com/jereet/QR_Party_50th)**  
   *Categoría: Full Stack & Event Tech*  
   Sistema interactivo para celebraciones con generación de credenciales QR dinámicas, compresión de imágenes en el cliente (reducción del 95%) y streaming en pantalla gigante.

4. **[Buscador MongoDB](https://github.com/jereet/BuscadorMongoDB)**  
   *Categoría: Backend Engineering & Databases*  
   Motor de consultas avanzadas sobre MongoDB Atlas optimizado con text indexing ponderado, pipelines de agregación `$facet` en un único round-trip y telemetría de latencia.

---

## 🔐 Panel de Administración (`/admin`)

El portafolio incluye un panel de gestión protegido para agregar, modificar o eliminar proyectos y enlaces sin tocar código:

- **Ruta:** `/admin`
- **Clave de Acceso por defecto:** `admin123` *(configurable en `.env.local` con `ADMIN_SECRET_KEY`)*
- **Funcionalidades:**
  - Crear y editar proyectos con slugs automáticos, tags, métricas y desafíos resueltos.
  - Gestionar enlaces sociales (LinkedIn, GitHub, Email, CV, Twitter, etc.).
  - Revalidación automática de rutas estáticas vía Server Actions.
  - Soporte de base de datos PostgreSQL con Prisma cuando se defina `DATABASE_URL`.

---

## 💻 Desarrollo Local

```bash
# 1. Instalar dependencias
pnpm install

# 2. Configurar variables de entorno
cp .env.example .env.local

# 3. Iniciar servidor de desarrollo
pnpm dev

# 4. Compilar para producción
pnpm build
```
