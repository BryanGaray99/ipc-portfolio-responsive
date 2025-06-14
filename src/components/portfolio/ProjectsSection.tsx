import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useProjectsContent } from "@/hooks/use-content";

export const ProjectsSection = () => {
  const projects = useProjectsContent();

  const handleProjectClick = (link: string, projectName: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
    // Announce action to screen readers
    const announcement = `Abriendo enlace a ${projectName} en una nueva pestaña`;
    const announcer = document.createElement("div");
    announcer.setAttribute("aria-live", "polite");
    announcer.setAttribute("aria-atomic", "true");
    announcer.className = "sr-only";
    announcer.textContent = announcement;
    document.body.appendChild(announcer);
    setTimeout(() => document.body.removeChild(announcer), 1000);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    link: string,
    projectName: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleProjectClick(link, projectName);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-portfolio-primary theme-transition"
      aria-labelledby="projects-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2
            id="projects-title"
            className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4 theme-transition"
          >
            {projects.title}
          </h2>
          <div
            className="w-24 h-1 bg-portfolio-accent mx-auto theme-transition"
            aria-hidden="true"
          ></div>
          <p className="mt-6 text-lg text-portfolio-secondary max-w-3xl mx-auto leading-relaxed theme-transition">
            {projects.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.items.map((project) => (
            <article key={project.id}>
              <Card
                className="bg-portfolio-card border-portfolio border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden focus-within:ring-2 focus-within:ring-portfolio-accent focus-within:ring-offset-2 h-full flex flex-col theme-transition"
                role="article"
                aria-labelledby={`project-title-${project.id}`}
                aria-describedby={`project-desc-${project.id}`}
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={import.meta.env.BASE_URL + project.image}
                    alt={`Captura de pantalla del proyecto ${project.name} mostrando la interfaz principal de la aplicación`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjc3NDhGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZW4gZGVsIHByb3llY3RvIG5vIGRpc3BvbmlibGU8L3RleHQ+PC9zdmc+";
                      target.alt = `Imagen del proyecto ${project.name} no disponible`;
                    }}
                  />
                </div>

                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-portfolio-accent uppercase tracking-wide theme-transition">
                      {project.category}
                    </span>
                  </div>

                  <div className="mb-3">
                    <h3
                      id={`project-title-${project.id}`}
                      className="text-lg font-semibold text-portfolio-primary mb-2 theme-transition"
                    >
                      {project.name}
                    </h3>
                    <button
                      onClick={() =>
                        handleProjectClick(project.link, project.name)
                      }
                      onKeyDown={(e) =>
                        handleKeyDown(e, project.link, project.name)
                      }
                      className="inline-flex items-center gap-2 text-portfolio-accent hover:text-portfolio-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded-md p-1 -m-1 theme-transition font-medium"
                      aria-label={`Ver proyecto ${project.name} en GitHub (se abre en nueva pestaña)`}
                      title={`Ver proyecto ${project.name} en GitHub`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      <span className="text-sm">Ver en GitHub</span>
                    </button>
                  </div>

                  <div className="mb-4 flex-grow">
                    <h4 className="text-sm font-medium text-portfolio-secondary mb-2 theme-transition">
                      Descripción:
                    </h4>
                    <p
                      id={`project-desc-${project.id}`}
                      className="text-portfolio-secondary leading-relaxed text-sm theme-transition"
                    >
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-portfolio-secondary mb-2 theme-transition">
                      Tecnologías principales:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-icon-special text-white rounded-full shadow-sm"
                          role="text"
                          aria-label={`Tecnología utilizada: ${skill}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Call to action - CONTRASTE MEJORADO */}
        <div className="mt-16 text-center">
          <div className="bg-special-section-gradient rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{projects.cta.title}</h3>
            <p className="text-lg mb-6 leading-relaxed">
              {projects.cta.description}
            </p>
            <a
              href="https://github.com/BryanGaray99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#2b187a] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2b187a]"
              aria-label="Ver todos mis proyectos en GitHub (se abre en nueva pestaña)"
            >
              <Github size={20} aria-hidden="true" />
              {projects.cta.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
