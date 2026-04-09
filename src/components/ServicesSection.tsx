import { ClipboardCheck, Search, Settings, Rocket, BarChart3 } from "lucide-react";

const steps = [
  { num: 1, icon: Search, title: "Diagnóstico Inicial", desc: "Mapeamento dos riscos psicossociais e análise da realidade da empresa." },
  { num: 2, icon: ClipboardCheck, title: "Mapeamento de Riscos", desc: "Identificação dos fatores que impactam a saúde mental no ambiente de trabalho." },
  { num: 3, icon: Settings, title: "Estruturação", desc: "Implantação da gestão psicossocial e adequação às exigências normativas." },
  { num: 4, icon: Rocket, title: "Implementação", desc: "Execução das ações com colaboradores, liderança, RH e SESMT." },
  { num: 5, icon: BarChart3, title: "Acompanhamento Contínuo", desc: "Monitoramento dos riscos, evolução dos resultados e ajustes permanentes." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 section-bg">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Nossa Metodologia</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center max-w-3xl mx-auto mb-6">
          Como atuamos na sua empresa
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Uma abordagem estruturada em 5 etapas, baseada em evidências científicas e alinhada à nova NR-01.
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="relative bg-card rounded-xl p-6 card-elevated border border-border text-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-sm">{s.num}</span>
              </div>
              <s.icon className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
