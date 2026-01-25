# Análisis de Despliegue en Vercel y Gestión de Multimedia

## 1. 📊 Descripción del Problema

- **Contexto**: El proyecto es un portfolio profesional para una Content Creator (Luz Guffanti) que depende críticamente de la calidad y velocidad de carga de sus videos y fotos.
- **Síntomas actuales**:
  - Uso de enlaces externos (YouTube Shorts) incrustados vía `iframe`, lo que limita el control de la UI y añade carga excesiva de scripts externos.
  - Uso de enlaces de Google Drive que actualmente no se reproducen nativamente y requieren redirección externa.
  - Ausencia de una estrategia de optimización de imágenes (fotos de herramientas y testimonios).
- **Impacto**:
  - **Performance**: Los iframes de YouTube penalizan el Core Web Vitals (LCP/CLS).
  - **UX**: La experiencia de "abrir en Drive" rompe el flujo del portfolio.
  - **Estética**: La marca personal pierde coherencia al depender de reproductores de terceros.

## 2. 🕵️ Diagnóstico

- **Causa Raíz**: El proyecto actual funciona como un MVP (Producto Mínimo Viable) utilizando almacenamiento gratuito externo sin una capa de CDN u optimización dedicada.
- **Evidencia**:
  - `src/data/portfolio.ts`: Hardcoded strings con URLs de YouTube y Drive.
  - `src/components/PortfolioItem.tsx`: Lógica condicional compleja para manejar diferentes proveedores de video.
  - `package.json`: No hay dependencias de optimización de imagen o storage.

## 3. 🔗 Referencias

- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Vercel Limits (Hobby vs Pro)](https://vercel.com/docs/limits/overview)
