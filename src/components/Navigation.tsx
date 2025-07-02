import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useTheme } from "@/hooks/useTheme";

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentTheme, changeTheme, toggleTheme, isDarkMode } = useTheme();

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
      className="fixed top-0 w-full z-50 border-b transition-all duration-300 backdrop-blur-lg"
      style={{
        backgroundColor: 'var(--color-background)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1
              className="text-xl font-bold"
              style={{ color: 'var(--color-foreground)' }}
            >
              kenn.dev
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{
                  color: activeSection === item.id 
                    ? 'var(--color-accent)' 
                    : 'var(--color-muted-foreground)',
                  backgroundColor: activeSection === item.id 
                    ? 'var(--color-card)' 
                    : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = 'var(--color-card)';
                    e.currentTarget.style.color = 'var(--color-foreground)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-muted-foreground)';
                  }
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Selector */}
            <ThemeSelector
              currentTheme={currentTheme}
              onThemeChange={changeTheme}
              isDarkMode={isDarkMode}
            />

            {/* Legacy Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                color: 'var(--color-muted-foreground)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-card)';
                e.currentTarget.style.color = 'var(--color-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-muted-foreground)';
              }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeSelector
              currentTheme={currentTheme}
              onThemeChange={changeTheme}
              isDarkMode={isDarkMode}
            />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                color: 'var(--color-muted-foreground)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-card)';
                e.currentTarget.style.color = 'var(--color-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-muted-foreground)';
              }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                color: 'var(--color-muted-foreground)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-card)';
                e.currentTarget.style.color = 'var(--color-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-muted-foreground)';
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="lg:hidden border-t transition-all duration-300"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-background)'
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
                style={{
                  color: activeSection === item.id 
                    ? 'var(--color-accent)' 
                    : 'var(--color-muted-foreground)',
                  backgroundColor: activeSection === item.id 
                    ? 'var(--color-card)' 
                    : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = 'var(--color-card)';
                    e.currentTarget.style.color = 'var(--color-foreground)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-muted-foreground)';
                  }
                }}
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