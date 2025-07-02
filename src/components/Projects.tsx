import React from "react";
import {
  ExternalLink,
  Github,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const projects = [
    {
      title: "Mood2Anime ⛩️",
      description:
        "Recommends anime based on your mood, connects to the Jikan API via Axios, styled with DaisyUI, and deployed on Vercel.",
      technologies: ["React.js", "API Integration", "Tailwind CSS"],
      image: "/image/projects/mood-thumb.png",
      demoLink: "https://mood2-anime.vercel.app/",
      githubLink: "https://github.com/andreikennethmoreno/Mood2Anime",
    },
    {
      title: "BookOwl 📚",
      description:
        "Track your favorite books with BookOwl, using the Google Books API and secure access via JWT and Google OAuth",
      technologies: ["Node.js", "EJS", "PostgreSQL", "API Integration"],
      image: "/image/projects/book-thumb.png",
      demoLink: "https://www.youtube.com/watch?v=CcioVdIVKcg",
      githubLink: "https://github.com/andreikennethmoreno/BookOwl",
    },
    {
      title: "PlantInventory 🌱",
      description:
        "A full-stack inventory system built with Next.js and ShadCN UI. Features Clerk authentication, PostgreSQL via Prisma ORM, and image uploads — all deployed on Vercel.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Clerk"],
      image: "/image/projects/plant-thumb.png",
      demoLink: "https://nextjscrudauth.vercel.app/plants",
      githubLink: "https://github.com/andreikennethmoreno/nextjscrudauth",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-foreground)' }}
          >
            Featured Projects 🧩
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            Here are some of my recent projects that showcase my skills in
            design, development, and problem-solving.
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto mb-20"
          style={{ minHeight: `${projects.length * 300}px` }}
        >
          {[...projects].reverse().map((project, index) => {
            return (
              <div
                key={project.title}
                style={{
                  top: `calc(${10}vh + ${index * 4}vh)`,
                  zIndex: index + 1,
                }}
                className="sticky mb-12 rounded-3xl overflow-hidden transition-all duration-500 transform border"
                data-style={{
                  backgroundColor: 'var(--color-card)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h3
                      className="text-3xl font-bold mb-4"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mb-6 leading-relaxed"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {project.description}
                    </p>

                    <div className="mb-8">
                      <h4
                        className="font-semibold mb-3"
                        style={{ color: 'var(--color-foreground)' }}
                      >
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm border"
                            style={{
                              backgroundColor: 'var(--color-background)',
                              color: 'var(--color-muted-foreground)',
                              borderColor: 'var(--color-border)'
                            }}
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
                        className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 transform"
                        style={{ 
                          backgroundColor: 'var(--color-accent)',
                          color: 'var(--color-primary-foreground)'
                        }}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        <span style={{ color: 'var(--color-primary-foreground)' }}>Live Demo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 transform border"
                        style={{
                          backgroundColor: 'var(--color-background)',
                          color: 'var(--color-foreground)',
                          borderColor: 'var(--color-border)'
                        }}
                      >
                        <Github size={16} className="mr-2" />
                        <span style={{ color: 'var(--color-foreground)' }}>GitHub</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:basis-1/2 lg:flex-grow relative">
                    <div className="lg:h-full flex justify-start items-start">
                      <div
                        className="relative w-full h-full"
                        style={{
                          marginLeft: "2vh",
                          marginTop: "6vh",
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="rounded-tl-2xl object-cover shadow-2xl cursor-pointer"
                          style={{
                            objectPosition: "left center",
                          }}
                          quality={95}
                          onClick={() => window.open(project.image, "_blank")}
                          unoptimized={false}
                        />
                      </div>
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