import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Brain,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  HeartHandshake,
  HelpCircle,
  MessageCircleMore,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const pilares = [
  {
    icon: ShieldCheck,
    titulo: "Prevenção",
    texto:
      "Atuação sobre fatores presentes na organização, na gestão e nas condições de trabalho antes que produzam consequências mais graves.",
  },
  {
    icon: Brain,
    titulo: "Promoção da saúde",
    texto:
      "Ações educativas, campanhas, espaços de diálogo e iniciativas que ampliem a consciência e o cuidado com a saúde mental.",
  },
  {
    icon: HeartHandshake,
    titulo: "Acolhimento",
    texto:
      "Canais seguros de orientação, escuta e encaminhamento para trabalhadores que necessitem de apoio.",
  },
  {
    icon: BarChart3,
    titulo: "Monitoramento",
    texto:
      "Acompanhamento de indicadores para avaliar resultados, identificar mudanças e aperfeiçoar continuamente o programa.",
  },
];

const etapas = [
  {
    numero: "01",
    icon: Activity,
    titulo: "Realizar um diagnóstico",
    texto:
      "Compreender os fatores de riscos psicossociais, as necessidades das equipes, os indicadores internos e as características da organização.",
  },
  {
    numero: "02",
    icon: Target,
    titulo: "Definir objetivos e prioridades",
    texto:
      "Estabelecer quais problemas serão tratados, quais públicos serão priorizados e quais resultados a empresa pretende alcançar.",
  },
  {
    numero: "03",
    icon: Users,
    titulo: "Envolver lideranças e trabalhadores",
    texto:
      "Criar participação, apoio da direção, comunicação transparente e responsabilidades claras para a execução do programa.",
  },
  {
    numero: "04",
    icon: CalendarCheck,
    titulo: "Planejar as ações",
    texto:
      "Construir um calendário com medidas organizacionais, treinamentos, campanhas, escuta, acolhimento e desenvolvimento de lideranças.",
  },
  {
    numero: "05",
    icon: HeartHandshake,
    titulo: "Implantar os canais de apoio",
    texto:
      "Definir formas seguras de orientação, acolhimento, encaminhamento e atendimento, preservando privacidade e confidencialidade.",
  },
  {
    numero: "06",
    icon: BarChart3,
    titulo: "Medir os resultados",
    texto:
      "Acompanhar adesão, percepção das equipes, riscos identificados, ações executadas e evolução dos indicadores escolhidos.",
  },
  {
    numero: "07",
    icon: RefreshCw,
    titulo: "Revisar continuamente",
    texto:
      "Atualizar o programa conforme os resultados, mudanças organizacionais e novas necessidades dos trabalhadores.",
  },
];

const acoes = [
  "Diagnóstico dos fatores de riscos psicossociais",
  "Plano de ação preventivo e corretivo",
  "Capacitação e desenvolvimento de lideranças",
  "Palestras e workshops corporativos",
  "Rodas de conversa e espaços de escuta",
  "Campanhas de conscientização",
  "Prevenção ao assédio e à violência no trabalho",
  "Canal de orientação e acolhimento",
  "Fluxo de encaminhamento para atendimento",
  "Ações de prevenção ao estresse e ao esgotamento",
  "Programas de equilíbrio e recuperação",
  "Monitoramento dos indicadores organizacionais",
];

const indicadores = [
  {
    icon: TrendingUp,
    titulo: "Absenteísmo",
    texto: "Faltas, atrasos e padrões de ausência.",
  },
  {
    icon: Users,
    titulo: "Rotatividade",
    texto: "Desligamentos, permanência e motivos de saída.",
  },
  {
    icon: Activity,
    titulo: "Afastamentos",
    texto: "Ocorrências e evolução dos afastamentos relacionados à saúde.",
  },
  {
    icon: MessageCircleMore,
    titulo: "Percepção das equipes",
    texto: "Resultados de avaliações e espaços de participação.",
  },
  {
    icon: CalendarCheck,
    titulo: "Adesão",
    texto: "Participação nas ações e utilização dos recursos oferecidos.",
  },
  {
    icon: ShieldCheck,
    titulo: "Execução do plano",
    texto: "Percentual de ações concluídas e efetividade das medidas.",
  },
];

const erros = [
  {
    titulo: "Realizar apenas uma palestra por ano",
    texto:
      "Palestras podem conscientizar, mas não formam sozinhas um programa contínuo nem corrigem fatores presentes na organização do trabalho.",
  },
  {
    titulo: "Responsabilizar individualmente o trabalhador",
    texto:
      "O programa não deve tratar todo sofrimento como falta de resiliência. É necessário analisar as condições e os fatores relacionados ao trabalho.",
  },
  {
    titulo: "Criar ações sem diagnóstico",
    texto:
      "Sem conhecer as necessidades reais, a empresa pode investir em atividades que não tratam seus principais riscos e problemas.",
  },
  {
    titulo: "Oferecer terapia como única solução",
    texto:
      "O atendimento individual pode ser importante, mas precisa ser acompanhado de ações preventivas sobre as causas organizacionais.",
  },
  {
    titulo: "Não preparar as lideranças",
    texto:
      "Gestores influenciam demandas, comunicação, reconhecimento, segurança psicológica e relações de trabalho.",
  },
  {
    titulo: "Não medir os resultados",
    texto:
      "Sem indicadores, a empresa não consegue saber se as ações foram executadas nem se produziram melhorias.",
  },
];

const perguntas = [
  {
    pergunta: "O que é um programa de saúde mental corporativa?",
    resposta:
      "É um conjunto planejado e contínuo de medidas destinadas a prevenir riscos, promover saúde mental, oferecer apoio e acompanhar os resultados dentro da organização.",
  },
  {
    pergunta: "Toda empresa precisa ter um programa de saúde mental?",
    resposta:
      "O formato depende da realidade e dos riscos existentes. Entretanto, as organizações precisam gerenciar os fatores de riscos psicossociais relacionados ao trabalho e adotar medidas de prevenção adequadas.",
  },
  {
    pergunta: "Uma palestra já é considerada um programa?",
    resposta:
      "Não. Uma palestra é uma ação pontual que pode integrar o programa. Um programa estruturado possui diagnóstico, objetivos, planejamento, responsáveis, continuidade e indicadores.",
  },
  {
    pergunta: "Qual é a diferença entre saúde mental e gestão psicossocial?",
    resposta:
      "A saúde mental é um campo amplo. A gestão psicossocial corporativa concentra-se na identificação e no controle dos fatores relacionados à organização, às condições e às relações de trabalho.",
  },
  {
    pergunta: "Psicoterapia substitui a gestão dos riscos psicossociais?",
    resposta:
      "Não. Psicoterapia e acolhimento podem apoiar trabalhadores, mas não substituem intervenções preventivas sobre sobrecarga, liderança, assédio, jornadas, autonomia e outros fatores organizacionais.",
  },
  {
    pergunta: "Quais profissionais devem participar?",
    resposta:
      "A composição depende da estrutura da empresa e pode envolver direção, RH, SST, SESMT quando existente, lideranças, trabalhadores e profissionais especializados.",
  },
  {
    pergunta: "Como saber quais ações a empresa precisa?",
    resposta:
      "O primeiro passo é realizar um diagnóstico. A partir dos riscos, necessidades e grupos prioritários identificados, a organização define as ações mais adequadas.",
  },
  {
    pergunta: "Como medir os resultados do programa?",
    resposta:
      "A empresa pode acompanhar indicadores de processo e resultado, como adesão, execução do plano, percepção das equipes, absenteísmo, rotatividade e evolução dos riscos avaliados.",
  },
];

const SaudeMentalCorporativa = () => {
  useEffect(() => {
    const tituloAnterior = document.title;

    document.title =
      "Programa de Saúde Mental Corporativa: Como Criar | Essência Psi";

    const descricao =
      "Aprenda como criar um programa de saúde mental corporativa com diagnóstico, prevenção, liderança, acolhimento, plano de ação e indicadores.";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    const descricaoAnterior = metaDescription.content;
    metaDescription.content = descricao;

    const canonicalAnterior = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    const canonical = canonicalAnterior ?? document.createElement("link");
    const canonicalAnteriorHref = canonical.href;

    canonical.rel = "canonical";
    canonical.href =
      "https://essenciapsicossocial.com.br/blog/programas-de-saude-mental-corporativa";

    if (!canonicalAnterior) {
      document.head.appendChild(canonical);
    }

    const artigoSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Programa de saúde mental corporativa: como criar ações efetivas",
      description: descricao,
      datePublished: "2026-07-29",
      dateModified: "2026-07-29",
      author: {
        "@type": "Organization",
        name: "Essência Psi",
      },
      publisher: {
        "@type": "Organization",
        name: "Essência Psi",
        logo: {
          "@type": "ImageObject",
          url: "https://essenciapsicossocial.com.br/favicon.png",
        },
      },
      mainEntityOfPage:
        "https://essenciapsicossocial.com.br/blog/programas-de-saude-mental-corporativa",
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: perguntas.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.resposta,
        },
      })),
    };

    const scriptArtigo = document.createElement("script");
    scriptArtigo.type = "application/ld+json";
    scriptArtigo.text = JSON.stringify(artigoSchema);
    scriptArtigo.setAttribute("data-seo", "article-saude-mental");

    const scriptFAQ = document.createElement("script");
    scriptFAQ.type = "application/ld+json";
    scriptFAQ.text = JSON.stringify(faqSchema);
    scriptFAQ.setAttribute("data-seo", "faq-saude-mental");

    document.head.appendChild(scriptArtigo);
    document.head.appendChild(scriptFAQ);

    return () => {
      document.title = tituloAnterior;
      metaDescription.content = descricaoAnterior;
      scriptArtigo.remove();
      scriptFAQ.remove();

      if (!canonicalAnterior) {
        canonical.remove();
      } else {
        canonical.href = canonicalAnteriorHref;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* HERO */}
        <header className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/10 via-background to-background pb-14 pt-32 md:pb-20 md:pt-40">
          <div
            aria-hidden="true"
            className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="container relative mx-auto max-w-6xl px-5 md:px-8">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-70"
            >
              <ArrowLeft size={16} />
              Voltar para o blog
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent shadow-sm">
                    <HeartHandshake size={15} />
                    Saúde mental no trabalho
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-medium text-muted-foreground">
                    Guia para empresas
                  </span>
                </div>

                <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] text-foreground md:text-6xl">
                  Programa de saúde mental corporativa: como criar ações
                  efetivas
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Veja como transformar ações isoladas em um programa contínuo,
                  conectado aos riscos reais da empresa e acompanhado por
                  indicadores.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    12 minutos de leitura
                  </div>

                  <div className="flex items-center gap-2">
                    <FileText size={16} />
                    Atualizado em 29 de julho de 2026
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-primary/15 bg-primary p-7 text-primary-foreground shadow-xl">
                <Brain size={35} className="text-accent" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                  O ponto principal
                </p>

                <p className="mt-3 leading-relaxed text-primary-foreground/90">
                  Um programa efetivo não é uma coleção de palestras. Ele começa
                  pelo diagnóstico, atua sobre as causas, oferece apoio e mede
                  seus resultados.
                </p>

                <a
                  href="#como-criar"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Ver o passo a passo
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,1fr)_290px]">
            <article className="min-w-0">
              <div className="space-y-14">
                {/* RESUMO */}
                <section
                  id="resumo"
                  className="scroll-mt-28 rounded-[26px] border border-accent/20 bg-accent/5 p-6 md:p-8"
                >
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    O que caracteriza um programa estruturado?
                  </h2>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Diagnóstico das necessidades e dos riscos",
                      "Objetivos e públicos prioritários",
                      "Plano de ação com responsáveis e prazos",
                      "Participação das lideranças e trabalhadores",
                      "Acolhimento e encaminhamento seguro",
                      "Indicadores e melhoria contínua",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-accent"
                        />

                        <span className="text-sm leading-relaxed text-foreground/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* O QUE É */}
                <section id="o-que-e" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Conceito
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    O que é um programa de saúde mental corporativa?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    É um conjunto planejado e contínuo de estratégias destinadas
                    a prevenir riscos, promover saúde mental, oferecer apoio e
                    acompanhar as condições psicossociais presentes no trabalho.
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    O programa deve estar conectado à realidade da organização.
                    Isso significa considerar atividades, jornadas, demandas,
                    relações profissionais, estilos de liderança, indicadores e
                    necessidades dos diferentes grupos de trabalhadores.
                  </p>

                  <div className="mt-7 rounded-[22px] border-l-4 border-primary bg-primary/5 p-6">
                    <p className="font-heading text-lg font-semibold text-foreground">
                      Programa não é ação pontual
                    </p>

                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      Uma palestra, campanha ou sessão de massagem pode integrar
                      o programa, mas isoladamente não constitui uma política
                      contínua de saúde mental.
                    </p>
                  </div>
                </section>

                {/* BENEFÍCIOS */}
                <section id="por-que-investir" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Visão estratégica
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Por que investir em saúde mental no trabalho?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    A gestão estruturada ajuda a organização a identificar
                    problemas antes que se agravem e a direcionar recursos para
                    os pontos que realmente precisam de intervenção.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {[
                      "Prevenção dos riscos psicossociais",
                      "Fortalecimento da segurança psicológica",
                      "Melhoria da comunicação e das relações",
                      "Desenvolvimento das lideranças",
                      "Apoio à retenção e ao engajamento",
                      "Decisões orientadas por indicadores",
                      "Organização das ações de saúde mental",
                      "Integração entre RH, SST e direção",
                    ].map((beneficio) => (
                      <div
                        key={beneficio}
                        className="flex gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-primary"
                        />

                        <span className="text-sm leading-relaxed text-foreground/80">
                          {beneficio}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* PILARES */}
                <section id="pilares" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Estrutura
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Os quatro pilares do programa
                  </h2>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {pilares.map((pilar) => {
                      const Icon = pilar.icon;

                      return (
                        <div
                          key={pilar.titulo}
                          className="rounded-[24px] border border-border/70 bg-white p-6 shadow-sm"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon size={23} />
                          </div>

                          <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                            {pilar.titulo}
                          </h3>

                          <p className="mt-3 leading-relaxed text-muted-foreground">
                            {pilar.texto}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* COMO CRIAR */}
                <section id="como-criar" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Implantação prática
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Como criar um programa em 7 etapas
                  </h2>

                  <div className="mt-8 space-y-5">
                    {etapas.map((etapa) => {
                      const Icon = etapa.icon;

                      return (
                        <div
                          key={etapa.numero}
                          className="group rounded-[24px] border border-border/70 bg-white p-5 shadow-sm transition-all hover:border-primary/25 hover:shadow-md md:p-7"
                        >
                          <div className="flex gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                              <Icon size={23} />
                            </div>

                            <div>
                              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                                Etapa {etapa.numero}
                              </span>

                              <h3 className="mt-1 font-heading text-xl font-semibold text-foreground md:text-2xl">
                                {etapa.titulo}
                              </h3>

                              <p className="mt-3 leading-relaxed text-muted-foreground">
                                {etapa.texto}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* AÇÕES */}
                <section id="acoes" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Possibilidades
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Quais ações podem fazer parte do programa?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    As ações devem ser escolhidas depois do diagnóstico e
                    adaptadas ao contexto da empresa. Entre as possibilidades
                    estão:
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {acoes.map((acao) => (
                      <div
                        key={acao}
                        className="flex gap-3 rounded-2xl border border-border/70 bg-white p-4"
                      >
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-accent"
                        />

                        <span className="text-sm leading-relaxed text-foreground/80">
                          {acao}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* LIDERANÇA */}
                <section id="liderancas" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Papel da gestão
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Por que preparar as lideranças?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    As lideranças participam da distribuição das demandas, da
                    definição de prioridades, do reconhecimento, da comunicação
                    e da gestão dos conflitos. Por isso, exercem influência
                    direta sobre diversos fatores psicossociais.
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    A capacitação deve ajudar gestores a reconhecer sinais,
                    acolher sem realizar diagnósticos, encaminhar corretamente,
                    prevenir condutas inadequadas e organizar o trabalho de
                    maneira mais saudável.
                  </p>

                  <div className="mt-7 rounded-[24px] bg-primary p-6 text-primary-foreground md:p-8">
                    <Users size={29} className="text-accent" />

                    <h3 className="mt-4 font-heading text-2xl font-semibold">
                      Liderança não substitui profissional de saúde
                    </h3>

                    <p className="mt-3 leading-relaxed text-primary-foreground/80">
                      O gestor deve saber ouvir, orientar e acionar os fluxos da
                      empresa, sem investigar a vida pessoal ou tentar
                      diagnosticar o trabalhador.
                    </p>
                  </div>
                </section>

                {/* INDICADORES */}
                <section id="indicadores" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Mensuração
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Indicadores para acompanhar os resultados
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Nenhum indicador deve ser interpretado isoladamente. O
                    conjunto ajuda a compreender tendências e avaliar a
                    efetividade das medidas.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {indicadores.map((indicador) => {
                      const Icon = indicador.icon;

                      return (
                        <div
                          key={indicador.titulo}
                          className="rounded-[22px] border border-border/70 bg-white p-5"
                        >
                          <Icon size={22} className="text-primary" />

                          <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                            {indicador.titulo}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {indicador.texto}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ERROS */}
                <section id="erros" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    O que evitar
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Erros comuns nos programas corporativos
                  </h2>

                  <div className="mt-8 space-y-4">
                    {erros.map((erro, index) => (
                      <div
                        key={erro.titulo}
                        className="flex gap-4 rounded-[22px] border border-border/70 bg-white p-5 md:p-6"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="font-heading text-lg font-semibold text-foreground">
                            {erro.titulo}
                          </h3>

                          <p className="mt-2 leading-relaxed text-muted-foreground">
                            {erro.texto}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQ */}
                <section id="perguntas" className="scroll-mt-28">
                  <div className="flex items-center gap-3">
                    <HelpCircle size={28} className="text-accent" />

                    <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                      Perguntas frequentes
                    </p>
                  </div>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Dúvidas sobre saúde mental corporativa
                  </h2>

                  <div className="mt-8 space-y-4">
                    {perguntas.map((item) => (
                      <details
                        key={item.pergunta}
                        className="group rounded-[20px] border border-border/70 bg-white"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-lg font-semibold text-foreground md:p-6">
                          {item.pergunta}

                          <ChevronRight
                            size={20}
                            className="shrink-0 text-accent transition-transform group-open:rotate-90"
                          />
                        </summary>

                        <div className="border-t border-border/60 px-5 pb-6 pt-4 md:px-6">
                          <p className="leading-relaxed text-muted-foreground">
                            {item.resposta}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              </div>
            </article>

            {/* ÍNDICE LATERAL */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[24px] border border-border/70 bg-white p-6 shadow-sm">
                <p className="font-heading text-lg font-semibold text-foreground">
                  Neste conteúdo
                </p>

                <nav className="mt-5 flex flex-col gap-3 text-sm">
                  {[
                    ["#resumo", "Resumo"],
                    ["#o-que-e", "O que é o programa"],
                    ["#por-que-investir", "Por que investir"],
                    ["#pilares", "Os quatro pilares"],
                    ["#como-criar", "7 etapas"],
                    ["#acoes", "Ações do programa"],
                    ["#liderancas", "Papel da liderança"],
                    ["#indicadores", "Indicadores"],
                    ["#erros", "Erros comuns"],
                    ["#perguntas", "Perguntas frequentes"],
                  ].map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 border-t border-border/60 pt-6">
                  <p className="text-sm font-semibold text-foreground">
                    Quer estruturar um programa?
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Converse com a Essência Psi sobre as necessidades da sua
                    organização.
                  </p>

                  <a
                    href="/#contato"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Solicitar proposta
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="container relative mx-auto max-w-5xl px-5 text-center md:px-8">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]">
              Saúde mental com estratégia
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-heading text-3xl font-semibold md:text-5xl">
              Transforme ações isoladas em um programa contínuo
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
              A Essência Psi desenvolve programas conectados aos riscos, às
              necessidades e aos objetivos da sua organização.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Solicitar uma proposta
                <ArrowRight size={17} />
              </a>

              <Link
                to="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Conhecer nossos serviços
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SaudeMentalCorporativa;
