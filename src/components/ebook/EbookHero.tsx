import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import { CHECKOUT_URL } from "./config";

const beneficios = [
  "Passo a passo da implementação",
  "Gestão dos riscos psicossociais",
  "Orientações para o plano de ação",
];

export default function EbookHero() {
  return (
    <section className="bg-[#0f2d22] pt-24 text-white md:pt-32">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-24">
          {/* Conteúdo */}
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full border border-[#ddc27f]/30 bg-[#ddc27f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#ddc27f]">
              Guia prático para empresas
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Organize a implementação da NR-1 com mais clareza e segurança.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              Um guia para empresários, RH, SESMT, profissionais de Segurança do
              Trabalho e consultores que precisam compreender os riscos
              psicossociais e organizar os próximos passos da empresa.
            </p>

            <div className="mt-7 space-y-3">
              {beneficios.map((beneficio) => (
                <div
                  key={beneficio}
                  className="flex items-center justify-center gap-3 lg:justify-start"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ddc27f]" />

                  <span className="text-sm text-white/85 md:text-base">
                    {beneficio}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ddc27f] px-7 py-4 text-base font-bold text-[#153d2d] shadow-lg transition hover:bg-[#ead59e] sm:w-auto"
              >
                Quero acessar o guia
                <ArrowRight className="h-5 w-5" />
              </a>

              <div className="flex items-center gap-2 text-sm text-white/60">
                <CreditCard className="h-4 w-4" />
                Pagamento seguro pela Hotmart
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 md:max-w-xl md:gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center md:p-4">
                <p className="text-lg font-bold text-[#ddc27f] md:text-2xl">
                  PDF
                </p>

                <p className="mt-1 text-xs text-white/60 md:text-sm">
                  Acesso digital
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center md:p-4">
                <p className="text-lg font-bold text-[#ddc27f] md:text-2xl">
                  R$ 89
                </p>

                <p className="mt-1 text-xs text-white/60 md:text-sm">
                  Pagamento único
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center md:p-4">
                <p className="flex items-center justify-center gap-1 text-lg font-bold text-[#ddc27f] md:text-2xl">
                  <ShieldCheck className="h-5 w-5" />
                  7
                </p>

                <p className="mt-1 text-xs text-white/60 md:text-sm">
                  Dias de garantia
                </p>
              </div>
            </div>
          </div>

          {/* Capa do guia */}
          <div className="mx-auto w-full max-w-xl xl:max-w-2xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl md:p-6">
              <img
                src="/capa-guia-nr1.png"
                alt="Capa do Guia Prático de Implementação da NR-1"
                className="h-auto w-full rounded-2xl object-cover shadow-xl"
              />

              <div className="mt-4 rounded-2xl bg-white p-5 text-[#153d2d]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#155b38]">
                      Acesso imediato
                    </p>

                    <p className="mt-1 text-3xl font-bold">R$ 89</p>
                  </div>

                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#155b38] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0f472d]"
                  >
                    Comprar
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
