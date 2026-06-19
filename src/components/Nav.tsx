import logoBlack from "@/assets/logo-yamato-black.png";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-28 py-6">
        <a href="/#top" className="inline-block">
          <img src={logoBlack} alt="YAMATO" className="h-8 w-auto" />
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          {[
            ["Qué hacemos", "/#servicios"],
            ["Cómo", "/#proceso"],
            ["Contacto", "/#contacto"],
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
