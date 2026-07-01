## Nueva sección /blog

### Contenido — flujo de edición semanal sin Lovable

La forma más simple y sin depender de Lovable: **archivos Markdown en el repo**, editables desde GitHub (web, móvil, VS Code, Obsidian, lo que prefieras).

Flujo semanal:
1. Creas `src/content/blog/2026-07-08-titulo-del-post.md` en GitHub (o localmente y `git push`).
2. En el frontmatter pones título, fecha, extracto, imagen de portada y slug.
3. La build lo detecta automáticamente y aparece en `/blog` y en `/blog/<slug>`.

Ejemplo de post:
```md
---
title: "El marketing mediocre ha muerto"
date: 2026-07-08
excerpt: "Por qué la IA no acaba con el marketing, solo con el que sobra."
cover: "https://cdn.../portada.jpg"
---

Contenido en Markdown normal...
```

Alternativas descartadas: Lovable Cloud (requiere entrar al backend cada semana) y hardcodear en TS (obliga a tocar código).

### Estructura

- `src/content/blog/*.md` — posts (creo 3 de ejemplo con lorem ipsum para que veas el layout).
- `src/lib/blog.ts` — usa `import.meta.glob('../content/blog/*.md', { eager: true })` + `gray-matter` para leer frontmatter y devolver la lista ordenada por fecha desc.
- `src/routes/blog.tsx` — listado con H1 "Blog", grid de miniaturas, botón "Cargar más".
- `src/routes/blog.$slug.tsx` — página de detalle del post (render de Markdown con `marked` o `react-markdown`).
- `src/components/Nav.tsx` — añadir "Blog" antes de "Contacto" (desktop y mobile).
- `src/routes/sitemap[.]xml.ts` — quitar la exclusión de `/blog` y añadir cada post dinámicamente.

### Layout de la miniatura

Coherente con el tono editorial del sitio (paper/ink, serif para títulos):

```
┌─────────────────────┐
│                     │
│    [imagen 16:9]    │
│                     │
├─────────────────────┤
│ 08 JUL 2026 · 4 min │  ← fecha en small caps, muted-ink
│                     │
│ Título del post     │  ← font-serif, ~1.5rem, hover subrayado
│ en dos líneas       │
│                     │
│ Extracto breve del  │  ← text-muted-ink, 2 líneas
│ artículo...         │
└─────────────────────┘
```

- Grid: 3 columnas desktop / 2 tablet / 1 mobile.
- Card completa clicable (`<Link>` que envuelve todo).
- Wrapped en `<Reveal variant="fade-up" delay={index * 60}>` para stagger, consistente con el resto del site.

### Paginación "Cargar más"

- Estado local `visibleCount`, inicial 6, +6 por click.
- Botón centrado tras el grid: fondo negro (`bg-ink`), texto blanco, `rounded-full`, `px-8 py-3`, replicando el estilo de la imagen adjunta.
- Se oculta cuando `visibleCount >= posts.length`.
- Sin scroll infinito ni URL params, click-driven.

### SEO

- `head()` en `/blog`: title "Blog — YAMATO", description, canonical `https://yamato.digital/blog`, og tags.
- `head()` en `/blog/$slug`: usa loader data del post para title, description (excerpt) y og:image (cover).
- JSON-LD `Blog` en el índice y `BlogPosting` en cada post.
- Sitemap dinámico: lista `/blog` + cada `/blog/<slug>` con `lastmod` de la fecha del frontmatter.

### Dependencias a instalar

- `gray-matter` — parsear frontmatter.
- `marked` — renderizar Markdown a HTML en el detalle (ligera, Worker-safe).

### Detalles técnicos

- `import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })` para cargar el contenido en el bundle (funciona en SSR/Worker sin filesystem runtime).
- El slug se deriva del filename (sin fecha ni extensión) o del frontmatter si se define.
- Fecha formateada en español (`Intl.DateTimeFormat('es-ES', {...})`).
- `reading time` calculado con `Math.ceil(words / 200)` inline, sin dependencia extra.

### Fuera de alcance

- Sin categorías, tags, autor múltiple, comentarios ni RSS (se pueden añadir después si los pides).
- Sin CMS visual (Decap/TinaCMS): el flujo GitHub Markdown ya cubre "editar sin Lovable".
