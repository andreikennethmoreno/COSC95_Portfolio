import { Theme, ThemeName } from '@/types/theme';

export const themes: Record<ThemeName, Theme> = {
  light: {
    name: 'light',
    displayName: 'Light',
    colors: {
      background: '#ffffff',
      foreground: '#0f172a',
      card: '#f8fafc',
      cardHover: '#f1f5f9',
      border: '#e2e8f0',
      accent: '#2563eb',
      muted: '#f8fafc',
      mutedForeground: '#64748b',
      secondary: '#f1f5f9',
      secondaryForeground: '#0f172a',
      primary: '#2563eb',
      primaryForeground: '#ffffff',
      destructive: '#dc2626',
      success: '#16a34a',
      warning: '#ca8a04',
    },
  },
  dark: {
    name: 'dark',
    displayName: 'Dark',
    colors: {
      background: '#0f172a',
      foreground: '#f8fafc',
      card: '#1e293b',
      cardHover: '#334155',
      border: '#334155',
      accent: '#3b82f6',
      muted: '#1e293b',
      mutedForeground: '#94a3b8',
      secondary: '#1e293b',
      secondaryForeground: '#f8fafc',
      primary: '#3b82f6',
      primaryForeground: '#ffffff',
      destructive: '#ef4444',
      success: '#22c55e',
      warning: '#f59e0b',
    },
  },
  onedark: {
    name: 'onedark',
    displayName: 'One Dark',
    colors: {
      background: '#282c34',
      foreground: '#abb2bf',
      card: '#21252b',
      cardHover: '#2c313c',
      border: '#3e4451',
      accent: '#61afef',
      muted: '#21252b',
      mutedForeground: '#5c6370',
      secondary: '#21252b',
      secondaryForeground: '#abb2bf',
      primary: '#61afef',
      primaryForeground: '#282c34',
      destructive: '#e06c75',
      success: '#98c379',
      warning: '#e5c07b',
    },
  },
  dracula: {
    name: 'dracula',
    displayName: 'Dracula',
    colors: {
      background: '#282a36',
      foreground: '#f8f8f2',
      card: '#44475a',
      cardHover: '#6272a4',
      border: '#6272a4',
      accent: '#bd93f9',
      muted: '#44475a',
      mutedForeground: '#6272a4',
      secondary: '#44475a',
      secondaryForeground: '#f8f8f2',
      primary: '#bd93f9',
      primaryForeground: '#282a36',
      destructive: '#ff5555',
      success: '#50fa7b',
      warning: '#f1fa8c',
    },
  },
  nightowl: {
    name: 'nightowl',
    displayName: 'Night Owl',
    colors: {
      background: '#011627',
      foreground: '#d6deeb',
      card: '#1e2a3e',
      cardHover: '#2a3f5f',
      border: '#2a3f5f',
      accent: '#82aaff',
      muted: '#1e2a3e',
      mutedForeground: '#637777',
      secondary: '#1e2a3e',
      secondaryForeground: '#d6deeb',
      primary: '#82aaff',
      primaryForeground: '#011627',
      destructive: '#ef5350',
      success: '#addb67',
      warning: '#ffcb6b',
    },
  },
  monokai: {
    name: 'monokai',
    displayName: 'Monokai Pro',
    colors: {
      background: '#2d2a2e',
      foreground: '#fcfcfa',
      card: '#403e41',
      cardHover: '#5b595c',
      border: '#5b595c',
      accent: '#ab9df2',
      muted: '#403e41',
      mutedForeground: '#939293',
      secondary: '#403e41',
      secondaryForeground: '#fcfcfa',
      primary: '#ab9df2',
      primaryForeground: '#2d2a2e',
      destructive: '#ff6188',
      success: '#a9dc76',
      warning: '#ffd866',
    },
  },
  github: {
    name: 'github',
    displayName: 'GitHub',
    colors: {
      background: '#0d1117',
      foreground: '#e6edf3',
      card: '#161b22',
      cardHover: '#21262d',
      border: '#30363d',
      accent: '#2f81f7',
      muted: '#161b22',
      mutedForeground: '#7d8590',
      secondary: '#161b22',
      secondaryForeground: '#e6edf3',
      primary: '#2f81f7',
      primaryForeground: '#ffffff',
      destructive: '#f85149',
      success: '#3fb950',
      warning: '#d29922',
    },
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  return themes[themeName];
};

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  // Apply theme class for compatibility with existing code
  root.className = theme.name === 'light' ? '' : 'dark';
};