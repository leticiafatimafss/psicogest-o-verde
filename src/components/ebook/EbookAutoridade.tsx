import { Award, BookOpenCheck, Building } from "lucide-react";

export default function EbookAutoridade() {
  return (
    <section className="bg-[#153d2d] py-14 text-white md:py-24">
      <div className="container px-5">
        <div className="grid gap-9 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[.18em] text-[#ddc27f]">Quem desenvolveu</span>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Conteúdo criado por quem atua com gestão psicossocial nas empresas.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">A Essência Gestão Psicossocial apoia organizações na identificação, avaliação e gestão dos riscos psicossociais, além de desenvolver treinamentos, ações de liderança e programas de saúde mental no trabalho.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[[Building,"Visão empresarial"],[BookOpenCheck,"Conteúdo aplicável"],[Award,"Abordagem técnica e humana"]].map(([Icon, text]) => {
              const I = Icon as typeof Building;
              return <div key={text as string} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"><I className="h-5 w-5 text-[#ddc27f]" /><span className="font-medium">{text as string}</span></div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

