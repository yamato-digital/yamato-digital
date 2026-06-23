## Objetivo

Sustituir la imagen panorámica del `HeroMedia` por el video `yamato-hero.mp4` (1920x1080, 10s, 8.8MB), optimizado para carga rápida y SEO.

## Optimización del video

Original: H.264 High@L4, 7.3 Mbps, 8.8 MB → demasiado pesado para hero.

Generaré dos variantes + un poster, vía ffmpeg en el sandbox:

1. **MP4 (H.264 baseline)** — máxima compatibilidad (Safari, iOS):
   - CRF 26, preset slow, `-movflags +faststart` (moov al inicio → empieza a reproducir antes de descargar todo), sin audio (`-an`), pix_fmt yuv420p
   - Target: ~1.5–2 MB
2. **WebM (VP9)** — Chrome/Firefox/Edge, ~30–40% más pequeño:
   - CRF 34, b:v 0, sin audio
   - Target: ~1–1.5 MB
3. **Poster JPG** (frame ~0.5s, 1920x1080, quality 75) — se muestra antes de que cargue el video y sirve como fallback / preview en redes.

Los tres se suben a Lovable Assets (CDN con caché agresiva), no al repo.

## Cambios en código

**`src/routes/index.tsx`** — reemplazar `HeroMedia`:

```tsx
<video
  className="h-full w-full object-cover"
  width={1920} height={1080}
  poster={poster.url}
  autoPlay muted loop playsInline
  preload="metadata"
  aria-label="YAMATO — Consultora de marketing independiente"
>
  <source src={webm.url} type="video/webm" />
  <source src={mp4.url} type="video/mp4" />
</video>
```

Claves de rendimiento/UX:
- `autoPlay muted playsInline loop` → requerido para autoplay en iOS/Safari.
- `preload="metadata"` → no descarga el video entero hasta empezar a reproducir; el poster cubre el espacio.
- `poster` evita CLS y da algo que ver de inmediato (sirve también como LCP candidate ligero).
- Quitar la imagen actual `hero-yamato-landscape-hd.jpg` y su preload (ya no es LCP).

**`src/routes/__root.tsx`** — el `og:image` actual (1920x1080 webp) se mantiene para previews sociales (las redes no usan video del `<video>` tag; usan `og:video` opcional, que también añado apuntando al MP4).

## SEO

- `og:video`, `og:video:type`, `og:video:width/height` en el head (Facebook/LinkedIn/WhatsApp pueden mostrar el video).
- JSON-LD `VideoObject` con `name`, `description`, `thumbnailUrl` (poster), `contentUrl` (MP4), `uploadDate`, `duration` (PT10S) → habilita rich results y aparece en Google Video search.
- `aria-label` en el `<video>` para accesibilidad.
- Poster con nombre semántico (`yamato-hero-poster.jpg`).

## Resultado esperado

- Peso transferido en primera carga: ~150 KB (poster) en lugar de la imagen actual; el video empieza a streamear sólo cuando ya está en pantalla.
- Sin CLS (mismo aspect-ratio 16/9 reservado).
- Compatible con todos los navegadores, autoplay funcional en móvil.
- Indexable como video por Google.
