import { ContactButton } from "./ContactButton";
import { useHeroContent } from "@/hooks/use-content";

export const HeroSection = () => {
  const hero = useHeroContent();

  return (
    <section
      id="home"
      className="min-h-screen bg-portfolio-hero flex items-center pt-16 theme-transition"
      aria-label="Sección de presentación principal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-4">
              <span
                className="inline-block text-4xl sm:text-5xl lg:text-6xl mb-2"
                role="img"
                aria-label={hero.greetingAlt}
              >
                {hero.greeting}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-primary leading-tight mb-4 theme-transition">
              {hero.title}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-portfolio-primary mb-6 theme-transition">
              {hero.subtitle}
            </h2>
            <p className="text-lg sm:text-xl text-portfolio-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 theme-transition">
              {hero.description}
            </p>
            <ContactButton />
          </div>

          {/* Right side - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm ring-4 ring-white/50 theme-transition">
                <img
                  src={import.meta.env.BASE_URL + "/bryan.garay.png"}
                  alt="Fotografía profesional de Bryan Garay, ingeniero de software sonriendo, vestido de manera profesional"
                  className="w-full h-full object-contain"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to a meaningful placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzE3Mi4zODYgMTAwIDE1MCAxMjIuMzg2IDE1MCAxNTBDMTUwIDE3Ny42MTQgMTcyLjM4NiAyMDAgMjAwIDIwMEMyMjcuNjE0IDIwMCAyNTAgMTc3LjYxNCAyNTAgMTUwQzI1MCAxMjIuMzg2IDIyNy42MTQgMTAwIDIwMCAxMDBaIiBmaWxsPSIjRDFENURCIi8+CjxwYXRoIGQ9Ik0yMDAgMjIwQzE1NS44MTcgMjIwIDEyMCAyNTUuODE3IDEyMCAzMDBIMjgwQzI4MCAyNTUuODE3IDI0NC4xODMgMjIwIDIwMCAyMjBaIiBmaWxsPSIjRDFENURCIi8+Cjwvc3ZnPg==";
                    target.alt =
                      "Imagen placeholder - Fotografía de Bryan Garay no disponible";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
