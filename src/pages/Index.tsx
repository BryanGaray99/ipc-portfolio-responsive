import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { AccessibilityProvider } from "@/hooks/use-accessibility-settings";
import { useAriaLabels, useFooterContent } from "@/hooks/use-content";

const IndexContent = () => {
  const aria = useAriaLabels();
  const footer = useFooterContent();

  const handleContactClick = () => {
    const subject = encodeURIComponent(
      "Contacto desde portafolio - Interés en colaboración",
    );
    const body = encodeURIComponent(
      `Hola Bryan,\n\nMe puse en contacto contigo a través de tu portafolio web. Me gustaría discutir sobre:\n\n[Describe aquí el motivo de tu contacto]\n\nQuedo atento a tu respuesta.\n\nSaludos cordiales.`,
    );
    window.location.href = `mailto:bryangarayacademico@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-portfolio-primary theme-transition">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={aria.skipToMain}
      >
        {aria.skipToMain}
      </a>

      <header>
        <Navbar onContactClick={handleContactClick} />
      </header>

      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>

      <footer className="bg-portfolio-footer py-8 border-t border-portfolio theme-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-portfolio-secondary text-sm mb-2 theme-transition">
              {footer.copyright}
            </p>
            <p className="text-portfolio-secondary text-xs theme-transition">
              {footer.description}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <AccessibilityProvider>
      <IndexContent />
    </AccessibilityProvider>
  );
};

export default Index;
