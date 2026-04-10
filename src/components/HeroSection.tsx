import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2 text-sm text-white/70 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Saúde Mental Corporativa • NR-01
          </div>

          {/* Título */}
          <h1 className="mt-8 font-heading text-4xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.05] tracking-tight">
            Gestão de Riscos Psicossociais
            <br />
            <span className="gold-gradient-hero">nas Organizações</span>
          </h1>

          {/* Subtexto */}
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A Essência Gestão Psicossocial apoia empresas na identificação,
            gestão e prevenção de riscos psicossociais no ambiente de trabalho,
            alinhada às exigências da NR-01.
          </p>

          <p className="mt-4 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Atuamos com estratégias estruturadas que contribuem para a redução
            de afastamentos, melhoria do clima organizacional e fortalecimento
            da saúde mental nas equipes.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Agendar conversa
              <ArrowRight size={18} />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>

      {/* Wave */}
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
