import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Metodo from "@/components/metodo";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
<HeroSection />
<ServicesSection />
<Metodo />
<ResultsSection />
<Footer />
<WhatsAppButton />
    </div>
  );
};

export default HomePage;
