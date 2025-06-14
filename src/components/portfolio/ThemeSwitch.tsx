import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibilitySettings } from "@/hooks/use-accessibility-settings";
import { useAccessibilityLabels, useAriaLabels } from "@/hooks/use-content";

export const ThemeSwitch = () => {
  const { settings, toggleTheme } = useAccessibilitySettings();
  const labels = useAccessibilityLabels();
  const aria = useAriaLabels();

  const handleThemeToggle = () => {
    toggleTheme();

    // Anunciar cambio a lectores de pantalla
    const newTheme = settings.theme === "light" ? "dark" : "light";
    const themeLabel = newTheme === "light" ? labels.light : labels.dark;
    const announcement = `${labels.theme} cambiado a ${themeLabel}`;
    announceToScreenReader(announcement);
  };

  const announceToScreenReader = (message: string) => {
    const announcer = document.createElement("div");
    announcer.setAttribute("aria-live", "polite");
    announcer.setAttribute("aria-atomic", "true");
    announcer.className = "sr-only";
    announcer.textContent = message;
    document.body.appendChild(announcer);
    setTimeout(() => {
      if (document.body.contains(announcer)) {
        document.body.removeChild(announcer);
      }
    }, 1000);
  };

  const isDark = settings.theme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleThemeToggle}
      className={`
        gap-2 bg-control border-control hover:bg-control-hover 
        focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 
        theme-transition relative min-w-[2.5rem] flex items-center justify-center
      `}
      aria-label={`${aria.themeSwitch} - ${labels.theme}: ${isDark ? labels.dark : labels.light}`}
      title={aria.themeSwitch}
    >
      {/* Container for icons */}
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Icono de sol (tema claro) */}
        <Sun
          size={16}
          className={`
            absolute transition-all duration-300 text-control-icon
            ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}
          `}
          aria-hidden="true"
        />

        {/* Icono de luna (tema oscuro) */}
        <Moon
          size={16}
          className={`
            absolute transition-all duration-300 text-control-icon
            ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}
          `}
          aria-hidden="true"
        />
      </div>

      {/* Texto del tema actual */}
      <span className="hidden sm:inline text-xs ml-1 text-control">
        {isDark ? labels.dark : labels.light}
      </span>
    </Button>
  );
};
