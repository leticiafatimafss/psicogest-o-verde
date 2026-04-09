import { FileCheck, Search, Stethoscope } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const requirements = [
  { num: "01", icon: FileCheck, title: "Gestão de Riscos (GRO/PGR)", desc: "Obrigatoriedade de estruturar o Programa de Gerenciamento de Riscos conforme a NR-01, incluindo fatores psicossociais." },
  { num: "02", icon: Search, title: "Mapeamento Psicossocial", desc: "Identificação de estresse, sobrecarga, assédio e conflitos, conforme diretrizes de saúde ocupacional e SST." },
  { num: "03", icon: Stethoscope, title: "Acompanhamento Contínuo", desc: "Monitoramento da saúde ocupacional dos colaboradores, alinhado ao PCMSO (NR-07) e regulamentações vigentes." },
];

const NR01Section = () => {
  const ref = useScrollReveal();

  return (
    <section id="nr01" className="py-28 hero-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-primary-foreground/5 rounded-full" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent/10 rounded-full" />
      <div className="absolute top-1/2 right-10 w-1 h-32 bg-accent/10 rounded-full" />

      <div ref={ref} className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">NR-01 Atualizada</span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-foreground mt-4 leading-tight">
            O que a nova NR-01 <span className="italic gold-gradient-text">exige da sua empresa?</span>
          </h2>
          <p className="reveal reveal-delay-2 text-primary-foreground/50 mt-6 text-lg leading-relaxed font-light">
            A atualização torna obrigatória a gestão dos riscos psicossociais. Empresas que não se adequarem enfrentarão fiscalizações, multas e ações trabalhistas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {requirements.map((r, i) => (
            <div key={r.num} className={`reveal reveal-delay-${i + 1} bg-primary-foreground/[0.04] backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/[0.08] transition-all duration-300`}>
              <span className="gold-gradient-text font-heading text-4xl font-bold">{r.num}</span>
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center my-5">
                <r.icon className="text-accent" size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-3">{r.title}</h3>
              <p className="text-primary-foreground/50 leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NR01Section;
