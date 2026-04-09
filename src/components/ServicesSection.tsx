import { Search, ClipboardCheck, ShieldCheck, Users, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Levantamento da exposição atual",
    desc: "Analisamos o cenário da empresa, identificamos fragilidades e entendemos onde estão os principais riscos psicossociais.",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Diagnóstico técnico e direcionamento",
    desc: "Mapeamos os pontos críticos e definimos, com clareza, o que precisa ser estruturado para atender à NR-01 com consistência.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Estruturação da adequação",
    desc: "Organizamos processos, responsabilidades e frentes de ação para que a empresa saia do improviso e avance com mais segurança.",
  },
  {
    num: "04",
    icon: Users,
    title: "Apoio à liderança e áreas-chave",
    desc: "Orientamos lideranças e áreas internas para lidar com o tema de forma mais preparada, técnica e alinhada à realidade da operação.",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Acompanhamento e evolução",
    desc: "A empresa passa a contar com monitoramento, registro e continuidade para sustentar a conformidade e a gestão preventiva.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-light rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Como atuamos na prática
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Da exposição ao <span className="gold-gradient-text">controle</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
            Nossa atuação é estruturada para ajudar sua empresa a identificar riscos, organizar a adequação à NR-01 e construir uma gestão mais preventiva, segura e sustentada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i + 1} bg-background rounded-3xl p-7 border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent/70" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-sm">
                  <s.icon className="text-primary-foreground" size={22} />
                </div>
                <span className="text-sm font-semibold text-accent tracking-wider">
                  {s.num}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 leading-snug min-h-[56px]">
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
