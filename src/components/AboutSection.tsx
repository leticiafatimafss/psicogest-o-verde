import heroImg from "@/assets/hero-wellness.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Sobre a consultoria
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
            Especialistas em gestão psicossocial corporativa
          </h2>

          <p className="text-muted-foreground mt-6 leading-relaxed max-w-lg">
            A Essência Gestão Psicossocial atua na estruturação de práticas organizacionais voltadas à saúde mental e à gestão de riscos psicossociais, alinhadas às exigências da NR-01.
          </p>

          {/* MINI DESTAQUES (isso muda tudo visualmente) */}
          <div className="mt-8 space-y-4">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-accent" />
              <p className="text-sm text-muted-foreground">
                Abordagem técnica baseada em evidências
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-accent" />
              <p className="text-sm text-muted-foreground">
                Estruturação alinhada às exigências da NR-01
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-accent" />
              <p className="text-sm text-muted-foreground">
                Foco em prevenção e sustentabilidade organizacional
              </p>
            </div>

          </div>
        </div>

        {/* IMAGEM */}
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-[32px]" />

          <img
            src={heroImg}
            alt="Gestão psicossocial"
            className="relative w-full h-[420px] object-cover rounded-[28px] shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
