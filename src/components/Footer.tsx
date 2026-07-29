import { Mail, MessageCircle, Phone } from "lucide-react";

import logo from "@/assets/logo-essencia.png";

const Footer = () => (
  <footer className="bg-[#092b22] px-5 py-10 text-white md:px-6 md:py-12">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1fr_auto] md:items-center">
        {/* MARCA */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Essência Gestão Psicossocial"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-[#c6a45d]/35"
          />

          <div>
            <div className="font-heading text-xl font-semibold text-white">
              Essência
            </div>
            <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Gestão Psicossocial
            </div>
          </div>
        </div>

        {/* CONTATOS */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
          <a
            href="mailto:contato@essenciapsicossocial.com.br"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/[0.09] hover:text-white"
          >
            <Mail size={17} className="shrink-0 text-[#d9b969]" />
            <span>contato@essenciapsicossocial.com.br</span>
          </a>

          <div className="flex gap-2">
            <a
              href="tel:+5511939193685"
              className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/[0.09] hover:text-white"
            >
              <Phone size={17} className="shrink-0 text-[#d9b969]" />
              <span>+55 11 93919-3685</span>
            </a>

            <a
              href="https://wa.me/5511939193685"
              target="_blank"
              rel="noreferrer"
              aria-label="Falar com a Essência pelo WhatsApp"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ad8d4d] text-white transition-all hover:-translate-y-0.5 hover:bg-[#bb9a58]"
            >
              <MessageCircle size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* BASE */}
      <div className="flex flex-col gap-2 pt-6 text-center text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} Essência Gestão Psicossocial. Todos os
          direitos reservados.
        </p>

        <p>Saúde mental, estratégia e transformação organizacional.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
