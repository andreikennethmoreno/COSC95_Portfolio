import React from "react";
import { Heart } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-background)'
      }}
    >
      <div className="pt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div
            className="flex items-center"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            <span>© {currentYear} Kenneth Moreno. Made with</span>
            <Heart size={16} className="mx-2" style={{ color: 'var(--color-destructive)' }} />
            <span>and lots of coffee.</span>
          </div>
          <div
            className="text-sm"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            <span>Designed & Built by Kenneth Moreno</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;