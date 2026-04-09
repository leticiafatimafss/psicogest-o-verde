import { Search, ClipboardCheck, ShieldCheck, Users, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Levantamento da exposição",
    desc: "Identificamos os principais riscos e fragilidades da empresa.",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Diagnóstico e direcionamento",
    desc: "Definimos o que precisa ser ajustado para atender à NR-01.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Estruturação da adequação",
    desc: "Organizamos processos, responsáveis e frentes de ação.",
  },
  {
    num: "04",
    icon: Users,
    title: "Apoio à liderança",
    desc: "Preparamos lideranças e áreas-chave para atuar com mais segurança.",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Acompanhamento contínuo",
    desc: "Monitoramos a evolução e sustentamos a conformidade no tempo.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-light rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Como atuamos
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Da exposição ao <span className="gold-gradient-text">controle</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            Uma atuação prática para estruturar a adequação, reduzir riscos e fortalecer a segurança da empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i + 1} bg-background rounded-3xl p-6 border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent/70" />

              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center">
                  <s.icon className="text-primary-foreground" size={20} />
                </div>
                <span className="text-sm font-semibold text-accent tracking-wider">
                  {s.num}
                </span>
              </div>

              <h3 className="font-heading text-base font-semibold text-foreground mb-2 leading-snug">
                {s.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
