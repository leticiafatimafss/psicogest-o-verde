import { ShieldAlert, BadgeCheck, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  "Riscos psicossociais ficam difusos e sem priorização clara.",
  "A liderança reage aos problemas sem um direcionamento estruturado.",
  "A empresa amplia exposição trabalhista, operacional e reputacional.",
];

const gains = [
  "Mais clareza para identificar, organizar e acompanhar riscos.",
  "Mais previsibilidade para agir com método e prevenção.",
  "Mais segurança na gestão e menos vulnerabilidade desnecessária.",
];

const NR01Section = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="nr01"
      className="relative py-16 md:py-20 bg-[hsl(120_20%_97%)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div ref={ref} className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* topo */}
          <div className="reveal max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-accent/15 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
              NR-01 • O que muda na prática
            </span>

            <h2 className="mt-5 font-heading text-3xl md:text-5xl font-bold leading-[1.02] tracking-tight text-foreground">
              A nova NR-01 exige mais do que atenção.
              <br />
              <span className="gold-gradient-text">Ela exige estrutura.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Empresas passam a precisar identificar e gerenciar riscos
              psicossociais com mais clareza, prevenção e responsabilidade na gestão.
            </p>
          </div>

          {/* painel principal */}
          <div className="reveal reveal-delay-1 mt-10 rounded-[30px] border border-border/50 bg-white/80 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* lado esquerdo */}
              <div className="p-7 md:p-9 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(248,250,248,0.95)_100%)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                    <ShieldAlert size={19} className="text-red-500" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/65">
                    Sem gestão estruturada
                  </span>
                </div>

                <h3 className="font-heading text-2xl md:text-[2rem] font-semibold leading-tight text-foreground">
                  O risco continua existindo —
                  <span className="block text-muted-foreground">
                    só fica menos visível.
                  </span>
                </h3>

                <div className="mt-6 space-y-4">
                  {painPoints.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-red-400 shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* lado direito */}
              <div className="p-7 md:p-9 lg:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
                    <BadgeCheck size={19} className="text-primary-foreground" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Com estrutura de gestão
                  </span>
                </div>

                <h3 className="font-heading text-2xl md:text-[2rem] font-semibold leading-tight text-foreground">
                  Mais método, mais controle,
                  <span className="block gold-gradient-text">
                    menos exposição.
                  </span>
                </h3>

                <div className="mt-6 space-y-4">
                  {gains.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[24px] border border-accent/10 bg-[linear-gradient(135deg,rgba(212,175,55,0.08)_0%,rgba(212,175,55,0.03)_100%)] px-5 py-4">
                  <p className="text-sm md:text-base leading-relaxed text-foreground">
                    Mais do que atender uma exigência, a empresa passa a operar
                    com prevenção, critério e maior solidez interna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* rodapé compacto */}
          <div className="reveal reveal-delay-2 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 max-w-5xl">
            <p className="font-heading text-xl md:text-2xl leading-tight text-foreground max-w-2xl">
              A NR-01 bem conduzida reduz improviso e fortalece a tomada de decisão.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm md:text-base font-semibold text-accent-foreground shadow-md hover:shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              Falar com especialista
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NR01Section;
