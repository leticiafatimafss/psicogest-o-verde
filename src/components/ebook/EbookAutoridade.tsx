import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

const atuacoes = [
  "Gestão de riscos psicossociais",
  "Treinamentos e palestras corporativas",
  "Desenvolvimento de lideranças",
  "Construção e acompanhamento de planos de ação",
  "Programas contínuos de saúde mental no trabalho",
  "Consultoria para empresas e áreas de RH e SST",
];

export default function EbookAutoridade() {
  return (
    <section className="bg-[#153d2d] py-12 text-white md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ddc27f] md:text-sm">
              Por que confiar na Essência
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Um guia desenvolvido por quem trabalha com gestão psicossocial nas empresas.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
              A Essência Gestão Psicossocial atua apoiando organizações na
              identificação, avaliação e gestão dos riscos psicossociais, além de
              desenvolver soluções práticas para saúde mental no trabalho,
              liderança e prevenção.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 md:text-base md:leading-7">
              O conteúdo do guia foi organizado para transformar conceitos
              técnicos em orientações mais claras para empresários, RH, SESMT,
              profissionais de Segurança do Trabalho, psicólogos e consultores.
            </p>

            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {atuacoes.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ddc27f]" />
                  <span className="text-sm leading-6 text-white/78">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                icon: Building2,
                title: "Visão empresarial",
                text: "Conteúdo conectado à realidade de quem precisa tomar decisões e implementar ações.",
              },
              {
                icon: BookOpen,
                title: "Linguagem clara",
                text: "Explicações técnicas apresentadas de forma acessível, sem excesso de juridiquês.",
              },
              {
                icon: GraduationCap,
                title: "Conhecimento aplicado",
                text: "Uma abordagem que integra gestão, saúde mental, liderança e segurança do trabalho.",
              },
              {
                icon: HeartHandshake,
                title: "Olhar técnico e humano",
                text: "A gestão psicossocial é tratada como parte da estratégia e não como uma ação isolada.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ddc27f]/10">
                      <Icon className="h-5 w-5 text-[#ddc27f]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="flex items-center gap-3 rounded-2xl border border-[#ddc27f]/20 bg-[#ddc27f]/10 p-4">
              <Award className="h-6 w-6 shrink-0 text-[#ddc27f]" />
              <p className="text-sm font-medium text-white/90">
                Mais do que vender um e-book, queremos ajudar empresas a
                compreender o processo antes de decidir como executá-lo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
