import { Mail, Phone, MapPin } from "lucide-react";

const contatos = [
  {
    icon: Mail,
    label: "E-mail",
    value: "essenciapsic3@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(11) 9 4135-2999\n(11) 9 7503-0387",
  },
  {
    icon: MapPin,
    label: "Atendimento",
    value: "São Paulo, SP — Brasil",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container max-w-5xl text-center">

        {/* Título */}
        <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
          Contato
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
          Fale com a Essência Gestão Psicossocial
        </h2>

        <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Se sua empresa busca estruturar a gestão de riscos psicossociais e fortalecer a saúde mental no ambiente de trabalho, entre em contato conosco.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {contatos.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-[20px] border border-border/60 p-6 shadow-sm"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-accent/10 text-accent p-3 rounded-xl">
                  <item.icon size={22} />
                </div>

                <h3 className="font-semibold text-foreground">
                  {item.label}
                </h3>

                <p className="text-muted-foreground whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão principal */}
        <div className="mt-12">
          <a
            href="https://wa.me/5511941352999"
            target="_blank"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-base hover:shadow-lg transition-all"
          >
            Agendar reunião
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
