import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScenarioSection from "@/components/ScenarioSection";
import NR01Section from "@/components/NR01Section";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScenarioSection />
      <NR01Section />
      <ServicesSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
