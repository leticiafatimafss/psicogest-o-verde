import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)]">
      {/* Efeitos de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="container relative z-10 pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm md:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Especialistas em Saúde Mental Corporativa
          </div>

          {/* Título */}
          <h1 className="mt-8 font-heading text-[2.5rem] font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Diagnóstico, treinamento
            <br />

            <span className="gold-gradient-hero">
              e consultoria para empresas mais saudáveis.
            </span>
          </h1>

          {/* Descrição */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Desenvolvemos soluções que fortalecem lideranças, aumentam o
            engajamento das equipes e ajudam empresas a reduzir riscos,
            melhorar resultados e construir uma cultura organizacional mais
            forte.
          </p>

          {/* Botões */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
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

          {/* Serviços */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm tracking-wide text-white/60">
            <span>Diagnóstico Organizacional</span>

            <span className="text-[#C7A56A]">•</span>

            <span>Treinamentos</span>

            <span className="text-[#C7A56A]">•</span>

            <span>Consultoria</span>

            <span className="text-[#C7A56A]">•</span>

            <span>Gestão dos Riscos Psicossociais</span>
          </div>
        </div>
      </div>

      {/* Não há mais divisor em SVG aqui */}
    </section>
  );
};

export default HeroSection;
