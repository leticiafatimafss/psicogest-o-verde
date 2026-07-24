import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    pergunta: "Este guia substitui uma consultoria?",
    resposta:
      "Não. O guia foi desenvolvido para orientar empresas e profissionais sobre a implementação da NR-1 e a gestão dos riscos psicossociais. Para projetos completos, a Essência oferece consultoria especializada.",
  },
  {
    pergunta: "Para quem este material é indicado?",
    resposta:
      "Empresários, profissionais de RH, SESMT, Segurança do Trabalho, psicólogos organizacionais, consultores e gestores que desejam compreender melhor a implementação da NR-1.",
  },
  {
    pergunta: "Como receberei o material?",
    resposta:
      "Após a confirmação do pagamento pela Hotmart, o acesso ao guia é liberado imediatamente na plataforma.",
  },
  {
    pergunta: "O pagamento é seguro?",
    resposta:
      "Sim. Todo o processamento é realizado pela Hotmart, que oferece diferentes formas de pagamento e ambiente seguro.",
  },
  {
    pergunta: "Existe garantia?",
    resposta:
      "Sim. A compra possui garantia de 7 dias conforme a política da Hotmart.",
  },
  {
    pergunta: "O guia serve para qualquer empresa?",
    resposta:
      "Sim. O conteúdo foi elaborado para empresas de diferentes portes e segmentos que desejam compreender melhor as exigências relacionadas aos riscos psicossociais.",
  },
];

export default function EbookFAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto max-w-4xl px-5">

        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155b38] md:text-sm">
            Perguntas Frequentes
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#153d2d] md:text-5xl">
            Ainda ficou alguma dúvida?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-lg md:leading-8">
            Respondemos abaixo as perguntas que recebemos com mais frequência.
          </p>
        </div>

        <div className="mt-10 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setAberto(aberto === index ? null : index)
                }
                className="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-slate-50 md:px-8"
              >
                <span className="pr-4 text-base font-semibold text-[#153d2d] md:text-lg">
                  {faq.pergunta}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    aberto === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aberto === index && (
                <div className="border-t border-slate-100 px-5 pb-5 pt-4 md:px-8">
                  <p className="text-sm leading-7 text-slate-600 md:text-base">
                    {faq.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
