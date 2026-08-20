# Por qué Google no muestra tu título y qué podemos hacer

## Qué está pasando (verificado en producción)

El HTML que sirve https://yamato.digital ya contiene lo correcto:

- `<title>`: "YAMATO — Consultora de marketing independiente (y sincera)"
- `<meta name="description">`: "Dirección de marketing externa y Fractional CMO desde Madrid: estrategia, ejecución y visibilidad en Google y en IA, sin humo ni fees eternos."

Es decir, no es un bug del proyecto. Lo que ves en el buscador es Google reescribiendo el resultado:

1. **Título "YAMATO yamato.digital"**: en la home Google usa su función de *site name*. Toma el nombre del negocio (que en tus datos estructurados `Organization` y `WebSite` es exactamente `"YAMATO"`) y lo muestra junto al dominio en vez de tu `<title>`. Es un comportamiento específico de páginas de inicio.
2. **Descripción "Hola. Somos una consultora de marketing independiente (y sincera). Dirigimos, asesoramos y ejecutamos..."**: ese texto es tu H1 + el párrafo del hero. Google ignora la meta description cuando considera que el texto visible responde mejor a la búsqueda. Además, tu meta description actual (Fractional CMO, Madrid, IA) no coincide con la búsqueda de marca "YAMATO", así que prefiere el copy del hero.

Ninguna de las dos cosas se puede forzar: son señales, no órdenes. Pero sí podemos mejorar mucho las probabilidades.

## Cambios propuestos

1. **Reforzar el nombre de marca para el site name**
   - Añadir `alternateName` al `WebSite` (por ejemplo "YAMATO Digital" / "Yamato Consultora de Marketing") para que Google tenga un nombre más descriptivo que "YAMATO" a secas.
   - Asegurar que `WebSite.name` y `Organization.name` son coherentes y que la home tiene un `og:site_name` igual.

2. **Alinear título, H1 y descripción para búsquedas de marca**
   - Ajustar el `<title>` de la home para que sea corto y empiece por la marca, con el descriptor que quieres que aparezca (p. ej. "YAMATO — Consultora de marketing independiente"). Cuanto menos "adorno" y más coincidencia con el H1, más probable es que Google lo respete.
   - Reescribir la meta description para que la primera frase cubra la intención de marca ("YAMATO es una consultora de marketing independiente…") y luego el resto (Fractional CMO, Madrid). Así el snippet reescrito y el tuyo se parecen.
   - Igualar `og:title` con el `<title>` (hoy son distintos), para no dar señales contradictorias.

3. **Solicitar reindexación**
   - Tras publicar, pedir la reindexación de la home en Search Console (Inspección de URL → Solicitar indexación). Los snippets pueden tardar días en actualizarse aunque el HTML ya sea correcto.

## Expectativa realista

- La descripción es muy probable que mejore si el copy visible y la meta description cuentan lo mismo.
- El título de la home puede seguir mostrándose como "YAMATO" + dominio: en homepages Google prioriza el site name casi siempre. En las páginas internas (/fractional-cmo, /blog…) sí suele respetar el `<title>`.

## Detalles técnicos

- `src/routes/index.tsx`: `head().meta` → `title`, `description`, `og:title`, `og:description`.
- `src/routes/__root.tsx`: bloque JSON-LD `@graph` con `Organization` y `WebSite` → añadir `alternateName` y `og:site_name`.
- Sin cambios de layout ni de contenido visible salvo, si quieres, el subtítulo del hero.
