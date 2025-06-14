import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useNavigation, useAriaLabels } from "@/hooks/use-content";

interface ContactButtonProps {
  className?: string;
  variant?: "default" | "mobile";
}

export const ContactButton = ({
  className,
  variant = "default",
}: ContactButtonProps) => {
  const navigation = useNavigation();
  const aria = useAriaLabels();

  const handleContactClick = () => {
    const subject = encodeURIComponent(
      "Contacto desde portafolio - Interés en colaboración",
    );
    const body = encodeURIComponent(
      "Hola Bryan,\n\nMe puse en contacto contigo a través de tu portafolio web. Me gustaría discutir sobre:\n\n[Describe aquí el motivo de tu contacto]\n\nQuedo atento a tu respuesta.\n\nSaludos cordiales.",
    );
    window.location.href = `mailto:bryangarayacademico@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleContactClick();
    }
  };

  if (variant === "mobile") {
    return (
      <Button
        onClick={handleContactClick}
        onKeyDown={handleKeyDown}
        size="sm"
        className={`bg-[#2B187A] hover:bg-[#1f1156] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2B187A] focus:ring-offset-2 theme-transition ${className}`}
        aria-label={aria.contactEmail}
        title={aria.contactEmail}
      >
        <Mail size={16} className="mr-2" aria-hidden="true" />
        {navigation.contact}
      </Button>
    );
  }

  return (
    <Button
      onClick={handleContactClick}
      onKeyDown={handleKeyDown}
      size="lg"
      className={`bg-[#2B187A] hover:bg-[#1f1156] text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2B187A] focus:ring-offset-2 shadow-lg hover:shadow-xl theme-transition ${className}`}
      aria-label={aria.contactEmail}
      title={aria.contactEmail}
    >
      <Mail size={20} className="mr-2" aria-hidden="true" />
      {navigation.contact}
    </Button>
  );
};
