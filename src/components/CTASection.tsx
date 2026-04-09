const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Sua empresa já está preparada para as novas exigências da NR-01?
        </h2>

        <p className="text-white/80 text-lg mb-8">
          Evite riscos trabalhistas, reduza exposição e implemente uma gestão
          psicossocial estruturada com apoio técnico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Falar com um especialista
          </a>

          <a
            href="#servicos"
            className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Entender como funciona
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
