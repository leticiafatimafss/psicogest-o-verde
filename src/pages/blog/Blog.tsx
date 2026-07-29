import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Clock3,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const artigos = [
  {
    icon: ClipboardCheck,
    categoria: "Gestão Psicossocial",
    titulo: "Diagnóstico Psicossocial Organizacional",
    resumo:
      "Entenda como identificar, avaliar e classificar os fatores de riscos psicossociais presentes no ambiente de trabalho.",
    leitura: "8 min de leitura",
    href: "/blog/diagnostico-psicossocial-organizacional",
  },
  {
    icon: ShieldCheck,
    categoria: "NR-1",
    titulo: "Implantação da NR-1 nas Empresas",
    resumo:
      "Conheça as principais etapas para integrar os riscos psicossociais ao GRO e ao PGR e estruturar um plano de ação.",
    leitura: "10 min de leitura",
    href: "/blog/implantacao-nr-01",
  },
  {
    icon: HeartHandshake,
    categoria: "Saúde Mental",
    titulo: "Programas de Saúde Mental Corporativa",
    resumo:
      "Veja como desenvolver ações contínuas de prevenção, promoção da saúde mental e fortalecimento das equipes.",
    leitura: "9 min de leitura",
    href: "/blog/programas-de-saude-mental-corporativa",
  },
];

const Blog = () => {
  useEffect(() => {
    const tituloAnterior = document.title;

    document.title =
      "Blog sobre NR-1 e Riscos Psicossociais | Essência Psi";

    const descricao =
      "Conteúdos sobre NR-1, riscos psicossociais, saúde mental no trabalho, diagnóstico organizacional e gestão psicossocial corporativa.";

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
        {/* APRESENTAÇÃO DO BLOG */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/5 via-background to-background pb-14 pt-32 md:pb-20 md:pt-40">
          <div
            aria-hidden="true"
            className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="container relative mx-auto px-5 text-center md:px-8">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent shadow-sm backdrop-blur-sm">
              <BookOpen size={15} />
              Conteúdo especializado
            </div>

            <h1 className="mx-auto max-w-4xl font-heading text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Informação que transforma cuidado em{" "}
              <span className="text-accent">estratégia</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Conteúdos sobre NR-1, riscos psicossociais, saúde mental no
              trabalho e gestão organizacional para apoiar empresas, RH,
              lideranças e profissionais de SST.
            </p>
          </div>
        </section>

        {/* LISTA DE ARTIGOS */}
        <section className="bg-background py-14 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="mb-10 md:mb-14">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Conteúdos em destaque
              </p>

              <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                Artigos para sua empresa
              </h2>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Orientações práticas para compreender as exigências da NR-1,
                prevenir riscos e construir ambientes de trabalho mais
                saudáveis.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {artigos.map((artigo) => {
                const Icon = artigo.icon;

                return (
                  <article
                    key={artigo.href}
                    className="group flex h-full flex-col rounded-[24px] border border-border/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg md:p-7"
                  >
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                        {artigo.categoria}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl font-semibold leading-snug text-foreground">
                      {artigo.titulo}
                    </h2>

                    <p className="mt-4 flex-grow text-[15px] leading-relaxed text-muted-foreground">
                      {artigo.resumo}
                    </p>

                    <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-5 text-xs text-muted-foreground">
                      <Clock3 size={14} />
                      {artigo.leitura}
                    </div>

                    <Link
                      to={artigo.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3"
                    >
                      Ler artigo
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="border-t border-border/60 bg-primary py-14 text-primary-foreground md:py-16">
          <div className="container mx-auto px-5 text-center md:px-8">
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Sua empresa precisa se preparar para a NR-1?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">
              A Essência Psi apoia sua organização no diagnóstico, na gestão
              dos riscos psicossociais e na construção de um plano de ação.
            </p>

            <a
              href="/#contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Falar com a Essência Psi
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

export default Blog;
