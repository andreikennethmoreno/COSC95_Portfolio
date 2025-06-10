import React from "react";
import {
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  Code,
} from "lucide-react";

interface ResumeProps {
  isDarkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ isDarkMode }) => {
  const handleDownload = () => {
    // In a real application, this would trigger a download of an actual PDF file
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual PDF URL
    link.download = "Alex_Johnson_Resume.pdf";
    link.click();
  };

  const experience = [
    {
      title: "Senior UX/UI Designer",
      company: "TechForward Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      achievements: [
        "Led design system initiative across 8 product teams, reducing design-to-development time by 40%",
        "Redesigned core product interface, resulting in 35% increase in user engagement",
        "Mentored 3 junior designers and established design review processes",
        "Collaborated with PM and engineering teams on product strategy and roadmap planning",
      ],
    },
    {
      title: "UX Designer",
      company: "Innovation Labs",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      achievements: [
        "Designed mobile-first experiences for fintech startup serving 100k+ users",
        "Conducted user research and usability testing for 5 major product features",
        "Improved user onboarding flow, reducing drop-off rate by 25%",
        "Created comprehensive style guide and component library",
      ],
    },
    {
      title: "Junior Designer",
      company: "Creative Studio",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      achievements: [
        "Designed web and mobile interfaces for diverse client portfolio",
        "Collaborated with developers to ensure pixel-perfect implementation",
        "Created brand identities and marketing materials for 10+ clients",
        "Gained experience in user-centered design methodologies",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Fine Arts in Graphic Design",
      school: "California College of the Arts",
      location: "Oakland, CA",
      period: "2015 - 2019",
      details: "Magna Cum Laude, Dean's List, Design Excellence Award",
    },
  ];

  const skills = [
    "UI/UX Design",
    "Figma",
    "Adobe Creative Suite",
    "Sketch",
    "InVision",
    "React",
    "TypeScript",
    "HTML/CSS",
    "JavaScript",
    "Node.js",
    "User Research",
    "Prototyping",
    "Design Systems",
    "Accessibility",
    "Agile/Scrum",
    "Project Management",
    "Team Leadership",
  ];

  return (
    <section
      id="resume"
      className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${
        isDarkMode ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Resume
          </h2>
        </div>

        {/* Resume Header */}
        <div
          className={`rounded-3xl p-8 mb-8 ${
            isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
          }`}
        >
          <div className="text-center mb-8">
            <h1
              className={`text-4xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Alex Johnson
            </h1>
            <h2 className="text-xl text-[#2BA6FF] mb-6">
              Senior UX/UI Designer & Developer
            </h2>

            <div
              className={`flex flex-wrap justify-center gap-6 ${
                isDarkMode ? "text-zinc-300" : "text-zinc-800"
              }`}
            >
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#2BA6FF]" />
                alex.johnson@email.com
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-[#2BA6FF]" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-[#2BA6FF]" />
                San Francisco, CA
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-[#2BA6FF] text-white rounded-lg font-medium hover:bg-[#2BA6FF]/90 transition-all duration-200 transform hover:scale-105"
            >
              <Download size={20} className="mr-2" />
              Download PDF Resume
            </button>
          </div>
        </div>

        {/* Professional Summary */}
        <div
          className={`rounded-3xl p-8 mb-8 ${
            isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-4 flex items-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <Briefcase className="mr-3 text-[#2BA6FF]" size={24} />
            Professional Summary
          </h3>
          <p
            className={`leading-relaxed ${
              isDarkMode ? "text-zinc-300" : "text-zinc-800"
            }`}
          >
            Passionate UX/UI Designer and Developer with 5+ years of experience
            creating user-centered digital experiences. Proven track record of
            leading design initiatives, improving user engagement, and
            collaborating effectively with cross-functional teams. Combines
            strong design sensibilities with technical implementation skills to
            deliver comprehensive solutions that balance user needs with
            business objectives.
          </p>
        </div>

        {/* Experience */}
        <div
          className={`rounded-3xl p-8 mb-8 ${
            isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-6 flex items-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <Briefcase className="mr-3 text-[#2BA6FF]" size={24} />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="border-l-2 border-[#2BA6FF] pl-6 relative"
              >
                <div className="absolute w-4 h-4 bg-[#2BA6FF] rounded-full -left-2 top-0"></div>
                <div className="mb-4">
                  <h4
                    className={`text-xl font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {job.title}
                  </h4>
                  <p className="text-[#2BA6FF] font-medium">{job.company}</p>
                  <div
                    className={`flex items-center text-sm mt-1 space-x-4 ${
                      isDarkMode ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {job.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className={`flex items-start ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-800"
                      }`}
                    >
                      <div className="w-2 h-2 bg-[#2BA6FF] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          className={`rounded-3xl p-8 mb-8 ${
            isDarkMode ? "bg-zinc-900" : "bg-zinc-100"
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-6 flex items-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <GraduationCap className="mr-3 text-[#2BA6FF]" size={24} />
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-l-2 border-[#2BA6FF] pl-6 relative"
            >
              <div className="absolute w-4 h-4 bg-[#2BA6FF] rounded-full -left-2 top-0"></div>
              <h4
                className={`text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {edu.degree}
              </h4>
              <p className="text-[#2BA6FF] font-medium">{edu.school}</p>
              <div
                className={`flex items-center text-sm mt-1 space-x-4 ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {edu.period}
                </span>
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {edu.location}
                </span>
              </div>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-zinc-300" : "text-zinc-800"
                }`}
              >
                {edu.details}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
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
            <Code className="mr-3 text-[#2BA6FF]" size={24} />
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
                    : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-200"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
