import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  className?: string;
  variant?: "default" | "mobile";
}

export const ContactButton = ({
  className,
  variant = "default",
}: ContactButtonProps) => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:bryan.garay@example.com?subject=Hello Bryan!";
  };

  if (variant === "mobile") {
    return (
      <Button
        onClick={handleContactClick}
        size="sm"
        className={`bg-[#2B187A] hover:bg-[#1f1156] text-white transition-colors duration-200 ${className}`}
      >
        Contact me
      </Button>
    );
  }

  return (
    <Button
      onClick={handleContactClick}
      size="lg"
      className={`bg-[#2B187A] hover:bg-[#1f1156] text-white transition-all duration-200 transform hover:scale-105 ${className}`}
    >
      Contact me
    </Button>
  );
};
