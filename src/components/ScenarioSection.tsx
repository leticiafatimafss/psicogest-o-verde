import { TrendingDown, Brain, AlertTriangle, Scale } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  { icon: TrendingDown, title: "Aumento dos Afastamentos", desc: "Crescimento dos afastamentos por saúde mental, elevando custos com substituições e turnover." },
  { icon: Brain, title: "Sobrecarga e Pressão", desc: "Equipes pressionadas, com alta demanda e dificuldade na gestão emocional no trabalho." },
  { icon: AlertTriangle, title: "Falta de Estrutura", desc: "Ausência de processos para identificar e gerenciar riscos psicossociais de forma preventiva." },
  { icon: Scale, title: "Riscos Legais", desc: "A NR-01 exige gestão dos riscos psicossociais. O descumprimento gera multas e passivos trabalhistas." },
];

const ScenarioSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="cenario" className="py-28 bg-green-light relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blob-2 -translate-x-1/3" />

      <div ref={ref} className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">O cenário atual</span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Por que sua empresa <span className="italic gold-gradient-text">precisa agir agora?</span>
          </h2>
          <p className="reveal reveal-delay-2 text-muted-foreground mt-6 text-lg leading-relaxed font-light">
            Ignorar a saúde mental dos colaboradores custa caro — financeiramente, juridicamente e em produtividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={p.title} className={`reveal reveal-delay-${i + 1} flex gap-5 bg-background rounded-2xl p-7 card-modern border border-border/50`}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <p.icon className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
