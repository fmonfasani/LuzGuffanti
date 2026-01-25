# Propuesta de Solución: Estrategia de Despliegue y Multimedia

## 1. 🎯 Objetivo

Lograr una experiencia de usuario premium con tiempos de carga ultra-rápidos (<1s LCP) y reproducción de video nativa e integrada, aprovechando el ecosistema de Vercel.

## 2. 💡 Solución Técnica

### Arquitectura de Multimedia

1.  **Vercel Blob (Alojamiento de Videos)**:
    - Migrar los videos de Google Drive y (opcionalmente) de YouTube a **Vercel Blob**.
    - Esto permite usar el tag `<video>` nativo de HTML5, habilitando reproducción automática suave, loops perfectos y controles personalizados.
2.  **Next.js Image Optimization**:
    - Reemplazar el uso de `<img>` por el componente `next/image`.
    - Configurar dominios permitidos en `next.config.ts` para optimizar fotos de herramientas y fondos.
3.  **Vercel Edge Network**:
    - Los assets se servirán desde el punto más cercano al usuario, garantizando baja latencia.

### Cambios en Código

- **`next.config.ts`**: Configurar el hostname de Vercel Blob para permitir la carga de assets.
- **`src/components/PortfolioItem.tsx`**: Simplificar el componente para priorizar el tag `<video>` sobre el `iframe`.
- **`src/data/portfolio.ts`**: Actualizar las URLs de los archivos una vez subidos a Vercel Blob.

## 3. 🛡️ Plan de Riesgos/Validación

- **Riesgo: Costos de Bandwidth**: Vercel Blob tiene límites de transferencia en su plan gratuito.
  - _Mitigación_: Comprimir los videos antes de subirlos (utilizando herramientas como Handbrake o ffmpeg) para reducir el tamaño sin sacrificar calidad (target: <5MB por video de 15s).
- **Riesgo: Performance de Carga**: Demasiados videos cargando al mismo tiempo.
  - _Validación_: Implementar `loading="lazy"` o cargar solo el poster (imagen) y disparar el video al entrar en el viewport (Intersection Observer).

## 4. 🏁 Recomendación

Se recomienda el uso de **Vercel Blob** para videos cortos (UGC/Shorts) por su integración directa con Next.js y su facilidad de uso. Para las fotos, no es necesario un servicio externo, el optimizador nativo de Vercel es suficiente.
