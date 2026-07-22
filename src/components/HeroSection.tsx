import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)]">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="container relative z-10 pt-24 pb-14">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-xs md:text-sm text-white/70 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            NR-01 • Gestão Psicossocial
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-heading text-[2.2rem] sm:text-4xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.05] tracking-tight">
  A NR-01 mudou.
  <br />
  <span className="gold-gradient-hero">
    Sua empresa está pronta?
  </span>
</h1>
          
          {/* Subheadline DESKTOP */}
         <p className="mt-8 max-w-4xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed">
  Apoiamos organizações na identificação, avaliação e gestão dos riscos psicossociais, garantindo conformidade legal e ambientes de trabalho mais saudáveis.
</p>
         
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-8">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-xl font-semibold text-sm md:text-base hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Solicitar diagnóstico
              <ArrowRight size={16} />
            </a>

           <a
  href="#MetodoSection"
  className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 text-white px-7 py-3 rounded-xl font-semibold text-sm md:text-base hover:bg-white/10 transition-all"
>
  Método Essência
</a>

          {/* Prova leve */}
          <div className="pt-6 text-xs md:text-sm text-white/60">
            Método estruturado • Redução de riscos • Aplicação prática
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
