import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90",
    category: "Diagnóstico e Implementação da NR-1",
    title: "Transformamos a NR-1 em um processo simples e estratégico",
    text: "Realizamos o diagnóstico dos riscos psicossociais, apoiamos a implementação da NR-1 e estruturamos ações práticas para fortalecer a saúde mental e a conformidade da empresa.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=90",
    category: "Treinamentos Corporativos",
    title: "Equipes mais preparadas e engajadas",
    text: "Desenvolvemos treinamentos, palestras e programas personalizados que fortalecem a cultura organizacional, aumentam o engajamento e promovem ambientes de trabalho mais saudáveis.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90",
    category: "Desenvolvimento de Lideranças",
    title: "Líderes preparados para transformar equipes",
    text: "Capacitamos gestores para identificar riscos, conduzir conversas difíceis, fortalecer a segurança psicológica e desenvolver equipes de alta performance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=90",
    category: "Consultoria Estratégica",
    title: "Consultoria que acompanha a evolução da empresa",
    text: "Apoiamos empresas na implantação de planos de ação, programas contínuos de saúde mental, desenvolvimento organizacional e melhoria contínua dos resultados.",
  },
];

const AUTO_PLAY = 8000; // 8 segundos

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-border/30 shadow-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-[430px] md:h-[560px]">

            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="h-full w-full object-cover transition-all duration-[1800ms] ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

            {/* Conteúdo */}
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-3xl p-8 md:p-14">

                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  {slides[current].category}
                </span>

                <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
                  {slides[current].title}
                </h2>

                <p className="mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-white/90">
                  {slides[current].text}
                </p>

              </div>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Slide ${index + 1}`}
                  className={`rounded-full transition-all duration-500 ${
                    current === index
                      ? "w-10 h-3 bg-accent"
                      : "w-3 h-3 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
