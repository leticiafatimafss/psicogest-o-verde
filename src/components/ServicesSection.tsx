import { Search, ShieldCheck, Users, BarChart3, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Search,
    title: "Diagnóstico da exposição",
    desc: "Mapeamos riscos, fragilidades e pontos críticos da empresa.",
  },
  {
    icon: ShieldCheck,
    title: "Estruturação da adequação",
    desc: "Organizamos processos, responsáveis e plano de ação alinhado à NR-01.",
  },
  {
    icon: Users,
    title: "Apoio à liderança",
    desc: "Preparamos lideranças para atuar com mais segurança e clareza.",
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
    <section id="servicos" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-light rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="container relative">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Como estruturamos
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Um método claro para sair da{" "}
            <span className="gold-gradient-text">exposição</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Atuamos de forma prática para estruturar a empresa, reduzir riscos e garantir conformidade real.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} group relative bg-white rounded-[24px] border border-border/60 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Linha superior dourada */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/80 to-accent/50" />

              {/* Topo */}
              <div className="flex items-start justify-between gap-3 mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>

                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Título */}
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Descrição */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Número do passo (diferencial premium) */}
              <span className="absolute bottom-4 right-5 text-4xl font-bold text-accent/10">
                {`0${i + 1}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
