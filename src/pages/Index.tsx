import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesSection from "@/components/ServicesSection";
import NR01Section from "@/components/NR01Section";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MetodoSection from "@/components/MetodoSection";
import AudienceSection from "@/components/AudienceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Imagens logo depois do hero */}
      <ImageCarousel />
      <AudienceSection />

      {/* O que fazemos */}
      <ServicesSection />

      {/* Método Essência */}
      <MetodoSection />

      {/* NR-01 */}
      <NR01Section />

      {/* Contato */}
      <ContactSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
