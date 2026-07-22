import { Check } from "lucide-react";

const segmentos = [
  "Indústrias",
  "Empresas de Logística",
  "Hospitais",
  "Escritórios Corporativos",
  "Comércio",
  "Empresas de Tecnologia",
];

export default function AudienceSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="mt-6 text-4xl font-bold text-black">
            Soluções para diferentes segmentos
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Nossa metodologia se adapta à realidade de empresas de diversos
            setores, garantindo conformidade com a NR-01 e fortalecendo a saúde
            psicossocial no ambiente de trabalho.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {segmentos.map((segmento) => (
            <div
              key={segmento}
              className="flex items-center gap-4 p-6 rounded-2xl border border-gray-200 hover:border-[#C7A56A] hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#C7A56A]/15 flex items-center justify-center flex-shrink-0">
                <Check
                  size={20}
                  className="text-[#C7A56A]"
                  strokeWidth={3}
                />
              </div>

              <span className="text-lg font-medium text-gray-800">
                {segmento}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
