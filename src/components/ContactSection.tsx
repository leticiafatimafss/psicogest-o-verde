import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const inputs = form.querySelectorAll("input");
    const textarea = form.querySelector("textarea");

    const nome = (inputs[0] as HTMLInputElement).value;
    const telefone = (inputs[1] as HTMLInputElement).value;
    const empresa = (inputs[2] as HTMLInputElement).value;
    const mensagem = (textarea as HTMLTextAreaElement)?.value || "";

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          telefone,
          empresa,
          mensagem,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);

      alert(
        "Não foi possível enviar sua solicitação. Tente novamente.",
      );
    }
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-background py-10 md:py-24"
    >
      {/* Elemento decorativo */}
      <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-green-light" />

      <div ref={ref} className="container relative">

        {/* CABEÇALHO */}
        <div className="mx-auto mb-7 max-w-3xl text-center md:mb-16">

          <span className="reveal text-[10px] font-semibold uppercase tracking-[0.22em] text-accent md:text-xs md:tracking-[0.25em]">
            Fale com a Essência Psi
          </span>

          {/* TÍTULO MOBILE */}
          <h2 className="reveal reveal-delay-1 mt-3 font-heading text-[1.8rem] font-bold leading-[1.12] text-foreground md:hidden">
            Vamos conversar sobre
            <span className="gold-gradient-text block">
              a sua empresa?
            </span>
          </h2>

          {/* TÍTULO DESKTOP — ORIGINAL */}
          <h2 className="reveal reveal-delay-1 mt-4 hidden font-heading font-bold leading-tight text-foreground md:block md:text-4xl lg:text-[2.75rem]">
            Dê o primeiro passo para reduzir riscos e fortalecer a

            <span className="gold-gradient-text">
              {" "}conformidade da sua empresa
            </span>
          </h2>

          {/* DESCRIÇÃO MOBILE */}
          <p className="reveal reveal-delay-2 mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:hidden">
            Preencha os dados e conte como podemos ajudar.
          </p>

          {/* DESCRIÇÃO DESKTOP — ORIGINAL */}
          <p className="reveal reveal-delay-2 mx-auto mt-5 hidden max-w-2xl text-lg leading-relaxed text-muted-foreground md:block">
            Entenda como estruturar a adequação à NR-01 e a gestão dos riscos
            psicossociais com mais clareza, método e respaldo técnico.
          </p>

        </div>

        <div className="reveal reveal-delay-2 mx-auto grid max-w-5xl gap-6 lg:grid-cols-5 lg:gap-10">

          {/* INFORMAÇÕES DE CONTATO
              No mobile aparecem depois do formulário */}
          <div className="order-2 space-y-4 md:space-y-6 lg:order-1 lg:col-span-2">

            {/* E-mail */}
            <a
              href="mailto:essenciapsic3@gmail.com"
              className="flex items-start gap-3 rounded-xl border border-border/50 bg-white/70 p-3.5 transition-colors hover:border-accent/30 md:gap-4 md:border-0 md:bg-transparent md:p-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-light md:h-11 md:w-11">
                <Mail className="text-primary" size={18} />
              </div>

              <div className="min-w-0">

                <h4 className="mb-0.5 text-sm font-semibold text-foreground">
                  Email
                </h4>

                <p className="break-all text-xs text-muted-foreground md:text-sm">
                  essenciapsic3@gmail.com
                </p>

              </div>
            </a>

            {/* Telefone */}
            <a
              href="tel:+5511941352999"
              className="flex items-start gap-3 rounded-xl border border-border/50 bg-white/70 p-3.5 transition-colors hover:border-accent/30 md:gap-4 md:border-0 md:bg-transparent md:p-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-light md:h-11 md:w-11">
                <Phone className="text-primary" size={18} />
              </div>

              <div>

                <h4 className="mb-0.5 text-sm font-semibold text-foreground">
                  Telefone
                </h4>

                <p className="text-xs text-muted-foreground md:text-sm">
                  (11) 9 4135-2999
                </p>

                <p className="text-xs text-muted-foreground md:text-sm">
                  (11) 9 7503-0387
                </p>

              </div>
            </a>

            {/* Localização — SOMENTE TABLET E DESKTOP */}
            <div className="hidden items-start gap-4 md:flex">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-light">
                <MapPin className="text-primary" size={18} />
              </div>

              <div>

                <h4 className="mb-0.5 text-sm font-semibold text-foreground">
                  Localização
                </h4>

                <p className="text-sm text-muted-foreground">
                  São Paulo, SP — Brasil
                </p>

              </div>

            </div>

            {/* Diagnóstico inicial — SOMENTE TABLET E DESKTOP */}
            <div className="mt-4 hidden rounded-2xl border border-accent/10 bg-gold-muted p-5 md:block">

              <p className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
                <ArrowRight size={14} className="text-accent" />
                Diagnóstico inicial
              </p>

              <p className="text-sm text-muted-foreground">
                Converse com a gente e entenda o nível de exposição da sua
                empresa.
              </p>

            </div>

          </div>

          {/* FORMULÁRIO
              No mobile aparece primeiro */}
          <div className="order-1 lg:order-2 lg:col-span-3">

            {submitted ? (
              <div className="rounded-2xl bg-green-light p-8 text-center md:p-12">

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 md:h-16 md:w-16">
                  <Send className="text-primary" size={26} />
                </div>

                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                  Solicitação enviada!
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Em breve entraremos em contato para entender sua necessidade.
                </p>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-border/50 bg-background p-5 shadow-sm md:space-y-5 md:p-8"
              >

                {[
                  {
                    label: "Nome *",
                    type: "text",
                    placeholder: "Seu nome completo",
                    required: true,
                  },
                  {
                    label: "Telefone *",
                    type: "tel",
                    placeholder: "(11) 99999-9999",
                    required: true,
                  },
                  {
                    label: "Empresa *",
                    type: "text",
                    placeholder: "Nome da empresa",
                    required: true,
                  },
                ].map((field) => (
                  <div key={field.label}>

                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      {field.label}
                    </label>

                    <input
                      required={field.required}
                      type={field.type}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder={field.placeholder}
                    />

                  </div>
                ))}

                {/* MENSAGEM — SOMENTE TABLET E DESKTOP */}
                <div className="hidden md:block">

                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Mensagem
                  </label>

                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Conte brevemente o cenário da sua empresa ou a sua necessidade."
                  />

                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-md"
                >
                  <span className="md:hidden">
                    Quero conversar
                  </span>

                  <span className="hidden md:inline">
                    Solicitar diagnóstico
                  </span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
