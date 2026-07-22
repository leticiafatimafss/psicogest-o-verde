import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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

      {/* Contato */}
      <ContactSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
