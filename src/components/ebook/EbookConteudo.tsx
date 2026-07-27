import {
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  FileText,
  ListChecks,
  Route,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const conteudos = [
  {
    icon: BookOpenCheck,
    title: "Compreensão da NR-1",
    description:
      "Entenda a relação entre o gerenciamento de riscos ocupacionais e os fatores psicossociais no trabalho.",
  },
  {
    icon: Route,
    title: "Sequência de implementação",
    description:
      "Visualize o que deve ser organizado primeiro, quais etapas vêm depois e como evitar ações soltas.",
  },
  {
    icon: ClipboardList,
    title: "Identificação dos riscos",
    description:
      "Conheça os principais fatores psicossociais e os pontos que precisam ser observados na realidade da empresa.",
  },
  {
    icon: UsersRound,
    title: "Papéis e responsabilidades",
    description:
      "Compreenda como direção, RH, SESMT, lideranças e trabalhadores podem participar do processo.",
  },
  {
    icon: CalendarDays,
    title: "Planejamento e cronograma",
    description:
      "Organize prazos, responsáveis e prioridades para transformar intenção em execução.",
  },
  {
    icon: ListChecks,
    title: "Plano de ação",
    description:
      "Saiba como transformar os resultados encontrados em medidas preventivas, prioridades e acompanhamento.",
  },
  {
    icon: FileText,
    title: "Documentação",
    description:
      "Entenda quais registros e evidências ajudam a demonstrar que a gestão foi estruturada.",
  },
  {
    icon: FileCheck2,
    title: "Checklists e conferência",
    description:
      "Use listas práticas para verificar o que já foi feito e o que ainda precisa ser desenvolvido.",
  },
  {
    icon: ShieldCheck,
    title: "Erros que devem ser evitados",
    description:
      "Reconheça falhas comuns, como tratar o processo como ação isolada ou limitar tudo à aplicação de um questionário.",
  },
];

export default function EbookConteudo() {
  return (
    <section className="bg-[#f7f4eb] py-12 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155b38] md:text-sm">
            O que você encontrará no guia
          </span>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#153d2d] md:mt-4 md:text-5xl">
            Um conteúdo pensado para transformar dúvida em direção prática.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 md:mt-6 md:text-lg md:leading-8">
            Você não recebe apenas explicações sobre a norma. O material ajuda a
            compreender o processo completo e a visualizar como cada etapa se
            conecta à próxima.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3">
          {conteudos.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#153d2d]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:rounded-3xl md:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155b38]/10 md:h-12 md:w-12 md:rounded-2xl">
                  <Icon className="h-5 w-5 text-[#155b38] md:h-6 md:w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#153d2d] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:mt-14 md:grid-cols-2">
          <div className="rounded-2xl bg-[#153d2d] p-5 text-white md:rounded-3xl md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ddc27f]">
              Antes do guia
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Informações espalhadas</h3>
            <p className="mt-3 text-sm leading-6 text-white/70 md:text-base">
              Vídeos, artigos, opiniões diferentes e muita dificuldade para
              transformar conhecimento em uma sequência de trabalho.
            </p>
          </div>

          <div className="rounded-2xl border border-[#155b38]/15 bg-white p-5 md:rounded-3xl md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#155b38]">
              Com o guia
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[#153d2d]">
              Um caminho organizado
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
              Uma visão estruturada para compreender o processo, conversar com
              fornecedores e tomar decisões com mais segurança.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#155b38]/10 bg-white px-5 py-6 md:mt-12 md:rounded-3xl md:px-8 md:py-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#155b38]" />
            <p className="text-sm leading-6 text-slate-700 md:text-lg md:leading-8">
              O objetivo não é prometer que um PDF substitui toda a complexidade
              de uma implantação. É oferecer clareza suficiente para que você
              saiba o que perguntar, o que organizar e quais decisões precisam
              ser tomadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
