import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ImageCarousel from "@/components/ImageCarousel";
import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ImageCarousel />
      <ResultsSection />
      <CTASection /> {/* 🔥 AQUI */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
