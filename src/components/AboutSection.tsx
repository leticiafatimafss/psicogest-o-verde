import { Heart, ShieldCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Cuidado com as Pessoas",
    desc: "Promoção do bem-estar emocional e ambientes de trabalho mais saudáveis.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade Regulatória",
    desc: "Adequação às normas vigentes, incluindo NR-01, NR-07 e legislação de SST.",
  },
  {
    icon: Users,
    title: "Apoio à Liderança",
    desc: "Capacitação de gestores para lidar com questões emocionais e psicossociais.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 section-bg">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Sobre a Essência Psi</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center max-w-3xl mx-auto mb-6">
          Gestão psicossocial exige método, cuidado e execução.
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Somos uma consultoria especializada em saúde mental corporativa que apoia empresas na adequação à NR-01 e no cuidado com a saúde mental dos colaboradores, atuando com diagnóstico e acompanhamento contínuo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card rounded-xl p-8 card-elevated border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
