# Jeremías Toranzo — Portfolio

Portafolio personal desarrollado con Next.js, orientado a mostrar proyectos,
experiencia, tecnologías y canales de contacto en una interfaz dark minimalista.

## Características

- Landing page responsive con secciones de presentación, proyectos, tecnologías,
  experiencia y contacto.
- Carrusel interactivo de proyectos con:
  - Arrastre táctil y con mouse.
  - Navegación por teclado y flechas.
  - Capturas configurables desde el panel de administración.
  - Dots y flechas para cambiar entre imágenes.
- Carrusel automático de tecnologías con pausa al interactuar.
- Páginas individuales para cada proyecto.
- SEO básico con metadata, Open Graph, sitemap y robots.
- Formulario de contacto validado con Zod.
- Panel de administración protegido con Clerk.

## Stack tecnológico

| Área | Tecnología |
|---|---|
| Framework | Next.js 16, App Router |
| Lenguaje | TypeScript |
| UI | React 19, Tailwind CSS 4 |
| Animaciones | Framer Motion |
| Iconos | Lucide React y SVG personalizados |
| Autenticación | Clerk |
| Validación | Zod |
| Persistencia actual | `src/data/projects-data.json` |
| Preparación de base de datos | Prisma y PostgreSQL |
| Package manager | pnpm |

## Proyectos

- [MixRush — Juego de Mesa Digital](https://github.com/jereet/MixRush-JuegoDeMesaDigital)
- [Countries Explorer](https://github.com/jereet/Countries-Explorer)
- [QR Party 50th](https://github.com/jereet/QR_Party_50th)
- [Buscador MongoDB](https://github.com/jereet/BuscadorMongoDB)

Los proyectos, enlaces y capturas se administran desde
[`src/data/projects-data.json`](./src/data/projects-data.json). Las imágenes
locales se encuentran en [`public/projects/`](./public/projects/).

## Panel de administración

El panel está disponible en `/admin` y utiliza Clerk para la autenticación.

### Acceso

1. Iniciar sesión mediante `/sign-in`.
2. Clerk valida la sesión antes de permitir el acceso a `/admin`.
3. El servidor compara el usuario autenticado con `CLERK_ADMIN_USER_ID`.

La autorización se valida tanto en el proxy como dentro de las Server Actions,
por lo que ocultar la interfaz no es la única medida de protección.

Desde el panel se pueden:

- Crear, editar y eliminar proyectos.
- Modificar títulos, descripciones, tecnologías, tags y enlaces.
- Configurar una o varias capturas por proyecto.
- Gestionar enlaces sociales.
- Revalidar las páginas afectadas después de guardar cambios.

## Configuración local

### Requisitos

- Node.js compatible con Next.js 16.
- pnpm 12 o superior.
- Una aplicación configurada en Clerk para acceder al panel.

### Instalación

```bash
pnpm install
pnpm dev
```

La aplicación estará disponible en <http://localhost:3000>.

### Variables de entorno

Crear `.env.local` en la raíz del proyecto:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/portfolio?schema=public"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
CLERK_ADMIN_USER_ID="user_..."
```

`CLERK_ADMIN_USER_ID` debe contener el ID del único usuario autorizado a
modificar el portfolio. Las claves reales nunca deben commitearse.

## Scripts

```bash
pnpm dev       # Servidor de desarrollo
pnpm lint      # ESLint
pnpm build     # Build de producción
pnpm start     # Servidor de producción
```

## Estructura principal

```text
src/
├── app/
│   ├── admin/              # Página y Server Actions protegidas
│   ├── api/contact/        # API del formulario de contacto
│   ├── projects/           # Catálogo y detalle de proyectos
│   └── sign-in/            # Página de inicio de sesión de Clerk
├── components/
│   ├── admin/              # Dashboard de administración
│   ├── layout/             # Navbar y footer
│   ├── projects/           # Carrusel y tarjetas
│   └── sections/           # Secciones de la página principal
├── data/                   # Datos editables del portfolio
├── lib/                    # Servicios y autorización
└── proxy.ts                # Protección de rutas con Clerk
public/
└── projects/               # Capturas de proyectos
```

## Producción

En Vercel o el proveedor elegido, configurar las mismas variables de Clerk y
`CLERK_ADMIN_USER_ID` usadas localmente. Después ejecutar el build:

```bash
pnpm build
pnpm start
```
