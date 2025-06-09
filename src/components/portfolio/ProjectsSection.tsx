import { Card, CardContent } from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description:
        "A full-stack e-commerce platform with user authentication, payment processing, and inventory management.",
      skills: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
      link: "https://github.com/bryan-garay/ecommerce-platform",
    },
    {
      id: 2,
      name: "Task Management App",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      skills: ["React", "Socket.io", "Express", "PostgreSQL", "Redux"],
      link: "https://github.com/bryan-garay/task-manager",
    },
    {
      id: 3,
      name: "Weather Dashboard",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      skills: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js", "Sass"],
      link: "https://github.com/bryan-garay/weather-dashboard",
    },
    {
      id: 4,
      name: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      description:
        "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and optimized performance.",
      skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
      link: "https://github.com/bryan-garay/portfolio",
    },
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1E53] mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-[#2B187A] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#E6F7FF] border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-medium text-[#1C1E53]/60">
                    Name:
                  </span>
                  <button
                    onClick={() => handleProjectClick(project.link)}
                    className="ml-2 text-lg font-semibold text-[#1C1E53] hover:text-[#2B187A] transition-colors duration-200 cursor-pointer underline decoration-transparent hover:decoration-current"
                  >
                    {project.name}
                  </button>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-[#1C1E53]/60">
                    Description:
                  </span>
                  <p className="mt-1 text-[#1C1E53]/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <span className="text-sm font-medium text-[#1C1E53]/60">
                    Main Skills:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-[#2B187A] text-white rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
