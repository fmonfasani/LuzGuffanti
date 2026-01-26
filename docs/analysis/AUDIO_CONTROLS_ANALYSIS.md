# Análisis de Audio y Controles en Portfolio

**Fecha:** 26 de Enero, 2026  
**Problema:** Los videos se reproducen sin audio y no permiten al usuario controlar el volumen o la reproducción manualmente.

## 1. Causas del Problema Técnico

- **Restricción de Navegador:** Los navegadores (Chrome, Safari, etc.) bloquean el audio automático (autoplay) si el video no está silenciado (`muted`). Al quitar el `muted`, el video deja de reproducirse solo.
- **Ausencia de Atributo `controls`:** En el refactor anterior, se priorizó la estética minimalista y el autoplay, omitiendo el atributo nativo de controles para evitar el "ruido visual" de los reproductores estándar.
- **Interacción de Usuario:** No se implementó un puente lógico que permita al usuario "activar" el sonido mediante una acción explícita (clic), que es la única forma legal de habilitar audio en audios modernos.

## 2. Impacto en la Experiencia de Usuario

- **Frustración:** El contenido UGC y de viajes depende fuertemente del ritmo y la música; sin audio, se pierde el 50% del impacto.
- **Falta de Autonomía:** El usuario no puede pausar o adelantar partes específicas del video.

## 3. Conclusión

Es necesario evolucionar el componente de un simple "reproductor de fondo" a un "reproductor interactivo inteligente" que mantenga el autoplay silenciado pero permita habilitar audio y controles con un simple toque.
