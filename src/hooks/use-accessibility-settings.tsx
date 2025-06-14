import { useState, useEffect, createContext, useContext } from "react";

// Tipos para las configuraciones de accesibilidad
export type FontSize = "small" | "medium" | "large" | "extra-large";
export type Language = "es" | "en";
export type Theme = "light" | "dark";

interface AccessibilitySettings {
  fontSize: FontSize;
  language: Language;
  theme: Theme;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateFontSize: (size: FontSize) => void;
  updateLanguage: (language: Language) => void;
  updateTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  resetSettings: () => void;
}

// Configuraciones por defecto
const defaultSettings: AccessibilitySettings = {
  fontSize: "medium",
  language: "es",
  theme: "light",
};

// Contexto de accesibilidad
const AccessibilityContext = createContext<AccessibilityContextType | null>(
  null,
);

// Provider del contexto de accesibilidad
export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Cargar configuraciones desde localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("accessibility-settings");
      if (saved) {
        try {
          return { ...defaultSettings, ...JSON.parse(saved) };
        } catch {
          return defaultSettings;
        }
      }
    }
    return defaultSettings;
  });

  // Guardar configuraciones en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessibility-settings", JSON.stringify(settings));

      // Aplicar configuraciones al DOM
      const root = document.documentElement;

      // Aplicar tamaño de fuente
      const fontSizes = {
        small: "14px",
        medium: "16px",
        large: "18px",
        "extra-large": "22px",
      };
      root.style.fontSize = fontSizes[settings.fontSize];

      // Aplicar tema
      root.setAttribute("data-theme", settings.theme);

      // Aplicar idioma
      root.setAttribute("lang", settings.language);
    }
  }, [settings]);

  const updateFontSize = (fontSize: FontSize) => {
    setSettings((prev) => ({ ...prev, fontSize }));
  };

  const updateLanguage = (language: Language) => {
    setSettings((prev) => ({ ...prev, language }));
  };

  const updateTheme = (theme: Theme) => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const toggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        updateFontSize,
        updateLanguage,
        updateTheme,
        toggleTheme,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

// Hook para usar el contexto de accesibilidad
export const useAccessibilitySettings = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibilitySettings must be used within an AccessibilityProvider",
    );
  }
  return context;
};

// Hook para traducciones simples
export const useTranslations = () => {
  const { settings } = useAccessibilitySettings();

  const translations = {
    es: {
      // Navegación
      home: "Inicio",
      about: "Acerca de mí",
      projects: "Proyectos",
      contact: "Contáctame",

      // Accesibilidad
      accessibility: "Accesibilidad",
      fontSize: "Tamaño de fuente",
      language: "Idioma",
      theme: "Tema",
      small: "Pequeño",
      medium: "Mediano",
      large: "Grande",
      extraLarge: "Muy grande",
      spanish: "Español",
      english: "Inglés",
      light: "Claro",
      dark: "Oscuro",
      reset: "Restablecer",

      // Contenido principal
      hello: "Hola, soy Bryan Garay",
      jobTitle: "Ingeniero de Software",
      heroDescription:
        "Desarrollador especializado en frontend y backend con experiencia en automatización de pruebas. Apasionado por crear soluciones tecnológicas accesibles e innovadoras.",
      aboutTitle: "Acerca de Mí",
      projectsTitle: "Mis Proyectos",

      // ARIA labels
      skipToMain: "Saltar al contenido principal",
      mainNavigation: "Navegación principal del sitio",
      goToHome: "Ir a la sección de inicio",
      goToAbout: "Ir a la sección acerca de mí",
      goToProjects: "Ir a la sección de proyectos",
      contactEmail: "Contactar a Bryan Garay por correo electrónico",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      fontSizeMenu: "Abrir menú de tamaño de fuente",
      languageMenu: "Abrir menú de idioma",
      themeSwitch: "Cambiar entre tema claro y oscuro",
    },
    en: {
      // Navigation
      home: "Home",
      about: "About Me",
      projects: "Projects",
      contact: "Contact Me",

      // Accessibility
      accessibility: "Accessibility",
      fontSize: "Font Size",
      language: "Language",
      theme: "Theme",
      small: "Small",
      medium: "Medium",
      large: "Large",
      extraLarge: "Extra Large",
      spanish: "Spanish",
      english: "English",
      light: "Light",
      dark: "Dark",
      reset: "Reset",

      // Main content
      hello: "Hello, I'm Bryan Garay",
      jobTitle: "Software Engineer",
      heroDescription:
        "Developer specialized in frontend and backend with experience in test automation. Passionate about creating accessible and innovative technological solutions.",
      aboutTitle: "About Me",
      projectsTitle: "My Projects",

      // ARIA labels
      skipToMain: "Skip to main content",
      mainNavigation: "Main site navigation",
      goToHome: "Go to home section",
      goToAbout: "Go to about me section",
      goToProjects: "Go to projects section",
      contactEmail: "Contact Bryan Garay via email",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      fontSizeMenu: "Open font size menu",
      languageMenu: "Open language menu",
      themeSwitch: "Toggle between light and dark theme",
    },
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[settings.language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, currentLanguage: settings.language };
};
