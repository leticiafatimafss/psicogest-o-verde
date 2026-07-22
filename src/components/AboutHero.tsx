import React from "react";

const AboutHero = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[linear-gradient(135deg,#0f2d22_0%,#174734_45%,#1f6a48_100%)]">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-xs md:text-sm text-white/70 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Conheça a Essência Gestão Psicossocial
          </div>

          {/* Título */}
          <h1 className="mt-6 font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.05] tracking-tight">
            Pessoas no centro.
            <br />
            <span className="gold-gradient-hero">
              Organizações mais humanas.
            </span>
          </h1>

          {/* Texto */}
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed">
            A Essência Gestão Psicossocial nasceu com o propósito de transformar
            a forma como empresas cuidam da saúde mental de seus colaboradores,
            oferecendo soluções estratégicas, humanizadas e alinhadas às
            exigências da NR-01.
          </p>

          {/* Valores */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
              Ética
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
              Ciência
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
              Confidencialidade
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
              Bem-estar
            </span>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
