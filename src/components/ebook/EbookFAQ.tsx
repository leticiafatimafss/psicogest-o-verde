import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    pergunta: "Este guia substitui uma consultoria?",
    resposta:
      "Não. O guia oferece uma visão estruturada da implementação e ajuda a empresa a compreender etapas, responsabilidades e decisões. Projetos completos podem exigir avaliação técnica, participação de profissionais e acompanhamento especializado.",
  },
  {
    pergunta: "Consigo entender mesmo sem experiência com NR-1?",
    resposta:
      "Sim. O conteúdo foi escrito de forma clara para empresários, RH, SESMT, gestores e profissionais que estão começando no tema.",
  },
  {
    pergunta: "O guia serve para empresas pequenas?",
    resposta:
      "Sim. A lógica de organização pode ser usada por empresas de diferentes portes. A profundidade e a forma de execução devem ser adaptadas à realidade de cada organização.",
  },
  {
    pergunta: "O material ensina apenas a aplicar questionário?",
    resposta:
      "Não. O questionário pode fazer parte da avaliação, mas a gestão envolve planejamento, participação das áreas, análise, plano de ação, registros e acompanhamento.",
  },
  {
    pergunta: "Posso usar o guia para avaliar uma proposta de consultoria?",
    resposta:
      "Sim. O material ajuda você a compreender o processo e a formular perguntas melhores antes de contratar fornecedores ou aprovar um projeto.",
  },
  {
    pergunta: "O guia aborda riscos psicossociais e plano de ação?",
    resposta:
      "Sim. Esses são pontos centrais do material, sempre apresentados dentro de uma visão mais ampla de implementação e gestão.",
  },
  {
    pergunta: "Como receberei o material?",
    resposta:
      "Após a confirmação do pagamento, o acesso ao PDF é liberado pela Hotmart.",
  },
  {
    pergunta: "O pagamento é seguro?",
    resposta:
      "Sim. O pagamento é processado pela Hotmart, em ambiente seguro.",
  },
  {
    pergunta: "Existe garantia?",
    resposta:
      "Sim. A compra possui garantia de 7 dias, conforme as condições apresentadas no checkout da Hotmart.",
  },
];

export default function EbookFAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="bg-[#f7f4eb] py-12 md:py-24">
      <div className="container mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#155b38] md:text-sm">
            Perguntas frequentes
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#153d2d] md:text-5xl">
            Tire suas dúvidas antes de decidir.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-lg md:leading-8">
            Reunimos as principais dúvidas de quem está começando a organizar a
            implementação da NR-1.
          </p>
        </div>

        <div className="mt-8 space-y-3 md:mt-12 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.pergunta}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setAberto(aberto === index ? null : index)}
                aria-expanded={aberto === index}
                className="flex w-full items-center justify-between px-5 py-5 text-left transition hover:bg-slate-50 md:px-8"
              >
                <span className="pr-4 text-base font-semibold text-[#153d2d] md:text-lg">
                  {faq.pergunta}
                </span>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
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
