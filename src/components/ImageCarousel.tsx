import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90",

    category: "Diagnóstico e Implementação da NR-1",
    title: "Transformamos a NR-1 em um processo simples e estratégico",
    text: "Realizamos o diagnóstico dos riscos psicossociais e apoiamos a implementação de ações práticas para fortalecer a saúde mental e a conformidade da empresa.",

    categoryMobile: "NR-1",
    titleMobile: "NR-1 simples e estratégica",
    textMobile:
      "Diagnóstico e ações práticas para reduzir riscos psicossociais.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=90",

    category: "Treinamentos Corporativos",
    title: "Equipes mais preparadas e engajadas",
    text: "Desenvolvemos treinamentos, palestras e programas que fortalecem as relações, ampliam a conscientização e promovem ambientes mais saudáveis.",

    categoryMobile: "Treinamentos",
    titleMobile: "Equipes mais preparadas",
    textMobile:
      "Treinamentos e palestras para fortalecer equipes e relações.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90",

    category: "Desenvolvimento de Lideranças",
    title: "Líderes preparados para transformar equipes",
    text: "Capacitamos gestores para prevenir riscos, conduzir situações delicadas e desenvolver equipes com mais segurança, confiança e resultados.",

    categoryMobile: "Lideranças",
    titleMobile: "Líderes que transformam equipes",
    textMobile:
      "Capacitação para liderar com mais segurança e confiança.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=90",

    category: "Consultoria Estratégica",
    title: "Estratégia que se transforma em ação",
    text: "Apoiamos a empresa na definição de prioridades, implantação das ações e construção de uma cultura organizacional mais forte.",

    categoryMobile: "Consultoria",
    titleMobile: "Estratégia que gera ação",
    textMobile:
      "Apoio para definir prioridades e implementar soluções.",
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

  const activeSlide = slides[current];

  return (
    <section className="relative border-0 bg-background pb-10 pt-4 md:pb-24 md:pt-10">
      <div className="container">

        <div
          className="relative overflow-hidden rounded-[1.5rem] border-0 shadow-[0_14px_40px_rgba(15,45,34,0.12)] md:rounded-[2rem] md:shadow-[0_20px_60px_rgba(15,45,34,0.14)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Menor no mobile; altura original no desktop */}
          <div className="relative h-[350px] md:h-[560px]">

            <img
              key={activeSlide.image}
              src={activeSlide.image}
              alt={activeSlide.title}
              className="h-full w-full animate-[fadeIn_900ms_ease-in-out] object-cover"
            />

            {/* Escurecimento */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/15" />

            <div className="absolute inset-0 flex items-end">
              <div className="w-full max-w-3xl p-5 pb-14 md:p-14">

                {/* CATEGORIA MOBILE */}
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md md:hidden">
                  {activeSlide.categoryMobile}
                </span>

                {/* CATEGORIA DESKTOP */}
                <span className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md md:inline-flex">
                  {activeSlide.category}
                </span>

                {/* TÍTULO MOBILE */}
                <h2 className="mt-3 font-heading text-[1.65rem] font-bold leading-[1.1] text-white md:hidden">
                  {activeSlide.titleMobile}
                </h2>

                {/* TÍTULO DESKTOP */}
                <h2 className="mt-5 hidden max-w-3xl font-heading font-bold leading-tight text-white md:block md:text-5xl lg:text-6xl">
                  {activeSlide.title}
                </h2>

                {/* TEXTO MOBILE */}
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80 md:hidden">
                  {activeSlide.textMobile}
                </p>

                {/* TEXTO DESKTOP */}
                <p className="mt-4 hidden max-w-2xl leading-relaxed text-white/85 md:block md:text-lg">
                  {activeSlide.text}
                </p>

              </div>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-5 right-5 flex items-center gap-1.5 md:bottom-8 md:right-8 md:gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir para o slide ${index + 1}`}
                  aria-current={current === index ? "true" : undefined}
                  className={`rounded-full transition-all duration-500 ${
                    current === index
                      ? "h-2.5 w-8 bg-[#C7A56A] md:h-3 md:w-10"
                      : "h-2.5 w-2.5 bg-white/55 hover:bg-white md:h-3 md:w-3"
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
