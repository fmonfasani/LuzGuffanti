# Análisis y Propuesta: Refinamiento Estético y Funcional (Feedback Cliente)

Este documento detalla el análisis del feedback recibido del cliente el 08/02/2026 y establece las tareas para su implementación.

---

## 🔍 1. Análisis de Problemas Detectados

### a. Sección Hero (Inicio)

- **Tipografía**: El cliente nota un cambio en la fuente de la frase secundaria. Actualmente usa `font-body` con `uppercase`.
- **Layout**: La frase se extiende en varias líneas en móviles y el tracking es muy abierto.
- **Imagen de Fondo**: Se reporta que se ve cortada en dispositivos móviles.

### b. Portfolio (Videos)

- **Reproducción**: Los videos dependen del hover para iniciarse, lo que en móviles y para algunos usuarios puede dar la sensación de que "no funcionan".
- **Labels**: Aparece el nombre del video (`alt`) superpuesto, lo cual distrae de la visual pura del video.

### c. Equipo de Trabajo (Herramientas)

- **Título**: "MI EQUIPO DE TRABAJO" es demasiado grande (`md:text-5xl`) comparado con otras secciones (`text-3xl`).
- **Calidad de Imagen**: Reporte de imágenes pixeladas para el iPhone y los micrófonos.
- **Etiquetas**: El prefijo "EQUIPO" es redundante dado el título de la sección.
- **Transparencias**: Las imágenes de "Luz de apoyo" y "Capcut" tienen fondo blanco, rompiendo la estética dark/clean del contenedor.

### d. Sección de Contacto

- **Copywriting**: El texto actual es muy funcional ("¿Tenés una idea...? Llená este formulario"). Se busca algo más aspiracional y directo.

---

## 💡 2. Propuesta de Solución

### Hero

- Cambiar la tipografía de la frase secundaria a `font-display` para mayor coherencia.
- Quitar el `uppercase` y usar `lowercase` o `sentence case` según se vea mejor en una sola línea.
- Ajustar `object-position` de la imagen de fondo para móviles.

### Portfolio

- Implementar `autoPlay` con `muted` y `loop` para que los videos se sientan "vivos" al hacer scroll, manteniendo el hover solo para controles de audio opcionales.
- Eliminar el renderizado del span con el `alt` del video en la esquina inferior.

### Equipo de Trabajo

- Estandarizar el `h2` a `text-3xl md:text-4xl`.
- Eliminar el texto "EQUIPO" de los componentes.
- **Acción Requerida**: Solicitar o generar versiones con fondo transparente (PNG/WebP) para los complementos.
- Centrar los elementos de software para una visual más equilibrada.

### Contacto

- Actualizar el título y subtítulo según el nuevo copy:
  - Título: "¿Querés llevar tu contenido a otro nivel?"
  - Subtítulo: "Contactame y armamos el contenido ideal para vos."

---

## ✅ 3. Lista de Tareas (Implementation Task)

- [ ] **Hero**:
  - [ ] Cambiar tipografía de frase secundaria a `font-display`.
  - [ ] Pasar texto a minúsculas y ajustar tamaño para que entre en un renglón.
  - [ ] Revisar `object-center` en móviles.
- [ ] **Portfolio**:
  - [ ] Modificar `PortfolioItem.tsx` para quitar el label de texto.
  - [ ] Configurar `autoPlay` en el elemento `<video>`.
- [ ] **Tools**:
  - [ ] Reducir tamaño del `h2` principal.
  - [ ] Quitar el label "EQUIPO" arriba del nombre del dispositivo.
  - [ ] Ajustar centrado en la sección de "Softwares & Complementos".
  - [ ] (Opcional) Usar `generate_image` o edición para quitar fondos blancos a los logos si no se proveen.
- [ ] **Contact**:
  - [ ] Actualizar copy del formulario.

---
