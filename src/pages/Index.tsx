import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ImageCarousel from "@/components/ImageCarousel"; // 👈 NOVO
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Dor */}
      <AboutSection />

      {/* Solução */}
      <ServicesSection />

      {/* Visual / credibilidade */}
      <ImageCarousel />

      {/* Resultado */}
      <ResultsSection />

      {/* Conversão */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;
