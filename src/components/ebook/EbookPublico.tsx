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
      "Para quem precisa compreender as responsabilidades da empresa e tomar decisões com mais segurança.",
  },
  {
    icon: UsersRound,
    title: "Profissionais de RH",
    description:
      "Para equipes que participam da gestão de pessoas, clima organizacional, saúde mental e desenvolvimento de lideranças.",
  },
  {
    icon: HardHat,
    title: "SESMT e Segurança do Trabalho",
    description:
      "Para profissionais envolvidos no GRO, PGR, prevenção de riscos e organização das evidências do processo.",
  },
  {
    icon: HeartHandshake,
    title: "Psicólogos organizacionais",
    description:
      "Para quem atua com saúde mental no trabalho, avaliação psicossocial e apoio às ações preventivas.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Consultores",
    description:
      "Para profissionais que desejam ampliar seu repertório e apoiar empresas na estruturação da implementação.",
  },
  {
    icon: ShieldCheck,
    title: "Gestores e lideranças",
    description:
      "Para quem precisa entender seu papel na prevenção, no acompanhamento das equipes e na construção de ambientes mais seguros.",
  },
];

export default function EbookPublico() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155b38] md:text-sm">
            Para quem é este guia
          </span>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#153d2d] md:mt-4 md:text-5xl">
            Um material pensado para quem participa das decisões e da
            implementação.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:mt-6 md:text-lg md:leading-8">
            O conteúdo foi desenvolvido para profissionais que precisam
            compreender a NR-1, os riscos psicossociais e os próximos passos da
            empresa.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {publicos.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-[#f7f4eb] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#155b38]/20 hover:bg-white hover:shadow-xl md:rounded-3xl md:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#155b38] md:h-12 md:w-12 md:rounded-2xl">
                    <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-[#153d2d] md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 md:mt-3 md:text-base md:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#155b38]/10 bg-[#153d2d] px-5 py-6 text-white md:mt-14 md:rounded-3xl md:px-10 md:py-9">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ddc27f]">
                Não é necessário ser especialista
              </p>

              <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                O conteúdo foi escrito de forma clara e acessível.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70 md:text-base md:leading-7">
                Mesmo quem está começando no tema consegue compreender os
                conceitos e visualizar uma sequência prática de implementação.
              </p>
            </div>

            <div className="hidden md:flex">
              <UsersRound className="h-14 w-14 text-[#ddc27f]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
