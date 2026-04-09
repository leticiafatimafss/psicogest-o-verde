import { useScrollReveal } from "@/hooks/useScrollReveal";

const results = [
  {
    title: "Mais conformidade",
    desc: "A adequação à NR-01 passa a ter direção, estrutura e acompanhamento.",
  },
  {
    title: "Mais controle",
    desc: "A empresa ganha previsibilidade e reduz decisões no improviso.",
  },
  {
    title: "Menos exposição",
    desc: "Mais clareza, prevenção e respaldo reduzem vulnerabilidades jurídicas.",
  },
];

const ResultsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="resultados" className="py-16 md:py-24 bg-green-light relative overflow-hidden">
      <div className="absolute top-10 right-0 w-48 h-48 bg-accent/5 blob animate-float" />

      <div ref={ref} className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            O que muda na prática
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Mais estrutura. <span className="gold-gradient-text">Menos exposição.</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A empresa deixa de apenas reagir e passa a atuar com mais prevenção, clareza e segurança.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-background border border-border/60 rounded-[28px] px-6 py-8 md:px-10 md:py-10 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {results.map((item, i) => (
                <div key={item.title} className={`reveal reveal-delay-${i + 1} relative`}>
                  <span className="block text-sm font-semibold text-accent mb-3">
                    0{i + 1}
                  </span>

                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-10 md:mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="font-heading text-lg md:text-2xl text-foreground leading-relaxed">
              Mais do que atender uma exigência, sua empresa passa a ter
              <span className="gold-gradient-text"> método, prevenção e segurança</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
