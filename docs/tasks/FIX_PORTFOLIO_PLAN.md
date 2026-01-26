# Diagnóstico y Plan de Acción: Reparación del Portfolio

## 1. Análisis del Problema

Tras las actualizaciones de datos y categorías, el portfolio no está mostrando los videos correctamente según lo reportado. Los puntos críticos identificados son:

- **Dependencia de `CldVideoPlayer`**: El componente de `next-cloudinary` puede tener conflictos con formatos `.mov` o con la carga simultánea de múltiples instancias en una grilla.
- **Inconsistencia en IDs**: Algunos IDs de Cloudinary podrían requerir prefijos o extensiones dependiendo de la configuración de la cuenta.
- **Renderizado de Estados Vacíos**: Las categorías con videos "Próximamente" no tienen una visual atractiva que mantenga la grilla de 4.

## 2. Propuesta de Solución

Optimizar el renderizado usando el tag nativo de HTML5 `<video>` alimentado por URLs directas y optimizadas de Cloudinary. Esto garantiza:

- Carga más rápida.
- Autoplay y loop consistentes.
- Mejor soporte para dispositivos móviles.

## 3. Plan de Acción (Tasks)

| Task ID  | Descripción                                                                           | Estado    |
| :------- | :------------------------------------------------------------------------------------ | :-------- |
| **P-01** | Refactorizar `PortfolioItem.tsx` para usar URLs directas optimizadas.                 | Pendiente |
| **P-02** | Estandarizar `portfolio.ts` para que todas las categorías tengan exactamente 4 slots. | Hecho     |
| **P-03** | Corregir la lógica de detección de Cloudinary para soportar IDs con guiones y puntos. | Pendiente |
| **P-04** | Validar el comportamiento de las pestañas (Tabs) y asegurar el cambio de estado.      | Pendiente |

## 4. Documentación Técnica de Arreglo

El nuevo sistema utilizará la siguiente estructura de URL para todos los videos:
`https://res.cloudinary.com/ddc5jpwq7/video/upload/f_auto,q_auto/v1/[PUBLIC_ID]`

Esto fuerza a Cloudinary a entregar el formato más liviano tolerable por el navegador (`f_auto`) y optimiza la calidad automáticamente (`q_auto`).
