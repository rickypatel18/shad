import { Badge as UIBadge } from "@/components/ui/badge/badge";

interface CustomBadgeProps {
  text: string;
  bgColor?: string; // Background color
  textColor?: string; // Text color
  textSize?: string; // Font size
  fontWeight?: string; // Font weight
}

export function CustomBadge({
  text,
  bgColor = "",
  textColor = "text-black",
  textSize = "text-sm",
  fontWeight = "font-medium",
}: CustomBadgeProps) {
  return (
    <UIBadge className={`${bgColor} ${textColor} ${textSize} ${fontWeight} px-3 py-1 `}>
      {text}
    </UIBadge>
  );
}
