import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[80svh] items-center overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)] md:min-h-[85vh]"
    >
      {/* Efeitos de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="container relative z-10 pb-12 pt-28 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="inline-flex max-w-[290px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-medium leading-relaxed tracking-wide text-white/80 backdrop-blur-sm md:max-w-none md:px-5 md:text-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" />

            <span className="md:hidden">
              Especialistas em Saúde Mental Corporativa
            </span>

            <span className="hidden md:inline">
              Especialistas em Saúde Mental Corporativa
            </span>
          </div>

          {/* Título mobile */}
          <h1 className="mt-6 font-heading text-[2rem] font-bold leading-[1.08] tracking-tight text-white md:hidden">
            Diagnóstico, treinamento
            <span className="gold-gradient-hero block">
              e consultoria em saúde mental corporativa.
            </span>
          </h1>

          {/* Título desktop — permanece igual */}
          <h1 className="mt-8 hidden font-heading font-bold leading-[1.06] tracking-tight text-white md:block md:text-6xl lg:text-7xl">
            Diagnóstico, treinamento
            <br />

            <span className="gold-gradient-hero">
              e consultoria para empresas mais saudáveis.
            </span>
          </h1>

          {/* Descrição mobile */}
          <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-white/75 md:hidden">
            Soluções para fortalecer lideranças, equipes e resultados.
          </p>

          {/* Descrição desktop — permanece igual */}
          <p className="mx-auto mt-8 hidden max-w-3xl text-xl leading-relaxed text-white/80 md:block">
            Desenvolvemos soluções que fortalecem lideranças, aumentam o
            engajamento das equipes e ajudam empresas a reduzir riscos,
            melhorar resultados e construir uma cultura organizacional mais
            forte.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-10 md:gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl md:px-8 md:py-4 md:text-base"
            >
              <span className="md:hidden">Falar com especialista</span>

              <span className="hidden md:inline">
                Falar com um especialista
              </span>

              <ArrowRight size={18} />
            </a>

            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 md:px-8 md:py-4 md:text-base"
            >
              <span className="md:hidden">Ver soluções</span>

              <span className="hidden md:inline">
                Conheça nossas soluções
              </span>
            </a>
          </div>

          {/* Serviços mobile */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs leading-relaxed text-white/60 md:hidden">
            <span>Diagnóstico</span>
            <span className="text-[#C7A56A]">•</span>
            <span>Treinamentos</span>
            <span className="text-[#C7A56A]">•</span>
            <span>Consultoria</span>
          </div>

          {/* Serviços desktop — permanecem iguais */}
          <div className="mt-9 hidden flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm tracking-wide text-white/60 md:flex">
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
    </section>
  );
};

export default HeroSection;
