import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-light rounded-full -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Por que isso importa
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Ignorar os riscos psicossociais <span className="gold-gradient-text">custa caro</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
            Sem estrutura adequada, a empresa aumenta sua exposição jurídica, regulatória e operacional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-white rounded-[28px] border border-border/60 shadow-sm p-6 md:p-8">
            <ul className="space-y-4">
              {[
                "Mais risco de multa, passivo e exposição jurídica.",
                "Falta de clareza sobre como atender à NR-01 com método.",
                "Impactos reais na liderança, no ambiente e na operação.",
              ].map((item, i) => (
                <li
                  key={item}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-3 text-muted-foreground text-base md:text-lg leading-relaxed`}
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
