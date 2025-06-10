import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/alexjohnson", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alexjohnson",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/alexjohnson",
      label: "Twitter",
    },
    { icon: Mail, href: "mailto:alex.johnson@email.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`border-t ${
        isDarkMode ? "border-zinc-800 bg-black" : "border-zinc-200 bg-white"
      }`}
    >
      {/* Bottom Bar */}
      <div
        className={` pt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${
          isDarkMode ? "border-zinc-800" : "border-zinc-200"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div
            className={`flex items-center ${
              isDarkMode ? "text-zinc-400" : "text-zinc-800"
            }`}
          >
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart size={16} className="mx-2 text-red-500" />
            <span>and lots of coffee.</span>
          </div>
          <div
            className={`text-sm ${
              isDarkMode ? "text-zinc-400" : "text-zinc-800"
            }`}
          >
            <span>Designed & Built by Alex Johnson</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
