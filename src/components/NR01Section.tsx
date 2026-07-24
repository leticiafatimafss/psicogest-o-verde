import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const NR01Section = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="nr01"
      className="relative overflow-hidden bg-[hsl(120_18%_97%)] py-9 md:py-20"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -top-16 right-0 h-64 w-64 rounded-full bg-white/70 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      </div>

      <div ref={ref} className="container relative">

        {/* =====================================================
            VERSÃO MOBILE — CURTA E INSTITUCIONAL
        ====================================================== */}
        <div className="reveal mx-auto max-w-md md:hidden">

          <div className="relative overflow-hidden rounded-[24px] border border-accent/15 bg-white px-5 py-6 shadow-[0_14px_40px_rgba(15,45,34,0.08)]">

            {/* Linha superior */}
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-accent via-[#D7BA78] to-accent/30" />

            <div className="flex items-start gap-4">

              {/* Ícone */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <ShieldCheck size={21} strokeWidth={1.9} />

              </div>

              {/* Título */}
              <div className="min-w-0 flex-1">

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  NR-01 na prática
                </span>

                <h2 className="mt-1.5 font-heading text-[1.5rem] font-bold leading-[1.15] text-foreground">
                  A prevenção precisa fazer parte da rotina da empresa.
                </h2>

              </div>

            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mais do que uma ação isolada, é necessário manter organização,
              registros e acompanhamento das medidas adotadas.
            </p>

          </div>

        </div>

        {/* =====================================================
            TABLET E DESKTOP — VERSÃO COMPLETA
        ====================================================== */}
        <div className="mx-auto hidden max-w-5xl md:block">

          {/* Topo */}
          <div className="reveal mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center rounded-full border border-accent/15 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
              NR-01 • O que muda na prática
            </span>

            <h2 className="mt-5 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-foreground">
              A nova NR-01 exige

              <span className="gold-gradient-text">
                {" "}estrutura de gestão.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Não é só uma exigência formal. É a necessidade de identificar,
              organizar e acompanhar riscos psicossociais com mais clareza,
              prevenção e responsabilidade.
            </p>

          </div>

          {/* Conteúdo */}
          <div className="reveal reveal-delay-1 mt-14">

            <div className="grid grid-cols-2 gap-12">

              {/* Sem estrutura */}
              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Sem estrutura
                </p>

                <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground">
                  O risco continua existindo,

                  <span className="block text-muted-foreground">
                    só fica menos visível.
                  </span>
                </h3>

                <div className="mt-5 space-y-4">

                  <p className="text-base leading-relaxed text-muted-foreground">
                    A empresa reage aos problemas sem critério claro, com mais
                    improviso e menos previsibilidade.
                  </p>

                  <p className="text-base leading-relaxed text-muted-foreground">
                    Isso amplia desgaste interno, vulnerabilidades jurídicas e
                    decisões pouco sustentáveis.
                  </p>

                </div>

              </div>

              {/* Com gestão estruturada */}
              <div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Com gestão estruturada
                </p>

                <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground">
                  Mais método, mais controle,

                  <span className="gold-gradient-text block">
                    menos exposição.
                  </span>
                </h3>

                <div className="mt-5 space-y-4">

                  <p className="text-base leading-relaxed text-muted-foreground">
                    Os riscos passam a ser identificados, priorizados e
                    acompanhados com mais clareza.
                  </p>

                  <p className="text-base leading-relaxed text-muted-foreground">
                    A liderança ganha direção, e a empresa atua com prevenção em
                    vez de apenas reagir.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Faixa final */}
          <div className="reveal reveal-delay-2 mt-14 border-t border-border/60 pt-6">

            <div className="flex items-end justify-between gap-6">

              <div className="max-w-2xl">

                <p className="font-heading text-3xl leading-tight text-foreground">
                  Mais do que atender uma norma,

                  <span className="gold-gradient-text">
                    {" "}a empresa ganha solidez.
                  </span>
                </p>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Clareza para agir, mais segurança na gestão e menos exposição
                  desnecessária ao longo do tempo.
                </p>

              </div>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-3 text-base font-semibold text-accent-foreground transition-all hover:scale-[1.02] hover:shadow-lg"
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
