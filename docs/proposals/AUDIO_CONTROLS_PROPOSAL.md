# Propuesta Técnica: Sistema de Video Híbrido

Para resolver el problema del audio y los controles sin sacrificar la velocidad de carga, se propone una implementación de **reproductor híbrido**.

## 1. Funcionamiento Propuesto

1. **Estado Inicial (Autoplay):** El video carga silenciado y en loop. Esto permite que la web se vea dinámica desde que el usuario entra.
2. **Interacción (Click/Tap):** Al hacer clic en un video, se activa el audio y se muestran los controles nativos.
3. **Persistencia de Audio:** Una vez que el usuario activa el sonido en un video, podríamos (opcionalmente) recordar esa preferencia.

## 2. Elementos de UI a Incorporar

- **Botón de Unmute (Parlantito):** Un ícono flotante que indique si el video tiene sonido o no.
- **Barra de Progreso Discreta:** Para que el usuario sepa cuánto dura el video.
- **Modo Pantalla Completa:** Habilitar el botón nativo para ver los videos en detalle.

## 3. Ventajas Estratégicas

- **Cumplimiento de Políticas:** Respetamos las reglas de los navegadores sobre audio.
- **Engagement:** Invitamos al usuario a interactuar con el contenido para escucharlo.
- **Calidad:** Al usar URLs optimizadas de Cloudinary, el audio tendrá alta fidelidad.
