import { ArrowRight } from "lucide-react";

const highlights = [
  "Atuação prática",
  "Foco em conformidade",
  "Aplicação real na empresa",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)]">
      {/* Glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.10),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "44px 44px" }} />

      <div className="absolute top-24 right-[8%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-16 left-[6%] h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2 text-sm text-white/75 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            NR-01 e gestão de riscos psicossociais
          </div>

          <h1 className="mt-8 font-heading text-4xl md:text-6xl lg:text-[4.4rem] font-bold text-white leading-[1.02] tracking-tight max-w-5xl mx-auto">
            Reduza o risco de multa.
            <br />
            <span className="gold-gradient-text">Ganhe controle e segurança na sua empresa.</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Adequação à NR-01 com método, clareza e segurança.
            <br className="hidden md:block" />
            Sem improviso. Sem exposição desnecessária.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Solicitar diagnóstico
              <ArrowRight size={18} />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Como funciona
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-8 text-sm md:text-base text-white/65">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

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
