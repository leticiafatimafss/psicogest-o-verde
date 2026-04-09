import logo from "@/assets/logo-essencia.png";

const Footer = () => (
  <footer className="hero-bg py-10">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Essência Psi" className="h-8 w-8 rounded-full" />
          <span className="font-heading text-primary-foreground font-semibold">Essência Psi</span>
          <span className="text-primary-foreground/30 text-sm">— Gestão Psicossocial</span>
        </div>
        <p className="text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} Essência Psi. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
