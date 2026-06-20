import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — YAMATO" },
      {
        name: "description",
        content:
          "Hablemos. YAMATO es tu dirección de marketing independiente. Email, LinkedIn y newsletter.",
      },
      { property: "og:title", content: "Contacto — YAMATO" },
      {
        property: "og:description",
        content:
          "Hablemos. YAMATO es tu dirección de marketing independiente.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 sm:px-10">
        <a
          href="https://tally.so/r/rjgEpL"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline link-underline-hover select-none font-serif text-[clamp(5rem,20vw,18rem)] leading-[0.85] tracking-[-0.02em] text-hairline"
          style={{ backgroundImage: "linear-gradient(var(--ink), var(--ink))" }}
        >
          Contacto
        </a>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-lg font-medium md:gap-10 md:text-xl">
          <a
            href="mailto:hola@yamato.digital"
            className="link-underline link-underline-hover"
          >
            Email.
          </a>
          <a
            href="#"
            className="link-underline link-underline-hover"
          >
            LinkedIn.
          </a>
          <a
            href="#"
            className="link-underline link-underline-hover"
          >
            Newsletter.
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
