import { useState } from "react";
import { Type, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useAccessibilitySettings,
  type FontSize,
} from "@/hooks/use-accessibility-settings";
import { useAccessibilityLabels, useAriaLabels } from "@/hooks/use-content";

export const FontSizeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateFontSize } = useAccessibilitySettings();
  const labels = useAccessibilityLabels();
  const aria = useAriaLabels();

  const fontSizes: { value: FontSize; label: string }[] = [
    { value: "small", label: labels.small },
    { value: "medium", label: labels.medium },
    { value: "large", label: labels.large },
    { value: "extra-large", label: labels.extraLarge },
  ];

  const currentFontSize = fontSizes.find((f) => f.value === settings.fontSize);

  const handleFontSizeChange = (size: FontSize) => {
    updateFontSize(size);
    setIsOpen(false);

    // Anunciar cambio a lectores de pantalla
    const announcement = `${labels.fontSize} cambiado a ${fontSizes.find((f) => f.value === size)?.label}`;
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

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-control border-control hover:bg-control-hover focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 theme-transition"
          aria-label={aria.fontSizeMenu}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <Type size={16} className="text-control-icon" aria-hidden="true" />
          <span className="hidden sm:inline text-xs text-control">
            {currentFontSize?.label}
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
        aria-label="Selector de tamaño de fuente"
      >
        {fontSizes.map((size) => (
          <DropdownMenuItem
            key={size.value}
            onClick={() => handleFontSizeChange(size.value)}
            className={`cursor-pointer flex items-center justify-between theme-transition text-control hover:bg-control-hover focus:bg-control-hover ${
              settings.fontSize === size.value
                ? "bg-portfolio-accent/10 text-portfolio-accent font-medium"
                : ""
            }`}
            aria-current={settings.fontSize === size.value ? "true" : undefined}
          >
            <span>{size.label}</span>
            {settings.fontSize === size.value && (
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
