import {
  GraduationCap,
  Users,
  MessageCircleMore,
  HeartHandshake,
  CalendarDays,
  Hand,
  BriefcaseBusiness,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredServices = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Psicossocial",
    desc: "Identificamos fatores de risco psicossociais, avaliamos o ambiente organizacional e entregamos um diagnóstico técnico para orientar decisões estratégicas.",
    href: "/blog/diagnostico-psicossocial-organizacional",
    tag: "Diagnosticar",
  },
  {
    icon: ShieldCheck,
    title: "Implantação da NR-01",
    desc: "Estruturamos todo o processo de adequação da empresa, com planejamento, documentação e acompanhamento especializado.",
    href: "/blog/implantacao-nr-01",
    tag: "Implantar",
  },
  {
    icon: HeartHandshake,
    title: "Promoção da Saúde Mental",
    desc: "Desenvolvemos palestras, rodas de conversa, campanhas, eventos corporativos, ações de bem-estar e programas preventivos para fortalecer a saúde mental dos colaboradores.",
    href: "/blog/programas-de-saude-mental-corporativa",
    tag: "Promover",
  },
];

const secondaryServices = [
  {
    icon: GraduationCap,
    title: "Capacitação de Lideranças",
    href: "#",
  },
  {
    icon: Users,
    title: "Palestras Corporativas",
    href: "#",
  },
  {
    icon: MessageCircleMore,
    title: "Rodas de Conversa",
    href: "#",
  },
  {
    icon: HeartHandshake,
    title: "Campanhas de Saúde Mental",
    href: "#",
  },
  {
    icon: CalendarDays,
    title: "Eventos de Bem-estar",
    href: "#",
  },
  {
    icon: Hand,
    title: "Massagem Corporativa",
    href: "#",
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultoria Psicossocial Contínua",
    href: "#",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="servicos"
      className="py-14 md:py-18 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-light rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div ref={ref} className="container relative">

        {/* HEADER */}

        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">

          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            O que fazemos
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.7rem] font-bold text-foreground mt-4 leading-tight">
            Soluções completas para uma{" "}
            <span className="gold-gradient-text">
              gestão psicossocial segura e eficiente
            </span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Da identificação dos riscos psicossociais à implantação da NR-01 e
            ao desenvolvimento de ações preventivas, oferecemos soluções
            completas para promover ambientes de trabalho mais saudáveis,
            seguros e em conformidade com a legislação.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

          {featuredServices.map((item, i) => (

            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 3) + 1}
              group relative rounded-[24px]
              border border-border/60
              bg-white/90
              backdrop-blur-sm
              p-5 md:p-6
              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)]
              hover:-translate-y-1
              transition-all duration-300
              overflow-hidden`}
            >

              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent via-accent/80 to-accent/40" />

              <div className="flex items-center justify-between gap-3 mb-5">

                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-sm shrink-0">
                  <item.icon
                    className="text-primary-foreground"
                    size={22}
                  />
                </div>

                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.tag}
                </span>

              </div>

              <h3 className="font-heading text-xl md:text-[1.4rem] font-semibold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6">

                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
                >
                  Ler mais

                  <ArrowUpRight size={16} />

                </a>

              </div>

            </div>

          ))}
        </div>

                {/* SERVIÇOS COMPLEMENTARES */}

        <div className="reveal reveal-delay-3 max-w-5xl mx-auto mt-8 md:mt-10">

          <div className="rounded-[22px] border border-border/60 bg-white/70 backdrop-blur-sm px-5 py-6 md:px-8 md:py-8">

            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">
              Também oferecemos
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              {secondaryServices.map((item) => (

                <a
                  key={item.title}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm md:text-[15px] font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all"
                >
                  <item.icon
                    size={16}
                    className="text-accent"
                  />

                  {item.title}

                </a>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;
