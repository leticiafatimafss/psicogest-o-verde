import logo from "@/assets/logo-essencia.png";

const Footer = () => (
  <footer className="hero-bg py-10">
    <div className="container">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Essência Psi"
            className="h-8 w-8 rounded-full"
          />

          <span className="font-heading font-semibold text-primary-foreground">
            Essência Psi
          </span>

          <span className="text-sm text-primary-foreground/30">
            — Gestão Psicossocial
          </span>
        </div>

        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Essência Psi. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
