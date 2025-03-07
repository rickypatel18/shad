import { ReactNode } from "react";

interface CustomButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  hoverBgColor?: string;
  textSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
}

const CustomButton = ({
  text,
  bgColor = "bg-[#00B207]",
  textColor = "text-white",
  hoverTextColor = "hover:text-[#E5E5E5]",
  hoverBgColor = "hover:bg-[#049909]",
  textSize = "text-sm",
  fontWeight = "font-medium",
  width = "w-[140px] md:w-[170px] lg:w-[191px]",
  height = "h-[40px] md:h-[45px] lg:h-[51px]",
  children,
}: CustomButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-[15px] rounded-[43px] transition-all duration-300 ease-in-out 
        ${bgColor} ${hoverBgColor}  
        ${textSize} ${fontWeight} ${width} ${height}
        ${textColor} ${hoverTextColor} `}
    >
      {text}
      {children}
    </button>
  );
};

export default CustomButton;
