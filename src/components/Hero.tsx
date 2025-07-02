import React from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const ProfileImage = () => (
  <div className="flex justify-center mt-[-10vh] items-center">
    <div
      className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 animate-blob overflow-hidden border-4 rounded-full"
      style={{
        backgroundColor: 'var(--color-card)',
        borderColor: 'var(--color-border)'
      }}
    >
      <img
        src="/image/moreno_profile.png"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/andreikennethmoreno"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg transition-all duration-200 hover:scale-150"
        style={{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-muted-foreground)'
        }}
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/kenn-onirom-350a72300/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg transition-all duration-200 hover:scale-150"
        style={{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-muted-foreground)'
        }}
      >
        <Linkedin size={24} />
      </a>
      <a
        href="#projects"
        className="p-3 font-bold rounded-lg transition-all duration-200 hover:scale-110 text-white"
        style={{ backgroundColor: 'var(--color-accent)' }}
      >
        View Work
      </a>
    </div>
  );
};

interface IconConfig {
  component: React.ComponentType<any>;
  color: string;
}

interface TechIconProps {
  Icon: IconConfig;
  title: string;
  isLarge?: boolean;
}

const TechIcon: React.FC<TechIconProps> = ({ Icon, title, isLarge = false }) => {
  const IconComponent = Icon.component;
  
  return (
    <div className="relative group">
      <IconComponent
        title={title}
        className={`transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-125 cursor-pointer ${
          isLarge ? "text-5xl" : ""
        }`}
        style={{ color: Icon.color }}
      />
      <span 
        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}
        style={{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-foreground)'
        }}
      >
        {title}
      </span>
    </div>
  );
};

const techStack = [
  { 
    Icon: { 
      component: SiHtml5, 
      color: "#E34F26"
    }, 
    title: "HTML5" 
  },
  { 
    Icon: { 
      component: SiCss3, 
      color: "#1572B6"
    }, 
    title: "CSS3" 
  },
  { 
    Icon: { 
      component: SiJavascript, 
      color: "#F7DF1E"
    }, 
    title: "JavaScript" 
  },
  { 
    Icon: { 
      component: SiTypescript, 
      color: "#3178C6"
    }, 
    title: "TypeScript" 
  },
  { 
    Icon: { 
      component: SiReact, 
      color: "#61DAFB"
    }, 
    title: "React" 
  },
  { 
    Icon: { 
      component: SiNextdotjs, 
      color: "var(--color-foreground)"
    }, 
    title: "Next.js" 
  },
  { 
    Icon: { 
      component: SiNodedotjs, 
      color: "#339933"
    }, 
    title: "Node.js" 
  },
  { 
    Icon: { 
      component: SiTailwindcss, 
      color: "#06B6D4"
    }, 
    title: "Tailwind CSS" 
  },
];

const Hero: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[130vh] sm:min-h-[125vh] md:min-h-[120vh] lg:min-h-[110vh] xl:min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-12 mt-[-1vh]"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        <div
          className="flex-1 max-w-full mx-auto lg:mx-0 text-center lg:text-left"
          style={{ color: 'var(--color-foreground)' }}
        >
          <div className="animate-fade-in-up">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              style={{ color: 'var(--color-foreground)' }}
            >
              Full Stack Developer 👋🏻
            </h1>
            <p
              className="text-lg max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Hi, I'm Kenneth Moreno. A creative Full-Stack Node.js Developer
              based in Cavite, Philippines. 📍
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
              <SocialLinks />
            </div>
          </div>
        </div>

        <ProfileImage />
      </div>

      <div className="absolute bottom-2 sm:bottom-20 lg:bottom-28 left-0 w-full px-6 sm:px-12">
        <div className="grid grid-cols-full sm:grid-cols-[1fr_2fr] gap-6 items-start text-center sm:text-left">
          <p
            className="text-base sm:text-lg font-semibold"
            style={{ color: 'var(--color-foreground)' }}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-4xl">
            {techStack.map(({ Icon, title }) => (
              <TechIcon
                key={title}
                Icon={Icon}
                title={title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;