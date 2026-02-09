# Informe Técnico Completo: Portafolio Profesional de Luz Guffanti

Este informe detalla la arquitectura, características, implementaciones técnicas y decisiones de diseño del sitio web de **Luz Guffanti**, una plataforma moderna diseñada para contenido audiovisual y marca personal.

---

## 🏗️ 1. Stack Tecnológico (Core)

La aplicación está construida utilizando las tecnologías más modernas y performantes del ecosistema web actual:

- **Framework**: [Next.js 15.5](https://nextjs.org/) (App Router). Permite Renderizado del Lado del Cliente (CSR) y del Lado del Servidor (SSR) para SEO optimizado.
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) y [JavaScript (React 19)](https://react.dev/).
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (v4 en desarrollo/configuración) y Vanilla CSS para micro-ajustes y animaciones complejas.
- **Base de Datos y ORM**: [Prisma](https://www.prisma.io/) con **SQLite**. Se utiliza para la gestión de leads (consultas) y administración de servicios.
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/). Implementación de transiciones suaves, efectos de hover y entradas dinámicas.

---

## 📂 2. Arquitectura de la Aplicación

### Estructura de Directorios

- `/src/app`: Rutas del App Router, incluyendo la Landing principal y el panel de administración (`/admin`).
- `/src/components`: Componentes reutilizables organizados por secciones (`sections`, `ui`).
- `/src/data`: Fuentes de datos estáticas (como los enlaces del portfolio en `portfolio.ts`).
- `/src/server`: Lógica del lado del servidor y acciones de base de datos.
- `/prisma`: Esquema de la base de datos y migraciones.

---

## 🚀 3. Implementaciones y Características Clave

### A. Gestión de Video (Cloudinary Integration)

- **Hosting**: Los videos se alojan en **Cloudinary** para garantizar baja latencia y alta disponibilidad.
- **Optimización Automática**: Se utiliza `f_auto` y `q_auto` para que Cloudinary entregue el video en el mejor formato y calidad según el navegador y conexión del usuario.
- **Posters Dinámicos**: Portadas generadas automáticamente desde el video (`so_auto,f_jpg`) para evitar que el usuario vea una pantalla negra mientras carga.
- **Autoplay Intuitivo**: Los videos se reproducen automáticamente en silencio para dar vida a la interfaz, con controles de sonido accesibles por el usuario.

### B. Sistema de Contacto y Leads

- **Mailing (Formulario)**: Integrado en la sección `Contact`, validado con **Zod** y **React Hook Form**. Permite que los usuarios envíen solicitudes directamente desde la web.
- **WhatsApp**: Botón flotante y modal de acción rápida que redirige al chat de WhatsApp Business con un enlace pre-formateado.
- **Citas (Calendly)**: Integración con Calendly para que los clientes puedan agendar llamadas de consultoría o producción directamente.

### C. Backend y Administración

- **Prisma Schema**: La base de datos cuenta con modelos para:
  - `User`: Gestión de roles (Admin/Visitor).
  - `Inquiry`: Registro completo de mensajes recibidos a través del formulario.
  - `PortfolioItem`: Capacidad técnica para administrar el portafolio dinámicamente.
  - `Service`: Definición de servicios, precios y procesos.

---

## 🎨 4. Diseño y UX (User Experience)

### Estética Premium

- **Paleta de Colores**: Uso de tonos terrosos y neutrales (`#94634F`) que refuerzan la marca personal "Luz Guffanti".
- **Tipografía**: Combinación de fuentes de tipo `display` (elegantes y modernas) con fuentes de cuerpo legibles.
- **Responsive Design**: Adaptación total a dispositivos móviles mediante Flexbox y CSS Grid. Especial atención a la visualización de videos verticales (9:16).

---

## 🛠️ 5. Mantenimiento y Calidad

- **Testing**: Configurado con **Vitest** (Unit/UI tests) y **Playwright** (E2E tests) para asegurar que el formulario y la navegación funcionen siempre.
- **CI/CD**: Preparado para despliegue automático en **Vercel**, conectando el repositorio de GitHub con la rama `main`.
- **SEO**: Implementación de Meta Tags, Open Graph para previsualizaciones en redes sociales y estructura semántica de HTML5.

---

## 📋 6. Futuras Implementaciones (Roadmap)

1.  **Dashboard Administrativo**: Finalización del panel `/admin` para que Luz pueda subir videos sin tocar código.
2.  **Blog**: Sección de artículos para posicionamiento orgánico.
3.  **Newsletter**: Integración con servicios de mailing masivo.

---

**Elaborado por**: Federico (Antigravity AI)
**Fecha**: 08 de febrero de 2026
