import { ClipboardCheck, Search, Settings, Rocket, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: 1, icon: Search, title: "Diagnóstico Inicial", desc: "Mapeamento dos riscos psicossociais e análise da realidade da empresa." },
  { num: 2, icon: ClipboardCheck, title: "Mapeamento de Riscos", desc: "Identificação dos fatores que impactam a saúde mental dos colaboradores." },
  { num: 3, icon: Settings, title: "Estruturação", desc: "Implantação da gestão psicossocial e adequação às exigências normativas." },
  { num: 4, icon: Rocket, title: "Implementação", desc: "Execução das ações com colaboradores, liderança, RH e SESMT." },
  { num: 5, icon: BarChart3, title: "Acompanhamento", desc: "Monitoramento contínuo dos riscos, resultados e ajustes permanentes." },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-light rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">Nossa Metodologia</span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Como <span className="italic gold-gradient-text">atuamos</span> na sua empresa
          </h2>
          <p className="reveal reveal-delay-2 text-muted-foreground mt-6 text-lg leading-relaxed font-light">
            Abordagem estruturada em 5 etapas, baseada em evidências científicas e alinhada à nova NR-01.
          </p>
        </div>

        {/* Timeline style */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className={`reveal reveal-delay-${i + 1} text-center relative`}>
                <div className="relative z-10 bg-background rounded-2xl p-6 card-modern border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-primary-foreground font-bold text-sm">{s.num}</span>
                  </div>
                  <s.icon className="text-accent mx-auto mb-3" size={26} />
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
