import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HelpCircle,
  Route,
  Users,
} from "lucide-react";

const duvidas = [
  "Não sabe por onde começar a implementação.",
  "Tem dúvidas sobre quais riscos psicossociais avaliar.",
  "Não sabe quais documentos precisam ser organizados.",
  "Recebe informações diferentes de cada fornecedor.",
  "Não sabe como transformar os resultados em plano de ação.",
  "Tem dificuldade para definir os responsáveis por cada etapa.",
  "Tem receio de fazer um processo incompleto.",
  "Quer compreender melhor a NR-1 antes de contratar uma consultoria.",
];

const dificuldades = [
  {
    icon: FileText,
    title: "Informações espalhadas",
    description:
      "A empresa encontra vídeos, artigos e opiniões diferentes, mas continua sem uma sequência clara.",
  },
  {
    icon: Users,
    title: "Falta de alinhamento",
    description:
      "Direção, RH, SESMT e lideranças ainda não compreendem exatamente suas responsabilidades.",
  },
  {
    icon: ClipboardCheck,
    title: "Dificuldade para agir",
    description:
      "Os riscos podem até ser identificados, mas não são transformados em ações, prazos e responsáveis.",
  },
];

export default function EbookProblema() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        {/* Título */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#155b38]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#155b38]">
            <AlertTriangle className="h-4 w-4" />
            O desafio das empresas
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#153d2d] md:text-5xl">
            A implementação da NR-1 está gerando mais dúvidas do que respostas?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-lg md:leading-8">
            Muitas empresas sabem que precisam agir, mas ainda não conseguiram
            transformar as exigências relacionadas aos riscos psicossociais em
            um processo claro, organizado e possível de acompanhar.
          </p>
        </div>

        {/* Perguntas de identificação */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 md:mt-14 md:gap-4">
          {duvidas.map((duvida) => (
            <div
              key={duvida}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f7f4eb] p-4 md:p-5"
            >
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#155b38]" />

              <p className="text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                {duvida}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de identificação */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-[#153d2d] px-5 py-7 text-center text-white md:mt-12 md:rounded-3xl md:px-10 md:py-9">
          <p className="text-base leading-7 text-white/80 md:text-xl md:leading-8">
            Se você se identificou com uma ou mais dessas situações, este guia
            foi desenvolvido para ajudar sua empresa a compreender o processo e
            organizar os próximos passos.
          </p>
        </div>

        {/* Principais dificuldades */}
        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
          {dificuldades.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:rounded-3xl md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#155b38]/10">
                  <Icon className="h-5 w-5 text-[#155b38]" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[#153d2d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Apresentação da solução */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-[#155b38]/15 bg-[#f7f4eb] p-5 md:mt-14 md:rounded-3xl md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#155b38]">
              <Route className="h-6 w-6 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#153d2d] md:text-3xl">
                O guia ajuda você a visualizar o caminho.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base md:leading-7">
                Em vez de continuar reunindo informações desconectadas, você
                passa a compreender as etapas da implementação, as áreas que
                precisam participar e os pontos que devem ser organizados.
              </p>

              <div className="mt-4 flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#155b38]" />

                <p className="text-sm font-semibold leading-6 text-[#155b38] md:text-base">
                  Mais clareza para entender, planejar e tomar decisões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
