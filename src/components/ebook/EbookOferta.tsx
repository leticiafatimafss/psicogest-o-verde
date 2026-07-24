import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import { CHECKOUT_URL } from "./config";

export default function EbookHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d22] pt-20 text-white md:pt-28">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(221,194,127,0.15),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.06),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-8 pb-12 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-20 lg:pt-10">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-[#ddc27f]/20 bg-[#ddc27f]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ddc27f] md:px-4 md:py-2 md:text-xs">
              Guia prático para empresas
            </span>

            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.07] tracking-tight sm:text-5xl md:mt-6 md:text-6xl lg:mx-0">
              Guia Prático de Implementação da NR-1
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:mt-6 md:text-xl md:leading-8 lg:mx-0">
              Entenda como identificar e gerenciar os riscos psicossociais,
              organizar as etapas da implementação e estruturar um plano de ação
              para sua empresa.
            </p>

            {/* Benefícios no mobile mais curtos */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/85 md:mt-8 md:gap-x-6 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#ddc27f]" />
                Conteúdo prático
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#ddc27f]" />
                Acesso imediato
              </span>

              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#ddc27f]" />
                Garantia de 7 dias
              </span>
            </div>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-9 lg:justify-start">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ddc27f] px-6 py-4 text-base font-bold text-[#153d2d] shadow-xl transition duration-300 hover:-translate-y-0.5 hover:bg-[#ead59e] sm:w-auto md:rounded-2xl md:px-7"
              >
                Quero acessar o guia
                <ArrowRight className="h-5 w-5" />
              </a>

              <span className="inline-flex items-center gap-2 text-xs text-white/60 md:text-sm">
                <CreditCard className="h-4 w-4" />
                Pagamento seguro pela Hotmart
              </span>
            </div>

            {/* Informações extras apenas no desktop */}
            <div className="mt-8 hidden max-w-xl grid-cols-3 gap-3 md:grid">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-[#ddc27f]">30+</p>
                <p className="mt-1 text-sm text-white/65">
                  páginas de conteúdo
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-[#ddc27f]">PDF</p>
                <p className="mt-1 text-sm text-white/65">
                  acesso digital
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-[#ddc27f]">7 dias</p>
                <p className="mt-1 text-sm text-white/65">
                  de garantia
                </p>
              </div>
            </div>
          </div>

          {/* Capa */}
          <div className="mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[430px]">
            <div className="relative">
              <div className="absolute inset-8 rounded-[2rem] bg-[#ddc27f]/20 blur-3xl" />

              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md md:rounded-[2.5rem] md:p-6">
                <img
                  src="/ebook/capa-guia-nr1.png"
                  alt="Capa do Guia Prático de Implementação da NR-1"
                  className="mx-auto w-full rounded-xl object-cover shadow-2xl"
                />

                {/* Faixa inferior somente no desktop */}
                <div className="mt-4 hidden items-center justify-between rounded-2xl bg-white px-5 py-4 text-[#153d2d] md:flex">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#155b38]">
                      Investimento
                    </p>
                    <p className="mt-1 text-2xl font-bold">R$ 89</p>
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
