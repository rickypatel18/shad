import CartSection from "./CartSection";
import Logo from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

const NavigationHeader = () => {
  return (
    <div className="flex justify-between w-[100%] lg:w-[80%] h-[60px] md:h-[68px] lg:h-[78px] items-center ">
      <NavigationLinks />
      <Logo />
      <CartSection />
    </div>
  );
};

export default NavigationHeader;
