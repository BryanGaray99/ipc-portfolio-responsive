import { useAccessibilitySettings } from "./use-accessibility-settings";
import contentData from "../data/content.json";

export const useContent = () => {
  const { settings } = useAccessibilitySettings();
  const content = contentData[settings.language];

  return {
    content,
    currentLanguage: settings.language,
  };
};

// Helper hook for specific sections
export const useNavigation = () => {
  const { content } = useContent();
  return content.navigation;
};

export const useAccessibilityLabels = () => {
  const { content } = useContent();
  return content.accessibility;
};

export const useAriaLabels = () => {
  const { content } = useContent();
  return content.aria;
};

export const useHeroContent = () => {
  const { content } = useContent();
  return content.hero;
};

export const useAboutContent = () => {
  const { content } = useContent();
  return content.about;
};

export const useProjectsContent = () => {
  const { content } = useContent();
  return content.projects;
};

export const useFooterContent = () => {
  const { content } = useContent();
  return content.footer;
};
