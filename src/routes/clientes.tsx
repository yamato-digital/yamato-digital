import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — YAMATO" },
      {
        name: "description",
        content: "Empresas con las que hemos trabajado. Estrategia, dirección y ejecución de marketing.",
      },
      { property: "og:title", content: "Clientes — YAMATO" },
      {
        property: "og:description",
        content: "Empresas con las que hemos trabajado. Estrategia, dirección y ejecución de marketing.",
      },
      { property: "og:url", content: "/clientes" },
    ],
    links: [{ rel: "canonical", href: "/clientes" }],
  }),
  component: ClientesPage,
});

const clients = [
  {
    name: "Cliente 1",
    description: "Breve descripción del proyecto. Reemplaza este texto.",
  },
  {
    name: "Cliente 2",
    description: "Breve descripción del proyecto. Reemplaza este texto.",
  },
  {
    name: "Cliente 3",
    description: "Breve descripción del proyecto. Reemplaza este texto.",
  },
  {
    name: "Cliente 4",
    description: "Breve descripción del proyecto. Reemplaza este texto.",
  },
  {
    name: "Cliente 5",
    description: "Breve descripción del proyecto. Reemplaza este texto.",
  },
  {
    name: "Cliente 6",
    description: "Breve descripción del proyecto. Reemplaza este texto.",
  },
];

function ClientesPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="px-6 sm:px-10 lg:px-20 xl:px-28 py-16 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.02em]">
            Clientes
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg leading-relaxed text-muted-ink md:text-xl">
            Algunos de ellos.
          </p>
        </div>

        <section className="mt-16 md:mt-24">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
            {clients.map((client) => (
              <div key={client.name}>
                <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.01em]">
                  {client.name}
                </h3>
                <p className="mt-4 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-muted-ink">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
