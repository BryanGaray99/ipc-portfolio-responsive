import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FontSizeSelector } from "./FontSizeSelector";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSwitch } from "./ThemeSwitch";
import { useNavigation, useAriaLabels } from "@/hooks/use-content";

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar = ({ onContactClick }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();
  const aria = useAriaLabels();

  const navItems = [
    { id: "home", label: navigation.home, ariaLabel: aria.goToHome },
    { id: "about", label: navigation.about, ariaLabel: aria.goToAbout },
    {
      id: "projects",
      label: navigation.projects,
      ariaLabel: aria.goToProjects,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Announce section change to screen readers
      element.focus({ preventScroll: true });
    }
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, sectionId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(sectionId);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleMenuToggle();
    }
    if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-portfolio-nav backdrop-blur-sm border-b border-portfolio shadow-sm theme-transition"
      role="navigation"
      aria-label={aria.mainNavigation}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation - Sections on Left */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-portfolio-accent focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded-md px-3 py-2 theme-transition ${
                  activeSection === item.id
                    ? "text-portfolio-accent font-semibold"
                    : "text-portfolio-primary"
                }`}
                role="menuitem"
                aria-label={item.ariaLabel}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              onKeyDown={handleMenuKeyDown}
              className="text-portfolio-primary hover:text-portfolio-accent transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded-md p-2 theme-transition"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? aria.closeMenu : aria.openMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Controls - Accessibility on Right */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSelector />
            <FontSizeSelector />
            <ThemeSwitch />
          </div>

          {/* Mobile Spacer - to center hamburger */}
          <div className="md:hidden w-6"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden"
            id="mobile-menu"
            role="menu"
            aria-label="Menú de navegación móvil"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-portfolio-card border-t border-portfolio theme-transition">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors duration-200 hover:text-portfolio-accent hover:bg-control focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded-md theme-transition ${
                    activeSection === item.id
                      ? "text-portfolio-accent font-semibold bg-control"
                      : "text-portfolio-primary"
                  }`}
                  role="menuitem"
                  aria-label={item.ariaLabel}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Controls */}
              <div className="flex items-center justify-center space-x-3 pt-4 border-t border-portfolio">
                <LanguageSelector />
                <FontSizeSelector />
                <ThemeSwitch />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
