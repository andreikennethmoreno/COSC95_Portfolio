import React from "react";
import { Heart, MapPin, Users } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:scale-105"
      style={{
        backgroundColor: 'var(--color-card)',
        color: 'var(--color-foreground)'
      }}
    >
      <h3
        className="text-xl sm:text-2xl font-semibold mb-4 flex flex-col sm:flex-row items-center sm:items-center gap-2"
        style={{ color: 'var(--color-foreground)' }}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span style={{ color: 'var(--color-foreground)' }}>{title}</span>
      </h3>
      <div
        className="leading-relaxed text-sm sm:text-base"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {children}
      </div>
    </div>
  );
};

interface SpinningImageProps {
  imageSrc: string;
  text: string;
  width?: string;
  height?: string;
}

const SpinningImage: React.FC<SpinningImageProps> = ({
  imageSrc,
  text,
  width = "100%",
  height = "auto",
}) => {
  return (
    <div
      className="relative mt-12 mx-auto w-full max-w-xl sm:max-w-2xl"
      style={{ aspectRatio: "20/9" }}
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
              d="M 100, 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
              fill="none"
            />
          </defs>
          <text
            fill="var(--color-foreground)"
            fontSize="16"
            fontWeight="bold"
            fontFamily="monospace"
          >
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: 'var(--color-foreground)' }}
          >
            About Me 💡
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6">
            <InfoCard
              title="The Real Me"
              icon={<Heart style={{ color: 'var(--color-accent)' }} size={24} />}
            >
              <span style={{ color: 'var(--color-muted-foreground)' }}>
                I'm a web developer with 3 years of experience building full-stack
                apps and tutorials that I love to share on my YouTube channel. I
                believe that serving people is the path to a fulfilling life, and
                I strive to reflect that in the work I do and the content I
                create.
              </span>
            </InfoCard>

            <InfoCard
              title="Family Background"
              icon={<Users style={{ color: 'var(--color-accent)' }} size={24} />}
            >
              <span style={{ color: 'var(--color-muted-foreground)' }}>
                Family is everything to me. I grew up as an artist — drawing since
                a young age. My family inspired and encouraged my creativity,
                which shaped who I am today. Over time, I explored digital art and
                eventually found my passion in coding and building meaningful
                digital experiences.
              </span>
            </InfoCard>
          </div>

          <div className="space-y-6">
            <InfoCard
              title="Quick Facts"
              icon={<MapPin style={{ color: 'var(--color-accent)' }} size={24} />}
            >
              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  { label: "Location:", value: "Bacoor, Cavite, PH" },
                  { label: "Experience:", value: "3 Years" },
                  { label: "Projects:", value: "20+ Completed" },
                  { label: "Pomodoro Timer Used:", value: "999+ Hours" },
                ].map(({ label, value }) => (
                  <li
                    key={label}
                    className="flex justify-between"
                  >
                    <span style={{ color: 'var(--color-muted-foreground)' }}>{label}</span>
                    <span
                      className="font-bold"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <SpinningImage
              imageSrc="/image/tori-pixel__art.gif"
              text=" Creativity • Innovation  • Design • "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;