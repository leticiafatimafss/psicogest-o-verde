  ArrowRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import { CHECKOUT_URL } from "./config";

const destaques = [
  "Passo a passo da implementação",
  "Riscos psicossociais e plano de ação",
  "Conteúdo direto e aplicável",
];

export default function EbookHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d22] pt-20 text-white md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(221,194,127,0.16),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.06),transparent_32%)]" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-9 pb-12 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-20">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-[#ddc27f]/20 bg-[#ddc27f]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ddc27f] md:px-4 md:py-2 md:text-xs">
              Guia prático para empresas
            </span>

            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:mt-6 md:text-6xl lg:mx-0">
              Organize a implementação da NR-1 com mais clareza, segurança e direção.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/78 md:mt-6 md:text-xl md:leading-8 lg:mx-0">
              Um guia desenvolvido para empresários, RH, SESMT, profissionais de
              Segurança do Trabalho e consultores que precisam compreender os
              riscos psicossociais e transformar a norma em um processo prático.
            </p>

            <div className="mt-6 grid gap-2 text-left sm:grid-cols-3 md:mt-8">
              {destaques.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ddc27f]" />
                  <span className="text-sm leading-5 text-white/85">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-9 lg:justify-start">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ddc27f] px-6 py-4 text-base font-bold text-[#153d2d] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#ead59e] sm:w-auto md:rounded-2xl md:px-8"
              >
                Quero acessar o guia
                <ArrowRight className="h-5 w-5" />
              </a>

              <span className="inline-flex items-center gap-2 text-xs text-white/60 md:text-sm">
                <CreditCard className="h-4 w-4" />
                Pagamento seguro pela Hotmart
              </span>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white/65 md:text-sm lg:justify-start">
              <span>PDF com acesso imediato</span>
              <span className="hidden sm:inline">•</span>
              <span>Pagamento único de R$ 89</span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#ddc27f]" />
                Garantia de 7 dias
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[440px]">
            <div className="relative">
              <div className="absolute inset-8 rounded-[2rem] bg-[#ddc27f]/20 blur-3xl" />
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md md:rounded-[2.5rem] md:p-6">
                <img
                  src="/ebook/capa-guia-nr1.png"
                  alt="Capa do Guia Prático de Implementação da NR-1"
                  className="mx-auto w-full rounded-xl object-cover shadow-2xl"
                />

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
