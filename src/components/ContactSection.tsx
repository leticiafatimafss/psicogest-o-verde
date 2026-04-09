import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-light rounded-full translate-x-1/3 translate-y-1/3" />

      <div ref={ref} className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="reveal text-xs font-semibold text-accent uppercase tracking-[0.25em]">Contato</span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mt-4 leading-tight">
            Vamos <span className="italic gold-gradient-text">transformar</span> essa realidade?
          </h2>
          <p className="reveal reveal-delay-2 text-muted-foreground mt-6 text-lg leading-relaxed font-light">
            Entenda como podemos apoiar sua empresa na gestão psicossocial de forma clara, segura e alinhada às normas.
          </p>
        </div>

        <div className="reveal reveal-delay-2 grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
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
                    <p key={v} className="text-muted-foreground text-sm">{v}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-4 p-5 bg-gold-muted rounded-2xl border border-accent/10">
              <p className="text-sm text-foreground font-medium mb-1 flex items-center gap-2">
                <ArrowRight size={14} className="text-accent" />
                Retorno rápido
              </p>
              <p className="text-sm text-muted-foreground">Respondemos em até 24h úteis.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-light rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm space-y-5">
                {[
                  { label: "Nome *", type: "text", placeholder: "Seu nome completo", required: true },
                  { label: "Telefone *", type: "tel", placeholder: "(11) 99999-9999", required: true },
                  { label: "Empresa", type: "text", placeholder: "Nome da empresa", required: false },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{field.label}</label>
                    <input
                      required={field.required}
                      type={field.type}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Como podemos ajudar sua empresa?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:shadow-md"
                >
                  Solicitar diagnóstico gratuito
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
