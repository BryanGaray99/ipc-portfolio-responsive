import { Card, CardContent } from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "Decision Tree Machine Learning Web Simulator",
      image: import.meta.env.BASE_URL + "project-1.png",
      description:
        "Decision Tree Simulator is a web application built with Django that allows you to predict data using machine learning models.",
      skills: ["HTML", "CSS", "JavaScript", "Python", "Django", "PostgreSQL"],
      link: "https://github.com/BryanGaray99/ML-Predicci-n-de-Nivel-de-Afectados-en-Desastres-Naturales",
    },
    {
      id: 2,
      name: "Arcade Game: Lobo, Cabra y Col: 5 Desafíos",
      image: import.meta.env.BASE_URL + "project-2.png",
      description:
        "The main objective was to meet a series of functional, non-functional requirements and perform different testing techniques.",
      skills: ["Node.js", "Express.js", "MongoDB", "Loadster", "Google Lighthouse"],
      link: "https://github.com/BryanGaray99/lobo-cabra-col-5-deafios",
    },
    {
      id: 3,
      name: "Astro Place: mock e-commerce",
      image: import.meta.env.BASE_URL + "/project-3.png",
      description:
        "Project of the \"React.js con Vite.js y TailwindCSS\" course from Platzi. The goal was to put into practice web development skills.",
      skills: ["React.js", "Vite.js", "TailwindCSS", "Netlify"],
      link: "https://github.com/BryanGaray99/Astro-Place-e-commerce",
    },
    {
      id: 4,
      name: "Astro Place: Express Backend with PostgreSQL",
      image: import.meta.env.BASE_URL + "/project-4.png",
      description:
        "This project showcases essential backend practices, including ORM for PostgreSQL, Security with Passport.js, JWT and more.",
      skills: ["Node.js", "Express.js", "PostgreSQL", "Passport.js", "JWT", "Nodemailer"],
      link: "https://github.com/BryanGaray99/astro-place-express-postgres-jwt",
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
