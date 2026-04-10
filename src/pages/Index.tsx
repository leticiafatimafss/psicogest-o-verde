import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Fotos / autoridade visual */}
      <ImageCarousel />

      {/* Sobre (credibilidade) */}
      <AboutSection />

      {/* Como funciona (método) */}
      <ServicesSection />

      {/* Resultados */}
      <ResultsSection />

      {/* Contato (conversão) */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Botão WhatsApp (fixo) */}
      <WhatsAppButton />

    </div>
  );
};

export default Index;
