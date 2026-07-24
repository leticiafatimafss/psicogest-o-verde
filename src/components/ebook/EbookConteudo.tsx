import {
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  FileText,
  ListChecks,
  Route,
} from "lucide-react";

const conteudos = [
  {
    icon: BookOpenCheck,
    title: "Compreensão da NR-1",
    description:
      "Entenda os principais pontos da norma e como os riscos psicossociais se conectam ao gerenciamento de riscos ocupacionais.",
  },
  {
    icon: Route,
    title: "Etapas da implementação",
    description:
      "Visualize uma sequência prática para organizar o processo, definir responsabilidades e evitar ações desconectadas.",
  },
  {
    icon: ClipboardList,
    title: "Identificação dos riscos",
    description:
      "Conheça os principais fatores psicossociais que podem afetar a saúde, a segurança e o desempenho das equipes.",
  },
  {
    icon: FileText,
    title: "Organização das informações",
    description:
      "Saiba como estruturar dados, registros e evidências para apoiar a gestão e a tomada de decisões.",
  },
  {
    icon: ListChecks,
    title: "Construção do plano de ação",
    description:
      "Aprenda a transformar os resultados encontrados em prioridades, medidas preventivas e ações de acompanhamento.",
  },
  {
    icon: CheckCircle2,
    title: "Aplicação prática",
    description:
      "Use o conteúdo como apoio para iniciar conversas internas e organizar os próximos passos da empresa.",
  },
];

export default function EbookConteudo() {
  return (
    <section className="bg-[#f7f4eb] py-12 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155b38] md:text-sm">
            O que você encontrará
          </span>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#153d2d] md:mt-4 md:text-5xl">
            Um conteúdo organizado para ajudar você a sair da dúvida e avançar
            com mais segurança.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:mt-6 md:text-lg md:leading-8">
            O guia apresenta os principais conceitos e etapas da implementação
            de maneira clara, prática e conectada à realidade das empresas.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {conteudos.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#153d2d]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:rounded-3xl md:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155b38]/10 md:h-12 md:w-12 md:rounded-2xl">
                  <Icon className="h-5 w-5 text-[#155b38] md:h-6 md:w-6" />
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#153d2d] md:mt-6 md:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 md:mt-3 md:text-base md:leading-7">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#155b38]/10 bg-[#155b38] px-5 py-6 text-white md:mt-14 md:rounded-3xl md:px-10 md:py-9">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ddc27f]">
                Mais do que informação
              </p>

              <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                Um material para orientar os primeiros passos da empresa.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70 md:text-base md:leading-7">
                O objetivo do guia é ajudar você a compreender o processo,
                organizar prioridades e tomar decisões com mais clareza.
              </p>
            </div>

            <div className="hidden md:block">
              <BookOpenCheck className="h-14 w-14 text-[#ddc27f]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
