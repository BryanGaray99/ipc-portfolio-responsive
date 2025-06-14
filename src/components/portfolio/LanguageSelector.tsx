import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useAccessibilitySettings,
  type Language,
} from "@/hooks/use-accessibility-settings";
import { useAccessibilityLabels, useAriaLabels } from "@/hooks/use-content";

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateLanguage } = useAccessibilitySettings();
  const labels = useAccessibilityLabels();
  const aria = useAriaLabels();

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: "es", label: labels.spanish, flag: "🇪🇸" },
    { value: "en", label: labels.english, flag: "🇺🇸" },
  ];

  const currentLanguage = languages.find((l) => l.value === settings.language);

  const handleLanguageChange = (language: Language) => {
    updateLanguage(language);
    setIsOpen(false);

    // No anunciar aquí ya que el idioma puede cambiar y confundir al usuario
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-control border-control hover:bg-control-hover focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 theme-transition"
          aria-label={aria.languageMenu}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <Globe size={16} className="text-control-icon" aria-hidden="true" />
          <span className="hidden sm:inline text-xs text-control">
            {currentLanguage?.flag} {currentLanguage?.label}
          </span>
          <span className="sm:hidden text-sm text-control" aria-hidden="true">
            {currentLanguage?.flag}
          </span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 text-control-icon ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-40 bg-control backdrop-blur-sm border border-control shadow-lg theme-transition"
        aria-label="Selector de idioma"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.value}
            onClick={() => handleLanguageChange(language.value)}
            className={`cursor-pointer flex items-center justify-between theme-transition text-control hover:bg-control-hover focus:bg-control-hover ${
              settings.language === language.value
                ? "bg-portfolio-accent/10 text-portfolio-accent font-medium"
                : ""
            }`}
            aria-current={
              settings.language === language.value ? "true" : undefined
            }
          >
            <span className="flex items-center gap-2">
              <span aria-hidden="true">{language.flag}</span>
              {language.label}
            </span>
            {settings.language === language.value && (
              <div
                className="w-2 h-2 bg-portfolio-accent rounded-full"
                aria-hidden="true"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
