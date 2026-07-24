import {
  Award,
  BookOpenCheck,
  Building2,
  LucideIcon,
} from "lucide-react";

type AuthorityItemProps = {
  icon: LucideIcon;
  text: string;
};

function AuthorityItem({ icon: Icon, text }: AuthorityItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ddc27f]/10">
        <Icon className="h-5 w-5 text-[#ddc27f]" />
      </div>

      <span className="text-sm font-medium text-white sm:text-base">
        {text}
      </span>
    </div>
  );
}

export default function EbookAutoridade() {
  return (
    <section className="bg-[#153d2d] py-12 text-white md:py-24">
      <div className="container mx-auto px-5">
        <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ddc27f] sm:text-sm">
              Quem desenvolveu
            </span>

            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Conteúdo desenvolvido por quem atua com gestão psicossocial nas
              empresas.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
              A Essência Gestão Psicossocial apoia organizações na
              identificação, avaliação e gestão dos riscos psicossociais, além
              de desenvolver treinamentos, ações de liderança e programas de
              saúde mental no trabalho.
            </p>

            <p className="mt-4 hidden max-w-2xl text-base leading-7 text-white/60 md:block">
              O guia reúne orientações práticas para ajudar empresários,
              profissionais de RH, SESMT, Segurança do Trabalho e consultores a
              compreenderem melhor as etapas da implementação da NR-1.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <AuthorityItem
              icon={Building2}
              text="Visão empresarial e organizacional"
            />

            <AuthorityItem
              icon={BookOpenCheck}
              text="Conteúdo prático e aplicável"
            />

            <AuthorityItem
              icon={Award}
              text="Abordagem técnica e humana"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
