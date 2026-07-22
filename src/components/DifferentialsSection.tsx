import {
  ShieldCheck,
  Brain,
  Users,
  BookOpen,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Atuação em conformidade",
    description:
      "Soluções alinhadas às exigências da NR-01 e às melhores práticas de gestão psicossocial.",
  },
  {
    icon: Brain,
    title: "Base científica",
    description:
      "Todas as estratégias são fundamentadas em evidências e conduzidas por profissionais qualificados.",
  },
  {
    icon: Users,
    title: "Olhar humanizado",
    description:
      "Acreditamos que resultados sustentáveis começam pelo cuidado genuíno com as pessoas.",
  },
  {
    icon: ClipboardCheck,
    title: "Diagnóstico estratégico",
    description:
      "Mapeamos riscos, identificamos prioridades e desenvolvemos planos de ação personalizados.",
  },
  {
    icon: BookOpen,
    title: "Desenvolvimento contínuo",
    description:
      "Capacitação, orientação e acompanhamento para fortalecer a cultura organizacional.",
  },
  {
    icon: HeartHandshake,
    title: "Parceria com empresas",
    description:
      "Atuamos lado a lado com nossos clientes, construindo soluções que fazem sentido para cada realidade.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">

        <div className="max-w-3xl mx-auto text-center">

          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold">
            Nosso Diferencial
          </span>

          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-primary">
            Mais do que cumprir uma norma,
            <br />
            construímos organizações mais saudáveis.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nossa atuação une conhecimento técnico, estratégia e cuidado com as
            pessoas para gerar mudanças consistentes dentro das organizações.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors">

                  <Icon
                    size={28}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="mt-4 text-muted-foreground leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default DifferentialsSection;
