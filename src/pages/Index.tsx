import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

const Index = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:bryan.garay@example.com?subject=Hello Bryan!";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={handleContactClick} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Index;
