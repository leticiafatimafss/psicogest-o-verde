import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const NR01Section = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="nr01"
      className="relative py-14 md:py-20 bg-[hsl(120_18%_97%)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-0 w-64 h-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div ref={ref} className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* topo */}
          <div className="reveal text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-accent/15 bg-white/70 px-4 py-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
              NR-01 • O que muda na prática
            </span>

            <h2 className="mt-5 font-heading text-3xl md:text-5xl font-bold leading-[1.02] tracking-tight text-foreground">
              A nova NR-01 exige
              <span className="gold-gradient-text"> estrutura de gestão.</span>
            </h2>

            <p className="mt-4 text-sm md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Não é só uma exigência formal. É a necessidade de identificar,
              organizar e acompanhar riscos psicossociais com mais clareza,
              prevenção e responsabilidade.
            </p>
          </div>

          {/* conteúdo sem cards no mobile */}
          <div className="reveal reveal-delay-1 mt-10 md:mt-14">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="pb-6 md:pb-0 border-b md:border-b-0 border-border/60">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Sem estrutura
                </p>

                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-semibold leading-tight text-foreground">
                  O risco continua existindo,
                  <span className="block text-muted-foreground">
                    só fica menos visível.
                  </span>
                </h3>

                <div className="mt-5 space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    A empresa reage aos problemas sem critério claro, com mais
                    improviso e menos previsibilidade.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    Isso amplia desgaste interno, vulnerabilidades jurídicas e
                    decisões pouco sustentáveis.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Com gestão estruturada
                </p>

                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-semibold leading-tight text-foreground">
                  Mais método, mais controle,
                  <span className="block gold-gradient-text">
                    menos exposição.
                  </span>
                </h3>

                <div className="mt-5 space-y-4">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    Os riscos passam a ser identificados, priorizados e
                    acompanhados com mais clareza.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    A liderança ganha direção, e a empresa atua com prevenção em
                    vez de apenas reagir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* faixa final */}
          <div className="reveal reveal-delay-2 mt-10 md:mt-14 pt-6 border-t border-border/60">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-heading text-xl md:text-3xl leading-tight text-foreground">
                  Mais do que atender uma norma,
                  <span className="gold-gradient-text">
                    {" "}a empresa ganha solidez.
                  </span>
                </p>

                <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                  Clareza para agir, mais segurança na gestão e menos exposição
                  desnecessária ao longo do tempo.
                </p>
              </div>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm md:text-base font-semibold text-accent-foreground hover:shadow-lg hover:scale-[1.02] transition-all whitespace-nowrap"
              >
                Falar com especialista
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NR01Section;
