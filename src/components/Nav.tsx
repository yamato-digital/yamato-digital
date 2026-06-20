import { Link } from "@tanstack/react-router";
import logoBlack from "@/assets/logo-yamato-black.png";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur">
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 xl:px-28 py-6">
        <Link to="/" className="inline-block">
          <img src={logoBlack} alt="YAMATO" className="h-8 w-auto" />
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link to="/servicios" className="link-underline link-underline-hover">
            Servicios
          </Link>
          <Link
            to="/clientes"
            activeProps={{ className: "font-semibold" }}
            className="link-underline link-underline-hover"
          >
            Clientes
          </Link>
          <a
            href="https://pulsodiario.igonigonzalez.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline link-underline-hover"
          >
            Newsletter
          </a>
          <Link
            to="/contacto"
            activeProps={{ className: "font-semibold" }}
            className="link-underline link-underline-hover"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
