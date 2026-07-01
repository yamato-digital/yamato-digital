import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  cover?: string;
  content: string;
  readingMinutes: number;
}

// Load all markdown files as raw strings at build time.
const modules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function slugFromPath(path: string): string {
  const file = path.split("/").pop() ?? "";
  const noExt = file.replace(/\.md$/, "");
  // Strip leading YYYY-MM-DD- if present
  return noExt.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const slug = (data.slug as string) || slugFromPath(path);
    const dateStr = data.date instanceof Date
      ? data.date.toISOString()
      : String(data.date ?? "");
    return {
      slug,
      title: String(data.title ?? slug),
      date: dateStr,
      excerpt: String(data.excerpt ?? ""),
      cover: data.cover ? String(data.cover) : undefined,
      content,
      readingMinutes: readingTime(content),
    } satisfies BlogPost;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}
