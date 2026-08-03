import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Cta } from "@/components/Cta";
import { Marquee } from "@/components/Marquee";

const SITE_URL = "https://yamato.digital";
const TITLE = "Casos — YAMATO";
const DESCRIPTION =
  "Cuatro clientes, cuatro cifras. Lo que pasó cuando YAMATO entró a dirigir su marketing.";

export const Route = createFileRoute("/casos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/casos` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/casos` }],
  }),
  component: CasosPage,
});

const FIGURES = [
  { value: "+30 %", label: "GMV — APODEMIA, 2025" },
  { value: "Top 3", label: "SaaS en Verifactu — Cegid" },
  { value: "33x", label: "MRR — 1forAll" },
  { value: "2", label: "rondas cerradas — Confidencial" },
];

const CASES = [
  {
    n: "01",
    client: "APODEMIA",
    sector: "Joyería / DTC",
    result: "+30 % de GMV en 2025.",
    context:
      "Ecommerce con canales, web y CRM funcionando. Lo que no había era una cabeza única marcando criterio.",
    did: "Coordinamos paid, SEO, web y CRM con foco de negocio y prioridades compartidas. Menos cosas a la vez, mejor hechas.",
    note: "El objetivo de 2026 es duplicarlo.",
  },
  {
    n: "02",
    client: "CEGID (Contasimple)",
    sector: "SaaS / Enterprise",
    result: "Top 3 de SaaS en Verifactu.",
    context:
      "Había que entrar en la keyword regulatoria del año, con la normativa todavía en movimiento y cero margen para sonar genérico.",
    did: "Alineamos marketing y comunicación para ganar presencia justo cuando se decidía el mercado. Activamos palancas que la marca no había tocado.",
    note: null,
  },
  {
    n: "03",
    client: "1forAll",
    sector: "IA / SaaS",
    result: "De 300 € a más de 10.000 € de MRR.",
    context: "Producto lanzado, MRR plano. No se movía.",
    did: "Cambiamos el producto de modulador de voz a agregador de IAs. Naming nuevo, propuesta de valor nueva, comunicación nueva.",
    note: "A veces el problema de marketing es que el producto está mal contado. Y a veces es que está mal enfocado.",
  },
  {
    n: "04",
    client: "Confidencial",
    sector: "Deep-tech (el nombre lo pidieron ellos, y cumplimos órdenes)",
    result: "Dos rondas cerradas.",
    context: "Atascados en la tercera ronda. La tecnología era buena. El relato, no.",
    did: "Reescribimos comunicación, propuesta de valor, one-pager y pitch. Tres meses. Después de eso, cerraron dos rondas.",
    note: "Las rondas las cierra el fundador, no nosotros. Lo que hicimos fue quitar de en medio el motivo por el que no se cerraban.",
  },
];

const BEFORE = [
  {
    name: "LOEWE",
    body: "De 20.000 € a más de 2 millones € de facturación online. Rebranding completo, internacionalización y nuevas líneas de negocio.",
  },
  {
    name: "Clidrive",
    body: "Primera startup española en facturar 1M € en tres meses. Rentabilidad en seis. Más de 4M € de ingresos.",
  },
  {
    name: "Clibrain",
    body: "Primera startup española de LLMs (LINCE). Más de 40 modelos, 100k € de ARR y cobertura en TechCrunch y Business Wire.",
  },
];

const PAD = "px-6 sm:px-10 lg:px-20 xl:px-28";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-ink">
      {children}
    </span>
  );
}

function CasosPage() {
  return (
    <main className="bg-paper text-ink">
      <Nav />

      {/* 0 — Hero */}
      <section className={`${PAD} pt-16 pb-20 md:pt-24`}>
        <h1 className="max-w-[18ch] font-serif text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em]">
          Dos años. Cuatro cifras que podemos enseñar.
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
          Hay más clientes. No todos nos dejan publicar sus números, y no vamos a inventárnoslos.
        </p>
        <div className="mt-10">
          <Cta>Pide tu Radiografía gratis</Cta>
        </div>
      </section>

      {/* 1 — Banda de cifras */}
      <section className={`${PAD} border-y border-hairline bg-cream py-14 md:py-16`}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {FIGURES.map((f) => (
            <div key={f.label}>
              <p className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
                {f.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-muted-ink">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2 — Los casos */}
      <section className={`${PAD} py-20 md:py-28`}>
        <Eyebrow>Los casos</Eyebrow>
        <div className="mt-14">
          {CASES.map((c, i) => (
            <article
              key={c.n}
              className={`grid gap-8 py-14 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-12 ${
                i === 0 ? "pt-0" : "border-t border-hairline"
              }`}
            >
              <p className="font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] tracking-[-0.02em] text-muted-ink/50">
                {c.n}
              </p>
              <div className="max-w-3xl">
                <h3 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.01em]">
                  {c.client}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted-ink">{c.sector}</p>
                <p className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.01em] text-brand-red">
                  {c.result}
                </p>
                <div className="mt-8 grid gap-6">
                  <div>
                    <Label>Contexto</Label>
                    <p className="mt-2 text-lg leading-relaxed text-muted-ink">{c.context}</p>
                  </div>
                  <div>
                    <Label>Qué hicimos</Label>
                    <p className="mt-2 text-lg leading-relaxed text-muted-ink">{c.did}</p>
                  </div>
                  {c.note ? (
                    <div>
                      <Label>Nota</Label>
                      <p className="mt-2 text-lg leading-relaxed text-muted-ink">{c.note}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3 — Antes de YAMATO */}
      <section className={`${PAD} border-t border-hairline py-20 md:py-28`}>
        <Eyebrow>Antes de YAMATO</Eyebrow>
        <h2 className="mt-10 max-w-[24ch] font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight">
          YAMATO tiene dos años. El CMO que dirige tu proyecto, más de una década.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-ink md:text-xl">
          Esto es lo que hizo antes de fundarla.
        </p>
        <ul className="mt-14 grid gap-12">
          {BEFORE.map((b) => (
            <li key={b.name} className="max-w-3xl">
              <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.01em]">
                {b.name}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-muted-ink md:text-xl">{b.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4 — Y unos cuantos más */}
      <section className="border-t border-hairline py-20 md:py-28">
        <div className={PAD}>
          <Eyebrow>Y unos cuantos más</Eyebrow>
        </div>
        <Marquee />
        <div className={PAD}>
          <Cta>¿No ves tu nombre? Llámanos y cambiemos eso.</Cta>
        </div>
      </section>

      {/* 5 — Cierre */}
      <section className={`${PAD} border-t border-hairline py-20 md:py-28`}>
        <h2 className="max-w-[20ch] font-serif text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
          ¿Qué número quieres poder enseñar dentro de un año?
        </h2>
        <div className="mt-10">
          <Cta>Hablemos pues</Cta>
        </div>
      </section>

      <Footer />
    </main>
  );
}
