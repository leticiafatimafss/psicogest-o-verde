import { ArrowDown } from "lucide-react";

const etapas = [
  {
    titulo: "Diagnosticar",
    descricao:
      "Compreendemos a realidade da organização, identificando fatores de risco psicossociais e necessidades específicas.",
  },
  {
    titulo: "Avaliar",
    descricao:
      "Realizamos análises técnicas para mensurar riscos, impactos e prioridades conforme a NR-01.",
  },
  {
    titulo: "Planejar",
    descricao:
      "Desenvolvemos um plano de ação personalizado, alinhado à cultura e aos objetivos da empresa.",
  },
  {
    titulo: "Implementar",
    descricao:
      "Colocamos as ações em prática de forma estruturada, envolvendo lideranças e colaboradores.",
  },
  {
    titulo: "Capacitar",
    descricao:
      "Promovemos treinamentos e desenvolvimento para fortalecer a prevenção e a saúde mental.",
  },
  {
    titulo: "Monitorar",
    descricao:
      "Acompanhamos indicadores, revisamos estratégias e garantimos a melhoria contínua.",
  },
];

export default function MetodoSection() {
  return (
    <section
      id="MetodoSection"
      className="bg-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#0F5132]/10 text-[#0F5132] font-medium text-sm">
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

        <div className="flex flex-col">

          {etapas.map((etapa, index) => (

            <div key={index}>

              <div
                className={`flex ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                <div className="w-full md:w-[70%] bg-[#0F5132] rounded-3xl p-10 shadow-lg">

                  <div className="flex items-center gap-5 mb-6">

                    <div className="w-14 h-14 rounded-full bg-[#C7A56A] flex items-center justify-center text-black font-bold text-xl">
                      {index + 1}
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {etapa.titulo}
                    </h3>

                  </div>

                  <p className="text-white/80 leading-8 text-lg">
                    {etapa.descricao}
                  </p>

                </div>

              </div>

              {index < etapas.length - 1 && (

                <div className="flex justify-center py-6">

                  <ArrowDown
                    size={34}
                    strokeWidth={1.5}
                    className="text-[#C7A56A]"
                  />

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
