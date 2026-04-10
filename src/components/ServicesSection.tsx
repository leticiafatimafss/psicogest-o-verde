import { Search, ShieldCheck, Users, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnóstico Psicossocial Organizacional",
    desc: "Mapeamento estruturado dos fatores psicossociais presentes na organização.",
  },
  {
    icon: ShieldCheck,
    title: "Implantação da NR-01",
    desc: "Estruturação do processo de identificação, avaliação e gestão de riscos psicossociais.",
  },
  {
    icon: Users,
    title: "Programas de Saúde Mental Corporativa",
    desc: "Ações preventivas e educativas voltadas ao bem-estar psicológico dos colaboradores.",
  },
  {
    icon: BarChart3,
    title: "Capacitação de Lideranças",
    desc: "Treinamento de gestores para identificação e manejo de fatores psicossociais nas equipes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container text-center max-w-6xl">

        {/* Título */}
        <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
          O que fazemos
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
          Soluções estruturadas para apoiar sua empresa
        </h2>

        <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Atuamos de forma técnica e estratégica para identificar riscos, estruturar processos e fortalecer a saúde mental no ambiente organizacional.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] border border-border/60 p-6 md:p-8 shadow-sm hover:shadow-md transition-all text-left"
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
