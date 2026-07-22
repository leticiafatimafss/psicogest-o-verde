const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-24 bg-background">
      <div className="container">

        <div className="relative overflow-hidden rounded-[2rem] border border-border/50 shadow-sm">

          {/* Imagem */}

          <div className="relative h-[420px] md:h-[560px]">

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Equipe em reunião"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

            {/* Conteúdo */}

            <div className="absolute inset-0 flex items-center">

              <div className="max-w-2xl px-8 md:px-16">

                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white mb-6">
                  Quem somos
                </span>

                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Essência
                  <br />
                  <span className="gold-gradient-text">
                    Gestão Psicossocial
                  </span>
                </h2>

                <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                  A Essência Gestão Psicossocial é uma consultoria especializada
                  em saúde mental no trabalho, gestão de riscos psicossociais e
                  adequação à NR-01.
                </p>

                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mt-5">
                  Atuamos ao lado de empresas, desenvolvendo soluções técnicas,
                  estratégicas e humanizadas para promover ambientes de trabalho
                  mais saudáveis, seguros e em conformidade com a legislação.
                </p>

                                <a
                  href="/sobre"
                  className="inline-flex items-center gap-2 mt-8 rounded-xl bg-primary px-7 py-3 text-sm md:text-base font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300"
                >
                  Conheça nossa história
                  <span className="text-lg">→</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
