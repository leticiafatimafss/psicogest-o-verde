import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/AboutHero";
import AboutHistory from "@/components/AboutHistory";
import MissionVisionValues from "@/components/MissionVisionValues";
import DifferentialsSection from "@/components/DifferentialsSection";
import TeamSection from "@/components/TeamSection";

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
