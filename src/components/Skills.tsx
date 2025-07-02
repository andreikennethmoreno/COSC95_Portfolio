import React, { useState, useEffect, useRef } from "react";
import { Code, Award, Zap } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills = [
    { name: "React & TypeScript", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Node.js & Backend", level: 85 },
    { name: "Database Design", level: 80 },
  ];

  const certifications = {
    "CS50x: Introduction to Computer Science (2023)":
      "https://certificates.cs50.io/dab0986a-5bf5-4568-89bf-ce526b8a5cb1.pdf?size=letter",
    "CS50w: Web Programming with Python and JavaScript (2024)":
      "https://certificates.cs50.io/07cf8951-7096-4a72-9245-fcba75963f94.pdf?size=letter",
  };

  const trainings = {
    "AppBrewery Fullstack Web Developer Bootcamp (2024)":
      "https://udemy-certificate.s3.amazonaws.com/image/UC-39cc4dc6-2efe-4bb3-8903-c60993ba2cd7.jpg?v=1724748463000",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-foreground)' }}
          >
            Skills & Expertise 👨‍💻
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className="rounded-3xl p-8"
            style={{ backgroundColor: 'var(--color-card)' }}
          >
            <h3
              className="text-2xl font-semibold mb-8 flex items-center"
              style={{ color: 'var(--color-foreground)' }}
            >
              <Code className="mr-3" style={{ color: 'var(--color-accent)' }} size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className="font-medium"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full h-3 overflow-hidden"
                    style={{ backgroundColor: 'var(--color-muted)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div
              className="rounded-3xl p-8"
              style={{ backgroundColor: 'var(--color-card)' }}
            >
              <h3
                className="text-2xl font-semibold mb-6 flex items-center"
                style={{ color: 'var(--color-foreground)' }}
              >
                <Award className="mr-3" style={{ color: 'var(--color-accent)' }} size={28} />
                Certifications
              </h3>
              <div className="space-y-3">
                {Object.entries(certifications).map(([cert, link], index) => (
                  <a
                    key={cert}
                    href={link}
                    target="_blank"
                    className="flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: 'var(--color-background)' }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {cert}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{ backgroundColor: 'var(--color-card)' }}
            >
              <h3
                className="text-2xl font-semibold mb-6 flex items-center"
                style={{ color: 'var(--color-foreground)' }}
              >
                <Zap className="mr-3" style={{ color: 'var(--color-accent)' }} size={28} />
                Recent Training
              </h3>
              <div className="space-y-3">
                {Object.entries(trainings).map(([training, link], index) => (
                  <a
                    href={link}
                    target="_blank"
                    key={training}
                    className="flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: 'var(--color-background)' }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></div>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {training}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;