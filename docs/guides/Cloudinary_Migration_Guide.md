# Guía Paso a Paso: Migración a Cloudinary y Despliegue en Vercel

Esta guía detalla el proceso para subir el sitio a producción (Vercel) y migrar los videos a una plataforma profesional (Cloudinary).

---

## 🚀 Parte 1: Despliegue en Vercel (HACER AHORA)

Como el código ya está en GitHub y el build funciona, el despliegue es inmediato.

1.  **Ir a Vercel**: Entra a [vercel.com/new](https://vercel.com/new).
2.  **Importar**: Importa el repositorio `fmonfasani/LuzGuffanti`.
3.  **Configurar**:
    - **Framework**: Next.js (se detecta solo).
    - **Build Command**: `npm run build`.
    - **Root Directory**: `./`.
4.  **Deploy**: Dale click al botón **Deploy**.
5.  **Resultado**: En ~2 minutos tendrás una URL (ej: `luz-guffanti.vercel.app`). ¡Tu sitio ya está online!

---

## ☁️ Parte 2: Migración a Cloudinary (Gestión de Videos)

Para tener videos de alta calidad que carguen rápido y se reproduzcan solos.

### Paso 2.1: Crear Cuenta y Configuración

1.  Crea una cuenta gratuita en [cloudinary.com](https://cloudinary.com/).
2.  Ve al **Dashboard** y copia tu `Cloud Name`.
3.  Ve a `Settings > Upload > Upload presets`:
    - Click "Add upload preset".
    - **Mode**: `Unsigned` (para subidas fáciles si hiciera falta, o simplemente para tenerlo listo).
    - **Name**: `portfolio_videos` (por ejemplo).
    - Save.

### Paso 2.2: Subir Videos

1.  En Cloudinary, ve a la **Media Library**.
2.  Crea carpetas según tus categorías (ej: `viajes`, `jetsmart`).
3.  **Sube tus videos** (Arrastrar y soltar).
4.  Una vez subido, copia el **Public ID** del video.
    - _Ejemplo_: Si subes `video1.mp4` en la carpeta `viajes`, el Public ID suele ser `viajes/video1`.

### Paso 2.3: Configuración en el Proyecto (Yo me encargo del código, tú de las variables)

1.  En tu proyecto local (`.env.local`) y en Vercel (**Settings > Environment Variables**), agrega:
    ```env
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name_aqui
    ```

### Paso 2.4: Uso en el Código

Yo actualizaré el componente `PortfolioItem` para que soporte Cloudinary. Funcionará así:

- Si le pasas una URL de YouTube -> Usa iframe (Legacy).
- Si le pasas un ID de Cloudinary -> Usa Reproductor Nativo Prermium.

---

## 📝 Resumen de Tareas para tí:

1.  Hacer el Deploy en Vercel (Parte 1).
2.  Crear cuenta en Cloudinary y obtener el `Cloud Name`.
3.  Subir 1-2 videos de prueba a Cloudinary.
4.  Pasarme el `Cloud Name` y los IDs de los videos de prueba para que conecte todo.
