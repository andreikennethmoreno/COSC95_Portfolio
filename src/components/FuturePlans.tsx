import React from "react";
import { Rocket, BookOpen, Users, Globe, Brain, Heart, Cpu, GraduationCap, Code2, Youtube, Plane, Briefcase } from "lucide-react";

interface FuturePlansProps {
  isDarkMode: boolean;
}

const FuturePlans: React.FC<FuturePlansProps> = ({ isDarkMode }) => {
  const shortTermGoals = [
    {
      title: "Build AI-Powered Web Projects",
      description:
        "Create full-stack applications that integrate AI features (e.g., recommendations, chatbots, generation) to deepen practical AI experience.",
      timeline: "3–6 months",
      icon: Cpu,
    },
    {
      title: "Develop AI Thesis Project",
      description:
        "Design and implement an AI-driven website for my 4th year thesis, showcasing both technical and creative application of machine learning.",
      timeline: "6–9 months",
      icon: GraduationCap,
    },
    {
      title: "Level Up Coding Fluency",
      description:
        "Deepen mastery in React, Next.js, Prisma, and full-stack dev practices while exploring new tools like LangChain and AI SDKs.",
      timeline: "Ongoing over 12 months",
      icon: Code2,
    },
  ];

  const longTermVision = [
    {
      title: "100K+ YouTube Subscribers",
      description:
        "Grow a tech-focused channel that shares real dev journeys, AI experiments, and startup building in public—uploading weekly to inspire and teach.",
      icon: Youtube,
      impact: "Empowering 100k+ aspiring devs worldwide",
      category: "Content Creation",
      date: "Q4 2026",
    },
    {
      title: "Japan Dev + Content Trip",
      description:
        "Visit Japan to film immersive dev vlogs, interview local creatives, and build a mini web series blending tech, culture, and storytelling.",
      icon: Plane,
      impact: "Connecting global dev culture through storytelling",
      category: "Cultural + Content",
      date: "Q2 2026",
    },
    {
      title: "Launch Profitable AI Startups",
      description:
        "Build and ship AI-powered SaaS tools and creative utilities with monetization in mind—solving real problems with tech and design.",
      icon: Briefcase,
      impact: "Achieve sustainable income through tech entrepreneurship",
      category: "Startup",
      date: "Q1 2027",
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
                      : "bg-zinc-100 ,hover:bg-zinc-100"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-4 rounded-2xl w-fit mb-6">
                    <Icon size={32} className="text-[#2BA6FF]" />
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
              const iconStyle = isDarkMode
                ? "bg-zinc-800 text-zinc-300 hover:text-white"
                : "bg-zinc-200 text-zinc-800 hover:text-black";
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
                      <div
                        className={`p-2 rounded-lg inline-flex ${iconStyle}`}
                      >
                        <Icon size={24} />
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
      </div>
    </section>
  );
};

export default FuturePlans;
