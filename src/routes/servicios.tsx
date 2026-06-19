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
          "Cinco cosas, no cuarenta. Estrategia, mentoría, Go-to-Market, IA aplicada y ejecución para empresas que quieren resultados.",
      },
      { property: "og:title", content: "Servicios — YAMATO" },
      {
        property: "og:description",
        content:
          "Cinco cosas, no cuarenta. Estrategia, mentoría, Go-to-Market, IA aplicada y ejecución.",
      },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

const SERVICES = [
  {
    title: "Estrategia y dirección.",
    body: "Nadie piensa tu marketing más allá del mes que viene. Entramos como tu director: auditamos, fijamos estrategia, marcamos KPIs y lideramos la operación.",
  },
  {
    title: "Mentoría y gestión de equipos.",
    body: "Tienes gente que ejecuta mucho y avanza poco. No despedimos a nadie: les damos dirección, foco y un backlog priorizado por negocio.",
  },
  {
    title: "Go-to-Market.",
    body: "Hay fecha de lanzamiento y nadie ha pensado el cómo. Diseñamos y ejecutamos la entrada al mercado. Con plan y con plazos.",
  },
  {
    title: "IA aplicada.",
    body: "Todos hablan de IA, nadie la implanta. La metemos donde ahorra dinero de verdad: automatizaciones, agentes, análisis, reporting. La IA no va a acabar con el marketing, va a acabar con el marketing mediocre.",
  },
  {
    title: "Ejecución.",
    body: "SEO, GEO, CRM, web, automatización. Lo ejecutamos nosotros — y solo si la estrategia la hemos marcado nosotros. ¿Google Ads y Social Ads? Los dirigimos y elegimos a quién los toca. Un CMO no mueve pujas: dirige al que las mueve.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-ink">
      {children}
    </h2>
  );
}

function ServiciosPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        {/* Manifesto */}
        <section className="px-6 sm:px-10 lg:px-20 xl:px-28 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Nuestros servicios</Eyebrow>
            <h1 className="mt-10 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              Cinco cosas, <span className="italic">no cuarenta.</span>
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-relaxed md:text-xl text-muted-ink">
              <p>
                No hacemos de todo. Hacemos lo que mueve el negocio. Estrategia,
                equipos, lanzamientos, IA y ejecución.
              </p>
              <p>
                Si necesitas a alguien que te haga cuarenta cosas regulares,
                no somos nosotros. Si quieres a alguien que haga cinco bien y
                te diga la verdad por el camino, sigue leyendo.
              </p>
            </div>
          </div>
        </section>

        <div className="px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="mx-auto max-w-4xl border-t border-ink/20" />
        </div>

        {/* What we actually do */}
        <section className="px-6 sm:px-10 lg:px-20 xl:px-28 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
              Vale. ¿Pero qué hacéis <span className="italic">exactamente?</span>
            </h2>

            <div className="mt-12 space-y-6 text-lg leading-relaxed md:text-xl text-muted-ink">
              {SERVICES.map((s) => (
                <p key={s.title}>
                  <strong className="text-ink">{s.title}</strong>{" "}
                  {s.body}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
