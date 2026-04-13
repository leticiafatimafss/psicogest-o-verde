import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
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
      alert("Não foi possível enviar sua solicitação. Tente novamente.");
    }
  };

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-light rounded-full translate-x-1/3 translate-y-1/3" />

      <div ref={ref} className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">
            Fale com a Essência Psi
          </span>

          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Dê o primeiro passo para reduzir riscos e fortalecer a
            <span className="gold-gradient-text"> conformidade da sua empresa</span>
          </h2>

          <p className="reveal reveal-delay-2 text-muted-foreground mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
            Entenda como estruturar a adequação à NR-01 e a gestão dos riscos psicossociais
            com mais clareza, método e respaldo técnico.
          </p>
        </div>

        <div className="reveal reveal-delay-2 grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "essenciapsic3@gmail.com" },
              { icon: Phone, label: "Telefone", value: "(11) 9 4135-2999\n(11) 9 7503-0387" },
              { icon: MapPin, label: "Localização", value: "São Paulo, SP — Brasil" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">{item.label}</h4>
                  {item.value.split("\n").map((v) => (
                    <p key={v} className="text-muted-foreground text-sm">
                      {v}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-4 p-5 bg-gold-muted rounded-2xl border border-accent/10">
              <p className="text-sm text-foreground font-medium mb-1 flex items-center gap-2">
                <ArrowRight size={14} className="text-accent" />
                Diagnóstico inicial
              </p>
              <p className="text-sm text-muted-foreground">
                Converse com a gente e entenda o nível de exposição da sua empresa.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-light rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Solicitação enviada!
                </h3>
                <p className="text-muted-foreground">
                  Em breve entraremos em contato para entender sua necessidade.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm space-y-5"
              >
                {[
                  { label: "Nome *", type: "text", placeholder: "Seu nome completo", required: true },
                  { label: "Telefone *", type: "tel", placeholder: "(11) 99999-9999", required: true },
                  { label: "Empresa *", type: "text", placeholder: "Nome da empresa", required: true },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {field.label}
                    </label>
                    <input
                      required={field.required}
                      type={field.type}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Conte brevemente o cenário da sua empresa ou a sua necessidade."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all hover:shadow-md"
                >
                  Solicitar diagnóstico
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
