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
  const experience = [
    {
      title: "Technical Content Creator",
      company: "Self-Employed / YouTube",
      location: "Remote",
      period: "10/2023 - Present",
      achievements: [
        "Produced and published in-depth technical tutorials on web development, with most viewed video achieving over 30k views",
        "Developed content on modern frameworks, API integrations and simplifying complex concepts for a broad audience",
        "Collaborated with Neon to showcase and test a beta feature—Neon Auth, a seamless authentication solution",
        "Provided detailed feedback and suggestions to Neon's product team for improving Neon Auth's usability, documentation, and developer experience",
        "Continuously refined content based on viewer feedback, enhancing tutorial clarity and channel growth",
      ],
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      location: "Bacoor, Philippines",
      period: "03/2022 - Present",
      achievements: [
        "Developed and maintained custom PHP/MySQL websites for fellow students consistently earning commissions and driving high user engagement",
        "Developed a gym management application using Tkinter, featuring gym session scheduling, membership management, and secure login/logout functionality",
        "Built a commissioned full-stack web application that improved academic performance through an intuitive, user-friendly interface",
        "Collaborated with peers on multiple projects, reducing turnaround time by 20% through effective teamwork and agile methodologies",
        "Implemented modern best practices in web development to enhance backend efficiency and overall system performance",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Cavite State University",
      location: "Bacoor, Philippines",
      period: "06/2021 - Present",
      details: "Currently pursuing degree in Computer Science",
    },
  ];

  const skills = [
    "JavaScript",
    "PHP",
    "Python",
    "SQL",
    "React.js",
    "EJS",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "DaisyUI",
    "Node.js",
    "PostgreSQL",
    "Express.js",
    "RESTful API Development",
    "JWT Authentication",
    "Git",
    "GitHub",
    "Postman",
    "Jest",
    "Swagger",
    "Agile Methodologies",
    "SQLite",
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
            Resume 📑
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
              Andrei Kenneth Moreno
            </h1>
            <h2 className="text-xl text-[#2BA6FF] mb-6">
              Full Stack Developer | API Development | Technical Content Creator
            </h2>

            <div
              className={`flex flex-wrap justify-center gap-6 ${
                isDarkMode ? "text-zinc-300" : "text-zinc-800"
              }`}
            >
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#2BA6FF]" />
                kennonirom@gmail.com
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-[#2BA6FF]" />
                +63 915 456 4720
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-[#2BA6FF]" />
                Bacoor, Cavite
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="./Moreno_AndreiKenneth_A_CV.pdf" download>
              <button className="inline-flex items-center px-6 py-3 bg-[#2BA6FF] text-white rounded-lg font-medium hover:bg-[#2BA6FF]/90 transition-all duration-200 transform hover:scale-105">
                <Download size={20} className="mr-2" />
                Download PDF Resume
              </button>
            </a>
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
            Full-stack web developer with 3 years of experience building
            dynamic, secure, and scalable web applications. Specializes in API
            development, authentication systems, and delivering intuitive user
            experiences. Also a technical content creator with over 30k views on
            YouTube, known for simplifying complex development concepts and
            collaborating with platforms like Neon to showcase beta features.
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
                    : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100"
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
