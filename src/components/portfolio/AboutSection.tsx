import { User, GraduationCap, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const aboutCards = [
    {
      icon: User,
      title: "Who I Am",
      description:
        "Passionate software engineer with a love for creating innovative solutions. I enjoy tackling complex problems and turning ideas into reality through clean, efficient code.",
    },
    {
      icon: GraduationCap,
      title: "My Studies",
      description:
        "Computer Science graduate with strong foundations in algorithms, data structures, and software architecture. Continuously learning and staying updated with the latest technologies.",
    },
    {
      icon: Code,
      title: "Area of Expertise",
      description:
        "Full-stack development with expertise in React, TypeScript, Node.js, and modern web technologies. Experienced in building scalable applications and user-centered designs.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1E53] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#2B187A] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={index}
                className="bg-[#E6F7FF] border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-[#2B187A] rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C1E53] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[#1C1E53]/80 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
