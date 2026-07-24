import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Download,
  ShieldCheck,
} from "lucide-react";

import { CHECKOUT_URL } from "./config";

export default function EbookCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d22] py-12 text-white md:py-24">
      {/* Efeitos de fundo — mais discretos no mobile */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(221,194,127,0.12),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.05),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-md md:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* Lado esquerdo */}
            <div className="px-5 py-8 sm:px-8 md:px-12 md:py-14 lg:px-14">
              <span className="inline-flex rounded-full border border-[#ddc27f]/20 bg-[#ddc27f]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ddc27f] md:px-4 md:py-2 md:text-xs">
                Acesso imediato
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:mt-6 md:text-5xl">
                Comece a organizar a implementação da NR-1 com mais clareza.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base md:mt-6 md:text-lg md:leading-8">
                Tenha um material prático para compreender os riscos
                psicossociais, estruturar as etapas do processo e orientar as
                primeiras decisões da sua empresa.
              </p>

              {/* Versão mobile mais enxuta */}
              <div className="mt-6 grid gap-3 md:mt-8">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ddc27f]/10 md:h-10 md:w-10 md:rounded-xl">
                    <Download className="h-4 w-4 text-[#ddc27f] md:h-5 md:w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white md:text-base">
                      Recebimento digital
                    </p>
                    <p className="mt-0.5 hidden text-sm text-white/55 md:block">
                      Acesso ao material após a confirmação do pagamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ddc27f]/10 md:h-10 md:w-10 md:rounded-xl">
                    <ShieldCheck className="h-4 w-4 text-[#ddc27f] md:h-5 md:w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white md:text-base">
                      Garantia de 7 dias
                    </p>
                    <p className="mt-0.5 hidden text-sm text-white/55 md:block">
                      Compra protegida conforme as condições da Hotmart.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ddc27f]/10 md:h-10 md:w-10 md:rounded-xl">
                    <CreditCard className="h-4 w-4 text-[#ddc27f] md:h-5 md:w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white md:text-base">
                      Pagamento seguro
                    </p>
                    <p className="mt-0.5 hidden text-sm text-white/55 md:block">
                      Checkout processado pela plataforma Hotmart.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de compra */}
            <div className="border-t border-white/10 bg-[#f7f4eb] p-5 text-[#153d2d] sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mx-auto flex h-full max-w-md flex-col justify-center rounded-[1.5rem] bg-white p-5 shadow-xl sm:p-7 md:rounded-[2rem] md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155b38]">
                  Guia Prático de Implementação da NR-1
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                  Um primeiro passo para organizar sua empresa.
                </h3>

                {/* Lista reduzida no mobile */}
                <div className="mt-5 space-y-2.5 md:mt-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#155b38] md:h-5 md:w-5" />
                    <span className="text-sm text-slate-700 md:text-base">
                      Conteúdo digital e prático
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#155b38] md:h-5 md:w-5" />
                    <span className="text-sm text-slate-700 md:text-base">
                      Orientações sobre NR-1 e riscos psicossociais
                    </span>
                  </div>

                  <div className="hidden items-start gap-2.5 md:flex">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#155b38]" />
                    <span className="text-base text-slate-700">
                      Material desenvolvido pela Essência Gestão Psicossocial
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5 md:mt-8 md:pt-7">
                  <p className="text-sm text-slate-500">Investimento</p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-tight text-[#155b38] md:text-5xl">
                      R$ 89
                    </span>
                    <span className="pb-1 text-sm text-slate-500">
                      pagamento único
                    </span>
                  </div>

                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#155b38] px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#0f472d] md:mt-7 md:rounded-2xl md:px-6 md:py-4 md:text-base"
                  >
                    Comprar o guia
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </a>

                  <p className="mt-3 text-center text-[11px] leading-5 text-slate-500 md:mt-4 md:text-xs">
                    Você será direcionado para o checkout seguro da Hotmart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
