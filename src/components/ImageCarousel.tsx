import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90",
    category: "Diagnóstico e Implementação da NR-1",
    title: "Transformamos a NR-1 em um processo simples e estratégico",
    text: "Realizamos o diagnóstico dos riscos psicossociais e apoiamos a implementação de ações práticas para fortalecer a saúde mental e a conformidade da empresa.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=90",
    category: "Treinamentos Corporativos",
    title: "Equipes mais preparadas e engajadas",
    text: "Desenvolvemos treinamentos, palestras e programas que fortalecem as relações, ampliam a conscientização e promovem ambientes mais saudáveis.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90",
    category: "Desenvolvimento de Lideranças",
    title: "Líderes preparados para transformar equipes",
    text: "Capacitamos gestores para prevenir riscos, conduzir situações delicadas e desenvolver equipes com mais segurança, confiança e resultados.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=90",
    category: "Consultoria Estratégica",
    title: "Estratégia que se transforma em ação",
    text: "Apoiamos a empresa na definição de prioridades, implantação das ações e construção de uma cultura organizacional mais forte.",
  },
];

const AUTO_PLAY_TIME = 8000;

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((previousSlide) => {
        return (previousSlide + 1) % slides.length;
      });
    }, AUTO_PLAY_TIME);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative border-0 bg-background pb-20 pt-8 md:pb-24 md:pt-10">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-[2rem] border-0 shadow-[0_20px_60px_rgba(15,45,34,0.14)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative h-[430px] md:h-[560px]">
            <img
              key={slides[current].image}
              src={slides[current].image}
              alt={slides[current].title}
              className="h-full w-full animate-[fadeIn_900ms_ease-in-out] object-cover"
            />

            {/* Escurecimento para facilitar a leitura */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />

            <div className="absolute inset-0 flex items-end">
              <div className="max-w-3xl p-7 pb-16 sm:p-9 sm:pb-16 md:p-14">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md sm:text-xs">
                  {slides[current].category}
                </span>

                <h2 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {slides[current].title}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                  {slides[current].text}
                </p>
              </div>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 md:bottom-8 md:right-8">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir para o slide ${index + 1}`}
                  aria-current={current === index ? "true" : undefined}
                  className={`rounded-full transition-all duration-500 ${
                    current === index
                      ? "h-3 w-10 bg-[#C7A56A]"
                      : "h-3 w-3 bg-white/55 hover:bg-white"
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
