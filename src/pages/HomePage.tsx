import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AudienceSection from "@/components/AudienceSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Imagens logo depois do hero */}
      <ImageCarousel />
      <AudienceSection />

      {/* Contato */}
      <ContactSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
