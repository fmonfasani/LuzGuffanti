# Guía de Despliegue en Vercel (Método Dashboard)

## Método 1: Importar desde GitHub (Recomendado)

### Paso 1: Preparar el Repositorio

1. Asegúrate de que tu código esté en GitHub
2. Haz commit de todos los cambios pendientes
3. Push al repositorio remoto

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz login con GitHub
3. Click en **"Add New Project"** o **"Import Project"**
4. Selecciona el repositorio **"LuzGuffanti"** de la lista
5. Vercel detectará automáticamente que es un proyecto Next.js

### Paso 3: Configuración del Proyecto

**Framework Preset**: Next.js (auto-detectado)
**Root Directory**: `./` (raíz del proyecto)
**Build Command**: `npm run build` (auto-configurado)
**Output Directory**: `.next` (auto-configurado)

**Variables de Entorno** (si usas Prisma):

- Agregar `DATABASE_URL` si tienes base de datos
- Por ahora, puedes dejarlo vacío si no usas DB

### Paso 4: Deploy

1. Click en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel construye el proyecto
3. Una vez completado, obtendrás una URL como: `https://luz-guffanti.vercel.app`

---

## Método 2: Usar Token de Vercel (Alternativa CLI)

Si prefieres usar la CLI pero el login interactivo no funciona:

1. Ve a [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Crea un nuevo token
3. Copia el token
4. Ejecuta en terminal:

```bash
npx vercel --token TU_TOKEN_AQUI
```

---

## Post-Deployment: Habilitar Vercel Blob

Una vez desplegado el proyecto:

1. Ve al dashboard de tu proyecto en Vercel
2. Click en la pestaña **"Storage"**
3. Click en **"Create Database"** → Selecciona **"Blob"**
4. Sigue el wizard de configuración
5. Vercel te dará las variables de entorno necesarias automáticamente

---

## Troubleshooting

### Error: "Build failed"

- Verifica que `npm run build` funcione localmente
- Revisa los logs en el dashboard de Vercel

### Error: "Module not found"

- Asegúrate de que todas las dependencias estén en `package.json`
- Verifica que no haya imports absolutos sin configurar en `tsconfig.json`

### Videos no se ven

- Por ahora, los videos de YouTube/Drive seguirán funcionando
- Una vez habilitado Blob, migraremos los archivos
