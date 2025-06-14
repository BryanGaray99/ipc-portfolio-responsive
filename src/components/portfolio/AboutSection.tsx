import { User, GraduationCap, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAboutContent } from "@/hooks/use-content";

export const AboutSection = () => {
  const about = useAboutContent();

  // Map icon names to components
  const iconMap = {
    User,
    GraduationCap,
    Code,
  };

  return (
    <section
      id="about"
      className="py-20 bg-portfolio-primary theme-transition"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4 theme-transition"
          >
            {about.title}
          </h2>
          <div
            className="w-24 h-1 bg-portfolio-accent mx-auto theme-transition"
            aria-hidden="true"
          ></div>
          <p className="mt-6 text-lg text-portfolio-secondary max-w-3xl mx-auto leading-relaxed theme-transition">
            {about.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {about.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];
            return (
              <article key={index}>
                <Card
                  className="bg-portfolio-card border-portfolio border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-portfolio-accent focus-within:ring-offset-2 h-full theme-transition"
                  role="article"
                  aria-labelledby={`about-card-title-${index}`}
                  aria-describedby={`about-card-desc-${index}`}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6 flex justify-center">
                      <div
                        className="w-16 h-16 bg-icon-special rounded-full flex items-center justify-center shadow-lg"
                        aria-hidden="true"
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3
                      id={`about-card-title-${index}`}
                      className="text-xl font-semibold text-portfolio-primary mb-4 theme-transition"
                    >
                      {card.title}
                    </h3>
                    <p
                      id={`about-card-desc-${index}`}
                      className="text-portfolio-secondary leading-relaxed flex-grow theme-transition"
                    >
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>

        {/* Additional information section - CONTRASTE MEJORADO */}
        <div className="mt-16 text-center">
          <div className="bg-special-section-gradient rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{about.mission.title}</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              {about.mission.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
