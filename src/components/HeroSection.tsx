import { ArrowRight, Shield } from "lucide-react";
import heroImg from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-15" />
      </div>
      <div className="absolute inset-0 hero-bg opacity-90" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 text-sm text-primary-foreground/80">
            <Shield size={16} />
            Consultoria especializada em gestão psicossocial
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Proteja sua empresa.{" "}
            <span className="text-gradient">Cuide das suas pessoas.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto font-body leading-relaxed">
            Gestão de riscos psicossociais, adequação à NR-01 e promoção da saúde mental corporativa com foco em resultados mensuráveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all"
            >
              Agende uma reunião
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 transition-all"
            >
              Conheça nossos serviços
            </a>
          </div>

          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground font-heading">100%</div>
              <div className="text-sm text-primary-foreground/60 mt-1">alinhado à NR-01</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground font-heading">5 etapas</div>
              <div className="text-sm text-primary-foreground/60 mt-1">metodologia estruturada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground font-heading">360°</div>
              <div className="text-sm text-primary-foreground/60 mt-1">gestão contínua</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
