
# Plan: Home YAMATO al estilo ueno.co

## Dirección visual (réplica de ueno.co)

- **Tipografía**: display serif de gran peso (estilo GT Super / Tiempos Headline). Uso de **Instrument Serif** + **Fraunces** como display y **Inter** mono-spaced ligero para microcopy. Body en sans neutra (**Inter**).
- **Paleta**: blanco puro `#FFFFFF`, negro `#0A0A0A`, gris para texto secundario `#6B6B6B`, fondo crema sutil para secciones `#F2F0EC`. Sin acentos de color: el peso visual lo da la tipografía y los medios.
- **Estructura**: una sola columna ancha (max ~1440px), márgenes amplios, jerarquía editorial. Sin tarjetas, sin sombras, sin bordes decorativos.
- **Movimiento**: marquee horizontal continuo para clientes; fade-up sutil al hacer scroll en titulares (framer-motion). Cursor estándar, hover con subrayado animado en enlaces.

## Estructura de la Home (orden)

```
1. NAV fijo arriba         [LOGO YAMATO.]            [Servicios] [Cómo] [Casos] [Contacto]
2. HERO (titular gigantesco serif a la izquierda)
   "Consultora de marketing independiente (y sincera)."
   Subtítulo + CTA "Llamar es gratis (aún) →"
3. MEDIA HERO (placeholder 16:9 listo para vídeo/imagen del usuario)
4. MARQUEE de clientes (Apodemia ◦ Cegid ◦ Contasimple ◦ …) en serif XL
5. QUÉ ES YAMATO (about, 3 párrafos editoriales con eyebrow "ABOUT")
6. NUESTROS SERVICIOS — "Cinco cosas, no cuarenta"
   Lista numerada grande: Estrategia y dirección / Mentoría y gestión de equipos /
   Go-to-Market / IA aplicada / Ejecución
   Pull-quote sobre independencia.
7. CÓMO LO HACEMOS — 3 pasos (Llamada · Radiografía · Arrancamos)
   con tipografía numérica grande. CTA "¿Nos sentamos? →"
8. UN CMO POR EL PRECIO DE UN JUNIOR — bloque pull-quote + CTA
9. ¿Y SI YA TIENES UN CMO? — texto editorial + CTA
10. CASOS DE ÉXITO — Apodemia y Cegid/Contasimple en formato editorial
    (eyebrow + titular + párrafo). CTA final.
11. NO PERDAMOS EL TIEMPO — dos columnas: "Encajarás si" / "No encajarás si"
12. Y COLORÍN COLORADO… — cierre + CTA "Pide tu Radiografía gratis →"
    + nota newsletter.
13. FOOTER minimal: YAMATO. · email · enlaces.
```

## Contenido (literal del Notion)

Se usa exactamente el texto que has compartido. CTAs respetados:
- "Llamar es gratis (aún) →"
- "¿Nos sentamos? →"
- "Si llamas, respondemos →"
- "Cuéntanos el proyecto →"
- "Llámanos y te contamos el resto"
- "Pide tu Radiografía gratis →"

## Detalles técnicos

- **Stack**: TanStack Start ya configurado; ruta única `src/routes/index.tsx`.
- **Fuentes**: `@fontsource/instrument-serif`, `@fontsource/fraunces`, `@fontsource/inter` instaladas vía bun.
- **Tokens** definidos en `src/styles.css` con `@theme` (colores, fuentes, radios = 0, sombras = ninguna).
- **Componentes nuevos** en `src/components/home/`: `Nav`, `Hero`, `HeroMedia`, `ClientMarquee`, `About`, `Services`, `Process`, `PullCta`, `CaseStudies`, `FitList`, `Closing`, `Footer`.
- **Logo YAMATO**: subiré la imagen que adjuntes a Lovable Assets y la usaré en el nav y el footer. Mientras tanto, fallback en wordmark serif "YAMATO.".
- **Hero media**: hueco 16:9 con borde sutil y texto "Sube aquí tu vídeo o imagen" hasta que aportes el archivo (lo sustituyo con `<video>` o `<img>` cuando lo subas).
- **SEO**: `head()` en la ruta con title "YAMATO — Consultora de marketing independiente", meta description del subtítulo, OG/Twitter.
- **Responsive**: tipografía fluida con `clamp()`, marquee adaptado, nav colapsable a menú simple en móvil.

## Fuera de alcance (acordado)

- Solo se construye la Home. No se crean rutas Services/Clients/Contact.
- No se genera vídeo/imagen del hero: queda placeholder para que lo subas.

## Lo que necesito de ti para terminar

1. **Logo de YAMATO** (lo veo mencionado pero no llegó adjunto en este mensaje — súbelo cuando puedas).
2. **Vídeo/imagen del hero** cuando lo tengas.
3. Email/enlaces de contacto para el footer (si no, dejo `hola@yamato.digital` como placeholder a confirmar).
