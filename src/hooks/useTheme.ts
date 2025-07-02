'use client';

import { useState, useEffect } from 'react';
import { ThemeName, Theme } from '@/types/theme';
import { getTheme, applyTheme } from '@/lib/themes';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('light');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    if (savedTheme && ['light', 'dark', 'onedark', 'dracula', 'nightowl', 'monokai', 'github'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme whenever currentTheme changes
    const theme = getTheme(currentTheme);
    applyTheme(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const changeTheme = (themeName: ThemeName) => {
    setCurrentTheme(themeName);
  };

  const toggleTheme = () => {
    // Legacy toggle function for backward compatibility
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  const isDarkMode = currentTheme !== 'light';

  return {
    currentTheme,
    changeTheme,
    toggleTheme,
    isDarkMode,
    theme: getTheme(currentTheme),
  };
};