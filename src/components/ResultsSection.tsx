import { TrendingUp, Zap, FolderCheck, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const results = [
  { icon: TrendingUp, title: "Redução de Afastamentos", desc: "Atuação preventiva sobre fatores de risco, reduzindo significativamente os afastamentos por saúde mental." },
  { icon: Zap, title: "Aumento da Produtividade", desc: "Equipes mais saudáveis e engajadas, com redução do presenteísmo e melhoria de performance." },
  { icon: FolderCheck, title: "Gestão Organizada", desc: "Processos estruturados para identificar, acompanhar e gerenciar riscos psicossociais continuamente." },
  { icon: ShieldCheck, title: "Conformidade Legal", desc: "Adequação completa às normas com registro e acompanhamento das ações implementadas." },
];

const ResultsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="resultados" className="py-28 bg-green-light relative overflow-hidden">
      <div className="absolute top-10 right-0 w-48 h-48 bg-accent/5 blob animate-float" />

      <div ref={ref} className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">Resultados Entregues</span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Impactos reais para o <span className="italic gold-gradient-text">seu negócio</span>
          </h2>
          <p className="reveal reveal-delay-2 text-muted-foreground mt-6 text-lg leading-relaxed font-light">
            Entregas estruturadas para gerar resultados mensuráveis, reduzir riscos e fortalecer a cultura organizacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <div key={r.title} className={`reveal reveal-delay-${i + 1} bg-background rounded-2xl p-8 card-modern border border-border/50 text-center group`}>
              <div className="w-16 h-16 rounded-2xl bg-gold-muted flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <r.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="reveal reveal-delay-3 mt-20 max-w-2xl mx-auto text-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-accent/20 font-heading">"</div>
          <p className="font-heading text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
            Cuidar da saúde mental dos colaboradores não é custo — é o investimento mais inteligente que uma empresa pode fazer.
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default ResultsSection;
