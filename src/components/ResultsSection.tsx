import { TrendingUp, Zap, FolderCheck, ShieldCheck } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    title: "Redução de Afastamentos",
    desc: "Atuação preventiva sobre fatores de risco, reduzindo significativamente os afastamentos por saúde mental.",
  },
  {
    icon: Zap,
    title: "Aumento da Produtividade",
    desc: "Equipes mais saudáveis e engajadas, com redução do presenteísmo e melhoria de performance.",
  },
  {
    icon: FolderCheck,
    title: "Gestão Psicossocial Organizada",
    desc: "Processos estruturados para identificar, acompanhar e gerenciar riscos psicossociais continuamente.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade Legal",
    desc: "Adequação completa às normas vigentes com registro e acompanhamento das ações implementadas.",
  },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Resultados Entregues</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center max-w-3xl mx-auto mb-6">
          Impactos reais para o seu negócio
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Nossas entregas são estruturadas para gerar resultados mensuráveis, reduzir riscos e fortalecer a cultura organizacional.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((r) => (
            <div key={r.title} className="bg-card rounded-xl p-8 card-elevated border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-16 max-w-2xl mx-auto text-center">
          <p className="font-heading text-xl italic text-foreground/80">
            "Cuidar da saúde mental dos colaboradores não é custo — é o investimento mais inteligente que uma empresa pode fazer."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default ResultsSection;
