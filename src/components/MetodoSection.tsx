import {
  BarChart3,
  ClipboardCheck,
  GraduationCap,
  ListChecks,
  Rocket,
  Search,
} from "lucide-react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao: "Mapeamos riscos, necessidades e prioridades.",
    Icone: Search,
  },
  {
    numero: "02",
    titulo: "Avaliação",
    descricao: "Analisamos dados, impactos e pontos de atenção.",
    Icone: BarChart3,
  },
  {
    numero: "03",
    titulo: "Plano de ação",
    descricao: "Definimos medidas, responsáveis e prazos.",
    Icone: ListChecks,
  },
  {
    numero: "04",
    titulo: "Implementação",
    descricao: "Colocamos as ações em prática com organização.",
    Icone: Rocket,
  },
  {
    numero: "05",
    titulo: "Capacitação",
    descricao: "Preparamos lideranças e equipes para a prevenção.",
    Icone: GraduationCap,
  },
  {
    numero: "06",
    titulo: "Monitoramento",
    descricao: "Acompanhamos resultados e a evolução das ações.",
    Icone: ClipboardCheck,
  },
];

type Etapa = (typeof etapas)[number];

function EtapaCard({ etapa }: { etapa: Etapa }) {
  const { numero, titulo, descricao, Icone } = etapa;

  return (
    <article className="group relative h-full min-h-[185px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white p-6 shadow-[0_16px_45px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)] md:p-7">
      {/* Círculo decorativo */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#155B38]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#C7A56A]/10" />

      {/* Topo do card */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="text-sm font-bold tracking-[0.18em] text-[#C7A56A]">
          {numero}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#155B38]/10 text-[#155B38] transition-all duration-500 group-hover:rotate-3 group-hover:bg-[#155B38] group-hover:text-white">
          <Icone size={21} strokeWidth={1.8} />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mt-6">
        <h3 className="font-heading text-2xl font-bold leading-tight text-[#0F2D22]">
          {titulo}
        </h3>

        <p className="mt-3 max-w-[270px] text-base leading-7 text-gray-500">
          {descricao}
        </p>
      </div>

      {/* Linha inferior animada */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#C7A56A] to-[#E6C98B] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

function DesktopArrow() {
  return (
    <div
      aria-hidden="true"
      className="hidden items-center justify-center px-1 lg:flex"
    >
      <div className="h-px w-8 bg-white/30 xl:w-12" />

      <div className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#C7A56A]" />
    </div>
  );
}

function DesktopVerticalArrow() {
  return (
    <div
      aria-hidden="true"
      className="hidden justify-end pr-[15%] lg:flex"
    >
      <div className="flex flex-col items-center py-5">
        <div className="h-9 w-px bg-white/30" />

        <div className="h-0 w-0 border-x-[5px] border-t-[8px] border-x-transparent border-t-[#C7A56A]" />
      </div>
    </div>
  );
}

function MobileConnector() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-[-26px] left-1/2 z-10 h-7 w-px -translate-x-1/2 bg-white/30 md:hidden"
    >
      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#C7A56A]" />
    </div>
  );
}

export default function MetodoSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0D2F24_0%,#134C35_50%,#1B6945_100%)] px-5 py-20 sm:px-6 md:py-24"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#C7A56A]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C7A56A]" />
            Método Essência
          </span>

          <h2 className="reveal reveal-delay-1 mt-5 font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            Da análise à ação
          </h2>

          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Um processo simples, estruturado e contínuo para fortalecer a
            gestão psicossocial da sua empresa.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="reveal reveal-delay-1 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 xl:gap-6">
            <EtapaCard etapa={etapas[0]} />

            <DesktopArrow />

            <EtapaCard etapa={etapas[1]} />

            <DesktopArrow />

            <EtapaCard etapa={etapas[2]} />
          </div>

          <DesktopVerticalArrow />

          <div className="reveal reveal-delay-2 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 xl:gap-6">
            <EtapaCard etapa={etapas[3]} />

            <DesktopArrow />

            <EtapaCard etapa={etapas[4]} />

            <DesktopArrow />

            <EtapaCard etapa={etapas[5]} />
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden grid-cols-2 gap-5 md:grid lg:hidden">
          {etapas.map((etapa, index) => (
            <div
              key={etapa.numero}
              className={`reveal ${
                index < 2
                  ? "reveal-delay-1"
                  : index < 4
                    ? "reveal-delay-2"
                    : "reveal-delay-3"
              }`}
            >
              <EtapaCard etapa={etapa} />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="space-y-6 md:hidden">
          {etapas.map((etapa, index) => (
            <div
              key={etapa.numero}
              className={`reveal relative ${
                index < 2
                  ? "reveal-delay-1"
                  : index < 4
                    ? "reveal-delay-2"
                    : "reveal-delay-3"
              }`}
            >
              <EtapaCard etapa={etapa} />

              {index < etapas.length - 1 && <MobileConnector />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
