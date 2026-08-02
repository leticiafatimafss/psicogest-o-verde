import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import dayseFoto from "@/assets/dayse-baltazar.png";
import lucianaFoto from "@/assets/luciana-do-prado.png";

const principios = [
  {
    titulo: "Técnica com propósito",
    descricao:
      "Conhecimento aplicado para orientar decisões responsáveis e possíveis.",
    Icone: ShieldCheck,
  },
  {
    titulo: "Pessoas no centro",
    descricao:
      "Escuta, respeito e compreensão da realidade de quem vive o trabalho.",
    Icone: HeartHandshake,
  },
  {
    titulo: "Transformação prática",
    descricao:
      "Soluções que saem do diagnóstico e chegam ao dia a dia da empresa.",
    Icone: Target,
  },
];

const diferenciais = [
  "Experiência em gestão de pessoas",
  "Visão psicológica, jurídica e organizacional",
  "Soluções adaptadas a cada empresa",
  "Atuação próxima da diretoria, do RH e do SESMT",
];

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-[#f7f5ef]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#092b22_0%,#0d3a2d_48%,#155b38_100%)] px-5 pb-14 pt-32 text-white md:px-6 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#c7a56a]/20 blur-3xl" />
          <div className="absolute inset-x-0 top-[88px] h-px bg-gradient-to-r from-transparent via-[#d8ba72]/40 to-transparent" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e3c477] backdrop-blur-sm md:text-xs">
                <Sparkles size={14} />
                Quem somos
              </div>

              <h1 className="mt-5 max-w-4xl font-heading text-[2.35rem] font-bold leading-[1.08] md:mt-7 md:text-6xl lg:text-7xl">
                Transformamos desafios humanos
                <span className="block text-[#d9b969]">
                  em soluções estratégicas.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:mt-7 md:text-xl md:leading-8">
                A Essência une experiência em gestão, Psicologia e
                desenvolvimento humano para transformar desafios psicossociais
                em estratégias aplicáveis.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
                <a
                  href="#nossa-historia"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c7a56a] px-6 py-3.5 text-sm font-bold text-[#092b22] transition-all hover:-translate-y-0.5 hover:bg-[#d8b971]"
                >
                  Conheça a Essência
                  <ArrowRight size={17} />
                </a>

                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/[0.12]"
                >
                  Fale com nossa equipe
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section
          id="nossa-historia"
          className="scroll-mt-24 px-5 py-12 md:px-6 md:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ad8d4d]">
                Nossa história
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-[#0f2d22] md:text-5xl">
                Experiência que se transforma em cuidado e estratégia
              </h2>
            </div>

            <div className="rounded-[1.75rem] border border-[#155b38]/10 bg-white p-6 shadow-[0_16px_45px_rgba(13,58,45,0.07)] md:p-8">
              <p className="text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                A Essência nasceu da união entre experiência empresarial,
                gestão de pessoas, Psicologia e saúde mental. Compreendemos que
                cada organização possui desafios próprios e que soluções
                genéricas raramente produzem mudanças consistentes.
              </p>

              <p className="mt-4 hidden text-base leading-7 text-slate-600 md:block">
                Por isso, aproximamos conhecimento técnico da realidade do
                trabalho para ajudar empresas a prevenir riscos, preparar
                lideranças e implantar melhorias com propósito.
              </p>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#155b38]/[0.06] p-4">
                <Lightbulb
                  size={20}
                  className="mt-0.5 shrink-0 text-[#ad8d4d]"
                />

                <p className="text-sm font-semibold leading-6 text-[#0f2d22]">
                  Mais do que apontar problemas, ajudamos a construir o caminho
                  para solucioná-los.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCÍPIOS */}
        <section className="bg-[#0d3a2d] px-5 py-12 text-white md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b969]">
                O que nos move
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
                Técnica, proximidade e ação
              </h2>

              <p className="mx-auto mt-4 hidden max-w-2xl text-base leading-7 text-white/65 md:block">
                Princípios que orientam cada diagnóstico, decisão e projeto
                desenvolvido pela Essência.
              </p>
            </div>

            <div className="mt-7 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
              {principios.map(({ titulo, descricao, Icone }) => (
                <article
                  key={titulo}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 md:block md:rounded-[1.75rem] md:p-7"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c7a56a]/15 text-[#e3c477] md:h-12 md:w-12 md:rounded-2xl">
                    <Icone size={21} />
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold md:mt-5 md:text-2xl">
                      {titulo}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-white/65 md:mt-3 md:text-sm md:leading-6">
                      {descricao}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SÓCIAS */}
        <section className="px-5 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ad8d4d]">
                Nossas sócias
              </span>

              <h2 className="mt-3 font-heading text-3xl font-bold text-[#0f2d22] md:text-5xl">
                Quem está à frente da Essência
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-lg md:leading-8">
                Duas trajetórias que unem visão humana, experiência empresarial
                e compromisso com a saúde no trabalho.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:mt-12 md:grid-cols-2">
              {/* LUCIANA */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#155b38]/10 bg-white shadow-[0_16px_45px_rgba(13,58,45,0.08)]">
                <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-[#ad8d4d] to-[#e3c477]" />

                <div className="aspect-[16/11] overflow-hidden bg-[#eee7dd]">
                  <img
                    src={lucianaFoto}
                    alt="Luciana do Prado, sócia-fundadora da Essência"
                    className="h-full w-full object-cover object-[center_24%] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#0f2d22]">
                      Luciana do Prado
                    </h3>

                    <p className="mt-1 text-sm font-bold text-[#ad8d4d]">
                      Sócia-Fundadora e Psicóloga
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                    Bacharel em Psicologia, pós-graduada em Gestão de Recursos
                    Humanos e Psicologia do Trabalho e pós-graduanda em
                    Psicopatologia. Especialista em Terapia
                    Cognitivo-Comportamental (TCC) e Suicidologia. Na Essência,
                    contribui com seu olhar técnico na construção de
                    diagnósticos, ações preventivas, treinamentos e soluções
                    voltadas às empresas e aos colaboradores.
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#155b38]">
                    <HeartHandshake size={17} className="text-[#ad8d4d]" />
                    Psicologia e desenvolvimento humano
                  </div>
                </div>
              </article>

              {/* DAYSE */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#155b38]/10 bg-white shadow-[0_16px_45px_rgba(13,58,45,0.08)]">
                <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-[#ad8d4d] to-[#e3c477]" />

                <div className="aspect-[16/11] overflow-hidden bg-[#eee7dd]">
                  <img
                    src={dayseFoto}
                    alt="Dayse Baltazar, sócia-fundadora da Essência"
                    className="h-full w-full object-cover object-[center_24%] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#0f2d22]">
                      Dayse Baltazar
                    </h3>

                    <p className="mt-1 text-sm font-bold text-[#ad8d4d]">
                      Consultora Jurídica | Compliance Trabalhista e NR-1
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                    Bacharel em Direito, pós-graduada em Direito Empresarial,
                    graduanda em Psicologia e Psicanálise e pós-graduanda em
                    Neurociência na Prática Clínica. Possui mais de 30 anos de
                    experiência em gestão de pessoas e processos
                    organizacionais. Na Essência, integra as perspectivas
                    jurídica, empresarial e humana na construção de
                    diagnósticos, ações preventivas, treinamentos e soluções
                    voltadas às empresas e aos colaboradores.
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#155b38]">
                    <Scale size={17} className="text-[#ad8d4d]" />
                    Gestão, estratégia e visão humana
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL + CTA */}
        <section className="px-5 pb-12 md:px-6 md:pb-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f2d22,#155b38)] p-6 text-white shadow-[0_24px_70px_rgba(13,58,45,0.2)] md:p-12 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d9b969]">
                  <BriefcaseBusiness size={16} />
                  Nosso diferencial
                </div>

                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-5xl">
                  Diferentes experiências. Uma atuação integrada.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/70 md:text-base md:leading-7">
                  Essa combinação permite compreender as necessidades da
                  empresa e das pessoas para construir soluções mais completas.
                </p>
              </div>

              <div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {diferenciais.map((diferencial) => (
                    <div
                      key={diferencial}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#e3c477]"
                      />

                      <span className="text-xs font-semibold leading-5 text-white/85 md:text-sm">
                        {diferencial}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/#contato"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c7a56a] px-6 py-4 text-sm font-bold text-[#092b22] transition-all hover:-translate-y-0.5 hover:bg-[#d8b971] sm:w-auto"
                >
                  Falar com a nossa equipe
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
