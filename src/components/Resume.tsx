import {
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Code,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Resume: React.FC = () => {
  const { isDarkMode } = useTheme();
  
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
      className="py-20 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: 'var(--color-foreground)' }}
          >
            Resume 📑
          </h2>
        </div>

        <div
          className="rounded-3xl p-8 mb-8"
          style={{ backgroundColor: 'var(--color-card)' }}
        >
          <div className="text-center mb-8">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: 'var(--color-foreground)' }}
            >
              Andrei Kenneth Moreno
            </h1>
            <h2 className="text-xl mb-6" style={{ color: 'var(--color-accent)' }}>
              Full Stack Developer | API Development | Technical Content Creator
            </h2>

            <div
              className="flex flex-wrap justify-center gap-6"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              <div className="flex items-center">
                <Mail size={16} className="mr-2" style={{ color: 'var(--color-accent)' }} />
                kennonirom@gmail.com
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" style={{ color: 'var(--color-accent)' }} />
                +63 915 456 4720
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" style={{ color: 'var(--color-accent)' }} />
                Bacoor, Cavite
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="./Moreno_AndreiKenneth_A_CV.pdf" download>
              <button 
                className="inline-flex items-center px-6 py-3 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                <Download size={20} className="mr-2" />
                Download PDF Resume
              </button>
            </a>
          </div>
        </div>

        <div
          className="rounded-3xl p-8 mb-8"
          style={{ backgroundColor: 'var(--color-card)' }}
        >
          <h3
            className="text-2xl font-semibold mb-4 flex items-center"
            style={{ color: 'var(--color-foreground)' }}
          >
            <Briefcase className="mr-3" style={{ color: 'var(--color-accent)' }} size={24} />
            Professional Summary
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            Full-stack web developer with 3 years of experience building
            dynamic, secure, and scalable web applications. Specializes in API
            development, authentication systems, and delivering intuitive user
            experiences. Also a technical content creator with over 30k views on
            YouTube, known for simplifying complex development concepts and
            collaborating with platforms like Neon to showcase beta features.
          </p>
        </div>

        <div
          className="rounded-3xl p-8 mb-8"
          style={{ backgroundColor: 'var(--color-card)' }}
        >
          <h3
            className="text-2xl font-semibold mb-6 flex items-center"
            style={{ color: 'var(--color-foreground)' }}
          >
            <Briefcase className="mr-3" style={{ color: 'var(--color-accent)' }} size={24} />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="border-l-2 pl-6 relative"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <div 
                  className="absolute w-4 h-4 rounded-full -left-2 top-0"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                ></div>
                <div className="mb-4">
                  <h4
                    className="text-xl font-semibold"
                    style={{ color: 'var(--color-foreground)' }}
                  >
                    {job.title}
                  </h4>
                  <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                    {job.company}
                  </p>
                  <div
                    className="flex items-center text-sm mt-1 space-x-4"
                    style={{ color: 'var(--color-muted-foreground)' }}
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
                      className="flex items-start"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      ></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-3xl p-8 mb-8"
          style={{ backgroundColor: 'var(--color-card)' }}
        >
          <h3
            className="text-2xl font-semibold mb-6 flex items-center"
            style={{ color: 'var(--color-foreground)' }}
          >
            <GraduationCap className="mr-3" style={{ color: 'var(--color-accent)' }} size={24} />
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-l-2 pl-6 relative"
              style={{ borderColor: 'var(--color-accent)' }}
            >
              <div 
                className="absolute w-4 h-4 rounded-full -left-2 top-0"
                style={{ backgroundColor: 'var(--color-accent)' }}
              ></div>
              <h4
                className="text-xl font-semibold"
                style={{ color: 'var(--color-foreground)' }}
              >
                {edu.degree}
              </h4>
              <p className="font-medium" style={{ color: 'var(--color-accent)' }}>
                {edu.school}
              </p>
              <div
                className="flex items-center text-sm mt-1 space-x-4"
                style={{ color: 'var(--color-muted-foreground)' }}
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
                className="mt-2"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                {edu.details}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-3xl p-8"
          style={{ backgroundColor: 'var(--color-card)' }}
        >
          <h3
            className="text-2xl font-semibold mb-6 flex items-center"
            style={{ color: 'var(--color-foreground)' }}
          >
            <Code className="mr-3" style={{ color: 'var(--color-accent)' }} size={24} />
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-background)',
                  color: 'var(--color-muted-foreground)',
                  borderColor: 'var(--color-border)'
                }}
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