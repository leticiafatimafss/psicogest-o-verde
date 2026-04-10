import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const NR01Section = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="nr01"
      className="relative py-14 md:py-18 bg-[hsl(120_18%_97%)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-0 w-64 h-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div ref={ref} className="container relative">
        <div className="max-w-6xl mx-auto rounded-[28px] border border-border/50 bg-white/80 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* lado esquerdo */}
            <div className="p-6 md:p-8 lg:p-10">
              <span className="inline-flex items-center rounded-full border border-accent/15 bg-accent/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                NR-01 • O que muda
              </span>

              <h2 className="mt-4 font-heading text-2xl md:text-4xl font-bold leading-[1.02] tracking-tight text-foreground max-w-2xl">
                A nova NR-01 exige gestão dos
                <span className="gold-gradient-text"> riscos psicossociais.</span>
              </h2>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl">
                Na prática, isso significa sair do improviso e estruturar identificação,
                priorização e acompanhamento dos fatores que impactam saúde mental,
                liderança e ambiente de trabalho.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground">
                  Mais clareza
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground">
                  Menos exposição
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground">
                  Mais prevenção
                </span>
              </div>
            </div>

            {/* lado direito */}
            <div className="border-t lg:border-t-0 lg:border-l border-border/50 bg-[linear-gradient(180deg,rgba(249,250,249,0.95)_0%,rgba(255,255,255,0.98)_100%)] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Sem estrutura
                </p>

                <div className="mt-4 space-y-3">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    Riscos ficam difusos, decisões seguem reativas e a empresa amplia vulnerabilidades desnecessárias.
                  </p>
                </div>

                <div className="my-6 h-px w-full bg-border/70" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Com gestão estruturada
                </p>

                <div className="mt-4 space-y-3">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    A empresa ganha método, previsibilidade e mais segurança para lidar com o tema de forma madura.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="font-heading text-lg md:text-xl leading-tight text-foreground max-w-sm">
                  Mais estrutura. Menos exposição.
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:shadow-lg hover:scale-[1.02] transition-all whitespace-nowrap"
                >
                  Falar com especialista
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NR01Section;
