import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container max-w-5xl text-center">
        <span className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
          Contato
        </span>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
          Fale com a Essência Gestão Psicossocial
        </h2>

        <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Se sua empresa busca estruturar a gestão de riscos psicossociais e fortalecer a saúde mental no ambiente de trabalho, entre em contato conosco.
        </p>

        {/* FORM */}
        <div className="mt-12 bg-white border border-border rounded-[24px] p-6 md:p-10 shadow-sm text-left">
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium">Nome</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border rounded-xl"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="text-sm font-medium">E-mail</label>
              <input
                type="email"
                className="w-full mt-2 p-3 border rounded-xl"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Telefone</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border rounded-xl"
                placeholder="(11) 9 0000-0000"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Mensagem</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border rounded-xl"
                placeholder="Como podemos ajudar?"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
              Agendar reunião
            </button>
          </div>
        </div>

        {/* CONTATO DIRETO */}
        <div className="mt-10 text-muted-foreground text-sm space-y-2">
          <p><strong>WhatsApp:</strong> (11) 9 4135-2999</p>
          <p><strong>E-mail:</strong> essenciapsic3@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;port default ContactSection;
