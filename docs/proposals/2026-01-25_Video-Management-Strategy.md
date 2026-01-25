# Estrategia de Manejo de Videos para Portfolio

## 📊 Situación Actual

El portfolio de Luz Guffanti contiene aproximadamente **30+ videos** distribuidos en 10 categorías:

- Viajes (2 videos - YouTube Shorts)
- JetSmart (4 videos - YouTube Shorts)
- Ecommerce (4 videos - YouTube Shorts)
- Eventos, Gastronomía, Hotelería, Institucional, Real Estate, UGC, Humor (placeholders de Google Drive)

## 🎯 Opciones de Almacenamiento

### Opción A: Vercel Blob (RECOMENDADA para Fase 1)

**Pros:**

- ✅ Integración nativa con Next.js
- ✅ CDN global automático (Edge Network)
- ✅ URLs permanentes y seguras
- ✅ Fácil de implementar
- ✅ Reproducción nativa con `<video>` tag

**Contras:**

- ⚠️ Límites en plan gratuito: 1GB de almacenamiento
- ⚠️ Costo adicional después del límite gratuito

**Límites del Plan Hobby (Gratuito):**

- 1 GB de almacenamiento total
- 100 GB de transferencia/mes
- Suficiente para ~15-20 videos de 15 segundos optimizados (~50MB cada uno)

**Costo estimado si se excede:**

- $0.15/GB de almacenamiento adicional
- $0.10/GB de transferencia adicional

---

### Opción B: Cloudinary (ALTERNATIVA Premium)

**Pros:**

- ✅ Optimización automática de video (calidad adaptativa)
- ✅ Transformaciones on-the-fly (resize, crop, quality)
- ✅ Plan gratuito generoso: 25 GB de almacenamiento
- ✅ CDN global incluido
- ✅ Soporte para múltiples formatos (MP4, WebM, HLS)

**Contras:**

- ⚠️ Requiere configuración adicional
- ⚠️ Dependencia de servicio externo

**Límites del Plan Gratuito:**

- 25 GB de almacenamiento
- 25 GB de ancho de banda/mes
- Suficiente para **todos los videos del portfolio** sin problemas

---

### Opción C: YouTube Embeds (ACTUAL - No recomendada a largo plazo)

**Pros:**

- ✅ Almacenamiento ilimitado y gratuito
- ✅ Ya implementado para algunas categorías

**Contras:**

- ❌ Pérdida de control sobre la UI (branding de YouTube)
- ❌ Penaliza Core Web Vitals (scripts pesados)
- ❌ No permite autoplay fluido en móviles
- ❌ Estética menos premium

---

## 💡 Estrategia Recomendada (Híbrida)

### Fase 1: Deploy Inicial (AHORA)

**Objetivo:** Tener el portfolio en producción lo antes posible

1. **Mantener YouTube Shorts** para las categorías que ya los tienen (Viajes, JetSmart, Ecommerce)
2. **Desplegar en Vercel** sin cambios en los videos
3. **Validar que todo funciona** correctamente

**Resultado esperado:** Portfolio funcional en `https://luz-guffanti.vercel.app` en menos de 10 minutos

---

### Fase 2: Migración a Cloudinary (PRÓXIMA SEMANA)

**Objetivo:** Mejorar la experiencia de usuario y tener control total

1. **Crear cuenta gratuita en Cloudinary**
2. **Optimizar y subir videos** de Google Drive
3. **Actualizar `src/data/portfolio.ts`** con URLs de Cloudinary
4. **Implementar reproductor nativo** con autoplay suave
5. **Opcionalmente migrar** los videos de YouTube a Cloudinary para consistencia

**Beneficios:**

- Reproducción fluida y nativa
- Autoplay al hacer scroll
- Mejor performance (LCP < 1s)
- Estética premium sin branding de terceros

---

## 🛠️ Implementación Técnica

### Configuración de Cloudinary (cuando estemos listos)

```bash
npm install cloudinary next-cloudinary
```

**Variables de entorno:**

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name
CLOUDINARY_API_KEY=tu-api-key
CLOUDINARY_API_SECRET=tu-api-secret
```

**Componente optimizado:**

```tsx
import { CldVideoPlayer } from "next-cloudinary";

export function PortfolioItem({ videoSrc, alt }) {
  return (
    <CldVideoPlayer
      width="1080"
      height="1920"
      src={videoSrc}
      autoplay="on-scroll"
      loop
      muted
      controls={false}
    />
  );
}
```

---

## 📋 Checklist de Migración (Fase 2)

- [ ] Crear cuenta en Cloudinary
- [ ] Configurar variables de entorno
- [ ] Recolectar videos de Google Drive
- [ ] Optimizar videos (ffmpeg: 1080p, H.264, bitrate 2-3 Mbps)
- [ ] Subir a Cloudinary
- [ ] Actualizar `portfolio.ts` con nuevas URLs
- [ ] Refactorizar `PortfolioItem.tsx`
- [ ] Testing en móviles (iOS/Android)
- [ ] Deploy y validación

---

## 🏁 Decisión Final

**Para el deploy de HOY:** Mantener YouTube embeds (ya funciona)
**Para la próxima iteración:** Migrar a Cloudinary para máxima calidad y control

¿Estás de acuerdo con esta estrategia?
