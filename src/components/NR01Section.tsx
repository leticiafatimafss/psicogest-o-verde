import { AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const NR01Section = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="nr01"
      className="relative py-20 md:py-28 bg-[hsl(120_18%_97%)] overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div ref={ref} className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="reveal inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            NR-01 • O que muda na prática
          </span>

          <h2 className="reveal reveal-delay-1 mt-5 font-heading text-3xl md:text-5xl lg:text-[4rem] font-bold text-foreground leading-[1.05] tracking-tight">
            Mais estrutura.{" "}
            <span className="gold-gradient-text">Menos exposição.</span>
          </h2>

          <p className="reveal reveal-delay-2 mt-6 text-lg md:text-[1.65rem] text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A nova NR-01 passou a exigir que empresas identifiquem e gerenciem
            riscos psicossociais no ambiente de trabalho, com mais prevenção,
            clareza e responsabilidade na gestão.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-14 md:mt-16 max-w-6xl mx-auto rounded-[32px] border border-border/50 bg-white/90 backdrop-blur-sm shadow-[0_18px_50px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(248,250,248,0.95)_100%)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100">
                  <AlertTriangle size={20} className="text-red-500" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
                  Sem estrutura
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                Quando a empresa não trata esse tema de forma estruturada
              </h3>

              <div className="mt-6 space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Os riscos psicossociais seguem existindo, mas de forma difusa,
                  sem direcionamento claro, priorização ou acompanhamento.
                </p>
                <p>
                  Isso pode aumentar vulnerabilidades jurídicas, afastamentos,
                  conflitos internos, desgaste da liderança e decisões no
                  improviso.
                </p>
                <p>
                  O problema não é apenas a exigência normativa — é a falta de
                  método para lidar com ela dentro da operação.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:p-12 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(250,252,250,1)_100%)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
                  <ShieldCheck size={20} className="text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Com gestão estruturada
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                Com a NR-01 bem conduzida, a empresa ganha mais controle e previsibilidade
              </h3>

              <div className="mt-6 space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Os riscos passam a ser identificados com mais clareza,
                  organizados de forma prática e acompanhados com direção.
                </p>
                <p>
                  A liderança atua com mais segurança, a empresa reduz exposição
                  desnecessária e a gestão deixa de ser apenas reativa.
                </p>
                <p>
                  Mais do que atender uma exigência, a organização passa a operar
                  com prevenção, método e maior solidez interna.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-4 max-w-5xl mx-auto mt-10 md:mt-12 text-center">
          <p className="font-heading text-2xl md:text-4xl leading-tight text-foreground">
            A nova NR-01 não pede apenas atenção.
            <br />
            Ela exige <span className="gold-gradient-text">estrutura de gestão.</span>
          </p>

          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quando esse processo é bem conduzido, a empresa sai da reação e passa
            a atuar com mais clareza, prevenção e segurança.
          </p>

          <div className="mt-8">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Falar com especialista
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NR01Section;
