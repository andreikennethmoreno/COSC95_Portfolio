import React, { useState, useEffect, useRef } from "react";
import { Code, Palette, Zap, Award } from "lucide-react";

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technicalSkills = [
    { name: "React & TypeScript", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Node.js & Backend", level: 85 },
    { name: "Database Design", level: 80 },
  ];

  const certifications = [
    "Google UX Design Professional Certificate",
    "AWS Certified Solutions Architect",
  ];

  const trainings = ["Advanced Design Systems Workshop - Design+Research 2023"];

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
      className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
        isDarkMode ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Skills & Expertise 👨‍💻
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div
            className={`rounded-3xl p-8 ${
              isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-8 flex items-center ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              <Code className="mr-3 text-[#2BA6FF]" size={28} />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`font-medium ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-3 overflow-hidden ${
                      isDarkMode ? "bg-zinc-700" : "bg-zinc-200"
                    }`}
                  >
                    <div
                      className="h-full bg-[#2BA6FF] rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="space-y-8">
            <div
              className={`rounded-3xl p-8 ${
                isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-6 flex items-center ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <Award className="mr-3 text-[#2BA6FF]" size={28} />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className={`flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-zinc-800 hover:bg-zinc-700"
                        : "bg-white hover:bg-zinc-200"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-[#2BA6FF] rounded-full mr-3 flex-shrink-0"></div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-3xl p-8 ${
                isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-6 flex items-center ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <Zap className="mr-3 text-[#2BA6FF]" size={28} />
                Recent Training
              </h3>
              <div className="space-y-3">
                {trainings.map((training, index) => (
                  <div
                    key={training}
                    className={`flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-zinc-800 hover:bg-zinc-700"
                        : "bg-white hover:bg-zinc-200"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-[#2BA6FF] rounded-full mr-3 flex-shrink-0"></div>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      {training}
                    </span>
                  </div>
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
