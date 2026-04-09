import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    title: "Diagnóstico da exposição psicossocial",
    text: "Identificamos riscos, fragilidades e pontos de atenção com olhar técnico e estratégico.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    title: "Apoio à liderança e áreas-chave",
    text: "Fortalecemos a atuação das lideranças para lidar com o tema com mais preparo e segurança.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    title: "Estruturação da adequação à NR-01",
    text: "Transformamos exigência em processo, direcionamento e acompanhamento prático.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    title: "Mais controle, menos exposição",
    text: "Sua empresa avança para uma gestão mais preventiva, organizada e segura.",
  },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/50 shadow-sm">
          <div className="relative h-[420px] md:h-[520px]">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-2xl">
                <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white/70 mb-3">
                  Essência Psi
                </span>

                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
                  {slides[current].title}
                </h3>

                <p className="text-white/85 text-sm md:text-lg leading-relaxed max-w-xl">
                  {slides[current].text}
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
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
