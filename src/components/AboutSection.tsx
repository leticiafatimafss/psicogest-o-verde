import { Heart, ShieldCheck, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  { icon: Heart, title: "Cuidado com as Pessoas", desc: "Promoção do bem-estar emocional e ambientes de trabalho mais saudáveis e produtivos." },
  { icon: ShieldCheck, title: "Conformidade Regulatória", desc: "Adequação às normas vigentes, incluindo a nova NR-01, NR-07 e legislação de SST." },
  { icon: Users, title: "Apoio à Liderança", desc: "Capacitação de gestores para lidar com questões emocionais e psicossociais da equipe." },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="py-28 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-light rounded-full -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">Sobre a Essência Psi</span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Gestão psicossocial com <span className="italic gold-gradient-text">método e cuidado</span>
          </h2>
          <p className="reveal reveal-delay-2 text-muted-foreground mt-6 text-lg leading-relaxed font-light">
            Somos uma consultoria especializada em saúde mental corporativa que apoia empresas na adequação à NR-01 e no cuidado com seus colaboradores, com diagnóstico e acompanhamento contínuo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={p.title} className={`reveal reveal-delay-${i + 1} bg-background rounded-2xl p-8 card-modern border border-border/50 group`}>
              <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <p.icon className="text-primary" size={26} />
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
