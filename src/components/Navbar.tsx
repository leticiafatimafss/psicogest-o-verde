import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo-essencia.png";

interface SubmenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  children?: SubmenuItem[];
}

const navLinks: MenuItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Quem Somos",
    href: "#sobre",
  },
  {
    label: "Soluções",
    children: [
      {
        label: "Metodologia",
        href: "#MetodoSection",
      },
      {
        label: "Serviços",
        href: "#servicos",
      },
    ],
  },
  {
    label: "Materiais",
    children: [
      {
        label: "eBooks",
        href: "#ebooks",
      },
      {
        label: "Plataforma",
        href: "#plataforma",
      },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((current) =>
      current === label ? null : label,
    );
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Essência Gestão Psicossocial"
            className="h-11 w-11 rounded-full object-cover"
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
              className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-colors ${
                scrolled
                  ? "text-muted-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              Gestão Psicossocial
            </span>
          </div>
        </a>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div
                  key={link.label}
                  className="group relative flex h-20 items-center"
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70 ${
                      scrolled
                        ? "text-foreground"
                        : "text-primary-foreground/90"
                    }`}
                  >
                    {link.label}

                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="pointer-events-none absolute left-1/2 top-[68px] min-w-[210px] -translate-x-1/2 translate-y-2 rounded-2xl border border-border/70 bg-background/98 p-2 opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  scrolled
                    ? "text-foreground"
                    : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* CTA Desktop */}
          <a
            href="#contato"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-md transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
          >
            Agendar uma Conversa
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={`transition-colors lg:hidden ${
            scrolled
              ? "text-foreground"
              : "text-primary-foreground"
          }`}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="border-t border-border bg-background/98 px-6 pb-6 pt-4 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="space-y-2">
            {navLinks.map((link) => {
              if (link.children) {
                const isDropdownOpen =
                  openMobileDropdown === link.label;

                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() =>
                        toggleMobileDropdown(link.label)
                      }
                      className="flex w-full items-center justify-between rounded-lg py-2 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <span>{link.label}</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="mb-2 ml-3 space-y-1 border-l border-border pl-4">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block rounded-lg py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Mobile */}
          <a
            href="#contato"
            onClick={closeMobileMenu}
            className="mt-5 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
          >
            Agendar uma Conversa
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
