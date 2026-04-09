import { Search, ShieldCheck, Users, BarChart3, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Search,
    title: "Diagnóstico da exposição",
    desc: "Identificamos riscos, fragilidades e pontos de atenção da empresa.",
  },
  {
    icon: ShieldCheck,
    title: "Estruturação da adequação",
    desc: "Organizamos processos, responsáveis e frentes de ação alinhadas à NR-01.",
  },
  {
    icon: Users,
    title: "Apoio à liderança",
    desc: "Preparamos lideranças e áreas-chave para atuar com mais segurança.",
  },
  {
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
            Uma atuação prática para reduzir riscos, estruturar a adequação e fortalecer a segurança da empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group relative bg-white rounded-[28px] border border-border/60 p-8 md:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 via-accent to-accent/50" />

              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
                  <item.icon className="text-primary-foreground" size={26} />
                </div>

                <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 leading-snug max-w-[16ch]">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-[34ch]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
