import React from "react";
import { Heart, MapPin, Users } from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

interface InfoCardProps {
  isDarkMode: boolean;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  isDarkMode,
  title,
  icon,
  children,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:scale-105 ${
        isDarkMode
          ? "bg-zinc-900 hover:bg-zinc-800"
          : "bg-zinc-100 hover:bg-zinc-200"
      }`}
    >
      <h3
        className={`text-xl sm:text-2xl font-semibold mb-4 flex flex-col sm:flex-row items-center sm:items-center gap-2 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span>{title}</span>
      </h3>
      <div
        className={`${
          isDarkMode ? "text-zinc-300" : "text-zinc-800"
        } leading-relaxed text-sm sm:text-base`}
      >
        {children}
      </div>
    </div>
  );
};

interface SpinningImageProps {
  isDarkMode: boolean;
  imageSrc: string;
  text: string;
  width?: string;
  height?: string;
}

const SpinningImage: React.FC<SpinningImageProps> = ({
  isDarkMode,
  imageSrc,
  text,
  width = "100%",
  height = "auto",
}) => {
  return (
    <div
      className="relative mt-12 mx-auto w-full max-w-xl sm:max-w-2xl"
      style={{ aspectRatio: "16 / 10" }}
    >
      <img
        src={imageSrc}
        alt="Profile"
        className="w-full h-full object-cover rounded-xl relative z-10"
      />

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none animate-spin-slow">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
          </defs>
          <text fill="#2BA6FF" fontSize="16" fontWeight="bold" fontFamily="monospace" >
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className={`py-16 px-4 sm:px-6 lg:px-8 border-t ${
        isDarkMode ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            About Me 💡
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6">
            <InfoCard
              isDarkMode={isDarkMode}
              title="The Real Me"
              icon={<Heart className="text-[#2BA6FF]" size={24} />}
            >
              I'm a passionate designer and developer with 5+ years of
              experience creating digital experiences that users love. I believe
              in the power of good design to solve real problems and make
              technology more human-centered.
            </InfoCard>

            <InfoCard
              isDarkMode={isDarkMode}
              title="Background"
              icon={<MapPin className="text-[#2BA6FF]" size={24} />}
            >
              Born and raised in San Francisco, I grew up in a tech-savvy family
              that encouraged creativity and innovation. My parents, both
              educators, instilled in me the importance of continuous learning
              and helping others.
            </InfoCard>

            <InfoCard
              isDarkMode={isDarkMode}
              title="Family & Values"
              icon={<Users className="text-[#2BA6FF]" size={24} />}
            >
              Family is everything to me. Coming from a close-knit family of
              four, including my younger sister who's pursuing medicine, we've
              always supported each other's dreams.
            </InfoCard>
          </div>

          <div className="space-y-6">
            <InfoCard
              isDarkMode={isDarkMode}
              title="Quick Facts"
              icon={<MapPin className="text-[#2BA6FF]" size={24} />}
            >
              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  { label: "Location:", value: "San Francisco, CA" },
                  { label: "Experience:", value: "5+ Years" },
                  { label: "Projects:", value: "50+ Completed" },
                  { label: "Coffee Consumed:", value: "∞ Cups" },
                ].map(({ label, value }) => (
                  <li
                    key={label}
                    className="flex justify-between"
                    // text colors handled inside InfoCard
                  >
                    <span>{label}</span>
                    <span
                      className={`font-bold ${
                        isDarkMode ? "text-zinc-300" : "text-zinc-800"
                      }`}
                    >
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <SpinningImage
              isDarkMode={isDarkMode}
              imageSrc="https://picsum.photos/800/540"
              text="Passion • Creativity • Innovation • Teamwork • Code • Design •"
              // width and height props removed for responsiveness
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
