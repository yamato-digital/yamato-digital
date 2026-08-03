import { createFileRoute, Link } from "@tanstack/react-router";
import { setResponseStatus } from "@tanstack/react-start/server";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/$")({
  loader: () => {
    if (typeof document === "undefined") {
      setResponseStatus(404);
    }
    return null;
  },
  head: () => ({
    meta: [
      { title: "Página no encontrada — YAMATO" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CatchAllNotFound,
});

function CatchAllNotFound() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <section className="flex min-h-[60vh] flex-col justify-center px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <p className="font-serif text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.02em]">404</p>
        <h1 className="mt-6 max-w-[20ch] font-serif text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-tight">
          Esta página no existe.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-ink">
          El enlace está roto o la página se ha movido.
        </p>
        <Link
          to="/"
          className="group mt-10 inline-flex w-fit items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight italic link-underline link-underline-hover"
        >
          Volver al inicio
          <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
