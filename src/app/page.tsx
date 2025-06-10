"use client";

import About from "@/components/About";
import Challenges from "@/components/Challenges";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FuturePlans from "@/components/FuturePlans";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import React, { useState, useEffect } from "react";


function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "challenges",
        "future",
        "resume",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navigation
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <main className="max-w-6xl mx-auto">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Challenges isDarkMode={isDarkMode} />
        <FuturePlans isDarkMode={isDarkMode} />
        <Resume isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
