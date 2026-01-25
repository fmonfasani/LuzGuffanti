# Plan de Implementación: Despliegue y Multimedia

**Estado**: [Planificado]

## ✅ Checklist de Tareas

### Infraestructura / Configuración

- [ ] Conectar el repositorio de GitHub a Vercel.
- [ ] Configurar variables de entorno iniciales (si hay base de datos Prisma).
- [ ] Ejecutar `npx vercel link` y `npx vercel env pull`.
- [ ] Habilitar **Vercel Blob** en el dashboard de Vercel.

### Preparación de Multimedia

- [ ] Recolectar todos los videos de Google Drive.
- [ ] Optimizar videos localmente (formato MP4/WebM, bitrate optimizado para móvil).
- [ ] Subir assets a Vercel Blob (mediante el dashboard o script).
- [ ] Recolectar URLs finales de los archivos subidos.

### Código / Desarrollo

- [ ] Instalar `@vercel/blob` si se requiere subida dinámica (opcional si es manual).
- [ ] Actualizar `src/data/portfolio.ts` con las nuevas URLs de Vercel Blob.
- [ ] Refactorizar `src/components/PortfolioItem.tsx` para usar el componente nativo de video con las nuevas URLs.
- [ ] Implementar `next/image` en las secciones de herramientas y fondos.
- [ ] Configurar `remotePatterns` en `next.config.ts`.

### Validación (QA)

- [ ] Verificar reproducción automática en móviles (iOS/Android).
- [ ] Correr `npm run build` localmente para asegurar que no hay errores de tipos.
- [ ] Revisar el puntaje de Lighthouse en el Deploy Preview.

## 🏁 Definition of Done (DoD)

1. Aplicación accesible en producción vía URL de Vercel.
2. Todos los videos se reproducen nativamente sin redirecciones a Drive.
3. El build de Next.js pasa sin warnings de imágenes no optimizadas.
4. Las imágenes se sirven en formato `.webp` o `.avif` automáticamente por Vercel.
