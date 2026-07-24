import {
  AlertTriangle,
  Brain,
  ClipboardCheck,
  FileWarning,
  Route,
  Users,
} from "lucide-react";

const desafios = [
  {
    icon: FileWarning,
    title: "Dificuldade para interpretar a NR-1",
    description:
      "Muitas empresas conhecem a obrigação, mas ainda têm dúvidas sobre o que precisa ser estruturado na prática.",
  },
  {
    icon: Brain,
    title: "Insegurança sobre riscos psicossociais",
    description:
      "Nem sempre está claro quais fatores devem ser observados, avaliados e acompanhados dentro da organização.",
  },
  {
    icon: Users,
    title: "Falta de alinhamento entre as áreas",
    description:
      "RH, SESMT, lideranças e direção precisam atuar de forma integrada para que o processo funcione.",
  },
  {
    icon: ClipboardCheck,
    title: "Dificuldade para transformar dados em ação",
    description:
      "Identificar problemas não é suficiente. É preciso definir prioridades, responsáveis e medidas de acompanhamento.",
  },
];

export default function EbookProblema() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Texto principal */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#155b38]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#155b38] md:px-4 md:py-2 md:text-xs">
              <AlertTriangle className="h-4 w-4" />
              O desafio das empresas
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d2d] md:mt-6 md:text-5xl">
              Muitas empresas sabem que precisam agir, mas ainda não sabem por
              onde começar.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 md:mt-6 md:text-lg md:leading-8">
              A implementação da NR-1 exige mais do que aplicar um questionário
              ou realizar uma ação isolada. É necessário compreender os riscos,
              organizar responsabilidades e transformar os resultados em um
              plano de ação possível de acompanhar.
            </p>

            {/* Texto extra apenas no desktop */}
            <p className="mt-4 hidden text-base leading-7 text-slate-500 md:block">
              Sem uma sequência clara, o processo pode ficar fragmentado,
              gerar retrabalho e aumentar a insegurança de quem precisa conduzir
              a implementação.
            </p>

            <div className="mt-7 rounded-2xl border border-[#155b38]/10 bg-[#f7f4eb] p-5 md:mt-8 md:rounded-3xl md:p-7">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#155b38]">
                  <Route className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#153d2d] md:text-xl">
                    O guia ajuda a organizar o caminho
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                    Você entende as etapas, identifica os principais pontos de
                    atenção e consegue visualizar os próximos passos com mais
                    clareza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-3 sm:grid-cols-2 md:gap-5">
            {desafios.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#155b38]/20 hover:shadow-xl md:rounded-3xl md:p-7"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155b38]/10 md:h-12 md:w-12 md:rounded-2xl">
                    <Icon className="h-5 w-5 text-[#155b38] md:h-6 md:w-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-snug text-[#153d2d] md:mt-5 md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 md:mt-3 md:text-base md:leading-7">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
