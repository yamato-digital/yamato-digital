# Nueva página /casos

Página de casos de éxito, con el mismo lenguaje visual del sitio (serif Fraunces, crema/casi-negro, rojo puntual, secciones numeradas, sin imágenes ni cards).

## Qué se construye

**`src/routes/casos.tsx`** con seis secciones, usando el copy literal facilitado:

0. Hero: H1 "Dos años. Cuatro cifras que podemos enseñar." + párrafo + CTA "Pide tu Radiografía gratis →" a /contacto.
1. Banda de cifras: 4 datos (2x2 en móvil, fila en desktop). Cifra en serif grande, etiqueta pequeña debajo. Sin iconos.
2. "Los casos": bloques 01–04 con número grande, cliente, sector en pequeño, resultado destacado en rojo (#F1453B) y los bloques "Contexto", "Qué hicimos" y "Nota". Separador de 1px entre casos, sin cajas ni sombras.
3. "Antes de YAMATO": H2 + párrafo + lista de tres bloques (LOEWE, Clidrive, Clibrain), mismo tratamiento tipográfico.
   - LOEWE: "De 20.000 € a más de 2 millones € de facturación online."
4. "Y unos cuantos más": marquee de nombres de la home (mismas tres filas y nombres) + línea "¿No ves tu nombre? Llámanos y cambiemos eso. →" a /contacto.
5. Cierre: H2 "¿Qué número quieres poder enseñar dentro de un año?" + CTA "Hablemos pues →" a /contacto.

Uso del rojo: máximo la cifra de resultado de cada caso (uno por bloque). Nada más.

## Componentes: reutilizar vs. extraer

- Reutilizados tal cual: `Nav`, `Footer`, `Reveal`.
- Extraídos desde `src/routes/index.tsx` a componentes compartidos para no duplicar (la home pasa a importarlos, sin cambio visual):
  - `Eyebrow` (etiqueta de sección con guion) → `src/components/Eyebrow.tsx`
  - `Cta` + `Arrow` (enlace con flecha) → `src/components/Cta.tsx`
  - `Marquee` + las tres listas de nombres → `src/components/Marquee.tsx`
- Nuevos, solo dentro de `casos.tsx`: la banda de cifras y el bloque de caso. No existen equivalentes en el proyecto.

## SEO y rutas

- `head()` en /casos: title "Casos — YAMATO", description "Cuatro clientes, cuatro cifras. Lo que pasó cuando YAMATO entró a dirigir su marketing.", og:title/og:description/og:url y canonical https://yamato.digital/casos, siguiendo el patrón de /servicios. Ruta SSR normal (no client-only).
- `src/routes/sitemap[.]xml.ts`: se añade `/casos` (priority 0.8) y se retira `/clientes`.
- `/clientes`: la página deja de renderizar contenido y hace `redirect` 301 permanente a `/casos` en `beforeLoad`. El listado largo de clientes no se traslada: en /casos los nombres viven en el marquee, tal como indica la estructura pedida.
- `Nav.tsx` y `Footer.tsx`: el enlace "Clientes" pasa a "Casos" → `/casos`. No se toca nada más de esas dos piezas.

## Bug del 404 bajo /clientes/

En el servidor de desarrollo `/clientes/apodemia` y `/no-existe` ya devuelven 404, así que el 200 se produce en el hosting publicado (fallback de la build). Para que el 404 sea real en producción se añade una ruta splat `src/routes/$.tsx` que fija el código de respuesta 404 en el servidor y renderiza la página de no encontrado del sitio. Después de desplegar se comprueba con `curl -I` que `/clientes/apodemia` devuelve 404.

## Fuera de alcance

Ninguna otra página se modifica, salvo la extracción de los tres componentes compartidos desde la home (mismo render) y los enlaces de header y footer.
