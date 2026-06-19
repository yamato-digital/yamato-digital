import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — YAMATO" },
      {
        name: "description",
        content:
          "Descubre cómo YAMATO puede ayudar a tu empresa con estrategia, mentoría, Go-to-Market, IA aplicada y ejecución.",
      },
      { property: "og:title", content: "Servicios — YAMATO" },
      {
        property: "og:description",
        content:
          "Estrategia, mentoría, Go-to-Market, IA aplicada y ejecución para startups y corporaciones.",
      },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

const SERVICE_DETAILS = [
  {
    title: "Estrategia y dirección",
    description:
      "Diseñamos la dirección de tu marketing como si fuera nuestro. Desde el posicionamiento hasta el plan anual, con honestidad brutal y cero plantillas.",
  },
  {
    title: "Mentoría y gestión de equipos",
    description:
      "Acompañamos a tu equipo interno o externo para que tomen mejores decisiones, gestionen mejor su tiempo y dejen de depender de agencias que no entienden el negocio.",
  },
  {
    title: "Go-to-Market",
    description:
      "Lanzamos productos y servicios con un plan que funciona desde el día uno. Investigación, mensajería, canales y métricas claras.",
  },
  {
    title: "IA aplicada",
    description:
      "Integramos inteligencia artificial en tus procesos de marketing para ganar velocidad, calidad y diferenciación real.",
  },
  {
    title: "Ejecución",
    description:
      "Nos ponemos las pilas y ejecutamos lo que hay que ejecutar. Sin reuniones eternas, sin informes que nadie lee.",
  },
];

function ServiciosPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <section className="px-6 sm:px-10 lg:px-20 xl:px-28 pt-24 pb-16">
          <h1 className="max-w-[16ch] font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em]">
            Nuestros <span className="italic">servicios</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
            Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación.
          </p>
        </section>

        <section className="px-6 sm:px-10 lg:px-20 xl:px-28 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-0 md:grid-cols-12">
              {SERVICE_DETAILS.map((s, i) => (
                <div
                  key={s.title}
                  className="border-t border-ink/15 py-10 md:col-span-12 md:grid md:grid-cols-12 md:gap-6"
                >
                  <div className="md:col-span-1">
                    <span className="text-sm tabular-nums text-muted-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-2 md:col-span-4 md:mt-0">
                    <h2 className="font-serif text-2xl leading-tight md:text-3xl">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-4 md:col-span-6 md:col-start-6 md:mt-0">
                    <p className="text-base leading-relaxed text-muted-ink">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
