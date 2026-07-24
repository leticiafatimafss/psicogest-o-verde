import {
  ClipboardCheck,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  ArrowUpRight,
  Users,
  MessageCircleMore,
  CalendarDays,
  Hand,
  ChevronRight,
} from "lucide-react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredServices = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Psicossocial",

    desc: "Identificamos fatores de risco psicossociais, avaliamos o ambiente organizacional e entregamos um diagnóstico técnico para orientar decisões estratégicas.",

    descMobile:
      "Identificamos os riscos e mostramos onde sua empresa precisa agir.",

    href: "/blog/diagnostico-psicossocial-organizacional",
    tag: "Diagnosticar",
  },
  {
    icon: ShieldCheck,
    title: "Implantação da NR-01",

    desc: "Estruturamos todo o processo de adequação da empresa, com planejamento, documentação e acompanhamento especializado.",

    descMobile:
      "Estruturamos a adequação da sua empresa com segurança e suporte técnico.",

    href: "/blog/implantacao-nr-01",
    tag: "Implantar",
  },
  {
    icon: HeartHandshake,
    title: "Promoção da Saúde Mental",

    desc: "Desenvolvemos palestras, rodas de conversa, campanhas, eventos corporativos, ações de bem-estar e programas preventivos para fortalecer a saúde mental dos colaboradores.",

    descMobile:
      "Criamos ações práticas para cuidar das equipes e prevenir riscos.",

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
      className="relative overflow-hidden bg-background py-10 md:py-14"
    >
      {/* Elementos decorativos */}
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-light opacity-60" />

      <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-accent/5 blur-3xl" />

      <div ref={ref} className="container relative">

        {/* CABEÇALHO */}
        <div className="mx-auto mb-7 max-w-3xl text-center md:mb-12">

          <span className="reveal text-[10px] font-semibold uppercase tracking-[0.22em] text-accent md:text-xs md:tracking-[0.25em]">
            O que fazemos
          </span>

          {/* TÍTULO MOBILE */}
          <h2 className="reveal reveal-delay-1 mt-3 font-heading text-[1.8rem] font-bold leading-[1.12] text-foreground md:hidden">
            Soluções para cuidar da
            <span className="gold-gradient-text block">
              sua empresa e das pessoas
            </span>
          </h2>

          {/* TÍTULO DESKTOP — ORIGINAL */}
          <h2 className="reveal reveal-delay-1 mt-4 hidden font-heading font-bold leading-tight text-foreground md:block md:text-4xl lg:text-[2.7rem]">
            Soluções completas para uma{" "}
            <span className="gold-gradient-text">
              gestão psicossocial segura e eficiente
            </span>
          </h2>

          {/* DESCRIÇÃO MOBILE */}
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:hidden">
            Diagnóstico, adequação e ações de saúde mental para empresas.
          </p>

          {/* DESCRIÇÃO DESKTOP — ORIGINAL */}
          <p className="reveal reveal-delay-2 mx-auto mt-5 hidden max-w-2xl text-base leading-relaxed text-muted-foreground md:block">
            Da identificação dos riscos psicossociais à implantação da NR-01,
            oferecemos soluções completas para promover ambientes de trabalho
            mais saudáveis, seguros e em conformidade com a legislação.
          </p>

        </div>

        {/* INDICAÇÃO MOBILE */}
        <div className="mb-3 flex items-center justify-end gap-1 text-xs font-medium text-muted-foreground md:hidden">
          <span>Deslize para conhecer</span>
          <ChevronRight size={15} className="text-accent" />
        </div>

        {/* CARDS PRINCIPAIS */}
        <div
          className="
            -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            md:mx-auto md:grid md:max-w-6xl md:grid-cols-1 md:gap-5
            md:overflow-visible md:px-0 md:pb-0
            lg:grid-cols-3
          "
        >
          {featuredServices.map((item, i) => (
            <article
              key={item.title}
              className={`
                reveal reveal-delay-${(i % 3) + 1}
                group relative min-w-[82vw] max-w-[330px] snap-center
                overflow-hidden rounded-[22px]
                border border-border/60 bg-white/90
                p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                backdrop-blur-sm transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)]
                md:min-w-0 md:max-w-none md:rounded-[24px] md:p-6
              `}
            >
              {/* Linha dourada */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-accent via-accent/80 to-accent/40" />

              <div className="mb-4 flex items-center justify-between gap-3 md:mb-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-sm md:h-12 md:w-12">
                  <item.icon
                    className="text-primary-foreground"
                    size={21}
                  />
                </div>

                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent md:text-[10px] md:tracking-[0.18em]">
                  {item.tag}
                </span>

              </div>

              <h3 className="mb-2 font-heading text-xl font-semibold leading-snug text-foreground md:mb-3 md:text-[1.4rem]">
                {item.title}
              </h3>

              {/* DESCRIÇÃO MOBILE */}
              <p className="text-sm leading-relaxed text-muted-foreground md:hidden">
                {item.descMobile}
              </p>

              {/* DESCRIÇÃO DESKTOP — ORIGINAL */}
              <p className="hidden leading-relaxed text-muted-foreground md:block md:text-[15px]">
                {item.desc}
              </p>

              <div className="mt-5 md:mt-6">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                >
                  <span className="md:hidden">Conhecer solução</span>
                  <span className="hidden md:inline">Ler mais</span>

                  <ArrowUpRight size={16} />
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* SERVIÇOS COMPLEMENTARES */}
        <div className="reveal reveal-delay-3 mx-auto mt-6 max-w-5xl md:mt-10">

          <div className="rounded-[20px] border border-border/60 bg-white/70 px-4 py-5 backdrop-blur-sm md:rounded-[22px] md:px-8 md:py-8">

            <p className="mb-4 text-center text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:mb-6 md:text-sm md:tracking-[0.2em]">
              Também oferecemos
            </p>

            {/* Mobile desliza; desktop quebra normalmente */}
            <div
              className="
                -mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                md:mx-0 md:flex-wrap md:justify-center md:gap-3
                md:overflow-visible md:px-0 md:pb-0
              "
            >
              {secondaryServices.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:border-accent/30 hover:bg-accent/5 md:px-5 md:py-3 md:text-[15px]"
                >
                  <item.icon
                    size={15}
                    className="text-accent md:h-4 md:w-4"
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
