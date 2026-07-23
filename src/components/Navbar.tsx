import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-essencia.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#servicos" },
  { label: "NR-01", href: "#nr01" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Essência Gestão Psicossocial"
            className="h-11 w-11 rounded-full"
          />
          <div className="flex flex-col">
            <span
              className={`font-heading text-lg font-semibold transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
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
        </a>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contato"
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Agendar conversa
          </a>
        </div>

        {/* Menu Mobile Button */}
        <button
          className={`lg:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border px-6 pb-6 pt-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-foreground hover:text-primary py-1"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Mobile */}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="block bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
          >
            Agendar conversa
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
