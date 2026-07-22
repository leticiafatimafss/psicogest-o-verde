export default function MetodoSection() {
  const Card = ({
    numero,
    titulo,
    descricao,
  }: {
    numero: string;
    titulo: string;
    descricao: string;
  }) => (
    <div className="bg-[#155B38] rounded-3xl p-8 shadow-lg h-full">
      <div className="flex items-center gap-5 mb-6">
        <div className="w-14 h-14 rounded-full bg-[#C7A56A] flex items-center justify-center text-black font-bold text-xl flex-shrink-0">
          {numero}
        </div>

        <h3 className="text-3xl font-bold text-white">
          {titulo}
        </h3>
      </div>

      <p className="text-white/80 text-lg leading-8">
        {descricao}
      </p>
    </div>
  );

  const Horizontal = ({ reverse = false }) => (
    <div className="hidden lg:flex items-center justify-center w-32">
      {!reverse && <div className="h-[2px] flex-1 bg-[#C7A56A]" />}

      <div
        className={`w-0 h-0 border-y-[8px] border-y-transparent ${
          reverse
            ? "border-r-[12px] border-r-[#C7A56A]"
            : "border-l-[12px] border-l-[#C7A56A]"
        }`}
      />

      {reverse && <div className="h-[2px] flex-1 bg-[#C7A56A]" />}
    </div>
  );

  const Vertical = () => (
    <div className="hidden lg:flex justify-center py-4">
      <div className="flex flex-col items-center">
        <div className="w-[2px] h-12 bg-[#C7A56A]" />
        <div className="w-0 h-0 border-x-[8px] border-x-transparent border-t-[12px] border-t-[#C7A56A]" />
      </div>
    </div>
  );

  return (
    <section
      id="MetodoSection"
      className="bg-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span className="inline-flex px-5 py-2 rounded-full bg-[#155B38]/10 text-[#155B38] font-medium text-sm">
            Método Essência
          </span>

          <h2 className="mt-6 text-5xl font-bold text-black">
            Como conduzimos a Gestão Psicossocial
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-3xl mx-auto">
            Um processo estruturado para transformar a gestão psicossocial da
            sua empresa em conformidade com a NR-01.
          </p>

        </div>

        {/* Desktop */}
        <div className="hidden lg:block">

          {/* Linha 1 */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">

            <Card
              numero="1"
              titulo="Diagnosticar"
              descricao="Compreendemos a realidade da organização, identificando fatores de risco psicossociais e necessidades específicas."
            />

            <Horizontal />

            <Card
              numero="2"
              titulo="Avaliar"
              descricao="Realizamos análises técnicas para mensurar riscos, impactos e prioridades conforme a NR-01."
            />

          </div>

          <div className="flex justify-end pr-[24%]">
            <Vertical />
          </div>

          {/* Linha 2 */}

          <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">

            <Card
              numero="4"
              titulo="Implementar"
              descricao="Colocamos as ações em prática de forma estruturada, envolvendo lideranças e colaboradores."
            />

            <Horizontal reverse />

            <Card
              numero="3"
              titulo="Planejar"
              descricao="Desenvolvemos um plano de ação personalizado, alinhado à cultura e aos objetivos da empresa."
            />

          </div>

          <div className="flex justify-start pl-[24%]">
            <Vertical />
          </div>

          {/* Linha 3 */}

          <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">

            <Card
              numero="5"
              titulo="Capacitar"
              descricao="Promovemos treinamentos e desenvolvimento para fortalecer a prevenção e a saúde mental."
            />

            <Horizontal />

            <Card
              numero="6"
              titulo="Monitorar"
              descricao="Acompanhamos indicadores, revisamos estratégias e garantimos a melhoria contínua."
            />

          </div>

        </div>

        {/* Mobile */}

        <div className="lg:hidden space-y-6">

          <Card
            numero="1"
            titulo="Diagnosticar"
            descricao="Compreendemos a realidade da organização, identificando fatores de risco psicossociais e necessidades específicas."
          />

          <Card
            numero="2"
            titulo="Avaliar"
            descricao="Realizamos análises técnicas para mensurar riscos, impactos e prioridades conforme a NR-01."
          />

          <Card
            numero="3"
            titulo="Planejar"
            descricao="Desenvolvemos um plano de ação personalizado, alinhado à cultura e aos objetivos da empresa."
          />

          <Card
            numero="4"
            titulo="Implementar"
            descricao="Colocamos as ações em prática de forma estruturada, envolvendo lideranças e colaboradores."
          />

          <Card
            numero="5"
            titulo="Capacitar"
            descricao="Promovemos treinamentos e desenvolvimento para fortalecer a prevenção e a saúde mental."
          />

          <Card
            numero="6"
            titulo="Monitorar"
            descricao="Acompanhamos indicadores, revisamos estratégias e garantimos a melhoria contínua."
          />

        </div>

      </div>
    </section>
  );
}
