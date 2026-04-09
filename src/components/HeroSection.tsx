import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 blob animate-float" />
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-primary-foreground/5 blob-2 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-accent/5 animate-float" style={{ animationDelay: "4s" }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 border border-primary-foreground/15 rounded-full px-5 py-2 text-sm text-primary-foreground/70 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Consultoria em gestão psicossocial corporativa
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.15] tracking-tight">
            Proteja sua empresa.{" "}
            <span className="gold-gradient-text italic">Cuide das suas pessoas.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-xl mx-auto font-body leading-relaxed font-light">
            Adequação à NR-01, gestão de riscos psicossociais e promoção da saúde mental com foco em resultados mensuráveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Agende uma reunião
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-medium text-base hover:bg-primary-foreground/5 transition-all"
            >
              Conheça nossos serviços
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-16 pt-12">
            {[
              { value: "100%", label: "alinhado à NR-01" },
              { value: "5 etapas", label: "metodologia estruturada" },
              { value: "360°", label: "gestão contínua" },
            ].map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading">{s.value}</div>
                <div className="text-xs text-primary-foreground/40 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
