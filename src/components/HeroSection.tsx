import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.10),transparent_30%)]" />

      <div className="container relative z-10 py-24 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2 text-sm text-white/75 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Saúde Mental Corporativa • NR-01
            </div>

            <h1 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              Gestão de Riscos
              <br />
              <span className="gold-gradient-hero">Psicossociais</span>
              <br />
              nas Organizações
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
              A Essência Gestão Psicossocial apoia empresas na identificação,
              gestão e prevenção de riscos psicossociais no ambiente de
              trabalho, alinhada às exigências da NR-01.
            </p>

            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed max-w-xl">
              Estratégias estruturadas para reduzir afastamentos, melhorar o
              clima organizacional e fortalecer a saúde mental nas equipes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold text-base hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Agendar conversa
                <ArrowRight size={18} />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 text-white px-7 py-3.5 rounded-xl font-medium text-base hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Conhecer serviços
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-[32px]" />
            <img
              src={heroImg}
              alt="Gestão psicossocial corporativa"
              className="relative w-full h-[360px] md:h-[460px] object-cover rounded-[28px] shadow-2xl border border-white/10"
            />
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
