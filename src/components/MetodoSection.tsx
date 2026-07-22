import { ArrowRight } from "lucide-react";

const etapas = [
  {
    titulo: "Diagnosticar",
    descricao:
      "Compreendemos a realidade da organização, identificando fatores de risco psicossociais e necessidades específicas."
  },
  {
    titulo: "Avaliar",
    descricao:
      "Realizamos análises técnicas para mensurar riscos, impactos e prioridades conforme a NR-01."
  },
  {
    titulo: "Planejar",
    descricao:
      "Desenvolvemos um plano de ação personalizado, alinhado à cultura e aos objetivos da empresa."
  },
  {
    titulo: "Implementar",
    descricao:
      "Colocamos as ações em prática de forma estruturada, envolvendo lideranças e colaboradores."
  },
  {
    titulo: "Capacitar",
    descricao:
      "Promovemos treinamentos e desenvolvimento para fortalecer a prevenção e a saúde mental."
  },
  {
    titulo: "Monitorar",
    descricao:
      "Acompanhamos indicadores, revisamos estratégias e garantimos a melhoria contínua."
  }
];

export default function Metodo() {
  return (
    <section
  id="metodo"
  className="min-h-screen bg-[#0F5132] text-white py-24 px-6"
>
      <div className="max-w-6xl mx-auto">

        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm">
          Método Essência
        </span>

        <h1 className="text-5xl font-bold mt-8">
          Como conduzimos a Gestão Psicossocial
        </h1>

        <p className="text-xl text-white/80 mt-6 max-w-3xl">
          Nosso método foi desenvolvido para apoiar empresas desde o diagnóstico
          inicial até o acompanhamento contínuo, garantindo conformidade com a
          NR-01 e ambientes de trabalho mais saudáveis.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {etapas.map((etapa, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#C7A56A] text-black font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <h2 className="text-2xl font-semibold">
                  {etapa.titulo}
                </h2>
              </div>

              <p className="text-white/75 leading-7">
                {etapa.descricao}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
