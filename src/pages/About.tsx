import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutHistory from "@/components/about/AboutHistory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import DifferentialsSection from "@/components/about/DifferentialsSection";
import TeamSection from "@/components/about/TeamSection";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <AboutHero />
        <AboutHistory />
        <MissionVisionValues />
        <DifferentialsSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutSection;
