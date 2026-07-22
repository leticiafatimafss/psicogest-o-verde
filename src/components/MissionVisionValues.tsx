import { Target, Eye, Gem } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Promover saúde mental nas organizações por meio de soluções psicossociais estratégicas, contribuindo para ambientes de trabalho mais saudáveis, seguros e sustentáveis.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em Gestão Psicossocial, reconhecida pela excelência técnica, inovação e compromisso com o desenvolvimento humano nas organizações.",
  },
  {
    icon: Gem,
    title: "Valores",
    description:
      "Ética, ciência, confidencialidade, respeito às pessoas, responsabilidade social, excelência e compromisso com o bem-estar.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="py-24 bg-[#fafaf8]">
      <div className="container">

        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center">

          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold">
            Nossa Essência
          </span>

          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-primary">
            Os princípios que orientam
            <br />
            cada decisão.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nossa atuação é baseada em valores sólidos, conhecimento científico
            e no compromisso de construir ambientes corporativos mais humanos,
            saudáveis e sustentáveis.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group bg-white rounded-3xl border border-border p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-primary">
                  {card.title}
                </h3>

                <p className="mt-5 text-muted-foreground leading-8">
                  {card.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
