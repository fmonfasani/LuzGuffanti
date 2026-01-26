# Plan de Acción: Implementación de Audio e Interactividad

Este plan detalla los pasos para convertir la grilla del portfolio en una experiencia multimedia completa.

## Task List (AC-01)

| Etapa                         | Descripción                                                                           | Prioridad |
| :---------------------------- | :------------------------------------------------------------------------------------ | :-------- |
| **01. Refactor de Estado**    | Agregar el estado `isMuted` al componente `PortfolioItem`.                            | Alta      |
| **02. Manejo de Atributos**   | Sincronizar dinámicamente el atributo `controls` y `muted` basados en la interacción. | Alta      |
| **03. Interfaz de Audio**     | Implementar un botón visual de "Activar Sonido" que aparezca sobre el video.          | Media     |
| **04. Optimización de Carga** | Asegurar que los metadatos de audio se precarguen sin afectar el LCP de la página.    | Baja      |

## Pasos Técnicos para la Reparación

1. Modificar `PortfolioItem.tsx` para aceptar el estado de sonido.
2. Cambiar la función `togglePlay` por una que también maneje el `unmute`.
3. Estilizar los controles nativos vía CSS para que se integren con la estética de Luz Guffanti.
4. Subir cambios y verificar en dispositivos iOS/Android donde las restricciones de audio son más estrictas.
