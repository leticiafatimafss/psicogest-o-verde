const results = [
  {
    title: "Redução de absenteísmo",
    desc: "Estratégias estruturadas para diminuir impactos do adoecimento e das ausências no ambiente de trabalho.",
  },
  {
    title: "Diminuição de afastamentos",
    desc: "Atuação preventiva para reduzir fatores organizacionais que comprometem a saúde mental dos colaboradores.",
  },
  {
    title: "Melhoria do clima organizacional",
    desc: "Ambientes mais saudáveis, relações mais equilibradas e maior percepção de apoio organizacional.",
  },
  {
    title: "Fortalecimento da cultura organizacional",
    desc: "Práticas alinhadas à responsabilidade corporativa, ao cuidado com pessoas e à sustentabilidade da gestão.",
  },
  {
    title: "Prevenção de riscos trabalhistas",
    desc: "Maior preparo da empresa para atender exigências legais e reduzir vulnerabilidades.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container max-w-6xl text-center">
        <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
          Resultados para a empresa
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
          Benefícios concretos para a organização
        </h2>

        <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          A gestão psicossocial bem estruturada contribui para a saúde da equipe,
          a segurança institucional e a sustentabilidade da empresa.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 text-left">
          {results.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] border border-border/60 p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
