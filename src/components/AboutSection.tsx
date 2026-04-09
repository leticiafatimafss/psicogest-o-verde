import { AlertTriangle, ShieldAlert, FileWarning } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    icon: ShieldAlert,
    title: "Risco de multa e passivo",
    desc: "Sem estrutura adequada, a empresa aumenta sua exposição trabalhista, regulatória e jurídica.",
  },
  {
    icon: FileWarning,
    title: "Falta de adequação prática",
    desc: "Muitas empresas sabem que precisam agir, mas não têm clareza sobre como atender a NR-01 com método.",
  },
  {
    icon: AlertTriangle,
    title: "Impactos na operação",
    desc: "Lideranças despreparadas, ambiente fragilizado e ausência de prevenção geram reflexos reais no dia a dia.",
  },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-light rounded-full -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Por que isso importa
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Ignorar os riscos psicossociais <span className="gold-gradient-text">custa caro para a empresa</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
            Quando não existe direcionamento técnico, prevenção e processo estruturado, a empresa fica mais exposta a passivos, fragilidades internas e riscos de não conformidade com a NR-01.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 1} bg-background rounded-2xl p-8 border border-border/60 card-modern group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <p.icon className="text-primary" size={26} />
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {p.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
