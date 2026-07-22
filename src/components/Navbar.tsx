import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-essencia.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-all duration-300 ${
      scrolled ? "text-foreground" : "text-primary-foreground/90"
    } ${
      isActive
        ? "text-accent"
        : "hover:text-accent"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Essência Gestão Psicossocial"
            className="h-11 w-11 rounded-full"
          />

          <div className="flex flex-col">
            <span
              className={`font-heading text-lg font-semibold transition-colors ${
                scrolled
                  ? "text-foreground"
                  : "text-primary-foreground"
              }`}
            >
              Essência
            </span>

            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              Gestão Psicossocial
            </span>
          </div>
        </NavLink>

                {/* ===================== DESKTOP ===================== */}

        <div className="hidden lg:flex items-center gap-8">

          {/* Home */}
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          {/* Sobre */}
          <NavLink to="/sobre" className={navClass}>
            Sobre
          </NavLink>

          {/* Serviços */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground"
                  : "text-primary-foreground/90"
              } hover:text-accent`}
            >
              Serviços

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-border bg-background shadow-xl overflow-hidden">

                <NavLink
                  to="/metodo"
                  className="block px-5 py-3 text-sm hover:bg-muted transition-colors"
                >
                  Método Essência
                </NavLink>

                <NavLink
                  to="/solucoes"
                  className="block px-5 py-3 text-sm hover:bg-muted transition-colors"
                >
                  Soluções
                </NavLink>

                <NavLink
                  to="/nr01"
                  className="block px-5 py-3 text-sm hover:bg-muted transition-colors"
                >
                  Adequação à NR-01
                </NavLink>

              </div>
            )}
          </div>

          {/* Materiais */}

          <div
            className="relative"
            onMouseEnter={() => setMaterialsOpen(true)}
            onMouseLeave={() => setMaterialsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground"
                  : "text-primary-foreground/90"
              } hover:text-accent`}
            >
              Materiais

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  materialsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {materialsOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-border bg-background shadow-xl overflow-hidden">

                <NavLink
                  to="/ebooks"
                  className="block px-5 py-3 text-sm hover:bg-muted transition-colors"
                >
                  E-books
                </NavLink>

                <NavLink
                  to="/plataforma"
                  className="block px-5 py-3 text-sm hover:bg-muted transition-colors"
                >
                  Plataforma Essência
                </NavLink>

              </div>
            )}
          </div>

          {/* Contato */}

          <NavLink
            to="/contato"
            className={navClass}
          >
            Contato
          </NavLink>

          {/* CTA */}

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
          >
            Agendar conversa
          </a>

        </div>

        {/* Botão Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden transition-colors ${
            scrolled
              ? "text-foreground"
              : "text-primary-foreground"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

            {/* ===================== MOBILE ===================== */}

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-5 space-y-2 shadow-lg">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm font-medium"
          >
            Home
          </NavLink>

          <NavLink
            to="/sobre"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm font-medium"
          >
            Sobre
          </NavLink>

          {/* Serviços */}

          <div>

            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between py-2 text-sm font-medium"
            >
              Serviços

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="ml-4 mt-2 border-l border-border pl-4 space-y-2">

                <NavLink
                  to="/metodo"
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Método Essência
                </NavLink>

                <NavLink
                  to="/solucoes"
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Soluções
                </NavLink>

                <NavLink
                  to="/nr01"
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Adequação à NR-01
                </NavLink>

              </div>
            )}

          </div>

          {/* Materiais */}

          <div>

            <button
              onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
              className="flex w-full items-center justify-between py-2 text-sm font-medium"
            >
              Materiais

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  mobileMaterialsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileMaterialsOpen && (
              <div className="ml-4 mt-2 border-l border-border pl-4 space-y-2">

                <NavLink
                  to="/ebooks"
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  E-books
                </NavLink>

                <NavLink
                  to="/plataforma"
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Plataforma Essência
                </NavLink>

              </div>
            )}

          </div>

          <NavLink
            to="/contato"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm font-medium"
          >
            Contato
          </NavLink>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            Agendar conversa
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
