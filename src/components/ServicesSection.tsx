import {
  ClipboardCheck,
  ShieldCheck,
 HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Psicossocial Organizacional",
    desc: "Mapeamento estruturado dos fatores de risco psicossocial, fragilidades internas e pontos críticos que impactam pessoas, clima e operação.",
    href: "/blog/diagnostico-psicossocial-organizacional",
    tag: "Diagnóstico",
  },
  {
    icon: ShieldCheck,
    title: "Implantação da NR-01",
    desc: "Estruturação prática do processo de adequação, com definição de responsáveis, plano de ação, prioridades e alinhamento às exigências normativas.",
    href: "/blog/implantacao-nr-01",
    tag: "Conformidade",
  },
  {
    icon: HeartHandshake,
    title: "Programas de Saúde Mental Corporativa",
    desc: "Desenvolvimento de iniciativas voltadas à promoção da saúde mental, prevenção de adoecimento e fortalecimento do ambiente organizacional.",
    href: "/blog/programas-de-saude-mental-corporativa",
    tag: "Saúde Mental",
  },
  {
    icon: GraduationCap,
    title: "Capacitação de Lideranças",
    desc: "Preparação de líderes para reconhecer sinais de risco, conduzir situações sensíveis e atuar com mais clareza, responsabilidade e segurança.",
    href: "/blog/capacitacao-de-liderancas",
    tag: "Liderança",
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultoria Psicossocial Contínua",
    desc: "Acompanhamento consultivo para sustentar as ações ao longo do tempo, apoiar decisões e fortalecer a gestão psicossocial da organização.",
    href: "/blog/consultoria-psicossocial-continua",
    tag: "Acompanhamento",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="servicos"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Fundo decorativo */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-light rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div ref={ref} className="container relative">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            O que fazemos
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.9rem] font-bold text-foreground mt-4 leading-tight">
            Soluções estruturadas para fortalecer a{" "}
            <span className="gold-gradient-text">
              gestão psicossocial nas organizações
            </span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Atuamos de forma técnica, estratégica e aplicada para apoiar empresas
            na prevenção de riscos psicossociais, na adequação à NR-01 e no
            fortalecimento da saúde mental no ambiente corporativo.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative h-full rounded-[28px] border border-border/60 bg-white/90 backdrop-blur-sm p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* brilho suave */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_28%)]" />

              {/* linha premium */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent via-accent/80 to-accent/40" />

              {/* topo */}
              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shadow-sm shrink-0">
                    <item.icon className="text-primary-foreground" size={24} />
                  </div>

                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* título */}
              <h3 className="relative z-10 font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug pr-4">
                {item.title}
              </h3>

              {/* descrição */}
              <p className="relative z-10 text-muted-foreground text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              {/* rodapé */}
              <div className="relative z-10 mt-8 flex items-center justify-between">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm md:text-[15px] font-semibold text-accent hover:opacity-80 transition-opacity"
                >
                  Ler mais no blog
                  <ArrowUpRight size={17} />
                </a>

                <span className="text-4xl font-bold text-accent/10 leading-none">
                  {`0${i + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
