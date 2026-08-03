export function Arrow() {
  return (
    <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
      →
    </span>
  );
}

export function Cta({ children, href = "/contacto" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-baseline font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-tight italic link-underline link-underline-hover"
    >
      {children}
      <Arrow />
    </a>
  );
}
