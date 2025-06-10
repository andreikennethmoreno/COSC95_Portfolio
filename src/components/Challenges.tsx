import React, { useState } from "react";
import { Mountain, Lightbulb, Target, TrendingUp } from "lucide-react";

interface ChallengesProps {
  isDarkMode: boolean;
}

const Challenges: React.FC<ChallengesProps> = ({ isDarkMode }) => {
  const challenges = [
    {
      title: "Scaling Design Systems",
      description:
        "Leading the design system adoption across 15+ teams with different workflows and requirements.",
      solution:
        "Created comprehensive documentation, conducted workshops, and established a design council for governance.",
      learning:
        "The importance of change management and clear communication in technical transitions.",
      icon: Target,
    },
    {
      title: "Performance Optimization",
      description:
        "Inherited a React application with poor performance, loading times exceeding 8 seconds.",
      solution:
        "Implemented code splitting, lazy loading, optimized bundle sizes, and introduced performance monitoring.",
      learning:
        "How small optimizations compound to create significant user experience improvements.",
      icon: TrendingUp,
    },
    {
      title: "Cross-Cultural Design",
      description:
        "Designing products for global markets with diverse cultural preferences and accessibility needs.",
      solution:
        "Conducted extensive user research, created localized design patterns, and implemented inclusive design principles.",
      learning:
        "The power of empathy and user research in creating truly inclusive digital experiences.",
      icon: Mountain,
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  return (
    <section
      id="challenges"
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
            Challenges & Growth 🧠
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-zinc-400" : "text-zinc-800"
            }`}
          >
            Every challenge is an opportunity to grow. Here are some significant
            obstacles I've overcome and the lessons they taught me.
          </p>
        </div>

        {/* Accordion for Major Challenges */}
        <div className="mb-20 max-w-4xl mx-auto">

          <div
            className={`rounded-3xl overflow-hidden border ${
              isDarkMode ? "border-zinc-800" : "border-zinc-300"
            }`}
          >
            {" "}
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={challenge.title}
                  className={`border ${
                    isDarkMode ? "border-zinc-800" : "border-zinc-300"
                  } ${
                    isOpen
                      ? isDarkMode
                        ? "bg-zinc-900"
                        : "bg-zinc-50"
                      : isDarkMode
                      ? "bg-zinc-800"
                      : "bg-white"
                  } transition-colors duration-300`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full flex items-center justify-between p-6 focus:outline-none ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`challenge-panel-${index}`}
                    id={`challenge-header-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3  rounded-2xl flex-shrink-0">
                        <Icon size={32} className="text-[#2BA6FF]" />
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
                    className={`px-6 pb-6 text-sm ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-800"
                    } ${isOpen ? "block" : "hidden"}`}
                  >
                    <p>
                      <span className="font-semibold text-red-500">
                        Challenge:{" "}
                      </span>
                      {challenge.description}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-green-500">
                        Solution:{" "}
                      </span>
                      {challenge.solution}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-[#2BA6FF]">
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

        {/* You can keep Life Learnings section the same or convert it similarly */}
      </div>
    </section>
  );
};

export default Challenges;
