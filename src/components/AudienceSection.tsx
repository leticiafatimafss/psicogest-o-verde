import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AudienceSection() {
  const ref = useScrollReveal();

  const segmentos = [
    "Indústrias",
    "Empresas de Logística",
    "Hospitais",
    "Escritórios Corporativos",
    "Comércio",
    "Empresas de Tecnologia",
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="reveal reveal-delay-1 mt-6 text-4xl font-bold text-black">
            Soluções para diferentes segmentos
          </h2>

          <p className="reveal reveal-delay-2 mt-4 text-gray-500 max-w-2xl mx-auto">
            Nossa metodologia se adapta à realidade de empresas de diversos
            setores, garantindo conformidade com a NR-01 e fortalecendo a saúde
            psicossocial no ambiente de trabalho.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {segmentos.map((segmento, i) => (
            <div
              key={segmento}
              className={`reveal reveal-delay-${(i % 3) + 1}
                flex items-center gap-4 p-6 rounded-2xl border border-gray-200
                hover:border-[#C7A56A] hover:shadow-md transition-all`}
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
