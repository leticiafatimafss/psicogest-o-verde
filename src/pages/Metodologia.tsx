import {
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const etapas = [
  {
    numero: "01",
    titulo: "Entendemos",
    descricao:
      "Conhecemos a empresa, sua cultura, seus processos e seus principais desafios.",
    detalhes:
      "O projeto começa com escuta e alinhamento entre diretoria, RH, SESMT e lideranças.",
    Icone: Search,
  },
  {
    numero: "02",
    titulo: "Analisamos",
    descricao:
      "Transformamos informações em riscos, prioridades e oportunidades de melhoria.",
    detalhes:
      "Organizamos os dados por unidade, setor, função ou grupo ocupacional.",
    Icone: BarChart3,
  },
  {
    numero: "03",
    titulo: "Agimos",
    descricao:
      "Aplicamos as soluções mais adequadas às necessidades identificadas.",
    detalhes:
      "Definimos ações, responsáveis, prazos, indicadores e evidências.",
    Icone: Lightbulb,
  },
  {
    numero: "04",
    titulo: "Acompanhamos",
    descricao:
      "Monitoramos as ações, os indicadores e a evolução da organização.",
    detalhes:
      "Avaliamos resultados, ajustamos estratégias e fortalecemos a prevenção.",
    Icone: ClipboardCheck,
  },
];

const solucoes = [
  {
    titulo: "Gestão de riscos psicossociais",
    descricao:
      "Diagnóstico, classificação, plano de ação e suporte à adequação à NR-1.",
    Icone: ShieldCheck,
  },
  {
    titulo: "Consultoria estratégica",
    descricao:
      "Apoio técnico para diretoria, RH e SESMT na tomada de decisões.",
    Icone: BriefcaseBusiness,
  },
  {
    titulo: "Desenvolvimento de lideranças",
    descricao:
      "Preparação de líderes para comunicação, prevenção e gestão de pessoas.",
    Icone: Users,
  },
  {
    titulo: "Treinamentos e workshops",
    descricao:
      "Conteúdos aplicáveis às necessidades das equipes e da organização.",
    Icone: GraduationCap,
  },
  {
    titulo: "Palestras e programas corporativos",
    descricao:
      "Ações de conscientização, prevenção e promoção da saúde emocional.",
    Icone: MessagesSquare,
  },
];

const resultados = [
  "Decisões baseadas em dados",
  "Lideranças mais preparadas",
  "Riscos identificados e acompanhados",
  "Planos de ação aplicáveis",
  "Fortalecimento do RH e do SESMT",
  "Cultura de prevenção e cuidado",
];

export default function Metodologia() {
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
                Método Essência
              </div>

              <h1 className="mt-5 max-w-4xl font-heading text-[2.3rem] font-bold leading-[1.08] md:mt-7 md:text-6xl lg:text-7xl">
                Entender antes de agir.
                <span className="block text-[#d9b969]">
                  Agir para transformar.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:mt-7 md:text-xl md:leading-8">
                Nosso método começa pela realidade da empresa e avança até a
                implantação e o acompanhamento das melhorias.
              </p>

              {/* Texto complementar somente em telas maiores */}
              <p className="mt-4 hidden max-w-2xl text-base leading-7 text-white/60 md:block">
                Em cada etapa, conectamos base técnica, visão humana e ação
                prática para gerar soluções coerentes com os desafios da
                organização.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c7a56a] px-6 py-3.5 text-sm font-bold text-[#092b22] transition-all hover:-translate-y-0.5 hover:bg-[#d8b971]"
                >
                  Conheça o método
                  <ArrowRight size={17} />
                </a>

                <a
                  href="/#contato"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/[0.12]"
                >
                  Fale com um especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEXTO: POR QUE O MÉTODO EXISTE */}
        <section className="px-5 py-10 md:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 rounded-[1.75rem] border border-[#155b38]/10 bg-white p-6 shadow-[0_16px_45px_rgba(13,58,45,0.07)] md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-10 lg:p-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ad8d4d] md:text-xs">
                  Nosso ponto de partida
                </span>
                <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#0f2d22] md:text-4xl">
                  Diagnosticar é importante. Transformar é o objetivo.
                </h2>
              </div>

              <div className="border-t border-[#155b38]/10 pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <p className="text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  Não aplicamos soluções prontas. Primeiro entendemos o
                  contexto, depois definimos prioridades e só então escolhemos
                  as ações mais adequadas.
                </p>
                <p className="mt-3 hidden text-sm leading-6 text-slate-500 md:block">
                  Assim, diagnóstico, consultoria, NR-1, treinamentos, palestras
                  e desenvolvimento de lideranças passam a fazer parte de uma
                  mesma estratégia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ETAPAS */}
        <section
          id="como-funciona"
          className="scroll-mt-24 bg-[#0d3a2d] px-5 py-12 text-white md:px-6 md:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b969]">
                  O caminho
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
                  Uma etapa conduz à próxima
                </h2>
              </div>

              <p className="hidden max-w-xl text-base leading-7 text-white/65 md:block">
                Entendemos o cenário, definimos prioridades, aplicamos as
                soluções e acompanhamos sua evolução.
              </p>
            </div>

            {/* Mobile: jornada curta */}
            <div className="mt-7 space-y-3 md:hidden">
              {etapas.map(({ numero, titulo, descricao, Icone }) => (
                <article
                  key={numero}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c7a56a]/15 text-[#e3c477]">
                    <Icone size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-[0.16em] text-[#d9b969]">
                        {numero}
                      </span>
                      <h3 className="text-base font-bold">{titulo}</h3>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-white/65">
                      {descricao}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Desktop e tablet: etapas completas */}
            <div className="mt-12 hidden grid-cols-2 gap-5 md:grid lg:grid-cols-4">
              {etapas.map(
                ({ numero, titulo, descricao, detalhes, Icone }) => (
                  <article
                    key={numero}
                    className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold tracking-[0.18em] text-[#d9b969]">
                        {numero}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c7a56a]/15 text-[#e3c477]">
                        <Icone size={20} />
                      </div>
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold">
                      {titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/75">
                      {descricao}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-white/45">
                      {detalhes}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#ad8d4d] to-[#e3c477]" />
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES APLICADAS */}
        <section className="px-5 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ad8d4d]">
                Depois do diagnóstico
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#0f2d22] md:text-5xl">
                As prioridades definem as ações
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-lg md:leading-8">
                A partir do que foi identificado, selecionamos as soluções que
                realmente fazem sentido para a empresa.
              </p>
            </div>

            {/* Mobile: lista horizontal compacta */}
            <div className="-mx-5 mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 md:hidden">
              {solucoes.map(({ titulo, descricao, Icone }) => (
                <article
                  key={titulo}
                  className="w-[78vw] max-w-[310px] shrink-0 snap-center rounded-2xl border border-[#155b38]/10 bg-white p-5 shadow-[0_12px_35px_rgba(13,58,45,0.08)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#155b38] text-white">
                    <Icone size={19} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0f2d22]">
                    {titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {descricao}
                  </p>
                </article>
              ))}
            </div>

            {/* Desktop e tablet */}
            <div className="mt-12 hidden grid-cols-2 gap-5 md:grid lg:grid-cols-5">
              {solucoes.map(({ titulo, descricao, Icone }) => (
                <article
                  key={titulo}
                  className="rounded-[1.5rem] border border-[#155b38]/10 bg-white p-5 shadow-[0_14px_40px_rgba(13,58,45,0.07)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#155b38] text-white">
                    <Icone size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-tight text-[#0f2d22]">
                    {titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADOS + CTA */}
        <section className="px-5 pb-12 md:px-6 md:pb-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f2d22,#155b38)] p-6 text-white shadow-[0_24px_70px_rgba(13,58,45,0.2)] md:p-12 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d9b969]">
                  <Brain size={16} />
                  O ciclo continua
                </div>
                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-5xl">
                  Acompanhamos para evoluir
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/70 md:text-base md:leading-7">
                  Verificamos o andamento das ações, observamos os indicadores
                  e ajustamos a estratégia sempre que necessário.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3">
                  {resultados.map((resultado) => (
                    <div
                      key={resultado}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#e3c477]"
                      />
                      <span className="text-xs font-semibold text-white/85 md:text-sm">
                        {resultado}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/#contato"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c7a56a] px-6 py-4 text-sm font-bold text-[#092b22] transition-all hover:-translate-y-0.5 hover:bg-[#d8b971] sm:w-auto"
                >
                  Quero conhecer as soluções
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
