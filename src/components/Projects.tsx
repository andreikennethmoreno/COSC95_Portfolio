import React from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  ShoppingCart,
} from "lucide-react";

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "EcoTrack - Sustainability App",
      description:
        "A comprehensive mobile application that helps users track their carbon footprint, set sustainability goals, and connect with eco-friendly communities.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express", "Redux"],
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "https://demo.ecotrack.app",
      githubLink: "https://github.com/alexjohnson/ecotrack",
      icon: Smartphone,
    },
    {
      title: "DesignSystem Pro",
      description:
        "A complete design system and component library used by 50+ companies. Features comprehensive documentation, accessibility compliance, and dark mode support.",
      technologies: [
        "React",
        "TypeScript",
        "Storybook",
        "Styled Components",
        "Jest",
      ],
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "https://designsystem.pro",
      githubLink: "https://github.com/alexjohnson/designsystem-pro",
      icon: Globe,
    },
    {
      title: "ShopFlow - E-commerce Platform",
      description:
        "A modern e-commerce platform with advanced analytics, inventory management, and seamless payment integration. Built for scalability and performance.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
        "Prisma",
      ],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "https://shopflow.demo.com",
      githubLink: "https://github.com/alexjohnson/shopflow",
      icon: ShoppingCart,
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
        isDarkMode ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Featured Projects 🧩
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-zinc-400" : "text-zinc-800"
            }`}
          >
            Here are some of my recent projects that showcase my skills in
            design, development, and problem-solving.
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto mb-20 "
          style={{ minHeight: `${projects.length * 300}px` }}
        >
          {[...projects].reverse().map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                style={{
                  top: `calc(${60}px + ${index * 40}px)`,
                  zIndex: index + 1, // reverse zIndex to match order
                }}
                className={`sticky mb-12 rounded-3xl overflow-hidden transition-all duration-500 transform  ${
                  isDarkMode ? "bg-zinc-900 " : "bg-zinc-100 "
                } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex flex-col lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3
                      className={`text-3xl font-bold mb-4 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`mb-6 leading-relaxed ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-800"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <h4
                        className={`font-semibold mb-3 ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-sm border ${
                              isDarkMode
                                ? "bg-zinc-800 text-zinc-300 border-zinc-700"
                                : "bg-white text-zinc-700 border-zinc-200"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-[#2BA6FF] text-white rounded-lg font-medium  transition-all duration-200 transform 5"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 transform  ${
                          isDarkMode
                            ? "bg-zinc-800 text-white border-zinc-700 "
                            : "bg-white text-black border-zinc-200 "
                        }`}
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="lg:w-1/2 relative">
                    <div className="aspect-w-16 aspect-h-10 lg:aspect-none lg:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-500  rounded-2xl"
                        style={{ marginTop: "60px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
