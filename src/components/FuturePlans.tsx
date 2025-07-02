import React from "react";
import { Cpu, GraduationCap, Code2, Youtube, Plane, Briefcase } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const FuturePlans: React.FC = () => {
  const { isDarkMode } = useTheme();
  
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
      className="py-20 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-foreground)' }}
          >
            Future Vision 🎯
          </h2>
          <p
            className="mt-6 max-w-2xl mx-auto"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            Looking ahead, I'm excited about the opportunities to grow, learn,
            and make a meaningful impact through design and technology.
          </p>
        </div>

        <div className="mb-20">
          <h3
            className="text-3xl font-semibold mb-12 text-center"
            style={{ color: 'var(--color-foreground)' }}
          >
            Next 12 Months
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {shortTermGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div
                  key={goal.title}
                  className="rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 group"
                  style={{ backgroundColor: 'var(--color-card)' }}
                >
                  <div className="p-4 rounded-2xl w-fit mb-6">
                    <Icon size={32} style={{ color: 'var(--color-accent)' }} />
                  </div>

                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ color: 'var(--color-foreground)' }}
                  >
                    {goal.title}
                  </h4>

                  <p
                    className="mb-4 leading-relaxed"
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    {goal.description}
                  </p>

                  <div 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    Target: {goal.timeline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <h3
            className="text-3xl font-semibold mb-12 text-center"
            style={{ color: 'var(--color-foreground)' }}
          >
            Long-term Vision
          </h3>

          <div
            className="divide-y-2"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {longTermVision.map((vision) => {
              const Icon = vision.icon;
              return (
                <div
                  key={vision.title}
                  className="py-8 flex flex-wrap md:flex-nowrap items-start"
                >
                  <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0 flex flex-col">
                    <span
                      className="font-semibold title-font"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {vision.category || "CATEGORY"}
                    </span>
                    <span
                      className="text-sm mt-1"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {vision.date || "Date TBD"}
                    </span>
                  </div>

                  <div className="md:flex-grow">
                    <h4
                      className="text-2xl font-medium mb-2 flex items-center gap-3"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      <div
                        className="p-2 rounded-lg inline-flex"
                        style={{ 
                          backgroundColor: 'var(--color-card)',
                          color: 'var(--color-muted-foreground)'
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      {vision.title}
                    </h4>

                    <p
                      className="leading-relaxed mb-3"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {vision.description}
                    </p>

                    <div 
                      className="inline-flex items-center px-3 py-1 border rounded-full text-sm font-medium"
                      style={{ 
                        borderColor: 'var(--color-success)',
                        color: 'var(--color-success)'
                      }}
                    >
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