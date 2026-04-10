import heroImg from "@/assets/hero-wellness.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Sobre a consultoria
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            Sobre a Essência Gestão Psicossocial
          </h2>

          <p className="text-muted-foreground mt-6 leading-relaxed">
            A Essência Gestão Psicossocial é uma consultoria especializada em saúde mental corporativa e gestão de riscos psicossociais.
          </p>

          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nosso trabalho integra práticas baseadas em evidências científicas com estratégias de gestão organizacional.
          </p>

          <p className="text-muted-foreground mt-4 leading-relaxed">
            Atuamos na identificação de fatores psicossociais e no desenvolvimento de soluções estruturadas.
          </p>
        </div>

        {/* IMAGEM */}
        <div>
          <img
            src={heroImg}
            alt="Gestão psicossocial"
            className="w-full h-[420px] object-cover rounded-[24px] shadow-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
