import React from "react";
import { Rocket, BookOpen, Users, Globe, Brain, Heart } from "lucide-react";

interface FuturePlansProps {
  isDarkMode: boolean;
}

const FuturePlans: React.FC<FuturePlansProps> = ({ isDarkMode }) => {
  const shortTermGoals = [
    {
      title: "Master AI-Powered Design",
      description:
        "Explore and integrate AI tools into my design workflow to enhance creativity and efficiency.",
      timeline: "6 months",
      icon: Brain,
    },
    {
      title: "Launch Design Course",
      description:
        "Create and launch an online course teaching practical UX design skills to aspiring designers.",
      timeline: "8 months",
      icon: BookOpen,
    },
    {
      title: "Speaking Engagements",
      description:
        "Present at major design conferences and share insights on modern design systems.",
      timeline: "12 months",
      icon: Users,
    },
  ];

  const longTermVision = [
    {
      title: "Global Design Consultancy",
      description:
        "Build a consultancy that helps companies create more inclusive and accessible digital products worldwide.",
      icon: Globe,
      impact: "Reaching 100+ companies globally",
      category: "Business",
      date: "Q4 2026",
    },
    {
      title: "Design Education Platform",
      description:
        "Develop a comprehensive platform that makes high-quality design education accessible to everyone.",
      icon: Rocket,
      impact: "Training 10,000+ designers",
      category: "Education",
      date: "Q2 2027",
    },
    {
      title: "Social Impact Projects",
      description:
        "Use design skills to solve social problems and contribute to meaningful causes in underserved communities.",
      icon: Heart,
      impact: "Creating positive social change",
      category: "Community",
      date: "Ongoing",
    },
  ];

  return (
    <section
      id="future"
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
            Future Vision 🎯
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-zinc-400" : "text-zinc-800"
            }`}
          >
            Looking ahead, I'm excited about the opportunities to grow, learn,
            and make a meaningful impact through design and technology.
          </p>
        </div>

        {/* Short-term Goals */}
        <div className="mb-20">
          <h3
            className={`text-3xl font-semibold mb-12 text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Next 12 Months
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {shortTermGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div
                  key={goal.title}
                  className={`rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 group ${
                    isDarkMode
                      ? "bg-zinc-900 hover:bg-zinc-800"
                      : "bg-zinc-100 hover:bg-zinc-200"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-4 bg-[#2BA6FF] rounded-2xl w-fit mb-6">
                    <Icon size={32} className="text-white" />
                  </div>

                  <h4
                    className={`text-xl font-bold mb-3 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {goal.title}
                  </h4>

                  <p
                    className={`mb-4 leading-relaxed ${
                      isDarkMode ? "text-zinc-300" : "text-zinc-800"
                    }`}
                  >
                    {goal.description}
                  </p>

                  <div className="inline-flex items-center px-3 py-1 bg-[#2BA6FF] rounded-full text-white text-sm font-medium">
                    Target: {goal.timeline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Long-term Vision */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h3
            className={`text-3xl font-semibold mb-12 text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Long-term Vision
          </h3>

          <div
            className={`divide-y-2 ${
              isDarkMode ? "divide-zinc-700" : "divide-zinc-200"
            }`}
          >
            {longTermVision.map((vision) => {
              const Icon = vision.icon;
              return (
                <div
                  key={vision.title}
                  className="py-8 flex flex-wrap md:flex-nowrap items-start"
                >
                  {/* Left sidebar: category & date */}
                  <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0 flex flex-col">
                    <span
                      className={`font-semibold title-font ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                    >
                      {vision.category || "CATEGORY"}
                    </span>
                    <span
                      className={`text-sm mt-1 ${
                        isDarkMode ? "text-zinc-500" : "text-zinc-500"
                      }`}
                    >
                      {vision.date || "Date TBD"}
                    </span>
                  </div>

                  {/* Right main content */}
                  <div className="md:flex-grow">
                    <h4
                      className={`text-2xl font-medium mb-2 ${
                        isDarkMode ? "text-white" : "text-zinc-900"
                      } flex items-center gap-3`}
                    >
                      <div className="p-2 bg-[#2BA6FF] rounded-lg inline-flex">
                        <Icon size={24} className="text-white" />
                      </div>
                      {vision.title}
                    </h4>

                    <p
                      className={`leading-relaxed mb-3 ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-800"
                      }`}
                    >
                      {vision.description}
                    </p>

                    <div className="inline-flex items-center px-3 py-1 border border-green-600 rounded-full text-green-600 text-sm font-medium">
                      Impact Goal: {vision.impact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center rounded-3xl p-12 ${
            isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Want to Be Part of the Journey?
          </h3>
          <p
            className={`mb-8 max-w-2xl mx-auto ${
              isDarkMode ? "text-zinc-300" : "text-zinc-800"
            }`}
          >
            I believe the best work happens through collaboration. If any of
            these goals resonate with you, or if you have ideas for meaningful
            projects, I'd love to connect and explore possibilities together.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-[#2BA6FF] text-white rounded-lg font-medium hover:bg-[#2BA6FF]/90 transform hover:scale-105 transition-all duration-200"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
