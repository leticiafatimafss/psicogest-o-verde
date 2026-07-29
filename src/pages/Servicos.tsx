import { useState } from "react";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const servicos = [
  {
    numero: "01",
    categoria: "Diagnosticar e adequar",
    titulo: "Gestão de Riscos Psicossociais e NR-1",
    resumo:
      "Identificamos riscos, definimos prioridades e estruturamos um plano de ação aplicável à realidade da empresa.",
    ideal: "Empresas que precisam mapear riscos e avançar com segurança na NR-1.",
    entregas: [
      "Diagnóstico por setores e grupos",
      "Dashboards e classificação dos riscos",
      "Relatório executivo e plano de ação",
    ],
    beneficio:
      "Mais clareza para decidir, agir e documentar as medidas adotadas.",
    chamada: "Quero avaliar minha empresa",
    Icone: ShieldCheck,
    destaque: true,
  },
  {
    numero: "02",
    categoria: "Orientar e acompanhar",
    titulo: "Consultoria Psicossocial",
    resumo:
      "Apoiamos diretoria, RH e SESMT na implantação das melhorias e na condução das demandas psicossociais.",
    ideal:
      "Empresas que precisam de apoio especializado nas decisões e na execução.",
    entregas: [
      "Reuniões técnicas e estratégicas",
      "Acompanhamento do plano de ação",
      "Indicadores, evidências e recomendações",
    ],
    beneficio:
      "Decisões mais seguras e continuidade após o diagnóstico.",
    chamada: "Quero apoio na implantação",
    Icone: BriefcaseBusiness,
  },
  {
    numero: "03",
    categoria: "Preparar quem lidera",
    titulo: "Desenvolvimento de Lideranças",
    resumo:
      "Preparamos líderes para reconhecer riscos, comunicar-se melhor e conduzir equipes de forma mais saudável.",
    ideal:
      "Organizações que desejam fortalecer a liderança e prevenir conflitos.",
    entregas: [
      "Trilhas de desenvolvimento",
      "Comunicação e gestão de conflitos",
      "Prevenção do assédio e apoio às equipes",
    ],
    beneficio:
      "Lideranças mais conscientes, preparadas e alinhadas à cultura desejada.",
    chamada: "Quero desenvolver lideranças",
    Icone: Users,
  },
  {
    numero: "04",
    categoria: "Desenvolver competências",
    titulo: "Treinamentos e Workshops",
    resumo:
      "Transformamos temas técnicos e comportamentais em experiências práticas para equipes e lideranças.",
    ideal:
      "Empresas que precisam desenvolver habilidades e mudar práticas do dia a dia.",
    entregas: [
      "Conteúdo personalizado",
      "Atividades e estudos de caso",
      "Materiais de apoio e orientação",
    ],
    beneficio:
      "Aprendizado aplicável, participação ativa e mudança de comportamento.",
    chamada: "Quero capacitar minha equipe",
    Icone: GraduationCap,
  },
  {
    numero: "05",
    categoria: "Sensibilizar e engajar",
    titulo: "Palestras e Campanhas Corporativas",
    resumo:
      "Criamos ações de conscientização com linguagem acessível, conteúdo relevante e conexão com a realidade das equipes.",
    ideal:
      "Empresas que buscam mobilizar pessoas em datas, campanhas ou temas estratégicos.",
    entregas: [
      "Palestras presenciais ou online",
      "Campanhas temáticas",
      "Rodas de conversa e ações internas",
    ],
    beneficio:
      "Mais alcance, conscientização e engajamento dos colaboradores.",
    chamada: "Quero planejar uma ação",
    Icone: Megaphone,
  },
  {
    numero: "06",
    categoria: "Cuidar e prevenir",
    titulo: "Programas de Saúde Mental e Bem-Estar",
    resumo:
      "Desenvolvemos jornadas contínuas de prevenção e promoção da saúde emocional, alinhadas às necessidades da organização.",
    ideal:
      "Empresas que desejam construir uma cultura permanente de cuidado e prevenção.",
    entregas: [
      "Programas preventivos personalizados",
      "Calendário de ações e conteúdos",
      "Eventos e iniciativas de bem-estar",
    ],
    beneficio:
      "Cuidado contínuo, fortalecimento da cultura e ações com propósito.",
    chamada: "Quero conhecer os programas",
    Icone: HeartHandshake,
  },
];

const comparacao = [
  {
    necessidade: "Identificar e priorizar riscos",
    solucao: "Gestão Psicossocial e NR-1",
    resultado: "Diagnóstico e plano de ação",
    Icone: BarChart3,
  },
  {
    necessidade: "Executar e acompanhar melhorias",
    solucao: "Consultoria Psicossocial",
    resultado: "Suporte técnico contínuo",
    Icone: ClipboardCheck,
  },
  {
    necessidade: "Preparar líderes e equipes",
    solucao: "Treinamentos e Lideranças",
    resultado: "Competências aplicáveis",
    Icone: GraduationCap,
  },
  {
    necessidade: "Sensibilizar e mobilizar pessoas",
    solucao: "Palestras e Campanhas",
    resultado: "Conscientização e engajamento",
    Icone: MessagesSquare,
  },
];

export default function Servicos() {
  const [servicoAberto, setServicoAberto] = useState<string | null>("01");

  const alternarServico = (numero: string) => {
    setServicoAberto((atual) => (atual === numero ? null : numero));
  };

  return (
    <div className="min-h-screen bg-[#f7f5ef]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#092b22_0%,#0d3a2d_48%,#155b38_100%)] px-5 pb-10 pt-28 text-white md:px-6 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#c7a56a]/20 blur-3xl" />
          <div className="absolute inset-x-0 top-[88px] h-px bg-gradient-to-r from-transparent via-[#d8ba72]/40 to-transparent" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e3c477] backdrop-blur-sm md:text-xs">
                <Sparkles size={14} />
                Soluções Essência
              </div>

              <h1 className="mt-4 max-w-4xl font-heading text-[2.15rem] font-bold leading-[1.08] md:mt-7 md:text-6xl lg:text-7xl">
                O desafio da sua empresa
                <span className="block text-[#d9b969]">
                  pede a solução certa.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 md:mt-7 md:text-xl md:leading-8">
                A Essência identifica o que precisa mudar, estrutura as ações e
                apoia sua empresa na implantação das melhorias.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-9">
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c7a56a] px-6 py-3.5 text-sm font-bold text-[#092b22] transition-all hover:-translate-y-0.5 hover:bg-[#d8b971]"
                >
                  Encontrar a solução ideal
                  <ArrowRight size={17} />
                </a>

                <a
                  href="/#contato"
                  className="hidden items-center justify-center rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/[0.12] sm:inline-flex"
                >
                  Solicitar proposta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ENTRADA COMERCIAL */}
        <section className="hidden px-5 py-10 md:block md:px-6 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.75rem] border border-[#155b38]/10 bg-white p-6 shadow-[0_16px_45px_rgba(13,58,45,0.07)] md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-10 lg:p-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ad8d4d] md:text-xs">
                Por onde começar?
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#0f2d22] md:text-4xl">
                Primeiro entendemos o momento da sua empresa.
              </h2>
            </div>

            <div className="border-t border-[#155b38]/10 pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                Seja para atender à NR-1, implantar um plano de ação, preparar
                lideranças ou engajar equipes, indicamos uma solução coerente
                com a necessidade e o resultado esperado.
              </p>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section
          id="solucoes"
          className="scroll-mt-24 px-5 py-10 md:px-6 md:pb-20 md:pt-0"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ad8d4d]">
                Nossos serviços
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#0f2d22] md:text-5xl">
                Encontre a solução para o seu desafio
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-lg md:leading-8">
                Conheça as diferenças, as entregas e o principal benefício de
                cada serviço.
              </p>
            </div>

            {/* Mobile: cards com conteúdo essencial */}
            <div className="mt-6 space-y-2.5 md:hidden">
              {servicos.map(
                ({
                  numero,
                  categoria,
                  titulo,
                  beneficio,
                  chamada,
                  Icone,
                }) => (
                  <article
                    key={numero}
                    className="overflow-hidden rounded-2xl border border-[#155b38]/10 bg-white shadow-[0_10px_28px_rgba(13,58,45,0.06)]"
                  >
                    <button
                      type="button"
                      onClick={() => alternarServico(numero)}
                      aria-expanded={servicoAberto === numero}
                      className="flex w-full items-center gap-3 p-4 text-left"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#155b38] text-white">
                        <Icone size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#ad8d4d]">
                          {categoria}
                        </span>
                        <h3 className="mt-0.5 text-sm font-bold leading-tight text-[#0f2d22]">
                          {titulo}
                        </h3>
                      </div>

                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#ad8d4d] transition-transform duration-300 ${
                          servicoAberto === numero ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        servicoAberto === numero
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#155b38]/10 px-4 pb-4 pt-3">
                          <p className="text-xs font-semibold leading-5 text-[#0f2d22]">
                            {beneficio}
                          </p>

                          <a
                            href="/#contato"
                            className="mt-3 flex items-center justify-between rounded-xl bg-[#155b38] px-4 py-3 text-xs font-bold text-white"
                          >
                            {chamada}
                            <ChevronRight size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>

            {/* Desktop: cards comerciais completos */}
            <div className="mt-12 hidden grid-cols-2 gap-5 md:grid">
              {servicos.map(
                ({
                  numero,
                  categoria,
                  titulo,
                  resumo,
                  ideal,
                  entregas,
                  beneficio,
                  chamada,
                  Icone,
                  destaque,
                }) => (
                  <article
                    key={numero}
                    className={`group relative overflow-hidden rounded-[1.75rem] border bg-white p-7 shadow-[0_16px_45px_rgba(13,58,45,0.07)] transition-all duration-300 hover:-translate-y-1 ${
                      destaque
                        ? "border-[#c7a56a]/50"
                        : "border-[#155b38]/10"
                    }`}
                  >
                    {destaque && (
                      <div className="absolute right-5 top-5 rounded-full bg-[#c7a56a]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8d6d2f]">
                        Solução completa
                      </div>
                    )}

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#155b38] text-white">
                      <Icone size={22} />
                    </div>

                    <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#ad8d4d]">
                      {numero} · {categoria}
                    </span>
                    <h3 className="mt-2 max-w-lg font-heading text-2xl font-bold leading-tight text-[#0f2d22]">
                      {titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {resumo}
                    </p>

                    <div className="mt-5 rounded-xl bg-[#f4f7f5] p-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#155b38]">
                        Ideal para
                      </span>
                      <p className="mt-1.5 text-sm leading-6 text-slate-600">
                        {ideal}
                      </p>
                    </div>

                    <div className="mt-5 space-y-2.5">
                      {entregas.map((entrega) => (
                        <div
                          key={entrega}
                          className="flex items-center gap-3 text-sm text-slate-700"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c7a56a]/20 text-[#8d6d2f]">
                            <Check size={13} strokeWidth={3} />
                          </div>
                          {entrega}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-[#155b38]/10 pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ad8d4d]">
                        Benefício principal
                      </span>
                      <p className="mt-1.5 text-sm font-semibold leading-6 text-[#0f2d22]">
                        {beneficio}
                      </p>
                    </div>

                    <a
                      href="/#contato"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ad8d4d] transition-all hover:gap-3 hover:text-[#8d6d2f]"
                    >
                      {chamada}
                      <ArrowRight size={16} />
                    </a>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        {/* COMPARAÇÃO */}
        <section className="hidden bg-[#0d3a2d] px-5 py-12 text-white md:block md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b969]">
                  Escolha com clareza
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-5xl">
                  Qual é o momento da sua empresa?
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/65 md:text-base md:leading-7">
                  Veja qual solução atende melhor à necessidade atual. Quando
                  necessário, combinamos diferentes serviços no mesmo projeto.
                </p>
              </div>

              <div className="space-y-3">
                {comparacao.map(
                  ({ necessidade, solucao, resultado, Icone }) => (
                    <article
                      key={necessidade}
                      className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:grid-cols-[auto_1fr_1fr] sm:items-center md:p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c7a56a]/15 text-[#e3c477]">
                        <Icone size={19} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
                          Se a empresa precisa
                        </span>
                        <p className="mt-1 text-sm font-semibold text-white">
                          {necessidade}
                        </p>
                      </div>
                      <div className="border-t border-white/10 pt-3 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                        <p className="text-sm font-bold text-[#e3c477]">
                          {solucao}
                        </p>
                        <p className="mt-1 text-xs text-white/55">{resultado}</p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS + CTA */}
        <section className="px-5 pb-10 md:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 rounded-[1.5rem] bg-white p-5 shadow-[0_20px_65px_rgba(13,58,45,0.1)] md:gap-8 md:rounded-[2rem] md:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-14">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ad8d4d]">
                  <TrendingUp size={16} />
                  Uma solução para a sua realidade
                </div>
                <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#0f2d22] md:mt-4 md:text-5xl">
                  Não sabe qual serviço escolher?
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 md:mt-4 md:text-base md:leading-7">
                  Conte o momento da sua empresa. Nós analisamos a necessidade e
                  indicamos o melhor ponto de partida, sem soluções genéricas.
                </p>
              </div>

              <div>
                <div className="hidden grid-cols-2 gap-3 md:grid">
                  {[
                    "Soluções personalizadas",
                    "Visão técnica e humana",
                    "Aplicação prática",
                    "Acompanhamento especializado",
                  ].map((beneficio) => (
                    <div
                      key={beneficio}
                      className="rounded-xl border border-[#155b38]/10 bg-[#155b38]/[0.05] p-3.5"
                    >
                      <Target size={17} className="text-[#ad8d4d]" />
                      <p className="mt-2 text-xs font-bold leading-5 text-[#0f2d22] md:text-sm">
                        {beneficio}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/#contato"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ad8d4d] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#bb9a58] md:mt-6"
                >
                  Solicitar uma proposta personalizada
                  <ChevronRight size={17} />
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
