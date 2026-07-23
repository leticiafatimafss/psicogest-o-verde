import { useScrollReveal } from "@/hooks/useScrollReveal";

type CardProps = {
  numero: string;
  titulo: string;
  descricao: string;
};

const Card = ({ numero, titulo, descricao }: CardProps) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-[#155B38]/10 bg-[#155B38] p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Brilho decorativo */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-all duration-300 group-hover:bg-white/10" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-5">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#C7A56A] text-xl font-bold text-black shadow-md transition-transform duration-300 group-hover:scale-105">
            {numero}
          </div>

          <h3 className="font-heading text-2xl font-bold leading-tight text-white xl:text-3xl">
            {titulo}
          </h3>
        </div>

        <p className="text-base leading-7 text-white/80 xl:text-lg xl:leading-8">
          {descricao}
        </p>
      </div>
    </div>
  );
};

const HorizontalArrow = () => {
  return (
    <div
      aria-hidden="true"
      className="hidden items-center justify-center px-2 lg:flex"
    >
      <div className="h-[2px] w-10 bg-[#C7A56A] xl:w-14" />

      <div className="h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-[#C7A56A]" />
    </div>
  );
};

const VerticalArrow = () => {
  return (
    <div
      aria-hidden="true"
      className="hidden justify-end pr-[15%] lg:flex"
    >
      <div className="flex flex-col items-center py-5">
        <div className="h-12 w-[2px] bg-[#C7A56A]" />

        <div className="h-0 w-0 border-x-[7px] border-t-[11px] border-x-transparent border-t-[#C7A56A]" />
      </div>
    </div>
  );
};

const MobileArrow = () => {
  return (
    <div
      aria-hidden="true"
      className="flex justify-center py-1 lg:hidden"
    >
      <div className="flex flex-col items-center">
        <div className="h-6 w-[2px] bg-[#C7A56A]" />

        <div className="h-0 w-0 border-x-[6px] border-t-[9px] border-x-transparent border-t-[#C7A56A]" />
      </div>
    </div>
  );
};

export default function MetodoSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="metodo"
      className="overflow-hidden bg-white px-6 py-24 md:py-28"
    >
      <div ref={ref} className="mx-auto max-w-7xl">

        {/* Cabeçalho */}
        <div className="mb-16 text-center md:mb-20">
          <span className="inline-flex rounded-full bg-[#155B38]/10 px-5 py-2 text-sm font-semibold text-[#155B38]">
            Método Essência
          </span>

          <h2 className="reveal reveal-delay-1 mt-6 font-heading text-4xl font-bold leading-tight text-black md:text-5xl">
            Como transformamos diagnóstico em ação
          </h2>

          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-500">
            Um processo estruturado para identificar riscos, definir
            prioridades, implementar soluções e fortalecer continuamente a
            saúde mental e a gestão da empresa.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">

          {/* Linha 1: 1 → 2 → 3 */}
          <div className="reveal reveal-delay-1 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 xl:gap-6">
            <Card
              numero="1"
              titulo="Diagnosticar"
              descricao="Compreendemos a realidade da empresa e identificamos fatores de risco psicossociais, necessidades e oportunidades de melhoria."
            />

            <HorizontalArrow />

            <Card
              numero="2"
              titulo="Avaliar"
              descricao="Analisamos os dados coletados, mensuramos os impactos e definimos as prioridades conforme a NR-1 e os objetivos da organização."
            />

            <HorizontalArrow />

            <Card
              numero="3"
              titulo="Planejar"
              descricao="Estruturamos um plano de ação personalizado, com medidas práticas, responsáveis definidos, prazos e prioridades."
            />
          </div>

          {/* Seta para a segunda linha */}
          <VerticalArrow />

          {/* Linha 2: 4 → 5 → 6 */}
          <div className="reveal reveal-delay-2 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 xl:gap-6">
            <Card
              numero="4"
              titulo="Implementar"
              descricao="Apoiamos a empresa na execução das ações, envolvendo lideranças, áreas estratégicas e colaboradores de forma organizada."
            />

            <HorizontalArrow />

            <Card
              numero="5"
              titulo="Capacitar"
              descricao="Desenvolvemos treinamentos, palestras e ações educativas para fortalecer a prevenção, o engajamento e a cultura organizacional."
            />

            <HorizontalArrow />

            <Card
              numero="6"
              titulo="Monitorar"
              descricao="Acompanhamos indicadores, revisamos estratégias e ajustamos as ações para promover evolução e melhoria contínua."
            />
          </div>
        </div>

        {/* Tablet e mobile */}
        <div className="space-y-2 lg:hidden">
          <div className="reveal reveal-delay-1">
            <Card
              numero="1"
              titulo="Diagnosticar"
              descricao="Compreendemos a realidade da empresa e identificamos fatores de risco psicossociais, necessidades e oportunidades de melhoria."
            />
          </div>

          <MobileArrow />

          <div className="reveal reveal-delay-1">
            <Card
              numero="2"
              titulo="Avaliar"
              descricao="Analisamos os dados coletados, mensuramos os impactos e definimos as prioridades conforme a NR-1 e os objetivos da organização."
            />
          </div>

          <MobileArrow />

          <div className="reveal reveal-delay-2">
            <Card
              numero="3"
              titulo="Planejar"
              descricao="Estruturamos um plano de ação personalizado, com medidas práticas, responsáveis definidos, prazos e prioridades."
            />
          </div>

          <MobileArrow />

          <div className="reveal reveal-delay-2">
            <Card
              numero="4"
              titulo="Implementar"
              descricao="Apoiamos a empresa na execução das ações, envolvendo lideranças, áreas estratégicas e colaboradores de forma organizada."
            />
          </div>

          <MobileArrow />

          <div className="reveal reveal-delay-3">
            <Card
              numero="5"
              titulo="Capacitar"
              descricao="Desenvolvemos treinamentos, palestras e ações educativas para fortalecer a prevenção, o engajamento e a cultura organizacional."
            />
          </div>

          <MobileArrow />

          <div className="reveal reveal-delay-3">
            <Card
              numero="6"
              titulo="Monitorar"
              descricao="Acompanhamos indicadores, revisamos estratégias e ajustamos as ações para promover evolução e melhoria contínua."
            />
          </div>
        </div>

      </div>
    </section>
  );
}
