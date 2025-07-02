import React, { useState } from "react";
import { Video, FlaskConical, LayoutDashboard } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Challenges: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const challenges = [
    {
      title: "Technical Content Creation",
      description:
        "Simplifying complex full-stack concepts and frameworks for thousands of developers on YouTube.",
      solution:
        "Scripted, recorded, and edited engaging tutorials on Next.js, Prisma, PostgreSQL, and API integrations with real-world examples.",
      learning:
        "Clarity and structure are key when teaching; hands-on examples resonate most with developers at all levels.",
      icon: Video,
    },
    {
      title: "Contributing to Beta Developer Tools",
      description:
        "Collaborated with Neon to test and improve their authentication system before public launch.",
      solution:
        "Implemented Neon Auth in a full-stack project, documented the integration, and provided UX feedback to the product team.",
      learning:
        "Beta testing is a two-way street—valuable feedback requires empathy, clear communication, and real-world testing.",
      icon: FlaskConical,
    },
    {
      title: "UI/UX for Student Projects",
      description:
        "Created visually intuitive interfaces for academic tools used by students with limited tech background.",
      solution:
        "Used Tailwind CSS and DaisyUI to rapidly prototype clean, accessible UIs that enhanced usability and reduced user friction.",
      learning:
        "Design isn't just aesthetics—it's about how easily someone can navigate and understand your product.",
      icon: LayoutDashboard,
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="challenges"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-foreground)' }}
          >
            Challenges & Growth 🧠
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            Every challenge is an opportunity to grow. Here are some significant
            obstacles I've overcome and the lessons they taught me.
          </p>
        </div>

        <div className="mb-20 max-w-4xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden border"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={challenge.title}
                  className="border transition-colors duration-300"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: isOpen ? 'var(--color-card)' : 'var(--color-secondary)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 focus:outline-none"
                    style={{ color: 'var(--color-foreground)' }}
                    aria-expanded={isOpen}
                    aria-controls={`challenge-panel-${index}`}
                    id={`challenge-header-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl flex-shrink-0">
                        <Icon size={32} style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <h4 className="text-xl font-semibold">
                        {challenge.title}
                      </h4>
                    </div>
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    id={`challenge-panel-${index}`}
                    role="region"
                    aria-labelledby={`challenge-header-${index}`}
                    className={`px-6 pb-6 text-sm ${isOpen ? "block" : "hidden"}`}
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    <p>
                      <span className="font-semibold" style={{ color: 'var(--color-destructive)' }}>
                        Challenge:{" "}
                      </span>
                      {challenge.description}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold" style={{ color: 'var(--color-success)' }}>
                        Solution:{" "}
                      </span>
                      {challenge.solution}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>
                        Learning:{" "}
                      </span>
                      {challenge.learning}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;