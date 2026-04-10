import { Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto text-center">

        {/* Título */}
        <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
          Contato
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
          Fale com a nossa equipe
        </h2>

        <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Entre em contato para entender como podemos estruturar a gestão psicossocial da sua empresa.
        </p>

        {/* Formulário */}
        <form className="mt-12 max-w-3xl mx-auto grid gap-6 text-left">

          {/* Nome */}
          <div>
            <label className="text-sm font-medium text-foreground">
              Nome
            </label>
            <div className="flex items-center border border-border rounded-xl mt-2 px-3">
              <User size={18} className="text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-foreground">
              Email
            </label>
            <div className="flex items-center border border-border rounded-xl mt-2 px-3">
              <Mail size={18} className="text-muted-foreground mr-2" />
              <input
                type="email"
                placeholder="seuemail@empresa.com"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Telefone */}
          <div>
            <label className="text-sm font-medium text-foreground">
              Telefone
            </label>
            <div className="flex items-center border border-border rounded-xl mt-2 px-3">
              <Phone size={18} className="text-muted-foreground mr-2" />
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                className="w-full py-3 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Mensagem */}
          <div>
            <label className="text-sm font-medium text-foreground">
              Mensagem
            </label>
            <textarea
              placeholder="Conte um pouco sobre sua empresa ou necessidade..."
              className="w-full mt-2 border border-border rounded-xl px-4 py-3 outline-none resize-none h-32"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="mt-4 bg-accent text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
