import { useEffect, useRef, useState } from "react";
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
  icon: React.ElementType;
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(
    null,
  );
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

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
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
    setDesktopDropdownOpen(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen((current) =>
      current === label ? null : label,
    );
  };

  const toggleDesktopDropdown = (label: string) => {
    setDesktopDropdownOpen((current) =>
      current === label ? null : label,
    );
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#103f31]/95 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          : "bg-gradient-to-b from-[#103f31]/95 to-[#103f31]/75 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-[82px] items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeAllMenus}
          className="group flex min-w-0 items-center gap-3"
          aria-label="Ir para o início"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#b69857]/20 blur-md transition-opacity duration-300 group-hover:opacity-100" />

            <img
              src={logo}
              alt="Essência Gestão Psicossocial"
              className="relative h-11 w-11 rounded-full object-cover ring-1 ring-[#b69857]/30 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="hidden min-w-0 flex-col sm:flex">
            <span className="font-heading text-[21px] font-semibold leading-none text-white">
              Essência
            </span>

            <span className="mt-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
              Gestão Psicossocial
            </span>
          </div>
        </a>

        {/* Menu desktop */}
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
                  className="relative rounded-full px-4 py-2.5 text-[15px] font-semibold text-white/85 transition-all duration-200 hover:bg-white/8 hover:text-white"
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
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-semibold transition-all duration-200 ${
                    isOpen
                      ? "bg-white/10 text-white"
                      : "text-white/85 hover:bg-white/8 hover:text-white"
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

                {/* Ponte invisível entre botão e dropdown */}
                <div className="absolute left-0 top-full h-3 w-full" />

                <div
                  className={`absolute left-1/2 top-[calc(100%+10px)] w-[330px] -translate-x-1/2 transition-all duration-200 ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f362b]/98 p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
                    {/* Linha dourada superior */}
                    <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#b69857]/70 to-transparent" />

                    {/* Seta superior */}
                    <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-[#0f362b]" />

                    <div className="relative space-y-1">
                      {link.children?.map((child) => {
                        const Icon = child.icon;

                        return (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={closeAllMenus}
                            className="group/item flex items-center gap-3.5 rounded-xl px-3.5 py-3.5 transition-all duration-200 hover:bg-white/[0.075]"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#b69857]/20 bg-[#b69857]/10 text-[#d3b66f] transition-all duration-200 group-hover/item:border-[#b69857]/40 group-hover/item:bg-[#b69857]/15">
                              <Icon size={18} strokeWidth={1.9} />
                            </div>

                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-white">
                                {child.label}
                              </div>

                              <div className="mt-0.5 text-xs leading-relaxed text-white/55">
                                {child.description}
                              </div>
                            </div>

                            <span className="ml-auto translate-x-1 text-lg text-[#d3b66f] opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100">
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

          {/* CTA desktop */}
          <a
            href="#contato"
            onClick={closeAllMenus}
            className="ml-4 whitespace-nowrap rounded-full border border-[#c9a85e]/30 bg-[#aa8b4d] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b99a59] hover:shadow-[0_14px_35px_rgba(0,0,0,0.24)]"
          >
            Agendar uma Conversa
          </a>
        </div>

        {/* Versão intermediária */}
        <div className="hidden items-center gap-3 lg:flex xl:hidden">
          <a
            href="#contato"
            onClick={closeAllMenus}
            className="whitespace-nowrap rounded-full bg-[#aa8b4d] px-5 py-2.5 text-sm font-bold text-white"
          >
            Agendar Conversa
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
            aria-label="Abrir menu"
          >
            <Menu size={23} />
          </button>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu size={23} />
        </button>
      </div>

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeAllMenus}
      />

      {/* Menu mobile lateral */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(88vw,390px)] flex-col bg-[#0e352a] shadow-[-25px_0_70px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[82px] items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Essência"
              className="h-10 w-10 rounded-full object-cover ring-1 ring-[#b69857]/30"
            />

            <div>
              <div className="font-heading text-lg font-semibold text-white">
                Essência
              </div>

              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Gestão Psicossocial
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={closeAllMenus}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

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
                    className="flex min-h-12 items-center rounded-xl px-4 text-[15px] font-semibold text-white/85 transition-colors hover:bg-white/8 hover:text-white"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <div
                  key={link.label}
                  className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.025]"
                >
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(link.label)}
                    aria-expanded={isOpen}
                    className="flex min-h-12 w-full items-center justify-between px-4 text-left text-[15px] font-semibold text-white/90"
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
                      <div className="space-y-1 border-t border-white/5 p-2">
                        {link.children?.map((child) => {
                          const Icon = child.icon;

                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={closeAllMenus}
                              className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-white/[0.07]"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b69857]/10 text-[#d3b66f]">
                                <Icon size={17} />
                              </div>

                              <div>
                                <div className="text-sm font-semibold text-white">
                                  {child.label}
                                </div>

                                <div className="mt-0.5 text-[11px] leading-relaxed text-white/50">
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
            className="mt-7 flex min-h-13 items-center justify-center rounded-full bg-[#aa8b4d] px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#b99a59]"
          >
            Agendar uma Conversa
          </a>

          <p className="mt-5 text-center text-xs leading-relaxed text-white/40">
            Gestão estratégica de riscos psicossociais para ambientes de
            trabalho mais seguros e saudáveis.
          </p>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
