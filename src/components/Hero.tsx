// components/Hero.tsx
import React from "react";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

interface HeroProps {
  isDarkMode: boolean;
}

// 👇 Subcomponent: ProfileImage
const ProfileImage = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <div className="flex justify-center mt-[-10vh] items-center">
    <div
      className={`
         w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80  
        animate-blob overflow-hidden 
        border-4 rounded-full 
        ${
          isDarkMode
            ? "bg-zinc-900 text-white border-zinc-100"
            : "bg-white text-black border-zinc-700"
        }
      `}
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>
);

// 👇 Subcomponent: SocialLinks
const SocialLinks = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const iconStyle = isDarkMode
    ? "bg-zinc-800 text-zinc-300 hover:text-white"
    : "bg-zinc-200 text-zinc-800 hover:text-black";

  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-lg transition-all duration-200 hover:scale-150 ${iconStyle}`}
      >
        <Github size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-lg transition-all duration-200 hover:scale-150 ${iconStyle}`}
      >
        <Linkedin size={24} />
      </a>
      <a
        href="#your-section-id"
        className={`p-3 font-bold rounded-lg transition-all duration-200 hover:scale-110 text-white ${
          isDarkMode ? "hover:text-white" : "hover:text-white"
        } bg-[#2BA6FF]`}
      >
        View Work
      </a>
    </div>
  );
};

// 👇 Subcomponent: ScrollDownIcon
const ScrollDownIcon = ({
  isDarkMode,
  scrollToAbout,
}: {
  isDarkMode: boolean;
  scrollToAbout: () => void;
}) => (
  <div className="absolute bottom-8 left-0 right-0 flex justify-center">
    <button
      onClick={scrollToAbout}
      className={`transition-colors duration-300 animate-bounce ${
        isDarkMode
          ? "text-zinc-400 hover:text-white"
          : "text-zinc-800 hover:text-black"
      }`}
    >
      <ChevronDown size={32} />
    </button>
  </div>
);

interface IconConfig {
  component: React.ComponentType<any>;
  darkColor: string;
  lightColor: string;
}

interface TechStackItem {
  Icon: IconConfig;
  title: string;
  isLarge?: boolean;
}

interface TechIconProps {
  Icon: IconConfig;
  title: string;
  isDarkMode: boolean;
  isLarge?: boolean;
}

// Tech Stack Icons Component
const TechIcon: React.FC<TechIconProps> = ({ Icon, title, isDarkMode, isLarge = false }) => {
  const IconComponent = Icon.component;
  
  return (
    <div className="relative group">
      <IconComponent
        title={title}
        className={`transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-125 cursor-pointer ${
          isLarge ? "text-5xl" : ""
        } ${isDarkMode ? Icon.darkColor : Icon.lightColor}`}
      />
      <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}>
        {title}
      </span>
    </div>
  );
};


// Define tech stack data
const techStack = [
  { 
    Icon: { 
      component: SiHtml5, 
      darkColor: "text-[#FF6B47]", 
      lightColor: "text-[#B8341A]" 
    }, 
    title: "HTML5" 
  },
  { 
    Icon: { 
      component: SiCss3, 
      darkColor: "text-[#2196F3]", 
      lightColor: "text-[#0F4C81]" 
    }, 
    title: "CSS3" 
  },
  { 
    Icon: { 
      component: SiJavascript, 
      darkColor: "text-[#FFE066]", 
      lightColor: "text-[#B8A000]" 
    }, 
    title: "JavaScript" 
  },
  { 
    Icon: { 
      component: SiTypescript, 
      darkColor: "text-[#4FC3F7]", 
      lightColor: "text-[#1E4A6B]" 
    }, 
    title: "TypeScript" 
  },
  { 
    Icon: { 
      component: SiReact, 
      darkColor: "text-[#7DD3FC]", 
      lightColor: "text-[#0891B2]" 
    }, 
    title: "React" 
  },
  { 
    Icon: { 
      component: SiNextdotjs, 
      darkColor: "text-white", 
      lightColor: "text-black" 
    }, 
    title: "Next.js" 
  },
  { 
    Icon: { 
      component: SiNodedotjs, 
      darkColor: "text-[#4ADE80]", 
      lightColor: "text-[#166534]" 
    }, 
    title: "Node.js" 
  },
  { 
    Icon: { 
      component: SiTailwindcss, 
      darkColor: "text-[#06B6D4]", 
      lightColor: "text-[#0E7490]" 
    }, 
    title: "Tailwind CSS" 
  },
  { 
    Icon: { 
      component: SiPostgresql, 
      darkColor: "text-[#4285F4]", 
      lightColor: "text-[#1565C0]" 
    }, 
    title: "PostgreSQL",
    isLarge: true 
  }
];

// 👇 Main Component: Hero
const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="
      min-h-[130vh] sm:min-h-[125vh] md:min-h-[120vh] lg:min-h-[110vh] xl:min-h-screen 
      flex items-center justify-center relative px-4 sm:px-6 lg:px-12
      mt-[-1vh]
    "
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Left: Text content */}
        <div
          className={`flex-1 max-w-full mx-auto lg:mx-0 ${
            isDarkMode ? "text-white" : "text-black"
          } text-center lg:text-left`}
        >
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Full Stack Developer 👋🏻
            </h1>
            <p
              className={`text-lg max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed ${
                isDarkMode ? "text-zinc-400" : "text-zinc-800"
              }`}
            >
              Hi, I'm Dreiken Moreno. A passionate Full-Stack Node.js Developer
              based in Cavite, Philippines. 📍
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
              <SocialLinks isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>

        {/* Right: Profile image */}
        <ProfileImage isDarkMode={isDarkMode} />
      </div>

      {/* <ScrollDownIcon isDarkMode={isDarkMode} scrollToAbout={scrollToAbout} /> */}

      <div className="absolute bottom-28 left-0 w-full px-6 sm:px-12">
        <div className="grid grid-cols-full sm:grid-cols-[1fr_2fr] gap-6 items-start text-center sm:text-left">
          <p
            className={`text-base sm:text-lg font-semibold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-4xl">
            {techStack.map(({ Icon, title, isLarge }) => (
              <TechIcon
                key={title}
                Icon={Icon}
                title={title}
                isDarkMode={isDarkMode}
                isLarge={isLarge}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
