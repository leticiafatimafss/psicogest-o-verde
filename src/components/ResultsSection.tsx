import { ShieldCheck, FileCheck2, Radar, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const results = [
  {
    icon: ShieldCheck,
    title: "Menos exposição jurídica",
    desc: "A empresa passa a atuar com mais estrutura, prevenção e registro, reduzindo vulnerabilidades trabalhistas e regulatórias.",
  },
  {
    icon: FileCheck2,
    title: "Mais conformidade com a NR-01",
    desc: "A adequação deixa de ser apenas intenção e passa a ter direcionamento técnico, processo e acompanhamento prático.",
  },
  {
    icon: Radar,
    title: "Mais controle e previsibilidade",
    desc: "Com uma gestão estruturada, a empresa identifica riscos com mais clareza e age antes que eles se agravem.",
  },
  {
    icon: Briefcase,
    title: "Mais segurança para a operação",
    desc: "Lideranças, áreas internas e empresa passam a atuar com mais alinhamento, critério e respaldo organizacional.",
  },
];

const ResultsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="resultados" className="py-24 bg-green-light relative overflow-hidden">
      <div className="absolute top-10 right-0 w-48 h-48 bg-accent/5 blob animate-float" />

      <div ref={ref} className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            O que sua empresa ganha
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            O impacto vai além da <span className="gold-gradient-text">conformidade</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
            Nossa atuação ajuda a empresa a sair da exposição e avançar para uma estrutura mais preventiva, organizada e segura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <div
              key={r.title}
              className={`reveal reveal-delay-${i + 1} bg-background rounded-2xl p-8 card-modern border border-border/50 text-center group`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gold-muted flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <r.icon className="text-accent" size={28} />
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {r.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3 mt-16 max-w-4xl mx-auto">
          <div className="bg-background border border-border/60 rounded-3xl px-8 py-10 text-center shadow-sm">
            <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed">
              Mais do que atender uma exigência, sua empresa passa a ter
              <span className="gold-gradient-text"> estrutura, prevenção e segurança </span>
              para lidar com um tema cada vez mais crítico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
