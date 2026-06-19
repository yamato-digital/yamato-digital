import { createFileRoute } from "@tanstack/react-router";
import logoBlack from "@/assets/logo-yamato-black.png.asset.json";
import logoWhite from "@/assets/logo-yamato-white.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YAMATO — Consultora de marketing independiente (y sincera)" },
      {
        name: "description",
        content:
          "Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación.",
      },
      { property: "og:title", content: "YAMATO — Consultora de marketing independiente" },
      {
        property: "og:description",
        content:
          "Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const CLIENTS = [
  "Apodemia",
  "Cegid",
  "Contasimple",
  "Verifactu",
  "Growth Partner",
  "Boutique Agency",
  "Function + Feeling",
];

const SERVICES = [
  "Estrategia y dirección",
  "Mentoría y gestión de equipos",
  "Go-to-Market",
  "IA aplicada",
  "Ejecución",
];

const FIT_YES = [
  "Quieres crecer y nadie piensa tu marketing a nivel estratégico.",
  "Estás harto de agencias que prometen la luna y entregan un PowerPoint.",
  "Prefieres honestidad brutal a informes bonitos que no dicen nada.",
  "Tienes equipo y presupuesto, pero los proyectos importantes nunca tienen dueño.",
  "Quieres ganar dinero.",
];

const FIT_NO = [
  "Buscas marketing barato.",
  "Necesitas una agencia para poner en marcha las campañas de Paid.",
  "Quieres resultados mágicos en 2 semanas.",
  "Te ofende que te digan lo que no funciona.",
  "Regateas. No somos un mercadillo.",
];

function Arrow() {
  return (
    <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

function Cta({ children, href = "#contacto" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-baseline font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight italic link-underline link-underline-hover"
    >
      {children}
      <Arrow />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-ink">
      {children}
    </p>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#top" className="font-serif text-2xl tracking-tight">
          yamato<span className="text-muted-ink">.</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          {[
            ["Qué hacemos", "#servicios"],
            ["Cómo", "#proceso"],
            ["Casos", "#casos"],
            ["Contacto", "#contacto"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="link-underline link-underline-hover"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-6 md:px-12">
      <h1 className="mt-16 max-w-[18ch] font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em] md:mt-24">
        Hola. Somos una consultora de marketing independiente
        <span className="italic"> (y sincera).</span>
      </h1>
      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
        Dirigimos, asesoramos y ejecutamos lo que mueve tu negocio. De la startup a la corporación.
      </p>
      <div className="mt-10 mb-20">
        <Cta>Llamar es gratis (aún)</Cta>
      </div>
    </section>
  );
}

function HeroMedia() {
  return (
    <section className="px-6 md:px-12">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/95">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-paper/80">
          <span className="text-xs uppercase tracking-[0.25em]">Hero media</span>
          <span className="mt-3 font-serif text-2xl italic">
            Sube aquí tu vídeo o imagen
          </span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Trabajamos con" className="border-y border-hairline py-10">
      <div className="overflow-hidden">
        <div className="marquee-track font-serif text-[clamp(2rem,5vw,4rem)] leading-none whitespace-nowrap">
          {row.map((c, i) => (
            <span key={i} className="flex items-center gap-10">
              {c}
              <span aria-hidden className="text-muted-ink">◦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="grid gap-12 px-6 py-28 md:grid-cols-12 md:px-12">
      <div className="md:col-span-3">
        <Eyebrow>Qué es YAMATO</Eyebrow>
      </div>
      <div className="space-y-6 text-lg leading-relaxed md:col-span-8 md:col-start-5 md:text-xl">
        <p>
          Tu dirección de marketing. La cabeza de un CMO con más de una década dirigiendo + las
          manos de un equipo senior. Dentro de tu empresa, las horas que necesites. Ni un freelance
          que hace campañas sueltas, ni un consultor que suelta el informe y desaparece.
        </p>
        <p>
          No somos una agencia. Nadie te venderá la moto en la primera reunión para pasarte luego
          con un junior: quien piensa tu estrategia es quien la firma, y se sienta en tu comité de
          dirección.
        </p>
        <p>
          Trabajamos como <em className="font-serif">Growth Partner</em>: solo ganamos cuando tú
          ganas. Incómodo para el resto del sector. Cómodo para ti.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-cream">
      <div className="grid gap-12 px-6 py-28 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4">
          <Eyebrow>Nuestros servicios</Eyebrow>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
            Cinco cosas, <span className="italic">no cuarenta.</span>
          </h2>
        </div>
        <ol className="md:col-span-7 md:col-start-6">
          {SERVICES.map((s, i) => (
            <li
              key={s}
              className="flex items-baseline gap-6 border-t border-ink/15 py-6 last:border-b"
            >
              <span className="text-sm tabular-nums text-muted-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-tight">
                {s}
              </span>
            </li>
          ))}
        </ol>
        <blockquote className="border-l-2 border-ink pl-6 font-serif text-xl italic leading-relaxed text-ink md:col-span-10 md:col-start-2 md:text-2xl">
          Independientes de verdad. Ejecutamos lo que mueve el negocio (SEO, GEO, CRM, web, IA) y
          dirigimos lo demás: el paid lo lleva un especialista que elegimos y controlamos
          nosotros. Por eso no cobramos un porcentaje de lo que inviertes. No gestionamos tu
          publicidad, así que no tenemos nada que inflar. Independientes en la estructura, no en
          el eslogan.
        </blockquote>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Llamada",
      body: "Llamada de 30 minutos. Si en ese tiempo no te convencemos de trabajar juntos, YAMATO no es para ti.",
    },
    {
      n: "02",
      title: "Radiografía (gratis)",
      body: "Analizamos tu marketing de arriba a abajo y te presentamos qué cambiaríamos y por qué.",
    },
    {
      n: "03",
      title: "Arrancamos",
      body: "Si aceptas, cosa que suele ser lo habitual, estamos trabajando en tu proyecto en 1 semana.",
    },
  ];

  return (
    <section id="proceso" className="px-6 py-28 md:px-12">
      <Eyebrow>Cómo lo hacemos</Eyebrow>
      <p className="mt-6 max-w-3xl font-serif text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.1] tracking-tight italic">
        “Te diremos 3 cosas: lo que haces bien, lo que no haces tan bien y, sobre todo, lo que no
        haces.”
      </p>
      <div className="mt-20 grid gap-12 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n}>
            <span className="font-serif text-5xl text-muted-ink">{s.n}</span>
            <h3 className="mt-4 font-serif text-3xl">{s.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-ink">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <Cta>¿Nos sentamos?</Cta>
      </div>
    </section>
  );
}

function PriceQuote() {
  return (
    <section className="border-y border-hairline bg-paper">
      <div className="px-6 py-28 md:px-12">
        <Eyebrow>Inversión</Eyebrow>
        <p className="mt-6 max-w-4xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight">
          Un CMO por el precio de un{" "}
          <span className="italic text-muted-ink">junior</span>.
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
          Por lo mismo que te cuesta un perfil junior, YAMATO te pone un CMO con más de una
          década dirigiendo marketing. Menos horas, sí. Pero ninguna se pierde en que un junior
          aprenda a tu costa.
        </p>
        <div className="mt-10">
          <Cta>Si llamas, respondemos</Cta>
        </div>
      </div>
    </section>
  );
}

function EnterpriseBlock() {
  return (
    <section className="grid gap-12 px-6 py-28 md:grid-cols-12 md:px-12">
      <div className="md:col-span-4">
        <Eyebrow>Para empresas grandes</Eyebrow>
        <h2 className="mt-6 font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
          ¿Y si ya tienes un <span className="italic">CMO?</span>
        </h2>
      </div>
      <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-6 md:text-xl">
        <p>No venimos a quitarle la silla a nadie.</p>
        <p>
          En empresas grandes entramos donde la estructura no llega: el lanzamiento que nadie
          tiene tiempo de liderar, la unidad de negocio sin foco, la IA de la que todo el comité
          habla y nadie implanta, la segunda opinión que tu agencia no te va a dar…
        </p>
        <p>
          Proyectos con principio, fin y resultado. No nos quedamos a vivir en tu nómina. Es como
          trabajamos con Cegid.
        </p>
        <p className="text-muted-ink">
          Sí, suena a lo que te prometió la gran consultora. La diferencia: aquí, el que te lo
          vende es el que trabaja.
        </p>
        <div className="pt-4">
          <Cta>Cuéntanos el proyecto</Cta>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  const cases = [
    {
      tag: "Apodemia · Ecommerce",
      title: "Su anterior agencia les quitaba el sueño.",
      body: "Tomamos la dirección de todo su negocio digital en 2025 e hicimos un +30% de GMV respecto al año anterior. En 2026 vamos a por el +100%. Intentamos que ahora duerman por las noches.",
    },
    {
      tag: "Cegid / Contasimple · SaaS",
      title: "2025 fue el año de Verifactu.",
      body: "Llevamos la estrategia de marketing y comunicación para pelear el podio del SaaS de referencia. Lo conseguimos. El Gobierno retrasó Verifactu un año el 2 de diciembre. Gracias.",
    },
  ];

  return (
    <section id="casos" className="bg-cream">
      <div className="px-6 py-28 md:px-12">
        <Eyebrow>Casos de éxito</Eyebrow>
        <div className="mt-16 divide-y divide-ink/15">
          {cases.map((c) => (
            <article key={c.tag} className="grid gap-8 py-14 md:grid-cols-12">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-ink md:col-span-3">
                {c.tag}
              </p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-ink md:text-xl">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl font-serif text-2xl italic text-muted-ink">
          Y muchos más, pero no queremos hacer un scroll infinito en la Home.
        </p>
        <div className="mt-10">
          <Cta>Llámanos y te contamos el resto</Cta>
        </div>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section className="px-6 py-28 md:px-12">
      <Eyebrow>No perdamos el tiempo</Eyebrow>
      <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1] tracking-tight">
        Encajarás con YAMATO <span className="italic">si…</span>
      </h2>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <ul className="space-y-5">
          {FIT_YES.map((t) => (
            <li key={t} className="flex gap-4 text-lg leading-relaxed md:text-xl">
              <span aria-hidden className="mt-2 inline-block h-px w-6 shrink-0 bg-ink" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div>
          <p className="font-serif text-2xl italic text-muted-ink">No encajarás si…</p>
          <ul className="mt-6 space-y-5">
            {FIT_NO.map((t) => (
              <li key={t} className="flex gap-4 text-lg leading-relaxed text-muted-ink md:text-xl">
                <span aria-hidden className="mt-2 inline-block h-px w-6 shrink-0 bg-muted-ink" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="contacto" className="bg-ink text-paper">
      <div className="px-6 py-32 md:px-12">
        <Eyebrow>
          <span className="text-paper/60">Y colorín colorado…</span>
        </Eyebrow>
        <p className="mt-8 max-w-5xl font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[1] tracking-tight">
          Empiezas con 30 minutos de llamada. Sales con una{" "}
          <span className="italic">Radiografía gratis</span> y tres verdades.
        </p>
        <div className="mt-12">
          <a
            href="mailto:hola@yamato.digital"
            className="group inline-flex items-baseline font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] italic"
          >
            Pide tu Radiografía gratis
            <Arrow />
          </a>
        </div>
        <p className="mt-16 max-w-2xl text-base leading-relaxed text-paper/70">
          Y si nada de esto te encaja, dedícale 1 minuto al día a la newsletter. Intentaremos que
          al menos aprendas algo nuevo cada día.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="flex flex-col gap-10 border-t border-paper/15 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <p className="font-serif text-5xl">
            yamato<span className="text-paper/50">.</span>
          </p>
          <p className="mt-3 text-sm text-paper/60">
            Consultora de marketing independiente. Madrid · Remote.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-paper/70 md:text-right">
          <a href="mailto:hola@yamato.digital" className="link-underline link-underline-hover">
            hola@yamato.digital
          </a>
          <a href="#" className="link-underline link-underline-hover">
            Newsletter
          </a>
          <a href="#" className="link-underline link-underline-hover">
            LinkedIn
          </a>
          <p className="mt-6 text-paper/40">© {new Date().getFullYear()} YAMATO</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <HeroMedia />
      <div className="mt-24" />
      <Marquee />
      <About />
      <Services />
      <Process />
      <PriceQuote />
      <EnterpriseBlock />
      <Cases />
      <Fit />
      <Closing />
      <Footer />
    </main>
  );
}
