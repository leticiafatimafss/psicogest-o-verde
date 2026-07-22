import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ImageCarousel = () => {
  const ref = useScrollReveal();

  return (
    <section id="quem-somos" className="py-24 bg-background">
      <div ref={ref} className="container">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}

          <div className="reveal">

            <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-6">
              Quem somos
            </span>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Essência
              <br />
              <span className="gold-gradient-text">
                Gestão Psicossocial
              </span>
            </h2>

            <p className="mt-8 text-muted-foreground text-lg leading-8">
              A Essência Gestão Psicossocial é uma consultoria especializada
              em saúde mental no trabalho, gestão de riscos psicossociais e
              adequação à NR-01.
            </p>

            <p className="mt-6 text-muted-foreground text-lg leading-8">
              Atuamos ao lado de empresas, desenvolvendo soluções técnicas,
              estratégicas e humanizadas para promover ambientes de trabalho
              mais saudáveis, seguros e em conformidade com a legislação.
            </p>

            <a
              href="/sobre"
              className="inline-flex items-center gap-2 mt-10 rounded-xl bg-primary px-7 py-3 text-sm md:text-base font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300"
            >
              Conheça nossa história
              <ArrowRight size={18} />
            </a>

          </div>

          {/* IMAGEM */}

          <div className="reveal reveal-delay-2">

                          <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe da Essência Gestão Psicossocial"
                className="w-full h-[420px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ImageCarousel;

            <div className="overflow-hidden rounded-[32px] shadow-xl">
