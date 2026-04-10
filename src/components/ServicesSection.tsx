import { Search, ShieldCheck, Users, BarChart3, BriefcaseBusiness } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnóstico Psicossocial Organizacional",
    desc: "Mapeamento estruturado dos fatores psicossociais presentes na organização, identificando riscos relacionados à saúde mental no ambiente de trabalho.",
  },
  {
    icon: ShieldCheck,
    title: "Implantação da NR-01",
    desc: "Estruturação do processo de identificação, avaliação e gestão de riscos psicossociais, conforme as exigências da norma.",
  },
  {
    icon: Users,
    title: "Programas de Saúde Mental Corporativa",
    desc: "Desenvolvimento de ações preventivas e educativas voltadas ao bem-estar psicológico dos colaboradores.",
  },
  {
    icon: BarChart3,
    title: "Capacitação de Lideranças",
    desc: "Treinamento de gestores para identificação e manejo de fatores psicossociais nas equipes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultoria Psicossocial Contínua",
    desc: "Acompanhamento estratégico da organização para fortalecer práticas organizacionais saudáveis e sustentáveis.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container text-center max-w-6xl">
        <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
          O que fazemos
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
          Soluções em gestão psicossocial para empresas
        </h2>

        <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Atuamos na identificação, estruturação e acompanhamento de práticas voltadas à gestão de riscos psicossociais e à promoção da saúde mental no ambiente de trabalho.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] border border-border/60 p-6 md:p-8 shadow-sm text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent/10 text-accent p-3 rounded-xl">
                  <item.icon size={24} />
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
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
