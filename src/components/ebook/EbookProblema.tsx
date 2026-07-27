import {
  AlertTriangle,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  FileWarning,
  Route,
  ShieldAlert,
  Users,
} from "lucide-react";

const situacoes = [
  "Você ouviu falar das mudanças da NR-1, mas ainda não sabe por onde começar.",
  "O RH ou o SESMT recebeu a responsabilidade, porém não existe um roteiro claro.",
  "Cada fornecedor apresenta uma interpretação diferente e isso aumenta a insegurança.",
  "Você não sabe quais documentos, registros e evidências precisam ser organizados.",
  "Existe receio de investir tempo e dinheiro e descobrir depois que o processo ficou incompleto.",
  "A empresa até realizou um diagnóstico, mas não sabe transformar os resultados em plano de ação.",
  "As responsabilidades entre direção, RH, SESMT e lideranças ainda não estão definidas.",
  "Você quer compreender o processo antes de contratar uma consultoria ou fornecedor.",
];

const impactos = [
  {
    icon: FileWarning,
    title: "Informações espalhadas",
    text: "A empresa reúne vídeos, artigos e opiniões diferentes, mas continua sem uma sequência confiável.",
  },
  {
    icon: Users,
    title: "Responsabilidades confusas",
    text: "As áreas envolvidas não sabem exatamente quem conduz, quem aprova e quem acompanha cada etapa.",
  },
  {
    icon: ClipboardCheck,
    title: "Plano de ação frágil",
    text: "Os riscos são identificados, porém as ações não ganham prioridade, prazo, responsáveis e acompanhamento.",
  },
  {
    icon: ShieldAlert,
    title: "Insegurança para decidir",
    text: "A falta de clareza gera medo de auditorias, fiscalizações, retrabalho e contratação de soluções inadequadas.",
  },
];

export default function EbookProblema() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#155b38]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#155b38] md:px-4 md:py-2 md:text-xs">
            <AlertTriangle className="h-4 w-4" />
            Isso está acontecendo na sua empresa?
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d2d] md:mt-6 md:text-5xl">
            A NR-1 está gerando mais dúvidas do que respostas?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 md:mt-6 md:text-lg md:leading-8">
            Muitas empresas sabem que precisam olhar para os riscos psicossociais,
            mas ainda não conseguiram transformar essa obrigação em um processo
            organizado, documentado e aplicável.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 md:mt-12 md:gap-4">
          {situacoes.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f9f7f1] p-4 md:p-5"
            >
              <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-[#155b38]" />
              <p className="text-sm leading-6 text-slate-700 md:text-base md:leading-7">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-[#153d2d] px-5 py-6 text-center text-white md:mt-12 md:rounded-3xl md:px-10 md:py-9">
          <p className="text-sm leading-6 text-white/75 md:text-lg md:leading-8">
            Se você se identificou com uma ou mais dessas situações, o problema
            não é falta de interesse. O que falta é um caminho mais claro para
            entender o que fazer primeiro, quem envolver e como avançar.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
          {impactos.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:rounded-3xl md:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155b38]/10">
                  <Icon className="h-5 w-5 text-[#155b38]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#153d2d]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#155b38]/10 bg-[#f7f4eb] p-5 md:mt-12 md:rounded-3xl md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#155b38]">
              <Route className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#153d2d] md:text-2xl">
                Foi para organizar esse caminho que o guia foi criado.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                Em vez de continuar juntando informações desconectadas, você passa
                a ter uma visão estruturada das etapas, responsabilidades,
                registros e decisões necessárias.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#155b38]">
                <CheckCircle2 className="h-4 w-4" />
                Clareza para compreender antes de agir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

