import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-essencia.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cenário", href: "#cenario" },
  { label: "NR-01", href: "#nr01" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Essência Psi" className="h-11 w-11 rounded-full" />
          <div className="flex flex-col">
            <span className={`font-heading text-lg font-semibold transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Essência Psi
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${scrolled ? "text-muted-foreground" : "text-primary-foreground/50"}`}>
              Gestão Psicossocial
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${scrolled ? "text-foreground" : "text-primary-foreground/80"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Fale Conosco
          </a>
        </div>

        <button className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border px-6 pb-6 pt-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary py-1">
              {link.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="block bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2">
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
