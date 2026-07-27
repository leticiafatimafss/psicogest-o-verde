import {
  BriefcaseBusiness,
  Building2,
  HardHat,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const publicos = [
  {
    icon: Building2,
    title: "Empresários e diretores",
    description:
      "Para quem precisa compreender as responsabilidades da empresa, avaliar propostas e tomar decisões com mais segurança.",
  },
  {
    icon: UsersRound,
    title: "Profissionais de RH",
    description:
      "Para equipes que participam da gestão de pessoas, clima organizacional, saúde mental e desenvolvimento das lideranças.",
  },
  {
    icon: HardHat,
    title: "SESMT e Segurança do Trabalho",
    description:
      "Para profissionais envolvidos no GRO, PGR, prevenção de riscos, registros e acompanhamento das medidas adotadas.",
  },
  {
    icon: HeartHandshake,
    title: "Psicólogos organizacionais",
    description:
      "Para quem atua com saúde mental no trabalho e precisa compreender como sua contribuição se conecta à gestão dos riscos psicossociais.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultores",
    description:
      "Para profissionais que desejam organizar sua visão sobre a implementação e orientar empresas com mais clareza.",
  },
  {
    icon: ShieldCheck,
    title: "Gestores e lideranças",
    description:
      "Para quem precisa entender seu papel na prevenção, no acompanhamento das equipes e na execução das ações.",
  },
];

export default function EbookPublico() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#155b38] md:text-sm">
            Para quem é este guia
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d2d] md:text-5xl">
            Para quem participa das decisões e precisa compreender o processo
            antes de agir.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-lg md:leading-8">
            Você não precisa ser especialista em NR-1. O guia foi desenvolvido
            para quem precisa ganhar clareza, alinhar as áreas envolvidas e
            tomar decisões com mais segurança.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {publicos.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[#f7f4eb] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg md:rounded-3xl md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#155b38] md:h-12 md:w-12">
                    <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-[#153d2d] md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-[#153d2d] px-5 py-7 text-white md:mt-14 md:rounded-3xl md:px-10 md:py-9">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ddc27f]">
                Não é necessário ser especialista
              </p>

              <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                O conteúdo foi escrito de forma clara, direta e acessível.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70 md:text-base md:leading-7">
                Mesmo quem está começando no tema consegue compreender os
                principais conceitos, identificar os pontos de atenção e
                visualizar uma sequência prática de implementação.
              </p>
            </div>

            <div className="hidden md:flex">
              <UsersRound className="h-14 w-14 text-[#ddc27f]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-[#155b38]/15 bg-[#f7f4eb] px-5 py-6 text-center md:mt-8 md:px-8 md:py-7">
          <p className="text-sm leading-6 text-slate-700 md:text-base md:leading-7">
            Mesmo quando a empresa decide contratar uma consultoria, compreender
            o processo ajuda a avaliar propostas, acompanhar entregas e evitar
            decisões baseadas apenas em promessas comerciais.
          </p>
        </div>
      </div>
    </section>
  );
}
