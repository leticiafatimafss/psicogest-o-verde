import { Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AudienceSection() {
  const ref = useScrollReveal();

  const segmentos = [
    "Indústrias",
    "Logística",
    "Hospitais",
    "Escritórios",
    "Comércio",
    "Tecnologia",
  ];

  return (
    <section className="bg-white px-5 py-10 md:px-6 md:py-20">
      <div ref={ref} className="mx-auto max-w-6xl">

        {/* CABEÇALHO */}
        <div className="mb-7 text-center md:mb-14">

          {/* TÍTULO MOBILE */}
          <h2 className="reveal reveal-delay-1 font-heading text-[1.8rem] font-bold leading-[1.12] text-black md:hidden">
            Soluções para o
            <span className="gold-gradient-text block">
              seu segmento
            </span>
          </h2>

          {/* TÍTULO DESKTOP */}
          <h2 className="reveal reveal-delay-1 mt-6 hidden text-4xl font-bold text-black md:block">
            Soluções para diferentes segmentos
          </h2>

          {/* DESCRIÇÃO MOBILE */}
          <p className="reveal reveal-delay-2 mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-500 md:hidden">
            Adaptamos nossas soluções à realidade e às necessidades da sua
            empresa.
          </p>

          {/* DESCRIÇÃO DESKTOP */}
          <p className="reveal reveal-delay-2 mx-auto mt-4 hidden max-w-2xl text-gray-500 md:block">
            Nossa metodologia se adapta à realidade de empresas de diversos
            setores, garantindo conformidade com a NR-01 e fortalecendo a saúde
            psicossocial no ambiente de trabalho.
          </p>

        </div>

        {/* SEGMENTOS */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">

          {segmentos.map((segmento, i) => (
            <div
              key={segmento}
              className={`
                reveal reveal-delay-${(i % 3) + 1}
                flex min-h-[72px] items-center gap-2.5
                rounded-2xl border border-gray-200
                p-3 transition-all
                hover:border-[#C7A56A] hover:shadow-md
                md:min-h-0 md:gap-4 md:p-6
              `}
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C7A56A]/15 md:h-10 md:w-10">
                <Check
                  size={16}
                  className="text-[#C7A56A] md:h-5 md:w-5"
                  strokeWidth={3}
                />
              </div>

              <span className="text-[13px] font-semibold leading-tight text-gray-800 md:text-lg md:font-medium">
                {segmento}
              </span>
            </div>
          ))}

        </div>

        {/* BOTÃO */}
        <div className="reveal reveal-delay-3 mt-7 flex justify-center md:mt-12">

          <a
            href="/servicos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 sm:w-auto md:px-7 md:py-3 md:text-base"
          >
            <span className="md:hidden">Ver todas as soluções</span>

            <span className="hidden md:inline">
              Conheça nossos serviços
            </span>

            <ArrowRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}
