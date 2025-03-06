import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
    return <button
        className="bg-[#00B207]   hover:bg-[#049909] flex justify-center items-center mt-[20px] gap-[15px] text-[14px] lg:text-[16px] font-[600] rounded-[43px] h-[51px] w-[191px] text-[#ffffff]">{children}</button>;
};

export default Button;
