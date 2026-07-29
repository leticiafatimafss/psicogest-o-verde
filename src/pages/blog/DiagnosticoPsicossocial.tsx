import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const DiagnosticoPsicossocial = () => {
  useEffect(() => {
    const tituloAnterior = document.title;

    document.title =
      "Diagnóstico Psicossocial Organizacional: Como Fazer | Essência Psi";

    const descricao =
      "Entenda o que é diagnóstico psicossocial organizacional, quais riscos devem ser avaliados e como realizar o processo de acordo com a NR-1.";

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

    return () => {
      document.title = tituloAnterior;
      metaDescription.content = descricaoAnterior;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* CABEÇALHO DO ARTIGO */}
        <header className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-background pb-14 pt-32 md:pb-20 md:pt-40">
          <div className="container mx-auto max-w-5xl px-5 md:px-8">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-70"
            >
              <ArrowLeft size={16} />
              Voltar para o blog
            </Link>

            <div className="mb-5">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Gestão Psicossocial
              </span>
            </div>

            <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Diagnóstico Psicossocial Organizacional: o que é e como fazer
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Entenda como identificar os fatores de riscos psicossociais
              relacionados ao trabalho e transformar os resultados em decisões
              e medidas de prevenção.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                8 minutos de leitura
              </div>

              <div className="flex items-center gap-2">
                <FileText size={16} />
                Atualizado em julho de 2026
              </div>
            </div>
          </div>
        </header>

        {/* CONTEÚDO */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_300px]">
            <article className="min-w-0">
              {/* RESUMO */}
              <div className="mb-10 rounded-[24px] border border-primary/15 bg-primary/5 p-6 md:p-8">
                <div className="flex gap-4">
                  <ClipboardCheck
                    className="mt-1 shrink-0 text-primary"
                    size={26}
                  />

                  <div>
                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      Em resumo
                    </h2>

                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      O diagnóstico psicossocial organizacional é um processo
                      estruturado para identificar, avaliar e classificar
                      fatores presentes na organização e nas relações de
                      trabalho que podem afetar a saúde e a segurança dos
                      trabalhadores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <section id="o-que-e">
                  <h2 className="font-heading text-3xl font-semibold text-foreground">
                    O que é um diagnóstico psicossocial?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    É uma avaliação das condições relacionadas à organização do
                    trabalho, à gestão, às atividades realizadas e às relações
                    profissionais. Seu objetivo não é diagnosticar
                    individualmente os colaboradores, mas compreender quais
                    características do trabalho podem representar riscos para
                    as equipes.
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    A análise permite que a empresa saia de uma percepção
                    genérica sobre saúde mental e passe a trabalhar com
                    informações organizadas por setores, funções, unidades ou
                    grupos ocupacionais.
                  </p>
                </section>

                <section id="riscos-avaliados">
                  <h2 className="font-heading text-3xl font-semibold text-foreground">
                    Quais fatores podem ser avaliados?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    A avaliação deve considerar a realidade de cada organização.
                    Entre os fatores que podem ser investigados estão:
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Sobrecarga e ritmo excessivo de trabalho",
                      "Pressão por metas e prazos",
                      "Baixa autonomia para executar as atividades",
                      "Falta de clareza sobre funções e responsabilidades",
                      "Conflitos e relações interpessoais inadequadas",
                      "Assédio e outras formas de violência no trabalho",
                      "Falta de apoio das lideranças",
                      "Desequilíbrio entre trabalho e vida pessoal",
                      "Baixo reconhecimento profissional",
                      "Exigências emocionais da atividade",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-2xl border border-border/70 bg-white p-4"
                      >
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-accent"
                          size={19}
                        />

                        <span className="text-sm leading-relaxed text-foreground/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="como-fazer">
                  <h2 className="font-heading text-3xl font-semibold text-foreground">
                    Como o diagnóstico é realizado?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Um diagnóstico consistente combina planejamento,
                    participação dos trabalhadores, análise técnica e
                    documentação. O processo pode ser estruturado nas seguintes
                    etapas:
                  </p>

                  <div className="mt-8 space-y-5">
                    {[
                      {
                        numero: "01",
                        titulo: "Planejamento da avaliação",
                        texto:
                          "Definição do escopo, das unidades avaliadas, dos grupos de trabalhadores e da estratégia de comunicação.",
                      },
                      {
                        numero: "02",
                        titulo: "Coleta de informações",
                        texto:
                          "Aplicação de questionários, análise documental, entrevistas, grupos focais e observação da atividade, conforme a necessidade.",
                      },
                      {
                        numero: "03",
                        titulo: "Análise dos fatores de risco",
                        texto:
                          "Organização e avaliação dos resultados para identificar os fatores prioritários e os grupos mais expostos.",
                      },
                      {
                        numero: "04",
                        titulo: "Classificação e documentação",
                        texto:
                          "Registro dos riscos identificados, possíveis fontes, trabalhadores expostos e critérios utilizados na avaliação.",
                      },
                      {
                        numero: "05",
                        titulo: "Plano de ação",
                        texto:
                          "Definição de medidas de prevenção, responsáveis, prazos e indicadores para acompanhar os resultados.",
                      },
                    ].map((etapa) => (
                      <div
                        key={etapa.numero}
                        className="flex gap-5 rounded-[22px] border border-border/70 bg-white p-5 md:p-6"
                      >
                        <span className="font-heading text-2xl font-semibold text-accent">
                          {etapa.numero}
                        </span>

                        <div>
                          <h3 className="font-heading text-xl font-semibold text-foreground">
                            {etapa.titulo}
                          </h3>

                          <p className="mt-2 leading-relaxed text-muted-foreground">
                            {etapa.texto}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="questionario">
                  <h2 className="font-heading text-3xl font-semibold text-foreground">
                    Apenas aplicar um questionário é suficiente?
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Não. O questionário é uma ferramenta importante de coleta,
                    mas não deve ser tratado isoladamente como todo o
                    diagnóstico. Os resultados precisam ser interpretados
                    considerando as atividades, os processos, os indicadores e
                    a realidade organizacional.
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Também é necessário transformar os achados em medidas de
                    prevenção. Uma pesquisa sem análise, documentação e plano de
                    ação dificilmente produzirá mudanças consistentes.
                  </p>
                </section>

                <section id="beneficios">
                  <h2 className="font-heading text-3xl font-semibold text-foreground">
                    O que a empresa recebe ao final?
                  </h2>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    {[
                      {
                        icon: BarChart3,
                        titulo: "Indicadores",
                        texto:
                          "Visualização dos fatores de risco por dimensões e grupos avaliados.",
                      },
                      {
                        icon: FileText,
                        titulo: "Relatório técnico",
                        texto:
                          "Registro dos resultados, critérios, prioridades e recomendações.",
                      },
                      {
                        icon: ShieldCheck,
                        titulo: "Plano de ação",
                        texto:
                          "Medidas preventivas com responsáveis, prioridades e prazos.",
                      },
                      {
                        icon: Users,
                        titulo: "Direcionamento",
                        texto:
                          "Informações para apoiar RH, SST, lideranças e a direção.",
                      },
                    ].map((beneficio) => {
                      const Icon = beneficio.icon;

                      return (
                        <div
                          key={beneficio.titulo}
                          className="rounded-[22px] border border-border/70 bg-white p-6"
                        >
                          <Icon className="text-primary" size={25} />

                          <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                            {beneficio.titulo}
                          </h3>

                          <p className="mt-2 leading-relaxed text-muted-foreground">
                            {beneficio.texto}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section id="conclusao">
                  <h2 className="font-heading text-3xl font-semibold text-foreground">
                    Diagnóstico é o começo da gestão
                  </h2>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Identificar os riscos é apenas o início. A gestão
                    psicossocial precisa incluir medidas de prevenção,
                    acompanhamento dos indicadores, participação dos
                    trabalhadores e revisão periódica das ações adotadas.
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-muted-foreground">
                    Quando o processo é bem estruturado, o diagnóstico ajuda a
                    empresa a tomar decisões mais seguras e a direcionar
                    recursos para os pontos que realmente exigem atenção.
                  </p>
                </section>
              </div>
            </article>

            {/* ÍNDICE LATERAL */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[22px] border border-border/70 bg-white p-6 shadow-sm">
                <p className="font-heading text-lg font-semibold text-foreground">
                  Neste artigo
                </p>

                <nav className="mt-5 flex flex-col gap-3 text-sm">
                  <a
                    href="#o-que-e"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    O que é o diagnóstico?
                  </a>

                  <a
                    href="#riscos-avaliados"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    Fatores avaliados
                  </a>

                  <a
                    href="#como-fazer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    Como é realizado?
                  </a>

                  <a
                    href="#questionario"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    Uso do questionário
                  </a>

                  <a
                    href="#beneficios"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    Entregas do diagnóstico
                  </a>
                </nav>
              </div>
            </aside>
          </div>
        </section>

        {/* CHAMADA COMERCIAL */}
        <section className="bg-primary py-14 text-primary-foreground md:py-20">
          <div className="container mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Sua empresa precisa avaliar os riscos psicossociais?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
              A Essência Psi realiza o diagnóstico psicossocial e transforma os
              resultados em um plano de ação aplicável à realidade da
              organização.
            </p>

            <a
              href="/#contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Solicitar uma avaliação
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DiagnosticoPsicossocial;
