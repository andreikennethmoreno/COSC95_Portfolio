import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  isDarkMode,
  toggleTheme,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "challenges", label: "Challenges" },
    { id: "future", label: "Future Plans" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        isDarkMode
          ? "bg-black/80 backdrop-blur-lg border-zinc-800"
          : "bg-white/80 backdrop-blur-lg border-zinc-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Kenn.dev
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-[#2BA6FF]"
                    : isDarkMode
                    ? "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    : "text-zinc-800 hover:bg-zinc-200 hover:text-black"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  : "text-zinc-800 hover:bg-zinc-200 hover:text-black"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? "text-zinc-300 hover:bg-zinc-800"
                  : "text-zinc-800 hover:bg-zinc-200"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? "text-zinc-300 hover:bg-zinc-800"
                  : "text-zinc-800 hover:bg-zinc-200"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`lg:hidden border-t transition-colors duration-300 ${
            isDarkMode ? "border-zinc-800 bg-black" : "border-zinc-200 bg-white"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-[#2BA6FF]"
                    : isDarkMode
                    ? "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    : "text-zinc-800 hover:bg-zinc-200 hover:text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
