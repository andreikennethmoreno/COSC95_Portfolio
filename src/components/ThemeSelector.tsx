'use client';

import React, { useState } from 'react';
import { ChevronDown, Palette } from 'lucide-react';
import { ThemeName } from '@/types/theme';
import { themes } from '@/lib/themes';

interface ThemeSelectorProps {
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
  isDarkMode: boolean;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
  isDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeSelect = (themeName: ThemeName) => {
    onThemeChange(themeName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isDarkMode
            ? 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
            : 'text-zinc-800 hover:bg-zinc-100 hover:text-black'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Palette size={16} />
        <span className="hidden sm:inline">{themes[currentTheme].displayName}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div 
            className={`absolute right-0 top-full mt-2 w-48 rounded-xl border shadow-lg z-50 ${
              isDarkMode 
                ? 'bg-zinc-900 border-zinc-700' 
                : 'bg-white border-zinc-200'
            }`}
          >
            <div className="p-2">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => handleThemeSelect(key as ThemeName)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    currentTheme === key
                      ? 'bg-[#2BA6FF] text-white'
                      : isDarkMode
                      ? 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                      : 'text-zinc-800 hover:bg-zinc-100 hover:text-black'
                  }`}
                >
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-white/20"
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                  <span>{theme.displayName}</span>
                  {currentTheme === key && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector;