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
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
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
            className="absolute right-0 top-full mt-2 w-48 rounded-xl border shadow-lg z-50"
            style={{
              backgroundColor: 'var(--color-background)',
              borderColor: 'var(--color-border)'
            }}
          >
            <div className="p-2">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => handleThemeSelect(key as ThemeName)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                  style={{
                    color: currentTheme === key 
                      ? 'white' 
                      : 'var(--color-muted-foreground)',
                    backgroundColor: currentTheme === key 
                      ? 'var(--color-accent)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (currentTheme !== key) {
                      e.currentTarget.style.backgroundColor = 'var(--color-card)';
                      e.currentTarget.style.color = 'var(--color-foreground)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentTheme !== key) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--color-muted-foreground)';
                    }
                  }}
                >
                  <div 
                    className="w-4 h-4 rounded-full border-2"
                    style={{ 
                      backgroundColor: theme.colors.accent,
                      borderColor: currentTheme === key ? 'white' : 'var(--color-border)'
                    }}
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