Plan: Añadir salto de línea entre "Tu dirección de marketing." y "Tu Fractional CMO." en la sección "Qué es YAMATO" de la home.

Contexto: El usuario reportó que, en la sección About de la home, el texto "Tu dirección de marketing. Tu Fractional CMO." aparece en una sola línea. Quiere que "Tu Fractional CMO." vaya en una línea aparte.

Problema previo: El build anterior falló con errores de JSX en `src/routes/index.tsx`. Es necesario verificar el estado actual del archivo antes de editar y, si persiste, corregir el error sintáctico antes de aplicar el cambio visual.

Pasos:
1. Releer `src/routes/index.tsx` para confirmar que no hay errores JSX residuales (líneas 195-230).
2. Si hay errores, corregir el JSX para que el build pase.
3. En el componente `About`, modificar la línea que contiene "Tu dirección de marketing. Tu Fractional CMO." para que "Tu Fractional CMO." aparezca en una línea nueva. Se puede lograr con un salto de línea explícito (`<br />` o dos elementos separados con `display: block`) respetando la misma clase tipográfica (`font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight italic`).
4. Verificar que el build pase y que el heading se vea en dos líneas en el preview.

Archivos a modificar:
- `src/routes/index.tsx` (líneas ~205-210, componente `About`).

No se tocará ningún otro archivo, layout, diseño o contenido.