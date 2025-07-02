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
import { useTheme } from "@/hooks/useTheme";
import React, { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const { isDarkMode } = useTheme();

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

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navigation activeSection={activeSection} />
      <main className="max-w-6xl mx-auto">
        <Hero isDarkMode={isDarkMode} />
        <About />
        <Skills />
        <div id="your-section-id">
          <Projects />
        </div>
        <Challenges />
        <FuturePlans />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;