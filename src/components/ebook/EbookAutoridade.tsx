import { Award, BookOpen, Building2 } from "lucide-react";

export default function EbookAutoridade() {
  return (
    <section className="bg-[#153d2d] py-12 text-white md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto principal */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ddc27f] md:text-sm">
              Quem desenvolveu
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Conteúdo criado por quem atua com gestão psicossocial nas
              empresas.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
              A Essência Gestão Psicossocial apoia organizações na
              identificação, avaliação e gestão dos riscos psicossociais, além
              de desenvolver treinamentos, ações de liderança e programas de
              saúde mental no trabalho.
            </p>

            {/* Esse texto aparece apenas no computador */}
            <p className="mt-4 hidden max-w-2xl text-base leading-7 text-white/60 md:block">
              O guia foi desenvolvido para transformar informações técnicas em
              orientações mais claras e aplicáveis à realidade de empresários,
              profissionais de RH, SESMT, Segurança do Trabalho e consultores.
            </p>
          </div>

          {/* Cards de autoridade */}
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ddc27f]/10">
                <Building2 className="h-5 w-5 text-[#ddc27f]" />
              </div>

              <span className="text-sm font-medium text-white md:text-base">
                Visão empresarial e organizacional
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ddc27f]/10">
                <BookOpen className="h-5 w-5 text-[#ddc27f]" />
              </div>

              <span className="text-sm font-medium text-white md:text-base">
                Conteúdo prático e aplicável
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ddc27f]/10">
                <Award className="h-5 w-5 text-[#ddc27f]" />
              </div>

              <span className="text-sm font-medium text-white md:text-base">
                Abordagem técnica e humana
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
