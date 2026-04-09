import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 section-bg">
      <div className="container">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contato</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center max-w-3xl mx-auto mb-6">
          Vamos transformar essa realidade?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Entenda como podemos apoiar sua empresa na gestão psicossocial de forma clara, segura e alinhada às normas.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">essenciapsic3@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Telefone</h4>
                <p className="text-muted-foreground text-sm">(11) 9 4135-2999</p>
                <p className="text-muted-foreground text-sm">(11) 9 7503-0387</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Localização</h4>
                <p className="text-muted-foreground text-sm">São Paulo, SP — Brasil</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm text-foreground font-medium mb-1">⚡ Retorno rápido</p>
              <p className="text-sm text-muted-foreground">Respondemos em até 24h úteis.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card rounded-xl p-12 border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nome *</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone *</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Como podemos ajudar sua empresa?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
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
