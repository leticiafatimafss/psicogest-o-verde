import { Linkedin, Mail } from "lucide-react";

const founders = [
  {
    name: "Nome da Sócia",
    role: "Psicóloga • Sócia-fundadora",
    image: "/images/socia-1.jpg", // alterar depois
    bio: "Especialista em Gestão Psicossocial, Saúde Mental Organizacional e desenvolvimento de pessoas. Atua na implementação de estratégias voltadas à promoção da saúde mental nas organizações.",
    specialties: [
      "Gestão Psicossocial",
      "NR-01",
      "Saúde Mental",
      "Consultoria Organizacional",
    ],
    linkedin: "#",
    email: "contato@essenciapsico.com.br",
  },
  {
    name: "Nome da Sócia",
    role: "Psicóloga • Sócia-fundadora",
    image: "/images/socia-2.jpg", // alterar depois
    bio: "Atua no planejamento e desenvolvimento de programas voltados à promoção da saúde mental, gestão de riscos psicossociais e fortalecimento da cultura organizacional.",
    specialties: [
      "Psicologia Organizacional",
      "Treinamentos",
      "Desenvolvimento Humano",
      "Compliance",
    ],
    linkedin: "#",
    email: "contato@essenciapsico.com.br",
  },
];

const TeamSection = () => {
  return (
    <section
      id="idealizadoras"
      className="py-24 bg-[#fafaf8]"
    >
      <div className="container">

        {/* Cabeçalho */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold">
            Idealizadoras
          </span>

          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-primary">
            Conheça quem está por trás
            <br />
            da Essência.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A Essência nasceu da união de profissionais que acreditam que
            cuidar da saúde mental é uma estratégia indispensável para o
            crescimento sustentável das organizações.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300"
            >

              {/* Foto */}

              <div className="aspect-[4/3] bg-muted overflow-hidden">

                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Conteúdo */}

              <div className="p-8">

                <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                  {founder.role}
                </span>

                <h3 className="mt-2 text-3xl font-bold text-primary">
                  {founder.name}
                </h3>

                <p className="mt-6 text-muted-foreground leading-8">
                  {founder.bio}
                </p>

                {/* Especialidades */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {founder.specialties.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Links */}

                <div className="mt-8 flex gap-4">

                  <a
                    href={founder.linkedin}
                    className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href={`mailto:${founder.email}`}
                    className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Mail size={18} />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TeamSection;
