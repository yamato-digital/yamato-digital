## Problema

`src/routes/blog.tsx` es a la vez la página de listado y — al existir `src/routes/blog.$slug.tsx` — el layout padre de las rutas `/blog/$slug`. Como `blog.tsx` no renderiza `<Outlet />`, al navegar a `/blog/algo` TanStack Router hace match del padre pero no monta al hijo: se queda visualmente en el listado aunque la URL cambia.

## Solución

Convertir el listado en un leaf sibling, para que `/blog` y `/blog/$slug` sean rutas independientes al mismo nivel — sin layout intermedio.

### Cambios de archivos

1. Renombrar `src/routes/blog.tsx` → `src/routes/blog.index.tsx`.
2. Dentro del archivo renombrado, cambiar `createFileRoute("/blog")` por `createFileRoute("/blog/")` (el `/` final es la convención de TanStack para rutas index).
3. Dejar `src/routes/blog.$slug.tsx` tal cual (ya tiene `createFileRoute("/blog/$slug")`).
4. Dejar que el plugin de Vite regenere `src/routeTree.gen.ts` automáticamente.

### Verificación

- Abrir `/blog` → sigue mostrando el grid con "Cargar más".
- Click en una miniatura → navega a `/blog/<slug>` y muestra el artículo completo (título, cover, contenido markdown).
- Deep link directo a `/blog/email-marketing-newsletter-canal-mas-rentable-2026` sigue funcionando.
- Sitemap dinámico (`/sitemap.xml`) sigue incluyendo el listado y todos los posts (no depende del layout).

No se toca contenido de posts, ni Nav, ni SEO/JSON-LD.
