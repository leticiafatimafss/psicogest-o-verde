import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "5511999999999"; // ← coloca seu número
  const message = "Olá, gostaria de entender melhor sobre a adequação à NR-01.";
  
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 bg-white border border-border/60 shadow-lg rounded-full px-5 py-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

        {/* Ícone */}
        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-md">
          <MessageCircle size={18} className="text-white" />
        </div>

        {/* Texto */}
        <span className="text-sm font-medium text-foreground hidden sm:block">
          Falar com especialista
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
