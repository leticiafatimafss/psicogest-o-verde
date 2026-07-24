import { useEffect, useRef, useState, type ElementType } from "react";
import {
  BookOpen,
  ChevronDown,
  Layers3,
  Menu,
  MonitorSmartphone,
  Sparkles,
  X,
} from "lucide-react";

import logo from "@/assets/logo-essencia.png";

interface SubmenuItem {
  label: string;
  description: string;
  href: string;
  icon: ElementType;
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
    href: "#quem-somos",
  },
  {
    label: "Soluções",
    children: [
      {
        label: "Metodologia",
        description: "Conheça o Método Essência PSI",
        href: "#metodologia",
        icon: Sparkles,
      },
      {
        label: "Serviços",
        description: "Soluções completas para sua empresa",
        href: "#servicos",
        icon: Layers3,
      },
    ],
  },
  {
    label: "Materiais",
    children: [
      {
        label: "eBooks",
        description: "Guias práticos e materiais técnicos",
        href: "#ebooks",
        icon: BookOpen,
      },
      {
        label: "Plataforma",
        description: "Diagnóstico e gestão psicossocial",
        href: "#plataforma",
        icon: MonitorSmartphone,
      },
    ],
  },
];

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(
    null,
  );
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(null);
        setMobileDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setDesktopDropdownOpen(null);
    setMobileDropdownOpen(null);
    setMobileMenuOpen(false);
  };

  const toggleDesktopDropdown = (label: string) => {
    setDesktopDropdownOpen((current) =>
      current === label ? null : label,
    );
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen((current) =>
      current === label ? null : label,
    );
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0d3a2d] shadow-[0_10px_35px_rgba(0,0,0,0.24)]"
          : "bg-[#0d3a2d]"
      }`}
    >
      <div className="container flex h-[88px] items-center justify-between gap-6">
        {/* LOGO */}
        <a
          href="#home"
          onClick={closeAllMenus}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Ir para o início"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#b99855]/25 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <img
              src={logo}
              alt="Essência Gestão Psicossocial"
              className="relative h-11 w-11 rounded-full object-cover ring-1 ring-[#c6a45d]/35 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="font-heading text-[21px] font-semibold leading-none text-white">
              Essência
            </span>

            <span className="mt-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
              Gestão Psicossocial
            </span>
          </div>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const hasChildren = Boolean(link.children);
            const isOpen = desktopDropdownOpen === link.label;

            if (!hasChildren) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeAllMenus}
                  className="rounded-full px-4 py-3 text-[15px] font-semibold text-white/85 transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(link.label)}
                onMouseLeave={() => setDesktopDropdownOpen(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleDesktopDropdown(link.label)}
                  aria-expanded={isOpen}
                  className={`flex items-center gap-2 rounded-full px-4 py-3 text-[15px] font-semibold transition-all duration-200 ${
                    isOpen
                      ? "bg-white/[0.11] text-white"
                      : "text-white/85 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {link.label}

                  <ChevronDown
                    size={16}
                    strokeWidth={2.2}
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Ponte invisível para o mouse não perder o dropdown */}
                <div className="absolute left-0 top-full h-4 w-full" />

                {/* DROPDOWN */}
                <div
                  className={`absolute left-1/2 top-[calc(100%+12px)] w-[370px] -translate-x-1/2 transition-all duration-200 ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-[#c6a45d]/25 bg-[#092b22] p-3 shadow-[0_28px_75px_rgba(0,0,0,0.55)]">
                    {/* Linha dourada */}
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d1b269]/80 to-transparent" />

                    {/* Seta superior */}
                    <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-[#c6a45d]/25 bg-[#092b22]" />

                    <div className="relative space-y-1.5">
                      {link.children?.map((child) => {
                        const Icon = child.icon;

                        return (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={closeAllMenus}
                            className="group/item flex items-center gap-4 rounded-xl border border-transparent px-4 py-4 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.09]"
                          >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d0ae60]/30 bg-[#d0ae60]/10 text-[#e3c477] transition-all duration-200 group-hover/item:border-[#d0ae60]/50 group-hover/item:bg-[#d0ae60]/18">
                              <Icon size={19} strokeWidth={2} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="text-[15px] font-bold leading-tight text-white">
                                {child.label}
                              </div>

                              <div className="mt-1 text-[12px] font-medium leading-relaxed text-white/70">
                                {child.description}
                              </div>
                            </div>

                            <span className="ml-2 translate-x-0 text-xl text-[#dfbd66] opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100">
                              →
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* BOTÃO DESKTOP */}
          <a
            href="#contato"
            onClick={closeAllMenus}
            className="ml-5 whitespace-nowrap rounded-full border border-[#d2b36e]/35 bg-[#ad8d4d] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_26px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bb9a58] hover:shadow-[0_14px_34px_rgba(0,0,0,0.3)]"
          >
            Agendar uma Conversa
          </a>
        </div>

        {/* MENU TABLET */}
        <div className="hidden items-center gap-3 lg:flex xl:hidden">
          <a
            href="#contato"
            onClick={closeAllMenus}
            className="whitespace-nowrap rounded-full bg-[#ad8d4d] px-5 py-3 text-sm font-bold text-white"
          >
            Agendar Conversa
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.1]"
            aria-label="Abrir menu"
          >
            <Menu size={23} />
          </button>
        </div>

        {/* MENU MOBILE */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.1] lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu size={23} />
        </button>
      </div>

      {/* OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeAllMenus}
      />

      {/* MENU LATERAL MOBILE */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(90vw,400px)] flex-col bg-[#092b22] shadow-[-30px_0_80px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho mobile */}
        <div className="flex h-[88px] items-center justify-between border-b border-white/10 px-6">
          <a
            href="#home"
            onClick={closeAllMenus}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Essência"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-[#c6a45d]/35"
            />

            <div>
              <div className="font-heading text-lg font-semibold text-white">
                Essência
              </div>

              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Gestão Psicossocial
              </div>
            </div>
          </a>

          <button
            type="button"
            onClick={closeAllMenus}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.1]"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Conteúdo mobile */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children);
              const isOpen = mobileDropdownOpen === link.label;

              if (!hasChildren) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeAllMenus}
                    className="flex min-h-12 items-center rounded-xl px-4 text-[15px] font-semibold text-white/85 transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <div
                  key={link.label}
                  className="overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03]"
                >
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(link.label)}
                    aria-expanded={isOpen}
                    className="flex min-h-12 w-full items-center justify-between px-4 text-left text-[15px] font-semibold text-white"
                  >
                    <span>{link.label}</span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 border-t border-white/[0.07] p-2">
                        {link.children?.map((child) => {
                          const Icon = child.icon;

                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={closeAllMenus}
                              className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-white/[0.08]"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#d0ae60]/25 bg-[#d0ae60]/10 text-[#e3c477]">
                                <Icon size={17} />
                              </div>

                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-white">
                                  {child.label}
                                </div>

                                <div className="mt-0.5 text-[11px] leading-relaxed text-white/65">
                                  {child.description}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#contato"
            onClick={closeAllMenus}
            className="mt-7 flex items-center justify-center rounded-full bg-[#ad8d4d] px-6 py-4 text-center text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#bb9a58]"
          >
            Agendar uma Conversa
          </a>

          <p className="mt-5 text-center text-xs leading-relaxed text-white/45">
            Gestão estratégica de riscos psicossociais para ambientes de
            trabalho mais seguros, saudáveis e sustentáveis.
          </p>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;

