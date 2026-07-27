import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Download,
  ShieldCheck,
} from "lucide-react";

import { CHECKOUT_URL } from "./config";

const beneficios = [
  "Compreenda o processo antes de contratar ou executar",
  "Organize etapas, responsabilidades e registros",
  "Ganhe clareza para construir e acompanhar o plano de ação",
];

export default function EbookCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f2d22] py-12 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(221,194,127,0.14),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.05),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-md md:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="px-5 py-8 sm:px-8 md:px-12 md:py-14 lg:px-14">
              <span className="inline-flex rounded-full border border-[#ddc27f]/20 bg-[#ddc27f]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ddc27f] md:px-4 md:py-2 md:text-xs">
                Você pode continuar tentando juntar tudo sozinho...
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:mt-6 md:text-5xl">
                Ou pode começar hoje com um caminho mais claro para organizar a NR-1.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72 sm:text-base md:mt-6 md:text-lg md:leading-8">
                O guia foi criado para reduzir a confusão, melhorar suas perguntas
                e ajudar você a tomar decisões com mais segurança sobre a gestão
                dos riscos psicossociais.
              </p>

              <div className="mt-6 grid gap-3 md:mt-8">
                {beneficios.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ddc27f]" />
                    <span className="text-sm leading-6 text-white/85 md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <Download className="h-4 w-4 text-[#ddc27f]" />
                  Acesso digital
                </div>
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <ShieldCheck className="h-4 w-4 text-[#ddc27f]" />
                  Garantia de 7 dias
                </div>
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <CreditCard className="h-4 w-4 text-[#ddc27f]" />
                  Checkout Hotmart
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#f7f4eb] p-5 text-[#153d2d] sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mx-auto flex h-full max-w-md flex-col justify-center rounded-[1.5rem] bg-white p-5 shadow-xl sm:p-7 md:rounded-[2rem] md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155b38]">
                  Guia Prático de Implementação da NR-1
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                  Pare de adiar por falta de clareza.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                  Tenha um material organizado para compreender o processo,
                  conversar com sua equipe e decidir os próximos passos.
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5 md:mt-8 md:pt-7">
                  <p className="text-sm text-slate-500">Pagamento único</p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-tight text-[#155b38] md:text-5xl">
                      R$ 89
                    </span>
                  </div>

                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#155b38] px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f472d] md:mt-7 md:rounded-2xl md:px-6 md:py-4 md:text-base"
                  >
                    Quero acessar o guia
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </a>

                  <p className="mt-3 text-center text-[11px] leading-5 text-slate-500 md:text-xs">
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
