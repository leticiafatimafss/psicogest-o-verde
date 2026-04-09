import { TrendingDown, Brain, AlertTriangle, Scale } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Aumento dos Afastamentos",
    desc: "Crescimento dos afastamentos por saúde mental, impactando a operação e elevando custos com substituições e turnover.",
  },
  {
    icon: Brain,
    title: "Sobrecarga e Pressão",
    desc: "Equipes pressionadas, com alta demanda e dificuldade na gestão emocional no ambiente de trabalho.",
  },
  {
    icon: AlertTriangle,
    title: "Falta de Estrutura",
    desc: "Ausência de processos para identificar e gerenciar riscos psicossociais de forma contínua e preventiva.",
  },
  {
    icon: Scale,
    title: "Riscos Legais e Trabalhistas",
    desc: "A NR-01 exige gestão dos riscos psicossociais. O não cumprimento gera autuações, multas e passivos trabalhistas.",
  },
];

const ScenarioSection = () => {
  return (
    <section id="cenario" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">O cenário atual</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center max-w-3xl mx-auto mb-6">
          Por que sua empresa precisa agir agora?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          O cenário corporativo enfrenta desafios crescentes em saúde mental. Ignorar esses sinais custa caro — financeiramente e juridicamente.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((p) => (
            <div key={p.title} className="flex gap-5 bg-card rounded-xl p-8 card-elevated border border-border">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                <p.icon className="text-destructive" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
