import { FileCheck, Search, Stethoscope } from "lucide-react";

const requirements = [
  {
    num: "01",
    icon: FileCheck,
    title: "Gestão de Riscos (GRO/PGR)",
    desc: "Obrigatoriedade de estruturar o Programa de Gerenciamento de Riscos conforme a NR-01, incluindo os fatores psicossociais.",
  },
  {
    num: "02",
    icon: Search,
    title: "Mapeamento de Fatores Psicossociais",
    desc: "Identificação de estresse, sobrecarga, assédio e conflitos conforme diretrizes de saúde ocupacional e boas práticas de SST.",
  },
  {
    num: "03",
    icon: Stethoscope,
    title: "Acompanhamento da Saúde",
    desc: "Monitoramento contínuo da saúde ocupacional dos colaboradores, em linha com o PCMSO (NR-07) e regulamentações vigentes.",
  },
];

const NR01Section = () => {
  return (
    <section id="nr01" className="py-24 hero-bg relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">NR-01 Atualizada</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground text-center max-w-3xl mx-auto mb-6">
          O que a nova NR-01 exige da sua empresa?
        </h2>
        <p className="text-primary-foreground/70 text-center max-w-2xl mx-auto mb-16 text-lg">
          A atualização da NR-01 torna obrigatória a gestão dos riscos psicossociais. Empresas que não se adequarem estarão sujeitas a fiscalizações, multas e ações trabalhistas.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {requirements.map((r) => (
            <div key={r.num} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8">
              <span className="text-accent font-heading text-3xl font-bold">{r.num}</span>
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center my-4">
                <r.icon className="text-accent" size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-3">{r.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NR01Section;
