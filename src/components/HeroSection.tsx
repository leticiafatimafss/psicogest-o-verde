import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)]">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="container relative z-10 pt-24 pb-14">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs md:text-sm font-medium tracking-wide text-white/80">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Especialistas em Saúde Mental Corporativa
          </div>

          {/* Headline */}
          <h1 className="mt-8 font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            Diagnóstico, treinamento
            <br />
            <span className="gold-gradient-hero">
              e consultoria para empresas mais saudáveis.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-white/80">
            Desenvolvemos soluções que fortalecem lideranças, aumentam o
            engajamento das equipes e ajudam empresas a reduzir riscos,
            melhorar resultados e construir uma cultura organizacional
            mais forte.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Falar com um especialista
              <ArrowRight size={18} />
            </a>

            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Conheça nossas soluções
            </a>

          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60 tracking-wide">
            <span>Diagnóstico Organizacional</span>
            <span>•</span>
            <span>Treinamentos</span>
            <span>•</span>
            <span>Consultoria</span>
            <span>•</span>
            <span>Gestão dos Riscos Psicossociais</span>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;
