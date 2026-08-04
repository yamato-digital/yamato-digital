# Plan: Página 404 de YAMATO

## Objetivo
Reemplazar la página 404 genérica actual por una página original y alineada con el tono de voz de YAMATO: directa, sincera, con sentido del humor estratégico y sin perder la utilidad.

## Requisitos resueltos
- **Concepto:** metáfora de marketing.
- **Estructura:** mantener navegación completa (header + footer) para que el usuario no se pierda.

## Qué se va a construir

### 1. Nuevo componente `NotFoundComponent` en `src/routes/__root.tsx`
- Dejará de ser la pantalla genérica gris con "404" y "Page not found".
- Tendrá el header (`Nav`) y el footer (`Footer`) de la web, integrándose visualmente con el resto de páginas.
- Usará el sistema de color y tipografía existente (`bg-paper`, `text-ink`, `font-serif`, tokens de Tailwind). Sin colores a mano alzada.
- Centrará el mensaje en pantalla completa (`min-h-screen`) con un diseño limpio y espacioso.

### 2. Copy y metáfora de marketing
El mensaje jugará con el lenguaje de YAMATO sin caer en lo forzado. Ejemplo de dirección:
- **Número grande:** "404" en tipografía serif, como un dato de marketing que no cuadra.
- **Titular:** "Esta página no genera tráfico ni conversión."
- **Subtitular:** "La URL que has intentado visitar no existe, ha sido movida o nunca tuvo demanda."
- **CTA primaria:** "Volver a la home".
- **CTA secundaria (opcional):** "Hablemos" que lleva a `/contacto`.

El tono será cercano, sin excusas, y alineado con la honestidad brutal de la marca.

### 3. SEO y experiencia de usuario
- Se actualizará el título de la pestaña a algo como "Página no encontrada — YAMATO" mediante `useEffect` dentro del componente 404.
- Se mantendrá el resto de metadatos genéricos del root, suficientes para que el error no quede descontextualizado.

### 4. Verificación
- Lanzar build para asegurar que no hay errores de tipos o sintaxis.
- Probar una ruta inexistente (por ejemplo `/no-existe`) y confirmar que aparece el nuevo 404, con header, footer y el mensaje de marketing.

## Notas técnicas
- No se toca el enrutamiento: `notFoundComponent` ya está declarado en `__root.tsx` y es el punto correcto para capturar URLs no existentes.
- No se añaden dependencias nuevas.
- Se reutilizan los componentes `Nav` y `Footer` existentes.
