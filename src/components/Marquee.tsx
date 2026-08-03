export const CLIENTS_ROW_1 = ["LOEWE", "Cedrion", "Kincode", "Bindu Events", "Beedigital", "Cegid"];
export const CLIENTS_ROW_2 = ["APODEMIA", "Airamana", "1forAll", "IEB", "Grupo Alquila"];
export const CLIENTS_ROW_3 = ["Clicollege", "Vivas Psicología", "SomosNLP", "Rem83"];

export function Marquee() {
  const rows = [
    { items: CLIENTS_ROW_1, reverse: false },
    { items: CLIENTS_ROW_2, reverse: true },
    { items: CLIENTS_ROW_3, reverse: false },
  ];
  return (
    <section aria-label="Trabajamos con" className="py-12">
      <div>
        {rows.map((row, idx) => {
          const doubled = [...row.items, ...row.items, ...row.items, ...row.items];
          const isLast = idx === rows.length - 1;
          return (
            <div key={idx} className={`overflow-hidden py-4 ${isLast ? "" : "border-b border-ink/15"}`}>
              <div
                className={`${row.reverse ? "marquee-track-reverse" : "marquee-track"} font-serif text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.2] whitespace-nowrap py-1`}
              >
                {doubled.map((c, i) => (
                  <span key={i} className="flex items-center gap-10">
                    {c}
                    <span aria-hidden className="text-muted-ink">
                      ◦
                    </span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
