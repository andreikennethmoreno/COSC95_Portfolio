export interface Theme {
  name: string;
  displayName: string;
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardHover: string;
    border: string;
    accent: string;
    muted: string;
    mutedForeground: string;
    secondary: string;
    secondaryForeground: string;
    primary: string;
    primaryForeground: string;
    destructive: string;
    success: string;
    warning: string;
  };
}

export type ThemeName = 'light' | 'dark' | 'onedark' | 'dracula' | 'nightowl' | 'monokai' | 'github';