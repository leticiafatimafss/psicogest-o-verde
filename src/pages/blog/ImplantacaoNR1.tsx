import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  FileCheck2,
  FileText,
  HelpCircle,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const etapas = [
  {
    numero: "01",
    icon: Building2,
    titulo: "Entender o contexto da organização",
    texto:
      "Mapear estabelecimentos, setores, atividades, funções, processos, jornadas, indicadores internos e características da população trabalhadora.",
    entrega: "Escopo e planejamento da implantação",
  },
  {
    numero: "02",
    icon: Users,
    titulo: "Organizar os grupos avaliados",
    texto:
      "Definir grupos de trabalhadores com atividades e condições de exposição semelhantes, preservando a confidencialidade e a qualidade da análise.",
    entrega: "Segmentação por unidade, setor ou função",
  },
  {
    numero: "03",
    icon: SearchCheck,
    titulo: "Identificar os fatores de risco",
    texto:
      "Investigar as condições, a organização e as relações de trabalho por meio de ferramentas adequadas e da participação dos trabalhadores.",
    entrega: "Levantamento dos perigos psicossociais",
  },
  {
    numero: "04",
    icon: BarChart3,
    titulo: "Avaliar e classificar os riscos",
    texto:
      "Analisar a probabilidade, a severidade, a exposição, os controles existentes e os grupos atingidos para estabelecer prioridades.",
    entrega: "Matriz e classificação dos riscos",
  },
  {
    numero: "05",
    icon: FileCheck2,
    titulo: "Atualizar os documentos",
    texto:
      "Registrar os fatores identificados, grupos expostos, critérios utilizados, classificação e medidas de prevenção no inventário aplicável.",
    entrega: "Inventário de riscos atualizado",
  },
  {
    numero: "06",
    icon: Target,
    titulo: "Construir o plano de ação",
    texto:
      "Definir medidas preventivas e corretivas, prioridades, responsáveis, recursos, prazos e indicadores de acompanhamento.",
    entrega: "Plano de ação estruturado",
  },
  {
    numero: "07",
    icon: RefreshCw,
    titulo: "Implantar, monitorar e revisar",
    texto:
      "Executar as medidas, acompanhar os resultados, verificar a efetividade e revisar a avaliação diante de mudanças ou novos riscos.",
    entrega: "Governança e melhoria contínua",
  },
];

const fatores = [
  "Excesso de demandas ou sobrecarga de trabalho",
  "Pressão intensa por metas e prazos",
  "Baixa autonomia e pouco controle sobre o trabalho",
  "Falta de clareza sobre papéis e responsabilidades",
  "Ausência de apoio da liderança ou da equipe",
  "Assédio moral, sexual ou outras formas de violência",
  "Conflitos interpessoais frequentes",
  "Baixo reconhecimento e injustiça organizacional",
  "Jornadas extensas, pausas insuficientes e fadiga",
  "Exigências emocionais elevadas",
  "Trabalho monótono, repetitivo ou sem sentido percebido",
  "Dificuldade de conciliar trabalho e vida pessoal",
];

const documentos = [
  {
    titulo: "Planejamento",
    texto:
      "Escopo, estabelecimentos, setores, grupos avaliados, responsáveis e cronograma.",
  },
  {
    titulo: "Metodologia",
    texto:
      "Critérios, técnicas, instrumentos e fontes de informação utilizados na avaliação.",
  },
  {
    titulo: "Diagnóstico",
    texto:
      "Resultados consolidados, fatores identificados, grupos expostos e prioridades.",
  },
  {
    titulo: "Inventário de riscos",
    texto:
      "Perigos, possíveis danos, avaliação, classificação e medidas existentes.",
  },
  {
    titulo: "Plano de ação",
    texto:
      "Medidas de prevenção, responsáveis, prazos, prioridades e indicadores.",
  },
  {
    titulo: "Evidências",
    texto:
      "Registros de comunicação, participação, treinamentos, ações realizadas e monitoramento.",
  },
];

const erros = [
  {
    titulo: "Aplicar somente um questionário",
    texto:
      "O questionário pode apoiar a coleta de informações, mas não substitui todo o processo de identificação, avaliação, documentação e controle dos riscos.",
  },
  {
    titulo: "Avaliar a saúde individual dos trabalhadores",
    texto:
      "O foco da NR-1 está nos fatores relacionados ao trabalho, como organização, demandas, gestão, relações e condições da atividade.",
  },
  {
    titulo: "Copiar o documento de outra empresa",
    texto:
      "Os riscos variam conforme o setor, a atividade, o estabelecimento, a função, os processos e a população trabalhadora.",
  },
  {
    titulo: "Tratar o tema apenas como responsabilidade do RH",
    texto:
      "A implantação exige integração entre direção, RH, SST, SESMT quando existente, lideranças, trabalhadores e áreas responsáveis pelos processos.",
  },
  {
    titulo: "Usar apenas palestras como medida de controle",
    texto:
      "Treinamentos e palestras podem apoiar o plano, mas não substituem intervenções sobre as causas existentes na organização do trabalho.",
  },
  {
    titulo: "Elaborar o plano e não acompanhar",
    texto:
      "A organização precisa demonstrar a execução das medidas e verificar se elas realmente reduziram ou controlaram os riscos.",
  },
];

const perguntas = [
  {
    pergunta: "O que a NR-1 exige sobre riscos psicossociais?",
    resposta:
      "A organização deve incluir os fatores de riscos psicossociais relacionados ao trabalho no processo de gerenciamento de riscos ocupacionais, realizando identificação de perigos, avaliação dos riscos, definição de medidas de prevenção, documentação e acompanhamento.",
  },
  {
    pergunta: "A NR-1 já está valendo em 2026?",
    resposta:
      "Sim. A nova redação do capítulo 1.5 da NR-1, aprovada pela Portaria MTE nº 1.419/2024, entrou em vigência em 26 de maio de 2026.",
  },
  {
    pergunta: "Todas as empresas precisam avaliar riscos psicossociais?",
    resposta:
      "As organizações devem gerenciar os riscos ocupacionais existentes em suas atividades e estabelecimentos. As regras documentais podem variar conforme enquadramento e dispensas previstas na NR-1, mas uma eventual dispensa de elaborar PGR não significa ignorar riscos existentes.",
  },
  {
    pergunta: "É obrigatório aplicar questionário?",
    resposta:
      "A NR-1 não determina um questionário único. A organização deve escolher técnicas e ferramentas adequadas à sua realidade. Questionários podem ser combinados com análise documental, observação da atividade, entrevistas e grupos focais.",
  },
  {
    pergunta: "A pesquisa de clima substitui a avaliação da NR-1?",
    resposta:
      "Não necessariamente. Uma pesquisa de clima possui finalidade própria e pode não contemplar os critérios necessários para identificar e avaliar fatores de riscos psicossociais relacionados ao trabalho.",
  },
  {
    pergunta: "Basta contratar psicoterapia para os colaboradores?",
    resposta:
      "Não. O apoio psicológico pode integrar um programa de saúde mental, mas a gestão ocupacional precisa atuar também sobre as causas e condições presentes no trabalho.",
  },
  {
    pergunta: "Os riscos psicossociais devem entrar no PGR?",
    resposta:
      "Quando a organização estiver obrigada a elaborar o PGR, os riscos identificados e avaliados devem ser devidamente integrados à documentação aplicável, incluindo o inventário de riscos e o plano de ação.",
  },
  {
    pergunta: "Quem deve participar da implantação?",
    resposta:
      "A definição depende da estrutura da empresa, mas normalmente envolve empregador, direção, SST, RH, SESMT quando existente, lideranças, trabalhadores e profissionais com competência técnica adequada.",
  },
  {
    pergunta: "Com que frequência a avaliação deve ser atualizada?",
    resposta:
      "O gerenciamento é contínuo. A avaliação precisa ser revista nas situações previstas pela NR-1 e sempre que mudanças, incidentes, inadequações ou novas informações puderem alterar os riscos ocupacionais.",
  },
  {
    pergunta: "Quanto tempo leva para implantar a NR-1?",
    resposta:
      "O prazo depende do número de trabalhadores, estabelecimentos, setores, complexidade das atividades, qualidade dos dados existentes e abrangência do projeto. A implantação deve priorizar consistência técnica e medidas aplicáveis.",
  },
];

const ImplantacaoNR1 = () => {
  useEffect(() => {
    const tituloAnterior = document.title;

    document.title =
      "Implantação da NR-1 em 2026: Passo a Passo Completo | Essência Psi";

    const descricao =
      "Veja como implantar a NR-1 em 2026, avaliar riscos psicossociais, atualizar o PGR, elaborar o inventário de riscos e criar um plano de ação.";

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
    const canonicalHrefAnterior = canonical.href;

    canonical.rel = "canonical";
    canonical.href =
      "https://essenciapsicossocial.com.br/blog/implantacao-nr-01";

    if (!canonicalAnterior) {
      document.head.appendChild(canonical);
    }

    const dadosEstruturados = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Implantação da NR-1 em 2026: passo a passo completo para empresas",
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
        "https://essenciapsicossocial.com.br/blog/implantacao-nr-01",
    };

    const dadosFAQ = {
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
    scriptArtigo.text = JSON.stringify(dadosEstruturados);
    scriptArtigo.setAttribute("data-seo", "article-nr1");

    const scriptFAQ = document.createElement("script");
    scriptFAQ.type = "application/ld+json";
    scriptFAQ.text = JSON.stringify(dadosFAQ);
    scriptFAQ.setAttribute("data-seo", "faq-nr1");

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
        canonical.href = canonicalHrefAnterior;
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
                    <ShieldCheck size={15} />
                    NR-1 e riscos psicossociais
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-xs font-medium text-muted-foreground">
                    Guia atualizado para 2026
                  </span>
                </div>

                <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.08] text-foreground md:text-6xl">
                  Implantação da NR-1: passo a passo completo para empresas
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Saiba como identificar e avaliar os fatores de riscos
                  psicossociais, atualizar o PGR e construir um plano de ação
                  tecnicamente consistente.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    14 minutos de leitura
                  </div>

                  <div className="flex items-center gap-2">
                    <FileText size={16} />
                    Atualizado em 29 de julho de 2026
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-primary/15 bg-primary p-7 text-primary-foreground shadow-xl">
                <ClipboardCheck size={34} className="text-accent" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                  Resposta rápida
                </p>

                <p className="mt-3 leading-relaxed text-primary-foreground/90">
                  Implantar a NR-1 não é apenas aplicar um questionário. A
                  empresa precisa identificar, avaliar, documentar e controlar
                  os fatores de riscos psicossociais relacionados ao trabalho.
                </p>

                <a
                  href="#passo-a-passo"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Ver as etapas
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
                  className="rounded-[26px] border border-accent/20 bg-accent/5 p-6 md:p-8"
                >
                  <h2 className="font-heading text-2xl font-semibold text-foreground">
                    O que sua empresa precisa fazer
                  </h2>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Conhecer as atividades e condições reais de trabalho",
                      "Identificar os fatores de riscos psicossociais",
                      "Avaliar e classificar os riscos encontrados",
                      "Registrar os resultados nos documentos aplicáveis",
                      "Criar medidas de prevenção e um plano de ação",
                      "Acompanhar a execução e revisar os resultados",
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

                {/* O QUE MUDOU */}
                <section id="o-que-mudou" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Entenda a norma
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    O que mudou na NR-1?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    A Portaria MTE nº 1.419/2024 aprovou a nova redação do
                    capítulo 1.5 da NR-1. O texto passou a mencionar
                    expressamente os fatores de riscos psicossociais
                    relacionados ao trabalho no Gerenciamento de Riscos
                    Ocupacionais.
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    A redação entrou em vigência em 26 de maio de 2026. Na
                    prática, as organizações precisam integrar esses fatores ao
                    processo de identificação de perigos, avaliação dos riscos,
                    adoção de medidas preventivas e acompanhamento.
                  </p>

                  <div className="mt-7 rounded-[22px] border-l-4 border-primary bg-primary/5 p-6">
                    <p className="font-heading text-lg font-semibold text-foreground">
                      Atenção ao foco correto
                    </p>

                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      A avaliação não deve procurar descobrir quem está ansioso
                      ou adoecido. O foco está nas condições e na organização do
                      trabalho que podem produzir ou agravar riscos.
                    </p>
                  </div>
                </section>

                {/* FATORES */}
                <section id="fatores" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    O que avaliar
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Exemplos de fatores de riscos psicossociais
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Os fatores variam conforme a atividade e a realidade da
                    empresa. Entre os exemplos que podem ser considerados estão:
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {fatores.map((fator) => (
                      <div
                        key={fator}
                        className="flex gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-primary"
                        />

                        <span className="text-sm leading-relaxed text-foreground/80">
                          {fator}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* PASSO A PASSO */}
                <section id="passo-a-passo" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Implantação prática
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Como implantar a NR-1 em 7 etapas
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    A implantação deve ser adaptada ao porte, às atividades e à
                    estrutura da organização. Uma sequência possível é:
                  </p>

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

                              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground/70">
                                <FileCheck2 size={14} />
                                {etapa.entrega}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* QUESTIONÁRIO */}
                <section id="questionario" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Dúvida frequente
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Aplicar um questionário é suficiente?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Não. A NR-1 não estabelece um questionário único nem
                    transforma a aplicação de uma pesquisa em todo o processo
                    de gerenciamento.
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    O instrumento pode ser útil, desde que seja adequado ao
                    objetivo e analisado junto a outras informações, como
                    organização das atividades, indicadores, observação do
                    trabalho, entrevistas, grupos focais e documentos internos.
                  </p>

                  <div className="mt-7 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[22px] border border-red-200 bg-red-50 p-6">
                      <AlertTriangle size={24} className="text-red-600" />

                      <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                        Não é suficiente
                      </h3>

                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                        <li>Enviar um formulário sem planejamento</li>
                        <li>Apresentar apenas percentuais gerais</li>
                        <li>Não investigar causas organizacionais</li>
                        <li>Não criar medidas de prevenção</li>
                      </ul>
                    </div>

                    <div className="rounded-[22px] border border-emerald-200 bg-emerald-50 p-6">
                      <CheckCircle2 size={24} className="text-emerald-700" />

                      <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                        Processo consistente
                      </h3>

                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                        <li>Planejamento e comunicação transparente</li>
                        <li>Participação e confidencialidade</li>
                        <li>Análise técnica das atividades</li>
                        <li>Plano de ação monitorado</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* DOCUMENTOS */}
                <section id="documentacao" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Evidências
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Documentos importantes para a implantação
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    O processo precisa produzir registros coerentes com o que
                    foi realizado. A documentação pode incluir:
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {documentos.map((documento) => (
                      <div
                        key={documento.titulo}
                        className="rounded-[22px] border border-border/70 bg-white p-5"
                      >
                        <div className="flex items-center gap-3">
                          <FileText size={20} className="text-accent" />

                          <h3 className="font-heading text-lg font-semibold text-foreground">
                            {documento.titulo}
                          </h3>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {documento.texto}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ERROS */}
                <section id="erros" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    O que evitar
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    6 erros comuns na adequação à NR-1
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

                {/* PLANO DE AÇÃO */}
                <section id="plano-de-acao" className="scroll-mt-28">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">
                    Depois do diagnóstico
                  </p>

                  <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    Como deve ser o plano de ação?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    O plano precisa transformar os riscos priorizados em ações
                    concretas. Para cada medida, é importante registrar:
                  </p>

                  <div className="mt-7 overflow-hidden rounded-[24px] border border-border/70">
                    {[
                      "Risco ou problema que será tratado",
                      "Medida preventiva ou corretiva",
                      "Prioridade da ação",
                      "Responsável pela execução",
                      "Prazo previsto",
                      "Recursos necessários",
                      "Indicador de acompanhamento",
                      "Forma de verificar a efetividade",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-center gap-4 bg-white p-4 ${
                          index !== 7 ? "border-b border-border/60" : ""
                        }`}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>

                        <span className="text-sm font-medium text-foreground/80">
                          {item}
                        </span>
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
                    Dúvidas sobre a implantação da NR-1
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

                {/* FONTES */}
                <section className="rounded-[24px] border border-border/70 bg-secondary/30 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <BookOpen size={23} className="text-primary" />

                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      Fontes oficiais
                    </h2>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Este conteúdo foi elaborado com finalidade informativa. A
                    aplicação deve considerar o texto vigente da norma e a
                    realidade de cada organização.
                  </p>

                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-1"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                    >
                      Norma Regulamentadora nº 1
                      <ArrowRight size={14} />
                    </a>

                    <a
                      href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/manuais-e-publicacoes/2026/manual_gro_pgr_da_nr_1.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                    >
                      Manual oficial do GRO e PGR
                      <ArrowRight size={14} />
                    </a>
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
                    ["#o-que-mudou", "O que mudou na NR-1"],
                    ["#fatores", "Fatores psicossociais"],
                    ["#passo-a-passo", "7 etapas da implantação"],
                    ["#questionario", "Uso de questionários"],
                    ["#documentacao", "Documentação"],
                    ["#erros", "Erros comuns"],
                    ["#plano-de-acao", "Plano de ação"],
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
                    Precisa de apoio?
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Fale com a Essência Psi sobre a realidade da sua empresa.
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

        {/* CTA FINAL */}
        <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="container relative mx-auto max-w-5xl px-5 text-center md:px-8">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]">
              Diagnóstico, implantação e acompanhamento
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-heading text-3xl font-semibold md:text-5xl">
              Sua empresa está preparada para gerenciar os riscos
              psicossociais?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
              A Essência Psi apoia sua organização desde o diagnóstico até a
              construção e o acompanhamento do plano de ação.
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
                to="/metodologia"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Conhecer nossa metodologia
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

export default ImplantacaoNR1;
